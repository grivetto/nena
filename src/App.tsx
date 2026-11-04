import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Links, { Language } from "./Links";
import {
  Instagram,
  Mail,
  MapPin,
  ChevronDown,
  Wind,
  Activity,
  Heart,
  Menu,
  X
} from "lucide-react";

const FLAG_INFO: Record<Language, { code: string; flag: string; label: string }> = {
  it: { code: "IT", flag: "https://flagcdn.com/w40/it.png", label: "Switch to English" },
  en: { code: "EN", flag: "https://flagcdn.com/w40/gb.png", label: "Cambiar a Español" },
  es: { code: "ES", flag: "https://flagcdn.com/w40/es.png", label: "เปลี่ยนเป็นภาษาไทย" },
  th: { code: "TH", flag: "https://flagcdn.com/w40/th.png", label: "Passa all'Italiano" },
};

const translations = {
  it: {
    sections: [
      { id: "hero", label: "Home" },
      { id: "about", label: "Chi Sono" },
      { id: "gallery", label: "Galleria" },
      { id: "contact", label: "Contatti" },
    ],
    linksLabel: "Links",
    businessSite: "Business Site",
    heroTitle: "Leggerezza in Volo",
    heroSubtitle: "Serena Franceri • Aerial Silks Artist",
    aboutTitle: "La mia storia",
    aboutP1:
      "Per me, i tessuti aerei non sono solo una disciplina sportiva, ma un modo per sfidare la gravità e trovare la libertà. Ogni movimento è una danza tra forza e grazia, un dialogo silenzioso con l'aria.",
    aboutP2:
      "Ho iniziato questo percorso anni fa, cercando un modo per esprimere me stessa oltre le parole. Oggi, l'altezza non mi spaventa più; è diventata il mio palcoscenico naturale.",
    statGrace: "Grazia",
    statStrength: "Forza",
    statPassion: "Passione",
    galleryTitle: "Galleria",
    galleryItem: "Figura",
    contactTitle: "Contattami",
    contactIntro:
      "Sei interessato a collaborazioni, workshop o semplicemente vuoi scambiare due parole sulla magia dei tessuti? Scrivimi pure.",
    location: "Torino, Italia",
    formName: "Nome",
    formNamePlaceholder: "Il tuo nome",
    formEmail: "Email",
    formEmailPlaceholder: "la-tua@email.com",
    formMessage: "Messaggio",
    formMessagePlaceholder: "Come posso aiutarti?",
    formSubmit: "Invia Messaggio",
    footerRights: "Tutti i diritti riservati.",
    footerQuote: "Sospesa tra cielo e terra.",
  },
  en: {
    sections: [
      { id: "hero", label: "Home" },
      { id: "about", label: "About Me" },
      { id: "gallery", label: "Gallery" },
      { id: "contact", label: "Contact" },
    ],
    linksLabel: "Links",
    businessSite: "Business Site",
    heroTitle: "Lightness in Flight",
    heroSubtitle: "Serena Franceri • Aerial Silks Artist",
    aboutTitle: "My Story",
    aboutP1:
      "For me, aerial silks are not just a sport, but a way to defy gravity and find freedom. Every movement is a dance between strength and grace, a silent dialogue with the air.",
    aboutP2:
      "I started this journey years ago, looking for a way to express myself beyond words. Today, height no longer scares me; it has become my natural stage.",
    statGrace: "Grace",
    statStrength: "Strength",
    statPassion: "Passion",
    galleryTitle: "Gallery",
    galleryItem: "Figure",
    contactTitle: "Contact Me",
    contactIntro:
      "Interested in collaborations, workshops, or simply want to chat about the magic of aerial silks? Feel free to write to me.",
    location: "Turin, Italy",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formMessage: "Message",
    formMessagePlaceholder: "How can I help you?",
    formSubmit: "Send Message",
    footerRights: "All rights reserved.",
    footerQuote: "Suspended between sky and earth.",
  },
  es: {
    sections: [
      { id: "hero", label: "Inicio" },
      { id: "about", label: "Sobre Mí" },
      { id: "gallery", label: "Galería" },
      { id: "contact", label: "Contacto" },
    ],
    linksLabel: "Enlaces",
    businessSite: "Sitio Corporativo",
    heroTitle: "Ligereza en Vuelo",
    heroSubtitle: "Serena Franceri • Artista de Telas Aéreas",
    aboutTitle: "Mi historia",
    aboutP1:
      "Para mí, las telas aéreas no son solo una disciplina deportiva, sino una forma de desafiar la gravedad y encontrar la libertad. Cada movimiento es una danza entre fuerza y gracia, un diálogo silencioso con el aire.",
    aboutP2:
      "Comencé este camino hace años buscando una forma de expresarme más allá de las palabras. Hoy la altura ya no me asusta; se ha convertido en mi escenario natural.",
    statGrace: "Gracia",
    statStrength: "Fuerza",
    statPassion: "Pasión",
    galleryTitle: "Galería",
    galleryItem: "Figura",
    contactTitle: "Contáctame",
    contactIntro:
      "¿Te interesan colaboraciones, talleres o simplemente charlar sobre la magia de las telas aéreas? Escríbeme.",
    location: "Turín, Italia",
    formName: "Nombre",
    formNamePlaceholder: "Tu nombre",
    formEmail: "Correo electrónico",
    formEmailPlaceholder: "tu@correo.com",
    formMessage: "Mensaje",
    formMessagePlaceholder: "¿Cómo puedo ayudarte?",
    formSubmit: "Enviar Mensaje",
    footerRights: "Todos los derechos reservados.",
    footerQuote: "Suspendida entre cielo y tierra.",
  },
  th: {
    sections: [
      { id: "hero", label: "หน้าแรก" },
      { id: "about", label: "เกี่ยวกับฉัน" },
      { id: "gallery", label: "แกลเลอรี" },
      { id: "contact", label: "ติดต่อ" },
    ],
    linksLabel: "ลิงก์",
    businessSite: "เว็บไซต์ธุรกิจ",
    heroTitle: "ความพลิ้วไหวกลางเวหา",
    heroSubtitle: "Serena Franceri • ศิลปินผ้ากายกรรมกลางอากาศ",
    aboutTitle: "เรื่องราวของฉัน",
    aboutP1:
      "สำหรับฉัน ผ้ากายกรรมกลางอากาศไม่ใช่แค่กีฬา แต่เป็นวิธีท้าทายแรงโน้มถ่วงและค้นพบอิสรภาพ ทุกท่วงท่าคือการร่ายรำระหว่างความแข็งแกร่งและความสง่างาม เป็นบทสนทนาอันเงียบงันกับสายลม",
    aboutP2:
      "ฉันเริ่มต้นเส้นทางนี้เมื่อหลายปีก่อน เพื่อมองหาวิธีแสดงออกถึงตัวตนที่เหนือกว่าคำพูด วันนี้ความสูงไม่ได้ทำให้ฉันกลัวอีกต่อไป แต่มันได้กลายเป็นเวทีธรรมชาติของฉัน",
    statGrace: "ความสง่างาม",
    statStrength: "ความแข็งแกร่ง",
    statPassion: "ความหลงใหล",
    galleryTitle: "แกลเลอรี",
    galleryItem: "ท่วงท่าที่",
    contactTitle: "ติดต่อฉัน",
    contactIntro:
      "สนใจร่วมงาน เวิร์กช็อป หรือเพียงแค่อยากพูดคุยเกี่ยวกับมนต์เสน่ห์ของผ้ากายกรรมกลางอากาศ? เขียนข้อความหาฉันได้เลย",
    location: "ตูริน, อิตาลี",
    formName: "ชื่อ",
    formNamePlaceholder: "ชื่อของคุณ",
    formEmail: "อีเมล",
    formEmailPlaceholder: "your@email.com",
    formMessage: "ข้อความ",
    formMessagePlaceholder: "ให้ฉันช่วยอะไรคุณได้บ้าง?",
    formSubmit: "ส่งข้อความ",
    footerRights: "สงวนลิขสิทธิ์ทั้งหมด",
    footerQuote: "ล่องลอยระหว่างผืนฟ้าและแผ่นดิน",
  },
};

