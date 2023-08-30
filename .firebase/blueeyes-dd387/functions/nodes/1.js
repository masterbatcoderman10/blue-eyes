

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fdfc193c.js","_app/immutable/chunks/scheduler.fb34aa51.js","_app/immutable/chunks/index.1d67b316.js","_app/immutable/chunks/singletons.7f6c92c6.js"];
export const stylesheets = [];
export const fonts = [];
