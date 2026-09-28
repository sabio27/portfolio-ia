'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useLang } from '@/lib/i18n'
import { nav, person } from '@/lib/site'
import LangSwitch from './LangSwitch'
import CvLink from './CvLink'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

export default function Navbar() {
  const pathname = usePathname()
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  // Échap ferme le menu mobile
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(path + '/'))

  const socials = [
    { href: person.github, label: 'GitHub', icon: GithubIcon, external: true },
    { href: person.linkedin, label: 'LinkedIn', icon: LinkedinIcon, external: true },
    { href: `mailto:${person.email}`, label: 'Email', icon: MailIcon, external: false },
  ]

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-brand-900/30 bg-dark-950/85 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <span className="block bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-lg font-extrabold text-transparent">
              {person.name}
            </span>
            <span className="hidden text-xs text-gray-400 sm:block">{t(person.role)}</span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-brand-600/15 text-brand-400'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="hidden items-center gap-3 xl:flex">
              {socials.map(({ href, label, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  aria-label={label}
                  className="text-gray-400 transition-colors hover:text-brand-400"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
              <span className="h-5 w-px bg-brand-900/60" aria-hidden />
            </div>
            <LangSwitch />
            <CvLink label="short" className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-on-brand transition-colors hover:bg-brand-500" />
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LangSwitch />
            <button
              onClick={() => setOpen(!open)}
              className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Menu"
              aria-expanded={open}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand-900/30 bg-dark-950 lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {nav.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                  isActive(item.path) ? 'bg-brand-600/15 text-brand-400' : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-4 border-t border-brand-900/30 pt-4">
              <div className="flex items-center gap-5">
                {socials.map(({ href, label, icon: Icon, external }) => (
                  <a key={label} href={href} aria-label={label} className="text-gray-400 hover:text-brand-400" {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
              <CvLink label="short" className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-on-brand" />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
