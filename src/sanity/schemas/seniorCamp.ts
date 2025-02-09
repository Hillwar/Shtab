export default {
  name: 'seniorCamp',
  title: 'Сбор старшеклассников',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text'
    },
    {
      name: 'features',
      title: 'Особенности сбора',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Название',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Описание',
              type: 'text'
            },
            {
              name: 'icon',
              title: 'Иконка (эмодзи)',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'schedule',
      title: 'Программа сбора',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'День',
              type: 'string'
            },
            {
              name: 'title',
              title: 'Название',
              type: 'string'
            },
            {
              name: 'activities',
              title: 'Активности',
              type: 'array',
              of: [{ type: 'string' }]
            }
          ]
        }
      ]
    }
  ]
} 