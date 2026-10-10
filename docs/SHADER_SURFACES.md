# Decorative shader surfaces

Added 2026-10-11. Uses the MIT-licensed core engine from shaders 4.0.4 with its MeshGradient and Glass definitions. The editor, preset service, installer and telemetry are not used. Public licence notices retain the shaders and TypeGPU copyrights.

The hero retains its original product orbit, dimensions, artwork and captions. A masked, low-contrast cream, mint and petrol mesh sits behind it. Each process phone has a small refractive gradient behind its header; HTML text stays outside the shader. Phone borders and document toolbars use static glass highlights.

Shader code is dynamically imported only after page load, a 1.2-second delay and an idle slot, for a visible surface. The renderer is capped at 24 frames per second and no more than one canvas pixel per CSS pixel. Gaussian blur, chromatic aberration and pointer tracking are disabled. Surfaces pause offscreen and when the document is hidden, and GPU resources are released on teardown.

CSS provides the complete server-rendered fallback. JavaScript-disabled, WebGPU-unavailable, data-saving, reduced-motion, reduced-transparency and forced-colour environments retain still surfaces without importing the shader module. Failed GPU initialization returns to the fallback.

Sources: https://github.com/shader-effects-inc/shaders and the pinned package definitions. Content, metadata, schema, forms and contact routing are unchanged.
