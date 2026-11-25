import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { gsap } from "gsap";
import { boardArt, landmarks, pawnStart } from "./board-data";
import { playSound } from "../chrome/sound";

type Options = {
  host: HTMLElement;
  labels: Map<string, HTMLElement>;
  onReady: () => void;
  onHover: (slug: string | null) => void;
  onOverview: (on: boolean) => void;
};

const BOARD_W = 4.8;
const BOARD_D = BOARD_W * (boardArt.height / boardArt.width);
const BOARD_T = 0.07;
const TOP = BOARD_T;
const STANDEE_H = 0.72;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const toWorld = (u: number, v: number) => new THREE.Vector3((u - 0.5) * BOARD_W, TOP, (v - 0.5) * BOARD_D);

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

function pipTexture(count: number) {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#EFE6D4";
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#142426";
  const spots: Record<number, [number, number][]> = {
    1: [[.5, .5]], 2: [[.28, .28], [.72, .72]], 3: [[.26, .26], [.5, .5], [.74, .74]],
    4: [[.28, .28], [.72, .28], [.28, .72], [.72, .72]], 5: [[.27, .27], [.73, .27], [.5, .5], [.27, .73], [.73, .73]],
    6: [[.28, .24], [.72, .24], [.28, .5], [.72, .5], [.28, .76], [.72, .76]],
  };
  spots[count].forEach(([x, y]) => { ctx.beginPath(); ctx.arc(x * size, y * size, size * 0.085, 0, Math.PI * 2); ctx.fill(); });
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function cardBackTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 160; canvas.height = 224;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#EFE6D4"; ctx.fillRect(0, 0, 160, 224);
  ctx.fillStyle = "#5CC0A4"; ctx.fillRect(10, 10, 140, 204);
  ctx.strokeStyle = "#EFE6D4"; ctx.lineWidth = 4;
  for (let y = 26; y < 224; y += 30) for (let x = 26; x < 160; x += 30) { ctx.beginPath(); ctx.moveTo(x, y - 9); ctx.lineTo(x + 9, y); ctx.lineTo(x, y + 9); ctx.lineTo(x - 9, y); ctx.closePath(); ctx.stroke(); }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makePawn() {
  const points = [
    [0, 0], [0.13, 0], [0.135, 0.02], [0.125, 0.045], [0.1, 0.06], [0.08, 0.1], [0.06, 0.2], [0.052, 0.27], [0.075, 0.29], [0.075, 0.305],
    [0.05, 0.315], [0.072, 0.34], [0.082, 0.38], [0.075, 0.42], [0.05, 0.45], [0, 0.462],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const geometry = new THREE.LatheGeometry(points, 48);
  const material = new THREE.MeshStandardMaterial({ color: "#EF644D", roughness: 0.5, metalness: 0 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function mountBoard({ host, labels, onReady, onHover, onOverview }: Options) {
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
  scene.add(new THREE.HemisphereLight("#a9d4c7", "#08191a", 0.55));
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

  // The table.
  const felt = feltTexture();
  const table = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ map: felt, roughness: 1, color: "#ffffff" }));
  table.rotation.x = -Math.PI / 2;
  table.receiveShadow = true;
  scene.add(table);

  const world = new THREE.Group();
  scene.add(world);

  const loader = new THREE.TextureLoader();
  const loadTexture = (src: string) => new Promise<THREE.Texture>((resolve, reject) => loader.load(src, texture => { texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = renderer.capabilities.getMaxAnisotropy(); resolve(texture); }, undefined, reject));

  // The board: a thick slab of card with the art on top.
  const board = new THREE.Group();
  world.add(board);
  const edge = new THREE.MeshStandardMaterial({ color: "#E4D7BD", roughness: 0.92 });
  const boardTop = new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.85 });
  const slab = new THREE.Mesh(new RoundedBoxGeometry(BOARD_W, BOARD_T, BOARD_D, 2, 0.012), [edge, edge, boardTop, edge, edge, edge]);
  slab.position.y = BOARD_T / 2;
  slab.castShadow = true;
  slab.receiveShadow = true;
  board.add(slab);
  const artPlane = new THREE.Mesh(new THREE.PlaneGeometry(BOARD_W - 0.02, BOARD_D - 0.02), boardTop);
  artPlane.rotation.x = -Math.PI / 2;
  artPlane.position.y = BOARD_T + 0.0015;
  artPlane.receiveShadow = true;
  board.add(artPlane);

  // Standees.
  type Piece = { slug: string; group: THREE.Group; card: THREE.Mesh; lift: number; liftTarget: number; base: THREE.Vector3; label?: HTMLElement };
  const pieces: Piece[] = [];
  const hitTargets: THREE.Object3D[] = [];
  landmarks.forEach(mark => {
    const group = new THREE.Group();
    const base = toWorld(mark.u, mark.v);
    group.position.copy(base);
    const width = STANDEE_H * (mark.w / mark.h);
    const geometry = new THREE.PlaneGeometry(width, STANDEE_H);
    geometry.translate(0, STANDEE_H / 2 - 0.01, 0);
    const material = new THREE.MeshStandardMaterial({ transparent: false, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.88 });
    const card = new THREE.Mesh(geometry, material);
    card.castShadow = true;
    card.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, alphaTest: 0.45 });
    card.userData.slug = mark.slug;
    group.add(card);
    group.rotation.y = -0.12;
    world.add(group);
    hitTargets.push(card);
    pieces.push({ slug: mark.slug, group, card, lift: 0, liftTarget: 0, base, label: labels.get(mark.slug) });
    loadTexture(mark.image).then(texture => {
      material.map = texture;
      material.needsUpdate = true;
      (card.customDepthMaterial as THREE.MeshDepthMaterial).map = texture;
      (card.customDepthMaterial as THREE.MeshDepthMaterial).needsUpdate = true;
    }).catch(() => { group.visible = false; });
  });

  // Pawn, dice and cards.
  const pawn = makePawn();
  const pawnHome = toWorld(pawnStart.u, pawnStart.v);
  pawn.position.copy(pawnHome);
  world.add(pawn);

  const dieMaterials = [1, 6, 2, 5, 3, 4].map(n => new THREE.MeshStandardMaterial({ map: pipTexture(n), roughness: 0.55 }));
  const dice = [0, 1].map(() => {
    const die = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.2, 0.2, 4, 0.035), dieMaterials);
    die.castShadow = true; die.receiveShadow = true;
    world.add(die);
    return die;
  });
  const diceRest = [new THREE.Vector3(-BOARD_W / 2 - 0.45, 0.1, BOARD_D / 2 - 0.25), new THREE.Vector3(-BOARD_W / 2 - 0.2, 0.1, BOARD_D / 2 + 0.12)];
  dice.forEach((die, i) => { die.position.copy(diceRest[i]); die.rotation.set(0.0, 0.5 + i, 0); });

  const cardMaterial = new THREE.MeshStandardMaterial({ map: cardBackTexture(), roughness: 0.7 });
  const cardEdge = new THREE.MeshStandardMaterial({ color: "#EFE6D4", roughness: 0.8 });
  const fan = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const c = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.006, 0.5), [cardEdge, cardEdge, cardMaterial, cardEdge, cardEdge, cardEdge]);
    c.position.set(i * 0.05, i * 0.007, 0);
    c.rotation.y = -0.55 + i * 0.22;
    c.castShadow = true; c.receiveShadow = true;
    fan.add(c);
  }
  fan.position.set(BOARD_W / 2 + 0.55, 0.004, -BOARD_D / 2 + 0.45);
  world.add(fan);

  // Camera rig.
  const rig = {
    target: new THREE.Vector3(0.05, 0, 0.05),
    radius: 7.6, polar: 0.92, azimuth: -0.2,
    pan: 0, panVelocity: 0, overview: 0, scroll: 0, intro: reduced ? 1 : 0,
  };
  const pointer = { x: 0, y: 0, sx: 0, sy: 0, inside: false };
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let hovered: Piece | null = null;
  let width = 1, height = 1, frame = 0, running = false, visible = true, disposed = false;

  const resize = () => {
    width = host.clientWidth; height = host.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Fit the board: short, wide screens pull back and slide the board right of the headline.
    const aspect = width / height;
    rig.radius = width < 700 ? 10.8 : 7.4 + Math.max(0, aspect - 1.6) * 2.4;
    rig.target.x = width < 700 ? 0 : -0.3 - Math.min(1, Math.max(0, aspect - 1.2)) * 0.8;
    rig.target.z = width < 700 ? 0.4 : 0.15;
    camera.updateProjectionMatrix();
  };
  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  // Interaction.
  let downAt = 0, downX = 0, lastX = 0, dragging = false, holdTimer = 0;
  const setPointer = (event: PointerEvent) => {
    const rect = host.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  };
  const onMove = (event: PointerEvent) => {
    setPointer(event);
    pointer.inside = true;
    if (downAt) {
      const dx = event.clientX - lastX;
      if (Math.abs(event.clientX - downX) > 6) { dragging = true; window.clearTimeout(holdTimer); }
      if (dragging) { rig.panVelocity = -dx * 0.0045; rig.pan = clamp(rig.pan + rig.panVelocity, -1.4, 1.4); }
      lastX = event.clientX;
    }
  };
  const onDown = (event: PointerEvent) => {
    if (event.button !== 0) return;
    setPointer(event);
    downAt = performance.now(); downX = lastX = event.clientX; dragging = false;
    if (!coarse) holdTimer = window.setTimeout(() => { if (!dragging) { gsap.to(rig, { overview: 1, duration: 1.1, ease: "expo.out" }); onOverview(true); playSound("slide"); } }, 520);
  };
  const onUp = () => {
    window.clearTimeout(holdTimer);
    const wasOverview = rig.overview > 0.05;
    if (wasOverview) { gsap.to(rig, { overview: 0, duration: 0.9, ease: "expo.out" }); onOverview(false); }
    if (!dragging && !wasOverview && hovered && performance.now() - downAt < 500) {
      playSound("tock");
      gsap.to(hovered.group.scale, { x: 0.9, y: 1.12, z: 1, duration: 0.12, yoyo: true, repeat: 1, ease: "power2.out" });
      const link = hovered.label;
      window.setTimeout(() => link?.click(), 140);
    }
    downAt = 0; dragging = false;
  };
  const onLeave = () => { pointer.inside = false; };
  host.addEventListener("pointermove", onMove);
  host.addEventListener("pointerdown", onDown);
  window.addEventListener("pointerup", onUp);
  host.addEventListener("pointerleave", onLeave);
  const onScroll = () => { rig.scroll = clamp(window.scrollY / Math.max(1, height), 0, 1.2); };
  window.addEventListener("scroll", onScroll, { passive: true });

  const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) loop(); }, { threshold: 0 });
  visibility.observe(host);
  const onTab = () => { if (!document.hidden) loop(); };
  document.addEventListener("visibilitychange", onTab);

  const tmp = new THREE.Vector3();
  const update = (t: number) => {
    // Smoothed pointer for lean and the lamp.
    const ease = reduced ? 1 : 0.06;
    pointer.sx = lerp(pointer.sx, pointer.inside ? pointer.x : 0, ease);
    pointer.sy = lerp(pointer.sy, pointer.inside ? pointer.y : 0, ease);
    if (!downAt) { rig.panVelocity *= 0.92; rig.pan = clamp(rig.pan + rig.panVelocity, -1.4, 1.4); if (Math.abs(rig.panVelocity) < 0.0004) rig.pan *= 0.985; }

    const intro = rig.intro;
    const polar = lerp(0.18, rig.polar, intro) - pointer.sy * 0.045 + rig.scroll * 0.22 - rig.overview * 0.62;
    const azimuth = lerp(-0.9, rig.azimuth, intro) + pointer.sx * 0.09 + rig.pan * 0.12;
    const radius = lerp(15, rig.radius, intro) + rig.overview * 1.6 + rig.scroll * 1.4;
    const target = tmp.copy(rig.target).add(new THREE.Vector3(rig.pan, -rig.scroll * 0.6, 0));
    camera.position.set(
      target.x + radius * Math.sin(polar) * Math.sin(azimuth),
      target.y + radius * Math.cos(polar),
      target.z + radius * Math.sin(polar) * Math.cos(azimuth),
    );
    camera.lookAt(target);

    // The lamp leans toward the pointer.
    lamp.target.position.set(pointer.sx * 1.6 + rig.pan, 0, -pointer.sy * 1.1);
    lamp.position.x = -3.8 + pointer.sx * 0.8;

    // Hover.
    if (pointer.inside && !dragging && rig.overview < 0.1) {
      ndc.set(pointer.x, pointer.y);
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObjects(hitTargets, false)[0];
      const next = hit ? pieces.find(p => p.card === hit.object) ?? null : null;
      if (next !== hovered) {
        hovered = next;
        onHover(hovered?.slug ?? null);
        if (hovered) playSound("flick");
        host.style.cursor = hovered ? "pointer" : "";
      }
    } else if (hovered && !pointer.inside) { hovered = null; onHover(null); }

    pieces.forEach((piece, index) => {
      piece.liftTarget = piece === hovered ? 1 : 0;
      piece.lift = lerp(piece.lift, piece.liftTarget, 0.14);
      piece.group.position.y = piece.base.y + piece.lift * 0.14 + Math.sin(t * 0.0012 + index) * 0.004;
      piece.card.rotation.z = piece.lift * 0.05 * Math.sin(t * 0.004);
      // Labels follow the piece on screen.
      if (piece.label) {
        tmp.copy(piece.group.position).add(new THREE.Vector3(0, STANDEE_H + 0.12, 0)).project(camera);
        const x = (tmp.x * 0.5 + 0.5) * width;
        const y = (-tmp.y * 0.5 + 0.5) * height;
        piece.label.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
      }
    });

    // The pawn turns toward whatever is hovered.
    if (hovered) {
      const angle = Math.atan2(hovered.group.position.x - pawn.position.x, hovered.group.position.z - pawn.position.z);
      pawn.rotation.y = lerp(pawn.rotation.y, angle, 0.1);
    }
  };

  const render = (t: number) => {
    update(t);
    renderer.render(scene, camera);
  };
  const loop = () => {
    if (running || disposed) return;
    running = true;
    const tick = (t: number) => {
      if (!visible || document.hidden || disposed) { running = false; return; }
      render(t);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
  };

  // Intro choreography, run when the box opens.
  const intro = () => {
    if (reduced) { rig.intro = 1; return; }
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    rig.intro = 0;
    board.position.y = 2.2; board.rotation.set(0.5, -0.4, 0.15);
    tl.to(rig, { intro: 1, duration: 2.6, ease: "expo.inOut" }, 0);
    tl.to(board.position, { y: 0, duration: 1.4, ease: "bounce.out" }, 0.25);
    tl.to(board.rotation, { x: 0, y: 0, z: 0, duration: 1.3, ease: "power3.out" }, 0.25);
    pieces.forEach((piece, i) => {
      piece.group.rotation.x = -Math.PI / 2;
      piece.group.scale.setScalar(0.001);
      tl.to(piece.group.scale, { x: 1, y: 1, z: 1, duration: 0.3, ease: "power2.out" }, 1.25 + i * 0.11);
      tl.to(piece.group.rotation, { x: 0, duration: 0.9, ease: "back.out(2.4)", onStart: () => playSound("flick") }, 1.25 + i * 0.11);
    });
    pawn.position.set(pawnHome.x - 1.2, 2.4, pawnHome.z + 0.6);
    tl.to(pawn.position, { x: pawnHome.x, z: pawnHome.z, duration: 0.9, ease: "power2.out" }, 2.1);
    tl.to(pawn.position, { y: pawnHome.y, duration: 0.9, ease: "bounce.out", onComplete: () => playSound("tock") }, 2.1);
    dice.forEach((die, i) => {
      die.position.set(diceRest[i].x - 2.5, 1.6 + i * 0.3, diceRest[i].z + 1.2);
      tl.to(die.position, { x: diceRest[i].x, z: diceRest[i].z, duration: 1.2, ease: "power3.out" }, 0.9 + i * 0.12);
      tl.to(die.position, { y: diceRest[i].y, duration: 1.2, ease: "bounce.out" }, 0.9 + i * 0.12);
      tl.fromTo(die.rotation, { x: 6 + i, y: 4, z: 3 }, { x: Math.PI * 2 * (i ? 1 : 2), y: 0.5 + i, z: 0, duration: 1.3, ease: "power3.out", onStart: () => playSound("roll") }, 0.9 + i * 0.12);
    });
    fan.position.x += 2; fan.rotation.y = 0.8;
    tl.to(fan.position, { x: BOARD_W / 2 + 0.55, duration: 1.3 }, 1.4);
    tl.to(fan.rotation, { y: 0, duration: 1.3 }, 1.4);
  };

  // Wait for the board art before showing anything.
  loadTexture(boardArt.src).then(texture => {
    if (disposed) return;
    boardTop.map = texture;
    boardTop.needsUpdate = true;
    render(performance.now());
    onReady();
    loop();
    const gate = document.documentElement.classList.contains("w-gate-up");
    if (gate) window.addEventListener("gf:gate-open", intro, { once: true });
    else intro();
  }).catch(() => { /* the static board stays */ });

  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    visibility.disconnect();
    document.removeEventListener("visibilitychange", onTab);
    host.removeEventListener("pointermove", onMove);
    host.removeEventListener("pointerdown", onDown);
    window.removeEventListener("pointerup", onUp);
    host.removeEventListener("pointerleave", onLeave);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("gf:gate-open", intro);
    gsap.killTweensOf([rig, board.position, board.rotation, pawn.position]);
    scene.traverse(object => {
      const mesh = object as THREE.Mesh;
      mesh.geometry?.dispose();
      const materials = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : [];
      materials.forEach(material => { (material as THREE.MeshStandardMaterial).map?.dispose(); material.dispose(); });
    });
    renderer.dispose();
    renderer.domElement.remove();
  };
}
