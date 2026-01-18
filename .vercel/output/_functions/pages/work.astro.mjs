import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, f as renderSlot, m as maybeRenderHead, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, _ as __astro_tag_component__, b as createVNode, F as Fragment } from '../chunks/astro/server_DU3qj1gS.mjs';
import 'piccolore';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DjEXw9PQ.mjs';
import { c as cn, e as $$Icon, b as $$Link, f as formatMonthYear, g as extractDomain, $ as $$Layout, a as $$PageHead } from '../chunks/Layout_BiJos8KZ.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { Slot, Separator as Separator$1 } from 'radix-ui';
import { cva } from 'class-variance-authority';
import { $ as $$Image, V as VALID_INPUT_FORMATS } from '../chunks/_astro_assets_DkNPFUzD.mjs';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from '../chunks/index_D34Bo7Tx.mjs';
import * as devalue from 'devalue';
import 'clsx';
export { renderers } from '../renderers.mjs';

const badgeVariants = cva(
  "inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        muted: "border-transparent bg-muted text-muted-foreground [a&]:hover:bg-muted/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
        outline: "text-foreground [a&]:hover:bg-muted [a&]:hover:text-[oklch(from_var(--color-foreground)_calc(l+0.25)_c_h)]",
        code: "font-mono border-warm-gold/30 bg-warm-gold/15 text-warm-gold [a&]:hover:bg-warm-gold/25 [a&]:hover:border-warm-gold",
        success: "font-mono border-cyan-glow/30 bg-cyan-glow/15 text-cyan-glow [a&]:hover:bg-cyan-glow/25 [a&]:hover:border-cyan-glow"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

const $$Astro$1 = createAstro("https://aura.dev");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Badge;
  const {
    variant = "muted",
    className = "",
    children,
    text,
    showIcon = true
  } = Astro2.props;
  const categoryMappings = [
    {
      keywords: ["crypto"],
      style: {
        color: "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-200",
        icon: "lucide:key"
      }
    },
    {
      keywords: ["web"],
      style: {
        color: "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-200",
        icon: "lucide:globe"
      }
    },
    {
      keywords: ["reverse", "rev"],
      style: {
        color: "bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-200",
        icon: "lucide:rotate-ccw"
      }
    },
    {
      keywords: ["pwn", "binary exploitation"],
      style: {
        color: "bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-200",
        icon: "lucide:zap"
      }
    },
    {
      keywords: ["misc"],
      style: {
        color: "bg-stone-50 text-stone-700 dark:bg-stone-950/30 dark:text-stone-200",
        icon: "lucide:puzzle"
      }
    },
    {
      keywords: ["forensic"],
      style: {
        color: "bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-200",
        icon: "lucide:search"
      }
    },
    {
      keywords: ["osint"],
      style: {
        color: "bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-200",
        icon: "lucide:eye"
      }
    },
    {
      keywords: ["blockchain"],
      style: {
        color: "bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-200",
        icon: "lucide:link"
      }
    },
    {
      keywords: ["ppc", "programming"],
      style: {
        color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-200",
        icon: "lucide:code"
      }
    },
    {
      keywords: ["commercial"],
      style: {
        color: "text-foreground bg-foreground/10",
        icon: "lucide:building-2"
      }
    },
    {
      keywords: ["personal"],
      style: {
        // color: 'bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-200',
        icon: "lucide:user"
      }
    },
    {
      keywords: ["open-source"],
      style: {
        // color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-200',
        icon: "lucide:git-branch"
      }
    },
    {
      keywords: ["freelance"],
      style: {
        // color: 'bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-200',
        icon: "lucide:briefcase"
      }
    },
    {
      keywords: ["community"],
      style: {
        // color: 'bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-200',
        icon: "lucide:users"
      }
    },
    {
      keywords: ["contract"],
      style: {
        // color: 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-200',
        icon: "lucide:file-text"
      }
    },
    {
      keywords: ["astro"],
      style: {
        // color: 'bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-200',
        icon: "lucide:rocket"
      }
    },
    {
      keywords: ["shopify"],
      style: {
        // color: 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-200',
        icon: "lucide:shopping-bag"
      }
    },
    {
      keywords: ["html"],
      style: {
        // color: 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-200',
        icon: "lucide:code-2"
      }
    },
    {
      keywords: ["figma"],
      style: {
        // color: 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-200',
        icon: "lucide:palette"
      }
    },
    {
      keywords: ["academic"],
      style: {
        // color: 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-200',
        icon: "lucide:book-open-text"
      }
    }
  ];
  const getCategoryStyle = (content2) => {
    const lowerContent = content2.toLowerCase();
    const match = categoryMappings.find(
      (category) => category.keywords.some((keyword) => lowerContent.includes(keyword))
    );
    return match?.style || null;
  };
  const content = text || (typeof children === "string" ? children : "");
  const categoryStyle = getCategoryStyle(content);
  return renderTemplate`${renderComponent($$result, "BadgeComponent", Badge, { "variant": categoryStyle ? "muted" : variant, "className": cn(categoryStyle?.color, className), "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/badge", "client:component-export": "Badge" }, { "default": ($$result2) => renderTemplate`${showIcon && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": categoryStyle ? categoryStyle.icon : "lucide:hash", "class": "size-3" })}`}${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)} ` })}`;
}, "C:/Users/WINDOWS10/Desktop/AURA/src/components/Badge.astro", void 0);

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Separator$1.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

