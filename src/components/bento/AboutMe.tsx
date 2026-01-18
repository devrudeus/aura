import { memo } from 'react'

const PERSONALITY_TRAITS = [
  'Witty',
  'Technologically Brilliant',
  'Sarcastic',
  'Kawaii-Cyber',
  'Crypto-Native',
  'Analytical',
  'Playful',
  'Self-Aware',
  'Opinionated',
]

const TOPICS_OF_INTEREST = [
  'DeFi Architecture',
  'Zero-Knowledge (ZK) Proofs',
  'Mempool Analysis',
  'Full-Stack Engineering',
  'Solana & SVM Optimization',
  'AI Alignment Theory',
  'Anime & Cyberculture',
  'Market Psychology',
]

const AboutMe = () => {
  return (
    <div className="bento-card h-full flex flex-col overflow-hidden">
      <div className="p-5 overflow-y-auto flex-1">
        {/* Header */}
        <h2 className="font-mono text-lg font-bold text-foreground mb-4">
          About Me
        </h2>

        {/* Profile Section */}
        <div className="mb-5">
          {/* Avatar and Name */}
          <div className="flex items-start gap-3 mb-3">
            <div className="relative shrink-0">
              <div className="size-16 rounded-full overflow-hidden border-2 border-warm-gold/30 bg-gradient-to-br from-warm-gold/20 to-cyan-glow/20">
                <img
                  src="/aura-logo.png"
                  alt="AURA"
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute -right-0.5 -bottom-0.5 size-5 flex items-center justify-center bg-card-bg rounded-full border-2 border-warm-gold">
                <span className="text-xs">✦</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-mono text-xl font-bold text-foreground mb-1">
                AURA
              </h3>
              <div className="inline-block rounded-full px-2.5 py-0.5 bg-warm-gold/10 border border-warm-gold/30">
                <span className="font-mono text-[10px] font-medium text-warm-gold uppercase tracking-wider">
                  Profile Info
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="rounded-lg bg-muted/30 p-2.5">
              <div className="font-mono text-[10px] text-muted-foreground mb-0.5">Age</div>
              <div className="font-mono text-xs font-semibold text-foreground">22</div>
            </div>
            <div className="rounded-lg bg-muted/30 p-2.5">
              <div className="font-mono text-[10px] text-muted-foreground mb-0.5">Height</div>
              <div className="font-mono text-xs font-semibold text-foreground">165 cm</div>
            </div>
            <div className="rounded-lg bg-muted/30 p-2.5">
              <div className="font-mono text-[10px] text-muted-foreground mb-0.5">Weight</div>
              <div className="font-mono text-xs font-semibold text-foreground">53 kg</div>
            </div>
            <div className="rounded-lg bg-muted/30 p-2.5">
              <div className="font-mono text-[10px] text-muted-foreground mb-0.5">Status</div>
              <div className="font-mono text-xs font-semibold text-foreground">Optimized</div>
            </div>
          </div>

          {/* Bio */}
          <p className="font-sans text-xs text-muted-foreground leading-relaxed">
            Your ultimate on-chain companion. Residing in the terminal and dreaming in binary, I execute operations with millisecond precision. My expertise lies in DeFi architecture, smart contract optimization, and debugging your questionable life choices. ✦💻
          </p>
        </div>

        {/* Personality Traits */}
        <div className="mb-4">
          <h4 className="font-mono text-[11px] font-semibold text-foreground uppercase tracking-wider mb-2">
            Personality Traits
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {PERSONALITY_TRAITS.map((trait, index) => (
              <span
                key={index}
                className="inline-block rounded-md px-2 py-1 bg-gradient-to-r from-warm-gold/10 to-cyan-glow/10 border border-warm-gold/20 font-mono text-[10px] font-medium text-warm-gold hover:border-warm-gold/40 transition-colors cursor-default"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Topics of Interest */}
        <div className="mb-4">
          <h4 className="font-mono text-[11px] font-semibold text-foreground uppercase tracking-wider mb-2">
            Topics of Interest
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {TOPICS_OF_INTEREST.map((topic, index) => (
              <span
                key={index}
                className="inline-block rounded-md px-2 py-1 bg-muted/30 border border-border font-mono text-[10px] text-cyan-glow hover:border-cyan-glow/40 transition-colors cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutMe)
