import { useLang } from "../i18n.jsx";

const IMAGES = [
  "/images/doc-1.png",
  "/images/doc-2.png",
  "/images/doc-3.png",
  "/images/doc-4.png",
];

function Features() {
  const { t } = useLang();
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-20 px-6 md:gap-28">
        {t.features.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-8 md:gap-14 ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Изображение */}
            <div className="flex w-full justify-center md:w-1/2">
              <img
                src={IMAGES[i]}
                alt={item.title}
                className="w-full max-w-sm"
                loading="lazy"
              />
            </div>

            {/* Текст */}
            <div className="w-full md:w-1/2">
              <h2 className="relative mb-5 inline-block pr-4 text-2xl font-bold text-neutral-900 md:text-[28px]">
                {item.title}
                <span className="absolute -right-2 top-1 h-6 w-2.5 border-t-2 border-r-2 border-purple-brand" />
              </h2>
              <p className="text-[15px] leading-relaxed text-neutral-500">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
