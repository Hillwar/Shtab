'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'
import { cn } from '@/app/lib/utils/cn'
import { useAnimationPreference } from '@/app/lib/hooks/useAnimationPreference'

interface Photo {
  src: string
  alt: string
  description?: string
}

interface PhotoGalleryProps {
  photos: Photo[]
  className?: string
}

export function PhotoGallery({ photos, className }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const isReducedMotion = useAnimationPreference()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isReducedMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isReducedMotion ? 0 : 0.5 },
    },
  }

  return (
    <>
      <motion.div
        className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {photos.map((photo) => (
          <motion.div
            key={photo.src}
            className="relative aspect-square overflow-hidden rounded-lg glass cursor-pointer group"
            variants={itemVariants}
            onClick={() => setSelectedPhoto(photo)}
            whileHover={isReducedMotion ? {} : { scale: 1.02 }}
            whileTap={isReducedMotion ? {} : { scale: 0.98 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {photo.description && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{photo.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-blue-200 transition-colors"
                onClick={() => setSelectedPhoto(null)}
              >
                <X size={24} />
              </button>
              <div className="relative aspect-[16/9]">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              {selectedPhoto.description && (
                <p className="text-white mt-4 text-center">{selectedPhoto.description}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}