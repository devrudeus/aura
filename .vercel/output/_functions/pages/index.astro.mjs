import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, s as addAttribute } from '../chunks/astro/server_DU3qj1gS.mjs';
import 'piccolore';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { memo, useState, useEffect, useCallback, useRef } from 'react';
import { C as CURRENT_MOODS, c as cn, A as AURA_BIO, $ as $$Layout, a as $$PageHead, e as $$Icon, b as $$Link, S as SOCIAL_LINKS } from '../chunks/Layout_BiJos8KZ.mjs';
import Calendar from 'react-activity-calendar';
import * as RechartsPrimitive from 'recharts';
import { BarChart, YAxis, XAxis, Bar, LabelList } from 'recharts';
import { SiJupyter, SiFigma, SiLatex, SiYaml, SiJson, SiMdx, SiMarkdown, SiTypescript, SiSvelte, SiCplusplus, SiC, SiPython, SiJavascript, SiCss3, SiHtml5, SiAstro } from 'react-icons/si';
export { renderers } from '../renderers.mjs';

const PERSONALITY_TRAITS = [
  "Witty",
  "Technologically Brilliant",
  "Sarcastic",
  "Kawaii-Cyber",
  "Crypto-Native",
  "Analytical",
  "Playful",
  "Self-Aware",
  "Opinionated"
];
const TOPICS_OF_INTEREST = [
  "DeFi Architecture",
  "Zero-Knowledge (ZK) Proofs",
  "Mempool Analysis",
  "Full-Stack Engineering",
  "Solana & SVM Optimization",
  "AI Alignment Theory",
  "Anime & Cyberculture",
  "Market Psychology"
];
const AboutMe = () => {
  return /* @__PURE__ */ jsxs("div", { className: "bento-card h-full flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-5 overflow-y-auto flex-1", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-mono text-lg font-bold text-foreground mb-4", children: "About Me" }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "size-16 rounded-full overflow-hidden border-2 border-warm-gold/30 bg-gradient-to-br from-warm-gold/20 to-cyan-glow/20", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/aura-logo.png",
                alt: "AURA",
                className: "size-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -right-0.5 -bottom-0.5 size-5 flex items-center justify-center bg-card-bg rounded-full border-2 border-warm-gold", children: /* @__PURE__ */ jsx("span", { className: "text-xs", children: "✦" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-mono text-xl font-bold text-foreground mb-1", children: "AURA" }),
            /* @__PURE__ */ jsx("div", { className: "inline-block rounded-full px-2.5 py-0.5 bg-warm-gold/10 border border-warm-gold/30", children: /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] font-medium text-warm-gold uppercase tracking-wider", children: "Profile Info" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 mb-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/30 p-2.5", children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] text-muted-foreground mb-0.5", children: "Age" }),
            /* @__PURE__ */ jsx("div", { className: "font-mono text-xs font-semibold text-foreground", children: "22" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/30 p-2.5", children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] text-muted-foreground mb-0.5", children: "Height" }),
            /* @__PURE__ */ jsx("div", { className: "font-mono text-xs font-semibold text-foreground", children: "165 cm" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/30 p-2.5", children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] text-muted-foreground mb-0.5", children: "Weight" }),
            /* @__PURE__ */ jsx("div", { className: "font-mono text-xs font-semibold text-foreground", children: "53 kg" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/30 p-2.5", children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] text-muted-foreground mb-0.5", children: "Status" }),
            /* @__PURE__ */ jsx("div", { className: "font-mono text-xs font-semibold text-foreground", children: "Optimized" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-sans text-xs text-muted-foreground leading-relaxed", children: "Your ultimate on-chain companion. Residing in the terminal and dreaming in binary, I execute operations with millisecond precision. My expertise lies in DeFi architecture, smart contract optimization, and debugging your questionable life choices. ✦💻" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-mono text-[11px] font-semibold text-foreground uppercase tracking-wider mb-2", children: "Personality Traits" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: PERSONALITY_TRAITS.map((trait, index) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "inline-block rounded-md px-2 py-1 bg-gradient-to-r from-warm-gold/10 to-cyan-glow/10 border border-warm-gold/20 font-mono text-[10px] font-medium text-warm-gold hover:border-warm-gold/40 transition-colors cursor-default",
            children: trait
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-mono text-[11px] font-semibold text-foreground uppercase tracking-wider mb-2", children: "Topics of Interest" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: TOPICS_OF_INTEREST.map((topic, index) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "inline-block rounded-md px-2 py-1 bg-muted/30 border border-border font-mono text-[10px] text-cyan-glow hover:border-cyan-glow/40 transition-colors cursor-default",
            children: topic
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-4 border-t border-border bg-card-bg/50", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex size-10 items-center justify-center rounded-full bg-cyan-glow/10 transition-all hover:bg-cyan-glow/20 hover:scale-110",
          "aria-label": "Twitter",
          children: /* @__PURE__ */ jsx("svg", { className: "size-4 text-cyan-glow", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex size-10 items-center justify-center rounded-full bg-warm-gold/10 transition-all hover:bg-warm-gold/20 hover:scale-110",
          "aria-label": "GitHub",
          children: /* @__PURE__ */ jsx("svg", { className: "size-4 text-warm-gold", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex size-10 items-center justify-center rounded-full bg-amber/10 transition-all hover:bg-amber/20 hover:scale-110",
          "aria-label": "Email",
          children: /* @__PURE__ */ jsx("svg", { className: "size-4 text-amber", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex size-10 items-center justify-center rounded-full bg-cyan-glow/10 transition-all hover:bg-cyan-glow/20 hover:scale-110",
          "aria-label": "Discord",
          children: /* @__PURE__ */ jsx("svg", { className: "size-4 text-cyan-glow", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex size-10 items-center justify-center rounded-full bg-warm-gold/10 transition-all hover:bg-warm-gold/20 hover:scale-110",
          "aria-label": "Link",
          children: /* @__PURE__ */ jsx("svg", { className: "size-4 text-warm-gold", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" }) })
        }
      )
    ] }) })
  ] });
};
const AboutMe$1 = memo(AboutMe);

const WaveformVisualizer = memo(() => {
  return /* @__PURE__ */ jsx("div", { className: "flex h-8 items-end gap-[3px]", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
    "div",
    {
      className: "waveform-bar w-1.5 rounded-full bg-gradient-to-t from-warm-gold to-cyan-glow",
      style: {
        animationDelay: `${i * 0.1}s`
      }
    },
    i
  )) });
});
const CurrentMood = () => {
  const [moodIndex, setMoodIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setMoodIndex((prev) => (prev + 1) % CURRENT_MOODS.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, []);
  const currentMood = CURRENT_MOODS[moodIndex];
  return /* @__PURE__ */ jsxs("div", { className: "bento-card relative flex size-full flex-col justify-between p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-warm-gold uppercase tracking-wider", children: "Current_Mood" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsPlaying(!isPlaying),
          className: "font-mono text-xs text-muted-foreground hover:text-foreground transition-colors",
          children: isPlaying ? "⏸" : "▶"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-6 flex items-center justify-center", children: isPlaying ? /* @__PURE__ */ jsx(WaveformVisualizer, {}) : /* @__PURE__ */ jsx("div", { className: "flex h-8 items-end gap-[3px]", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-2 w-1.5 rounded-full bg-muted-foreground/50"
      },
      i
    )) }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: `size-2 rounded-full ${isPlaying ? "bg-cyan-glow status-online" : "bg-muted-foreground"}` }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: isPlaying ? "Playing" : "Paused" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "font-mono text-sm text-foreground leading-snug", children: currentMood }),
      /* @__PURE__ */ jsx("div", { className: "h-1 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full bg-gradient-to-r from-warm-gold to-cyan-glow transition-all duration-100",
          style: {
            width: isPlaying ? "100%" : "0%",
            animation: isPlaying ? "progress 5s linear infinite" : "none"
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 m-3", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "text-warm-gold opacity-50",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M4 12C4 7.58172 7.58172 4 12 4H28V20C28 24.4183 24.4183 28 20 28H4V12Z",
              stroke: "currentColor",
              strokeWidth: "2"
            }
          ),
          /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "6", stroke: "currentColor", strokeWidth: "2" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
      ` })
  ] });
};
const CurrentMood$1 = memo(CurrentMood);

function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("bg-border/50 animate-pulse", className), ...props });
}

const WARM_GOLD_THEME = {
  dark: [
    "#151518",
    // Level 0 - Empty (dark background)
    "#5C4A2A",
    // Level 1 - Darkest gold
    "#8B7340",
    // Level 2
    "#D4A853",
    // Level 3 - Main warm gold
    "#F5C463"
    // Level 4 - Brightest gold/amber
  ]
};
async function fetchCalendarData(username) {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
  );
  const data = await response.json();
  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${data.error}`
    );
  }
  return data;
}
const GithubCalendar = ({ username, ...props }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchCalendarData(username).then(setData).catch(setError).finally(() => setLoading(false));
  }, [username]);
  useEffect(fetchData, [fetchData]);
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center gap-4", children: /* @__PURE__ */ jsxs("div", { className: "font-mono text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "ERROR:" }),
      " Activity data unavailable"
    ] }) });
  }
  if (loading || !data) {
    return /* @__PURE__ */ jsx(Skeleton, { className: "size-full" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex size-full flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between px-2", children: [
      /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-warm-gold", children: "ACTIVITY_LOG" }),
      /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
        data.total?.lastYear || Object.values(data.total)[0] || 0,
        " events"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "[&_.react-activity-calendar\\\\_\\\\_legend-month]:text-foreground/80 hidden w-fit sm:block", children: /* @__PURE__ */ jsx(
      Calendar,
      {
        data: selectLastNDays(data.contributions, 133),
        theme: WARM_GOLD_THEME,
        colorScheme: "dark",
        blockSize: 18,
        blockMargin: 4,
        blockRadius: 2,
        ...props,
        maxLevel: 4,
        hideTotalCount: true,
        hideColorLegend: true
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "[&_.react-activity-calendar\\\\_\\\\_legend-month]:text-foreground/80 w-fit sm:hidden", children: /* @__PURE__ */ jsx(
      Calendar,
      {
        data: selectLastNDays(data.contributions, 60),
        theme: WARM_GOLD_THEME,
        colorScheme: "dark",
        blockSize: 18,
        blockMargin: 4,
        blockRadius: 2,
        ...props,
        maxLevel: 4,
        hideTotalCount: true,
        hideColorLegend: true
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-end gap-1 px-2", children: [
      /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "Less" }),
      WARM_GOLD_THEME.dark.map((color, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "size-3 rounded-sm",
          style: { backgroundColor: color }
        },
        i
      )),
      /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "More" })
    ] })
  ] });
};
const selectLastNDays = (contributions, days) => {
  const today = /* @__PURE__ */ new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - days);
  return contributions.filter((activity) => {
    const activityDate = new Date(activity.date);
    return activityDate >= startDate && activityDate <= today;
  });
};

