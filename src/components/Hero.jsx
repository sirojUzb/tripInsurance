import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import DateField from "./DateField.jsx";
import { useLang } from "../i18n.jsx";

// Ключи групп пассажиров — совпадают с состоянием counts
const PASSENGER_KEYS = ["kidsBaby", "kids", "adults", "seniors"];

function Hero() {
  const { t } = useLang();
  const COUNTRIES = t.hero.countries;
  const peopleLabel = t.hero.peopleLabel;

  const [place, setPlace] = useState("");
  const [dateFrom, setDateFrom] = useState("05.03.2023");
  const [dateTo, setDateTo] = useState("05.03.2023");

  const [openPlace, setOpenPlace] = useState(false);
  const [openPeople, setOpenPeople] = useState(false);
  const [highlight, setHighlight] = useState(-1);

  const [counts, setCounts] = useState({
    kidsBaby: 0,
    kids: 0,
    adults: 1,
    seniors: 0,
  });

  const placeRef = useRef(null);
  const peopleRef = useRef(null);
  const listRef = useRef(null);

  const totalPeople = Object.values(counts).reduce((a, b) => a + b, 0);

  const filteredCountries = COUNTRIES.filter((c) =>
    c.toLowerCase().includes(place.trim().toLowerCase()),
  );

  const selectCountry = (country) => {
    setPlace(country);
    setOpenPlace(false);
    setHighlight(-1);
  };

  // Навигация по списку с клавиатуры
  const handlePlaceKeyDown = (e) => {
    if (!openPlace || filteredCountries.length === 0) {
      if (e.key === "ArrowDown") setOpenPlace(true);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((i) => (i + 1) % filteredCountries.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((i) =>
        i <= 0 ? filteredCountries.length - 1 : i - 1,
      );
    } else if (e.key === "Enter") {
      if (highlight >= 0) {
        e.preventDefault();
        selectCountry(filteredCountries[highlight]);
      }
    } else if (e.key === "Escape") {
      setOpenPlace(false);
      setHighlight(-1);
    }
  };

  // Подсвеченный пункт всегда виден при прокрутке
  useEffect(() => {
    if (highlight < 0 || !listRef.current) return;
    const node = listRef.current.children[highlight];
    if (node) node.scrollIntoView({ block: "nearest" });
  }, [highlight]);

  // Закрытие выпадающих списков при клике снаружи
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (placeRef.current && !placeRef.current.contains(e.target))
        setOpenPlace(false);
      if (peopleRef.current && !peopleRef.current.contains(e.target))
        setOpenPeople(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeCount = (key, delta) =>
    setCounts((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta),
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ place, dateFrom, dateTo, counts, totalPeople });
  };

  return (
    <section
      className="relative flex min-h-160 flex-col overflow-hidden rounded-2xl bg-cover bg-center
        before:absolute before:inset-0 before:bg-linear-to-b
        before:from-black/45 before:via-black/25 before:to-black/45"
      style={{ backgroundImage: "url('/images/main-img.jpg')" }}
    >
      {/* Навигация поверх фона */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Контент */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
        <h1 className="mb-2.5 text-3xl font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-[38px]">
          {t.hero.title}
        </h1>
        <p className="mb-8 text-lg font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-[19px]">
          {t.hero.subtitle}
        </p>

        {/* Поиск */}
        <form
          onSubmit={handleSubmit}
          className="relative flex w-full max-w-3xl flex-col rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:flex-row md:items-stretch"
        >
          {/* Куда едем — с автодополнением */}
          <div className="relative flex-[1.4]" ref={placeRef}>
            <div className="flex items-center gap-2.5 px-4 py-4">
              <input
                type="text"
                value={place}
                onChange={(e) => {
                  setPlace(e.target.value);
                  setOpenPlace(true);
                  setHighlight(-1);
                }}
                onFocus={() => setOpenPlace(true)}
                onKeyDown={handlePlaceKeyDown}
                placeholder={t.hero.where}
                className="w-full border-none bg-transparent text-[15px] text-neutral-800 outline-none placeholder:text-neutral-400"
              />
            </div>

            {openPlace && filteredCountries.length > 0 && (
              <ul
                ref={listRef}
                className="absolute left-0 top-[calc(100%+12px)] z-30 max-h-64 w-full min-w-65 overflow-y-auto rounded-lg bg-white py-1.5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.2)] ring-1 ring-black/5"
              >
                {filteredCountries.map((country, index) => (
                  <li key={country}>
                    <button
                      type="button"
                      onClick={() => selectCountry(country)}
                      onMouseEnter={() => setHighlight(index)}
                      className={`block w-full px-5 py-2.5 text-left text-[15px] text-neutral-800 transition-colors ${
                        highlight === index ? "bg-purple-brand/10" : ""
                      }`}
                    >
                      {country}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Дата от */}
          <DateField value={dateFrom} onChange={setDateFrom} />

          {/* Дата до */}
          <DateField value={dateTo} onChange={setDateTo} />

          {/* Количество людей — со счётчиком */}
          <div className="relative flex-[0.9]" ref={peopleRef}>
            <button
              type="button"
              onClick={() => setOpenPeople((v) => !v)}
              className="flex h-full w-full cursor-pointer items-center justify-between gap-2 border-t border-neutral-200 px-4 py-4 text-[15px] text-neutral-800 md:border-t-0 md:border-l"
            >
              {peopleLabel(totalPeople)}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`shrink-0 transition-transform ${openPeople ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#5200D9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {openPeople && (
              <div className="absolute right-0 top-[calc(100%+12px)] z-30 w-72 rounded-lg bg-white p-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
                {t.hero.passengerGroups.map((group, index) => {
                  const key = PASSENGER_KEYS[index];
                  return (
                    <div
                      key={key}
                      className="flex items-center justify-between py-2.5"
                    >
                      <div>
                        <p className="text-[15px] text-neutral-800">{group.title}</p>
                        {group.note && (
                          <p className="text-xs text-neutral-400">{group.note}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => changeCount(key, -1)}
                          disabled={counts[key] === 0}
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 text-neutral-600 transition-colors hover:border-purple-brand hover:text-purple-brand disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-[15px] text-neutral-800">
                          {counts[key]}
                        </span>
                        <button
                          type="button"
                          onClick={() => changeCount(key, 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 text-neutral-600 transition-colors hover:border-purple-brand hover:text-purple-brand"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </form>

        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-6 cursor-pointer rounded-lg bg-purple-brand px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-brand-dark active:translate-y-px"
        >
          {t.hero.getQuote}
        </button>
      </div>
    </section>
  );
}

export default Hero;
