import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Mail,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronRight,
  Maximize2,
  FileText,
  Copy,
  Check,
  Cpu,
  ArrowUpRight,
  Sun,
  Moon,
  Clock,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

import { Language } from './types';
import { TRANSLATIONS } from './translations';
import DiagnosticPlayground from './components/DiagnosticPlayground';
import FocusToolkit from './components/FocusToolkit';

export default function App() {
  const [lang, setLang] = useState<Language>('ZH');

  // Dark/Light Theme states (default is Light for the absolute Dan Koe look, with toggle)
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Custom reading helper states
  const [showReadingLine, setShowReadingLine] = useState(false);
  const [expandedWhitespace, setExpandedWhitespace] = useState(false);
  const [serifMode, setSerifMode] = useState(false);

  // Focus Guide Mouse Tracker
  const [mouseY, setMouseY] = useState(0);

  // Email state & mock submit simulator
  const [briefName, setBriefName] = useState('');
  const [briefEmail, setBriefEmail] = useState('');
  const [briefSubject, setBriefSubject] = useState('');
  const [briefMessage, setBriefMessage] = useState('');
  const [briefStatus, setBriefStatus] = useState<'idle' | 'transmitting' | 'sent'>('idle');
  const [briefStep, setBriefStep] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Dynamic status elements
  const [liveUTC, setLiveUTC] = useState('');

  // Track window scroll for transparent header background change
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update dynamic UTC clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveUTC(now.toISOString().substring(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Tracking mouse for focus guide
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    if (showReadingLine) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showReadingLine]);

  // Handle document theme injection
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Reset focus toolkit configurations
  const handleResetFocus = () => {
    setShowReadingLine(false);
    setExpandedWhitespace(false);
    setSerifMode(false);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('laizheqixi@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Diagnostic brief simulation
  const handleSendBrief = (e: React.FormEvent) => {
    e.preventDefault();
    if (!briefName || !briefEmail) return;

    setBriefStatus('transmitting');
    const steps = [
      'Establishing TLS diagnostic bridge...',
      'Mapping automotive client configuration...',
      'Encrypting system brief package...',
      'Transmitting records to Stuttgart address...',
    ];

    let currentStep = 0;
    setBriefStep(steps[0]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setBriefStep(steps[currentStep]);
      } else {
        clearInterval(interval);
        setBriefStatus('sent');
        // Clear forms
        setBriefName('');
        setBriefEmail('');
        setBriefSubject('');
        setBriefMessage('');
        setTimeout(() => {
          setBriefStatus('idle');
        }, 5000);
      }
    }, 700);
  };

  const t = TRANSLATIONS[lang];

  // Dynamic whitespace multipliers (Dan Koe styled breathable margins)
  const paddingYClass = expandedWhitespace ? 'py-32 md:py-52' : 'py-16 md:py-28';
  const headingClass = serifMode
    ? 'font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-zinc-900 dark:text-white'
    : 'font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-none text-zinc-900 dark:text-white';

  const titleClass = serifMode
    ? 'font-serif text-4xl sm:text-5xl md:text-7xl font-normal text-zinc-900 dark:text-white block'
    : 'font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white block leading-[0.95]';

  return (
    <div
      id="root-container"
      className="min-h-screen font-sans antialiased bg-[#FAFAFA] dark:bg-zinc-950 text-[#111111] dark:text-zinc-100 transition-colors duration-300 relative select-text selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black"
    >
      {/* Dynamic reading guideline */}
      {showReadingLine && (
        <div
          className="fixed left-0 right-0 h-[1.5px] bg-[#000000]/15 dark:bg-[#FFFFFF]/15 pointer-events-none z-50 transition-all duration-75"
          style={{ top: `${mouseY}px` }}
        />
      )}

      {/* Header element - Transparent and Minimalist */}
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-zinc-950/95 border-b border-black/5 dark:border-white/5 py-4'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo - Elegant l.zx monogram & artistic design signature */}
          <a
            href="#home"
            className="group flex items-center gap-1.5 select-none"
          >
            <span className="font-serif italic text-xl font-extrabold text-zinc-900 dark:text-white tracking-tight">l.</span>
            <span className="font-sans font-black text-xs uppercase tracking-[-0.03em] bg-[#111111] dark:bg-white text-[#FAFAFA] dark:text-[#111111] px-2 py-0.5 rounded-[3px] transition-transform group-hover:scale-105 duration-200">
              zx
            </span>
          </a>

          {/* Navigation Links, Menu with Locale Switcher */}
          <div className="flex items-center gap-6 lg:gap-8">
            <nav className="hidden md:flex items-center gap-7 text-[11px] font-medium tracking-widest uppercase text-[#111111]/70 dark:text-zinc-400">
              <a href="#home" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                {t.nav.home}
              </a>
              <a href="#work" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                {t.nav.work}
              </a>
              <a href="#why-me" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                {t.nav.whyMe}
              </a>
              <a href="#contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                {t.nav.contact}
              </a>
            </nav>

            <span className="hidden md:inline text-zinc-300 dark:text-zinc-800 text-xs">|</span>

            {/* Language Switcher Widget */}
            <div className="flex items-center gap-1.5 border border-black/5 dark:border-white/5 rounded-none px-2 py-1 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm">
              <Globe className="w-3.5 h-3.5 text-zinc-400 mr-0.5" />
              {(['ZH', 'EN', 'DE'] as Language[]).map((language) => (
                <button
                  key={language}
                  onClick={() => setLang(language)}
                  className={`text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-none transition-all cursor-pointer ${
                    lang === language
                      ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111]'
                      : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>

            {/* Dark & Light mode switch button */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-1.5 border border-black/5 dark:border-white/5 bg-white/40 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all cursor-pointer select-none"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Top Location status bar */}
      <div className="pt-24 max-w-7xl mx-auto px-6 sm:px-8 select-none">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 py-4 border-b border-black/5 dark:border-white/5 text-[10px] sm:text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wider uppercase">{t.nav.status}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {liveUTC}
            </span>
            <span className="tracking-wider uppercase">{t.hero.metaLocation}</span>
          </div>
        </div>
      </div>

      {/* Split main design grid */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative">
        
        {/* LEFT COLUMN: HERO, WHY ME (3 CARDS AT BOTTOM), DESIGN CONTROLS */}
        <section className="col-span-1 lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-28 lg:h-[calc(100vh-140px)] lg:overflow-y-auto pr-2 scrollbar-thin dark:scrollbar-thumb-zinc-800 scrollbar-thumb-zinc-200">
          
          {/* Hero Section Container Card - Awwwards Style */}
          <div className="p-6 md:p-8 bg-white/40 dark:bg-zinc-900/15 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl shadow-[0_2px_24px_-12px_rgba(0,0,0,0.03)] space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Circular frame for photo */}
              <div className="flex-shrink-0">
                <div className="relative group w-20 h-20 md:w-24 md:h-24 rounded-full border border-black/10 dark:border-white/10 p-1 bg-white/80 dark:bg-zinc-900/60 shadow-sm overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden relative">
                    <svg
                      className="w-10 h-10 text-zinc-400 dark:text-zinc-650 transition-transform group-hover:scale-105 duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    
                    {/* Artistic initials overlay representation (L.ZX) */}
                    <div className="absolute inset-0 bg-[#111111]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-1 rounded-full">
                      <span className="text-[8px] font-mono font-medium text-zinc-200 uppercase tracking-widest leading-none">
                        L.ZX<br />Photo
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content items */}
              <div className="flex-1 space-y-4">
                {/* Minimal eyebrow label */}
                <span className="inline-block text-[10px] md:text-xs font-mono tracking-widest font-bold text-zinc-400 dark:text-zinc-500 uppercase border-l-2 border-[#111111] dark:border-white pl-2.5">
                  {t.hero.tag}
                </span>

                {/* Elegant massive titles in the exact spirit of Dan Koe & Split layout */}
                <h1 
                  className={`leading-[0.95] font-bold tracking-[-0.04em] text-zinc-950 dark:text-white ${
                    serifMode 
                      ? 'font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl' 
                      : 'font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
                  }`}
                >
                  {t.hero.title}
                </h1>

                {/* Controlled description block */}
                <p className="font-sans text-base text-[#4A4A4A] dark:text-zinc-400 font-light leading-relaxed max-w-[480px]">
                  {t.hero.subtitle}
                </p>
              </div>
            </div>

            {/* Dynamic design customize toolbar */}
            <div className="pt-6 border-t border-black/5 dark:border-white/5">
              <FocusToolkit
                lang={lang}
                showReadingLine={showReadingLine}
                setShowReadingLine={setShowReadingLine}
                expandedWhitespace={expandedWhitespace}
                setExpandedWhitespace={setExpandedWhitespace}
                serifMode={serifMode}
                setSerifMode={setSerifMode}
                onReset={handleResetFocus}
              />
            </div>
          </div>

          {/* BOTTOM highlights: Three value cards matching whyMe section formatted inside layered card */}
          <div id="why-me" className="p-6 md:p-8 bg-white/40 dark:bg-zinc-900/15 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl shadow-[0_2px_24px_-12px_rgba(0,0,0,0.03)] flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[10px] md:text-xs font-mono text-zinc-400 dark:text-zinc-500 tracking-wider block mb-6 uppercase">
                02 / Structural Value System
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.whyMe.items.map((item) => (
                  <div key={item.id} className="group">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#999] mb-2.5">
                      {item.num} / {item.title.split(' ')[0]}
                    </div>
                    <h4 className="text-xs font-semibold text-zinc-900 dark:text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[11px] leading-relaxed text-[#4A4A4A] dark:text-zinc-400 font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Subtle luxury brand footer inside cards */}
            <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 text-[10px] font-mono text-zinc-400 dark:text-zinc-500 italic max-w-sm">
              &ldquo;Systems run the world, but humans run systems. Precision engineering only delivers value when it matches rigorous strategic alignment.&rdquo;
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: WORK / DETAILS (SCROLLS NATURAL AND ALIGNS IN GRID, MULTIPLE LAYERS) */}
        <section className="col-span-1 lg:col-span-5 flex flex-col gap-6 py-1">
          
          {/* WORK EXPERIENCE LAYER */}
          <div className="p-6 md:p-8 bg-white/40 dark:bg-zinc-900/15 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl shadow-[0_2px_24px_-12px_rgba(0,0,0,0.03)] space-y-8">
            <div id="work" className="space-y-3">
              <span className="text-[10px] md:text-xs font-mono text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">
                01 / Experience & Execution
              </span>
              <h2 className="font-sans text-xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase">
                {t.work.sectionTitle}
              </h2>
              <p className="text-xs text-[#4A4A4A] dark:text-zinc-400 font-light leading-relaxed">
                {t.work.sectionSubtitle}
              </p>
            </div>

            {/* Core Projects Loop */}
            <div className="space-y-10">
              {t.work.projects.map((proj) => (
                <div key={proj.id} className="group border-b border-black/5 dark:border-white/5 pb-8 last:border-0 last:pb-0">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] text-zinc-400 font-serif italic">
                      {proj.year}
                    </span>
                  </div>
                  <p className="text-xs text-[#4A4A4A] dark:text-zinc-400 leading-relaxed font-light mb-4 text-justify">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-0.5 rounded-[2px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5">
                    {proj.highlights.map((hlt, hitIdx) => (
                      <li key={hitIdx} className="flex items-start gap-2 text-xs text-[#4A4A4A] dark:text-zinc-400 font-light">
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-700 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hlt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* INTERACTIVE DEMONSTRATOR LAYER */}
          <div className="p-6 md:p-8 bg-white/40 dark:bg-zinc-900/15 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl shadow-[0_2px_24px_-12px_rgba(0,0,0,0.03)] space-y-6">
            <div className="mb-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#999] mb-1.5">
                02 / INTERACTIVE DEMONSTRATION
              </div>
              <h3 className="text-base font-bold uppercase tracking-wide text-zinc-900 dark:text-white">
                {t.work.interactionTitle}
              </h3>
              <p className="text-xs text-[#4A4A4A] dark:text-zinc-400 leading-relaxed font-light mt-1">
                {t.work.interactionDesc}
              </p>
            </div>
            <DiagnosticPlayground lang={lang} />
          </div>

          {/* CONTACT FORM LAYER */}
          <div id="contact" className="p-6 md:p-8 bg-white/40 dark:bg-zinc-900/15 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl shadow-[0_2px_24px_-12px_rgba(0,0,0,0.03)] space-y-6">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#999] mb-1">
                03 / BRIEF TRANSMISSION
              </div>
              <h2 className="text-base font-bold tracking-tight text-zinc-900 dark:text-white uppercase text-left">
                {t.contact.sectionTitle}
              </h2>
              <p className="text-xs text-[#4A4A4A] dark:text-zinc-400 leading-relaxed font-light mt-1">
                {t.contact.sectionSubtitle}
              </p>
            </div>

            <p className="font-serif italic text-sm text-zinc-900 dark:text-zinc-200">
              &ldquo;{t.contact.sentence}&rdquo;
            </p>

            {/* Direct Social / Email Paths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#111111]/80 dark:text-zinc-300 border-t border-b border-black/5 dark:border-white/5 py-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase text-[#999] tracking-wider font-sans">Direct Email</span>
                <button
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-1.5 text-left hover:underline cursor-pointer font-bold"
                >
                  laizheqixi@gmail.com
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  )}
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase text-[#999] tracking-wider font-sans">Professional Networks</span>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold inline-flex items-center gap-1">
                    LinkedIn <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold inline-flex items-center gap-1">
                    X / Twitter <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form layout precisely structured with high-contrast inputs */}
            <div className="bg-black/[0.01] dark:bg-zinc-950/40 p-5 border border-black/5 dark:border-white/5">
              <form onSubmit={handleSendBrief} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase font-mono tracking-wider text-zinc-400 dark:text-zinc-500 block font-semibold">
                      {t.contact.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={briefName}
                      onChange={(e) => setBriefName(e.target.value)}
                      placeholder="Dan Koe"
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-none px-3 py-2 text-xs focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white focus:outline-none transition-all text-zinc-900 dark:text-zinc-100"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase font-mono tracking-wider text-zinc-400 dark:text-zinc-500 block font-semibold">
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={briefEmail}
                      onChange={(e) => setBriefEmail(e.target.value)}
                      placeholder="client@mobility-corp.de"
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-none px-3 py-2 text-xs focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white focus:outline-none transition-all text-zinc-900 dark:text-zinc-100"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-mono tracking-wider text-zinc-400 dark:text-zinc-500 block font-semibold">
                    {t.contact.formSubject}
                  </label>
                  <input
                    type="text"
                    value={briefSubject}
                    onChange={(e) => setBriefSubject(e.target.value)}
                    placeholder="ADAS Consulting Setup"
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-none px-3 py-2 text-xs focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white focus:outline-none transition-all text-zinc-900 dark:text-zinc-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-mono tracking-wider text-zinc-400 dark:text-zinc-500 block font-semibold">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={briefMessage}
                    onChange={(e) => setBriefMessage(e.target.value)}
                    placeholder="Brief description..."
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-none px-3 py-2 text-xs focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white focus:outline-none transition-all text-zinc-900 dark:text-zinc-100"
                  />
                </div>

                {briefStatus === 'transmitting' ? (
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-900 rounded-none flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 animate-pulse flex items-center gap-2">
                      <Cpu className="w-4 h-4 animate-spin text-zinc-400" />
                      {briefStep}
                    </span>
                  </div>
                ) : briefStatus === 'sent' ? (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-none flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="text-[10px] font-mono font-medium">
                      {t.contact.formSuccess}
                    </span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-center bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-mono text-xs uppercase tracking-widest font-semibold py-3 flex-shrink-0 transition-colors shadow-md cursor-pointer hover:opacity-90 duration-200"
                  >
                    {t.contact.formSend}
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* Subtitle footer inside the column */}
          <footer className="pt-6 border-t border-black/5 dark:border-white/5">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold tracking-tight italic font-serif text-zinc-900 dark:text-white">
                Let's build something precise.
              </h4>
              <div className="flex gap-6 text-xs font-bold tracking-wide uppercase underline underline-offset-8 text-zinc-900 dark:text-white">
                <a href="mailto:laizheqixi@gmail.com" className="hover:opacity-75 transition-opacity">Email</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">X/Twitter</a>
              </div>
            </div>
          </footer>
        </section>
      </main>

      {/* Global Page Footer */}
      <footer className="border-t border-black/5 dark:border-white/5 py-10 bg-white dark:bg-zinc-950 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-widest">
              L. ZHEQIXI
            </span>
            <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Stuttgart, Germany. All system diagnostic metrics verified.
            </p>
          </div>

          <div className="flex gap-4 text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
            <a href="#home" className="hover:text-zinc-900 dark:hover:text-white transition-all">
              {t.nav.home}
            </a>
            <span>/</span>
            <a href="#work" className="hover:text-zinc-900 dark:hover:text-white transition-all">
              {t.nav.work}
            </a>
            <span>/</span>
            <a href="#why-me" className="hover:text-zinc-900 dark:hover:text-white transition-all">
              {t.nav.whyMe}
            </a>
            <span>/</span>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-all">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
