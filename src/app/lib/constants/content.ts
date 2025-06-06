import { MAIN_PAGE_CONFIG } from '../config'

export const IMAGES = {
  hero: {
    src: '/images/agsh-logo.png',
    width: 400,
    height: 400,
  },
  seniorCamp: {
    src: '/images/senior-camp.jpg',
    width: 1920,
    height: 1080,
  },
  winterCamp: {
    src: '/images/winter-camp.jpg',
    width: 1920,
    height: 1080,
  },
  solovki: {
    src: '/images/solovki.jpg',
    width: 1920,
    height: 1080,
  },
  history: {
    '1963': {
      src: '/images/history/1963.jpg',
      width: 800,
      height: 600,
    },
    '2023': {
      src: '/images/history/2023.jpg',
      width: 800,
      height: 600,
    },
  },
}

export const MAIN_PAGE = {
  hero: {
    title: 'АГШШ им. А.П. Гайдара',
    description: 'Архангельский городской штаб школьников - молодежная организация с более чем 60-летней историей. Развитие, обучение, дружба и счастье людей - наши главные цели.',
    image: IMAGES.hero,
    currentApplication: {
      isActive: MAIN_PAGE_CONFIG.currentApplication.isActive,
      text: MAIN_PAGE_CONFIG.currentApplication.texts[MAIN_PAGE_CONFIG.currentApplication.currentEvent as keyof typeof MAIN_PAGE_CONFIG.currentApplication.texts],
      eventType: MAIN_PAGE_CONFIG.currentApplication.currentEvent === 'none' ? '' : MAIN_PAGE_CONFIG.currentApplication.currentEvent
    }
  },
  directions: [
    {
      title: 'Учеба актива',
      description: 'Программа развития организаторских качеств',
      icon: '📚',
      link: '/education',
      order: 1
    },
    {
      title: 'Зимовка',
      description: 'Зимний лагерь для учебы актива штаба',
      icon: '❄️',
      link: '/winter',
      order: 2
    },
    {
      title: 'Сбор',
      description: 'Традиционный Сбор старшеклассников на Копачёвской поляне',
      icon: '🏕️',
      link: '/senior',
      order: 3
    },
    {
      title: 'Соловки',
      description: 'Волонтерство на Соловецких островах',
      icon: '⛵',
      link: '/solovki',
      order: 4
    }
  ]
}

export const HISTORY = {
  decades: [
    {
      decade: '1960-е',
      startYear: 1960,
      events: [
        {
          year: 1963,
          title: 'Основание АГШШ',
          description: 'Создание Архангельского городского штаба школьников',
          image: IMAGES.history['1963']
        }
      ]
    },
    {
      decade: '2020-е',
      startYear: 2020,
      events: [
        {
          year: 2023,
          title: '60 лет АГШШ',
          description: 'Юбилей организации',
          image: IMAGES.history['2023']
        }
      ]
    }
  ]
}

export const SENIOR_CAMP = {
  title: 'Сбор старшеклассников',
  description: 'Палаточный летний сбор АГШШ на Копачёвской поляне',
  features: [
    {
      title: 'Традиции сбора',
      description: 'Уникальные традиции, передающиеся из поколения в поколение',
      icon: '🔥'
    },
    {
      title: 'Образовательная программа',
      description: 'Мастер-классы, тренинги и семинары',
      icon: '📚'
    }
  ],
  schedule: [
    {
      day: 'День 1',
      title: 'Заезд',
      activities: 'Размещение, знакомство с территорией'
    }
  ]
}

export const WINTER_CAMP = {
  title: 'Зимовка',
  description: 'Традиционное зимнее мероприятие АГШШ',
  program: [
    {
      title: 'Образовательные мастер-классы',
      icon: '❄️',
      description: 'Интенсивное обучение в зимней атмосфере'
    }
  ],
  requirements: [
    { item: 'Теплая одежда' },
    { item: 'Хорошее настроение' }
  ]
}

export const SOLOVKI = {
  title: 'Соловецкая экспедиция',
  description: 'Исследовательская экспедиция на Соловецкие острова',
  program: [
    {
      title: 'История и культура',
      description: 'Изучение богатой истории Соловецкого архипелага'
    }
  ],
  location: {
    lat: 65.0254,
    lng: 35.7139,
    zoom: 12
  }
}

export const ACTIVITIES = {
  title: 'Учеба актива',
  description: 'Программа развития организаторских качеств',
  schedule: [
    {
      day: 'Понедельник',
      time: '16:00 - 18:00',
      activity: 'Школа актива'
    }
  ],
  specialEvents: [
    {
      title: 'Осенние сборы',
      date: 'Октябрь',
      description: 'Интенсивное обучение'
    }
  ]
} 