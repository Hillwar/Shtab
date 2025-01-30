'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import Image from 'next/image';

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
    title: 'Археология',
    description: 'Участие в археологических раскопках и исследованиях под руководством специалистов.',
    icon: '🏺'
  },
  {
    title: 'Волонтерство',
    description: 'Помощь в сохранении исторических памятников и природных объектов архипелага.',
    icon: '🤝'
  }
]

const expeditionDetails = [
  {
    title: 'Проживание',
    items: [
      'Палаточный лагерь на берегу Белого моря',
      'Полевая кухня с трехразовым питанием',
      'Душевые и санитарные зоны',
      'Учебные шатры для занятий'
    ]
  },
  {
    title: 'Образование',
    items: [
      'Лекции по истории Соловков',
      'Практические занятия по археологии',
      'Экологические исследования',
      'Мастер-классы по краеведению'
    ]
  },
  {
    title: 'Экскурсии',
    items: [
      'Соловецкий монастырь',
      'Ботанический сад',
      'Лабиринты и менгиры',
      'Морские прогулки вокруг островов'
    ]
  }
]

export default function SolovkiPage() {
  return (
    <Layout>
      <PageHeader
        title="Соловецкая экспедиция"
        description="Исследовательская экспедиция на Соловецкие острова"
      />

      {/* Hero section */}
      <section className="relative rounded-3xl overflow-hidden mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        <Image
          src="/images/solovki.jpg"
          alt="Соловецкие острова"
          className="w-full h-[60vh] object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center p-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 backdrop-blur-sm mb-4">
                Лето 2024
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Исследовательская экспедиция
              </h2>
              <p className="text-lg md:text-xl text-white/80">
                Уникальная возможность изучить историю, культуру и природу Соловецкого архипелага
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
              <Card className="h-full">
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

      {/* Details section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Организация экспедиции
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expeditionDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {detail.title}
                </h3>
                <ul className="space-y-3">
                  {detail.items.map((item) => (
                    <li key={item} className="flex items-center text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114183.73361019799!2d35.54771455!3d65.0800385!2z0KHQvtC70L7QstC10YbQutC40Lkg0LDRgNGF0LjQv9C10LvQsNCz!5e0!3m2!1sru!2sru!4v1234567890"
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

      {/* Application section */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">
              Подать заявку на участие
            </h2>
            <p className="text-white/70 mb-8">
              Для участия в экспедиции необходимо заполнить анкету и пройти собеседование. Количество мест ограничено.
            </p>
            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Почему вы хотите участвовать в экспедиции?"
                rows={4}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
              />
              <button className="w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors">
                Отправить заявку
              </button>
            </form>
          </Card>
        </motion.div>
      </section>
    </Layout>
  )
} 