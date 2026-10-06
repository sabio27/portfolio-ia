'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLang } from '@/lib/i18n'
import { domains, projects, type Domain } from '@/lib/projects'
import { projectStyle } from '@/lib/projectStyle'
import PageHeader from '@/components/PageHeader'
import { ArrowIcon } from '@/components/Icons'

const filters: (Domain | 'all')[] = ['all', 'vision', 'ml', 'nlp', 'hpc', 'viz']

export default function Projects() {
  const { t, lang } = useLang()
  const [filter, setFilter] = useState<Domain | 'all'>('all')
  const list = filter === 'all' ? projects : projects.filter((p) => p.domains.includes(filter))

  return (
    <div className="container-page py-12 md:py-16">
      <PageHeader
        title={{ fr: 'Mes projets', en: 'My projects' }}
        intro={{
          fr: "Projets de Master et compétition d'IA : vision par ordinateur, machine learning, NLP et calcul parallèle. Chaque fiche donne les données, la méthode et les résultats.",
          en: "Master's projects and an AI competition: computer vision, machine learning, NLP and parallel computing. Each page gives the data, the method and the results.",
        }}
      />

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label={lang === 'fr' ? 'Filtrer par domaine' : 'Filter by area'}>
        {filters.map((f) => {
          const n = f === 'all' ? projects.length : projects.filter((p) => p.domains.includes(f)).length
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f ? 'border-brand-500 bg-brand-600 text-on-brand' : 'border-brand-900/50 bg-dark-900/60 text-gray-300 hover:border-brand-600/60 hover:text-white'
              }`}
            >
              {f === 'all' ? (lang === 'fr' ? 'Tous' : 'All') : t(domains[f])}
              <span className="ml-2 text-xs opacity-60">{n}</span>
            </button>
          )
        })}
      </div>

      <div className="space-y-6">
        {list.map((p) => {
          const st = projectStyle[p.slug]
          return (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
              <article className="card p-6 transition-all duration-300 group-hover:border-brand-500/50 group-hover:shadow-2xl group-hover:shadow-brand-950/40 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl md:h-20 md:w-20 border border-brand-600/35 bg-brand-600/15 text-brand-300 transition-transform group-hover:scale-105`}>
                    <svg className="h-8 w-8 md:h-10 md:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {st.icon.split('|').map((d, i) => (
                        <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d} />
                      ))}
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1 space-y-4">
                    <div>
                      <h2 className="mb-3 text-xl font-bold leading-snug text-white transition-colors group-hover:text-brand-400 md:text-2xl">{t(p.title)}</h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="chip">{t(p.context)}</span>
                        <span className="chip-muted">{t(p.period)}</span>
                        {p.award && (
                          <span className="inline-flex items-center rounded-lg bg-gold-400 px-3 py-1 text-sm font-bold text-dark-950">
                            {t(p.award)}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="leading-relaxed text-gray-300">{t(p.short)}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.slice(0, 6).map((x) => (
                        <span key={x} className="rounded-md border border-brand-900/70 bg-dark-800/70 px-2.5 py-1 text-xs text-gray-300">{x}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 font-medium text-brand-400 group-hover:text-brand-300">
                      {lang === 'fr' ? 'Voir les détails du projet' : 'View project details'}
                      <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