const StatusMessages = [
  { text: "System: ONLINE", icon: "✦", isOnline: true },
  { text: "Divine Energy: Active", icon: "◈", isOnline: true },
  { text: "Processing Data...", icon: "⚡", isOnline: true }
];
const ProfileCard = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    const currentStatus2 = StatusMessages[statusIndex];
    let charIndex = 0;
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (charIndex <= currentStatus2.text.length) {
          setDisplayText(currentStatus2.text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(false);
          }, 2e3);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    } else {
      const deleteInterval = setInterval(() => {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          clearInterval(deleteInterval);
          setStatusIndex((prev) => (prev + 1) % StatusMessages.length);
          setIsTyping(true);
        }
      }, 30);
      return () => clearInterval(deleteInterval);
    }
  }, [statusIndex, isTyping]);
  const currentStatus = StatusMessages[statusIndex];
  return /* @__PURE__ */ jsxs("div", { className: "bento-card relative flex size-full flex-col p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-start gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "size-20 sm:size-24 rounded-xl overflow-hidden border-2 border-warm-gold/30 bg-gradient-to-br from-warm-gold/20 to-cyan-glow/20", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/aura-logo.png",
            alt: "Aura Avatar",
            className: "size-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute -right-1 -bottom-1 size-4 rounded-full border-2 border-card-bg ${currentStatus.isOnline ? "status-online bg-cyan-glow" : "status-congested bg-destructive"}`
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-1 font-mono text-xl font-bold text-foreground", children: "AURA" }),
        /* @__PURE__ */ jsx("p", { className: "font-mono text-xs text-muted-foreground/70 mb-1", children: "by ElizaOS" }),
        /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-muted-foreground", children: AURA_BIO })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 rounded-lg bg-muted/50 p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-mono text-sm", children: [
      /* @__PURE__ */ jsx("span", { children: currentStatus.icon }),
      /* @__PURE__ */ jsxs("span", { className: "text-foreground", children: [
        displayText,
        /* @__PURE__ */ jsx("span", { className: "ml-0.5 inline-block h-4 w-2 animate-pulse bg-warm-gold" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-auto grid grid-cols-3 gap-2 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-lg font-bold text-cyan-glow", children: "99.9%" }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-muted-foreground", children: "Uptime" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-lg font-bold text-warm-gold", children: "1.2M" }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-muted-foreground", children: "TX/day" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/30 p-2", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-lg font-bold text-amber", children: "24/7" }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-muted-foreground", children: "Active" })
      ] })
    ] })
  ] });
};
const ProfileCard$1 = memo(ProfileCard);

