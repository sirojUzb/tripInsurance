import Navbar from "./Navbar.jsx";
import { useLang } from "../i18n.jsx";

function PartnersHero() {
  const { t } = useLang();
  const p = t.partners;

  return (
    <section
      className="relative flex min-h-160 flex-col overflow-hidden rounded-2xl bg-cover bg-center
        before:absolute before:inset-0 before:bg-linear-to-b
        before:from-black/55 before:via-black/40 before:to-black/55"
      style={{ backgroundImage: "url('/images/partners.jpg')" }}
    >
      {/* Навигация поверх фона */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Контент */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
        <h1 className="mb-2.5 text-3xl font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] md:text-[38px]">
          {p.title}
        </h1>
        <p className="mb-9 text-lg font-normal text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] md:text-[19px]">
          {p.subtitle}
        </p>

        <button
          type="button"
          className="cursor-pointer rounded-lg bg-purple-brand px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-brand-dark active:translate-y-px"
        >
          {p.register}
        </button>

        <p className="mt-5 text-[15px] text-white/90">
          {p.loginPrefix}
          <a href="#" className="underline underline-offset-2 transition-colors hover:text-white">
            {p.loginLink}
          </a>
        </p>
      </div>
    </section>
  );
}

export default PartnersHero;
