'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/app/lib/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export function Card({ children, className, href, onClick }: CardProps) {
  const Component = href ? 'a' : onClick ? 'button' : 'div'
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'glass-card',
        'transition-all duration-200 ease-out',
        'group cursor-pointer',
        className
      )}
    >
      <Component
        href={href}
        onClick={onClick}
        className="block p-6"
      >
        <div className="relative z-10">
          {children}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.075] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Component>
    </motion.div>
  )
} 