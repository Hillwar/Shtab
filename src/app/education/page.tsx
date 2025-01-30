'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'

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

export default function EducationPage() {
  return (
    <Layout>
      <PageHeader
        title="Учеба актива"
        description="Программы развития лидерских качеств и творческого потенциала"
      />

      {/* Programs grid */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Call to action */}
      <section className="mt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Присоединяйтесь к нам!
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Мы всегда рады новым участникам. Запишитесь на занятия и станьте частью нашего дружного коллектива.
          </p>
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors">
            Записаться на занятия
          </button>
        </motion.div>
      </section>
    </Layout>
  )
} 