import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
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
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[rgb(var(--background))]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
} 