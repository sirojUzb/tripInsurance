import { useLang } from "../i18n.jsx";

function SchengenWho() {
  const { t } = useLang();
  const w = t.schengen.who;
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-neutral-900 md:text-[28px]">
          {w.title}
        </h2>

        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
          {/* Текст */}
          <div className="w-full md:w-1/2">
            <p className="mb-6 text-[15px] leading-relaxed text-neutral-500">
              {w.intro}
            </p>
            <p className="mb-3 text-[15px] font-bold text-neutral-900">
              {w.listTitle}
            </p>
            <ul className="space-y-3">
              {w.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[15px] leading-relaxed text-neutral-500"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-brand" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Иллюстрация */}
          <div className="flex w-full justify-center md:w-1/2">
            <img
              src="/images/shengen-photo.png"
              alt=""
              className="w-full max-w-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchengenWho;
