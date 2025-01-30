'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'

const campFeatures = [
  {
    title: 'Традиции сбора',
    description: 'Уникальные традиции, передающиеся из поколения в поколение: вечерние огоньки, орлятский круг, творческие дела.',
    icon: '🔥'
  },
  {
    title: 'Образовательная программа',
    description: 'Мастер-классы, тренинги и семинары от опытных педагогов и приглашенных экспертов.',
    icon: '📚'
  },
  {
    title: 'Творческие мастерские',
    description: 'Развитие талантов в различных направлениях: музыка, театр, танцы, прикладное искусство.',
    icon: '🎨'
  },
  {
    title: 'Спорт и активный отдых',
    description: 'Ежедневные спортивные мероприятия, игры на свежем воздухе, туристические походы.',
    icon: '⚽'
  }
]

const schedule = [
  {
    day: 'День 1-2',
    title: 'Заезд и открытие',
    activities: [
      'Размещение участников',
      'Знакомство с территорией',
      'Торжественное открытие',
      'Вечер знакомств'
    ]
  },
  {
    day: 'День 3-5',
    title: 'Основная программа',
    activities: [
      'Образовательные занятия',
      'Творческие мастерские',
      'Спортивные мероприятия',
      'Вечерние мероприятия'
    ]
  },
  {
    day: 'День 6-7',
    title: 'Проектная деятельность',
    activities: [
      'Разработка проектов',
      'Защита проектов',
      'Командные игры',
      'Подготовка к закрытию'
    ]
  },
  {
    day: 'День 8',
    title: 'Закрытие сбора',
    activities: [
      'Заключительный концерт',
      'Награждение участников',
      'Прощальный огонек',
      'Отъезд участников'
    ]
  }
]

export default function SeniorPage() {
  return (
    <Layout>
      <PageHeader
        title="Сбор старшеклассников"
        description="Легендарный летний сбор АГШШ на Копачёвской поляне"
      />

      {/* Hero section */}
      <section className="relative rounded-3xl overflow-hidden mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        <img
          src="/images/senior-camp.jpg"
          alt="Сбор старшеклассников"
          className="w-full h-[60vh] object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center p-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 backdrop-blur-sm mb-4">
                Лето 2024
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                64-й Сбор старшеклассников
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Особенности сбора
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Программа сбора
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {day.day}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm">
                      {day.title}
                    </span>
                  </div>
                  <ul className="space-y-2 text-white/70">
                    {day.activities.map((activity) => (
                      <li key={activity} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Registration section */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">
              Стань участником сбора
            </h2>
            <p className="text-white/70 mb-8">
              Регистрация на 64-й Сбор старшеклассников откроется в апреле 2024 года. Оставьте свои контакты, и мы сообщим вам о начале регистрации первыми!
            </p>
            <form className="max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white mb-4 focus:outline-none focus:border-blue-500"
              />
              <button className="w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors">
                Подписаться на обновления
              </button>
            </form>
          </Card>
        </motion.div>
      </section>
    </Layout>
  )
} 