import { useEffect, useRef, useState } from 'react'

const MUSIC_URL =
  'https://cdn.pixabay.com/download/audio/2026/08/01/audio_c48fcf7267.mp3?filename=alex-morgan-wedding-garden-ceremony-glow-578500.mp3'

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const manuallyPausedRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.18

    const startMusic = () => {
      if (manuallyPausedRef.current || !audio.paused) return
      void audio.play().catch(() => undefined)
    }

    void audio.play().catch(() => {
      document.addEventListener('pointerdown', startMusic, { once: true })
      document.addEventListener('keydown', startMusic, { once: true })
    })

    return () => {
      document.removeEventListener('pointerdown', startMusic)
      document.removeEventListener('keydown', startMusic)
    }
  }, [])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      manuallyPausedRef.current = false
      void audio.play().catch(() => undefined)
      return
    }

    manuallyPausedRef.current = true
    audio.pause()
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC_URL}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        className={`music-toggle${isPlaying ? ' music-toggle--playing' : ''}`}
        type="button"
        aria-label={isPlaying ? '배경음악 끄기' : '배경음악 켜기'}
        aria-pressed={isPlaying}
        onClick={toggleMusic}
      >
        <span className="music-toggle__note" aria-hidden="true">♪</span>
      </button>
    </>
  )
}
