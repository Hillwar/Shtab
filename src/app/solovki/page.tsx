'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import Image from 'next/image';
import { Gallery } from '../components/ui/Gallery'

const expeditionHighlights = [
  {
    title: 'История и культура',
    description: 'Изучение богатой истории Соловецкого архипелага, его монастыря и лагерного периода.',
    icon: '🏛️'
  },
  {
    title: 'Природа и экология',
    description: 'Исследование уникальной природы островов, изучение местной флоры и фауны.',
    icon: '🌿'
  },
  {
    title: 'Трудовая деятельность',
    description: 'Участие в трудовых проектах по благоустройству территории и восстановлению объектов.',
    icon: '🛠️'
  },
  {
    title: 'Волонтерство',
    description: 'Помощь в сохранении исторических памятников и природных объектов архипелага.',
    icon: '🤝'
  }
]

// Добавляем массив с фотографиями после существующих констант
const galleryImages = [
  {
    src: '/images/solovki/6PuDGwo90Is.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/B499PNG8BXc.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/IMUjT-dGTtI.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/JaTd-DymHZU.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/txaKymp_4vM.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/JnQ2wdl3up8.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/N9BSCSGdId8.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/OTd1zZlfZ0g.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/TVvMrzy-bTA.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/VPQ9Rnqm-jE.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/a-kUsJbHckY.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/hGqaSBj8XiU.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/kCWncOa7MiU.jpg',
    alt: '',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/solovki/qUIL4Golxeo.jpg',
    alt: '',
    width: 1920,
    height: 1080
  }
]

export default function SolovkiPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Соловецкая экспедиция"
          description="Трудовой лагерь на Соловецких островах"
        />

        <div className="grid gap-8 md:grid-cols-2 mt-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gradient mb-4">О программе</h2>
            <p className="text-white/70 mb-6">
              Уникальная возможность изучить историю, культуру и природу Соловецкого архипелага, 
              а также внести свой вклад в сохранение этого уникального места через трудовую деятельность. 
              Участники ежедневно трудятся на благо архипелага, знакомятся с историческими памятниками 
              и природными объектами.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gradient mb-4">Программа включает</h2>
            <ul className="space-y-4 text-white/70">
              <li>• Экскурсии по историческим объектам Соловецкого монастыря</li>
              <li>• Изучение природных памятников архипелага</li>
              <li>• Трудовые проекты по благоустройству территории</li>
              <li>• Образовательные семинары и мастер-классы</li>
              <li>• Волонтерская деятельность</li>
            </ul>
          </Card>
        </div>

        {/* Hero section */}
        <section className="relative rounded-3xl overflow-hidden my-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
          <Image
            src="/images/solovki.jpg"
            alt="Соловецкие острова"
            width={1920}
            height={1080}
            className="w-full h-[60vh] object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center p-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Соловки
                </h2>
                <p className="text-lg md:text-xl text-white/80">
                  Уникальная возможность изучить историю, культуру и природу Соловецкого архипелага и внести свой вклад
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights grid */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Основные направления
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expeditionHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-8">
                  <div className="flex items-start space-x-4">
                    <span className="text-4xl">{highlight.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-white/70">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Map section */}
        <section className="mb-24">
          <Card>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229013.03339195667!2d35.48654835454657!3d65.07943685692028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4419c3b9bc69f9e5%3A0x9a6f2fce4e5f8c4f!2z0KHQvtC70L7QstC10YbQutC40Lkg0LDRgNGF0LjQv9C10LvQsNCz!5e0!3m2!1sru!2sru!4v1710399428599!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </Card>
        </section>

        {/* Gallery section */}
        <section className="my-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Фотогалерея
          </h2>
          <Gallery 
            images={galleryImages}
          />
        </section>
      </div>
    </Layout>
  )
} 