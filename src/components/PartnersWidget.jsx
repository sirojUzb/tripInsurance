import { useState } from "react";
import { useLang } from "../i18n.jsx";

const PRICES = ["1 387₽", "2 387₽", "1 387₽", "1 387₽"];
// Значения по строкам признаков (последняя строка — «Добавить»)
const VALUES = [
  "35 000€", "200€", "200€", "200€", "200€",
  "200€", "20 000€", "200€", "200€", null,
];

function PartnersWidget() {
  const { t } = useLang();
  const w = t.partners.widget;
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white pt-8 pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-5 text-center text-2xl font-bold text-neutral-900 md:text-[28px]">
          {w.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[15px] leading-relaxed text-neutral-500">
          {w.desc}
        </p>

        {/* Виджет */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
            {/* Шапка */}
            <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4 md:px-7">
              <span className="flex-1 text-center text-[15px] font-bold text-neutral-900">
                {w.calcTitle}
              </span>
              <span className="text-lg text-neutral-400">✕</span>
            </div>

            {/* Таблица */}
            <div className="overflow-x-auto p-5 md:p-7">
              <div className="flex min-w-180 gap-2">
                {/* Колонка признаков */}
                <div className="w-56 shrink-0">
                  {/* Мини-отзыв */}
                  <div className="flex h-48 flex-col rounded-lg bg-purple-brand/8 p-3">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-neutral-800">
                        {w.reviewsTitle}
                      </span>
                      <span className="text-[11px] text-purple-brand">‹ ›</span>
                    </div>
                    <span className="mb-2 text-[10px] text-purple-brand underline">
                      {w.allReviews}
                    </span>
                    <div className="mb-1 flex items-center gap-1">
                      <span className="text-[11px] text-yellow-400">★★★★★</span>
                      <span className="text-[9px] text-neutral-400">05/02/2023</span>
                    </div>
                    <p className="mb-2 line-clamp-4 text-[10px] leading-snug text-neutral-600">
                      {w.reviewText}
                    </p>
                    <span className="mt-auto text-[10px] font-medium text-neutral-700">
                      {w.reviewName}
                    </span>
                  </div>

                  {/* Признаки */}
                  {w.features.map((f, r) => (
                    <div
                      key={r}
                      className="flex h-9 items-center border-b border-neutral-100 text-[11px] text-neutral-600"
                    >
                      {f}
                    </div>
                  ))}

                  {/* Ссылки */}
                  <div className="space-y-2 pt-4">
                    <span className="block text-[11px] text-purple-brand underline">
                      {w.sample}
                    </span>
                    <span className="block text-[11px] text-purple-brand underline">
                      {w.terms}
                    </span>
                  </div>
                </div>

                {/* Колонки тарифов */}
                {w.plans.map((plan, c) => (
                  <div
                    key={c}
                    onClick={() => setSelected(c)}
                    className={`flex-1 cursor-pointer rounded-xl transition-colors ${
                      c === selected
                        ? "border-2 border-purple-brand bg-purple-brand/5"
                        : "border-2 border-transparent hover:border-purple-brand/30"
                    }`}
                  >
                    {/* Заголовок тарифа */}
                    <div className="flex h-48 flex-col items-center px-2 pt-3 text-center">
                      <span className="text-[13px] font-semibold text-neutral-800">
                        {plan.name}
                      </span>
                      <span className="mt-1 text-lg font-bold text-purple-brand">
                        {PRICES[c]}
                      </span>
                      <button
                        type="button"
                        className="mt-2 w-full rounded-md bg-purple-brand py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-purple-brand-dark"
                      >
                        {w.choose}
                      </button>
                      <p className="mt-2 text-[10px] leading-snug text-neutral-400">
                        {plan.note}
                      </p>
                    </div>

                    {/* Значения */}
                    {VALUES.map((v, r) => (
                      <div
                        key={r}
                        className="flex h-9 items-center justify-center border-b border-neutral-100 text-[11px]"
                      >
                        {v === null ? (
                          <span className="text-purple-brand underline">{w.add}</span>
                        ) : (
                          <span className="text-neutral-500">{v}</span>
                        )}
                      </div>
                    ))}

                    {/* Низ: цена + кнопка */}
                    <div className="flex flex-col items-center px-2 pt-4">
                      <span className="mb-2 text-base font-bold text-neutral-900">
                        {PRICES[c]}
                      </span>
                      <button
                        type="button"
                        className="w-full rounded-md bg-purple-brand py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-purple-brand-dark"
                      >
                        {w.choose}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersWidget;
