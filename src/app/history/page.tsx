'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import { useState } from 'react'

interface TimelineEvent {
  id: string
  year: string
  date?: string
  title: string
  description: string
}

interface TimelineDecade {
  decade: string
  events: TimelineEvent[]
}

const timelineData: TimelineDecade[] = [
  {
    decade: '1960-е',
    events: [
      {
        id: '1961-1',
        year: '1961',
        date: '8 октября',
        title: 'Основание АГШШ',
        description: 'Во Дворце пионеров состоялось первое заседание городского пионерского штаба. На нем присутствовало 9 пионеров из 8 школ города, которых собрали здесь заведующая отделом учащейся молодежи горкома ВЛКСМ Н. В. Батыгина и инженер В. А. Сотрудинов — первый руководитель штаба.'
      },
      {
        id: '1961-2',
        year: '1961',
        date: '22 октября',
        title: 'Формирование структуры',
        description: 'На заседании штаба была определена структура штаба и избраны начальник штаба В. Василенко и комиссар штаба Т. Будник.'
      },
      {
        id: '1962',
        year: '1962',
        date: '19 мая',
        title: 'Первая пионерская маевка',
        description: 'Городской штаб школьников проводит первую пионерскую маевку отрядов «Спутников семилетки» в д. Соломаты Архангельской области.'
      },
      {
        id: '1964-1',
        year: '1964',
        date: '3-8 января',
        title: 'Начало коммунарского движения',
        description: 'Делегация членов штаба побывала на 5 коммунарском сборе — «Зимовке» во Фрунзенской коммуне города Ленинграда.'
      },
      {
        id: '1964-2',
        year: '1964',
        date: '24-28 марта',
        title: 'Первый коммунарский сбор',
        description: 'Состоялся первый коммунарский сбор школьников города Архангельска, в котором принимало участие 60 человек. Задача сбора — проверка системы самоуправления.'
      },
      {
        id: '1964-3',
        year: '1964',
        date: '5-20 июля',
        title: 'Второй коммунарский сбор',
        description: 'Впервые сбор проходил на берегу Северной Двины в селе Копачево. В нем приняло участие 150 человек, в том числе гости из Онеги, Вельска, Яренска. Был установлен деловой контакт с колхозом «Путь к коммунизму».'
      },
      {
        id: '1965',
        year: '1965',
        date: '8 октября',
        title: 'Присвоение имени А.П. Гайдара',
        description: 'За активную работу со школьниками городскому штабу школьников присвоено имя писателя Аркадия Петровича Гайдара. Этому предшествовала большая работа по сбору материала о жизни и деятельности А. П. Гайдара.'
      },
      {
        id: '1969',
        year: '1969',
        date: '3 ноября',
        title: 'Вручение знамени',
        description: 'За активную работу штабу было вручено знамя горкома комсомола, которое является знаменем АГШШ и по сей день.'
      }
    ]
  },
  {
    decade: '1970-е',
    events: [
      {
        id: '1970',
        year: '1970',
        title: 'Развитие традиций',
        description: 'Формирование основных традиций сборов: система отрядов, коллективные творческие дела, вечерние огоньки.'
      }
    ]
  },
  {
    decade: '1980-е',
    events: [
      {
        id: '1981',
        year: '1981',
        date: 'Октябрь',
        title: '20-летие штаба',
        description: 'Штабу исполнилось 20 лет. У штабистов появился свой значок, который стал одной из наград члена штаба.'
      }
    ]
  },
  {
    decade: '1990-е',
    events: [
      {
        id: '1990',
        year: '1990',
        date: '8 октября',
        title: 'Новый статус',
        description: 'АГШШ был юридически оформлен в Общественную организацию «Архангельский городской штаб школьников им. А. П. Гайдара».'
      },
      {
        id: '1995',
        year: '1995',
        title: 'Переименование сборов',
        description: 'После первой половины 37 сбора было принято решение переименовать Коммунарский сбор в Сбор Старшеклассников.'
      }
    ]
  },
  {
    decade: '2020-е',
    events: [
      {
        id: '2021',
        year: '2021',
        date: '8 октября',
        title: '60-летие АГШШ',
        description: 'Штаб отметил свое 60-летие, продолжая активно действовать и творчески развиваться, сохраняя традиции первых поколений штабистов.'
      },
      {
        id: '2024',
        year: '2024',
        title: 'Современная деятельность',
        description: 'АГШШ продолжает проводить традиционные мероприятия: Сборы старшеклассников, Зимовку, Учебу актива и Соловецкую экспедицию, развивая и преумножая традиции организации.'
      }
    ]
  }
]