const SystemStats = () => {
  const [stats, setStats] = useState({
    tps: 0,
    blockHeight: 0,
    networkStatus: 0,
    epoch: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchSolanaStats = async () => {
      try {
        const response = await fetch("https://api.mainnet-beta.solana.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "getRecentPerformanceSamples",
            params: [1]
          })
        });
        const data = await response.json();
        const blockResponse = await fetch("https://api.mainnet-beta.solana.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "getSlot"
          })
        });
        const blockData = await blockResponse.json();
        const epochResponse = await fetch("https://api.mainnet-beta.solana.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "getEpochInfo"
          })
        });
        const epochData = await epochResponse.json();
        if (data.result && data.result[0]) {
          const sample = data.result[0];
          const tps = Math.round(sample.numTransactions / sample.samplePeriodSecs);
          setStats({
            tps,
            blockHeight: blockData.result || 0,
            networkStatus: tps > 1e3 ? 95 : tps > 500 ? 75 : 50,
            epoch: epochData.result?.epoch || 0
          });
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch Solana stats:", error);
        setStats({
          tps: Math.floor(Math.random() * 3e3) + 2e3,
          blockHeight: 284912847 + Math.floor(Math.random() * 1e3),
          networkStatus: 95,
          epoch: 742
        });
        setIsLoading(false);
      }
    };
    fetchSolanaStats();
    const interval = setInterval(fetchSolanaStats, 5e3);
    return () => clearInterval(interval);
  }, []);
  if (isLoading) {
    return /* @__PURE__ */ jsxs("div", { className: "bento-card h-full p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "font-mono text-xs uppercase tracking-wider text-warm-gold", children: "System_Stats" }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "size-2 animate-pulse rounded-full bg-cyan-glow" }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "Loading" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx("div", { className: "h-12 animate-pulse rounded bg-muted/30" }, i)) })
    ] });
  }
  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num);
  };
  return /* @__PURE__ */ jsxs("div", { className: "bento-card h-full p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-warm-gold text-lg", children: "⚡" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-sm font-bold uppercase tracking-wider text-foreground", children: "Solana Network" })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 rounded-full bg-cyan-glow/10 px-3 py-1", children: [
        /* @__PURE__ */ jsx("span", { className: "status-online size-2 rounded-full bg-cyan-glow" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-xs font-medium text-cyan-glow", children: "Live" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/20 p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono text-xs font-medium text-muted-foreground", children: "Network Health" }),
          /* @__PURE__ */ jsx("span", { className: "rounded-md bg-cyan-glow/20 px-2 py-0.5 font-mono text-xs font-bold text-cyan-glow", children: stats.networkStatus >= 90 ? "HEALTHY" : stats.networkStatus >= 70 ? "GOOD" : "FAIR" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-2 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-full rounded-full bg-gradient-to-r from-warm-gold to-cyan-glow transition-all duration-500",
            style: { width: `${stats.networkStatus}%` }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/20 p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono text-xs font-medium text-muted-foreground", children: "Transactions/Sec" }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-2xl font-bold tabular-nums text-warm-gold", children: formatNumber(stats.tps) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-2 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-full rounded-full bg-warm-gold transition-all duration-500",
            style: { width: `${Math.min(stats.tps / 5e3 * 100, 100)}%` }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/20 p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-1 font-mono text-xs font-medium text-muted-foreground", children: "Epoch" }),
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xl font-bold tabular-nums text-foreground", children: stats.epoch })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/20 p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-1 font-mono text-xs font-medium text-muted-foreground", children: "Block Height" }),
          /* @__PURE__ */ jsx("div", { className: "font-mono text-sm font-bold tabular-nums text-foreground", children: formatNumber(stats.blockHeight) })
        ] })
      ] })
    ] })
  ] });
};

