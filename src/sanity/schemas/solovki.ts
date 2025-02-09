export default {
  name: 'solovki',
  title: 'Соловки',
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
            }
          ]
        }
      ]
    },
    {
      name: 'location',
      title: 'Расположение на карте',
      type: 'object',
      fields: [
        {
          name: 'lat',
          title: 'Широта',
          type: 'number'
        },
        {
          name: 'lng',
          title: 'Долгота',
          type: 'number'
        },
        {
          name: 'zoom',
          title: 'Масштаб',
          type: 'number'
        }
      ]
    }
  ]
} 