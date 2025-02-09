import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'АГШШ им. А.П. Гайдара',
  description: 'Архангельский городской штаб школьников - молодежная организация с более чем 60-летней историей. Развитие, обучение, дружба и счастье людей - наши главные цели.',
  keywords: 'АГШШ, Архангельский городской штаб школьников, молодежная организация, Архангельск, образование, развитие, коммунарская методика',
  authors: [{ name: 'АГШШ им. А.П. Гайдара' }],
  openGraph: {
    title: 'АГШШ им. А.П. Гайдара - Главная',
    description: 'Архангельский городской штаб школьников - молодежная организация с более чем 60-летней историей. Развитие, обучение, дружба.',
    images: ['/images/agsh-logo.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/icons/icon-192x192.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[rgb(var(--background))]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/10 animate-gradient" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(var(--primary),0.15),transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_calc(100%-200px),rgba(var(--accent),0.15),transparent_70%)]" />
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
} 