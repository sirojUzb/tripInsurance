import { useLang } from "../i18n.jsx";

const ICONS = [
  "/images/shengen-badge-1.png",
  "/images/shengen-badge-2.png",
  "/images/shengen-badge-3.png",
];

function SchengenBadges() {
  const { t } = useLang();
  return (
    <section className="bg-white pt-16 md:pt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-6 sm:flex-row sm:gap-10 md:gap-16">
        {t.schengen.badges.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <img
              src={ICONS[i]}
              alt=""
              className="h-16 w-16 shrink-0 object-contain"
              loading="lazy"
            />
            <span className="text-lg font-semibold text-neutral-900">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SchengenBadges;
