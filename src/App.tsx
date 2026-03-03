import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
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

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "Chi Sono" },
  { id: "gallery", label: "Galleria" },
  { id: "contact", label: "Contatti" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm uppercase tracking-widest font-medium hover:text-brand-purple transition-colors"
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-deep"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 py-6 px-6 flex flex-col space-y-4"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-serif tracking-wide text-brand-deep"
              >
                {section.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
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
            Leggerezza in Volo
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase"
          >
            Serena Franceri • Aerial Silks Artist
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
            <h2 className="text-4xl md:text-5xl font-serif italic mb-8 text-brand-purple">La mia storia</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Per me, i tessuti aerei non sono solo una disciplina sportiva, ma un modo per sfidare la gravità e trovare la libertà. Ogni movimento è una danza tra forza e grazia, un dialogo silenzioso con l'aria.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Ho iniziato questo percorso anni fa, cercando un modo per esprimere me stessa oltre le parole. Oggi, l'altezza non mi spaventa più; è diventata il mio palcoscenico naturale.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-ethereal rounded-full flex items-center justify-center mx-auto mb-2 text-brand-purple">
                  <Wind size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">Grazia</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-ethereal rounded-full flex items-center justify-center mx-auto mb-2 text-brand-purple">
                  <Activity size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">Forza</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-ethereal rounded-full flex items-center justify-center mx-auto mb-2 text-brand-purple">
                  <Heart size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">Passione</span>
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
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Galleria</h2>
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
                  <p className="text-white font-serif italic text-2xl">Figura {i}</p>
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
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Contattami</h2>
              <p className="text-white/70 mb-12">
                Sei interessato a collaborazioni, workshop o semplicemente vuoi scambiare due parole sulla magia dei tessuti? Scrivimi pure.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span>serena.franceri@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <Instagram size={18} />
                  </div>
                  <span>@serena_aerial</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <span>Milano, Italia</span>
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
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 opacity-60">Nome</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 opacity-60">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder="la-tua@email.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 opacity-60">Messaggio</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors resize-none"
                  placeholder="Come posso aiutarti?"
                ></textarea>
              </div>
              <button className="w-full bg-white text-brand-deep font-bold py-4 rounded-lg hover:bg-brand-purple hover:text-white transition-all duration-300 uppercase tracking-widest text-sm">
                Invia Messaggio
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-brand-deep border-t border-white/5 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Serena Franceri. Tutti i diritti riservati.</p>
        <p className="mt-2 italic font-serif">Sospesa tra cielo e terra.</p>
      </footer>
    </div>
  );
}
