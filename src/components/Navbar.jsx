import { useState, useRef, useEffect } from "react";
import { useLang } from "../i18n.jsx";

function Navbar() {
  const { t, lang, setLang } = useLang();
  const [openProducts, setOpenProducts] = useState(false);
  const productsRef = useRef(null);

  const products = t.nav.productItems;

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setOpenProducts(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="px-6 py-5">
      <div className="mx-auto grid w-full max-w-3xl grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* Логотип */}
        <a href="#" className="flex items-center gap-2 justify-self-start no-underline">
          <img
            src="/images/tick-icon.svg"
            alt=""
            className="pointer-events-none h-6 w-6 shrink-0"
          />
          <span className="text-lg font-semibold tracking-tight text-white">
            <span className="font-bold text-purple-brand">trip</span> {t.logoSuffix}
          </span>
        </a>

        {/* Навигация */}
        <nav className="col-start-2 hidden items-center justify-self-center gap-14 md:flex">
          {/* Продукты с выпадающим меню */}
          <div className="relative" ref={productsRef}>
            <button
              type="button"
              onClick={() => setOpenProducts((v) => !v)}
              className="inline-flex cursor-pointer items-center gap-1.5 text-[15px] font-medium text-neutral-100 transition-colors hover:text-white"
            >
              {t.nav.products}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform ${openProducts ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {openProducts && (
              <div className="absolute left-0 top-full z-20 mt-3 w-60 overflow-hidden rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                {products.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block bg-purple-brand px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-purple-brand-dark"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="text-[15px] font-medium text-neutral-100 transition-colors hover:text-white hover:opacity-85"
          >
            {t.nav.reviews}
          </a>
          <a
            href="#"
            className="text-[15px] font-medium text-neutral-100 transition-colors hover:text-white hover:opacity-85"
          >
            {t.nav.partners}
          </a>
        </nav>

        {/* Переключатель языка + кнопка «Скидки» */}
        <div className="col-start-3 flex items-center gap-3 justify-self-end">
          {/* Переключатель языка */}
          <div className="flex overflow-hidden rounded-lg border border-white/40 text-[13px] font-semibold">
            {["ru", "en"].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`cursor-pointer px-2.5 py-1.5 uppercase transition-colors ${
                  lang === code
                    ? "bg-purple-brand text-white"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-white/70 bg-white/5 px-4.5 py-2.5 text-[15px] font-medium text-white no-underline transition-colors hover:border-white hover:bg-white/15"
          >
            <img src="/images/message-icon.svg" alt="" className="h-4.5 w-4.5" />
            {t.nav.discounts}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
