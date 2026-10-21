import { useEffect, useState } from 'react';

const AUTOPLAY_MS = 7000;
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

function Chevron({ direction }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
    </svg>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);
  return reduced;
}

export default function HeroBanner({ banners, onChoose }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const count = banners.length;

  useEffect(() => {
    if (paused || reducedMotion || count < 2) return undefined;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % count), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [index, paused, reducedMotion, count]);

  const go = (step) => setIndex((current) => (current + step + count) % count);

  return (
    <div
      className="banner"
      role="region"
      aria-roledescription="карусель"
      aria-label="Афиша событий"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {banners.map((banner, slide) => (
        <button
          key={banner.id}
          type="button"
          className={`banner-slide ${slide === index ? 'is-active' : ''}`}
          aria-hidden={slide !== index}
          tabIndex={slide === index ? 0 : -1}
          aria-label={`${banner.alt}. Смотреть расписание`}
          onClick={onChoose}
        >
          <img
            className="banner-image"
            src={assetUrl(banner.small)}
            srcSet={`${assetUrl(banner.small)} 1200w, ${assetUrl(banner.large)} 3200w`}
            sizes="100vw"
            alt=""
            style={{ '--mobile-focus': banner.mobileFocus }}
            loading={slide === 0 ? 'eager' : 'lazy'}
          />
        </button>
      ))}
      <div className="banner-controls">
        <button type="button" aria-label="Предыдущий баннер" onClick={() => go(-1)}><Chevron direction="left" /></button>
        <div className="banner-dots" role="group" aria-label="Выбор баннера">
          {banners.map((banner, dot) => (
            <button
              key={banner.id}
              type="button"
              className={dot === index ? 'is-active' : ''}
              aria-label={`Баннер ${dot + 1}: ${banner.alt}`}
              aria-current={dot === index}
              onClick={() => setIndex(dot)}
            />
          ))}
        </div>
        <button type="button" aria-label="Следующий баннер" onClick={() => go(1)}><Chevron direction="right" /></button>
      </div>
    </div>
  );
}
