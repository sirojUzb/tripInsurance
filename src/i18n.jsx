import { createContext, useContext, useEffect, useState } from "react";

const REVIEW_RU =
  "Много лет пользуюсь, предпочитаю другим компаниям! Оперативный чат, посмотрим как будет дальше! Пока все отлично)";
const REVIEW_EN =
  "I've been using it for years, I prefer it to other companies! Responsive chat, let's see how it goes! So far everything is great)";

export const translations = {
  ru: {
    breadcrumb: "Главная",
    logoSuffix: "страхование",
    nav: {
      products: "Продукты",
      reviews: "Отзывы",
      partners: "Партнерам",
      discounts: "Скидки",
      productItems: [
        "Страхование для Шенгена",
        "Страхование в России",
        "Горнолыжная страховка",
        "Годовая страховка",
      ],
    },
    hero: {
      title: "Страхование путешественников",
      subtitle: "Полис, который действительно работает",
      where: "Куда едем?",
      getQuote: "Узнать стоимость",
      passengerGroups: [
        { title: "Дети до 3-х лет", note: "" },
        { title: "Дети", note: "от 4 до 17 лет" },
        { title: "Взрослые", note: "от 18 до 68 лет" },
        { title: "Взрослые", note: "от 70 до 79 лет" },
      ],
      peopleLabel: (count) => {
        const mod10 = count % 10;
        const mod100 = count % 100;
        if (mod10 === 1 && mod100 !== 11) return `${count} человек`;
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20))
          return `${count} человека`;
        return `${count} человек`;
      },
      countries: [
        "Абхазия", "Австралия", "Австрия", "Азербайджан", "Албания", "Алжир",
        "Ангола", "Андорра", "Аргентина", "Армения", "Афганистан", "Багамы",
        "Бангладеш", "Барбадос", "Бахрейн", "Беларусь", "Белиз", "Бельгия",
        "Бенин", "Болгария", "Боливия", "Босния и Герцеговина", "Ботсвана",
        "Бразилия", "Бруней", "Буркина-Фасо", "Бурунди", "Бутан", "Вануату",
        "Великобритания", "Венгрия", "Венесуэла", "Вьетнам", "Габон", "Гаити",
        "Гайана", "Гамбия", "Гана", "Гватемала", "Гвинея", "Германия", "Гондурас",
        "Гренада", "Греция", "Грузия", "Дания", "Джибути", "Доминикана", "Египет",
        "Замбия", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак",
        "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде",
        "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр",
        "Киргизия", "Китай", "Колумбия", "Коморы", "Конго", "Коста-Рика",
        "Куба", "Кувейт", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия",
        "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания",
        "Мадагаскар", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта",
        "Марокко", "Мексика", "Мозамбик", "Молдова", "Монако", "Монголия",
        "Мьянма", "Намибия", "Непал", "Нигер", "Нигерия", "Нидерланды",
        "Никарагуа", "Новая Зеландия", "Норвегия", "ОАЭ", "Оман", "Пакистан",
        "Панама", "Папуа — Новая Гвинея", "Парагвай", "Перу", "Польша",
        "Португалия", "Россия", "Руанда", "Румыния", "Сальвадор", "Самоа",
        "Сан-Марино", "Саудовская Аравия", "Северная Корея", "Северная Македония",
        "Сейшелы", "Сенегал", "Сербия", "Сингапур", "Сирия", "Словакия",
        "Словения", "Сомали", "Судан", "Суринам", "США", "Сьерра-Леоне",
        "Таджикистан", "Таиланд", "Танзания", "Того", "Тонга", "Тринидад и Тобаго",
        "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина",
        "Уругвай", "Фиджи", "Филиппины", "Финляндия", "Франция", "Хорватия",
        "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шри-Ланка",
        "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эсватини", "Эстония",
        "Эфиопия", "ЮАР", "Южная Корея", "Южный Судан", "Ямайка", "Япония",
      ],
    },
    features: [
      {
        title: "Покрываем коронавирус",
        text: "Все наши полисы покрывают лечение и диагностику в случае заражения COVID-19, ведь не все страны готовы лечить коронавирус за свой счет. Максимальное покрытие по медицинским расходам составит 100 000 USD/EUR. Также полисом предусмотрена компенсация по риску отмена поездки, если застрахованный заболеет COVID-19.",
      },
      {
        title: "Помощь при обострении хронических заболеваний",
        text: "Сейчас даже у людей моложе 30 лет есть хронические заболевания, которые время от времени дают о себе знать. Не говоря уже о пожилых людях — для них помощь при обострении хронических заболеваний особенно важна. Поэтому мы предлагаем одно из самых больших покрытий на рынке по купированию обострений хронических заболеваний — до 3 000 $.",
      },
      {
        title: "Доктор онлайн 24/7",
        text: "Чтобы не тратить время на дорогу до клиники и ожидание врача, наши клиенты могут бесплатно получить онлайн-консультацию терапевта или педиатра в приложении на смартфоне. Эта опция включена во все страховки независимо от тарифа. Врач отвечает сразу же 24/7 в видео- или онлайн-чате. Нужно лишь установить наше приложение.",
      },
      {
        title: "Только проверенные клиники",
        text: "Мы контролируем качество работы медицинских учреждений с помощью Ваших рейтингов и отзывов на нашем сайте. Если мы получаем более 2-х негативных отзывов по клинике, то просто перестаем с ней работать. Таким образом, наших клиентов направляем только в проверенные клиники, где быстро оказывают квалифицированную медицинскую помощь.",
      },
    ],
    steps: { title: "Как купить полис?", stepAlt: "Шаг" },
    marquee: {
      rowOne: [
        "Великобритания", "Германия", "Франция", "Чехия", "Дания", "Финляндия",
        "Испания", "Италия", "Греция", "Австрия", "Швейцария", "Норвегия",
      ],
      rowTwo: [
        "Турция", "ОАЭ", "Таиланд", "Египет", "Грузия", "Армения",
        "Черногория", "Кипр", "Болгария", "Венгрия", "Польша", "Хорватия",
      ],
    },
    reviews: {
      title: "Отзывы",
      slideAlt: "Слайд",
      text: REVIEW_RU,
      names: [
        "Василий Петров", "Анна Смирнова", "Игорь Кузнецов", "Елена Соколова",
        "Дмитрий Орлов", "Мария Волкова", "Сергей Морозов", "Ольга Новикова",
      ],
    },
    footer: {
      contact: "Связаться с нами",
      columns: [
        {
          title: "Информационный центр",
          links: ["О нас", "Отзывы", "Партнерам"],
        },
        {
          title: "Продукты",
          links: [
            "Страховка для Шенгена",
            "Страховка для России",
            "Страховка в страны",
            "Горнолыжная страховка",
            "Годовая страховка",
          ],
        },
        {
          title: "Документы",
          links: [
            "Пользовательское соглашение",
            "Политика обработки данных",
            "Политика информационной безопасности",
          ],
        },
      ],
    },
    date: {
      months: [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
      ],
      weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      prevMonth: "Предыдущий месяц",
      nextMonth: "Следующий месяц",
    },
  },

  en: {
    breadcrumb: "Home",
    logoSuffix: "insurance",
    nav: {
      products: "Products",
      reviews: "Reviews",
      partners: "Partners",
      discounts: "Discounts",
      productItems: [
        "Schengen insurance",
        "Insurance in Russia",
        "Ski insurance",
        "Annual insurance",
      ],
    },
    hero: {
      title: "Travel Insurance",
      subtitle: "A policy that really works",
      where: "Where to?",
      getQuote: "Get a quote",
      passengerGroups: [
        { title: "Children under 3", note: "" },
        { title: "Children", note: "from 4 to 17 years" },
        { title: "Adults", note: "from 18 to 68 years" },
        { title: "Adults", note: "from 70 to 79 years" },
      ],
      peopleLabel: (count) => `${count} ${count === 1 ? "person" : "people"}`,
      countries: [
        "Abkhazia", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
        "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
        "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
        "Cameroon", "Canada", "Cape Verde", "Chad", "Chile", "China", "Colombia",
        "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia",
        "Denmark", "Djibouti", "Dominican Republic", "Ecuador", "Egypt",
        "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
        "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
        "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana",
        "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
        "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
        "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
        "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco",
        "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
        "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Panama",
        "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
        "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
        "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa",
        "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
        "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand",
        "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
        "Turkmenistan", "UAE", "Uganda", "Ukraine", "United Kingdom", "Uruguay",
        "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe",
      ],
    },
    features: [
      {
        title: "We cover coronavirus",
        text: "All our policies cover treatment and diagnostics in case of COVID-19 infection, since not all countries are ready to treat coronavirus at their own expense. The maximum coverage for medical expenses is 100,000 USD/EUR. The policy also provides compensation for the risk of trip cancellation if the insured falls ill with COVID-19.",
      },
      {
        title: "Help with chronic disease flare-ups",
        text: "These days even people under 30 have chronic conditions that flare up from time to time. Not to mention the elderly — for them, help with chronic disease flare-ups is especially important. That's why we offer one of the largest coverages on the market for managing chronic disease flare-ups — up to $3,000.",
      },
      {
        title: "Online doctor 24/7",
        text: "To avoid wasting time travelling to the clinic and waiting for a doctor, our clients can get a free online consultation with a therapist or pediatrician in the smartphone app. This option is included in all policies regardless of the plan. The doctor responds immediately 24/7 via video or online chat. You just need to install our app.",
      },
      {
        title: "Only trusted clinics",
        text: "We control the quality of medical facilities using your ratings and reviews on our website. If we receive more than 2 negative reviews about a clinic, we simply stop working with it. This way, we refer our clients only to trusted clinics where qualified medical care is provided quickly.",
      },
    ],
    steps: { title: "How to buy a policy?", stepAlt: "Step" },
    marquee: {
      rowOne: [
        "United Kingdom", "Germany", "France", "Czechia", "Denmark", "Finland",
        "Spain", "Italy", "Greece", "Austria", "Switzerland", "Norway",
      ],
      rowTwo: [
        "Turkey", "UAE", "Thailand", "Egypt", "Georgia", "Armenia",
        "Montenegro", "Cyprus", "Bulgaria", "Hungary", "Poland", "Croatia",
      ],
    },
    reviews: {
      title: "Reviews",
      slideAlt: "Slide",
      text: REVIEW_EN,
      names: [
        "Vasily Petrov", "Anna Smirnova", "Igor Kuznetsov", "Elena Sokolova",
        "Dmitry Orlov", "Maria Volkova", "Sergey Morozov", "Olga Novikova",
      ],
    },
    footer: {
      contact: "Contact us",
      columns: [
        {
          title: "Information center",
          links: ["About us", "Reviews", "Partners"],
        },
        {
          title: "Products",
          links: [
            "Schengen insurance",
            "Insurance for Russia",
            "Insurance by country",
            "Ski insurance",
            "Annual insurance",
          ],
        },
        {
          title: "Documents",
          links: [
            "Terms of use",
            "Data processing policy",
            "Information security policy",
          ],
        },
      ],
    },
    date: {
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ],
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      prevMonth: "Previous month",
      nextMonth: "Next month",
    },
  },
};

const LanguageContext = createContext({ lang: "ru", setLang: () => {}, t: translations.ru });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== "undefined" && localStorage.getItem("lang");
    return saved === "en" || saved === "ru" ? saved : "ru";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = { lang, setLang, t: translations[lang] };
  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
