import {shaderRendererGPU, createGpuUniformsMap, rootPassthrough} from "shaders/core";
import MeshGradient from "shaders/core/MeshGradient";
import Glass from "shaders/core/Glass";

export interface ShaderController {
  setPlaying: (playing: boolean) => void;
  destroy: () => void;
}

function props(definition: {props: Record<string, {default: unknown}>}, overrides: Record<string, unknown>) {
  return {...Object.fromEntries(Object.entries(definition.props).map(([key, config]) => [key, config.default])), ...overrides};
}

function uniforms(definition: typeof MeshGradient | typeof Glass, values: Record<string, unknown>, id: string) {
  // The package's bridge widens each transform input to unknown, whereas its own
  // definitions retain specific inputs. Values here come from those definitions.
  return createGpuUniformsMap(definition as Parameters<typeof createGpuUniformsMap>[0], values, id);
}

/** Imports only the core engine and two definitions; no editor, registry or telemetry. */
export async function createShader(canvas: HTMLCanvasElement, kind: "mesh" | "glass", onReady: () => void, onUnavailable: () => void): Promise<ShaderController> {
  const renderer = shaderRendererGPU();
  let destroyed = false;
  let observer: ResizeObserver | undefined;
  const destroy = () => {
    if (destroyed) return;
    destroyed = true;
    observer?.disconnect();
    renderer.setOnReady(null);
    renderer.setOnUnavailable(null);
    renderer.cleanup();
    canvas.dataset.shaderPlaying = "false";
  };
  try {
    renderer.setOnReady(onReady);
    renderer.setOnUnavailable(onUnavailable);
    await renderer.initialize({canvas, observeElement: false, colorSpace: "srgb"});
    if (renderer.getFailureReason()) {
      destroy();
      return {setPlaying: () => {}, destroy};
    }
    renderer.setFrameRateCap(24);
    renderer.setResolutionScale(1 / Math.max(1, window.devicePixelRatio));
    renderer.registerNode("surface", rootPassthrough.fragment, null, null, {}, rootPassthrough);

    const gradient = props(MeshGradient, {
      stops: kind === "mesh" ? [
        {color: "#fff5e7", position: 0},
        {color: "#b9e5c9", position: .38},
        {color: "#81b5a8", position: .7},
        {color: "#315e5b", position: 1},
      ] : [
        {color: "#fffdf8", position: 0},
        {color: "#daeadd", position: .55},
        {color: "#a2c8b8", position: 1},
      ],
      count: 4, smoothness: 2.8, variation: 0, swirl: .12,
      drift: .3, wrapping: 0, speed: .14, seed: 8,
    });
    const glassShape = () => JSON.stringify({
      type: "roundedRectSDF", radius: canvas.clientWidth / Math.max(1, canvas.clientHeight) * .5,
      height: .5, rounding: .16,
    });
    if (kind === "glass") {
      const glass = props(Glass, {
        shape: glassShape(),
        shapeType: "roundedRectSDF", refraction: .22, blur: 0, thickness: .14,
        aberration: 0, highlight: .18, highlightColor: "#fffdf8",
        fresnel: .08, fresnelColor: "#fffdf8", tintColor: "#b9e5c9", tintIntensity: .06,
      });
      renderer.registerNode("glass", Glass.fragment, "surface", {blendMode: "normal", opacity: 1, renderOrder: 0}, uniforms(Glass, glass, "glass"), Glass);
    }
    renderer.registerNode("mesh", MeshGradient.fragment, kind === "glass" ? "glass" : "surface", {blendMode: "normal", opacity: 1, renderOrder: 0}, uniforms(MeshGradient, gradient, "mesh"), MeshGradient);
    const resize = () => {
      renderer.resize(canvas.clientWidth, canvas.clientHeight);
      if (kind === "glass") renderer.updateUniformValue("glass", "shape", glassShape());
    };
    resize();
    observer = new ResizeObserver(resize);
    observer.observe(canvas);
    return {
      setPlaying: playing => {
        if (destroyed) return;
        if (playing) renderer.startAnimation();
        else renderer.stopAnimation();
        canvas.dataset.shaderPlaying = String(playing);
      },
      destroy,
    };
  } catch (error) {
    destroy();
    throw error;
  }
}
