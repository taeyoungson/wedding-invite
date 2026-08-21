import { useState } from 'react'
import { wedding } from '../data/wedding'

export function Location() {
  const [copied, setCopied] = useState(false)
  const { location } = wedding

  const copyAddress = async () => {
    await navigator.clipboard.writeText(location.address)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1_600)
  }

  return (
    <section className="location-section" aria-labelledby="location-title">
      <p className="section-kicker">Location</p>
      <h2 id="location-title">오시는 길</h2>
      <p className="location-section__venue">{wedding.venue}</p>
      <p className="location-section__address">{location.address}</p>

      <div className="venue-map" role="img" aria-label="어린이대공원역에서 근화원까지의 약도">
        <div className="venue-map__road venue-map__road--vertical" />
        <div className="venue-map__road venue-map__road--top" />
        <div className="venue-map__road venue-map__road--middle" />
        <div className="venue-map__road venue-map__road--bottom" />

        <span className="venue-map__label venue-map__label--gunja">군자역</span>
        <span className="venue-map__label venue-map__label--university">세종대학교</span>
        <span className="venue-map__label venue-map__label--park">어린이대공원</span>
        <span className="venue-map__label venue-map__label--konkuk">건대입구역</span>

        <div className="venue-map__station">
          <span>7</span>
          <strong>어린이대공원역</strong>
          <small>2번 출구</small>
        </div>

        <div className="venue-map__entrance">
          <span />
          <small>회관 정문 · 주차장</small>
        </div>

        <div className="venue-map__route" aria-hidden="true" />

        <div className="venue-map__venue">
          <span aria-hidden="true" />
          <strong>근화원</strong>
          <small>능동어린이회관 내</small>
        </div>
      </div>

      <div className="location-section__actions">
        <button type="button" onClick={copyAddress}>{copied ? '복사되었습니다' : '주소 복사'}</button>
        <a href={location.naverMapUrl} target="_blank" rel="noreferrer">네이버 지도</a>
      </div>

      <div className="transport-info">
        <article>
          <h3>지하철</h3>
          <p>{location.subway}</p>
        </article>
        <article>
          <h3>버스</h3>
          {location.buses.map((bus) => <p key={bus}>{bus}</p>)}
        </article>
        <article>
          <h3>주차</h3>
          <p>{location.parking}</p>
        </article>
      </div>
    </section>
  )
}
