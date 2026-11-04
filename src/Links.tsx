import { useState } from "react";
import { motion } from "motion/react";
import { Instagram, ShoppingBag, Plane, ArrowLeft } from "lucide-react";

export type Language = "it" | "en" | "es" | "th";

interface LinksProps {
  lang?: Language;
  onToggleLang?: () => void;
}

const FLAG_INFO: Record<Language, { code: string; flag: string; label: string }> = {
  it: { code: "IT", flag: "https://flagcdn.com/w40/it.png", label: "Switch to English" },
  en: { code: "EN", flag: "https://flagcdn.com/w40/gb.png", label: "Cambiar a Español" },
  es: { code: "ES", flag: "https://flagcdn.com/w40/es.png", label: "เปลี่ยนเป็นภาษาไทย" },
  th: { code: "TH", flag: "https://flagcdn.com/w40/th.png", label: "Passa all'Italiano" },
};

const translations = {
  it: {
    backToHome: "Torna alla Home",
    headingPrefix: "I miei",
    headingHighlight: "Link",
    subtitle: "Scopri i miei altri progetti",
    links: [
      {
        title: "Selvanea Artvintage",
        description: "Instagram",
        url: "https://www.instagram.com/selvanea_artvintage?utm_source=qr&igsh=bW9keXdvNDVzdDVx",
        icon: <Instagram size={20} />,
      },
      {
        title: "Selvanea Shop",
        description: "Negozio Etsy",
        url: "https://www.etsy.com/shop/selvanea/?etsrc=sdt&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAQVh4tleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadBk58knG9H_q-kcBJ3SLFHly70Uwc-TtsEAVYg3qn66wPnGV7wMwkQ85Ctgg_aem_ZkFHYwnFsCZzDi_W0XOeQQ",
        icon: <ShoppingBag size={20} />,
      },
      {
        title: "Serena Travel Planner",
        description: "Instagram",
        url: "https://www.instagram.com/serena.travel.planner?utm_source=qr&igsh=MWVzOGZmb29jcWV3eQ==",
        icon: <Plane size={20} />,
      },
    ],
  },
  en: {
    backToHome: "Back to Home",
    headingPrefix: "My",
    headingHighlight: "Links",
    subtitle: "Discover my other projects",
    links: [
      {
        title: "Selvanea Artvintage",
        description: "Instagram",
        url: "https://www.instagram.com/selvanea_artvintage?utm_source=qr&igsh=bW9keXdvNDVzdDVx",
        icon: <Instagram size={20} />,
      },
      {
        title: "Selvanea Shop",
        description: "Etsy Store",
        url: "https://www.etsy.com/shop/selvanea/?etsrc=sdt&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAQVh4tleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadBk58knG9H_q-kcBJ3SLFHly70Uwc-TtsEAVYg3qn66wPnGV7wMwkQ85Ctgg_aem_ZkFHYwnFsCZzDi_W0XOeQQ",
        icon: <ShoppingBag size={20} />,
      },
      {
        title: "Serena Travel Planner",
        description: "Instagram",
        url: "https://www.instagram.com/serena.travel.planner?utm_source=qr&igsh=MWVzOGZmb29jcWV3eQ==",
        icon: <Plane size={20} />,
      },
    ],
  },
  es: {
    backToHome: "Volver al Inicio",
    headingPrefix: "Mis",
    headingHighlight: "Enlaces",
    subtitle: "Descubre mis otros proyectos",
    links: [
      {
        title: "Selvanea Artvintage",
        description: "Instagram",
        url: "https://www.instagram.com/selvanea_artvintage?utm_source=qr&igsh=bW9keXdvNDVzdDVx",
        icon: <Instagram size={20} />,
      },
      {
        title: "Selvanea Shop",
        description: "Tienda Etsy",
        url: "https://www.etsy.com/shop/selvanea/?etsrc=sdt&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAQVh4tleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadBk58knG9H_q-kcBJ3SLFHly70Uwc-TtsEAVYg3qn66wPnGV7wMwkQ85Ctgg_aem_ZkFHYwnFsCZzDi_W0XOeQQ",
        icon: <ShoppingBag size={20} />,
      },
      {
        title: "Serena Travel Planner",
        description: "Instagram",
        url: "https://www.instagram.com/serena.travel.planner?utm_source=qr&igsh=MWVzOGZmb29jcWV3eQ==",
        icon: <Plane size={20} />,
      },
    ],
  },
  th: {
    backToHome: "กลับสู่หน้าแรก",
    headingPrefix: "ลิงก์",
    headingHighlight: "ของฉัน",
    subtitle: "สำรวจโปรเจกต์อื่นๆ ของฉัน",
    links: [
      {
        title: "Selvanea Artvintage",
        description: "Instagram",
        url: "https://www.instagram.com/selvanea_artvintage?utm_source=qr&igsh=bW9keXdvNDVzdDVx",
        icon: <Instagram size={20} />,
      },
      {
        title: "Selvanea Shop",
        description: "ร้านค้า Etsy",
        url: "https://www.etsy.com/shop/selvanea/?etsrc=sdt&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAQVh4tleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadBk58knG9H_q-kcBJ3SLFHly70Uwc-TtsEAVYg3qn66wPnGV7wMwkQ85Ctgg_aem_ZkFHYwnFsCZzDi_W0XOeQQ",
        icon: <ShoppingBag size={20} />,
      },
      {
        title: "Serena Travel Planner",
        description: "Instagram",
        url: "https://www.instagram.com/serena.travel.planner?utm_source=qr&igsh=MWVzOGZmb29jcWV3eQ==",
        icon: <Plane size={20} />,
      },
    ],
  },
};

