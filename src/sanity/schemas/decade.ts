const decadeSchema = {
  name: 'decade',
  title: 'Decade',
  type: 'document',
  fields: [
    {
      name: 'decade',
      title: 'Десятилетие',
      type: 'string',
      description: 'Например: 1960-е'
    },
    {
      name: 'startYear',
      title: 'Начальный год',
      type: 'number',
      description: 'Для сортировки (например: 1960)'
    },
    {
      name: 'events',
      title: 'События',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              title: 'Год',
              type: 'number'
            },
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
              name: 'image',
              title: 'Изображение',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ]
    }
  ]
}

export default decadeSchema 