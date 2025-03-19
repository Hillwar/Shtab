import { NAVIGATION_CONFIG } from '../config'

type ConfigKey = keyof typeof NAVIGATION_CONFIG;

/**
 * Полный список навигационных пунктов
 * Отображение контролируется через NAVIGATION_CONFIG
 */
const ALL_NAVIGATION_ITEMS = [
  { title: 'Главная', path: '/' },
  { title: 'История', path: '/history', configKey: 'showHistory' as ConfigKey },
  { title: 'Учеба актива', path: '/education', configKey: 'showEducation' as ConfigKey },
  { title: 'Сбор', path: '/senior', configKey: 'showSenior' as ConfigKey },
  { title: 'Зимовка', path: '/winter', configKey: 'showWinter' as ConfigKey },
  { title: 'Соловки', path: '/solovki', configKey: 'showSolovki' as ConfigKey },
  { title: 'Контакты', path: '/contacts', configKey: 'showContacts' as ConfigKey },
];

export const NAVIGATION = {
  // Фильтруем пункты меню на основе конфигурации
  header: ALL_NAVIGATION_ITEMS.filter(item => {
    // Главная всегда отображается
    if (item.path === '/') return true
    // Для остальных пунктов проверяем настройки видимости
    if (item.configKey && item.configKey in NAVIGATION_CONFIG) {
      return Boolean(NAVIGATION_CONFIG[item.configKey]);
    }
    return true;
  }),
  footer: {
    description: 'Архангельский городской штаб школьников - молодежная организация с более чем 60-летней историей. Развитие, обучение, дружба и счастье людей - наши главные цели.',
    contacts: {
      address: 'г. Архангельск, Набережная Северной Двины д73, 2 этаж, 22 кабинет',
      phone: '+7 (8182) 28-58-69',
      email: ''
    },
    socialLinks: [
      { platform: 'VK', url: 'https://vk.com/shtab_29', icon: 'VK' }
    ]
  }
} 