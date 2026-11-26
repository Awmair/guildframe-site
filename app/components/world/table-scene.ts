import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { gsap } from "gsap";
import { tableArt, wings, type Wing, type WingSlug } from "./table-data";
import { playSound } from "../chrome/sound";

export type Face = "proto" | "final";
export type HoverInfo = { slug: WingSlug; mode: "rest" | "frame" | "turn" } | null;
export type TableApi = { dispose: () => void; bring: (slug: WingSlug) => void; flip: () => void; togglePlay: () => void };

type Options = {
  host: HTMLElement;
  labels: Map<string, HTMLElement>;
  caption: HTMLElement | null;
  onReady: () => void;
  onHover: (info: HoverInfo) => void;
  onOverview: (on: boolean) => void;
  onStatus: (slug: WingSlug | null, face: Face) => void;
  onPlaying: (playing: boolean) => void;
};

// The mat and the frame. The frame is the logo: a 100 by 100 mark scaled onto the mat.
const MAT_W = 4.2, MAT_D = 2.8, MAT_T = 0.03;
const FRAME = { x: 0.25, z: 0.1 };
const S = 0.02; // world units per mark unit
const BAR_H = 0.045; // thickness of the frame pieces
const PIECE_H = 0.95; // a piece's height in the frame
const REST = 0.63; // its scale at rest
const HINGE_Z = FRAME.z - 0.84;
const PAGE_W = 0.9, PAGE_H = 1.5;
const LEAN = -0.14;
const FLAT = -Math.PI / 2;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** Mark coordinates (0 to 100) to the frame group's local space. */
const m = (mx: number, my: number) => new THREE.Vector3((mx - 50) * S, 0, (my - 50) * S);

function feltTexture() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#133033";
  ctx.fillRect(0, 0, size, size);
  const image = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < image.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 22;
    image.data[i] += n; image.data[i + 1] += n; image.data[i + 2] += n;
  }
  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(26, 26);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** A flat stadium (a bar with round ends) lying on the mat, running along x from `from` to `from + length`. */
function stadium(length: number, radius: number, from = -length / 2) {
  const shape = new THREE.Shape();
  shape.moveTo(from, -radius);
  shape.lineTo(from + length, -radius);
  shape.absarc(from + length, 0, radius, -Math.PI / 2, Math.PI / 2, false);
  shape.lineTo(from, radius);
  shape.absarc(from, 0, radius, Math.PI / 2, Math.PI * 1.5, false);
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: BAR_H - 0.008, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 18 });
  geometry.rotateX(-Math.PI / 2);
  geometry.translate(0, 0.004, 0);
  return geometry;
}

