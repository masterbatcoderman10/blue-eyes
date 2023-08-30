export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","imgs/be-1.avif","imgs/be-10.avif","imgs/be-11.avif","imgs/be-12.avif","imgs/be-2.avif","imgs/be-3.avif","imgs/be-4.avif","imgs/be-5.avif","imgs/be-6.avif","imgs/be-7.avif","imgs/be-8.avif","imgs/be-9.avif"]),
	mimeTypes: {".png":"image/png",".avif":"image/avif"},
	_: {
		client: {"start":"_app/immutable/entry/start.097bd7c1.js","app":"_app/immutable/entry/app.6c71c6a4.js","imports":["_app/immutable/entry/start.097bd7c1.js","_app/immutable/chunks/scheduler.fb34aa51.js","_app/immutable/chunks/singletons.7f6c92c6.js","_app/immutable/entry/app.6c71c6a4.js","_app/immutable/chunks/scheduler.fb34aa51.js","_app/immutable/chunks/index.1d67b316.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
