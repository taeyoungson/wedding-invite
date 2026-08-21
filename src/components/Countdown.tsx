import { useEffect, useState } from 'react'

const weddingTimestamp = new Date('2026-10-17T12:00:00+09:00').getTime()

function getRemainingTime() {
  const difference = Math.max(0, weddingTimestamp - Date.now())

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    isWeddingDay: difference === 0,
  }
}

export function Countdown() {
  const [remaining, setRemaining] = useState(getRemainingTime)

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemainingTime()), 1_000)
    return () => window.clearInterval(timer)
  }, [])

  if (remaining.isWeddingDay) {
    return <p className="countdown__complete">오늘, 저희 결혼합니다.</p>
  }

  const units = [
    ['DAYS', remaining.days],
    ['HOURS', remaining.hours],
    ['MIN', remaining.minutes],
    ['SEC', remaining.seconds],
  ] as const

  return (
    <div className="countdown" aria-label="결혼식까지 남은 시간" aria-live="off">
      <p className="countdown__title">태영과 현아의 결혼식까지</p>
      <div className="countdown__units">
        {units.map(([label, value]) => (
          <div className="countdown__unit" key={label}>
            <strong>{String(value).padStart(2, '0')}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
