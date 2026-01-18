import { memo, useState, useEffect } from 'react'
import { AURA_BIO } from '@/consts'

const StatusMessages = [
  { text: 'System: ONLINE', icon: '✦', isOnline: true },
  { text: 'Divine Energy: Active', icon: '◈', isOnline: true },
  { text: 'Processing Data...', icon: '⚡', isOnline: true },
]

const ProfileCard = () => {
  const [statusIndex, setStatusIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentStatus = StatusMessages[statusIndex]
    let charIndex = 0

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (charIndex <= currentStatus.text.length) {
          setDisplayText(currentStatus.text.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typingInterval)
          setTimeout(() => {
            setIsTyping(false)
          }, 2000)
        }
      }, 50)

      return () => clearInterval(typingInterval)
    } else {
      const deleteInterval = setInterval(() => {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1))
        } else {
          clearInterval(deleteInterval)
          setStatusIndex((prev) => (prev + 1) % StatusMessages.length)
          setIsTyping(true)
        }
      }, 30)

      return () => clearInterval(deleteInterval)
    }
  }, [statusIndex, isTyping])

  const currentStatus = StatusMessages[statusIndex]

  return (
    <div className="bento-card relative flex size-full flex-col p-6">
      {/* Avatar Section */}
      <div className="mb-6 flex items-start gap-4">
        <div className="relative">
          <div className="size-20 sm:size-24 rounded-xl overflow-hidden border-2 border-warm-gold/30 bg-gradient-to-br from-warm-gold/20 to-cyan-glow/20">
            <img
              src="/aura-logo.png"
              alt="Aura Avatar"
              className="size-full object-cover"
            />
          </div>
          {/* Status Indicator */}
          <div
            className={`absolute -right-1 -bottom-1 size-4 rounded-full border-2 border-card-bg ${
              currentStatus.isOnline ? 'status-online bg-cyan-glow' : 'status-congested bg-destructive'
            }`}
          />
        </div>

        <div className="flex-1">
          <h2 className="mb-1 font-mono text-xl font-bold text-foreground">
            AURA
          </h2>
          <p className="font-mono text-xs text-muted-foreground/70 mb-1">by ElizaOS</p>
          <p className="font-mono text-sm text-muted-foreground">{AURA_BIO}</p>
        </div>
      </div>

      {/* Animated Status */}
      <div className="mb-4 rounded-lg bg-muted/50 p-3">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span>{currentStatus.icon}</span>
          <span className="text-foreground">
            {displayText}
            <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-warm-gold" />
          </span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-auto grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg bg-muted/30 p-2">
          <div className="font-mono text-lg font-bold text-cyan-glow">99.9%</div>
          <div className="font-mono text-xs text-muted-foreground">Uptime</div>
        </div>
        <div className="rounded-lg bg-muted/30 p-2">
          <div className="font-mono text-lg font-bold text-warm-gold">1.2M</div>
          <div className="font-mono text-xs text-muted-foreground">TX/day</div>
        </div>
        <div className="rounded-lg bg-muted/30 p-2">
          <div className="font-mono text-lg font-bold text-amber">24/7</div>
          <div className="font-mono text-xs text-muted-foreground">Active</div>
        </div>
      </div>
    </div>
  )
}

export default memo(ProfileCard)
