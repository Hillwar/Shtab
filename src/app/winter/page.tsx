'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import Image from 'next/image';
import { Gallery } from '../components/ui/Gallery'
import { FORMS_CONFIG } from '../lib/config'

// Добавляем массив с фотографиями после существующих импортов
const galleryImages = [
  {
    src: '/images/winter/0_rxP_2GwtI.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/0ZGxt98XV94.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/AMC2AOhao5E.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/BntYYoTNaEI.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/PcRLr_FjBn0.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/WP8apxrW2g4.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/b6VWW-3-P04.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/fOyu0cB23Wg.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/jkJbtWgfLk4.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/lYtRP13l-cI.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/liO0GgoqlrQ.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/tZx70BSoETA.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/vAv7lnCfo5M.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/winter/LhQWPhbRwnQ.jpg',
    alt: '',
    width: 1920,
    height: 1080
  }
]

export default function WinterPage() {
  return (
    <Layout>
      <PageHeader
        title="Зимовка"
        description="Традиционное зимнее дело АГШШ"
      />

      <div className="container mx-auto px-4 py-12">
        {FORMS_CONFIG.showApplicationButton.winter && (
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button 
                onClick={() => window.location.href = FORMS_CONFIG.formLinks.winter} 
                className="button-primary"
              >
                Подать заявку
              </button>
            </motion.div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Основная информация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-gradient">О Зимовке</h2>
              <p className="text-white/80">
                Зимовка - это учеба состава АГШШ, которое проводится в зимний период.
                Это время активного отдыха, обучения и развития в атмосфере зимней сказки.
              </p>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Программа</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center space-x-2">
                  <span className="text-xl">❄️</span>
                  <span>Образовательные мастер-классы</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">⛷️</span>
                  <span>Зимние виды спорта</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🎮</span>
                  <span>Командные игры</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🎨</span>
                  <span>Творческие мастерские</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Фотографии и дополнительная информация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <Image
                src="/images/winter-camp.jpg"
                alt="Зимовка АГШШ"
                width={1900} // Add the required width property (in pixels)
                height={1024} // Add the required height property (in pixels)
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Атмосфера зимовки</h3>
              <p className="text-white/80">
                Уютная атмосфера, теплое общение и активный отдых - все это создает
                незабываемые впечатления и помогает участникам раскрыть свой потенциал.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Фотогалерея
        </h2>
        <Gallery 
          images={galleryImages}
        />
      </section>
    </Layout>
  )
} 