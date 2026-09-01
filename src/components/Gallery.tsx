import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { galleryPhotos } from '../data/wedding'

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const close = () => setSelectedIndex(null)
  const showPrevious = () =>
    setSelectedIndex((current) =>
      current === null ? null : (current - 1 + galleryPhotos.length) % galleryPhotos.length,
    )
  const showNext = () =>
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % galleryPhotos.length,
    )

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex])

  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <p className="section-kicker">Our Moments</p>
      <h2 id="gallery-title">우리의 순간</h2>
      <p className="gallery-section__description">함께여서 더욱 빛났던 날들을 담았습니다.</p>
      <p className="gallery-section__hint">좌우로 넘겨 사진을 감상해 주세요.</p>

      <div className="gallery-grid" role="region" aria-label="웨딩 사진 슬라이드">
        {galleryPhotos.map((photo, index) => (
          <button
            className="gallery-grid__item"
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`${index + 1}번째 사진 크게 보기`}
            key={`${photo.alt}-${index}`}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>

      {selectedIndex !== null &&
        createPortal(
          <div className="gallery-modal" role="dialog" aria-modal="true" aria-label="사진 크게 보기">
            <button className="gallery-modal__backdrop" type="button" onClick={close} aria-label="닫기" />
            <button className="gallery-modal__close" type="button" onClick={close} aria-label="닫기">
              ×
            </button>
            <button
              className="gallery-modal__arrow gallery-modal__arrow--previous"
              type="button"
              onClick={showPrevious}
              aria-label="이전 사진"
            >
              ‹
            </button>
            <figure className="gallery-modal__figure">
              <img
                src={galleryPhotos[selectedIndex].src}
                alt={galleryPhotos[selectedIndex].alt}
                draggable={false}
              />
              <figcaption>
                {selectedIndex + 1} / {galleryPhotos.length}
              </figcaption>
            </figure>
            <button
              className="gallery-modal__arrow gallery-modal__arrow--next"
              type="button"
              onClick={showNext}
              aria-label="다음 사진"
            >
              ›
            </button>
          </div>,
          document.body,
        )}
    </section>
  )
}
