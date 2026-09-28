'use client'

import { useLang, type T } from '@/lib/i18n'

export default function PageHeader({ title, intro }: { title: T; intro?: T }) {
  const { t } = useLang()
  return (
    <div className="mb-12">
      <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
        <span className="gradient-text">{t(title)}</span>
      </h1>
      <div className="h-1 w-20 rounded-full bg-brand-500" />
      {intro && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">{t(intro)}</p>}
    </div>
  )
}
