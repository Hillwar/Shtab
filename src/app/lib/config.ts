/**
 * Конфигурация сайта
 * 
 * Этот файл содержит основные настройки сайта, которые можно изменять
 * без необходимости редактирования кода компонентов.
 */

// Настройки навигации - видимость вкладок
export const NAVIGATION_CONFIG = {
  showHistory: false,
  showEducation: true,  // Учеба актива
  showSenior: true,     // Сбор
  showWinter: true,     // Зимовка
  showSolovki: true,
  showContacts: true
}

// Настройки форм для подачи заявок
export const FORMS_CONFIG = {
  // Ссылки на Google Forms
  formLinks: {
    senior: 'https://docs.google.com/forms/d/e/1FAIpQLScu4Mt-6aB-xhSOYElng0ZPhBdFYr9q9mFAwlzmoVWsyQ0aew/viewform',
    education: 'https://forms.gle/example-education-form', // Замените на настоящую ссылку
    winter: 'https://forms.gle/example-winter-form', // Замените на настоящую ссылку
  },
  
  // Настройки отображения кнопок "Подать заявку"
  showApplicationButton: {
    senior: true,
    education: true,
    winter: false
  }
}

// Настройки главной страницы
export const MAIN_PAGE_CONFIG = {
  // Настройка текущей активной подачи заявок
  currentApplication: {
    isActive: true,
    // Возможные значения: 'senior', 'education', 'winter', 'none'
    currentEvent: 'senior',
    // Тексты для разных типов событий
    texts: {
      senior: 'Сейчас идет подача заявок на Сбор!',
      education: 'Сейчас идет подача заявок на Учебу актива!',
      winter: 'Сейчас идет подача заявок на Зимовку!',
      none: ''
    }
  }
} 