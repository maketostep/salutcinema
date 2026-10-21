import { useEffect, useState } from 'react';

const AUTOPLAY_MS = 7000;
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const mainTitle = (film) => film.title.split('. ')[0];
const subtitle = (film) => film.title.split('. ').slice(1).join('. ');

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

export default function HeroBanner({ films, onChoose, onDetails }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const count = films.length;

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
      aria-label="Премьеры недели"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {films.map((film, slide) => (
        <article
          key={film.id}
          className={`banner-slide ${slide === index ? 'is-active' : ''}`}
          aria-hidden={slide !== index}
          inert={slide === index ? undefined : ''}
          style={{ '--tone-a': film.palette?.[0], '--tone-b': film.palette?.[1] }}
        >
          <img
            className="banner-image"
            src={assetUrl(film.banner || film.poster)}
            alt=""
            style={{ objectPosition: film.bannerFocus || '50% 30%' }}
            loading={slide === 0 ? 'eager' : 'lazy'}
          />
          <div className="banner-copy">
            <div className="banner-badges">
              {film.isNew && <span className="banner-new">НОВИНКА</span>}
              <span className="banner-age">{film.age}</span>
            </div>
            <h2 className={`banner-title ${mainTitle(film).length > 14 ? 'is-long' : ''}`}>{mainTitle(film)}</h2>
            {subtitle(film) && <p className="banner-subtitle">{subtitle(film)}</p>}
            <p className="banner-tagline">{film.tagline}</p>
            <p className="banner-meta">{film.genre} <i>·</i> {film.duration}</p>
            <div className="banner-actions">
              <button type="button" className="button-primary" onClick={() => onChoose(film)}>Выбрать сеанс</button>
              <button type="button" className="button-banner-ghost" onClick={() => onDetails(film)}>О фильме</button>
            </div>
          </div>
        </article>
      ))}
      <div className="banner-controls">
        <button type="button" aria-label="Предыдущая премьера" onClick={() => go(-1)}><Chevron direction="left" /></button>
        <div className="banner-dots" role="group" aria-label="Выбор баннера">
          {films.map((film, dot) => (
            <button
              key={film.id}
              type="button"
              className={dot === index ? 'is-active' : ''}
              aria-label={`Баннер ${dot + 1}: ${film.title}`}
              aria-current={dot === index}
              onClick={() => setIndex(dot)}
            />
          ))}
        </div>
        <button type="button" aria-label="Следующая премьера" onClick={() => go(1)}><Chevron direction="right" /></button>
      </div>
    </div>
  );
}
