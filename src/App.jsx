import { useEffect, useMemo, useState } from 'react';

const phone = '+7 (8652) 33-00-00';
const phoneHref = '+78652330000';

const hasRating = (value) => value && value !== '—';

function makeShow(time, format, hall, price) {
  return { time, format, hall, price };
}

const films = [
  {
    id: 'bitva-motorov',
    title: 'Битва моторов',
    genre: 'Приключения · Биография · Драма',
    duration: '2 ч 23 мин',
    age: '12+',
    imdb: '—',
    kinopoisk: '—',
    likes: 65,
    isNew: true,
    artwork: 'forest',
    poster: '/posters/bitva-motorov.webp',
    palette: ['#6b7650', '#182523'],
    tagline: 'Гонка, которая изменила историю',
    director: 'Илья Маланин',
    cast: ['Иван Янковский', 'Юра Борисов', 'Паулина Андреева'],
    synopsis: 'В начале XX века автогонщик и журналист Андрей Нагель мечтает вывести российский автомобиль на большую европейскую гонку. Вместе с инженером Дмитрием Бондаревым он готовит «Руссо-Балт» к испытанию, которое может изменить историю отечественного автоспорта.',
    sessions: {
      center: {
        0: [makeShow('12:10', '2D', 3, 450), makeShow('16:40', '3D', 2, 520), makeShow('21:20', '2D', 5, 450)],
        1: [makeShow('11:30', '2D', 4, 450), makeShow('18:15', '3D', 1, 520)],
        2: [makeShow('13:00', '2D', 2, 450), makeShow('20:10', '2D', 6, 450)],
        3: [makeShow('12:45', '3D', 1, 520), makeShow('17:30', '2D', 5, 450), makeShow('21:50', '2D', 3, 450)],
        4: [makeShow('14:20', '2D', 3, 450)],
        5: [makeShow('11:10', '2D', 2, 450), makeShow('19:35', '3D', 1, 520)],
      },
      south: {
        0: [makeShow('13:30', '2D', 2, 430), makeShow('19:10', '2D', 4, 430)],
        1: [makeShow('15:00', '3D', 1, 500)],
        2: [makeShow('12:10', '2D', 5, 430), makeShow('18:40', '2D', 3, 430)],
        3: [makeShow('14:00', '2D', 4, 430), makeShow('21:10', '3D', 1, 500)],
        4: [makeShow('16:20', '2D', 2, 430)],
        5: [makeShow('12:30', '2D', 3, 430)],
      },
    },
  },
  {
    id: 'bez-oglyadki',
    title: 'Без оглядки',
    genre: 'Драма · Комедия · Приключения',
    duration: '1 ч 21 мин',
    age: '18+',
    imdb: '—',
    kinopoisk: '—',
    likes: 42,
    isNew: true,
    artwork: 'orbit',
    poster: '/posters/bez-oglyadki.webp',
    palette: ['#4e7391', '#15202f'],
    tagline: 'Иногда лучший план — уехать',
    director: 'Наталия Кончаловская',
    cast: ['Анна Пересильд', 'Дарья Алыпова', 'Олег Савостюк'],
    synopsis: 'Соседки Женя и Соня решают, что случайно убили человека, и в панике отправляются в бега. Без денег, маршрута и опыта за рулём их поездка превращается в череду приключений — и попытку понять, от чего они на самом деле бегут.',
    sessions: {
      center: {
        0: [makeShow('14:00', '2D', 6, 450), makeShow('20:30', '3D', 1, 520)],
        1: [makeShow('12:20', '3D', 1, 520), makeShow('19:45', '2D', 4, 450)],
        2: [makeShow('15:10', '2D', 5, 450)],
        3: [makeShow('11:45', '2D', 3, 450), makeShow('18:20', '3D', 1, 520)],
        4: [makeShow('13:35', '2D', 6, 450), makeShow('21:00', '2D', 2, 450)],
        5: [makeShow('16:10', '3D', 1, 520)],
      },
      south: {
        0: [makeShow('11:20', '2D', 3, 430), makeShow('15:50', '3D', 1, 500), makeShow('21:00', '2D', 5, 430)],
        1: [makeShow('14:40', '2D', 2, 430)],
        2: [makeShow('12:00', '3D', 1, 500), makeShow('19:20', '2D', 3, 430)],
        3: [makeShow('16:15', '2D', 4, 430)],
        4: [makeShow('12:40', '2D', 5, 430), makeShow('20:00', '3D', 1, 500)],
        5: [makeShow('14:30', '2D', 3, 430), makeShow('18:10', '2D', 2, 430)],
      },
    },
  },
  {
    id: 'arahnid',
    title: 'Арахнид',
    genre: 'Ужасы · Триллер',
    duration: '1 ч 26 мин',
    age: '18+',
    imdb: '—',
    kinopoisk: '—',
    likes: 28,
    isNew: false,
    artwork: 'noir',
    poster: '/posters/arahnid.webp',
    palette: ['#a35b49', '#201519'],
    tagline: 'В этом доме слишком много ног',
    director: 'Анхель Гомес Эрнандес',
    cast: ['Матильда Лутц', 'Грегг Салкин', 'Мелина Мэтьюз'],
    synopsis: 'После поездки один из жильцов невольно приносит в многоквартирный дом опасный вид пауков. Дом закрывают на карантин, а соседям приходится бороться за выживание в замкнутом пространстве.',
    sessions: {
      center: {
        0: [makeShow('22:15', '2D', 5, 450)],
        1: [makeShow('21:30', '2D', 6, 450), makeShow('23:20', '2D', 4, 450)],
        2: [makeShow('20:40', '2D', 5, 450)],
        3: [makeShow('22:00', '2D', 3, 450)],
        4: [makeShow('21:15', '2D', 6, 450)],
        5: [makeShow('22:25', '2D', 5, 450)],
      },
      south: {
        2: [makeShow('21:30', '2D', 3, 430)],
        4: [makeShow('22:10', '2D', 4, 430)],
      },
    },
  },
  {
    id: 'doktor-glas',
    title: 'Доктор Глас',
    genre: 'Триллер · Драма',
    duration: '1 ч 51 мин',
    age: '18+',
    imdb: '7.3',
    kinopoisk: '—',
    likes: 83,
    isNew: false,
    artwork: 'noir',
    poster: '/posters/doktor-glas.webp',
    palette: ['#526b79', '#17232a'],
    tagline: 'Спасти её — значит перейти черту',
    director: 'Эрик Лейжонборг',
    cast: ['Исак Кальмрот', 'Теа Софье Лок Несс', 'Кристиан Фанданго Сундгрен'],
    synopsis: 'Одинокий врач Габриэль Глас встречает Хельгу, оказавшуюся в разрушительном браке. Попытка помочь ей затягивает доктора в опасную связь, где переплетаются ложь, желание и власть.',
    sessions: {
      center: {
        1: [makeShow('10:50', '2D', 2, 350), makeShow('13:15', '2D', 4, 350)],
        3: [makeShow('11:00', '2D', 2, 350)],
        5: [makeShow('12:05', '2D', 4, 350), makeShow('15:25', '2D', 6, 350)],
      },
      south: {
        0: [makeShow('10:40', '2D', 2, 330)],
        1: [makeShow('12:00', '2D', 3, 330), makeShow('16:20', '2D', 5, 330)],
        2: [makeShow('10:30', '2D', 2, 330), makeShow('14:10', '2D', 3, 330)],
        3: [makeShow('13:00', '2D', 4, 330)],
        4: [makeShow('11:20', '2D', 2, 330), makeShow('15:10', '2D', 5, 330)],
        5: [makeShow('10:45', '2D', 3, 330)],
      },
    },
  },
  {
    id: 'mamontenok',
    title: 'Приключения мамонтёнка. В поисках мамы',
    genre: 'Анимация · Приключения · Семейный',
    duration: '1 ч 13 мин',
    age: '6+',
    imdb: '—',
    kinopoisk: '—',
    likes: 37,
    isNew: true,
    artwork: 'sunset',
    poster: '/posters/mamontenok.webp',
    palette: ['#d7a86c', '#253d4a'],
    tagline: 'Маленький герой ищет самое важное',
    director: 'Александр Войтинский',
    cast: ['Пелагея', 'Вадим Галыгин', 'NILETTO'],
    synopsis: 'Мамонтёнок Пушистик просыпается после тысячелетнего сна и отправляется на поиски мамы. В пути его сопровождает птенец Тупик, мечтающий выступить на конкурсе «Африка ищет таланты».',
    sessions: {
      center: {
        0: [makeShow('10:10', '2D', 3, 450), makeShow('11:40', '2D', 4, 450), makeShow('14:50', '2D', 2, 450), makeShow('16:00', '2D', 7, 450), makeShow('18:10', '3D', 1, 520), makeShow('21:40', '2D', 6, 450)],
        1: [makeShow('13:20', '2D', 5, 450), makeShow('18:40', '2D', 3, 450)],
        2: [makeShow('12:10', '2D', 4, 450), makeShow('17:00', '3D', 1, 520), makeShow('20:45', '2D', 5, 450)],
        3: [makeShow('15:20', '2D', 2, 450), makeShow('19:50', '2D', 4, 450)],
        4: [makeShow('11:50', '2D', 6, 450), makeShow('16:30', '3D', 1, 520)],
        5: [makeShow('14:00', '2D', 3, 450)],
      },
      south: {
        0: [makeShow('12:30', '2D', 4, 430), makeShow('14:05', '2D', 2, 430), makeShow('17:20', '2D', 3, 430), makeShow('18:30', '2D', 5, 430), makeShow('20:50', '3D', 1, 500)],
        1: [makeShow('16:00', '2D', 5, 430)],
        2: [makeShow('13:50', '2D', 2, 430), makeShow('19:30', '2D', 4, 430)],
        3: [makeShow('11:40', '2D', 3, 430), makeShow('20:10', '3D', 1, 500)],
        4: [makeShow('14:15', '2D', 2, 430)],
        5: [makeShow('18:25', '2D', 4, 430)],
      },
    },
  },
  {
    id: 'tsarevna-nesmeyana',
    title: 'Царевна Несмеяна',
    genre: 'Семейный · Фэнтези · Приключения',
    duration: '1 ч 35 мин',
    age: '6+',
    imdb: '—',
    kinopoisk: '—',
    likes: 51,
    isNew: true,
    artwork: 'museum',
    poster: '/posters/tsarevna-nesmeyana.webp',
    palette: ['#bd9b72', '#423554'],
    tagline: 'Сможешь рассмешить целое царство?',
    director: 'Василий Ровенский',
    cast: ['Слава Копейкин', 'Анастасия Красовская', 'Рузиль Минекаев'],
    synopsis: 'Накануне повышения Ерема вместе с младшей сестрой неожиданно попадает в Тридевятое царство. Чтобы вернуться домой, ему нужно рассмешить царевну Несмеяну — но у девушки есть своя тайна.',
    sessions: {
      center: {
        0: [makeShow('19:00', '2D', 6, 450)],
        2: [makeShow('17:35', '2D', 3, 450), makeShow('20:25', '2D', 5, 450)],
        3: [makeShow('16:50', '2D', 6, 450)],
        5: [makeShow('18:30', '2D', 4, 450)],
      },
      south: {
        0: [makeShow('15:20', '2D', 5, 430), makeShow('20:15', '2D', 2, 430)],
        1: [makeShow('18:00', '2D', 3, 430)],
        2: [makeShow('16:10', '2D', 4, 430)],
        4: [makeShow('19:15', '2D', 5, 430)],
        5: [makeShow('13:40', '2D', 2, 430), makeShow('21:00', '2D', 4, 430)],
      },
    },
  },
];

