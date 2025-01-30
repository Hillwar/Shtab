'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/app/lib/utils/cn'
import { Navigation } from './Navigation'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
  className?: string
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
} 