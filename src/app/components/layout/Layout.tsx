'use client'

import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
  className?: string
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
} 