const comingSoon = [
  {
    id: 'ostrov-paukov', title: 'Остров пауков', genre: 'Ужасы · Комедия', age: '18+', release: 'С 22 октября',
    artwork: 'noir', poster: '/posters/ostrov-paukov.webp', palette: ['#a35b49', '#201519'], tagline: 'Курорт, где не спрятаться',
  },
  {
    id: 'tsikl-zverya', title: 'Цикл зверя', genre: 'Ужасы · Триллер', age: '18+', release: 'С 22 октября',
    artwork: 'forest', poster: '/posters/tsikl-zverya.webp', palette: ['#526b79', '#17232a'], tagline: 'Прошлое не остаётся погребённым',
  },
  {
    id: 'morozko', title: 'Морозко', genre: 'Семейное · Фэнтези', age: '6+', release: 'С 22 октября',
    artwork: 'orbit', poster: '/posters/morozko.webp', palette: ['#748ca3', '#263148'], tagline: 'Новая зимняя сказка',
  },
];

const branches = {
  center: {
    name: 'Салют Центр', short: 'Центр',
    address: 'ТРЦ «Европейский», ул. Карла Маркса, 53',
    mapAddress: 'Ставрополь, ТРЦ Европейский, проспект Карла Маркса 53',
    halls: '7 залов', hours: 'Ежедневно · 10:00–02:00', phone: phone,
    note: 'Премьерный зал с экраном 20 метров и два VIP-зала.',
  },
  south: {
    name: 'Салют Юг', short: 'Юг',
    address: 'ул. 50 лет ВЛКСМ, 1',
    mapAddress: 'Ставрополь, улица 50 лет ВЛКСМ 1',
    halls: '5 залов', hours: 'Ежедневно · 09:30–02:00', phone: phone,
    note: 'Комфортные залы и объёмный звук Dolby Atmos.',
  },
};

