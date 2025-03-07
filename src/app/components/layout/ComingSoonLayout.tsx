'use client'

import { NAVIGATION } from '@/app/lib/constants/navigation'
import { Footer } from './Footer'

interface ComingSoonLayoutProps {
  children: React.ReactNode
}

export function ComingSoonLayout({ children }: ComingSoonLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(15,23,42)]">
      <main className="flex-grow">{children}</main>
      <Footer 
        description={NAVIGATION.footer.description}
        contacts={NAVIGATION.footer.contacts}
        socialLinks={NAVIGATION.footer.socialLinks}
      />
    </div>
  )
} 