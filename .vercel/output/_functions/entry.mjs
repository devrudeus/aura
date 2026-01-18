import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_boTF1wR8.mjs';
import { manifest } from './manifest_Dn71dNRm.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/chat.astro.mjs');
const _page4 = () => import('./pages/docs/api-reference.astro.mjs');
const _page5 = () => import('./pages/docs/code-examples.astro.mjs');
const _page6 = () => import('./pages/docs/getting-started.astro.mjs');
const _page7 = () => import('./pages/docs.astro.mjs');
const _page8 = () => import('./pages/robots.txt.astro.mjs');
const _page9 = () => import('./pages/work.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/chat.astro", _page3],
    ["src/pages/docs/api-reference.astro", _page4],
    ["src/pages/docs/code-examples.astro", _page5],
    ["src/pages/docs/getting-started.astro", _page6],
    ["src/pages/docs.astro", _page7],
    ["src/pages/robots.txt.ts", _page8],
    ["src/pages/work.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2c51ee26-6f65-458d-a98a-ef1d850118f4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
