'use client'

import { useLang, type Lang } from '@/lib/i18n'

export default function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div role="group" aria-label={lang === 'fr' ? 'Langue' : 'Language'} className="inline-flex rounded-lg border border-brand-900/50 bg-dark-900/60 p-0.5 text-xs font-bold">
      {(['fr', 'en'] as Lang[]).map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => setLang(o)}
          aria-pressed={lang === o}
          className={`rounded-md px-2.5 py-1 uppercase transition-colors ${lang === o ? 'bg-brand-600 text-on-brand' : 'text-gray-400 hover:text-white'}`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}