export default function HistoryPage() {
  const [expandedDecade, setExpandedDecade] = useState<string | null>(null)
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  return (
    <Layout>
      <PageHeader
        title="История АГШШ"
        description="Более 60 лет развития, обучения и дружбы"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Описание методики */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Методика работы</h2>
            <p className="text-white/80 mb-4">
              АГШШ работает по методике коллективного творческого воспитания (коммунарской методике), разработанной академиком И.П. Ивановым. 
              Основные принципы методики:
            </p>
            <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
              <li>Коллективная организация деятельности</li>
              <li>Коллективное творчество</li>
              <li>Коллективное целеполагание</li>
              <li>Ситуации-образцы</li>
              <li>Эмоциональное насыщение жизни коллектива</li>
              <li>Общественная направленность деятельности</li>
            </ul>
            <p className="text-white/80">
              Эта методика позволяет эффективно развивать лидерские качества, творческие способности и социальную активность участников.
            </p>
          </div>
        </div>

        {/* Основные направления */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Основные направления деятельности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Сбор старшеклассников</h3>
                <p className="text-white/80 mb-6">
                  Традиционное летнее мероприятие на Копачёвской поляне, включающее образовательную программу, творческие мастерские и коллективные дела.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Зимовка</h3>
                <p className="text-white/80 mb-6">
                  Зимний лагерь с насыщенной программой, направленной на развитие лидерских качеств и командной работы.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Учеба актива</h3>
                <p className="text-white/80 mb-6">
                  Программа подготовки будущих организаторов и лидеров, включающая тренинги, мастер-классы и практическую работу.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Соловецкая экспедиция</h3>
                <p className="text-white/80 mb-6">
                  Исследовательская экспедиция на Соловецкие острова, сочетающая изучение истории, природы и культуры архипелага.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Таймлайн */}
        <div className="relative max-w-4xl mx-auto">
          {/* Линия времени */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform -translate-x-1/2" />

          <div className="space-y-16">
            {timelineData.map((decade) => (
              <motion.div
                key={decade.decade}
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Десятилетие */}
                <motion.button
                  className="relative z-10 w-full text-left"
                  onClick={() => setExpandedDecade(expandedDecade === decade.decade ? null : decade.decade)}
                >
                  <div className="flex items-center justify-center mb-8">
                    <div className="text-3xl font-bold bg-[rgb(15,23,42)] border-2 border-white/20 text-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                      {decade.decade}
                    </div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {expandedDecade === decade.decade && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-12"
                    >
                      {decade.events.map((event, index) => (
                        <motion.div
                          key={event.id}
                          className="relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                            <div className="text-xl font-bold bg-[rgb(15,23,42)] border-2 border-white/20 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                              {event.year}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-32">
                            {index % 2 === 0 ? (
                              <>
                                <motion.button
                                  className="glass-card p-6 cursor-pointer hover:scale-[1.02] transition-transform relative z-20"
                                  onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                                >
                                  {event.date && (
                                    <p className="text-sm text-white/60 mb-6 text-center border-b border-white/10 pb-4">{event.date}</p>
                                  )}
                                  <h3 className="text-xl font-bold mb-2 text-gradient">{event.title}</h3>
                                  <AnimatePresence>
                                    {expandedEvent === event.id && (
                                      <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-white/80"
                                      >
                                        {event.description}
                                      </motion.p>
                                    )}
                                  </AnimatePresence>
                                </motion.button>
                                <div />
                              </>
                            ) : (
                              <>
                                <div />
                                <motion.button
                                  className="glass-card p-6 cursor-pointer hover:scale-[1.02] transition-transform relative z-20"
                                  onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                                >
                                  {event.date && (
                                    <p className="text-sm text-white/60 mb-6 text-center border-b border-white/10 pb-4">{event.date}</p>
                                  )}
                                  <h3 className="text-xl font-bold mb-2 text-gradient">{event.title}</h3>
                                  <AnimatePresence>
                                    {expandedEvent === event.id && (
                                      <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-white/80"
                                      >
                                        {event.description}
                                      </motion.p>
                                    )}
                                  </AnimatePresence>
                                </motion.button>
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