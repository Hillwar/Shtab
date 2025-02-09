const navigationSchema = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header Navigation',
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
              name: 'link',
              title: 'Link',
              type: 'string'
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number'
            }
          ]
        }
      ]
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Platform',
                  type: 'string'
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'string'
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
          name: 'address',
          title: 'Address',
          type: 'string'
        },
        {
          name: 'phone',
          title: 'Phone',
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

export default navigationSchema 