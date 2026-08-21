import { wedding } from '../data/wedding'
import { Countdown } from './Countdown'

const weekdayLabels = ['일', '월', '화', '수', '목', '금', '토'] as const

function getCalendarDays(year: number, month: number) {
  const firstWeekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay()
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate()

  return [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: lastDay }, (_, index) => index + 1),
  ]
}

export function Calendar() {
  const { year, month, day } = wedding.ceremonyDate
  const days = getCalendarDays(year, month)

  return (
    <section className="calendar-section" aria-labelledby="calendar-title">
      <p className="section-kicker">The Wedding Day</p>
      <h2 id="calendar-title">
        {year}. {String(month).padStart(2, '0')}. {String(day).padStart(2, '0')}
      </h2>
      <p className="calendar-section__summary">토요일 낮 12시 · {wedding.venue}</p>

      <div className="calendar" aria-label={`${year}년 ${month}월 달력`}>
        <div className="calendar__month" aria-hidden="true">
          <span>{month}</span>
          <small>OCTOBER</small>
        </div>

        <div className="calendar__grid calendar__grid--weekdays" aria-hidden="true">
          {weekdayLabels.map((weekday, index) => (
            <span
              className={index === 0 ? 'is-sunday' : index === 6 ? 'is-saturday' : undefined}
              key={weekday}
            >
              {weekday}
            </span>
          ))}
        </div>

        <div className="calendar__grid calendar__grid--days">
          {days.map((calendarDay, index) => {
            const isWeddingDay = calendarDay === day

            return (
              <span
                className={isWeddingDay ? 'is-wedding-day' : undefined}
                key={`${calendarDay ?? 'empty'}-${index}`}
                aria-label={isWeddingDay ? `${month}월 ${day}일, 결혼식 날` : undefined}
                aria-hidden={calendarDay === null ? 'true' : undefined}
              >
                {calendarDay}
              </span>
            )
          })}
        </div>
      </div>
      <Countdown />
    </section>
  )
}
