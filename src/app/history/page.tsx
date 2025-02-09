'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import { getHistory, urlFor } from '@/sanity/lib/client'
import Image from 'next/image'

export default function HistoryPage() {
  const [expandedDecade, setExpandedDecade] = useState<string | null>(null)
  const [timelineData, setTimelineData] = useState<any[]>([])

  // Fetch data on mount
  useEffect(() => {
    getHistory().then(setTimelineData)
  }, [])

  return (
    <Layout>
      <PageHeader
        title="История АГШШ"
        description="Более 60 лет развития, обучения и дружбы"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Линия времени */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" />

          <div className="space-y-8">
            {timelineData.map((decade: any) => (
              <motion.div
                key={decade._id}
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Десятилетие */}
                <button
                  onClick={() => setExpandedDecade(expandedDecade === decade.decade ? null : decade.decade)}
                  className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-[rgb(15,23,42)] border border-white/10 hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-2xl font-bold text-gradient">{decade.decade}</span>
                </button>

                <AnimatePresence>
                  {expandedDecade === decade.decade && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-8 overflow-visible"
                    >
                      {decade.events.map((event: any, index: number) => (
                        <motion.div
                          key={event._key}
                          className="relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                            <div className="text-xl font-bold bg-secondary/20 text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
                              {event.year}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-16">
                            {index % 2 === 0 ? (
                              <>
                                <div className="text-right">
                                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                  <p className="text-white/70">{event.description}</p>
                                </div>
                                <div className="relative aspect-video">
                                  {event.image && (
                                    <Image
                                      src={urlFor(event.image).url()}
                                      alt={event.title}
                                      fill
                                      className="object-cover rounded-lg"
                                    />
                                  )}
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="relative aspect-video">
                                  {event.image && (
                                    <Image
                                      src={urlFor(event.image).url()}
                                      alt={event.title}
                                      fill
                                      className="object-cover rounded-lg"
                                    />
                                  )}
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                  <p className="text-white/70">{event.description}</p>
                                </div>
                              </>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
} 