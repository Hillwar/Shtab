'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'

export default function ActivityPage() {
  return (
    <Layout>
      <PageHeader
        title="Учеба актива"
        description="Программы развития организаторских качеств и навыков организаторской работы"
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
              <h2 className="text-2xl font-bold mb-4 text-gradient">О программе</h2>
              <p className="text-white/80">
                Учеба актива - это комплексная программа, направленная на развитие
                организаторских качеств, организаторских способностей и навыков работы в команде.
                Участники получают практические знания и опыт, необходимые для успешной
                общественной деятельности.
              </p>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Направления обучения</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center space-x-2">
                  <span className="text-xl">👥</span>
                  <span>Лидерство и командообразование</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">📊</span>
                  <span>Проектный менеджмент</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🎯</span>
                  <span>Целеполагание и планирование</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🗣️</span>
                  <span>Публичные выступления</span>
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
              <h2 className="text-2xl font-bold mb-4 text-gradient">Формат обучения</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🎓</span>
                  <span>Интерактивные семинары</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🤝</span>
                  <span>Практические занятия</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">🎮</span>
                  <span>Деловые игры</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">📝</span>
                  <span>Проектная работа</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Результаты обучения</h2>
              <ul className="space-y-3 text-white/80">
                <li>• Развитие организаторских качеств</li>
                <li>• Навыки организации мероприятий</li>
                <li>• Опыт командной работы</li>
                <li>• Практика публичных выступлений</li>
                <li>• Сертификат о прохождении программы</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
} 