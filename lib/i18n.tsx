'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

export type Lang = 'fr' | 'en'

/** Texte bilingue. Une simple chaîne est identique dans les deux langues (noms d'outils, chiffres...). */
export type T = string | { fr: string; en: string }

export function tr(value: T, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang]
}

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (value: T) => string
}

const LangContext = createContext<Ctx>({
  lang: 'fr',
  setLang: () => {},
  t: (v) => tr(v, 'fr'),
})

const STORAGE_KEY = 'lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  // Au premier chargement : choix mémorisé, sinon langue du navigateur.
  useEffect(() => {
    let initial: Lang = 'fr'
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'fr' || saved === 'en') {
        initial = saved
      } else if (!navigator.language.toLowerCase().startsWith('fr')) {
        initial = 'en'
      }
    } catch {
      /* stockage indisponible : on garde le français */
    }
    setLangState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const t = useCallback((value: T) => tr(value, lang), [lang])

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/** CV à télécharger selon la langue affichée. */
export const CV = {
  fr: { href: '/CV_Ambroise_Koffi_l.pdf', filename: 'CV_Koffi_Ambroise_FR.pdf' },
  en: { href: '/CV_Ambroise_Koffi_l_en.pdf', filename: 'CV_Koffi_Ambroise_EN.pdf' },
} as const
