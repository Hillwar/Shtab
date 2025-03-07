# Сайт АГШШ

Официальный сайт Архангельского городского штаба школьников имени А.П. Гайдара.

## Версии сайта

Проект имеет две версии:

- **Основная версия**: [shtab.vercel.app](https://shtab.vercel.app) - содержит заглушку о скором запуске сайта
- **Development версия**: [dev-shtab.vercel.app](https://dev-shtab.vercel.app) - полная версия сайта с доступом ко всем разделам

> **Примечание**: Вы сейчас находитесь в ветке `develop`, которая содержит полную версию сайта.

## Структура проекта

Проект разработан с использованием Next.js и Tailwind CSS. Основные разделы сайта:

- История АГШШ
- Сбор старшеклассников
- Зимовка
- Учеба актива
- Соловецкая экспедиция
- Контакты

## Ветки репозитория

- **main** - основная ветка с заглушкой, деплоится на shtab.vercel.app
- **develop** - ветка разработки с полной версией сайта, деплоится на dev-shtab.vercel.app

## Технологии

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel (хостинг)

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка проекта
npm run build

# Запуск собранного проекта
npm start
```

## Деплой

Деплой происходит автоматически при пуше в соответствующие ветки:
- Пуш в ветку `main` -> деплой на shtab.vercel.app
- Пуш в ветку `develop` -> деплой на dev-shtab.vercel.app
