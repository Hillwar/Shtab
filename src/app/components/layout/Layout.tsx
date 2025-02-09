'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getNavigation } from '@/sanity/lib/client'

interface LayoutProps {
  children: React.ReactNode
}

interface NavigationData {
  header: {
    title: string
    link: string
    order: number
  }[]
  footer: {
    description: string
    socialLinks: {
      platform: string
      url: string
      icon: string
    }[]
    address: string
    phone: string
    email: string
  }
}

export function Layout({ children }: LayoutProps) {
  const [navigation, setNavigation] = useState<NavigationData | null>(null)

  useEffect(() => {
    getNavigation().then(setNavigation)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(15,23,42)]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-[rgb(15,23,42)]/80 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/agsh-logo.png"
                alt="АГШШ"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-white">АГШШ</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navigation?.header
                .sort((a, b) => a.order - b.order)
                .map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-[rgb(15,23,42)] border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/agsh-logo.png"
                  alt="АГШШ"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="font-bold text-white">АГШШ</span>
              </Link>
              <p className="text-white/70">{navigation?.footer.description}</p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <p>{navigation?.footer.address}</p>
                <p>{navigation?.footer.phone}</p>
                <p>{navigation?.footer.email}</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                {navigation?.footer.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors text-2xl"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 