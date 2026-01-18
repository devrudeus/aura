import { memo, useState, useRef } from 'react'

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="bento-card relative size-full overflow-hidden">
      {/* Video Element */}
      <video
        ref={videoRef}
        src="/video.mp4"
        className="absolute inset-0 size-full object-cover"
        loop
        muted={isMuted}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-void-black/90 via-void-black/40 to-transparent" />

      {/* Logo Cover Overlay - Hide ChatGPT logo */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-void-black/95 to-transparent" />

      {/* Bottom Right Logo Cover - Hide ChatGPT logo */}
      <div className="absolute bottom-0 right-0 w-32 h-24 bg-gradient-to-tl from-void-black/95 to-transparent" />

      {/* Content Overlay */}
      <div className="relative z-10 flex size-full flex-col justify-between p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-warm-gold uppercase tracking-wider">
            Divine_Vision
          </span>
          <div className="flex items-center gap-2">
            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="flex size-8 items-center justify-center rounded-full bg-void-black/60 backdrop-blur-sm border border-warm-gold/30 hover:border-warm-gold transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <svg className="size-4 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="size-4 text-cyan-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
            {/* Live Indicator */}
            <div className="flex items-center gap-1.5 rounded-full bg-void-black/60 px-2 py-1 backdrop-blur-sm">
              <span className={`size-2 rounded-full ${isPlaying ? 'bg-cyan-glow status-online' : 'bg-muted-foreground'}`} />
              <span className="font-mono text-xs text-muted-foreground">
                {isPlaying ? 'Live' : 'Paused'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="space-y-3">
          {/* Title */}
          <div>
            <h3 className="mb-1 font-mono text-lg font-medium text-foreground">
              Ethereal Presence
            </h3>
            <p className="font-mono text-xs text-muted-foreground">
              Witness the divine energy in motion
            </p>
          </div>

          {/* Play Button & Progress */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-warm-gold to-cyan-glow transition-transform hover:scale-105 active:scale-95"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg className="size-5 text-void-black" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg className="size-5 text-void-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Waveform Visualization */}
            <div className="flex flex-1 items-center gap-[2px]">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-full transition-all duration-150 ${
                    isPlaying ? 'bg-gradient-to-t from-warm-gold to-cyan-glow' : 'bg-muted-foreground/30'
                  }`}
                  style={{
                    height: isPlaying
                      ? `${Math.random() * 20 + 8}px`
                      : '4px',
                    animationDelay: `${i * 50}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 m-2 size-4 border-l-2 border-t-2 border-warm-gold/50" />
      <div className="absolute top-0 right-0 m-2 size-4 border-r-2 border-t-2 border-cyan-glow/50" />
      <div className="absolute bottom-0 left-0 m-2 size-4 border-l-2 border-b-2 border-cyan-glow/50" />
      <div className="absolute bottom-0 right-0 m-2 size-4 border-r-2 border-b-2 border-warm-gold/50" />
    </div>
  )
}

export default memo(VideoShowcase)