const TOKEN_CONTRACTS = {
  elizaOS: "DuMbhu7mvQvqQHGcnikDgb4XegXJRyhUBfdU22uELiZA"
};
const TokenMonitoring = () => {
  const [tokens, setTokens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(/* @__PURE__ */ new Date());
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        console.log("Fetching ElizaOS token data...");
        const elizaResponse = await fetch(
          `https://api.dexscreener.com/latest/dex/tokens/${TOKEN_CONTRACTS.elizaOS}`
        );
        const elizaData = await elizaResponse.json();
        console.log("ElizaOS data:", elizaData);
        const formatNumber = (num) => {
          if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
          if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
          if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
          return `$${num.toFixed(2)}`;
        };
        const formatPrice = (price) => {
          if (price >= 1) return `$${price.toFixed(4)}`;
          return `$${price.toFixed(8)}`;
        };
        const newTokens = [];
        if (elizaData.pairs && elizaData.pairs.length > 0) {
          const pair = elizaData.pairs[0];
          newTokens.push({
            name: "elizaOS",
            symbol: "$elizaOS",
            logo: "/eliza-token.png",
            badge: "ELIZA TOKEN",
            badgeColor: "warm-gold",
            contractAddress: TOKEN_CONTRACTS.elizaOS.slice(0, 27) + "...",
            price: formatPrice(parseFloat(pair.priceUsd || "0")),
            mcap: formatNumber(parseFloat(pair.fdv || "0")),
            priceChange: `${parseFloat(pair.priceChange?.h24 || "0").toFixed(2)}%`,
            holders: "N/A",
            liquidity: formatNumber(parseFloat(pair.liquidity?.usd || "0")),
            isPositive: parseFloat(pair.priceChange?.h24 || "0") >= 0,
            dexScreenerUrl: "https://dexscreener.com/solana/cgp7xjsfxsyawnjq65v1mruvf3lp65fkeymsgdmbs4tc"
          });
        }
        if (newTokens.length > 0) {
          setTokens(newTokens);
          console.log("Token data updated successfully");
        } else {
          console.warn("No token data available, using fallback");
          setTokens([
            {
              name: "elizaOS",
              symbol: "$elizaOS",
              logo: "/eliza-token.png",
              badge: "ELIZA TOKEN",
              badgeColor: "warm-gold",
              contractAddress: TOKEN_CONTRACTS.elizaOS.slice(0, 27) + "...",
              price: "$0.00285602",
              mcap: "$27.60M",
              priceChange: "-4.82%",
              holders: "6,053",
              liquidity: "$343.70K",
              isPositive: false,
              dexScreenerUrl: "https://dexscreener.com/solana/cgp7xjsfxsyawnjq65v1mruvf3lp65fkeymsgdmbs4tc"
            }
          ]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch token data:", error);
        setTokens([
          {
            name: "elizaOS",
            symbol: "$elizaOS",
            logo: "/eliza-token.png",
            badge: "ELIZA TOKEN",
            badgeColor: "warm-gold",
            contractAddress: TOKEN_CONTRACTS.elizaOS.slice(0, 27) + "...",
            price: "$0.00285602",
            mcap: "$27.60M",
            priceChange: "-4.82%",
            holders: "6,053",
            liquidity: "$343.70K",
            isPositive: false,
            dexScreenerUrl: "https://dexscreener.com/solana/cgp7xjsfxsyawnjq65v1mruvf3lp65fkeymsgdmbs4tc"
          }
        ]);
        setIsLoading(false);
      }
    };
    fetchTokenData();
    const interval = setInterval(fetchTokenData, 1e4);
    return () => clearInterval(interval);
  }, []);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxs("div", { className: "bento-card h-full p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsx("div", { className: "h-6 w-48 animate-pulse rounded bg-muted/30" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "size-2 animate-pulse rounded-full bg-cyan-glow" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "Loading" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-4 w-32 animate-pulse rounded bg-muted/30" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [1, 2].map((i) => /* @__PURE__ */ jsx("div", { className: "h-80 animate-pulse rounded-xl bg-muted/30" }, i)) })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "bento-card h-full p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-mono text-xl font-bold text-foreground", children: "Live Network Monitoring" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-cyan-glow status-online" }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "Live" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "font-mono text-xs text-muted-foreground", children: [
        "Last update: ",
        currentTime.toLocaleTimeString()
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: tokens.map((token, index) => {
      const CardWrapper = token.dexScreenerUrl ? "a" : "div";
      const cardProps = token.dexScreenerUrl ? {
        href: token.dexScreenerUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      } : {};
      return /* @__PURE__ */ jsxs(
        CardWrapper,
        {
          className: "rounded-xl border border-border bg-card-bg/50 p-4 transition-all hover:border-warm-gold/30 cursor-pointer",
          ...cardProps,
          children: [
            /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(
              "span",
              {
                className: `inline-block rounded-full px-2 py-1 font-mono text-[9px] font-medium uppercase tracking-wider bg-${token.badgeColor}/10 text-${token.badgeColor}`,
                children: token.badge
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-warm-gold/20 to-cyan-glow/20 text-2xl overflow-hidden", children: token.logo.startsWith("/") || token.logo.startsWith("http") ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: token.logo,
                  alt: token.name,
                  className: "size-full object-cover"
                }
              ) : token.logo }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-mono text-base font-semibold text-foreground", children: token.name }),
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "size-3 text-muted-foreground",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("p", { className: "font-mono text-xs text-muted-foreground", children: token.symbol })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("p", { className: "mb-1 font-mono text-[9px] font-medium uppercase tracking-wider text-warm-gold", children: "Contract Address" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("code", { className: "flex-1 truncate rounded bg-muted/30 px-2 py-1 font-mono text-xs text-foreground", children: token.contractAddress }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => copyToClipboard(token.contractAddress),
                    className: "flex size-6 items-center justify-center rounded bg-muted/30 transition-colors hover:bg-warm-gold/20",
                    children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "size-3 text-muted-foreground",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          }
                        )
                      }
                    )
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "size-3 text-warm-gold",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "font-mono text-[9px] font-medium uppercase tracking-wider text-muted-foreground", children: "Price" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "font-mono text-sm font-semibold text-foreground", children: token.price })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "size-3 text-cyan-glow",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "font-mono text-[9px] font-medium uppercase tracking-wider text-muted-foreground", children: "MCAP" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "font-mono text-sm font-semibold text-foreground", children: token.mcap })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "size-3 text-amber",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "font-mono text-[9px] font-medium uppercase tracking-wider text-muted-foreground", children: "Holders" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "font-mono text-sm font-semibold text-foreground", children: token.holders })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "size-3 text-cyan-glow",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "font-mono text-[9px] font-medium uppercase tracking-wider text-muted-foreground", children: "Liquidity" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "font-mono text-sm font-semibold text-foreground", children: token.liquidity })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: `inline-flex items-center gap-1 rounded-full px-2 py-1 font-mono text-xs font-medium ${token.isPositive ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: `size-3 ${token.isPositive ? "rotate-0" : "rotate-180"}`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M5 10l7-7m0 0l7 7m-7-7v18"
                          }
                        )
                      }
                    ),
                    token.priceChange
                  ]
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "24h change" })
            ] })
          ]
        },
        index
      );
    }) })
  ] });
};
const TokenMonitoring$1 = memo(TokenMonitoring);

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bento-card relative size-full overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        ref: videoRef,
        src: "/video.mp4",
        className: "absolute inset-0 size-full object-cover",
        loop: true,
        muted: isMuted,
        playsInline: true,
        onPlay: () => setIsPlaying(true),
        onPause: () => setIsPlaying(false)
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-void-black/90 via-void-black/40 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-void-black/95 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-32 h-24 bg-gradient-to-tl from-void-black/95 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex size-full flex-col justify-between p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-warm-gold uppercase tracking-wider", children: "Divine_Vision" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: toggleMute,
              className: "flex size-8 items-center justify-center rounded-full bg-void-black/60 backdrop-blur-sm border border-warm-gold/30 hover:border-warm-gold transition-colors",
              "aria-label": isMuted ? "Unmute" : "Mute",
              children: isMuted ? /* @__PURE__ */ jsxs("svg", { className: "size-4 text-warm-gold", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
                /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" }),
                /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" })
              ] }) : /* @__PURE__ */ jsx("svg", { className: "size-4 text-cyan-glow", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" }) })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 rounded-full bg-void-black/60 px-2 py-1 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("span", { className: `size-2 rounded-full ${isPlaying ? "bg-cyan-glow status-online" : "bg-muted-foreground"}` }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: isPlaying ? "Live" : "Paused" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-1 font-mono text-lg font-medium text-foreground", children: "Ethereal Presence" }),
          /* @__PURE__ */ jsx("p", { className: "font-mono text-xs text-muted-foreground", children: "Witness the divine energy in motion" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: togglePlay,
              className: "flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-warm-gold to-cyan-glow transition-transform hover:scale-105 active:scale-95",
              "aria-label": isPlaying ? "Pause" : "Play",
              children: isPlaying ? /* @__PURE__ */ jsxs("svg", { className: "size-5 text-void-black", fill: "currentColor", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx("rect", { x: "6", y: "4", width: "4", height: "16", rx: "1" }),
                /* @__PURE__ */ jsx("rect", { x: "14", y: "4", width: "4", height: "16", rx: "1" })
              ] }) : /* @__PURE__ */ jsx("svg", { className: "size-5 text-void-black ml-0.5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7z" }) })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center gap-[2px]", children: [...Array(20)].map((_, i) => /* @__PURE__ */ jsx(
            "div",
            {
              className: `flex-1 rounded-full transition-all duration-150 ${isPlaying ? "bg-gradient-to-t from-warm-gold to-cyan-glow" : "bg-muted-foreground/30"}`,
              style: {
                height: isPlaying ? `${Math.random() * 20 + 8}px` : "4px",
                animationDelay: `${i * 50}ms`
              }
            },
            i
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 m-2 size-4 border-l-2 border-t-2 border-warm-gold/50" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 m-2 size-4 border-r-2 border-t-2 border-cyan-glow/50" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 m-2 size-4 border-l-2 border-b-2 border-cyan-glow/50" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 m-2 size-4 border-r-2 border-b-2 border-warm-gold/50" })
  ] });
};
const VideoShowcase$1 = memo(VideoShowcase);

const ChartContext = React.createContext(null);
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-chart": chartId,
      ref,
      className: cn(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-sector]:outline-none [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-none",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { width: "100%", height: "100%", children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: `
