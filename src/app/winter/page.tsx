'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import Image from 'next/image';

export default function WinterPage() {
  return (
    <Layout>
      <PageHeader
        title="Зимовка"
        description="Традиционное зимнее мероприятие АГШШ"
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
              <h2 className="text-2xl font-bold mb-4 text-gradient">О мероприятии</h2>
              <p className="text-white/80">
                Зимовка - это уникальное мероприятие, которое проводится в зимний период.
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
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Атмосфера зимовки</h3>
              <p className="text-white/80">
                Уютная атмосфера, теплое общение и активный отдых - все это создает
                незабываемые впечатления и помогает участникам раскрыть свой потенциал.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Что взять с собой</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Теплую одежду</li>
                <li>• Спортивную форму</li>
                <li>• Хорошее настроение</li>
                <li>• Желание учиться новому</li>
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
              Зимовка АГШШ - это возможность провести время с пользой, найти новых друзей
              и получить незабываемые впечатления.
            </p>
            <button className="button-primary">Подать заявку</button>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
} 