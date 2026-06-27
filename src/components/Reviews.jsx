import { useRef, useState } from "react";
import { useLang } from "../i18n.jsx";

const DOTS = 4;

// Пол по позиции (совпадает для RU и EN списков имён)
const GENDERS = ["m", "f", "m", "f", "m", "f", "m", "f"];
const PHOTOS = {
  m: "/images/feedback-photo.png",
  f: "/images/feedback-photo-woman.jpg",
};

function Reviews() {
  const { t } = useLang();
  const REVIEWS = t.reviews.names.map((name, i) => ({
    name,
    date: "05/02/2023",
    text: t.reviews.text,
    photo: PHOTOS[GENDERS[i % GENDERS.length]],
  }));

  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;
    setActive(Math.round(ratio * (DOTS - 1)));
  };

  const goToDot = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (max * i) / (DOTS - 1), behavior: "smooth" });
  };

  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-neutral-900 md:text-[28px]">
          {t.reviews.title}
        </h2>

        {/* Карусель */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {REVIEWS.map((review, i) => (
            <article
              key={i}
              className="flex w-70 shrink-0 snap-start flex-col rounded-xl bg-purple-brand/8 p-5"
            >
              {/* Звёзды + дата */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex gap-0.5 text-[15px] text-yellow-400">
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
                <span className="text-xs text-neutral-400">{review.date}</span>
              </div>

              {/* Текст */}
              <p className="mb-5 flex-1 text-[13px] leading-relaxed text-neutral-600">
                {review.text}
              </p>

              {/* Автор */}
              <div className="flex items-center gap-2.5">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-[13px] font-medium text-neutral-800">
                  {review.name}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Индикатор-точки */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {Array.from({ length: DOTS }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToDot(i)}
              aria-label={`${t.reviews.slideAlt} ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                active === i
                  ? "w-4 bg-purple-brand"
                  : "w-1.5 bg-purple-brand/30 hover:bg-purple-brand/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
