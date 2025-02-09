export default {
  name: 'activities',
  title: 'Учеба актива',
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
      name: 'schedule',
      title: 'Расписание занятий',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'День недели',
              type: 'string'
            },
            {
              name: 'time',
              title: 'Время',
              type: 'string'
            },
            {
              name: 'activity',
              title: 'Занятие',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'specialEvents',
      title: 'Специальные мероприятия',
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
              name: 'date',
              title: 'Дата/Период',
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
    }
  ]
} 