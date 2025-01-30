'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'

export default function MeetingsPage() {
  return (
    <Layout>
      <PageHeader
        title="Сборы"
        description="Традиционные выездные мероприятия для школьников и студентов"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Основная информация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-gradient">О сборах</h2>
              <p className="text-white/80">
                Сборы АГШШ - это уникальный формат выездных мероприятий, где участники
                погружаются в атмосферу творчества, развития и дружбы. Это возможность
                получить новые знания, навыки и незабываемые впечатления.
              </p>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Программа сборов</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🎓</span>
                  <span>Образовательные мастер-классы</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🎭</span>
                  <span>Творческие мастерские</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🤝</span>
                  <span>Командообразующие игры</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🎪</span>
                  <span>Вечерние мероприятия</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Дополнительная информация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Особенности сборов</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🌟</span>
                  <span>Уникальная атмосфера</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">👥</span>
                  <span>Новые знакомства</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">💡</span>
                  <span>Развитие навыков</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🎉</span>
                  <span>Яркие впечатления</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Что взять с собой</h2>
              <ul className="space-y-3 text-white/80">
                <li>• Сменную одежду и обувь</li>
                <li>• Предметы личной гигиены</li>
                <li>• Блокнот и ручку</li>
                <li>• Хорошее настроение</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Присоединяйтесь к нам!</h2>
            <p className="text-white/80 mb-6">
              Сборы АГШШ - это возможность провести время с пользой, найти новых друзей
              и получить незабываемые впечатления.
            </p>
            <button className="button-primary">Подать заявку</button>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
} 