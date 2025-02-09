const seniorCampSchema = {
  name: 'seniorCamp',
  title: 'Senior Camp',
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
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
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
              name: 'icon',
              title: 'Icon',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'schedule',
      title: 'Schedule',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string'
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'activities',
              title: 'Activities',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}

export default seniorCampSchema 