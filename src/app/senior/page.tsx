'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { useState } from 'react'
import { Gallery } from '../components/ui/Gallery'
import { FORMS_CONFIG } from '../lib/config'

const campFeatures = [
  {
    title: 'Традиции Сбора',
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

interface DaySchedule {
  title: string;
  events: string[];
}

interface CampSchedule {
  startDate: string;
  endDate: string;
  events: {
    [key: string]: DaySchedule;
  };
}

const campSchedule: CampSchedule = {
  startDate: '2024-07-02',
  endDate: '2024-07-22',
  events: {
    '2024-07-02': {
      title: 'День 1',
      events: [
        'Заезд участников',
        'Размещение',
        'Знакомство с территорией'
      ]
    },
    '2024-07-03': {
      title: 'День 2',
      events: [
        'Торжественное открытие',
        'Вечер знакомств',
        'Огонёк знакомств'
      ]
    },
    '2024-07-04': {
      title: 'День 3',
      events: [
        'Образовательные занятия',
        'Творческие мастерские',
        'Вечерние мероприятия'
      ]
    },
    '2024-07-05': {
      title: 'День 4',
      events: [
        'Спортивные мероприятия',
        'Мастер-классы',
        'Вечерний концерт'
      ]
    },
    '2024-07-06': {
      title: 'День 5',
      events: [
        'Проектная работа',
        'Командные игры',
        'Творческий вечер'
      ]
    },
    '2024-07-07': {
      title: 'День 6',
      events: [
        'Туристический поход',
        'Песни у костра',
        'Ночной огонёк'
      ]
    },
    '2024-07-08': {
      title: 'День 7',
      events: [
        'День самоуправления',
        'Подготовка к вечернему делу',
        'Вечер легенд'
      ]
    },
    '2024-07-09': {
      title: 'День 8',
      events: [
        'Спортивная эстафета',
        'Интеллектуальные игры',
        'Дискотека'
      ]
    },
    '2024-07-10': {
      title: 'День 9',
      events: [
        'Мастер-классы по выбору',
        'Подготовка творческих номеров',
        'Музыкальный вечер'
      ]
    },
    '2024-07-11': {
      title: 'День 10',
      events: [
        'День театра',
        'Репетиции спектаклей',
        'Театральные постановки'
      ]
    },
    '2024-07-12': {
      title: 'День 11',
      events: [
        'Экологическая акция',
        'Работа над проектами',
        'Вечер талантов'
      ]
    },
    '2024-07-13': {
      title: 'День 12',
      events: [
        'Спортивный турнир',
        'Творческие мастерские',
        'Вечер дружбы'
      ]
    },
    '2024-07-14': {
      title: 'День 13',
      events: [
        'День науки',
        'Научные эксперименты',
        'Интеллектуальная игра'
      ]
    },
    '2024-07-15': {
      title: 'День 14',
      events: [
        'Фотокросс',
        'Подготовка выставки',
        'Просмотр фильма'
      ]
    },
    '2024-07-16': {
      title: 'День 15',
      events: [
        'День искусств',
        'Художественные мастерские',
        'Выставка работ'
      ]
    },
    '2024-07-17': {
      title: 'День 16',
      events: [
        'Спортивные соревнования',
        'Подготовка к закрытию',
        'Вечер достижений'
      ]
    },
    '2024-07-18': {
      title: 'День 17',
      events: [
        'Защита проектов',
        'Подведение итогов',
        'Праздничный концерт'
      ]
    },
    '2024-07-19': {
      title: 'День 18',
      events: [
        'День памяти',
        'Встреча с выпускниками',
        'Вечер воспоминаний'
      ]
    },
    '2024-07-20': {
      title: 'День 19',
      events: [
        'Подготовка к закрытию',
        'Репетиция финального концерта',
        'Последний огонёк'
      ]
    },
    '2024-07-21': {
      title: 'День 20',
      events: [
        'Заключительный концерт',
        'Награждение участников',
        'Прощальный огонек'
      ]
    },
    '2024-07-22': {
      title: 'День 21',
      events: [
        'Закрытие Сбора',
        'Общее фото',
        'Отъезд участников'
      ]
    }
  }
}

// Добавляем массив с фотографиями после существующих констант
const galleryImages = [
  {
    src: '/images/senior/18nctKRNIVg.jpg',
    alt: 'Сбор - Общее фото',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/3rONH790X0Q.jpg',
    alt: 'Сбор - Вечерний огонёк',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/GlAdsvgT-jw.jpg',
    alt: 'Сбор - Творческие мастерские',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/KQdBLv67oaU.jpg',
    alt: 'Сбор - Спортивные мероприятия',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/Om6LciaxUbA.jpg',
    alt: 'Сбор - Командные игры',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/SkcGdlrC2U8.jpg',
    alt: 'Сбор - Закрытие',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/TsecprwEfyE.jpg',
    alt: 'Сбор - Творческие выступления',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/Z6ptYdYrep4.jpg',
    alt: 'Сбор - Работа в группах',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/cNsaqKY7s4s.jpg',
    alt: 'Сбор - Общие мероприятия',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/ddEMlhHgnpI.jpg',
    alt: 'Сбор - Командные соревнования',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/ifB8z7q3fi4.jpg',
    alt: 'Сбор - Вечерние активности',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/k4MeItVIDZ4.jpg',
    alt: 'Сбор - Мастер-классы',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/mbaY5qbP2BI.jpg',
    alt: 'Сбор - Творческие занятия',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/qJVRq_8LiPU.jpg',
    alt: 'Сбор - Спортивные игры',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/s99lbEbqCX4 (1).jpg',
    alt: 'Сбор - Общее фото участников',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/uIFzt8Bz-6U.jpg',
    alt: 'Сбор - Вечерние мероприятия',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/senior/yVkhz0nQuio.jpg',
    alt: 'Сбор - Финальное мероприятие',
    width: 1920,
    height: 1080
  }
]

function Calendar() {
  const [hoveredDate, setHoveredDate] = useState<string | null>(null)
  const [clickedDate, setClickedDate] = useState<string | null>(null)
  
  // Создаем массив дней июля
  const days = Array.from({ length: 31 }, (_, i) => {
    const date = new Date(2024, 6, i + 1)
    return date.toISOString().split('T')[0]
  })

  const firstDayOfMonth = new Date(2024, 6, 1).getDay()
  const emptyDays = Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 }, (_, i) => i)

  const isEventDay = (date: string) => date in campSchedule.events
  const isInRange = (date: string) => date >= campSchedule.startDate && date <= campSchedule.endDate

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-3xl"
      >
        {/* Месяц и год */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-semibold">Июль 2024</h3>
          <div className="flex items-center space-x-2 text-sm text-white/60">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-primary/20 border-2 border-primary/50 mr-2" />
              Дни Сбора
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-white/5 mr-2" />
              Остальные дни
            </div>
          </div>
        </div>

        {/* Дни недели */}
        <div className="grid grid-cols-7 gap-4 mb-4">
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-white/40">
              {day}
            </div>
          ))}
        </div>

        {/* Календарная сетка */}
        <div className="grid grid-cols-7 gap-4">
          {emptyDays.map(i => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {days.map(date => {
            const day = parseInt(date.split('-')[2])
            const hasEvents = isEventDay(date)
            const isActive = isInRange(date)

            return (
              <motion.div
                key={date}
                className="relative"
                onMouseEnter={() => setHoveredDate(date)}
                onMouseLeave={() => setHoveredDate(null)}
                onClick={() => setClickedDate(date)}
              >
                <div
                  className={`
                    aspect-square rounded-2xl flex items-center justify-center
                    text-lg font-medium relative overflow-hidden
                    ${isActive 
                      ? 'bg-[rgb(15,23,42)] border-2 border-primary/50' 
                      : 'bg-[rgb(15,23,42)]/80 border border-white/10'
                    }
                  `}
                >
                  <span className={isActive ? 'text-white' : 'text-white/60'}>
                    {day}
                  </span>

                  {/* Индикатор событий */}
                  {hasEvents && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                      {campSchedule.events[date].events.slice(0, 3).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 rounded-full bg-primary/70"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Всплывающая подсказка */}
                {(hoveredDate === date && hasEvents) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-72"
                  >
                    <div className="bg-[rgb(15,23,42)] border border-primary/50 rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold">
                          {campSchedule.events[date].title}
                        </h4>
                        <span className="text-sm text-white/40">
                          {new Date(date).toLocaleDateString('ru-RU', { 
                            day: 'numeric',
                            month: 'long'
                          })}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {campSchedule.events[date].events.map((event, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center text-sm text-white/70"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                            {event}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Сообщение 'soon' при клике */}
                {clickedDate === date && !hasEvents && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-32"
                  >
                    <div className="bg-[rgb(15,23,42)] border border-primary/50 rounded-2xl p-4 shadow-xl text-center">
                      <span className="text-white text-sm">soon</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default function SeniorPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <PageHeader
          title="Сбор старшеклассников"
          description="Легендарный летний лагерь АГШШ на Копачёвской поляне"
        />

        {/* Button section */}
        {FORMS_CONFIG.showApplicationButton.senior && (
          <div className="text-center my-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button 
                onClick={() => window.location.href = FORMS_CONFIG.formLinks.senior} 
                className="button-primary"
              >
                Подать заявку
              </button>
            </motion.div>
          </div>
        )}

        {/* Features grid */}
        <section className="my-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Особенности Сбора
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {campFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-8">
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

        {/* Calendar section */}
        <section className="my-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Расписание Сбора
          </h2>
          <Calendar />
        </section>

        {/* Gallery section */}
        <section className="my-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Фотогалерея
          </h2>
          <Gallery 
            images={galleryImages}
            title="Моменты Сбора старшеклассников"
          />
        </section>
      </div>
    </Layout>
  )
} 