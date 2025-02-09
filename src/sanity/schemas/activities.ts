const activitiesSchema = {
  name: 'activities',
  title: 'Activities',
  type: 'document',
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

export default activitiesSchema 