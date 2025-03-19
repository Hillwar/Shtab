'use client'

import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/ui/PageHeader'
import { Card } from '../components/ui/Card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

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
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Контакты"
          description="Свяжитесь с нами любым удобным способом"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <Card className="p-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Адрес</h3>
              <p className="text-white/70">
                г. Архангельск, Набережная Северной Двины д73,<br />
                2 этаж, 22 кабинет
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <Phone className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Телефон</h3>
              <p className="text-white/70">
                +7 (8182) 28-58-69
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <Mail className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-white/70">
                
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Время работы</h3>
              <p className="text-white/70">
                Пн-Пт: 10:00 - 18:00<br />
                Сб-Вс: выходной
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 glass rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1802.100840646764!2d40.51912837703142!3d64.53327258766328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x441837fb21e7ac7d%3A0x84e7cea46d1dbb46!2z0J3QsNCxLiDQodC10LLQtdGA0L3QvtC5INCU0LLQuNC90YssIDczLCDQkNGA0YXQsNC90LPQtdC70YzRgdC6LCDQkNGA0YXQsNC90LPQtdC70YzRgdC60LDRjyDQvtCx0LsuLCAxNjMwMDA!5e0!3m2!1sru!2sru!4v1709986701021!5m2!1sru!2sru"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

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
      </div>
    </Layout>
  )
} 