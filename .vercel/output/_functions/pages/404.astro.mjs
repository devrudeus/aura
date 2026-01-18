import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DU3qj1gS.mjs';
import 'piccolore';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DjEXw9PQ.mjs';
import { $ as $$Layout, a as $$PageHead, b as $$Link, c as cn, d as buttonVariants } from '../chunks/Layout_BiJos8KZ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "???", icon: "lucide:circle-help" }] })} ${maybeRenderHead()}<section class="flex flex-col items-center justify-center gap-y-4 text-center"> <div class="max-w-md"> <h1 class="mb-4 text-3xl font-medium">404: Page not found</h1> <p class="prose">Oops! The page you're looking for doesn't exist.</p> </div> ${renderComponent($$result2, "Link", $$Link, { "href": "/", "class": cn(buttonVariants({ variant: "outline" }), "flex gap-x-1.5 group") }, { "default": ($$result3) => renderTemplate` <span class="transition-transform group-hover:-translate-x-1">&larr;</span> Go to home page
` })} </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "404" })}` })}`;
}, "C:/Users/WINDOWS10/Desktop/AURA/src/pages/404.astro", void 0);

const $$file = "C:/Users/WINDOWS10/Desktop/AURA/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
