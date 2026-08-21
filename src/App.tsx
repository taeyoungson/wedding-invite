import { wedding } from './data/wedding'
import { Invitation } from './components/Invitation'
import { Calendar } from './components/Calendar'
import { Gallery } from './components/Gallery'
import { Location } from './components/Location'
import { Accounts } from './components/Accounts'

function App() {
  return (
    <main className="invitation-canvas" aria-label="손태영과 조현아의 모바일 청첩장">
      <section className="cover" aria-labelledby="cover-names">
        <header className="cover__header">
          <p className="cover__eyebrow">WEDDING INVITATION</p>
          <p className="cover__date">
            {wedding.dateLabel}
            <span aria-hidden="true"> · </span>
            {wedding.timeLabel}
          </p>
        </header>

        <figure className="cover__photo-frame">
          <img
            className="cover__photo"
            src={wedding.coverImage}
            alt="추후 신랑 신부의 대표 사진으로 교체할 자리"
          />
        </figure>

        <div className="cover__content">
          <h1 id="cover-names">
            <span>{wedding.groom}</span>
            <span className="cover__name-divider" aria-hidden="true">그리고</span>
            <span>{wedding.bride}</span>
          </h1>
          <div className="cover__line" aria-hidden="true" />
          <p className="cover__venue">{wedding.venue}</p>
        </div>
      </section>
      <Invitation />
      <Calendar />
      <Gallery />
      <Location />
      <Accounts />
    </main>
  )
}

export default App
