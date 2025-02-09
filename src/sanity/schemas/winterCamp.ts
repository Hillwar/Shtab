export default {
  name: 'winterCamp',
  title: 'Зимовка',
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
      name: 'program',
      title: 'Программа',
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
      name: 'requirements',
      title: 'Что взять с собой',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'images',
      title: 'Фотографии',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Изображение',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'caption',
              title: 'Подпись',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
} 