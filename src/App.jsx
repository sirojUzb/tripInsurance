import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Steps from "./components/Steps.jsx";
import CountriesMarquee from "./components/CountriesMarquee.jsx";
import Reviews from "./components/Reviews.jsx";
import Footer from "./components/Footer.jsx";
import SchengenBadges from "./components/SchengenBadges.jsx";
import SchengenWho from "./components/SchengenWho.jsx";
import SchengenBenefits from "./components/SchengenBenefits.jsx";
import PartnersHero from "./components/PartnersHero.jsx";
import PartnersOffer from "./components/PartnersOffer.jsx";
import PartnersHow from "./components/PartnersHow.jsx";
import PartnersWidget from "./components/PartnersWidget.jsx";
import { useLang } from "./i18n.jsx";
import { useRouter } from "./router.jsx";

function HomePage() {
  const { t } = useLang();
  return (
    <>
      <main className="px-6 pt-6 pb-12 md:px-8">
        <p className="mb-5 text-lg text-neutral-400">{t.breadcrumb}</p>
        <Hero title={t.hero.title} />
      </main>
      <Features />
      <Steps />
      <CountriesMarquee />
      <Reviews />
      <Footer />
    </>
  );
}

function SchengenPage() {
  const { t } = useLang();
  return (
    <>
      <main className="px-6 pt-6 pb-12 md:px-8">
        <p className="mb-5 text-lg text-neutral-400">{t.schengen.breadcrumb}</p>
        <Hero title={t.schengen.title} />
      </main>
      <SchengenBadges />
      <SchengenWho />
      <Steps />
      <SchengenBenefits />
      <CountriesMarquee />
      <Reviews />
      <Footer />
    </>
  );
}

function PartnersPage() {
  const { t } = useLang();
  return (
    <>
      <main className="px-6 pt-6 pb-12 md:px-8">
        <p className="mb-5 text-lg text-neutral-400">{t.partners.breadcrumb}</p>
        <PartnersHero />
      </main>
      <PartnersOffer />
      <PartnersHow />
      <PartnersWidget />
      <Reviews />
      <Footer />
    </>
  );
}

function App() {
  const { path } = useRouter();
  if (path === "/schengen") return <SchengenPage />;
  if (path === "/partners") return <PartnersPage />;
  return <HomePage />;
}

export default App;
