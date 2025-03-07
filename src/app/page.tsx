'use client'

import { motion } from 'framer-motion'
import { ComingSoonLayout } from './components/layout/ComingSoonLayout'

export default function HomePage() {
  return (
    <ComingSoonLayout>
      {/* Coming Soon Section */}
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
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="heading-gradient">Скоро открытие</div>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Сайт Архангельского городского штаба школьников имени А.П. Гайдара находится в разработке и скоро будет доступен.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a 
                href="https://vk.com/shtab_29" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary"
              >
                Группа ВКонтакте
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="container mx-auto mb-24 pt-12 px-4">
        <div className="glass-card p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gradient">
            Следите за обновлениями
          </h2>
          <p className="text-white/80 text-center mb-6">
            Мы готовим для вас новый современный сайт, где вы сможете узнать всё о деятельности АГШШ, 
            наших мероприятиях и программах. Следите за новостями в наших социальных сетях.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-4 rounded-lg"
            >
              <p className="text-lg font-semibold text-gradient">60+</p>
              <p className="text-sm text-white/70">лет истории</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-4 rounded-lg"
            >
              <p className="text-lg font-semibold text-gradient">4</p>
              <p className="text-sm text-white/70">направления</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-4 rounded-lg"
            >
              <p className="text-lg font-semibold text-gradient">1000+</p>
              <p className="text-sm text-white/70">участников</p>
            </motion.div>
          </div>
        </div>
      </section>
    </ComingSoonLayout>
  )
} 