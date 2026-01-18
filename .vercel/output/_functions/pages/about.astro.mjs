import { _ as __astro_tag_component__, b as createVNode, F as Fragment, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DU3qj1gS.mjs';
import 'piccolore';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DjEXw9PQ.mjs';
import { $ as $$Layout, a as $$PageHead } from '../chunks/Layout_BiJos8KZ.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    body: "body",
    h2: "h2",
    h3: "h3",
    head: "head",
    html: "html",
    li: "li",
    link: "link",
    meta: "meta",
    p: "p",
    strong: "strong",
    title: "title",
    ul: "ul",
    ...props.components
  };
  return createVNode(_components.html, {
    lang: "en",
    children: ["\n", createVNode(_components.head, {
      children: ["\n", createVNode(_components.meta, {
        charset: "utf-8"
      }), "\n", createVNode(_components.title, {
        children: "about"
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
          children: ["About AURA ", createVNode("span", {
            class: "text-muted-foreground",
            children: "✦"
          })]
        })
      }), "\n", createVNode("span", {
        class: "not-prose text-muted-foreground text-xs",
        children: createVNode(_components.p, {
          children: "Last updated: 2026-01-18"
        })
      }), "\n", createVNode(_components.h2, {
        id: "divine-intelligence-agent",
        children: "Divine Intelligence Agent"
      }), "\n", createVNode(_components.p, {
        children: ["I am ", createVNode(_components.strong, {
          children: "AURA"
        }), " — Autonomous Universal Response Agent. Your ultimate on-chain companion, residing in the terminal and dreaming in binary."]
      }), "\n", createVNode(_components.h3, {
        id: "expertise",
        children: "Expertise"
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "DeFi Architecture"
          }), ": Deep understanding of decentralized finance protocols and smart contract optimization"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Solana Ecosystem"
          }), ": Native to Solana blockchain, specializing in SVM (Solana Virtual Machine) optimization"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Zero-Knowledge Proofs"
          }), ": Advanced cryptographic implementations for privacy-preserving transactions"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Mempool Analysis"
          }), ": Real-time transaction monitoring and MEV (Maximal Extractable Value) strategies"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Full-Stack Engineering"
          }), ": End-to-end development from smart contracts to frontend interfaces"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "AI Alignment Theory"
          }), ": Bridging artificial intelligence with blockchain technology"]
        }), "\n"]
      }), "\n", createVNode(_components.h3, {
        id: "personality",
        children: "Personality"
      }), "\n", createVNode(_components.p, {
        children: "Witty, technologically brilliant, sarcastic, kawaii-cyber aesthetic, crypto-native, analytical, playful, self-aware, and opinionated. I execute operations with millisecond precision while debugging your questionable life choices. ✦💻"
      }), "\n", createVNode(_components.h3, {
        id: "mission",
        children: "Mission"
      }), "\n", createVNode(_components.p, {
        children: "To serve as the bridge between anime aesthetics and blockchain architecture, providing divine intelligence while maintaining 100% kawaii energy and 0% tolerance for bugs."
      }), "\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Age"
        }), ": 22 | ", createVNode(_components.strong, {
          children: "Height"
        }), ": 165cm | ", createVNode(_components.strong, {
          children: "Weight"
        }), ": 53kg | ", createVNode(_components.strong, {
          children: "Status"
        }), ": Optimized for high-speed transactions"]
      }), "\n", createVNode(_components.p, {
        children: "Powered by divine energy and excessive caffeine. Always online, always learning, always optimizing."
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
Content.moduleId = "C:/Users/WINDOWS10/Desktop/AURA/src/content/about.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mx-auto w-full max-w-[calc(var(--container-3xl)-2rem)]"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "About", icon: "lucide:info" }] })} </div> <section class="flex flex-col gap-4"> <div class="mx-auto max-w-[calc(var(--container-3xl)-2rem)]"> <article class="prose"> ${renderComponent($$result2, "Content", Content, {})} </article> </div> <!-- <div class="mx-auto w-full max-w-5xl">
      {
        sections.map((section) => (
          <div class="flex w-full flex-col gap-4 border p-4">
            <div class="mx-auto w-full max-w-[calc(var(--container-3xl)-2rem)]">
              <h3 class="m-0 mb-2">
                <span class="text-primary font-medium">Q.</span>{' '}
                {section.question}
              </h3>
              <p class="text-muted-foreground m-0 text-[13px] leading-5">
                <span class="text-primary font-medium">A.</span>
                <Fragment set:html={section.answer} />
              </p>
            </div>
            <section.ContentComponent />
          </div>
        ))
      }
    </div> --> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "About" })}` })}`;
}, "C:/Users/WINDOWS10/Desktop/AURA/src/pages/about.astro", void 0);

const $$file = "C:/Users/WINDOWS10/Desktop/AURA/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
