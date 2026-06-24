import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [openProducts, setOpenProducts] = useState(false);
  const productsRef = useRef(null);

  const products = [
    "Страхование для Шенгена",
    "Страхование в России",
    "Горнолыжная страховка",
    "Годовая страховка",
  ];

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
    <header className="flex items-center justify-between gap-6 px-6 py-5 md:px-10">
      {/* Логотип */}
      <a href="#" className="relative flex items-center gap-2 no-underline">
        <img
          src="/images/tick-icon.svg"
          alt=""
          className="pointer-events-none absolute -top-2.5 left-1.5 w-6 rotate-6"
        />
        <span className="text-lg font-semibold tracking-tight text-white">
          <span className="font-bold text-purple-brand">trip</span> страхование
        </span>
      </a>

      {/* Навигация */}
      <nav className="mx-auto hidden items-center gap-14 md:flex">
        {/* Продукты с выпадающим меню */}
        <div className="relative" ref={productsRef}>
          <button
            type="button"
            onClick={() => setOpenProducts((v) => !v)}
            className="inline-flex cursor-pointer items-center gap-1.5 text-[15px] font-medium text-neutral-100 transition-colors hover:text-white"
          >
            Продукты
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
          Отзывы
        </a>
        <a
          href="#"
          className="text-[15px] font-medium text-neutral-100 transition-colors hover:text-white hover:opacity-85"
        >
          Партнерам
        </a>
      </nav>

      {/* Кнопка «Скидки» */}
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-lg border border-white/70 bg-white/5 px-4.5 py-2.5 text-[15px] font-medium text-white no-underline transition-colors hover:border-white hover:bg-white/15"
      >
        <img src="/images/message-icon.svg" alt="" className="h-4.5 w-4.5" />
        Скидки
      </a>
    </header>
  );
}

export default Navbar;