function Icon({ name, size = 18, strokeWidth = 1.8, filled = false, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  };
  const shapes = {
    heart: <path d="M20.8 8.7c0 4.1-8.8 10.2-8.8 10.2S3.2 12.8 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" fill={filled ? 'currentColor' : 'none'} />,
    pin: <><path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="M21 16.4v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10.2 18a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.8 3.2 2 2 0 0 1 3.8 1h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7.7 9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 2 2.5Z" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.3 2" /></>,
    ticket: <><path d="M3 8a2 2 0 0 0 0 4v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" /><path d="M13 4v2m0 3v2m0 3v2m0 2v2" /></>,
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    play: <path d="m9 6 10 6-10 6V6Z" fill="currentColor" stroke="none" />,
    left: <path d="m15 18-6-6 6-6" />,
    right: <path d="m9 18 6-6-6-6" />,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    film: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 4v16M17 4v16M3 9h4m-4 6h4m10-6h4m-4 6h4" /></>,
    external: <><path d="M14 3h7v7" /><path d="M10 14 21 3" /><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    sparkle: <><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>,
  };
  return <svg {...common}>{shapes[name] || shapes.film}</svg>;
}

function getDateOptions() {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  return Array.from({ length: 6 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    const weekday = new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(date).replace(/\.$/, '');
    const day = new Intl.DateTimeFormat('ru-RU', { day: 'numeric' }).format(date);
    const full = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long' }).format(date);
    return {
      index,
      label: index === 0 ? 'Сегодня' : index === 1 ? 'Завтра' : `${weekday} ${day}`,
      sublabel: index < 2 ? `${weekday}, ${day}` : full,
      full,
    };
  });
}

function isPastSession(session, dayIndex) {
  if (dayIndex !== 0) return false;
  const [hours, minutes] = session.time.split(':').map(Number);
  const now = new Date();
  return hours * 60 + minutes <= now.getHours() * 60 + now.getMinutes();
}

function getSessions(film, branch, day) {
  return film.sessions?.[branch]?.[day] || [];
}

function PosterArtwork({ film, className = '', onOpen, badge = true }) {
  const style = {
    '--tone-a': film.palette?.[0] || '#8c6252',
    '--tone-b': film.palette?.[1] || '#1c2026',
    '--poster-image': film.poster ? `url("${import.meta.env.BASE_URL}${film.poster.replace(/^\//, '')}")` : 'none',
  };
  return (
    <button
      type="button"
      className={`poster-artwork ${film.poster ? 'has-poster' : ''} art-${film.artwork || 'forest'} ${className}`}
      style={style}
      onClick={onOpen}
      aria-label={`Подробнее о фильме «${film.title}»`}
    >
      <span className="poster-shape" aria-hidden="true" />
      <span className="poster-topline">САЛЮТ <i>КИНО</i></span>
      {badge && film.isNew && <span className="poster-new">НОВИНКА</span>}
      {film.age && <span className="poster-age">{film.age}</span>}
      <span className="poster-copy">
        <span className="poster-tagline">{film.tagline}</span>
        <strong>{film.title}</strong>
        <span className="poster-bottomline">ВЫБИРАЙ СВОЮ ИСТОРИЮ</span>
      </span>
    </button>
  );
}

function FilmInfo({ film, liked, onLike, compact = false }) {
  return (
    <div className={`film-info ${compact ? 'film-info-compact' : ''}`}>
      <div className="film-title-line">
        <h3>{film.title}</h3>
        <span className="film-age-inline">{film.age}</span>
      </div>
      <p className="film-genre">{film.genre}</p>
      <div className="film-facts">
        <span><Icon name="clock" size={14} />{film.duration}</span>
        {hasRating(film.imdb) && <span className="rating-fact"><span className="rating-imdb">IMDb</span> {film.imdb}</span>}
        {hasRating(film.kinopoisk) && <span className="rating-fact"><span className="rating-kp">КП</span> {film.kinopoisk}</span>}
      </div>
      <button
        type="button"
        className={`like-button ${liked ? 'is-liked' : ''}`}
        onClick={onLike}
        aria-pressed={liked}
        aria-label={`${liked ? 'Убрать из' : 'Добавить в'} избранное: ${film.title}`}
      >
        <Icon name="heart" size={16} filled={liked} />
        <span>{film.likes + (liked ? 1 : 0)}</span>
        <span className="like-caption">нравится</span>
      </button>
    </div>
  );
}

function FilmCenter({ film, liked, onLike, onOpen }) {
  return (
    <div className="film-center">
      <PosterArtwork film={film} className="main-poster" onOpen={onOpen} />
      <FilmInfo film={film} liked={liked} onLike={onLike} />
    </div>
  );
}

