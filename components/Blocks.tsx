'use client'

import { useLang } from '@/lib/i18n'
import type { Block } from '@/lib/projects'

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  )
}

const accents = ['text-brand-400', 'text-gold-400', 'text-brand-300']

function BlockView({ block }: { block: Block }) {
  const { t, lang } = useLang()

  switch (block.type) {
    case 'text':
      return <p className="leading-relaxed text-gray-300">{t(block.body)}</p>

    case 'question':
      return (
        <div className="rounded-r-lg border-l-4 border-brand-500 bg-brand-900/20 p-4">
          <p className="font-semibold text-brand-300">{t(block.body)}</p>
        </div>
      )

    case 'lists':
      return (
        <div className={`grid gap-5 ${block.columns.length === 3 ? 'md:grid-cols-3' : block.columns.length === 2 ? 'md:grid-cols-2' : ''}`}>
          {block.columns.map((col, i) => (
            <div key={i} className="card p-5">
              <h3 className={`mb-3 font-semibold ${accents[i % accents.length]}`}>{t(col.title)}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {col.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className={`mt-0.5 ${accents[i % accents.length]}`}>▸</span>
                    <span>{t(it)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )

    case 'stats': {
      const n = block.items.length
      const cols = n === 4 ? 'grid-cols-2 lg:grid-cols-4' : n === 3 ? 'sm:grid-cols-3' : 'grid-cols-2'
      return (
        <div className={`grid gap-4 ${cols}`}>
          {block.items.map((s, i) => (
            <div key={i} className="rounded-xl border border-brand-700/40 bg-gradient-to-br from-brand-900/30 to-gold-900/10 p-5 text-center">
              <div className="metric-text mb-1 text-3xl font-extrabold md:text-4xl">{t(s.value)}</div>
              <div className="text-sm font-medium text-gray-300">{t(s.label)}</div>
              {s.note && <div className="mt-1 text-xs text-gray-400">{t(s.note)}</div>}
            </div>
          ))}
        </div>
      )
    }

    case 'table':
      return (
        <figure>
          <div className="overflow-x-auto rounded-xl border border-brand-900/40">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-dark-800/80">
                <tr>
                  {block.head.map((h, i) => (
                    <th key={i} className="px-4 py-3 font-semibold text-brand-300">{t(h)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className={`border-t border-brand-900/30 ${block.highlight === i ? 'bg-green-900/20' : 'odd:bg-dark-900/40'}`}>
                    {row.map((c, j) => (
                      <td key={j} className={`px-4 py-2.5 ${j === 0 ? 'font-medium text-white' : 'text-gray-300'}`}>
                        {t(c)}
                        {block.highlight === i && j === 0 && (
                          <span className="ml-2 rounded bg-green-600/30 px-1.5 py-0.5 text-[10px] font-bold uppercase text-green-300">
                            {lang === 'fr' ? 'retenu' : 'chosen'}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && <figcaption className="mt-3 text-sm leading-relaxed text-gray-400">{t(block.note)}</figcaption>}
        </figure>
      )

    case 'steps':
      return (
        <ol className="grid gap-4 md:grid-cols-2">
          {block.items.map((s, i) => (
            <li key={i} className="card flex gap-4 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600 font-bold text-on-brand">{i + 1}</span>
              <div>
                <p className="font-semibold text-white">{t(s.title)}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">{t(s.body)}</p>
              </div>
            </li>
          ))}
        </ol>
      )

    case 'defs':
      return (
        <div className={`grid gap-3 ${block.mono ? 'sm:grid-cols-2' : ''}`}>
          {block.items.map((d, i) => (
            <div key={i} className={`card ${block.mono ? 'flex items-center justify-between gap-4 px-4 py-3' : 'p-5'}`}>
              {block.mono ? (
                <>
                  <span className="font-mono text-sm text-red-300">{t(d.term)}</span>
                  <span className="text-right text-sm text-gray-400">{t(d.desc)}</span>
                </>
              ) : (
                <>
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-brand-400">{t(d.term)}</h3>
                    {d.aside && <span className="text-sm font-semibold text-green-400">{t(d.aside)}</span>}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">{t(d.desc)}</p>
                </>
              )}
            </div>
          ))}
        </div>
      )

    case 'bars':
      return (
        <figure className="card p-5">
          <div className="space-y-3">
            {block.items.map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-gray-300 sm:w-56">{b.label}</span>
                <div className="h-2 flex-1 rounded-full bg-dark-700">
                  <div className="h-2 rounded-full bg-gradient-to-r from-brand-600 to-gold-400" style={{ width: `${b.pct}%` }} />
                </div>
                <span className="w-10 text-right text-sm font-semibold text-brand-400">{b.pct}%</span>
              </div>
            ))}
          </div>
          {block.note && <figcaption className="mt-4 text-xs text-gray-400">{t(block.note)}</figcaption>}
        </figure>
      )

    case 'code':
      return (
        <pre className="overflow-x-auto rounded-lg border-l-4 border-brand-500 bg-brand-900/30 p-4 font-mono text-sm leading-relaxed text-brand-300">{block.body}</pre>
      )

    case 'iframe':
      return (
        <figure>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-brand-900/40 bg-dark-900 md:aspect-[16/10]">
            <iframe src={block.src} title={t(block.title)} className="h-full w-full" loading="lazy" />
          </div>
          <figcaption className="mt-3 text-sm text-gray-400">
            {lang === 'fr' ? "L'application ne s'affiche pas ? " : 'App not loading? '}
            <a href={block.src} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-400 hover:text-brand-300">
              {lang === 'fr' ? "L'ouvrir dans un nouvel onglet" : 'Open it in a new tab'}
            </a>
          </figcaption>
        </figure>
      )

    case 'tags':
      return (
        <div className="flex flex-wrap gap-2">
          {block.items.map((x) => (
            <span key={x} className="chip">{x}</span>
          ))}
        </div>
      )
  }
}
