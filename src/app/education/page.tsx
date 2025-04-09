'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { Gallery } from '../components/ui/Gallery'
import { FORMS_CONFIG } from '../lib/config'

const educationPrograms = [
  {
    title: 'Коммунарская методика',
    description: 'Основной метод работы АГШШ, направленный на развитие лидерских качеств и командной работы.',
    features: [
      'Коллективное творческое дело',
      'Развитие самоуправления',
      'Социальное проектирование'
    ]
  },
  {
    title: 'Школа актива',
    description: 'Программа подготовки будущих лидеров и организаторов.',
    features: [
      'Тренинги личностного роста',
      'Практика организации мероприятий',
      'Развитие коммуникативных навыков'
    ]
  },
  {
    title: 'Творческие мастерские',
    description: 'Развитие творческого потенциала и практических навыков.',
    features: [
      'Театральное мастерство',
      'Музыкальные занятия',
      'Прикладное творчество'
    ]
  }
]

const galleryImages = [
  {
    src: '/images/ua/5dJwq9HyRaI.jpg',
    alt: 'Учеба актива - Общее фото',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/ua/BDUgX8qWcG8.jpg',
    alt: 'Учеба актива - Работа в группах',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/ua/CO5hH7LGz6s.jpg',
    alt: 'Учеба актива - Тренинги',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/ua/DULWhviyYsw.jpg',
    alt: 'Учеба актива - Мастер-классы',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/ua/H2da1vj3_jI.jpg',
    alt: 'Учеба актива - Командная работа',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/ua/N7-2S_pQ3xA.jpg',
    alt: 'Учеба актива - Презентации',
    width: 1920,
    height: 1080
  }
]

export default function EducationPage() {
  return (
    <Layout>
      <PageHeader
        title="Учеба актива"
        description="Программа развития лидерских качеств и творческого потенциала"
      />

      {/* Programs grid */}
      <div className="container mx-auto px-4 py-12">
        {FORMS_CONFIG.showApplicationButton.education && (
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button 
                onClick={() => window.location.href = FORMS_CONFIG.formLinks.education} 
                className="button-primary"
              >
                Подать заявку
              </button>
            </motion.div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {program.title}
                </h3>
                <p className="text-white/70 mb-6">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Schedule section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Расписание занятий
          </h2>
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Регулярные занятия
                </h3>
                <ul className="space-y-4">
                  <li className="text-white/80">
                    <span className="font-semibold">Понедельник:</span> Школа актива (16:00 - 18:00)
                  </li>
                  <li className="text-white/80">
                    <span className="font-semibold">Среда:</span> Творческие мастерские (15:00 - 17:00)
                  </li>
                  <li className="text-white/80">
                    <span className="font-semibold">Суббота:</span> Практические занятия (12:00 - 15:00)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Специальные мероприятия
                </h3>
                <ul className="space-y-4">
                  <li className="text-white/80">
                    <span className="font-semibold">Осенние сборы:</span> Октябрь
                  </li>
                  <li className="text-white/80">
                    <span className="font-semibold">Зимняя школа:</span> Январь
                  </li>
                  <li className="text-white/80">
                    <span className="font-semibold">Весенний фестиваль:</span> Апрель
                  </li>
                </ul>
              </div>
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
            title="Моменты учебы актива"
          />
        </section>
      </div>
    </Layout>
  )
} 