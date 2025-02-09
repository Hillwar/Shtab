'use client'

import { NAVIGATION } from '@/app/lib/constants/navigation'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(15,23,42)]">
      <Header navigation={NAVIGATION.header} />
      <main className="flex-grow">{children}</main>
      <Footer 
        description={NAVIGATION.footer.description}
        contacts={NAVIGATION.footer.contacts}
        socialLinks={NAVIGATION.footer.socialLinks}
      />
    </div>
  )
} 