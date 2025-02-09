export default {
  name: 'navigation',
  title: 'Навигация',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Верхнее меню',
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
              name: 'link',
              title: 'Ссылка',
              type: 'string'
            },
            {
              name: 'order',
              title: 'Порядок',
              type: 'number'
            }
          ]
        }
      ]
    },
    {
      name: 'footer',
      title: 'Подвал',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Описание',
          type: 'text'
        },
        {
          name: 'socialLinks',
          title: 'Социальные сети',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Платформа',
                  type: 'string'
                },
                {
                  name: 'url',
                  title: 'Ссылка',
                  type: 'string'
                },
                {
                  name: 'icon',
                  title: 'Иконка',
                  type: 'string'
                }
              ]
            }
          ]
        },
        {
          name: 'address',
          title: 'Адрес',
          type: 'text'
        },
        {
          name: 'phone',
          title: 'Телефон',
          type: 'string'
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string'
        }
      ]
    }
  ]
} 