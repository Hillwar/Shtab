const mainPageSchema = {
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'image',
          title: 'Логотип',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'buttons',
          title: 'Кнопки',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Текст',
                  type: 'string'
                },
                {
                  name: 'link',
                  title: 'Ссылка',
                  type: 'string'
                },
                {
                  name: 'isPrimary',
                  title: 'Основная кнопка',
                  type: 'boolean'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'directions',
      title: 'Направления',
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
              title: 'Иконка',
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
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'string'
        }
      ]
    }
  ]
}

export default mainPageSchema 