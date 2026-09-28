'use client'

import { useLang } from '@/lib/i18n'

/** Lien d'évitement : permet aux utilisateurs clavier d'aller directement au contenu. */
export default function SkipLink() {
  const { lang } = useLang()
  return (
    <a href="#contenu" className="skip-link">
      {lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}
    </a>
  )
}
