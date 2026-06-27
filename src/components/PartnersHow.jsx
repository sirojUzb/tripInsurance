import { useLang } from "../i18n.jsx";

function PartnersHow() {
  const { t } = useLang();
  return (
    <section className="bg-[#d7e5ff] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-neutral-900 md:text-[28px]">
          {t.partners.how.title}
        </h2>

        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
          {/* Шаги */}
          <div className="w-full space-y-8 md:w-1/2">
            {t.partners.how.steps.map((step, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-purple-brand/40 text-2xl font-bold text-purple-brand">
                  {i + 1}
                </div>
                <p className="text-[15px] leading-relaxed text-neutral-700">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Иллюстрация */}
          <div className="flex w-full justify-center md:w-1/2">
            <img
              src="/images/partners-main.png"
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

export default PartnersHow;