function getInitialLanguage(): Language {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang")?.toLowerCase();
    if (urlLang === "it" || urlLang === "en" || urlLang === "es" || urlLang === "th") {
      return urlLang as Language;
    }
    const saved = localStorage.getItem("nena_lang")?.toLowerCase();
    if (saved === "it" || saved === "en" || saved === "es" || saved === "th") {
      return saved as Language;
    }
  }
  return "it";
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const heroRef = useRef(null);

  const toggleLanguage = () => {
    const order: Language[] = ["it", "en", "es", "th"];
    setLang((prev) => {
      const next = order[(order.indexOf(prev) + 1) % order.length];
      try {
        localStorage.setItem("nena_lang", next);
      } catch {}
      return next;
    });
  };

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  if (currentHash === "#links") {
    return <Links lang={lang} onToggleLang={toggleLanguage} />;
  }

  const t = translations[lang];
  const currentFlag = FLAG_INFO[lang];

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-serif font-bold tracking-widest text-brand-deep"
          >
            SERENA FRANCERI
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {t.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm uppercase tracking-widest font-medium hover:text-brand-purple transition-colors"
              >
                {section.label}
              </a>
            ))}
            <a
              href="#links"
              className="text-sm uppercase tracking-widest font-medium hover:text-brand-purple transition-colors"
            >
              {t.linksLabel}
            </a>
            <a
              href="/"
              className="bg-brand-purple text-white px-4 py-1.5 flex items-center rounded-full hover:bg-brand-deep transition-all font-bold text-[10px] uppercase tracking-widest"
            >
              {t.businessSite}
            </a>
            <button
              onClick={toggleLanguage}
              title={currentFlag.label}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-black/10 shadow-sm hover:bg-white transition-all cursor-pointer"
            >
              <img
                src={currentFlag.flag}
                alt={currentFlag.code}
                className="w-5 h-auto rounded-[2px]"
              />
              <span className="text-xs font-bold tracking-wider text-brand-deep">
                {currentFlag.code}
              </span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              title={currentFlag.label}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/80 border border-black/10 shadow-sm hover:bg-white transition-all cursor-pointer"
            >
              <img
                src={currentFlag.flag}
                alt={currentFlag.code}
                className="w-5 h-auto rounded-[2px]"
              />
              <span className="text-xs font-bold tracking-wider text-brand-deep">
                {currentFlag.code}
              </span>
            </button>
            <button
              className="text-brand-deep"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 py-6 px-6 flex flex-col space-y-4"
          >
            {t.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-serif tracking-wide text-brand-deep"
              >
                {section.label}
              </a>
            ))}
            <a
              href="#links"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-serif tracking-wide text-brand-deep"
            >
              {t.linksLabel}
            </a>
            <a
              href="/"
              className="bg-brand-purple text-white px-4 py-3 rounded-xl hover:bg-brand-deep transition-all font-bold text-sm uppercase tracking-widest text-center mt-4"
            >
              {t.businessSite}
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative h-screen overflow-hidden flex items-center justify-center"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920"
            alt="Aerial Silks Background"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center text-white px-6"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-serif italic mb-4"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase"
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1518611012118-2960c8bad847?auto=format&fit=crop&q=80&w=800"
              alt="Serena Training"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif italic mb-8 text-brand-purple">
              {t.aboutTitle}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              {t.aboutP1}
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              {t.aboutP2}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-ethereal rounded-full flex items-center justify-center mx-auto mb-2 text-brand-purple">
                  <Wind size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">
                  {t.statGrace}
                </span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-ethereal rounded-full flex items-center justify-center mx-auto mb-2 text-brand-purple">
                  <Activity size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">
                  {t.statStrength}
                </span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-ethereal rounded-full flex items-center justify-center mx-auto mb-2 text-brand-purple">
                  <Heart size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">
                  {t.statPassion}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-brand-ethereal">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4">
              {t.galleryTitle}
            </h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto opacity-30"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src={`https://picsum.photos/seed/aerial${i}/600/800`}
                  alt={`Gallery Image ${i}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-purple/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white font-serif italic text-2xl">
                    {t.galleryItem} {i}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-brand-deep text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
                {t.contactTitle}
              </h2>
              <p className="text-white/70 mb-12">{t.contactIntro}</p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <a
                    href="mailto:franceriserena85@gmail.com"
                    className="hover:text-brand-purple transition-colors"
                  >
                    franceriserena85@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <Instagram size={18} />
                  </div>
                  <a
                    href="https://www.instagram.com/nena.snena99/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-purple transition-colors"
                  >
                    @nena.snena99
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <span>{t.location}</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 opacity-60">
                  {t.formName}
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder={t.formNamePlaceholder}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 opacity-60">
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder={t.formEmailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 opacity-60">
                  {t.formMessage}
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors resize-none"
                  placeholder={t.formMessagePlaceholder}
                ></textarea>
              </div>
              <button className="w-full bg-white text-brand-deep font-bold py-4 rounded-lg hover:bg-brand-purple hover:text-white transition-all duration-300 uppercase tracking-widest text-sm">
                {t.formSubmit}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-brand-deep border-t border-white/5 text-center text-white/40 text-sm">
        <p>
          © {new Date().getFullYear()} Serena Franceri. {t.footerRights}
        </p>
        <p className="mt-2 italic font-serif">{t.footerQuote}</p>
      </footer>
    </div>
  );
}