export default function Links({ lang: propLang, onToggleLang }: LinksProps) {
  const [internalLang, setInternalLang] = useState<Language>("it");
  const lang = propLang ?? internalLang;

  const handleToggle = () => {
    if (onToggleLang) {
      onToggleLang();
    } else {
      const order: Language[] = ["it", "en", "es", "th"];
      setInternalLang(order[(order.indexOf(lang) + 1) % order.length]);
    }
  };

  const t = translations[lang];
  const currentFlag = FLAG_INFO[lang];

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-lg border-b border-[#2C3B2E]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="flex items-center text-sm uppercase tracking-widest font-bold text-[#2C3B2E] hover:text-[#1A1A1A] transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            {t.backToHome}
          </a>
          <div className="flex items-center gap-4">
            <div className="text-xl font-serif font-bold tracking-widest text-[#1A1A1A] hidden sm:block">
              SERENA FRANCERI
            </div>
            <button
              onClick={handleToggle}
              title={currentFlag.label}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-black/10 shadow-sm hover:bg-white transition-all cursor-pointer"
            >
              <img
                src={currentFlag.flag}
                alt={currentFlag.code}
                className="w-5 h-auto rounded-[2px]"
              />
              <span className="text-xs font-bold tracking-wider text-[#1A1A1A]">
                {currentFlag.code}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md text-center mb-12"
        >
          <div className="w-24 h-24 mx-auto bg-[#2C3B2E] rounded-full flex items-center justify-center mb-6 overflow-hidden text-[#FDFBF7]">
            <span className="font-serif italic text-4xl">S</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif italic mb-4 text-[#2C3B2E]">
            {t.headingPrefix} <span className="text-[#1A1A1A]">{t.headingHighlight}</span>
          </h1>
          <p className="text-[#1A1A1A]/60 text-sm uppercase tracking-widest font-bold">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="w-full max-w-md space-y-4">
          {t.links.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
              className="group block p-4 bg-white border border-[#2C3B2E]/10 rounded-xl hover:bg-[#2C3B2E] transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-lg flex items-center justify-center text-[#2C3B2E] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-bold text-lg text-[#1A1A1A] group-hover:text-white transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-[10px] text-[#1A1A1A]/60 group-hover:text-white/80 transition-colors duration-300 uppercase tracking-[0.2em] font-bold">
                    {link.description}
                  </p>
                </div>
                <div className="text-[#2C3B2E]/40 group-hover:text-white transition-colors duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
