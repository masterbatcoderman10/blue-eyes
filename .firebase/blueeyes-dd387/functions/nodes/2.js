

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.21b66b02.js","_app/immutable/chunks/scheduler.fb34aa51.js","_app/immutable/chunks/index.1d67b316.js"];
export const stylesheets = ["_app/immutable/assets/2.0883a225.css"];
export const fonts = [];
