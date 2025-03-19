'use client'

import { motion } from 'framer-motion'
import { Layout } from './components/layout/Layout'
import { Card } from './components/ui/Card'
import Link from 'next/link'
import Image from 'next/image'
import { MAIN_PAGE } from './lib/constants/content'

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20" />
        </div>
        
        <div className="container relative z-10 px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-32 h-32 md:w-48 md:h-48 mx-auto"
            >
              <Image
                src={MAIN_PAGE.hero.image.src}
                alt="АГШШ"
                width={MAIN_PAGE.hero.image.width}
                height={MAIN_PAGE.hero.image.height}
                className="object-contain"
              />
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="heading-gradient">{MAIN_PAGE.hero.title}</div>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {MAIN_PAGE.hero.description}
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {MAIN_PAGE.hero.currentApplication.isActive && (
                <motion.div
                  className="bg-gradient-to-r from-blue-600/70 to-purple-600/70 p-4 rounded-2xl backdrop-blur-sm border border-white/10 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={`/${MAIN_PAGE.hero.currentApplication.eventType}`} className="text-xl font-bold">
                    👉 {MAIN_PAGE.hero.currentApplication.text}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto mb-24 pt-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Наши направления
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MAIN_PAGE.directions
            .sort((a, b) => a.order - b.order)
            .map((direction, index) => (
              <motion.div
                key={direction.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={direction.link}>
                  <Card className="h-full hover:scale-105 transition-transform duration-300">
                    <div className="p-8 text-center">
                      <span className="text-5xl mb-6 block">{direction.icon}</span>
                      <h3 className="text-2xl font-semibold mb-4">{direction.title}</h3>
                      <p className="text-white/70">{direction.description}</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  )
} 