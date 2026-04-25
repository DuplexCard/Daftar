import { useState, useEffect } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check, X, MessageCircle } from 'lucide-react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { cn } from './lib/utils';

const WHATSAPP_LINK = "https://wa.me/97450790619?text=Hi%20Daftar%20team%20I%27m%20interested";

function Header() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-[#FAF7F2]/80 backdrop-blur-md border-[#1B4332]/10 py-4 h-16" 
          : "bg-transparent border-transparent py-6 h-20"
      )}
    >
      <div className="container mx-auto px-12 flex items-center justify-between h-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="font-fraunces text-2xl font-bold tracking-tight text-[#1B4332] flex items-center">
            daftar
            <span className="mx-2 h-6 w-[1px] bg-[#1B4332]/20" />
            <span className="font-arabic font-medium">دفتر</span>
          </div>
        </motion.div>

        <div className="flex items-center gap-8">
          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-primary/70"
          >
            <button 
              onClick={() => setLang('en')}
              className={cn("hover:text-accent transition-colors", lang === 'en' ? "text-primary opacity-100" : "opacity-40")}
            >
              EN
            </button>
            <span className="opacity-20">|</span>
            <button 
              onClick={() => setLang('ar')}
              className={cn("font-arabic hover:text-accent transition-colors", lang === 'ar' ? "text-primary opacity-100" : "opacity-40")}
            >
              العربية
            </button>
          </motion.nav>
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-[#1B4332] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all active:scale-95 shadow-sm"
          >
            {t.header.cta}
          </motion.a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-fraunces text-6xl md:text-7xl font-bold text-[#1B4332] leading-[1.1] mb-8"
            >
              {t.hero.h1}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#2D2D2A] opacity-80 mb-10 max-w-xl leading-relaxed"
            >
              {t.hero.sub}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-[#E9B44C] text-[#1B4332] px-8 py-4 rounded-xl text-lg font-bold shadow-accent hover:-translate-y-0.5 transition-all active:scale-95"
              >
                {t.hero.cta}
              </a>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 text-sm opacity-60 italic font-fraunces font-medium"
            >
              {t.hero.trust}
            </motion.p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {t.pain.items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.15), duration: 0.6 }}
                className="p-5 bg-white rounded-2xl border border-[#1B4332]/10 flex gap-5 items-start hover:shadow-md transition-all group"
              >
                <span className="text-3xl filter group-hover:scale-110 transition-transform">{item.emoji}</span>
                <div>
                  <h3 className="font-bold text-[#1B4332] mb-1">{item.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-sm font-fraunces italic opacity-50 mt-2"
            >
              "{t.pain.transition}"
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatItIs() {
  const { t } = useLanguage();
  return (
    <section className="py-32 px-12 border-t border-[#1B4332]/5">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-fraunces text-3xl md:text-4xl text-[#2D2D2A] leading-tight mb-12 italic"
        >
          {t.what.text}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-[11px] font-bold text-[#1B4332] uppercase tracking-[0.2em]">{t.what.tagline.split('.')[0]}</p>
          <p className="text-[11px] opacity-40 uppercase tracking-[0.2em]">{t.what.tagline.split('.')[1]}</p>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t, isRTL } = useLanguage();
  return (
    <section className="py-24 px-12 bg-white/50 border-y border-[#1B4332]/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {t.how.steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <span className="font-fraunces text-5xl font-bold text-[#E9B44C] opacity-80 leading-none">
                {step.n.padStart(2, '0')}
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">
                  {isRTL ? "الخطوة" : "Step"} {step.n}
                </p>
                <h3 className="font-bold text-lg text-primary">{step.title}</h3>
                <p className="text-sm opacity-60 mt-1">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  const { t } = useLanguage();
  return (
    <section className="py-32 px-12 bg-background-cream">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-white/40 rounded-3xl border border-[#1B4332]/5"
          >
            <h3 className="font-fraunces text-2xl font-bold text-[#1B4332] mb-8 pb-4 border-b border-[#1B4332]/10">
              {t.who.for.title}
            </h3>
            <ul className="space-y-5">
              {t.who.for.items.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-5 h-5 bg-[#1B4332]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#1B4332]" />
                  </div>
                  <span className="text-[#2D2D2A] opacity-80 leading-relaxed font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8"
          >
            <h3 className="font-fraunces text-2xl font-bold text-[#1B4332] mb-8 pb-4 border-b border-[#1B4332]/10">
              {t.who.not.title}
            </h3>
            <ul className="space-y-5">
              {t.who.not.items.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-4 opacity-100"
                >
                  <div className="mt-1 w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-[#2D2D2A] opacity-60 leading-relaxed italic">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const { t } = useLanguage();
  return (
    <section className="py-32 px-12 bg-white/30 border-y border-[#1B4332]/5 relative overflow-hidden">
      {/* Abstract notebook lines decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="h-4 border-b border-[#1B4332]" />
        ))}
      </div>
      
      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-24 h-24 bg-primary/5 rounded-full mx-auto mb-10 flex items-center justify-center overflow-hidden border border-[#E9B44C]/30 shadow-inner"
        >
          <div className="text-[#1B4332] opacity-30 font-bold text-xs uppercase tracking-tighter">Founders</div>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-fraunces text-3xl font-bold text-[#1B4332] mb-8"
        >
          {t.team.found}
        </motion.h3>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-8 text-[#2D2D2A] opacity-80 text-xl leading-relaxed italic font-fraunces"
        >
          <p>"{t.team.bio1}"</p>
          <p>"{t.team.bio2}"</p>
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useLanguage();
  return (
    <section className="py-32 px-12">
      <div className="container mx-auto max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-fraunces text-4xl font-bold text-[#1B4332] text-center mb-20"
        >
          Frequently asked questions
        </motion.h2>
        <Accordion.Root type="single" collapsible className="space-y-6">
          {t.faq.questions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Accordion.Item value={`item-${i}`} className="border-b border-[#1B4332]/10 pb-2">
                <Accordion.Header>
                  <Accordion.Trigger className="group w-full py-6 flex items-center justify-between text-left hover:text-accent transition-all font-bold text-lg text-primary">
                    <span className="pr-8">{item.q}</span>
                    <ChevronDown className="w-5 h-5 text-[#1B4332] opacity-30 group-data-[state=open]:rotate-180 transition-transform" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="accordion-content text-[#2D2D2A] opacity-70 pb-8 leading-relaxed text-lg">
                  {item.a}
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-12 bg-[#1B4332] text-white overflow-hidden relative">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-[#E9B44C]/20 border border-[#E9B44C] text-[#E9B44C] rounded-full text-[10px] sm:text-xs font-bold mb-10 uppercase tracking-widest shadow-[0_0_20px_rgba(233,180,76,0.1)]"
        >
          {t.cta.badge}
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-fraunces text-4xl md:text-6xl font-bold mb-8 leading-[1.1]"
        >
          {t.cta.h2}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl opacity-70 mb-12 max-w-2xl mx-auto"
        >
          {t.cta.sub}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#E9B44C] text-[#1B4332] px-10 py-5 rounded-xl text-lg font-bold shadow-lg shadow-[#E9B44C]/20 hover:-translate-y-1 transition-all"
          >
            {t.cta.btn1}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#1B4332] border-t border-white/10 text-white/40 text-[11px] py-6 px-12"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Daftar. {t.footer.made}</p>
        <div className="flex gap-8 uppercase tracking-[0.2em] font-bold">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          <a href="mailto:hello@daftar.qa" className="hover:text-white transition-colors">Email Us</a>
        </div>
      </div>
    </motion.footer>
  );
}

function PageContent() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhatItIs />
      <HowItWorks />
      <WhoItsFor />
      <Team />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
