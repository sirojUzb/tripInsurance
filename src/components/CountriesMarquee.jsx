import { useLang } from "../i18n.jsx";

function Row({ items, direction }) {
  // Дублируем список, чтобы прокрутка была бесшовной
  const doubled = [...items, ...items];
  return (
    <div className="marquee overflow-hidden border-y border-neutral-200 py-5">
      <div className={`marquee-track ${direction}`}>
        {doubled.map((country, i) => (
          <span
            key={i}
            className="px-7 text-2xl font-bold whitespace-nowrap text-neutral-900 md:text-3xl"
          >
            {country}
          </span>
        ))}
      </div>
    </div>
  );
}

function CountriesMarquee() {
  const { t } = useLang();
  return (
    <section className="bg-white pb-20 md:pb-28">
      <Row items={t.marquee.rowOne} direction="marquee-left" />
      <Row items={t.marquee.rowTwo} direction="marquee-right" />
    </section>
  );
}

export default CountriesMarquee;