const $$Astro = createAstro("https://aura.dev");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hover:bg-muted/50 border p-4 transition-colors duration-300 ease-in-out"> ${renderComponent($$result, "Link", $$Link, { "href": project.data.link, "class": "flex flex-col gap-4 sm:flex-row", "external": true }, { "default": ($$result2) => renderTemplate`${project.data.image && renderTemplate`<div class="max-w-3xs sm:shrink-0"> ${renderComponent($$result2, "Image", $$Image, { "src": project.data.image, "alt": project.data.name, "width": 1200, "height": 630, "class": "object-cover" })} </div>`}<div class="grow"> <h3 class="mb-1 text-lg font-medium"> ${project.data.name} </h3> <p class="text-muted-foreground mb-2 text-sm"> ${project.data.description} </p> ${project.data.startDate && renderTemplate`<div class="text-muted-foreground/60 mb-2 flex flex-wrap items-center gap-x-2 text-xs"> <span class="flex items-center gap-x-1.5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:calendar", "class": "size-3" })} <span> ${formatMonthYear(project.data.startDate)} ${project.data.endDate ? ` \u2192 ${formatMonthYear(project.data.endDate)}` : " \u2192 Present"} </span> </span> ${renderComponent($$result2, "Separator", Separator, { "orientation": "vertical", "className": "h-4!" })} <span class="flex items-center gap-x-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:external-link", "class": "size-3" })} <span>${extractDomain(project.data.link)}</span> </span> </div>`} ${project.data.tags && renderTemplate`<div class="flex flex-wrap gap-2"> ${project.data.tags.map((tag) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "text": tag })}`)} </div>`} </div> ` })} </div>`;
}, "C:/Users/WINDOWS10/Desktop/AURA/src/components/ProjectCard.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_BnKo9z3C.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://aura.dev", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../chunks/content-assets_tvKS2peF.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('../chunks/content-assets_tvKS2peF.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('../chunks/_astro_assets_DkNPFUzD.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('../chunks/content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

async function getAllProjects() {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => {
    const orderA = a.data.order ?? 0;
    const orderB = b.data.order ?? 0;
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    const dateA = a.data.startDate?.getTime() || 0;
    const dateB = b.data.startDate?.getTime() || 0;
    return dateB - dateA;
  });
}
function groupProjectsByYear(projects) {
  return projects.reduce(
    (acc, project) => {
      const year = project.data.startDate ? project.data.startDate.getFullYear().toString() : (/* @__PURE__ */ new Date()).getFullYear().toString();
      (acc[year] ??= []).push(project);
      return acc;
    },
    {}
  );
}

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    body: "body",
    head: "head",
    html: "html",
    link: "link",
    meta: "meta",
    p: "p",
    title: "title",
    ...props.components
  };
  return createVNode(_components.html, {
    lang: "en",
    children: ["\n", createVNode(_components.head, {
      children: ["\n", createVNode(_components.meta, {
        charset: "utf-8"
      }), "\n", createVNode(_components.title, {
        children: "work"
      }), "\n", createVNode(_components.meta, {
        content: "width=device-width, initial-scale=1",
        name: "viewport"
      }), "\n", createVNode(_components.link, {
        href: "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css",
        rel: "stylesheet"
      }), "\n"]
    }), "\n", createVNode(_components.body, {
      children: ["\n", createVNode("h3", {
        class: "not-prose text-lg font-medium mb-1",
        children: createVNode(_components.p, {
          children: ["Some work I’ve done ", createVNode("span", {
            class: "text-muted-foreground",
            children: "ヽ(o^ ^o)ﾉ"
          })]
        })
      }), "\n", createVNode("span", {
        class: "not-prose text-muted-foreground text-xs",
        children: createVNode(_components.p, {
          children: "Last updated: 2025-11-22"
        })
      }), "\n"]
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/WINDOWS10/Desktop/AURA/src/content/work.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getAllProjects();
  const projectsByYear = groupProjectsByYear(projects);
  const years = Object.keys(projectsByYear).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mx-auto w-full max-w-[calc(var(--container-3xl)-2rem)]"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Work", icon: "lucide:briefcase" }] })} </div> <section class="mx-auto flex max-w-[calc(var(--container-3xl)-2rem)] flex-col gap-4"> <article class="prose"> ${renderComponent($$result2, "Content", Content, {})} </article> <div class="flex flex-col gap-y-8"> ${years.map((year) => renderTemplate`<section class="flex flex-col gap-y-4"> <div class="font-medium">${year}</div> <ul class="flex flex-col gap-4"> ${projectsByYear[year].map((project) => renderTemplate`<li> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })} </li>`)} </ul> </section>`)} </div> </section> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "Work" })}` })}`;
}, "C:/Users/WINDOWS10/Desktop/AURA/src/pages/work.astro", void 0);

const $$file = "C:/Users/WINDOWS10/Desktop/AURA/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
