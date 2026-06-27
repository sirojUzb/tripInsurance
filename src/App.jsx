import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Steps from "./components/Steps.jsx";
import CountriesMarquee from "./components/CountriesMarquee.jsx";
import Reviews from "./components/Reviews.jsx";
import Footer from "./components/Footer.jsx";
import { useLang } from "./i18n.jsx";

function App() {
  const { t } = useLang();
  return (
    <>
      <main className="px-6 pt-6 pb-12 md:px-8">
        <p className="mb-5 text-lg text-neutral-400">{t.breadcrumb}</p>
        <Hero />
      </main>
      <Features />
      <Steps />
      <CountriesMarquee />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
