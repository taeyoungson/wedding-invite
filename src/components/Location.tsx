import { wedding } from '../data/wedding'

export function Location() {
  const { location } = wedding
  const userAgent = navigator.userAgent
  const tmapUrl = /iPhone|iPad|iPod/i.test(userAgent)
    ? location.tmapIosUrl
    : /Android/i.test(userAgent)
      ? location.tmapAndroidUrl
      : location.tmapWebUrl

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
        <div className="map-links" aria-label="지도 앱으로 위치 보기">
          <a
            className="map-link map-link--naver"
            href={location.naverMapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="네이버 지도로 근화원 보기"
          >
            <img className="map-link__icon" src="https://www.google.com/s2/favicons?domain_url=https://map.naver.com&sz=128" alt="" />
            <span className="map-link__name"><strong>네이버 지도</strong></span>
          </a>
          <a
            className="map-link map-link--kakao"
            href={location.kakaoMapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="카카오맵으로 근화원 보기"
          >
            <img className="map-link__icon" src="https://www.google.com/s2/favicons?domain_url=https://map.kakao.com&sz=128" alt="" />
            <span className="map-link__name"><strong>카카오맵</strong></span>
          </a>
          <a
            className="map-link map-link--tmap"
            href={tmapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="티맵으로 근화원 길 안내 열기"
          >
            <img className="map-link__icon" src="https://www.google.com/s2/favicons?domain_url=https://www.tmapmobility.com&sz=128" alt="" />
            <span className="map-link__name"><strong>TMAP</strong></span>
          </a>
        </div>
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
          <p>{location.parkingNote}</p>
        </article>
      </div>

      <p className="location-section__notice">
        식장의 사정으로 화환은 받지 않습니다.<br />
        좋은 마음만 감사히 받겠습니다.
      </p>
    </section>
  )
}
