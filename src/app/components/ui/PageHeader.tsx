'use client'

import { motion } from 'framer-motion'
import { cn } from '@/app/lib/utils/cn'

interface PageHeaderProps {
  title: string
  description: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className="relative pt-20">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn('space-y-4', className)}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <div className="heading-gradient">{title}</div>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  )
} 