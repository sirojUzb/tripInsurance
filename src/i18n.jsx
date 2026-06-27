import { createContext, useContext, useEffect, useState } from "react";

const REVIEW_RU =
  "Много лет пользуюсь, предпочитаю другим компаниям! Оперативный чат, посмотрим как будет дальше! Пока все отлично)";
const REVIEW_EN =
  "I've been using it for years, I prefer it to other companies! Responsive chat, let's see how it goes! So far everything is great)";

export const translations = {
  ru: {
    breadcrumb: "Главная",
    schengen: {
      breadcrumb: "Шенген",
      title: "Медицинская страховка для Шенгенской визы",
      badges: ["Лучшие клиники", "Помощь 24/7", "Подходит для визы"],
      who: {
        title: "Кому нужна медицинская страховка для Шенгена",
        intro:
          "Страховка понадобится, если вы собираетесь в одну или несколько стран шенгенской зоны: Австрия, Бельгия, Чешская Республика, Дания, Эстония, Финляндия, Франция, Германия, Греция, Венгрия, Исландия, Испания, Италия, Латвия, Литва, Лихтенштейн, Люксембург, Мальта, Нидерланды, Норвегия, Польша, Португалия, Словакия, Словения, Швеция, Швейцария. Tripinsurance – это компания, где вы можете оформить и купить медицинскую туристическую страховку для шенгенской визы онлайн. Полисы нашей компании соответствуют всем визовым нормам и стандартам.",
        listTitle: "Почему оформление полиса обязательно:",
        bullets: [
          "По требованию визового законодательства, иностранные граждане, въезжающие на территорию стран шенгенской зоны, должны иметь страховку.",
          "Если зайдете на сайт консульства любой из стран-участниц шенгенского соглашения, то в перечне документов для получения визы будет указана медицинская страховка.",
          "Если вы получили мультивизу, то обратите внимание, что страховка обязательно нужна для каждой поездки.",
          "Таможенные службы при пересечении границы могут запрашивать не только паспорт с визой, но и страховку. Такие случаи бывают на границах Польши, Финляндии, Чехии.",
          "Но сделать мед. страховку для шенгенской визы онлайн в первую очередь необходимо для своевременного получения медицинской помощи.",
        ],
      },
      benefits: {
        title: "Преимущества обращения в нашу компанию",
        items: [
          {
            title: "Надежная сервисная компания",
            text: "Клиентов обслуживает наш собственный сервисный центр Tripinsurance. Мы отслеживаем качество оказанной медицинской помощи, отбираем лучшие клиники для наших клиентов.",
          },
          {
            title: "Для активных путешественников",
            text: "Страховка может быть краткосрочной, для нескольких длительных поездок (до 91 дня) в течение года и для путешествий, которые длятся целый год. Если вы часто путешествуете, то годовые страховки помогут сэкономить.",
          },
          {
            title: "Аккредитация страховой компании",
            text: "Некоторые европейские консульства (например, Финляндии, Австрии) создают списки аккредитованных компаний. Компания Tripinsurance оформляет полисы от имени страховой компании, которая аккредитована всеми дипломатическими представительствами.",
          },
          {
            title: "Без франшизы",
            text: "Некоторые компании предлагают купить страховку для Шенгена онлайн дешево, вводя франшизу (неоплачиваемую часть расходов) в полис. Мы предлагаем программы без франшизы. У наших клиентов нет дополнительных затрат, если полис куплен до начала поездки.",
          },
        ],
      },
    },
    partners: {
      breadcrumb: "Партнерам",
      title: "Партнерская программа",
      subtitle: "Продажа туристических страховок для сайтов, турфирм, агентств",
      register: "Регистрация онлайн",
      loginPrefix: "или войти ",
      loginLink: "здесь",
      offer: {
        title: "Что мы предлагаем?",
        items: [
          {
            title: "Страхование путешественников",
            sub: "Страховка для получения визы и не только",
          },
          {
            title: "Страхование отмены поездки",
            sub: "Компенсация, если срывается поездка",
          },
          {
            title: "Продукт Лайт для профи",
            sub: "Специальный продукт для турагентов",
          },
        ],
      },
      how: {
        title: "Как это работает?",
        steps: [
          "Зарегистрируйтесь и получите доступ к личному кабинету",
          "Выберите способ интеграции",
          "Зарабатывайте до 25% от стоимости полиса",
        ],
      },
      widget: {
        title: "Размещение виджета",
        desc: "Виджет – это графический элемент интерфейса, который позволит перемещаться с Вашего сайта на наш портал. Также он проинформирует пользователей о рейтинге и наличии отзывов.",
        calcTitle: "Рассчитайте стоимость страховки",
        reviewsTitle: "Отзывы клиентов",
        allReviews: "Все отзывы",
        reviewText:
          "Много лет пользуюсь предпочитаю другим компаниям! Оперативный чат, посмотрим как будет дальше! Пока все отлично)",
        reviewName: "Василий Петров",
        sample: "Образец полиса страхования",
        terms: "Условия страхования",
        choose: "Выбрать",
        add: "Добавить",
        features: [
          "Медицинская помощь",
          "Стоматологическая помощь",
          "Визит третьего лица",
          "Досрочное возвращение домой",
          "Задержка авиарейса",
          "Юридическая помощь",
          "Гражданская ответственность",
          "Утрата или повреждение багажа",
          "Несчастный случай",
          "Активный отдых",
        ],
        plans: [
          { name: "Базовый", note: "Минимальная страховка, отвечающая шенгенским правилам. + COVID-19" },
          { name: "Стандарт", note: "+ увеличен лимит + расширенное покрытие" },
          { name: "Базовый", note: "+ максимальный лимит + гражд. ответственность + багаж" },
          { name: "Базовый", note: "Годовая страховка, если планируете больше 2-3 поездок" },
        ],
        promo1: "Не забудь про страховку",
        promo2: "от 1 387₽",
      },
    },
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
    schengen: {
      breadcrumb: "Schengen",
      title: "Medical insurance for a Schengen visa",
      badges: ["Best clinics", "24/7 support", "Valid for a visa"],
      who: {
        title: "Who needs medical insurance for Schengen",
        intro:
          "You'll need insurance if you're travelling to one or more Schengen-area countries: Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Spain, Italy, Latvia, Lithuania, Liechtenstein, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Sweden, Switzerland. Tripinsurance is a company where you can arrange and buy medical travel insurance for a Schengen visa online. Our policies comply with all visa requirements and standards.",
        listTitle: "Why a policy is mandatory:",
        bullets: [
          "Under visa law, foreign nationals entering the Schengen area are required to have insurance.",
          "If you visit the consulate website of any Schengen member country, medical insurance will be listed among the documents required to obtain a visa.",
          "If you have a multiple-entry visa, note that insurance is required for every trip.",
          "When crossing the border, customs services may request not only your passport with a visa but also your insurance. This happens at the borders of Poland, Finland and Czechia.",
          "But above all, getting medical insurance for a Schengen visa online is necessary to receive timely medical care.",
        ],
      },
      benefits: {
        title: "Advantages of choosing our company",
        items: [
          {
            title: "Reliable service company",
            text: "Clients are served by our own Tripinsurance service center. We monitor the quality of medical care provided and select the best clinics for our clients.",
          },
          {
            title: "For active travelers",
            text: "Insurance can be short-term, for several long trips (up to 91 days) during the year, or for journeys lasting a whole year. If you travel often, annual policies will help you save.",
          },
          {
            title: "Accredited insurance company",
            text: "Some European consulates (for example, Finland and Austria) maintain lists of accredited companies. Tripinsurance issues policies on behalf of an insurance company accredited by all diplomatic missions.",
          },
          {
            title: "No deductible",
            text: "Some companies offer cheap Schengen insurance online by adding a deductible (a non-reimbursable portion of costs) to the policy. We offer programs without a deductible. Our clients have no extra costs if the policy is bought before the trip starts.",
          },
        ],
      },
    },
    partners: {
      breadcrumb: "Partners",
      title: "Partner program",
      subtitle: "Selling travel insurance for websites, travel companies and agencies",
      register: "Register online",
      loginPrefix: "or log in ",
      loginLink: "here",
      offer: {
        title: "What we offer?",
        items: [
          {
            title: "Travel insurance",
            sub: "Insurance for getting a visa and more",
          },
          {
            title: "Trip cancellation insurance",
            sub: "Compensation if your trip falls through",
          },
          {
            title: "Light product for pros",
            sub: "A special product for travel agents",
          },
        ],
      },
      how: {
        title: "How does it work?",
        steps: [
          "Register and get access to your personal account",
          "Choose an integration method",
          "Earn up to 25% of the policy price",
        ],
      },
      widget: {
        title: "Widget placement",
        desc: "A widget is a graphical interface element that lets users move from your website to our portal. It also informs users about the rating and available reviews.",
        calcTitle: "Calculate the insurance cost",
        reviewsTitle: "Customer reviews",
        allReviews: "All reviews",
        reviewText:
          "I've been using it for years, I prefer it to other companies! Responsive chat, let's see how it goes! So far everything is great)",
        reviewName: "Vasily Petrov",
        sample: "Sample insurance policy",
        terms: "Insurance terms",
        choose: "Choose",
        add: "Add",
        features: [
          "Medical care",
          "Dental care",
          "Third-party visit",
          "Early return home",
          "Flight delay",
          "Legal assistance",
          "Civil liability",
          "Loss or damage of luggage",
          "Accident",
          "Active recreation",
        ],
        plans: [
          { name: "Basic", note: "Minimum insurance that meets Schengen rules. + COVID-19" },
          { name: "Standard", note: "+ increased limit + extended coverage" },
          { name: "Basic", note: "+ maximum limit + civil liability + luggage" },
          { name: "Basic", note: "Annual insurance if you plan more than 2-3 trips" },
        ],
        promo1: "Don't forget about insurance",
        promo2: "from 1,387₽",
      },
    },
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
      title: "Trip Insurance",
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
