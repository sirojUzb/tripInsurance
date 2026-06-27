import { useLang } from "../i18n.jsx";

const ICONS = [
  "/images/partner-1.png",
  "/images/partner-2.png",
  "/images/partner-3.png",
];

function PartnersOffer() {
  const { t } = useLang();
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-neutral-900 md:text-[28px]">
          {t.partners.offer.title}
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:gap-8">
          {t.partners.offer.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img
                src={ICONS[i]}
                alt=""
                className="mb-5 h-28 w-28 object-contain"
                loading="lazy"
              />
              <h3 className="mb-1.5 text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="text-[13px] text-neutral-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersOffer;