function ScheduleColumn({ film, branch, day, onSessionClick, variant = '', formatFilter = 'all' }) {
  const allSessions = getSessions(film, branch, day);
  const sessions = formatFilter === 'all'
    ? allSessions
    : allSessions.filter((session) => session.format.toLowerCase() === formatFilter);
  const upcoming = day === 0
    ? sessions.filter((session) => !isPastSession(session, day)).sort((a, b) => a.time.localeCompare(b.time))[0]
    : null;
  const minPrice = sessions.length ? Math.min(...sessions.map((session) => session.price)) : null;
  const heading = variant.includes('desktop-schedule') && <h4 className="schedule-branch">{branches[branch].name}</h4>;

  if (!sessions.length) {
    const formatIsFilteredOut = allSessions.length > 0;
    return (
      <div className={`schedule-column ${variant}`}>
        {heading}
        <div className="schedule-empty">
          <div className="empty-mark"><Icon name="film" size={17} /></div>
          <div>
            <strong>{formatIsFilteredOut ? `Нет сеансов ${formatFilter.toUpperCase()}` : 'В этом кинотеатре не идёт'}</strong>
            <span>{formatIsFilteredOut ? 'Смените фильтр формата, чтобы увидеть остальные сеансы' : 'На выбранную дату сеансов нет'}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`schedule-column ${variant}`}>
      {heading}
      <div className="schedule-summary">
        <span>{sessions.length} {sessions.length === 1 ? 'сеанс' : sessions.length < 5 ? 'сеанса' : 'сеансов'}</span>
        <span>от {minPrice} ₽</span>
      </div>
      <div className="session-grid">
        {sessions.map((session) => {
          const past = isPastSession(session, day);
          const isSoon = upcoming?.time === session.time;
          return (
            <button
              key={`${branch}-${session.time}-${session.hall}`}
              type="button"
              className={`session-button ${isSoon ? 'is-soon' : ''} ${past ? 'is-past' : ''}`}
              disabled={past}
              onClick={() => onSessionClick(film, branch, session)}
              aria-label={`${film.title}, ${branches[branch].name}, ${session.time}, ${session.format}, зал ${session.hall}, ${session.price} рублей${past ? ', сеанс завершён' : ''}`}
            >
              {isSoon && <span className="soon-label">Ближайший</span>}
              <span className="session-topline">
                <strong>{session.time}</strong>
                <span>зал {session.hall}</span>
              </span>
              <span className="session-bottomline">
                <span className="format-chip">{session.format}</span>
                <b>{session.price} ₽</b>
              </span>
              {past && <span className="past-note">Сеанс завершён</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Modal({ children, onClose, labelledBy, className = '' }) {
  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={`modal-card ${className}`} role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
        {children}
      </div>
    </div>
  );
}

function LocationTabs({ value, onChange, mobile = false }) {
  return (
    <div className={`location-tabs ${mobile ? 'location-tabs-mobile' : ''}`} role="tablist" aria-label="Выберите кинотеатр">
      <button type="button" role="tab" aria-selected={value === 'center'} className={value === 'center' ? 'active' : ''} onClick={() => onChange('center')}>Центр</button>
      <button type="button" role="tab" aria-selected={value === 'south'} className={value === 'south' ? 'active' : ''} onClick={() => onChange('south')}>Юг</button>
    </div>
  );
}

function MiniMap({ address, mapAddress }) {
  const mapUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(mapAddress)}`;
  return (
    <div className="mini-map">
      <span className="map-block map-block-one" />
      <span className="map-block map-block-two" />
      <span className="map-road map-road-a" />
      <span className="map-road map-road-b" />
      <span className="map-road map-road-c" />
      <span className="map-water" />
      <span className="map-name">СТАВРОПОЛЬ</span>
      <span className="map-pin"><Icon name="pin" size={19} /></span>
      <a href={mapUrl} target="_blank" rel="noreferrer" aria-label={`Открыть карту: ${address}`}>
        <Icon name="pin" size={14} /> Открыть карту <Icon name="external" size={13} />
      </a>
    </div>
  );
}

function TheatersCard({ branch, onChoose }) {
  const place = branches[branch];
  return (
    <article className="theater-card">
      <MiniMap address={place.address} mapAddress={place.mapAddress} />
      <div className="theater-card-content">
        <div className="theater-kicker"><span className="status-dot" /> КИНОТЕАТР «САЛЮТ»</div>
        <h3>{place.name}</h3>
        <p className="theater-address"><Icon name="pin" size={16} />{place.address}</p>
        <p className="theater-note">{place.note}</p>
        <div className="theater-details">
          <span><Icon name="film" size={15} />{place.halls}</span>
          <span><Icon name="clock" size={15} />{place.hours}</span>
        </div>
        <div className="theater-card-bottom">
          <a href={`tel:${phoneHref}`} className="theater-phone"><Icon name="phone" size={16} />{place.phone}</a>
          <button type="button" className="text-link" onClick={() => onChoose(branch)}>Смотреть сеансы <Icon name="arrow" size={15} /></button>
        </div>
      </div>
    </article>
  );
}

function App() {
  const dates = useMemo(() => getDateOptions(), []);
  const [selectedDay, setSelectedDay] = useState(0);
  const [formatFilter, setFormatFilter] = useState('all');
  const [ageFilter, setAgeFilter] = useState('all');
  const [onlyNew, setOnlyNew] = useState(false);
  const [locationView, setLocationView] = useState('both');
  const [mobileBranch, setMobileBranch] = useState('center');
  const [likedFilms, setLikedFilms] = useState(() => new Set());
  const [detailFilm, setDetailFilm] = useState(null);
  const [booking, setBooking] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (!detailFilm && !booking) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setDetailFilm(null);
        setBooking(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [detailFilm, booking]);

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(''), 3000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const heroFilms = useMemo(() => films.filter((film) => film.isNew).slice(0, 3), []);
  const heroFilm = heroFilms[heroIndex % heroFilms.length];

  const visibleFilms = useMemo(() => films.filter((film) => {
    if (onlyNew && !film.isNew) return false;
    if (ageFilter !== 'all' && film.age !== ageFilter) return false;
    const visibleBranches = isMobile
      ? [mobileBranch]
      : locationView === 'both' ? ['center', 'south'] : [locationView];
    const sessions = visibleBranches.flatMap((branch) => getSessions(film, branch, selectedDay));
    return sessions.some((session) => formatFilter === 'all' || session.format.toLowerCase() === formatFilter);
  }), [onlyNew, ageFilter, formatFilter, isMobile, mobileBranch, locationView, selectedDay]);

  const onLike = (filmId) => {
    setLikedFilms((current) => {
      const next = new Set(current);
      if (next.has(filmId)) next.delete(filmId);
      else next.add(filmId);
      return next;
    });
  };

  const openBooking = (film, branch, session) => {
    setBooking({ film, branch, session });
    setSelectedSeats([]);
    setBookingConfirmed(false);
  };

  const setDesktopLocation = (branch) => {
    setLocationView(branch);
    if (branch !== 'both') setMobileBranch(branch);
  };

  const scrollToSchedule = (branch) => {
    if (branch) setDesktopLocation(branch);
    setMenuOpen(false);
    document.getElementById('afisha')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const clearFilters = () => {
    setFormatFilter('all');
    setAgeFilter('all');
    setOnlyNew(false);
  };

  const hasFilters = formatFilter !== 'all' || ageFilter !== 'all' || onlyNew;

  return (
    <div className="app-shell min-h-screen bg-salute-ink text-salute-paper">
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="brand" aria-label="Салют — на главную" onClick={() => setMenuOpen(false)}>
            <span className="brand-word">САЛЮТ<span className="brand-dot">.</span></span>
            <span className="brand-caption">КИНОТЕАТРЫ СТАВРОПОЛЯ</span>
          </a>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Главная навигация">
            <a href="#afisha" onClick={() => setMenuOpen(false)}>Афиша</a>
            <a href="#soon" onClick={() => setMenuOpen(false)}>Скоро</a>
            <a href="#offers" onClick={() => setMenuOpen(false)}>Акции</a>
            <a href="#cinemas" onClick={() => setMenuOpen(false)}>Кинотеатры</a>
            <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
          </nav>
          <div className="header-actions">
            <a href={`tel:${phoneHref}`} className="header-phone"><Icon name="phone" size={16} />{phone}</a>
            <button type="button" className="menu-toggle" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section page-container" aria-labelledby="hero-title">
          <div className="hero-panel">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> КИНО В СТАВРОПОЛЕ <span className="eyebrow-dot">·</span> {dates[0].full.toUpperCase()}</div>
              <h1 id="hero-title">Истории,<br />которые <em>остаются.</em></h1>
              <p className="hero-intro">Большие премьеры, удобные сеансы и два кинотеатра рядом. Выбирайте, где смотреть — остальное оставьте большому экрану.</p>
              <div className="hero-feature">
                <div className="hero-feature-icon"><Icon name="sparkle" size={19} /></div>
                <div>
                  <span>ПРЕМЬЕРА НЕДЕЛИ</span>
                  <strong>{heroFilm.title}</strong>
                  <small>{heroFilm.genre} <i>·</i> {heroFilm.age}</small>
                </div>
              </div>
              <div className="hero-actions">
                <button type="button" className="button-primary" onClick={() => scrollToSchedule()}>
                  Выбрать сеанс <Icon name="arrow" size={17} />
                </button>
                <button type="button" className="button-quiet" onClick={() => setDetailFilm(heroFilm)}>О фильме</button>
              </div>
            </div>
            <div className="hero-art-area">
              <div className="hero-decoration-circle" aria-hidden="true" />
              <div className="hero-back-card hero-back-card-one"><span>НОВАЯ<br />ИСТОРИЯ</span></div>
              <div className="hero-back-card hero-back-card-two"><span>НА БОЛЬШОМ<br />ЭКРАНЕ</span></div>
              <div className="hero-poster-wrap">
                <PosterArtwork film={heroFilm} className="hero-poster" onOpen={() => setDetailFilm(heroFilm)} />
              </div>
              <div className="hero-slider-controls" aria-label="Премьеры недели">
                <span className="hero-slide-count">0{heroIndex + 1} <i>/</i> 0{heroFilms.length}</span>
                <button type="button" aria-label="Предыдущая премьера" onClick={() => setHeroIndex((index) => (index - 1 + heroFilms.length) % heroFilms.length)}><Icon name="left" size={17} /></button>
                <button type="button" aria-label="Следующая премьера" onClick={() => setHeroIndex((index) => (index + 1) % heroFilms.length)}><Icon name="right" size={17} /></button>
              </div>
            </div>
            <div className="hero-bottom-note"><span /> БЛИЖЕ, ЧЕМ КАЖЕТСЯ <b>·</b> САЛЮТ ЦЕНТР И САЛЮТ ЮГ</div>
          </div>
          <div className="hero-underbar">
            <span><Icon name="pin" size={16} /> Ставрополь</span>
            <span className="hero-underbar-divider" />
            <span>Два кинотеатра <b>—</b> одна афиша</span>
            <a href="#afisha">Смотреть расписание <Icon name="arrow" size={15} /></a>
          </div>
        </section>

        <section id="afisha" className="schedule-section page-container" aria-labelledby="schedule-title">
          <div className="section-heading schedule-heading">
            <div>
              <div className="section-kicker"><span /> СЕГОДНЯ В КИНО</div>
              <h2 id="schedule-title">Афиша <span>и расписание</span></h2>
              <p>Сеансы в двух кинотеатрах Ставрополя — выбирайте фильм и удобное время.</p>
            </div>
            <div className="heading-aside"><span className="heading-aside-top">ОБНОВЛЯЕМ КАЖДЫЙ ДЕНЬ</span><span className="heading-aside-bottom">{dates[selectedDay].full}</span></div>
          </div>

          <div className="date-strip" role="tablist" aria-label="Выберите дату">
            {dates.map((date) => (
              <button
                type="button"
                key={date.index}
                role="tab"
                aria-selected={selectedDay === date.index}
                className={`date-option ${selectedDay === date.index ? 'active' : ''}`}
                onClick={() => setSelectedDay(date.index)}
              >
                <span>{date.label}</span>
                <small>{date.sublabel}</small>
              </button>
            ))}
          </div>

          <div className="filter-bar">
            <div className="filter-group format-filter" role="group" aria-label="Формат сеанса">
              <span className="filter-label">Формат</span>
              <button type="button" className={formatFilter === 'all' ? 'selected' : ''} onClick={() => setFormatFilter('all')}>Все</button>
              <button type="button" className={formatFilter === '2d' ? 'selected' : ''} onClick={() => setFormatFilter('2d')}>2D</button>
              <button type="button" className={formatFilter === '3d' ? 'selected' : ''} onClick={() => setFormatFilter('3d')}>3D</button>
            </div>
            <label className="age-select-wrap">
              <span className="filter-label">Возраст</span>
              <select value={ageFilter} onChange={(event) => setAgeFilter(event.target.value)} aria-label="Фильтр по возрастному рейтингу">
                <option value="all">Любой</option>
                <option value="0+">0+</option>
                <option value="6+">6+</option>
                <option value="12+">12+</option>
                <option value="16+">16+</option>
                <option value="18+">18+</option>
              </select>
            </label>
            <button type="button" className={`new-toggle ${onlyNew ? 'active' : ''}`} aria-pressed={onlyNew} onClick={() => setOnlyNew((value) => !value)}>
              <span className="toggle-indicator" /> Только новинки
            </button>
            <div className="location-filter" role="group" aria-label="Показ кинотеатров">
              <span className="filter-label">Кинотеатры</span>
              <div className="location-segmented">
                {[
                  ['both', 'Обе'], ['center', 'Центр'], ['south', 'Юг'],
                ].map(([value, label]) => (
                  <button type="button" key={value} className={locationView === value ? 'active' : ''} aria-pressed={locationView === value} onClick={() => setDesktopLocation(value)}>{label}</button>
                ))}
              </div>
            </div>
            {hasFilters && <button type="button" className="clear-filters" onClick={clearFilters}>Сбросить <Icon name="close" size={13} /></button>}
          </div>

          <div className="mobile-branch-picker">
            <span>Показывать сеансы в</span>
            <LocationTabs value={mobileBranch} onChange={setMobileBranch} mobile />
          </div>

          <div className={`sticky-location-labels labels-${locationView}`} aria-hidden="true">
            {locationView === 'both' ? (
              <>
                <div className="location-label"><span className="label-mark">01</span><span><strong>САЛЮТ ЦЕНТР</strong><small>ТРЦ «Европейский» · Карла Маркса, 53</small></span><Icon name="pin" size={15} /></div>
                <div className="film-label"><span className="label-mark">02</span><span><strong>ФИЛЬМ</strong><small>Постер и информация</small></span></div>
                <div className="location-label right-label"><span className="label-mark">03</span><span><strong>САЛЮТ ЮГ</strong><small>50 лет ВЛКСМ, 1</small></span><Icon name="pin" size={15} /></div>
              </>
            ) : (
              <>
                <div className="film-label"><span className="label-mark">01</span><span><strong>ФИЛЬМ</strong><small>Постер и информация</small></span></div>
                <div className="location-label single-label"><span className="label-mark">02</span><span><strong>{branches[locationView].name.toUpperCase()}</strong><small>{branches[locationView].address}</small></span><Icon name="pin" size={15} /></div>
              </>
            )}
          </div>

          <div className="film-list">
            {visibleFilms.length ? visibleFilms.map((film) => (
              <article className={`screening-row mode-${locationView}`} key={film.id} id={`film-${film.id}`}>
                {locationView === 'both' ? (
                  <>
                    <ScheduleColumn film={film} branch="center" day={selectedDay} onSessionClick={openBooking} variant="desktop-schedule center-schedule" formatFilter={formatFilter} />
                    <FilmCenter film={film} liked={likedFilms.has(film.id)} onLike={() => onLike(film.id)} onOpen={() => setDetailFilm(film)} />
                    <ScheduleColumn film={film} branch="south" day={selectedDay} onSessionClick={openBooking} variant="desktop-schedule south-schedule" formatFilter={formatFilter} />
                  </>
                ) : (
                  <>
                    <FilmCenter film={film} liked={likedFilms.has(film.id)} onLike={() => onLike(film.id)} onOpen={() => setDetailFilm(film)} />
                    <ScheduleColumn film={film} branch={locationView} day={selectedDay} onSessionClick={openBooking} variant="desktop-schedule single-schedule" formatFilter={formatFilter} />
                  </>
                )}
                <div className="mobile-film-main">
                  <PosterArtwork film={film} className="mobile-poster" onOpen={() => setDetailFilm(film)} />
                  <FilmInfo film={film} liked={likedFilms.has(film.id)} onLike={() => onLike(film.id)} compact />
                </div>
                <div className="mobile-row-schedule">
                  <div className="mobile-row-heading"><span>СЕАНСЫ</span><span>{branches[mobileBranch].name}</span></div>
                  <LocationTabs value={mobileBranch} onChange={setMobileBranch} mobile />
                  <ScheduleColumn film={film} branch={mobileBranch} day={selectedDay} onSessionClick={openBooking} variant="mobile-schedule" formatFilter={formatFilter} />
                </div>
              </article>
            )) : (
              <div className="no-results">
                <div className="no-results-icon"><Icon name="film" size={23} /></div>
                <div><h3>По выбранным фильтрам ничего не нашлось</h3><p>Попробуйте изменить дату, формат или кинотеатр.</p></div>
                <button type="button" className="button-secondary" onClick={clearFilters}>Сбросить фильтры</button>
              </div>
            )}
          </div>
          <div className="schedule-footnote"><span className="footnote-mark">i</span><span>Время сеансов указано по местному времени. Возрастное ограничение действует на всех зрителей, включая сопровождающих.</span><span className="mock-note">Расписание — пример данных</span></div>
        </section>

        <section id="offers" className="offer-section page-container" aria-labelledby="offer-title">
          <div className="offer-main-card">
            <div className="offer-deco offer-deco-one" aria-hidden="true" />
            <div className="offer-deco offer-deco-two" aria-hidden="true" />
            <div className="offer-content">
              <div className="section-kicker light-kicker"><span /> ВАШ КИНОВЕЧЕР</div>
              <h2 id="offer-title">Кино — это<br /><em>только начало.</em></h2>
              <p>Возьмите любимый попкорн, выберите удобное кресло и устройте себе вечер, который захочется повторить. Подробности о комбо и предложениях — в кассах кинотеатров.</p>
              <button type="button" className="button-light" onClick={() => scrollToSchedule()}>Выбрать фильм <Icon name="arrow" size={17} /></button>
            </div>
            <div className="popcorn-illustration" aria-hidden="true">
              <span className="popcorn-spark spark-a">✦</span><span className="popcorn-spark spark-b">✧</span>
              <div className="popcorn-bucket"><span>САЛЮТ</span><i /><i /><i /><i /><b>СВЕЖИЙ<br />ПОП-КОРН</b></div>
              <div className="popcorn-cup"><span>+</span><i /></div>
            </div>
            <div className="offer-stamp"><Icon name="star" size={15} /> МОМЕНТ ДЛЯ СЕБЯ</div>
          </div>
          <div className="offer-side-card">
            <div className="offer-side-number">02</div>
            <div className="offer-side-icon"><Icon name="ticket" size={21} /></div>
            <span className="offer-side-kicker">ХОРОШИЙ ПЛАН</span>
            <h3>Сначала выберите фильм.<br />Всё остальное — на месте.</h3>
            <p>Актуальные цены и специальные предложения уточняйте у сотрудников кинотеатра.</p>
            <a href="#cinemas" className="text-link">Наши кинотеатры <Icon name="arrow" size={15} /></a>
          </div>
        </section>

        <section id="soon" className="coming-section page-container" aria-labelledby="soon-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker"><span /> СКОРО НА БОЛЬШОМ ЭКРАНЕ</div>
              <h2 id="soon-title">Будет <span>интересно</span></h2>
              <p>Премьеры, которые уже хочется посмотреть.</p>
            </div>
            <a href="#afisha" className="text-link desktop-only-link">Вся афиша <Icon name="arrow" size={16} /></a>
          </div>
          <div className="coming-grid">
            {comingSoon.map((film, index) => (
              <article className={`coming-card coming-${index + 1}`} key={film.id}>
                <PosterArtwork film={film} className="coming-poster" badge={false} onOpen={() => setToast(`«${film.title}» скоро появится в афише`)} />
                <div className="coming-meta">
                  <div className="coming-release"><span />{film.release}</div>
                  <h3>{film.title}</h3>
                  <div className="coming-genre"><span>{film.genre}</span><span className="coming-age">{film.age}</span></div>
                  <button type="button" className="reminder-button" onClick={() => setToast(`Напомним о премьере «${film.title}» — следите за афишей`)}>
                    <Icon name="plus" size={15} /> Напомнить о премьере
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="coming-footer"><span className="coming-footer-line" /><span>НОВЫЕ ИСТОРИИ УЖЕ БЛИЗКО</span><span className="coming-footer-line" /></div>
        </section>

        <section id="cinemas" className="cinemas-section page-container" aria-labelledby="cinemas-title">
          <div className="section-heading cinemas-heading">
            <div>
              <div className="section-kicker"><span /> ДВА КИНОТЕАТРА В СТАВРОПОЛЕ</div>
              <h2 id="cinemas-title">Ваш <span>«Салют»</span> рядом</h2>
              <p>Выбирайте удобную точку — в обеих вас ждут большой экран и хороший звук.</p>
            </div>
            <div className="cinemas-city-badge"><Icon name="pin" size={15} /> Ставрополь</div>
          </div>
          <div className="theaters-grid">
            <TheatersCard branch="center" onChoose={(branch) => scrollToSchedule(branch)} />
            <TheatersCard branch="south" onChoose={(branch) => scrollToSchedule(branch)} />
          </div>
        </section>

        <section className="contact-band page-container" aria-label="Контактная информация">
          <div className="contact-band-icon"><Icon name="phone" size={21} /></div>
          <div><span>ВОПРОСЫ? МЫ НА СВЯЗИ</span><strong>Подскажем, поможем, ждём в гости.</strong></div>
          <a href={`tel:${phoneHref}`} className="contact-band-phone">{phone} <Icon name="arrow" size={17} /></a>
        </section>
      </main>

      <footer id="contacts" className="site-footer">
        <div className="footer-main page-container">
          <div className="footer-brand-column">
            <a href="#top" className="brand footer-brand" aria-label="Салют — наверх">
              <span className="brand-word">САЛЮТ<span className="brand-dot">.</span></span>
              <span className="brand-caption">КИНОТЕАТРЫ СТАВРОПОЛЯ</span>
            </a>
            <p>Встречаемся в кино.<br />Ставрополь, две точки, одна большая история.</p>
            <div className="social-links">
              <a href="https://vk.com/salut_kino" target="_blank" rel="noreferrer" aria-label="Салют во ВКонтакте">vk</a>
              <a href="https://t.me/salutkino" target="_blank" rel="noreferrer" aria-label="Салют в Telegram">tg</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>КИНОТЕАТРЫ</h3>
            <a href="#cinemas">Салют Центр <span>Карла Маркса, 53</span></a>
            <a href="#cinemas">Салют Юг <span>50 лет ВЛКСМ, 1</span></a>
          </div>
          <div className="footer-column">
            <h3>КОНТАКТЫ</h3>
            <a href={`tel:${phoneHref}`}>{phone}</a>
            <a href="mailto:inform@salutkino.com">inform@salutkino.com</a>
            <span className="footer-hours"><Icon name="clock" size={14} />Ежедневно · до 02:00</span>
          </div>
          <div className="footer-column footer-links-column">
            <h3>ИНФОРМАЦИЯ</h3>
            <a href="https://салюткино.рф/rules/" target="_blank" rel="noreferrer">Правила посещения <Icon name="external" size={13} /></a>
            <a href="https://салюткино.рф/" target="_blank" rel="noreferrer">Официальный сайт <Icon name="external" size={13} /></a>
            <span className="footer-legal">Реклама: +7 (8652) 40-72-08</span>
          </div>
        </div>
        <div className="footer-bottom page-container">
          <span>© 2026 Кинотеатры «Салют», Ставрополь</span>
          <span>Сеансы и лайки — демо · постеры созданы ИИ, это не официальные афиши</span>
          <a href="#top">Наверх <Icon name="arrow" size={14} /></a>
        </div>
      </footer>

      {detailFilm && (
        <Modal onClose={() => setDetailFilm(null)} labelledBy="detail-title" className="detail-modal">
          <button type="button" className="modal-close" aria-label="Закрыть окно" onClick={() => setDetailFilm(null)}><Icon name="close" size={20} /></button>
          <div className="detail-layout">
            <div className="detail-visual">
              <PosterArtwork film={detailFilm} className="detail-poster" onOpen={() => {}} />
              {(hasRating(detailFilm.imdb) || hasRating(detailFilm.kinopoisk)) && (
                <div className="detail-rating-grid">
                  {hasRating(detailFilm.imdb) && <div><span>IMDb</span><strong>{detailFilm.imdb}</strong></div>}
                  {hasRating(detailFilm.kinopoisk) && <div><span>КиноПоиск</span><strong>{detailFilm.kinopoisk}</strong></div>}
                </div>
              )}
            </div>
            <div className="detail-content">
              <div className="section-kicker"><span /> {detailFilm.isNew ? 'ПРЕМЬЕРА' : 'В ПРОКАТЕ'} <i>·</i> {detailFilm.age}</div>
              <h2 id="detail-title">{detailFilm.title}</h2>
              <p className="detail-facts">{detailFilm.genre} <i>·</i> {detailFilm.duration}</p>
              <p className="detail-synopsis">{detailFilm.synopsis}</p>
              <div className="detail-credits">
                <div><span>РЕЖИССЁР</span><strong>{detailFilm.director}</strong></div>
                <div><span>В РОЛЯХ</span><strong>{detailFilm.cast.join(', ')}</strong></div>
              </div>
              <a className="trailer-link" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${detailFilm.title} трейлер`)}`} target="_blank" rel="noreferrer">
                <span className="trailer-play"><Icon name="play" size={14} /></span>
                <span><strong>Смотреть трейлер</strong><small>Откроется поиск трейлера на YouTube</small></span>
                <Icon name="external" size={15} />
              </a>
              <button type="button" className="button-primary detail-cta" onClick={() => { setDetailFilm(null); scrollToSchedule(); }}>
                К расписанию <Icon name="arrow" size={17} />
              </button>
            </div>
          </div>
        </Modal>
      )}

      {booking && (
        <Modal onClose={() => setBooking(null)} labelledBy="booking-title" className="booking-modal">
          <button type="button" className="modal-close" aria-label="Закрыть окно" onClick={() => setBooking(null)}><Icon name="close" size={20} /></button>
          {!bookingConfirmed ? (
            <>
              <div className="booking-heading">
                <div className="section-kicker"><span /> ДЕМО-БРОНИРОВАНИЕ</div>
                <h2 id="booking-title">Выберите места</h2>
                <p>{booking.film.title} <i>·</i> {branches[booking.branch].name}</p>
                <div className="booking-summary"><span><Icon name="clock" size={15} />{booking.session.time}</span><span>{booking.session.format}</span><span>Зал {booking.session.hall}</span><b>{booking.session.price} ₽ / билет</b></div>
              </div>
              <div className="screen-label"><span /> ЭКРАН <span /></div>
              <div className="seat-map" aria-label="Выбор мест">
                {['A', 'B', 'C', 'D'].map((row, rowIndex) => (
                  <div className="seat-row" key={row}>
                    <span className="seat-row-label">{row}</span>
                    {Array.from({ length: 8 }, (_, index) => {
                      const seat = `${row}${index + 1}`;
                      const reserved = ['A3', 'B6', 'C4', 'D2', 'D7'].includes(seat);
                      const selected = selectedSeats.includes(seat);
                      return (
                        <button
                          type="button"
                          key={seat}
                          disabled={reserved}
                          className={`seat ${reserved ? 'reserved' : ''} ${selected ? 'selected' : ''} ${rowIndex === 1 && index === 3 ? 'aisle-before' : ''}`}
                          onClick={() => setSelectedSeats((current) => selected ? current.filter((item) => item !== seat) : [...current, seat])}
                          aria-label={`Ряд ${row}, место ${index + 1}${reserved ? ', занято' : selected ? ', выбрано' : ''}`}
                          aria-pressed={selected}
                        >{index + 1}</button>
                      );
                    })}
                    <span className="seat-row-label">{row}</span>
                  </div>
                ))}
              </div>
              <div className="seat-legend"><span><i className="legend-seat available" />Свободно</span><span><i className="legend-seat chosen" />Выбрано</span><span><i className="legend-seat reserved" />Занято</span></div>
              <div className="booking-bottom">
                <div><span>ВЫБРАНО МЕСТ</span><strong>{selectedSeats.length} <small>{selectedSeats.length ? `· ${selectedSeats.join(', ')}` : ''}</small></strong></div>
                <div><span>ИТОГО</span><strong>{selectedSeats.length * booking.session.price} ₽</strong></div>
                <button type="button" className="button-primary" disabled={!selectedSeats.length} onClick={() => setBookingConfirmed(true)}>Продолжить <Icon name="arrow" size={16} /></button>
              </div>
              <p className="booking-disclaimer">Демонстрационный выбор мест. Для продажи билетов нужно подключить кассовую систему.</p>
            </>
          ) : (
            <div className="booking-success">
              <div className="success-icon"><Icon name="check" size={28} /></div>
              <div className="section-kicker"><span /> МЕСТА ВЫБРАНЫ</div>
              <h2 id="booking-title">Хороший выбор!</h2>
              <p>{booking.film.title} · {branches[booking.branch].name}<br />{booking.session.time}, зал {booking.session.hall} · {selectedSeats.join(', ')}</p>
              <div className="demo-notice">Это демонстрация интерфейса. Онлайн-оплата пока не подключена.</div>
              <button type="button" className="button-primary" onClick={() => setBooking(null)}>Понятно <Icon name="check" size={16} /></button>
            </div>
          )}
        </Modal>
      )}

      {toast && <div className="toast-message" role="status"><span><Icon name="check" size={17} /></span>{toast}</div>}
    </div>
  );
}

export default App;
