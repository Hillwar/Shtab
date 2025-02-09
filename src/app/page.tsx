'use client'

import { motion } from 'framer-motion'
import { Layout } from './components/layout/Layout'
import { Card } from './components/ui/Card'
import Link from 'next/link'
import { getMainPage, urlFor } from '@/sanity/lib/client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface MainPageData {
  hero: {
    title: string
    description: string
    image: any
    buttons?: {
      text: string
      link: string
      isPrimary: boolean
    }[]
  }
  directions: {
    title: string
    description: string
    icon: string
    link: string
    order: number
  }[]
}

export default function HomePage() {
  const [pageData, setPageData] = useState<MainPageData | null>(null)

  useEffect(() => {
    getMainPage().then(setPageData)
  }, [])

  if (!pageData) return null

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
                src={urlFor(pageData.hero.image).url()}
                alt="АГШШ"
                fill
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
                <div className="heading-gradient">{pageData.hero.title}</div>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {pageData.hero.description}
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {pageData.hero.buttons?.map((button) => (
                <Link 
                  key={button.link} 
                  href={button.link}
                  className={button.isPrimary ? "button-primary" : "button-secondary"}
                >
                  {button.text}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-24 pt-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Наши направления
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pageData.directions
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
                    <div className="p-6 text-center">
                      <span className="text-4xl mb-4 block">{direction.icon}</span>
                      <h3 className="text-xl font-semibold mb-2">{direction.title}</h3>
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