'use client'

import { person } from '@/lib/site'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons'

export default function Footer() {
  const items = [
    { icon: MailIcon, label: person.email, href: `mailto:${person.email}` },
    { icon: PhoneIcon, label: person.phones[0].label, href: person.phones[0].href },
    { icon: LinkedinIcon, label: person.linkedinLabel, href: person.linkedin },
    { icon: GithubIcon, label: person.githubLabel, href: person.github },
  ]
  return (
    <footer className="mt-20 border-t border-brand-900/30 bg-dark-950/60">
      <div className="container-page flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:max-w-3xl">
          {items.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a href={href} className="inline-flex min-h-[40px] items-center gap-2 text-gray-400 transition-colors hover:text-brand-400" {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <Icon className="h-4 w-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="shrink-0 text-xs text-gray-400">
          © {new Date().getFullYear()} {person.fullName} · Abidjan
        </p>
      </div>
    </footer>
  )
}