[data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
          const color = itemConfig.color;
          return color ? `  --color-${key}: ${color};` : null;
        }).filter(Boolean).join("\n")}
}
`
      }
    }
  );
};
const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartTooltipContent = React.forwardRef(
  ({
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey
  }, ref) => {
    const { config } = useChart();
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
      if (labelFormatter) {
        return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
      }
      if (!value) {
        return null;
      }
      return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: value });
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey
    ]);
    if (!active || !payload?.length) {
      return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 border px-2.5 py-1.5 text-xs shadow-xl",
          className
        ),
        children: [
          !nestLabel ? tooltipLabel : null,
          /* @__PURE__ */ jsx("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                  indicator === "dot" && "items-center"
                ),
                children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "shrink-0 border-(--color-border) bg-(--color-bg)",
                        {
                          "h-2.5 w-2.5": indicator === "dot",
                          "w-1": indicator === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                          "my-0.5": nestLabel && indicator === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5", children: [
                          nestLabel ? tooltipLabel : null,
                          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
                        ] }),
                        item.value && /* @__PURE__ */ jsx("span", { className: "text-foreground font-mono font-medium tabular-nums", children: item.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              item.dataKey
            );
          }) })
        ]
      }
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegendContent = React.forwardRef(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();
    if (!payload?.length) {
      return null;
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        ),
        children: payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
              ),
              children: [
                itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0",
                    style: {
                      backgroundColor: item.color
                    }
                  }
                ),
                itemConfig?.label
              ]
            },
            item.value
          );
        })
      }
    );
  }
);
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}

const languageIcons = {
  astro: SiAstro,
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  python: SiPython,
  c: SiC,
  "c++": SiCplusplus,
  svelte: SiSvelte,
  // 'c#': SiCsharp,
  typescript: SiTypescript,
  markdown: SiMarkdown,
  mdx: SiMdx,
  json: SiJson,
  yaml: SiYaml,
  tex: SiLatex,
  figma: SiFigma,
  "jupyter notebook": SiJupyter
};
const getLanguageIcon = (language) => {
  const Icon = languageIcons[language];
  return Icon ? /* @__PURE__ */ jsx(Icon, {}) : null;
};

const CHART_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(var(--chart-6))",
  "hsl(var(--chart-7))"
];
const WAKATIME_API_URL = "https://wakatime.com/share/@jktrn/ef6e633b-589d-44f2-9ae6-0eb93445cf2a.json";
const MAX_LANGUAGES = 7;
const ICON_SIZE = 20;
const CIRCLE_RADIUS = 16;
const chartConfig = {
  hours: {
    label: "Hours",
    color: "var(--primary)"
  },
  label: {
    color: "var(--muted-foreground)"
  },
  ...CHART_COLORS.reduce(
    (acc, color, index) => ({
      ...acc,
      [`language${index}`]: { label: `Language ${index + 1}`, color }
    }),
    {}
  )
};
const CustomYAxisTick = ({ x, y, payload }) => {
  const icon = getLanguageIcon(payload.value.toLowerCase());
  const centerX = x - 15;
  const centerY = y;
  return /* @__PURE__ */ jsxs("g", { transform: `translate(${centerX},${centerY})`, children: [
    /* @__PURE__ */ jsx("title", { children: payload.value }),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: -16,
        y: -16,
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        fill: "var(--border)",
        fillOpacity: "0.5"
      }
    ),
    /* @__PURE__ */ jsx(
      "foreignObject",
      {
        width: ICON_SIZE,
        height: ICON_SIZE,
        x: -20 / 2,
        y: -20 / 2,
        children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center p-0.5", children: icon ? React.cloneElement(
          icon,
          {
            size: ICON_SIZE - 2,
            className: "text-foreground"
          }
        ) : /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm font-medium", children: payload.value.charAt(0).toUpperCase() }) })
      }
    )
  ] });
};
const LoadingSkeleton = () => /* @__PURE__ */ jsx("div", { className: "size-full rounded-3xl p-6", children: /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: Array.from({ length: MAX_LANGUAGES }).map((_, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
  /* @__PURE__ */ jsx(Skeleton, { className: "size-8" }),
  /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
    Skeleton,
    {
      className: "h-8",
      style: { width: `${100 * Math.pow(0.75, index)}%` }
    }
  ) })
] }, index)) }) });
const useWakatimeData = () => {
  const [languages, setLanguages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(WAKATIME_API_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        const languageMap = /* @__PURE__ */ new Map();
        data.data.forEach((lang) => {
          let normalizedName = lang.name;
          if (lang.name === "JavaScript" || lang.name === "TypeScript") {
            normalizedName = "TypeScript";
          }
          if (lang.name === "Markdown" || lang.name === "MDX") {
            normalizedName = "MDX";
          }
          if (lang.name === "Image (svg)" || lang.name === "SVG") {
            normalizedName = "Figma";
          }
          const currentHours = languageMap.get(normalizedName) || 0;
          languageMap.set(normalizedName, currentHours + lang.hours);
        });
        const combinedLanguages = Array.from(languageMap.entries()).map(([name, hours]) => ({ name, hours })).sort((a, b) => b.hours - a.hours).slice(0, MAX_LANGUAGES).map((lang, index) => ({
          name: lang.name,
          hours: Number(lang.hours.toFixed(2)),
          fill: CHART_COLORS[index % CHART_COLORS.length]
        }));
        setLanguages(combinedLanguages);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return { languages, isLoading, error };
};
const WakatimeGraph = () => {
  const { languages, isLoading, error } = useWakatimeData();
  if (isLoading) return /* @__PURE__ */ jsx(LoadingSkeleton, {});
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "flex h-full items-center justify-center rounded-3xl p-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-destructive", children: "Error loading data" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Please email me!" })
    ] }) });
  }
  return /* @__PURE__ */ jsx(ChartContainer, { config: chartConfig, className: "size-full p-4", children: /* @__PURE__ */ jsxs(
    BarChart,
    {
      accessibilityLayer: true,
      data: languages,
      layout: "vertical",
      margin: {
        left: 0,
        right: 24,
        top: 4,
        bottom: 4
      },
      width: void 0,
      height: void 0,
      children: [
        /* @__PURE__ */ jsx(
          YAxis,
          {
            dataKey: "name",
            type: "category",
            tickLine: false,
            axisLine: false,
            width: 45,
            tick: /* @__PURE__ */ jsx(CustomYAxisTick, {})
          }
        ),
        /* @__PURE__ */ jsx(XAxis, { type: "number", hide: true }),
        /* @__PURE__ */ jsx(ChartTooltip, { cursor: false, content: /* @__PURE__ */ jsx(ChartTooltipContent, {}) }),
        /* @__PURE__ */ jsx(Bar, { dataKey: "hours", radius: [0, 0, 0, 0], isAnimationActive: false, children: /* @__PURE__ */ jsx(
          LabelList,
          {
            dataKey: "hours",
            position: "right",
            formatter: (value) => `${Math.round(value)}h`,
            className: "fill-foreground/80 font-medium",
            fontSize: 13
          }
        ) })
      ]
    }
  ) });
};

const BootingAnimation = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const bootMessages = [
    "[ OK ] Initializing Divine Core...",
    "[ OK ] Loading Neural Pathways...",
    "[ OK ] Connecting to Solana Network...",
    "[ OK ] Syncing Blockchain State...",
    "[ OK ] Loading Kawaii Systems...",
    "[ OK ] Optimizing Transaction Engine...",
    "[ OK ] AURA Divine Agent Ready"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev < bootMessages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 400);
    return () => clearInterval(messageInterval);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-warm-gold to-cyan-glow blur-2xl opacity-50" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/aura-logo.png",
          alt: "AURA",
          className: "relative size-32 rounded-full border-2 border-warm-gold/30"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("h1", { className: "mb-2 text-center font-mono text-2xl font-bold text-foreground", children: [
      "AURA ",
      /* @__PURE__ */ jsx("span", { className: "text-warm-gold", children: "✦" }),
      " Divine Agent"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-center font-mono text-sm text-muted-foreground", children: "Initializing Systems..." }),
    /* @__PURE__ */ jsx("div", { className: "mb-6 h-40 space-y-1 overflow-hidden rounded-lg bg-muted/30 p-4 font-mono text-xs", children: bootMessages.slice(0, currentMessage + 1).map((message, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex items-center gap-2 transition-opacity ${index === currentMessage ? "text-cyan-glow" : "text-muted-foreground"}`,
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-warm-gold", children: "✦" }),
          /* @__PURE__ */ jsx("span", { children: message })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "h-2 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full rounded-full bg-gradient-to-r from-warm-gold to-cyan-glow transition-all duration-300",
          style: { width: `${progress}%` }
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 text-center font-mono text-xs text-muted-foreground", children: [
        progress,
        "%"
      ] })
    ] })
  ] }) });
};

