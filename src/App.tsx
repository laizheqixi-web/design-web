import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Copy, Check, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';

import { Language } from './types';
import { TRANSLATIONS } from './translations';

/* ── Design tokens ─────────────────────────────────────────── */
const C = {
  warmBg:   '#5D5451',   // section bg for 1, 2, 4
  darkBg:   '#332D2B',   // section bg for 3 + text main
  offWhite: '#F5F0EC',   // work card bg
  border:   '#E5E0DA',   // all light-section borders
  textMed:  '#7A6F6C',   // secondary text (light sections)
  textFaint:'#A09590',   // labels / meta (light sections)
};

export default function App() {
  const [lang, setLang] = useState<Language>('ZH');
  const [showLangModal, setShowLangModal] = useState(true);
  const [highlightModal, setHighlightModal] = useState<{ title: string; highlights: string[] } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showFooterExplore, setShowFooterExplore] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileExplore, setShowMobileExplore] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const descRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const toggleProject = (id: string) =>
    setExpandedProjects(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const handleLangSelect = (language: Language) => {
    setLang(language);
    setShowLangModal(false);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('laizheqixi@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const t = TRANSLATIONS[lang];

  const faqTitle =
    lang === 'ZH' ? '常见问题解答' :
    lang === 'EN' ? 'Frequently asked questions' :
                   'Häufig gestellte Fragen';

  const faqItems =
    lang === 'ZH' ? [
      { q: '你认为自己最大的优点和缺点是什么？', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { q: '你目前未来 3-5 年的职业规划是什么？', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    ] :
    lang === 'EN' ? [
      { q: 'What do you consider your greatest strengths and weaknesses?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { q: 'What are your career plans for the next 3–5 years?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    ] : [
      { q: 'Was sind Ihrer Meinung nach Ihre größten Stärken und Schwächen?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { q: 'Was sind Ihre beruflichen Pläne für die nächsten 3–5 Jahre?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    ];

  const exploreLabel = lang === 'ZH' ? '探索更多' : lang === 'EN' ? 'Explore More' : 'Mehr entdecken';
  const exploreItems =
    lang === 'ZH' ? ['德语学习', '德国生活', '内容创作', '旅游生活'] :
    lang === 'EN' ? ['German Learning', 'Life in Germany', 'Content Creation', 'Travel & Life'] :
                   ['Deutsch lernen', 'Leben in Deutschland', 'Content Creation', 'Reisen & Leben'];

  return (
    <div className="min-h-screen font-sans antialiased select-text" style={{ backgroundColor: C.warmBg }}>

      {/* ── Highlight modal ─────────────────────────────────── */}
      <AnimatePresence>
        {highlightModal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm px-4"
            style={{ backgroundColor: 'rgba(51,45,43,0.6)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setHighlightModal(null)}
          >
            <motion.div
              className="rounded-xl p-8 max-w-lg w-full bg-white"
              style={{ border: `1px solid ${C.border}` }}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-widest mb-1" style={{ color: C.textFaint }}>Highlights</p>
                  <h3 className="text-base font-bold leading-snug" style={{ color: C.darkBg }}>{highlightModal.title}</h3>
                </div>
                <button
                  onClick={() => setHighlightModal(null)}
                  className="text-lg leading-none ml-4 mt-0.5 cursor-pointer transition-colors"
                  style={{ color: C.textFaint }}
                >✕</button>
              </div>
              <ul className="space-y-4">
                {highlightModal.highlights.map((hlt, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="font-mono font-bold flex-shrink-0 mt-0.5" style={{ color: C.border }}>0{idx + 1}</span>
                    <span style={{ color: C.textMed }}>{hlt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Language modal ───────────────────────────────────── */}
      <AnimatePresence>
        {showLangModal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(51,45,43,0.7)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="p-10 max-w-sm w-full mx-6 rounded-xl"
              style={{ backgroundColor: C.darkBg, border: '1px solid rgba(255,255,255,0.1)' }}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: C.textFaint }}>Welcome</p>
              <h2 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">Select Language</h2>
              <p className="text-xs font-light mb-8 leading-relaxed" style={{ color: C.textMed }}>Please choose your preferred display language to continue.</p>
              <div className="flex flex-col gap-3">
                {([
                  { code: 'ZH' as Language, label: '中文', sub: 'Chinese' },
                  { code: 'EN' as Language, label: 'English', sub: 'English' },
                  { code: 'DE' as Language, label: 'Deutsch', sub: 'German' },
                ]).map(({ code, label, sub }) => (
                  <button
                    key={code}
                    onClick={() => handleLangSelect(code)}
                    className="w-full text-left px-5 py-4 hover:bg-white hover:text-black transition-all duration-200 group cursor-pointer rounded-sm"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <span className="font-bold text-sm block text-white group-hover:text-black transition-colors">{label}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider group-hover:text-zinc-600 transition-colors" style={{ color: C.textFaint }}>{sub}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Header ──────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 flex items-center justify-between py-4">
          <a href="#home" className="group flex items-center gap-1.5 select-none">
            <span className="font-serif italic text-xl font-extrabold text-white tracking-tight">l.</span>
            <span className="font-sans font-black text-xs uppercase tracking-[-0.03em] bg-white px-2 py-0.5 rounded-[3px] transition-transform group-hover:scale-105 duration-200" style={{ color: C.darkBg }}>zx</span>
          </a>
          <div className="flex items-center gap-4">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-[11px] font-medium tracking-widest uppercase" style={{ color: C.textFaint }}>
              <a href="#home" className="hover:text-white transition-colors">{t.nav.home}</a>
              <a href="#work" className="hover:text-white transition-colors">{t.nav.work}</a>
              <a href="#why-me" className="hover:text-white transition-colors">{t.nav.whyMe}</a>
              <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
              <div className="relative" onMouseEnter={() => setShowExplore(true)} onMouseLeave={() => setShowExplore(false)}>
                <button className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                  {exploreLabel} <ChevronDown className="w-3 h-3" />
                </button>
                {showExplore && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 py-1.5 min-w-[120px] z-50 rounded-sm"
                    style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {exploreItems.map((item) => (
                      <a key={item} href="#" className="block px-4 py-2 text-[11px] font-medium uppercase tracking-widest text-center hover:text-white transition-colors"
                        style={{ color: C.textFaint }}>
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>
            <span className="hidden md:inline text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>

            {/* Language switcher */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-sm" style={{ border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <Globe className="w-3.5 h-3.5 mr-1" style={{ color: C.textFaint }} />
              {(['ZH', 'EN', 'DE'] as Language[]).map((language) => (
                <button
                  key={language}
                  onClick={() => setLang(language)}
                  className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 transition-all cursor-pointer rounded-sm"
                  style={lang === language
                    ? { backgroundColor: '#FFFFFF', color: C.darkBg }
                    : { color: C.textFaint }}
                >{language}</button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden cursor-pointer p-1"
              style={{ color: C.textFaint }}
              onClick={() => setShowMobileMenu(v => !v)}
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: showMobileMenu ? '600px' : '0px',
            borderTop: showMobileMenu ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1 text-[12px] font-medium tracking-widest uppercase" style={{ color: C.textFaint }}>
            <a href="#home" onClick={() => setShowMobileMenu(false)} className="py-2.5 hover:text-white transition-colors" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{t.nav.home}</a>
            <a href="#work" onClick={() => setShowMobileMenu(false)} className="py-2.5 hover:text-white transition-colors" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{t.nav.work}</a>
            <a href="#why-me" onClick={() => setShowMobileMenu(false)} className="py-2.5 hover:text-white transition-colors" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{t.nav.whyMe}</a>
            <a href="#contact" onClick={() => setShowMobileMenu(false)} className="py-2.5 hover:text-white transition-colors" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{t.nav.contact}</a>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                className="w-full flex items-center justify-between py-2.5 cursor-pointer hover:text-white transition-colors"
                onClick={() => setShowMobileExplore(v => !v)}
              >
                <span>{exploreLabel}</span>
                <span
                  style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s ease',
                    transform: showMobileExplore ? 'rotate(-90deg)' : 'rotate(0deg)',
                  }}
                >›</span>
              </button>
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: showMobileExplore ? '200px' : '0px',
                  transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="flex flex-col gap-1 pl-3 pb-3">
                  {exploreItems.map((item) => (
                    <a key={item} href="#" onClick={() => setShowMobileMenu(false)} className="py-1 text-[11px] hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.3)' }}>{item}</a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO  (同 Why Me 深色风格)
          Outer: #332D2B   Card: #332D2B
      ══════════════════════════════════════════════════════ */}
      <section id="home" className="pt-32 pb-10" style={{ backgroundColor: C.darkBg }}>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
          <div className="rounded-xl p-5 md:p-12" style={{ backgroundColor: C.darkBg }}>

            {/* Status bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 md:pb-8 md:mb-10 text-[10px] font-mono"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)' }}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="tracking-wider uppercase">{t.nav.status}</span>
              </div>
              <span className="tracking-wider uppercase">{t.hero.metaLocation}</span>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
              <div className="flex-shrink-0 w-24 h-24 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <img src="/b8afd71a6e77ea46e2e2816f9a3447d2.jpg" alt="Profile" className="w-full h-full object-cover" style={{ objectPosition: '100% 100%' }} />
              </div>
              <div className="flex-1 space-y-5 md:pt-1">
                <span className="inline-block text-sm font-mono tracking-widest font-bold uppercase pl-2.5"
                  style={{ color: 'rgba(255,255,255,0.3)', borderLeft: '2px solid rgba(255,255,255,0.4)' }}>
                  {t.hero.tag}
                </span>
                <h1 className="font-sans leading-tight font-bold tracking-[-0.03em] text-white text-2xl sm:text-3xl lg:text-4xl">
                  {t.hero.title}
                </h1>
                <p className="text-sm font-light leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {t.hero.subtitle}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — WORK
          Outer: #5D5451   Card: #F5F0EC (off-white)
      ══════════════════════════════════════════════════════ */}
      <section id="work" className="py-10" style={{ backgroundColor: C.warmBg }}>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
          <div className="rounded-xl p-5 md:p-12" style={{ backgroundColor: C.offWhite, border: `1px solid ${C.border}` }}>

            <div className="mb-6 md:mb-10 space-y-2">
              <span className="text-[10px] font-mono tracking-wider uppercase" style={{ color: C.textFaint }}>01 / Experience</span>
              <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight uppercase" style={{ color: C.darkBg }}>{t.work.sectionTitle}</h2>
              <p className="text-sm font-light leading-relaxed max-w-xl" style={{ color: C.textMed }}>{t.work.sectionSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.work.projects.map((proj) => (
                <div key={proj.id} className="flex flex-col rounded-xl p-5 md:p-6 md:min-h-[300px] bg-white" style={{ border: `1px solid ${C.border}` }}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: C.textFaint }}>{proj.category}</span>
                    <span className="text-[9px] font-mono flex-shrink-0 ml-2" style={{ color: C.textFaint }}>{proj.year}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-3 leading-snug" style={{ color: C.darkBg }}>{proj.title}</h3>
                  {/* Description with fade + read-more / collapse */}
                  <div className="mb-5 flex-1">
                    <div
                      ref={(el) => { descRefs.current[proj.id] = el; }}
                      className="text-xs leading-relaxed font-light overflow-hidden"
                      style={{
                        color: C.textMed,
                        maxHeight: expandedProjects.has(proj.id)
                          ? `${descRefs.current[proj.id]?.scrollHeight ?? 500}px`
                          : '3.25em',
                        transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        WebkitMaskImage: expandedProjects.has(proj.id)
                          ? 'none'
                          : 'linear-gradient(to bottom, black 35%, transparent 100%)',
                        maskImage: expandedProjects.has(proj.id)
                          ? 'none'
                          : 'linear-gradient(to bottom, black 35%, transparent 100%)',
                      }}
                    >
                      {proj.description}
                    </div>
                    <button
                      onClick={() => toggleProject(proj.id)}
                      className="flex items-center gap-1 mt-1.5 cursor-pointer select-none transition-opacity duration-300"
                      style={{ color: C.textMed }}
                    >
                      <span className="text-sm leading-none" style={{ display: 'inline-block', transition: 'transform 0.3s ease', transform: expandedProjects.has(proj.id) ? 'rotate(-90deg)' : 'rotate(0deg)' }}>›</span>
                      <span className="text-[11px] font-display tracking-wide">
                        {expandedProjects.has(proj.id) ? '收起全文' : '阅读全文'}
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono px-2 py-0.5 rounded-sm"
                        style={{ color: C.textMed, backgroundColor: C.offWhite, border: `1px solid ${C.border}` }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setHighlightModal({ title: proj.title, highlights: proj.highlights })}
                    className="mt-auto w-full py-2 text-[10px] font-mono uppercase tracking-widest rounded-sm transition-all cursor-pointer hover:bg-[#F5F0EC]"
                    style={{ color: C.textMed, border: `1px solid ${C.border}` }}
                  >
                    {t.work.highlightsBtn}
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — WHY ME  (Dark / reversed)
          Outer: #332D2B   Card: #332D2B
      ══════════════════════════════════════════════════════ */}
      <section id="why-me" className="py-10" style={{ backgroundColor: C.darkBg }}>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
          <div className="rounded-xl p-5 md:p-12" style={{ backgroundColor: C.darkBg, border: '1px solid rgba(255,255,255,0.08)' }}>

            <div className="mb-6 md:mb-10 space-y-2">
              <span className="text-[10px] font-mono tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>02 / Value System</span>
              <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">{t.whyMe.sectionTitle}</h2>
              <p className="text-sm font-light leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>{t.whyMe.sectionSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.whyMe.items.map((item) => (
                <div key={item.id} className="rounded-xl p-4 md:p-6" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-[9px] font-mono uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>{item.num}</div>
                  <h4 className="text-sm font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-xs leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 text-xs font-mono italic max-w-lg" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.2)' }}>
              &ldquo;Systems run the world, but humans run systems. Precision engineering only delivers value when it matches rigorous strategic alignment.&rdquo;
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — CONTACT
          Outer: #5D5451   Card: #FFFFFF
      ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-10" style={{ backgroundColor: C.warmBg }}>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
          <div className="bg-white rounded-xl p-5 md:p-12" style={{ border: `1px solid ${C.border}` }}>

            <div className="mb-6 md:mb-8 space-y-2">
              <span className="text-[10px] font-mono tracking-wider uppercase" style={{ color: C.textFaint }}>03 / Contact</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase" style={{ color: C.darkBg }}>{t.contact.sectionTitle}</h2>
              <p className="text-sm font-light leading-relaxed max-w-xl" style={{ color: C.textMed }}>{t.contact.sectionSubtitle}</p>
            </div>

            <p className="font-serif italic text-base mb-8" style={{ color: C.textFaint }}>&ldquo;{t.contact.sentence}&rdquo;</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-7"
              style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: C.textFaint }}>Direct Email</span>
                <button onClick={copyEmailToClipboard} className="inline-flex items-center gap-1.5 text-sm font-mono font-bold hover:underline cursor-pointer" style={{ color: C.darkBg }}>
                  laizheqixi@gmail.com
                  {copiedEmail
                    ? <Check className="w-3.5 h-3.5 text-emerald-600" />
                    : <Copy className="w-3.5 h-3.5" style={{ color: C.textFaint }} />}
                </button>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: C.textFaint }}>Networks</span>
                <div className="flex gap-5 text-sm font-mono font-bold" style={{ color: C.darkBg }}>
                  <a href="https://www.linkedin.com/in/zhexian-lai-5a897b257/" target="_blank" rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-1">
                    LinkedIn <ArrowUpRight className="w-3 h-3" style={{ color: C.textFaint }} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="py-12 md:py-20" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:gap-16 md:items-start">

            {/* Left: title */}
            <div className="md:w-2/5 mb-10 md:mb-0 md:pt-5">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-tight tracking-tight">
                {faqTitle}
              </h2>
            </div>

            {/* Right: accordion */}
            <div className="md:w-3/5" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {faqItems.map((item, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                  <button
                    className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  >
                    <span className="text-sm font-medium text-white pr-6 leading-snug">{item.q}</span>
                    <span
                      className="text-white text-2xl font-light flex-shrink-0"
                      style={{ display: 'inline-block', transform: faqOpen === idx ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                    >+</span>
                  </button>
                  <div
                    style={{ maxHeight: faqOpen === idx ? '200px' : '0px', opacity: faqOpen === idx ? 1 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease, opacity 0.3s ease' }}
                  >
                    <p className="text-sm leading-relaxed pb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="py-10 select-none" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">L. ZHEXIAN</span>
            <p className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>&copy; {new Date().getFullYear()} Koblenz, Germany.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-mono font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.65)' }}>
            <a href="#home" className="hover:text-white transition-all">{t.nav.home}</a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>/</span>
            <a href="#work" className="hover:text-white transition-all">{t.nav.work}</a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>/</span>
            <a href="#why-me" className="hover:text-white transition-all">{t.nav.whyMe}</a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>/</span>
            <a href="#contact" className="hover:text-white transition-all">{t.nav.contact}</a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>/</span>
            <div className="relative" onMouseEnter={() => setShowFooterExplore(true)} onMouseLeave={() => setShowFooterExplore(false)}>
              <button className="flex items-center gap-1 hover:text-white transition-all cursor-pointer">
                {exploreLabel} <ChevronDown className="w-3 h-3" />
              </button>
              {showFooterExplore && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 py-1.5 min-w-[120px] z-50 rounded-sm"
                  style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {exploreItems.map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 text-[11px] font-medium uppercase tracking-widest text-center hover:text-white transition-colors"
                      style={{ color: 'rgba(255,255,255,0.65)' }}>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
