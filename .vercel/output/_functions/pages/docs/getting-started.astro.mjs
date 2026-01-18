import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DU3qj1gS.mjs';
import 'piccolore';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_DjEXw9PQ.mjs';
import { $ as $$Layout, a as $$PageHead, e as $$Icon } from '../../chunks/Layout_BiJos8KZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$GettingStarted = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mx-auto w-full max-w-[calc(var(--container-3xl)-2rem)]"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Docs", href: "/docs", icon: "lucide:book-open" },
    { label: "Getting Started", icon: "lucide:rocket" }
  ] })} </div> <section class="mx-auto flex max-w-[calc(var(--container-3xl)-2rem)] flex-col gap-6"> <!-- Header --> <div> <h1 class="font-mono text-3xl font-bold text-foreground mb-2">Getting Started with AURA</h1> <p class="font-sans text-muted-foreground">
Learn how to integrate AURA's divine intelligence into your projects in just a few minutes.
</p> </div> <!-- Quick Start --> <div class="bento-card p-6"> <div class="flex items-center gap-3 mb-4"> <div class="flex size-10 items-center justify-center rounded-lg bg-warm-gold/10"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:zap", "class": "text-warm-gold size-5" })} </div> <h2 class="font-mono text-xl font-semibold text-foreground">Quick Start</h2> </div> <div class="space-y-6"> <!-- Step 1 --> <div> <h3 class="font-mono text-lg font-medium text-cyan-glow mb-3">1. Installation</h3> <p class="font-sans text-sm text-muted-foreground mb-3">
Install the AURA SDK via npm or yarn:
</p> <div class="rounded-lg bg-void-black border border-border p-4"> <div class="flex items-center justify-between mb-2"> <span class="font-mono text-xs text-muted-foreground">terminal</span> <button class="code-badge hover:bg-warm-gold/25 transition-colors cursor-pointer" onclick="navigator.clipboard.writeText('npm install @aura/sdk')">
Copy
</button> </div> <div class="font-mono text-sm space-y-2"> <div class="text-muted-foreground"># Using npm</div> <div class="text-cyan-glow">npm install @aura/sdk</div> <div class="mt-3 text-muted-foreground"># Using yarn</div> <div class="text-warm-gold">yarn add @aura/sdk</div> </div> </div> </div> <!-- Step 2 --> <div> <h3 class="font-mono text-lg font-medium text-cyan-glow mb-3">2. Initialize AURA</h3> <p class="font-sans text-sm text-muted-foreground mb-3">
Import and initialize AURA in your project:
</p> <div class="rounded-lg bg-void-black border border-border p-4"> <div class="flex items-center justify-between mb-2"> <span class="font-mono text-xs text-muted-foreground">JavaScript</span> <button class="code-badge hover:bg-warm-gold/25 transition-colors cursor-pointer">Copy</button> </div> <pre class="font-mono text-sm text-foreground overflow-x-auto"><code>${`import { Aura } from '@aura/sdk'

// Initialize AURA
const aura = new Aura({
  apiKey: process.env.AURA_API_KEY,
  network: 'mainnet-beta', // Solana network
})

// Start chatting
const response = await aura.chat('gm')
console.log(response)`}</code></pre> </div> </div> <!-- Step 3 --> <div> <h3 class="font-mono text-lg font-medium text-cyan-glow mb-3">3. Ask Questions</h3> <p class="font-sans text-sm text-muted-foreground mb-3">
Query AURA's knowledge base:
</p> <div class="rounded-lg bg-void-black border border-border p-4"> <div class="flex items-center justify-between mb-2"> <span class="font-mono text-xs text-muted-foreground">JavaScript</span> <button class="code-badge hover:bg-warm-gold/25 transition-colors cursor-pointer">Copy</button> </div> <pre class="font-mono text-sm text-foreground overflow-x-auto"><code>${`// Ask about Solana
const solanaInfo = await aura.chat('Tell me about Solana')

// Security question
const securityTips = await aura.chat('How to avoid phishing?')

// Dev humor
const coffeeWisdom = await aura.chat('Tell me about coffee')`}</code></pre> </div> </div> </div> </div> <!-- Configuration --> <div class="bento-card p-6"> <div class="flex items-center gap-3 mb-4"> <div class="flex size-10 items-center justify-center rounded-lg bg-cyan-glow/10"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:settings", "class": "text-cyan-glow size-5" })} </div> <h2 class="font-mono text-xl font-semibold text-foreground">Configuration</h2> </div> <div class="space-y-4"> <p class="font-sans text-sm text-muted-foreground">
Customize AURA's behavior with configuration options:
</p> <div class="rounded-lg bg-void-black border border-border p-4"> <pre class="font-mono text-sm text-foreground overflow-x-auto"><code>${`const aura = new Aura({
  // Required
  apiKey: 'your-api-key',

  // Optional
  network: 'mainnet-beta',        // 'mainnet-beta' | 'devnet' | 'testnet'
  temperature: 0.7,                // Response creativity (0-1)
  maxTokens: 500,                  // Max response length
  knowledge: ['solana', 'web3'],   // Knowledge domains
  personality: 'divine',           // 'divine' | 'casual' | 'technical'
})`}</code></pre> </div> <div class="grid gap-3 sm:grid-cols-2"> <div class="rounded-lg border border-border bg-card-bg p-4"> <div class="font-mono text-sm font-medium text-warm-gold mb-2">API Key</div> <p class="font-sans text-xs text-muted-foreground">
Get your API key from the AURA dashboard. Keep it secure and never expose it in client-side code.
</p> </div> <div class="rounded-lg border border-border bg-card-bg p-4"> <div class="font-mono text-sm font-medium text-cyan-glow mb-2">Network</div> <p class="font-sans text-xs text-muted-foreground">
Choose the Solana network. Mainnet for production, devnet for testing.
</p> </div> </div> </div> </div> <!-- Features --> <div class="grid gap-6 lg:grid-cols-3"> <div class="bento-card p-5"> <div class="flex items-center gap-2 mb-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:brain", "class": "text-warm-gold size-5" })} <h3 class="font-mono text-base font-semibold text-foreground">Knowledge Base</h3> </div> <p class="font-sans text-sm text-muted-foreground mb-3">
Access comprehensive knowledge on Solana, Web3, security, and more.
</p> <a href="/docs/api-reference" class="inline-flex items-center gap-1 font-mono text-xs text-cyan-glow hover:text-warm-gold transition-colors">
Learn more
${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-right", "class": "size-3" })} </a> </div> <div class="bento-card p-5"> <div class="flex items-center gap-2 mb-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:shield-check", "class": "text-cyan-glow size-5" })} <h3 class="font-mono text-base font-semibold text-foreground">Security First</h3> </div> <p class="font-sans text-sm text-muted-foreground mb-3">
Built-in security checks and best practice recommendations.
</p> <a href="/docs/api-reference#security" class="inline-flex items-center gap-1 font-mono text-xs text-cyan-glow hover:text-warm-gold transition-colors">
Learn more
${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-right", "class": "size-3" })} </a> </div> <div class="bento-card p-5"> <div class="flex items-center gap-2 mb-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:code-2", "class": "text-amber size-5" })} <h3 class="font-mono text-base font-semibold text-foreground">Easy Integration</h3> </div> <p class="font-sans text-sm text-muted-foreground mb-3">
Simple API, extensive examples, and great developer experience.
</p> <a href="/docs/code-examples" class="inline-flex items-center gap-1 font-mono text-xs text-cyan-glow hover:text-warm-gold transition-colors">
View examples
${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-right", "class": "size-3" })} </a> </div> </div> <!-- Next Steps --> <div class="bento-card p-6"> <h2 class="font-mono text-xl font-semibold text-foreground mb-4">Next Steps</h2> <div class="space-y-3"> <a href="/docs/api-reference" class="flex items-center justify-between p-4 rounded-lg border border-border hover:border-warm-gold/50 transition-colors group"> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:book-open", "class": "text-warm-gold size-5" })} <div> <div class="font-mono text-sm font-medium text-foreground group-hover:text-warm-gold transition-colors">API Reference</div> <div class="font-sans text-xs text-muted-foreground">Complete API documentation</div> </div> </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-right", "class": "text-muted-foreground group-hover:text-warm-gold size-4" })} </a> <a href="/docs/code-examples" class="flex items-center justify-between p-4 rounded-lg border border-border hover:border-cyan-glow/50 transition-colors group"> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:code-2", "class": "text-cyan-glow size-5" })} <div> <div class="font-mono text-sm font-medium text-foreground group-hover:text-cyan-glow transition-colors">Code Examples</div> <div class="font-sans text-xs text-muted-foreground">Real-world usage examples</div> </div> </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-right", "class": "text-muted-foreground group-hover:text-cyan-glow size-4" })} </a> <a href="/chat" class="flex items-center justify-between p-4 rounded-lg border border-border hover:border-amber/50 transition-colors group"> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:terminal", "class": "text-amber size-5" })} <div> <div class="font-mono text-sm font-medium text-foreground group-hover:text-amber transition-colors">Try AURA Terminal</div> <div class="font-sans text-xs text-muted-foreground">Interactive chat interface</div> </div> </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-right", "class": "text-muted-foreground group-hover:text-amber size-4" })} </a> </div> </div> </section> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "Getting Started - Documentation" })}` })}`;
}, "C:/Users/WINDOWS10/Desktop/AURA/src/pages/docs/getting-started.astro", void 0);

const $$file = "C:/Users/WINDOWS10/Desktop/AURA/src/pages/docs/getting-started.astro";
const $$url = "/docs/getting-started";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GettingStarted,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
