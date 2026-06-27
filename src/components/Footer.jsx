import { useLang } from "../i18n.jsx";

const SOCIALS = [
  { src: "/images/1.youtube.svg", label: "YouTube" },
  { src: "/images/2.vk.svg", label: "VK" },
  { src: "/images/3.facebook.svg", label: "Facebook" },
  { src: "/images/4.twitter.svg", label: "Twitter" },
  { src: "/images/5.tiktok.svg", label: "TikTok" },
  { src: "/images/6.instagram.svg", label: "Instagram" },
  { src: "/images/7.telegram.svg", label: "Telegram" },
  { src: "/images/8.whatsapp.svg", label: "WhatsApp" },
];

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-neutral-200 bg-white py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {t.footer.columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-[15px] font-bold text-neutral-900">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[13px] text-neutral-500 transition-colors hover:text-purple-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Соцсети */}
        <div>
          <h3 className="mb-4 text-[15px] font-bold text-neutral-900">
            {t.footer.contact}
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="transition-transform hover:-translate-y-0.5"
              >
                <img src={social.src} alt={social.label} className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