export function mountTable({ host, labels, caption, onReady, onHover, onOverview, onStatus, onPlaying }: Options): TableApi {
  const coarse = matchMedia("(pointer: coarse)").matches;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, coarse ? 1.5 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.className = "w-board-canvas";
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog("#0E2325", 9, 22);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);

  // Lights: one warm lamp, a cool fill, a soft sky.
  scene.add(new THREE.HemisphereLight("#a9d4c7", "#08191a", 0.6));
  const lamp = new THREE.SpotLight("#ffd8a1", 95, 24, 0.62, 0.75, 1.6);
  lamp.position.set(-3.8, 6.6, 3.4);
  lamp.castShadow = true;
  lamp.shadow.mapSize.set(coarse ? 1024 : 2048, coarse ? 1024 : 2048);
  lamp.shadow.bias = -0.0004;
  lamp.shadow.radius = 6;
  lamp.shadow.camera.near = 2;
  lamp.shadow.camera.far = 16;
  scene.add(lamp, lamp.target);
  const rim = new THREE.DirectionalLight("#7fb7c9", 0.55);
  rim.position.set(5, 3, 4);
  scene.add(rim);

  const felt = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ map: feltTexture(), roughness: 1 }));
  felt.rotation.x = -Math.PI / 2;
  felt.receiveShadow = true;
  scene.add(felt);

  const world = new THREE.Group();
  scene.add(world);

  const loader = new THREE.TextureLoader();
  const loadTexture = (src: string) => new Promise<THREE.Texture>((resolve, reject) => loader.load(src, texture => { texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = renderer.capabilities.getMaxAnisotropy(); resolve(texture); }, undefined, reject));
  const cutout = (texture?: THREE.Texture) => new THREE.MeshStandardMaterial({ map: texture ?? null, alphaTest: 0.45, roughness: 0.88 });
  const depthFor = (texture?: THREE.Texture) => new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: texture ?? null, alphaTest: 0.45 });

  // The cutting mat.
  const mat = new THREE.Group();
  world.add(mat);
  const matEdge = new THREE.MeshStandardMaterial({ color: "#10292B", roughness: 0.9 });
  const slab = new THREE.Mesh(new RoundedBoxGeometry(MAT_W, MAT_T, MAT_D, 2, 0.012), matEdge);
  slab.position.y = MAT_T / 2;
  slab.castShadow = true;
  slab.receiveShadow = true;
  mat.add(slab);
  const matTop = new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.9 });
  const matArt = new THREE.Mesh(new THREE.PlaneGeometry(MAT_W - 0.02, MAT_D - 0.02), matTop);
  matArt.rotation.x = -Math.PI / 2;
  matArt.position.y = MAT_T + 0.0015;
  matArt.receiveShadow = true;
  mat.add(matArt);

  // Flat dressing on the mat: tools and colour swatches.
  const flat = (src: string, w: number, h: number, width: number, x: number, z: number, turn: number) => {
    const material = new THREE.MeshStandardMaterial({ alphaTest: 0.5, roughness: 0.8 });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, width * (h / w)), material);
    mesh.rotation.set(-Math.PI / 2, 0, turn);
    mesh.position.set(x, MAT_T + 0.004, z);
    mesh.receiveShadow = true;
    mesh.visible = false;
    mat.add(mesh);
    loadTexture(src).then(texture => { material.map = texture; material.needsUpdate = true; mesh.visible = true; wake(400); }).catch(() => {});
    return mesh;
  };
  const tools = flat(tableArt.dressing.tools.src, tableArt.dressing.tools.w, tableArt.dressing.tools.h, 1.1, 1.35, -0.95, -0.21);
  const swatches = flat(tableArt.dressing.swatches.src, tableArt.dressing.swatches.w, tableArt.dressing.swatches.h, 0.8, -1.75, -0.05, 0.31);

  // The frame: the logo laid on the mat. Right and bottom are finished, top and left are still dashes,
  // and the coral point sits in the top right corner where the work is up to.
  const frame = new THREE.Group();
  frame.position.set(FRAME.x, MAT_T, FRAME.z);
  world.add(frame);
  const cream = new THREE.MeshStandardMaterial({ color: "#EFE6D4", roughness: 0.82 });
  const coral = new THREE.MeshStandardMaterial({ color: "#EF644D", roughness: 0.62 });
  const bar = (geometry: THREE.BufferGeometry, at: THREE.Vector3, turnY = 0) => {
    const mesh = new THREE.Mesh(geometry, cream);
    mesh.position.copy(at);
    mesh.rotation.y = turnY;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    frame.add(mesh);
    return mesh;
  };
  const R = 7 * S, LEN = 60 * S;
  const solidRight = bar(stadium(LEN, R, 0), m(80, 20), -Math.PI / 2);
  const solidBottom = bar(stadium(LEN, R, 0), m(80, 80), Math.PI);
  // Hidden solids that grow behind the point when the work is done.
  const doneTop = bar(stadium(LEN, R, 0), m(80, 20), Math.PI);
  const doneLeft = bar(stadium(LEN, R, 0), m(20, 20), -Math.PI / 2);
  doneTop.scale.x = doneLeft.scale.x = 0.0001;
  doneTop.visible = doneLeft.visible = false;
  const dashGeometry = new THREE.BoxGeometry(9 * S, BAR_H * 0.8, 6 * S);
  dashGeometry.translate(0, BAR_H * 0.4, 0);
  const cornerGeometry = new THREE.BoxGeometry(7 * S, BAR_H * 0.8, 7 * S);
  cornerGeometry.translate(0, BAR_H * 0.4, 0);
  const dashes = [
    bar(dashGeometry, m(62.5, 20)), bar(dashGeometry, m(47.5, 20)), bar(dashGeometry, m(32.5, 20)),
    bar(cornerGeometry, m(20.5, 20.5)),
    bar(dashGeometry, m(20, 32.5), Math.PI / 2), bar(dashGeometry, m(20, 47.5), Math.PI / 2), bar(dashGeometry, m(20, 62.5), Math.PI / 2),
  ];
  const pipGeometry = new THREE.CylinderGeometry(10.5 * S, 10.5 * S, 0.07, 48);
  pipGeometry.translate(0, 0.035, 0);
  const pip = new THREE.Mesh(pipGeometry, coral);
  pip.castShadow = true;
  pip.position.copy(m(80, 20));
  frame.add(pip);
  const pipState = { q: 0, hop: 0 };
  /** The point's place along the draft: 0 is the top right corner, .5 the top left, 1 the bottom left. */
  const placePip = () => {
    const q = pipState.q;
    const at = q <= 0.5 ? m(lerp(80, 20, q * 2), 20) : m(20, lerp(20, 80, (q - 0.5) * 2));
    pip.position.set(at.x, Math.sin(pipState.hop * Math.PI) * 0.3, at.z);
    doneTop.visible = q > 0.001;
    doneTop.scale.x = Math.max(0.0001, Math.min(1, q * 2));
    doneLeft.visible = q > 0.5;
    doneLeft.scale.x = Math.max(0.0001, (q - 0.5) * 2);
  };

  // The campaign page card, hinged on the mat behind the frame.
  const pageHinge = new THREE.Group();
  pageHinge.position.set(FRAME.x, MAT_T, HINGE_Z);
  pageHinge.rotation.x = FLAT;
  pageHinge.visible = false;
  world.add(pageHinge);
  const pageFront = new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.8 });
  const pageCard = new THREE.Mesh(new THREE.BoxGeometry(PAGE_W, PAGE_H, 0.012), [cream, cream, cream, cream, pageFront, cream]);
  pageCard.position.y = PAGE_H / 2;
  pageCard.castShadow = true;
  pageCard.receiveShadow = true;
  pageHinge.add(pageCard);
  const pageTextures = new Map<WingSlug, THREE.Texture>();

  // The parcel stands at the back right.
  const parcelMaterial = cutout();
  const parcelH = 0.5;
  const parcelW = parcelH * (tableArt.dressing.parcel.w / tableArt.dressing.parcel.h);
  const parcelGeometry = new THREE.PlaneGeometry(parcelW, parcelH);
  parcelGeometry.translate(0, parcelH / 2 - 0.01, 0);
  const parcel = new THREE.Mesh(parcelGeometry, parcelMaterial);
  parcel.castShadow = true;
  parcel.customDepthMaterial = depthFor();
  const parcelStand = new THREE.Group();
  parcelStand.position.set(1.75, MAT_T, -0.35);
  parcelStand.rotation.y = -0.3;
  parcelStand.add(parcel);
  parcelStand.visible = false;
  world.add(parcelStand);
  loadTexture(tableArt.dressing.parcel.src).then(texture => {
    parcelMaterial.map = texture; parcelMaterial.needsUpdate = true;
    (parcel.customDepthMaterial as THREE.MeshDepthMaterial).map = texture;
    (parcel.customDepthMaterial as THREE.MeshDepthMaterial).needsUpdate = true;
    parcelStand.visible = true; wake(400);
  }).catch(() => {});

  // The three pieces. Each is a standee with the prototype on the front and the finished piece on the back.
  type Piece = {
    wing: Wing; group: THREE.Group; lifter: THREE.Group; spin: THREE.Group; faces: THREE.Mesh[];
    flip: number; lift: number; base: THREE.Vector3; label?: HTMLElement; ready: boolean;
  };
  const pieces: Piece[] = [];
  const hitTargets: THREE.Object3D[] = [pageCard];
  wings.forEach(wing => {
    const group = new THREE.Group();
    const base = new THREE.Vector3(wing.rest[0], MAT_T, wing.rest[1]);
    group.position.copy(base);
    group.scale.setScalar(REST);
    group.rotation.y = -0.12;
    const lifter = new THREE.Group();
    const spin = new THREE.Group();
    group.add(lifter);
    lifter.add(spin);
    const width = PIECE_H * (wing.w / wing.h);
    const faces = [0, 1].map(side => {
      const geometry = new THREE.PlaneGeometry(width, PIECE_H);
      geometry.translate(0, PIECE_H / 2 - 0.01, 0);
      const mesh = new THREE.Mesh(geometry, cutout());
      mesh.castShadow = true;
      mesh.customDepthMaterial = depthFor();
      mesh.position.z = side ? -0.002 : 0.002;
      mesh.rotation.y = side ? Math.PI : 0;
      spin.add(mesh);
      hitTargets.push(mesh);
      return mesh;
    });
    group.visible = false;
    world.add(group);
    const piece: Piece = { wing, group, lifter, spin, faces, flip: 0, lift: 0, base, label: labels.get(wing.slug), ready: false };
    pieces.push(piece);
    Promise.all([loadTexture(wing.proto), loadTexture(wing.final)]).then(textures => {
      textures.forEach((texture, side) => {
        const face = faces[side];
        (face.material as THREE.MeshStandardMaterial).map = texture;
        (face.material as THREE.MeshStandardMaterial).needsUpdate = true;
        (face.customDepthMaterial as THREE.MeshDepthMaterial).map = texture;
        (face.customDepthMaterial as THREE.MeshDepthMaterial).needsUpdate = true;
      });
      piece.ready = true;
      group.visible = true;
      wake(400);
    }).catch(() => {});
    loadTexture(wing.page).then(texture => pageTextures.set(wing.slug, texture)).catch(() => {});
  });
  const framePos = new THREE.Vector3(FRAME.x, MAT_T, FRAME.z + 0.02);
  const pieceOf = (object: THREE.Object3D | undefined) => object ? pieces.find(p => p.faces.includes(object as THREE.Mesh)) ?? null : null;

  // Camera rig.
  const rig = {
    target: new THREE.Vector3(-0.55, 0, 0.1),
    radius: 7.2, polar: 0.92, azimuth: -0.2, drift: 0,
    pan: 0, panVelocity: 0, overview: 0, scroll: 0, intro: reduced ? 1 : 0,
  };
  const pointer = { x: 0, y: 0, sx: 0, sy: 0, inside: false };
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let width = 1, height = 1, frameId = 0, running = false, visible = true, disposed = false, short = false;

  const resize = () => {
    width = host.clientWidth; height = host.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    const aspect = width / height;
    const wide = Math.max(0, aspect - 1.6), tall = Math.max(0, 1.6 - aspect);
    rig.radius = 7.2 + wide * 2.27 + tall * 4;
    rig.polar = 0.92 + wide * 0.08;
    rig.target.x = -0.55 - wide * 0.98 + tall * 0.6;
    short = width > 900 && height <= 620;
    tools.visible = !short && Boolean((tools.material as THREE.MeshStandardMaterial).map);
    swatches.visible = !short && Boolean((swatches.material as THREE.MeshStandardMaterial).map);
    parcelStand.visible = !short && Boolean(parcelMaterial.map);
    camera.updateProjectionMatrix();
    wake(200);
  };

  // The render loop sleeps when nothing moves.
  let awakeUntil = 0;
  function wake(ms = 600) {
    awakeUntil = Math.max(awakeUntil, performance.now() + ms);
    loop();
  }

  // ----- the cycle -----
  let current: Piece | null = null;
  let cycle: gsap.core.Timeline | null = null;
  let next: gsap.core.Tween | null = null;
  let runsLeft = 5;
  let userPaused = false, hoverPaused = false, scrollPaused = false, turning = false;
  let face: Face = "proto";
  let faceSlug: WingSlug | null = null;
  const paused = () => userPaused || hoverPaused || scrollPaused || turning || rig.overview > 0.05;
  const setFace = (value: Face) => {
    const slug = current?.wing.slug ?? null;
    if (value !== face || slug !== faceSlug) { face = value; faceSlug = slug; onStatus(slug, face); }
  };
  const syncPause = () => {
    const p = paused();
    if (p) { cycle?.pause(); next?.pause(); }
    else { cycle?.resume(); next?.resume(); wake(Math.max(800, ((cycle?.duration() ?? 0) - (cycle?.time() ?? 0)) * 1000 + 300)); }
  };
  const schedule = () => {
    next?.kill(); next = null;
    if (reduced || runsLeft <= 0 || !current) { onPlaying(false); return; }
    next = gsap.delayedCall(2.2, () => {
      runsLeft--;
      const index = current ? pieces.indexOf(current) : -1;
      bring(pieces[(index + 1) % pieces.length], true);
    });
    if (paused()) next.pause();
  };

  const hop = (piece: Piece, to: THREE.Vector3, toScale: number, toTurn: number) => {
    const proxy = { p: 0 };
    const from = new THREE.Vector3();
    let fromScale = 1, fromTurn = 0;
    return gsap.to(proxy, {
      p: 1, duration: 0.7, ease: "power2.inOut",
      onStart: () => { from.copy(piece.group.position); fromScale = piece.group.scale.x; fromTurn = piece.group.rotation.y; playSound("flick"); },
      onUpdate: () => {
        const p = proxy.p;
        piece.group.position.set(lerp(from.x, to.x, p), lerp(from.y, to.y, p) + Math.sin(p * Math.PI) * 0.45, lerp(from.z, to.z, p));
        piece.group.scale.setScalar(lerp(fromScale, toScale, p));
        piece.group.rotation.y = lerp(fromTurn, toTurn, p);
      },
    });
  };
  const squash = (piece: Piece) => gsap.timeline()
    .to(piece.lifter.scale, { x: 0.92, y: 1.1, z: 1, duration: 0.12, ease: "power2.out", onStart: () => playSound("tock") })
    .to(piece.lifter.scale, { x: 1, y: 1, z: 1, duration: 0.2, ease: "power2.out" });
  const setFlip = (piece: Piece, value: number) => { piece.flip = value; piece.spin.rotation.y = value * Math.PI; };
  const flipTo = (piece: Piece, value: number, duration: number, ease = "power3.inOut") => gsap.to(piece, { flip: value, duration, ease, onUpdate: () => setFlip(piece, piece.flip) });
  const pageUp = (piece: Piece) => gsap.fromTo(pageHinge.rotation, { x: FLAT }, {
    x: LEAN, duration: 0.9, ease: "back.out(1.6)", immediateRender: false,
    onStart: () => {
      const texture = pageTextures.get(piece.wing.slug);
      pageFront.map = texture ?? null; pageFront.needsUpdate = true;
      pageHinge.visible = true; playSound("slide");
    },
  });
  const pageDown = () => gsap.to(pageHinge.rotation, { x: FLAT, duration: 0.5, ease: "power2.in", onComplete: () => { pageHinge.visible = false; } });
  const pipRun = () => gsap.timeline()
    .fromTo(pipState, { q: 0 }, { q: 1, duration: 1.2, ease: "power2.inOut", immediateRender: false, onUpdate: placePip })
    .to(frame.scale, { x: 1.05, z: 1.05, duration: 0.16, ease: "power2.out" })
    .to(frame.scale, { x: 1, z: 1, duration: 0.3, ease: "power2.out" });
  const pipHome = () => {
    const start = { q: 0 };
    return gsap.timeline()
      .call(() => { start.q = pipState.q; })
      .to(pipState, { q: 0, hop: 1, duration: 0.5, ease: "power2.inOut", onUpdate: () => {
        // Hop straight home in an arc, and let the finished draft fade back to dashes.
        const shrink = Math.min(start.q, pipState.q);
        doneTop.scale.x = Math.max(0.0001, Math.min(1, shrink * 2));
        doneLeft.scale.x = Math.max(0.0001, (shrink - 0.5) * 2);
        doneTop.visible = shrink > 0.001; doneLeft.visible = shrink > 0.5;
        const t = 1 - pipState.q / Math.max(0.0001, start.q);
        const from = start.q <= 0.5 ? m(lerp(80, 20, start.q * 2), 20) : m(20, lerp(20, 80, (start.q - 0.5) * 2));
        const to = m(80, 20);
        pip.position.set(lerp(from.x, to.x, t), Math.sin(t * Math.PI) * 0.3, lerp(from.z, to.z, t));
      } })
      .set(pipState, { hop: 0 });
  };
  const lampPulse = () => gsap.timeline().to(lamp, { intensity: 125, duration: 0.4, ease: "sine.out" }).to(lamp, { intensity: 95, duration: 0.6, ease: "sine.in" });

  function bring(piece: Piece, auto = false) {
    if (disposed) return;
    if (!auto) runsLeft = 6;
    const old = cycle;
    cycle = null;
    if (old) { old.eventCallback("onComplete", null); old.progress(1); old.kill(); }
    next?.kill(); next = null;
    const prev = current;
    const tl = gsap.timeline({ paused: true, onComplete: () => { cycle = null; schedule(); } });
    let at = 0;
    if (prev && prev !== piece) {
      if (pageHinge.visible) tl.add(pageDown(), 0);
      if (pipState.q > 0) tl.add(pipHome(), 0);
      tl.add(hop(prev, prev.base, REST, -0.12), 0.25);
      at = 0.55;
    } else if (prev === piece) {
      if (pageHinge.visible) tl.add(pageDown(), 0);
      if (pipState.q > 0) tl.add(pipHome(), 0);
      tl.add(flipTo(piece, 0, 0.6), 0.2);
      at = 0.9;
    }
    current = piece;
    if (prev !== piece) {
      tl.add(hop(piece, framePos, 1, -0.08), at);
      if (piece.flip > 0) tl.add(flipTo(piece, 0, 0.55, "power2.inOut"), at + 0.1);
      tl.to(pipState, { hop: 0.35, duration: 0.18, ease: "power2.out", onUpdate: placePip, yoyo: true, repeat: 1 }, at + 0.45);
      tl.add(squash(piece), at + 0.7);
      at += 1.5;
    }
    tl.call(() => setFace("proto"), [], Math.max(0, at - 0.7));
    // The make: it turns to its finished face, the point runs the draft into a finished frame, the page stands up.
    tl.add(flipTo(piece, 1, 0.8), at);
    tl.call(() => playSound("flick"), [], at);
    tl.add(lampPulse(), at);
    tl.add(pipRun(), at + 0.1);
    tl.add(pageUp(piece), at + 0.6);
    tl.call(() => setFace("final"), [], at + 1.5);
    tl.to(rig, { drift: rig.drift > 0 ? 0 : 0.03, duration: 2.2, ease: "sine.inOut" }, at + 1.5);
    cycle = tl;
    onPlaying(!reduced && !userPaused);
    if (reduced) { tl.progress(1); wake(200); return; }
    tl.play();
    if (paused()) tl.pause();
    wake(tl.duration() * 1000 + 400);
  }

  // ----- interaction -----
  let hovered: Piece | null = null, hoverFrame = false;
  let downAt = 0, downX = 0, lastX = 0, dragging = false, holdTimer = 0, turnStart = 0;
  let savedFlips: number[] | null = null;
  const setPointer = (event: PointerEvent) => {
    const rect = host.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  };
  const pickAt = () => {
    ndc.set(pointer.x, pointer.y);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(hitTargets, false).find(h => h.object.visible && (h.object === pageCard ? pageHinge.visible : pieceOf(h.object)?.group.visible));
    if (!hit) return { piece: null, framed: false };
    if (hit.object === pageCard) return { piece: current, framed: true };
    const piece = pieceOf(hit.object);
    return { piece, framed: piece !== null && piece === current };
  };
  const report = () => onHover(turning && current ? { slug: current.wing.slug, mode: "turn" } : hovered ? { slug: hovered.wing.slug, mode: hoverFrame ? "frame" : "rest" } : null);
  const skipIntro = () => { if (introTl && introTl.isActive()) introTl.progress(1); };

  const onMove = (event: PointerEvent) => {
    setPointer(event);
    pointer.inside = true;
    wake(1500);
    if (!downAt) return;
    const dx = event.clientX - lastX;
    if (Math.abs(event.clientX - downX) > 6 && !dragging) { dragging = true; window.clearTimeout(holdTimer); }
    if (dragging && turning && current) {
      setFlip(current, clamp(turnStart + (event.clientX - downX) / 220, -0.15, 1.15));
      setFace(current.flip > 0.5 ? "final" : "proto");
    } else if (dragging) {
      rig.panVelocity = -dx * 0.0045;
      rig.pan = clamp(rig.pan + rig.panVelocity, -1.4, 1.4);
    }
    lastX = event.clientX;
  };
  const onLabel = (event: PointerEvent) => event.target instanceof Element && event.target.closest(".w-board-labels, .w-board-hint, .w-table-caption") !== null;
  const onDown = (event: PointerEvent) => {
    if (event.button !== 0 || onLabel(event)) return;
    skipIntro();
    setPointer(event);
    downAt = performance.now(); downX = lastX = event.clientX; dragging = false;
    const { piece, framed } = pickAt();
    if (framed && piece && piece === current && piece.faces.length && !coarse) {
      turning = true; turnStart = piece.flip;
      gsap.killTweensOf(piece);
      syncPause(); report();
    }
    if (!coarse && !turning) holdTimer = window.setTimeout(() => {
      if (dragging) return;
      savedFlips = pieces.map(p => p.flip);
      pieces.forEach(p => flipTo(p, 1, 0.7));
      gsap.to(rig, { overview: 1, duration: 1.1, ease: "expo.out", onUpdate: () => wake(100) });
      onOverview(true); playSound("slide"); syncPause(); wake(1400);
    }, 520);
    wake(800);
  };
  const onUp = (event: PointerEvent) => {
    window.clearTimeout(holdTimer);
    const wasOverview = rig.overview > 0.05 || savedFlips !== null;
    if (wasOverview) {
      gsap.to(rig, { overview: 0, duration: 0.9, ease: "expo.out", onUpdate: () => wake(100), onComplete: syncPause });
      if (savedFlips) { const flips = savedFlips; pieces.forEach((p, i) => flipTo(p, flips[i], 0.6)); savedFlips = null; }
      onOverview(false); wake(1200);
    }
    if (turning && current) {
      const piece = current;
      turning = false;
      if (dragging) {
        const target = piece.flip > 0.5 ? 1 : 0;
        flipTo(piece, target, 0.5, "expo.out");
        setFace(target ? "final" : "proto");
        wake(700);
      }
      syncPause(); report();
    }
    if (downAt && !dragging && !wasOverview && performance.now() - downAt < 500) {
      if (event.pointerType !== "mouse") setPointer(event);
      const { piece, framed } = event.pointerType === "mouse" && hovered ? { piece: hovered, framed: hoverFrame } : pickAt();
      if (piece && framed) {
        playSound("tock");
        squash(piece);
        const link = piece.label;
        window.setTimeout(() => link?.click(), 140);
      } else if (piece) {
        bring(piece);
      }
    }
    downAt = 0; dragging = false;
  };
  const onLeave = () => { pointer.inside = false; wake(1200); };
  host.addEventListener("pointermove", onMove);
  host.addEventListener("pointerdown", onDown);
  window.addEventListener("pointerup", onUp);
  host.addEventListener("pointerleave", onLeave);
  const onScroll = () => {
    rig.scroll = clamp(window.scrollY / Math.max(1, height), 0, 1.2);
    const fold = rig.scroll > 0.3;
    if (fold !== scrollPaused) {
      scrollPaused = fold;
      if (fold && pageHinge.visible && !(cycle && cycle.isActive())) pageDown();
      if (!fold && current && current.flip > 0.5 && !pageHinge.visible && !(cycle && cycle.isActive())) pageUp(current);
      syncPause();
    }
    if (introTl?.isActive() && window.scrollY > 4) skipIntro();
    wake(600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  const onKey = () => skipIntro();
  window.addEventListener("keydown", onKey);

  const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) wake(600); }, { threshold: 0 });
  visibility.observe(host);
  const onTab = () => { if (!document.hidden) wake(600); };
  document.addEventListener("visibilitychange", onTab);

  // ----- per frame -----
  const tmp = new THREE.Vector3();
  const lift = new THREE.Vector3();
  const project = (point: THREE.Vector3) => {
    tmp.copy(point).project(camera);
    return [(tmp.x * 0.5 + 0.5) * width, (-tmp.y * 0.5 + 0.5) * height] as const;
  };
  const update = () => {
    const ease = reduced ? 1 : 0.07;
    pointer.sx = lerp(pointer.sx, pointer.inside ? pointer.x : 0, ease);
    pointer.sy = lerp(pointer.sy, pointer.inside ? pointer.y : 0, ease);
    if (!downAt) { rig.panVelocity *= 0.92; rig.pan = clamp(rig.pan + rig.panVelocity, -1.4, 1.4); if (Math.abs(rig.panVelocity) < 0.0004) rig.pan *= 0.985; }

    const intro = rig.intro;
    const polar = lerp(0.18, rig.polar, intro) - pointer.sy * 0.045 + rig.scroll * 0.22 - rig.overview * 0.62;
    const azimuth = lerp(-0.9, rig.azimuth, intro) + pointer.sx * 0.09 + rig.pan * 0.12 + rig.drift;
    const radius = lerp(15, rig.radius, intro) + rig.overview * 1.6 + rig.scroll * 1.4;
    const target = tmp.copy(rig.target).add(lift.set(rig.pan, -rig.scroll * 0.6, 0));
    camera.position.set(
      target.x + radius * Math.sin(polar) * Math.sin(azimuth),
      target.y + radius * Math.cos(polar),
      target.z + radius * Math.sin(polar) * Math.cos(azimuth),
    );
    camera.lookAt(target);
    lamp.target.position.set(pointer.sx * 1.6 + rig.pan, 0, -pointer.sy * 1.1);
    lamp.position.x = -3.8 + pointer.sx * 0.8;

    // Hover.
    if (pointer.inside && !downAt && rig.overview < 0.1) {
      const { piece, framed } = pickAt();
      if (piece !== hovered || framed !== hoverFrame) {
        hovered = piece; hoverFrame = framed;
        if (hovered && !hoverFrame) playSound("flick");
        host.style.cursor = hovered ? "pointer" : "";
        const pause = Boolean(hovered && hoverFrame);
        if (pause !== hoverPaused) { hoverPaused = pause; syncPause(); }
        report();
      }
    } else if (hovered && !pointer.inside) {
      hovered = null; hoverFrame = false;
      if (hoverPaused) { hoverPaused = false; syncPause(); }
      report();
    }

    let moving = false;
    pieces.forEach(piece => {
      const target = piece === hovered && !hoverFrame ? 1 : 0;
      piece.lift = lerp(piece.lift, target, 0.16);
      if (Math.abs(piece.lift - target) > 0.002) moving = true;
      piece.lifter.position.y = piece.lift * 0.14 / piece.group.scale.x;
      if (piece.label) {
        const [x, y] = project(lift.copy(piece.group.position).add(tmp.set(0, (PIECE_H + 0.14) * piece.group.scale.y + piece.lift * 0.14, 0)));
        piece.label.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
        piece.label.classList.toggle("is-framed", piece === current);
      }
    });
    if (caption) {
      const [x, y] = project(lift.set(FRAME.x, MAT_T, FRAME.z + 0.86));
      caption.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, 0)`;
    }
    return moving || Math.abs(pointer.sx - (pointer.inside ? pointer.x : 0)) > 0.001 || Math.abs(rig.panVelocity) > 0.0004 || Math.abs(rig.pan) > 0.002;
  };

  let slow = 0, lastTick = 0, downgraded = false;
  const render = () => { const moving = update(); renderer.render(scene, camera); return moving; };
  function loop() {
    if (running || disposed) return;
    running = true;
    const tick = (t: number) => {
      if (!visible || document.hidden || disposed) { running = false; return; }
      const moving = render();
      // Drop the pixel ratio and the shadow map once if the frame rate struggles.
      if (lastTick && !downgraded) {
        slow = t - lastTick > 22 ? slow + 1 : 0;
        if (slow >= 3) {
          downgraded = true;
          renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
          lamp.shadow.mapSize.set(1024, 1024);
          lamp.shadow.map?.dispose(); (lamp.shadow as { map: THREE.WebGLRenderTarget | null }).map = null;
          resize();
        }
      }
      lastTick = t;
      if (!moving && t > awakeUntil && !downAt) { running = false; lastTick = 0; return; }
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
  }

  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  // ----- intro: the camera sweeps down, the mat settles, the frame draws itself, the pieces stand up -----
  let introTl: gsap.core.Timeline | null = null;
  const settle = () => {
    rig.intro = 1;
    if (!current) bring(pieces[0], true);
  };
  const intro = () => {
    if (reduced) { settle(); return; }
    const tl = gsap.timeline({ defaults: { ease: "expo.out" }, onUpdate: () => wake(200), onComplete: () => { introTl = null; } });
    introTl = tl;
    rig.intro = 0;
    tl.to(rig, { intro: 1, duration: 2.6, ease: "expo.inOut" }, 0);
    tl.from(mat.position, { y: 2.2, duration: 1.2, ease: "power3.out" }, 0.25);
    tl.from(mat.rotation, { x: 0.35, y: -0.3, z: 0.1, duration: 1.2, ease: "power3.out", onStart: () => playSound("slide") }, 0.25);
    tl.from(frame.position, { y: 2.2, duration: 1.2, ease: "power3.out" }, 0.25);
    tl.from(frame.rotation, { x: 0.35, y: -0.3, z: 0.1, duration: 1.2, ease: "power3.out" }, 0.25);
    tl.from(solidRight.scale, { x: 0.0001, duration: 0.55 }, 0.9);
    tl.from(solidBottom.scale, { x: 0.0001, duration: 0.6 }, 1.25);
    dashes.forEach((dash, i) => tl.from(dash.scale, { x: 0.0001, y: 0.0001, z: 0.0001, duration: 0.5, ease: "back.out(2.4)" }, 1.4 + i * 0.06));
    tl.fromTo(pip.position, { y: 1.2 }, { y: 0, duration: 0.8, ease: "bounce.out", immediateRender: true, onComplete: () => playSound("tock") }, 1.6);
    [...pieces.map(p => p.lifter), parcel].forEach((stand, i) => {
      tl.from(stand.rotation, { x: -Math.PI / 2, duration: 0.9, ease: "back.out(2.4)", onStart: () => playSound("flick") }, 1.3 + i * 0.1);
      tl.from(stand.scale, { x: 0.001, y: 0.001, z: 0.001, duration: 0.3, ease: "power2.out" }, 1.3 + i * 0.1);
    });
    tl.call(() => bring(pieces[0], true), [], 2.4);
  };

  // Wait for the mat and the first piece before showing anything.
  Promise.all([loadTexture(tableArt.mat), loadTexture(wings[0].proto)]).then(([texture]) => {
    if (disposed) return;
    matTop.map = texture;
    matTop.needsUpdate = true;
    render();
    onReady();
    wake(1000);
    if (reduced) { settle(); return; }
    const gate = document.documentElement.classList.contains("w-gate-up");
    if (gate) window.addEventListener("gf:gate-open", intro, { once: true });
    else intro();
  }).catch(() => { /* the still stays */ });

  return {
    bring: slug => { const piece = pieces.find(p => p.wing.slug === slug); if (piece && piece !== current) bring(piece); },
    flip: () => {
      if (!current) return;
      const target = current.flip > 0.5 ? 0 : 1;
      cycle?.pause(); next?.kill(); next = null;
      flipTo(current, target, reduced ? 0.01 : 0.6);
      setFace(target ? "final" : "proto");
      wake(800);
    },
    togglePlay: () => {
      userPaused = !userPaused;
      if (!userPaused) { runsLeft = 6; if (!cycle && !next) schedule(); }
      syncPause();
      onPlaying(!userPaused);
    },
    dispose: () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      cycle?.kill(); next?.kill(); introTl?.kill();
      resizeObserver.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", onTab);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      host.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("gf:gate-open", intro);
      gsap.killTweensOf([rig, lamp, pipState, frame.scale, pageHinge.rotation, ...pieces]);
      scene.traverse(object => {
        const mesh = object as THREE.Mesh;
        mesh.geometry?.dispose();
        const materials = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : [];
        materials.forEach(material => { (material as THREE.MeshStandardMaterial).map?.dispose(); material.dispose(); });
      });
      pageTextures.forEach(texture => texture.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
