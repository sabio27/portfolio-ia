'use client'

import { useState } from 'react'
import { useLang } from '@/lib/i18n'
import { person, ui } from '@/lib/site'
import PageHeader from '@/components/PageHeader'
import CvLink, { OtherCvLink } from '@/components/CvLink'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon, WhatsappIcon } from '@/components/Icons'

const subjects = [
  { value: 'emploi', label: { fr: "Offre d'emploi", en: 'Job opportunity' } },
  { value: 'mission', label: { fr: 'Mission / freelance', en: 'Contract / freelance' } },
  { value: 'collaboration', label: { fr: 'Collaboration sur un projet', en: 'Project collaboration' } },
  { value: 'autre', label: { fr: 'Autre', en: 'Other' } },
]

export default function Contact() {
  const { t, lang } = useLang()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xwvwryvk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const info = [
    { icon: MailIcon, title: 'Email', value: person.email, href: `mailto:${person.email}` },
    { icon: PhoneIcon, title: lang === 'fr' ? 'Téléphone' : 'Phone', value: `${person.phones[0].label}\n${person.phones[1].label}`, href: person.phones[0].href },
    { icon: WhatsappIcon, title: 'WhatsApp', value: lang === 'fr' ? 'Envoyer un message' : 'Send a message', href: person.whatsapp },
    { icon: LinkedinIcon, title: 'LinkedIn', value: person.linkedinLabel, href: person.linkedin },
    { icon: GithubIcon, title: 'GitHub', value: person.githubLabel, href: person.github },
    { icon: PinIcon, title: lang === 'fr' ? 'Localisation' : 'Location', value: person.location, href: null },
  ]

  const field = 'w-full rounded-lg border border-brand-900/40 bg-dark-800/60 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-brand-500 focus:outline-none'

  return (
    <div className="container-page py-12 md:py-16">
      <PageHeader
        title={{ fr: 'Me contacter', en: 'Contact me' }}
        intro={{
          fr: 'Une offre, une mission ou un projet data ? Je réponds en français comme en anglais.',
          en: 'A job offer, a contract or a data project? I reply in French or English.',
        }}
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-1">
          <div className="rounded-2xl border border-brand-600/40 bg-gradient-to-br from-brand-900/40 to-gold-900/20 p-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              <span className="font-semibold text-white">{lang === 'fr' ? 'Disponible' : 'Available'}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              {t(ui.available)}. {t(ui.workMode)}.
            </p>
          </div>

          <ul className="space-y-3">
            {info.map(({ icon: Icon, title, value, href }) => (
              <li key={title} className="card card-hover group flex items-start gap-4 p-4">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-600/35 bg-brand-600/15 text-brand-300`}>
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-white">{title}</p>
                  {href ? (
                    <a href={href} className="inline-block whitespace-pre-line break-words py-1 text-sm text-gray-300 hover:text-brand-400" {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="card space-y-3 p-5 text-center">
            <CvLink className="btn-primary w-full" />
            <OtherCvLink />
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="card p-6 md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">{lang === 'fr' ? 'Envoyez-moi un message' : 'Send me a message'}</h2>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-medium text-gray-300">{lang === 'fr' ? 'Nom complet *' : 'Full name *'}</span>
                  <input name="name" required value={form.name} onChange={onChange} className={field} placeholder={lang === 'fr' ? 'Votre nom' : 'Your name'} autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-2 block font-medium text-gray-300">Email *</span>
                  <input type="email" name="email" required value={form.email} onChange={onChange} className={field} placeholder="you@example.com" autoComplete="email" />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block font-medium text-gray-300">{lang === 'fr' ? 'Sujet *' : 'Subject *'}</span>
                <select name="subject" required value={form.subject} onChange={onChange} className={field}>
                  <option value="">{lang === 'fr' ? 'Sélectionnez un sujet' : 'Select a subject'}</option>
                  {subjects.map((s) => (
                    <option key={s.value} value={s.value}>{t(s.label)}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block font-medium text-gray-300">Message *</span>
                <textarea name="message" required rows={6} value={form.message} onChange={onChange} className={`${field} resize-none`} placeholder={lang === 'fr' ? 'Décrivez votre besoin…' : 'Tell me about your needs…'} />
              </label>

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
                {status === 'sending' ? (lang === 'fr' ? 'Envoi en cours…' : 'Sending…') : lang === 'fr' ? 'Envoyer le message' : 'Send message'}
              </button>

              <div role="status">
                {status === 'success' && (
                  <p className="rounded-lg border border-green-700/50 bg-green-900/30 p-4 font-medium text-green-300">
                    {lang === 'fr' ? 'Message envoyé. Je vous réponds dans les plus brefs délais.' : "Message sent. I'll get back to you shortly."}
                  </p>
                )}
                {status === 'error' && (
                  <p className="rounded-lg border border-red-700/50 bg-red-900/30 p-4 font-medium text-red-300">
                    {lang === 'fr' ? `L'envoi a échoué. Écrivez-moi directement à ${person.email}.` : `Sending failed. Please email me at ${person.email}.`}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
