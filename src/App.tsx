import { wedding } from './data/wedding'
import { Invitation } from './components/Invitation'
import { Calendar } from './components/Calendar'
import { Gallery } from './components/Gallery'
import { Location } from './components/Location'
import { Accounts } from './components/Accounts'
import { BackgroundMusic } from './components/BackgroundMusic'

function App() {
  return (
    <main className="invitation-canvas" aria-label="손태영과 조현아의 모바일 청첩장">
      <BackgroundMusic />
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
            alt="신랑 손태영과 신부 조현아의 웨딩 사진"
          />
        </figure>

        <div className="cover__content">
          <h1 id="cover-names">
            <span>{wedding.groom}</span>
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
