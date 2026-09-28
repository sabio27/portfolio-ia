'use client'

import { CV, useLang } from '@/lib/i18n'
import { ui } from '@/lib/site'
import { DownloadIcon } from './Icons'

type Props = { className?: string; label?: 'full' | 'short' }

/** Télécharge le CV dans la langue affichée. */
export default function CvLink({ className = 'btn-ghost', label = 'full' }: Props) {
  const { lang, t } = useLang()
  const cv = CV[lang]
  return (
    <a href={cv.href} download={cv.filename} className={className}>
      <DownloadIcon className="h-4 w-4 md:h-5 md:w-5" />
      {t(label === 'full' ? ui.downloadCv : ui.cvShort)}
      <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide">{lang}</span>
    </a>
  )
}

/** Lien discret vers l'autre version du CV. */
export function OtherCvLink({ className = '' }: { className?: string }) {
  const { lang, t } = useLang()
  const other = CV[lang === 'fr' ? 'en' : 'fr']
  return (
    <a href={other.href} download={other.filename} className={`inline-flex min-h-[40px] items-center text-sm text-gray-400 underline decoration-gray-600 underline-offset-4 hover:text-brand-400 ${className}`}>
      {t(ui.otherCv)} ({lang === 'fr' ? 'EN' : 'FR'})
    </a>
  )
}
