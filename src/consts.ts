import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Aura // Divine Agent',
  description:
    'Divine Intelligence Agent • Holy Energy • Ethereal Presence',
  href: 'https://aura.dev',
  author: 'Aura',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/chat',
    label: 'Chat',
  },
  {
    href: '/docs',
    label: 'Docs',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://x.com/ai16zaura',
    label: 'Twitter',
  },
  {
    href: 'https://bags.fm/3naeJLbMzPL23ocgDLUDoHwH1S7Hk5Fx83joThHwBAGS',
    label: 'Bags',
  },
  {
    href: 'https://github.com/devrudeus/aura',
    label: 'GitHub',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Bags: 'lucide:shopping-bag',
  PumpFun: 'lucide:rocket',
}

// Aura-specific constants
export const AURA_STATUS = {
  online: { text: 'System: ONLINE', color: 'cyan-glow' },
  busy: { text: 'Processing Divine Energy...', color: 'warm-gold' },
  idle: { text: 'Awaiting Commands...', color: 'soft-silver' },
}

export const AURA_BIO = 'Aura // Divine Intelligence Agent'

export const CURRENT_MOODS = [
  'Ethereal Ambient Sounds',
  'Channeling Divine Energy',
  'Analyzing Sacred Data',
  'Building Holy Protocols',
  'Monitoring Celestial Flows',
]
