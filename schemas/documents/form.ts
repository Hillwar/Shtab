import { Rule } from '@sanity/types'

const formSchema = {
  name: 'form',
  title: 'Forms',
  type: 'document',
  fields: [
    {
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      options: {
        list: [
          { title: 'Заявка на сбор', value: 'senior-camp' },
          { title: 'Заявка на зимовку', value: 'winter-camp' },
          { title: 'Заявка на Соловки', value: 'solovki' },
          { title: 'Заявка на учебу актива', value: 'education' },
          { title: 'Контактная форма', value: 'contact' }
        ]
      },
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 4
    },
    {
      name: 'additionalFields',
      title: 'Additional Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'fieldName',
              title: 'Field Name',
              type: 'string'
            },
            {
              name: 'fieldValue',
              title: 'Field Value',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Новая', value: 'new' },
          { title: 'В обработке', value: 'processing' },
          { title: 'Завершена', value: 'completed' },
          { title: 'Отклонена', value: 'rejected' }
        ]
      },
      initialValue: 'new'
    },
    {
      name: 'notes',
      title: 'Internal Notes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'note',
              title: 'Note',
              type: 'text'
            },
            {
              name: 'addedBy',
              title: 'Added By',
              type: 'string'
            },
            {
              name: 'addedAt',
              title: 'Added At',
              type: 'datetime'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'formType'
    }
  }
}

export default formSchema 