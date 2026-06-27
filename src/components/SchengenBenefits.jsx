import { useLang } from "../i18n.jsx";

const ICONS = [
  "/images/shengen-1.png",
  "/images/shengen-2.png",
  "/images/shengen-3.png",
  "/images/shengen-4.png",
];

function SchengenBenefits() {
  const { t } = useLang();
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-14 text-center text-2xl font-bold text-neutral-900 md:text-[28px]">
          {t.schengen.benefits.title}
        </h2>

        <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
          {t.schengen.benefits.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img
                src={ICONS[i]}
                alt=""
                className="mb-5 h-24 w-24 object-contain"
                loading="lazy"
              />
              <h3 className="mb-2.5 text-lg font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="max-w-md text-[15px] leading-relaxed text-neutral-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SchengenBenefits;
