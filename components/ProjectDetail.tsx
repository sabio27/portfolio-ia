'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useLang } from '@/lib/i18n'
import { getProject, projects } from '@/lib/projects'
import { projectStyle } from '@/lib/projectStyle'
import { ui } from '@/lib/site'
import Blocks from './Blocks'
import { ArrowIcon } from './Icons'

export default function ProjectDetail({ slug }: { slug: string }) {
  const { t, lang } = useLang()
  const p = getProject(slug)
  if (!p) notFound()
  const st = projectStyle[p.slug]

  const idx = projects.findIndex((x) => x.slug === slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <div className="container-page py-10 md:py-14">
      <div className="mx-auto max-w-4xl">
        <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-brand-400 transition-colors hover:text-brand-300">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          {t(ui.backToProjects)}
        </Link>

        {/* En-tête */}
        <header className="mb-12">
          <div className="mb-5 flex items-center gap-4">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-600/35 bg-brand-600/15 text-brand-300`}>
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {st.icon.split('|').map((d, i) => (
                  <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d} />
                ))}
              </svg>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="chip">{t(p.context)}</span>
              <span className="chip-muted">{t(p.period)}</span>
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">{t(p.title)}</h1>
          <p className="mb-5 text-lg leading-relaxed text-gray-300 md:text-xl">{t(p.summary)}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
            {p.award && (
              <span className="rounded-lg bg-gold-400 px-3 py-1 font-bold text-dark-950">{t(p.award)}</span>
            )}
            {p.meta?.map((m, i) => <span key={i}>{t(m)}</span>)}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tech.map((x) => (
              <span key={x} className="rounded-md border border-brand-600/30 bg-brand-600/15 px-2.5 py-1 text-xs font-medium text-brand-300">{x}</span>
            ))}
          </div>
        </header>

        <div className="space-y-14">
          {p.sections.map((s, i) => (
            <section key={i}>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white md:text-3xl">
                <span className={`h-8 w-1 rounded-full bg-brand-500`} />
                {t(s.title)}
              </h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-brand-900/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/projects" className="btn-ghost">{t(ui.allProjects)}</Link>
          <Link href={`/projects/${next.slug}`} className="group inline-flex items-center gap-3 text-right">
            <span>
              <span className="block text-xs uppercase tracking-wider text-gray-400">{lang === 'fr' ? 'Projet suivant' : 'Next project'}</span>
              <span className="font-semibold text-brand-400 group-hover:text-brand-300">{t(next.title)}</span>
            </span>
            <ArrowIcon className="h-5 w-5 shrink-0 text-brand-400 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
