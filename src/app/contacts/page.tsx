'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Адрес',
    content: 'г. Архангельск, пр. Троицкий, д. 96, каб. 22',
    link: 'https://maps.google.com/?q=Архангельск,+Троицкий+96'
  },
  {
    icon: Phone,
    title: 'Телефон',
    content: '+7 (8182) 28-58-69',
    link: 'tel:+78182285869'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'agsh@gmail.com',
    link: 'mailto:agsh@gmail.com'
  },
  {
    icon: Clock,
    title: 'Время работы',
    content: 'Пн-Пт: 10:00 - 18:00\nСб-Вс: выходной'
  }
]

const socialLinks = [
  {
    name: 'VK',
    url: 'https://vk.com/agsh',
    description: 'Следите за нашими новостями и мероприятиями'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/agsh',
    description: 'Присоединяйтесь к нашему каналу'
  }
]

export default function ContactsPage() {
  return (
    <Layout>
      <PageHeader
        title="Контакты"
        description="Свяжитесь с нами любым удобным способом"
      />

      {/* Contact cards */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <a
                  href={info.link}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-center p-6"
                >
                  <info.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-white/70 whitespace-pre-line">
                    {info.content}
                  </p>
                </a>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.1234567890!2d40.5164489!3d64.5481012!2z0JDRgNGF0LDQvdCz0LXQu9GM0YHQuiw!5e0!3m2!1sru!2sru!4v1234567890"
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

      {/* Social media section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Мы в социальных сетях
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {social.name}
                  </h3>
                  <p className="text-white/70">
                    {social.description}
                  </p>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Напишите нам
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Тема
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Тема сообщения"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Ваше сообщение..."
                />
              </div>
              <div className="text-center">
                <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors">
                  Отправить сообщение
                </button>
              </div>
            </form>
          </Card>
        </motion.div>
      </section>
    </Layout>
  )
} 