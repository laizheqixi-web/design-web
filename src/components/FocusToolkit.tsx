import { Sliders, Eye, LayoutGrid, RotateCcw } from 'lucide-react';
import { Language } from '../types';

interface FocusToolkitProps {
  lang: Language;
  showReadingLine: boolean;
  setShowReadingLine: (v: boolean) => void;
  expandedWhitespace: boolean;
  setExpandedWhitespace: (v: boolean) => void;
  serifMode: boolean;
  setSerifMode: (v: boolean) => void;
  onReset: () => void;
}

export default function FocusToolkit(props: FocusToolkitProps) {
  const {
    lang,
    showReadingLine,
    setShowReadingLine,
    expandedWhitespace,
    setExpandedWhitespace,
    serifMode,
    setSerifMode,
    onReset,
  } = props;

  const uiText = {
    EN: {
      label: 'Focus Design Controls',
      lineGuide: 'Eye-Tracking Line Helper',
      spacingHelper: 'Dan Koe "Macro Whitespace" (Breathing)',
      fontMode: 'Classic Editorial Serif Accent',
      reset: 'Restore Defaults',
      active: 'Active',
      inactive: 'Inactive',
      tip: 'Adjust parameters below to custom-tune your reading experience.',
    },
    ZH: {
      label: '阅读与版式调节器',
      lineGuide: '眼球追踪视线辅助线',
      spacingHelper: 'Dan Koe 大面积深层呼吸留白',
      fontMode: '典雅衬线标题渲染模式',
      reset: '复位默认排版',
      active: '已开启',
      inactive: '已关闭',
      tip: '可通过以下微调选项，个性化定制您的沉浸式美学浏览体验。',
    },
    DE: {
      label: 'Aesthetische Lesesteuerung',
      lineGuide: 'Blickverfolgungs-Hilfslinie',
      spacingHelper: 'Extremer Weißraum (Whitespace)',
      fontMode: 'Klassische Serifen-Typografie',
      reset: 'Zurücksetzen',
      active: 'Aktiv',
      inactive: 'Inaktiv',
      tip: 'Passen Sie die Ästhetik-Parameter an Ihre Lesegewohnheiten an.',
    },
  }[lang];

  return (
    <div className="border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 rounded-xl p-5 md:p-6 mb-8 transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Sliders className="w-4 h-4 text-zinc-400" />
        <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
          {uiText.label}
        </h4>
      </div>

      <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mb-5 leading-relaxed">
        {uiText.tip}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Toggle 1: Reading Guide line */}
        <button
          onClick={() => setShowReadingLine(!showReadingLine)}
          className={`group flex items-center justify-between p-3.5 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
            showReadingLine
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white'
              : 'bg-white dark:bg-zinc-950/40 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-850'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Eye className="w-4 h-4 text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-350" />
            <span className="text-xs font-mono font-medium">{uiText.lineGuide}</span>
          </div>
          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded opacity-80">
            {showReadingLine ? uiText.active : uiText.inactive}
          </span>
        </button>

        {/* Toggle 2: Macro Whitespace */}
        <button
          onClick={() => setExpandedWhitespace(!expandedWhitespace)}
          className={`group flex items-center justify-between p-3.5 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
            expandedWhitespace
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white'
              : 'bg-white dark:bg-zinc-950/40 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-850'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <LayoutGrid className="w-4 h-4 text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-350" />
            <span className="text-xs font-mono font-medium">{uiText.spacingHelper}</span>
          </div>
          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded opacity-80">
            {expandedWhitespace ? uiText.active : uiText.inactive}
          </span>
        </button>

        {/* Toggle 3: Editorial Serif Accents */}
        <button
          onClick={() => setSerifMode(!serifMode)}
          className={`group flex items-center justify-between p-3.5 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
            serifMode
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white'
              : 'bg-white dark:bg-zinc-950/40 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-850'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span className="w-4 h-4 flex items-center justify-center font-serif font-bold text-sm text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-350">
              Aa
            </span>
            <span className="text-xs font-mono font-medium">{uiText.fontMode}</span>
          </div>
          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded opacity-80">
            {serifMode ? uiText.active : uiText.inactive}
          </span>
        </button>
      </div>

      {(showReadingLine || expandedWhitespace || serifMode) && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={onReset}
            className="text-[10px] font-mono text-zinc-400 hover:text-zinc-955 hover:text-zinc-800 dark:hover:text-zinc-200 flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {uiText.reset}
          </button>
        </div>
      )}
    </div>
  );
}
