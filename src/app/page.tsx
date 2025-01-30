'use client'

import { motion } from 'framer-motion'
import { Layout } from './components/layout/Layout'
import { Card } from './components/ui/Card'

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20" />
        </div>
        
        <div className="container relative z-10 px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <motion.img
              src="/images/agsh-logo.png"
              alt="АГШШ"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="heading-gradient">АГШШ им. А.П. Гайдара</div>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Архангельский городской штаб школьников - молодежная организация 
                с более чем 60-летней историей
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button className="button-primary">
                Присоединиться к нам
              </button>
              <button className="button-secondary">
                Узнать больше
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="heading-gradient">Наши направления</div>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Учеба актива',
                description: 'Программы развития лидерских качеств и навыков организаторской работы',
                icon: '📚'
              },
              {
                title: 'Сборы и лагеря',
                description: 'Традиционные выездные мероприятия для школьников и студентов',
                icon: '🏕️'
              },
              {
                title: 'Волонтерство',
                description: 'Участие в социально значимых проектах и мероприятиях',
                icon: '🤝'
              },
              {
                title: 'Творчество',
                description: 'Развитие творческого потенциала и самовыражения',
                icon: '🎨'
              },
              {
                title: 'Командная работа',
                description: 'Формирование навыков эффективного взаимодействия в команде',
                icon: '👥'
              },
              {
                title: 'Проектная деятельность',
                description: 'Разработка и реализация собственных социальных проектов',
                icon: '🎯'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-card-gradient">
                  <div className="flex flex-col items-center text-center p-6">
                    <span className="text-4xl mb-4">{feature.icon}</span>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Card className="p-8 hover-card-gradient">
              <h2 className="text-3xl font-bold mb-4">
                <div className="heading-gradient">Присоединяйтесь к нам!</div>
              </h2>
              <p className="text-white/70 mb-8">
                Станьте частью нашей дружной команды и реализуйте свой потенциал 
                в атмосфере творчества и развития
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="button-primary">
                  Подать заявку
                </button>
                <button className="button-secondary">
                  Задать вопрос
                </button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
} 