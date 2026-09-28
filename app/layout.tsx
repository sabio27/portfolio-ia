import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SkipLink from '@/components/SkipLink'

export const metadata: Metadata = {
  title: 'Koffi Ambroise | Ingénieur IA & Data Science',
  description:
    'Portfolio de Koffi Ambroise, ingénieur IA & Data Science à Abidjan : vision par ordinateur, machine learning, NLP, séries temporelles et MLOps.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <LanguageProvider>
          <SkipLink />
          <Navbar />
          <main id="contenu" tabIndex={-1} className="flex-1 pt-16 focus:outline-none">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
