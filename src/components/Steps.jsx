import { useLang } from "../i18n.jsx";

const STEPS = [
  "/images/policy1.svg",
  "/images/policy2.svg",
  "/images/policy3.svg",
  "/images/policy4.svg",
];

function Steps() {
  const { t } = useLang();
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-neutral-900 md:text-[28px]">
          {t.steps.title}
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${t.steps.stepAlt} ${i + 1}`}
              className="w-full rounded-xl"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
