'use client'

import { useLang } from '@/lib/i18n'
import PageHeader from '@/components/PageHeader'

const certifications = [
  { title: 'Networking Academy Learn-A-Thon 2025', date: '2026-01-14', image: '/badges/cisco-learnathon.png', url: 'https://www.credly.com/badges/04ce72ae-184e-4f33-a448-7fbd54a7935b/public_url' },
  { title: 'Junior Cybersecurity Analyst Career Path', date: '2025-12-12', image: '/badges/cisco-junior-analyst.png', url: 'https://www.credly.com/badges/1ddc94dd-c55d-4c7d-a5d3-75d00bf6ead1/public_url' },
  { title: 'Network Technician Career Path', date: '2025-12-04', image: '/badges/cisco-network-tech.png', url: 'https://www.credly.com/badges/1f767dbf-b086-465c-bc1f-1605875d25c8/public_url' },
  { title: 'Apply AI: Analyze Customer Reviews', date: '2025-10-26', image: '/badges/cisco-ai-reviews.png', url: 'https://www.credly.com/badges/e8280e8e-024f-44e3-9808-280d3c54c9d0/public_url' },
  { title: 'Introduction to Cybersecurity', date: '2025-09-26', image: '/badges/cisco-intro-cyber.png', url: 'https://www.credly.com/badges/8bf8bae3-5cf5-4511-af68-748247725c4a/public_url' },
]

export default function Certifications() {
  const { lang } = useLang()
  const fmt = new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })

  return (
    <div className="container-page py-12 md:py-16">
      <PageHeader
        title={{ fr: 'Certifications', en: 'Certifications' }}
        intro={{
          fr: 'Badges délivrés par Cisco Networking Academy, vérifiables en ligne sur Credly.',
          en: 'Badges issued by Cisco Networking Academy, verifiable online on Credly.',
        }}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <article key={c.url} className="card card-hover group flex flex-col overflow-hidden hover:-translate-y-1">
            <div className="flex h-44 items-center justify-center border-b border-brand-900/30 bg-gradient-to-br from-dark-800 to-dark-900 p-6">
              <img src={c.image} alt="" className="h-32 w-32 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="mb-1 text-sm font-semibold text-gray-400">Cisco · {fmt.format(new Date(c.date))}</p>
              <h2 className="mb-5 text-lg font-bold text-white">{c.title}</h2>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block rounded-lg bg-brand-600 py-2.5 text-center text-sm font-semibold text-on-brand transition-colors hover:bg-brand-500"
              >
                {lang === 'fr' ? 'Vérifier sur Credly' : 'Verify on Credly'}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
