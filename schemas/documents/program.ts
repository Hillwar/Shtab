import { Rule } from '@sanity/types'

const programSchema = {
  name: 'program',
  title: 'Programs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }
  ]
}

export default programSchema 