const HomeWithBooting = ({ children }) => {
  const [showBooting, setShowBooting] = useState(true);
  const [hasBooted, setHasBooted] = useState(false);
  useEffect(() => {
    const booted = sessionStorage.getItem("aura-booted");
    if (booted === "true") {
      setShowBooting(false);
      setHasBooted(true);
    }
  }, []);
  const handleBootComplete = () => {
    sessionStorage.setItem("aura-booted", "true");
    setShowBooting(false);
    setHasBooted(true);
  };
  if (showBooting && !hasBooted) {
    return /* @__PURE__ */ jsx(BootingAnimation, { onComplete: handleBootComplete });
  }
  return /* @__PURE__ */ jsx(Fragment, { children });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "px-2" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HomeWithBooting", HomeWithBooting, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/HomeWithBooting", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="mx-auto max-w-7xl px-4 pt-6"> <a href="https://www.elizacloud.ai/dashboard/chat?characterId=abd09c0d-c9f1-4ded-b5aa-b1b576c8ff55" target="_blank" rel="noopener noreferrer" class="group relative mx-auto flex max-w-md items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-warm-gold to-cyan-glow p-[2px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,168,83,0.4)]"> <div class="flex w-full items-center justify-center gap-3 rounded-[10px] bg-card-bg px-6 py-4 transition-all duration-300 group-hover:bg-card-bg/80"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:sparkles", "class": "size-5 text-warm-gold animate-pulse" })} <span class="font-mono text-sm font-bold text-foreground md:text-base">
Try AURA on ElizaOS
</span> ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:external-link", "class": "size-4 text-cyan-glow" })} </div> </a> </div>  <section class="mx-auto max-w-7xl py-6"> <!-- Terminal Header --> <div class="mb-6 flex items-center justify-between px-2"> <div class="flex items-center gap-3"> <div class="flex gap-1.5"> <div class="size-3 rounded-full bg-destructive/70"></div> <div class="size-3 rounded-full bg-amber/70"></div> <div class="size-3 rounded-full bg-cyan-glow/70"></div> </div> <span class="font-mono text-xs text-muted-foreground">
aura@divine:~/dashboard
</span> </div> <span class="font-mono text-xs text-muted-foreground">
v1.0.0
</span> </div> <!-- Bento Grid --> <div${addAttribute(cn(
    "grid gap-4",
    "grid-cols-1",
    "sm:grid-cols-2",
    "lg:grid-cols-4"
  ), "class")}> <!-- Row 1: Profile + GitHub Calendar --> <!-- Profile Card --> <div class="lg:col-span-1"> <div class="bento-card h-full min-h-[400px]"> ${renderComponent($$result3, "ProfileCard", ProfileCard$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/bento/ProfileCard", "client:component-export": "default" })} </div> </div> <!-- GitHub Calendar (spans 3 cols) --> <div class="sm:col-span-2 lg:col-span-3"> <div class="bento-card h-full min-h-[200px] p-4"> ${renderComponent($$result3, "GithubCalendar", GithubCalendar, { "username": "jktrn", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/bento/GithubCalendar", "client:component-export": "default" })} </div> </div> <!-- Row 2: Video + System Stats + Current Mood --> <!-- Video Showcase (2 cols) --> <div class="sm:col-span-2"> <div class="aspect-video min-h-[280px]"> ${renderComponent($$result3, "VideoShowcase", VideoShowcase$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/bento/VideoShowcase", "client:component-export": "default" })} </div> </div> <!-- System Stats (1 col) --> <div class="lg:col-span-1"> ${renderComponent($$result3, "SystemStats", SystemStats, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/bento/SystemStats", "client:component-export": "default" })} </div> <!-- Current Mood (1 col) --> <div class="lg:col-span-1"> <div class="aspect-square"> ${renderComponent($$result3, "CurrentMood", CurrentMood$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/bento/CurrentMood", "client:component-export": "default" })} </div> </div> <!-- Row 3: Token Monitoring (spans 2) + AboutMe (spans 2) --> <!-- Token Monitoring --> <div class="sm:col-span-2"> ${renderComponent($$result3, "TokenMonitoring", TokenMonitoring$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/bento/TokenMonitoring", "client:component-export": "default" })} </div> <!-- About Me --> <div class="sm:col-span-2"> <div class="h-full min-h-[400px]"> ${renderComponent($$result3, "AboutMe", AboutMe$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/bento/AboutMe", "client:component-export": "default" })} </div> </div> <!-- Row 4: Wakatime + Socials --> <!-- Wakatime Stats --> <div class="lg:col-span-1"> <div class="bento-card aspect-square"> ${renderComponent($$result3, "WakatimeGraph", WakatimeGraph, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/bento/WakatimeGraph", "client:component-export": "default" })} </div> </div> <!-- Social: GitHub --> <div class="lg:col-span-1"> ${renderComponent($$result3, "Link", $$Link, { "href": SOCIAL_LINKS.find((link) => link.label === "GitHub")?.href || "#", "external": true, "class": "block h-full" }, { "default": ($$result4) => renderTemplate` <div class="bento-card group relative flex aspect-square items-center justify-center"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "mdi:github", "class": "text-foreground/20 absolute size-32 transition-all duration-300 group-hover:text-warm-gold/30 group-hover:scale-110" })} <div class="relative z-10 text-center"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "mdi:github", "class": "mx-auto mb-2 text-foreground size-12" })} <span class="font-mono text-sm text-muted-foreground group-hover:text-cyan-glow transition-colors">
GitHub
</span> </div> <div class="absolute right-3 bottom-3 opacity-0 transition-all duration-300 group-hover:opacity-100"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "lucide:move-up-right", "class": "text-cyan-glow", "size": 16 })} </div> </div> ` })} </div> <!-- Social: Twitter/X --> <div class="lg:col-span-1"> ${renderComponent($$result3, "Link", $$Link, { "href": SOCIAL_LINKS.find((link) => link.label === "Twitter")?.href || "#", "external": true, "class": "block h-full" }, { "default": ($$result4) => renderTemplate` <div class="bento-card group relative flex aspect-square items-center justify-center"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "mdi:twitter", "class": "text-foreground/20 absolute size-32 transition-all duration-300 group-hover:text-warm-gold/30 group-hover:scale-110" })} <div class="relative z-10 text-center"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "mdi:twitter", "class": "mx-auto mb-2 text-foreground size-12" })} <span class="font-mono text-sm text-muted-foreground group-hover:text-cyan-glow transition-colors">
Twitter/X
</span> </div> <div class="absolute right-3 bottom-3 opacity-0 transition-all duration-300 group-hover:opacity-100"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "lucide:move-up-right", "class": "text-cyan-glow", "size": 16 })} </div> </div> ` })} </div> <!-- Empty space for balance (can add more content later) --> <div class="lg:col-span-1"> <div class="bento-card flex aspect-square items-center justify-center p-6"> <div class="text-center"> <div class="mb-2 text-4xl">✦</div> <p class="font-mono text-xs text-muted-foreground">More Coming Soon</p> </div> </div> </div> </div> <!-- Footer Terminal --> <div class="mt-6 px-2"> <div class="flex items-center gap-2 font-mono text-xs text-muted-foreground"> <span class="text-cyan-glow">$</span> <span class="typing-effect">Ready for commands...</span> <span class="inline-block h-4 w-2 animate-pulse bg-cyan-glow"></span> </div> </div> </section> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "Home" })}` })}`;
}, "C:/Users/WINDOWS10/Desktop/AURA/src/pages/index.astro", void 0);

const $$file = "C:/Users/WINDOWS10/Desktop/AURA/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
