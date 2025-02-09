import { useState } from 'react'
import { motion } from 'framer-motion'
import { submitForm } from '@/app/lib/sanity'

interface FormField {
  name: string
  label: string
  type: string
  required?: boolean
  options?: { label: string; value: string }[]
}

interface FormData {
  formType: string
  name: string
  email: string
  phone?: string
  message?: string
  [key: string]: string | undefined
}

interface ApplicationFormProps {
  formType: string
  title: string
  description?: string
  additionalFields?: FormField[]
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export function ApplicationForm({
  formType,
  title,
  description,
  additionalFields = [],
  onSuccess,
  onError
}: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState<FormData>({
    formType: '',
    name: '',
    email: '',
  })

  const defaultFields: FormField[] = [
    { name: 'name', label: 'Имя', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Телефон', type: 'tel', required: true },
    { name: 'message', label: 'Сообщение', type: 'textarea' }
  ]

  const allFields = [...defaultFields, ...additionalFields]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await submitForm({
        ...formData,
        formType
      })
      setSubmitStatus('success')
      setFormData({
        formType: '',
        name: '',
        email: '',
      })
      onSuccess?.()
    } catch (error) {
      setSubmitStatus('error')
      onError?.(error as Error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="glass-card p-8">
        <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
        {description && (
          <p className="text-white/70 text-center mb-8">{description}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {allFields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-white/70 mb-2">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  rows={4}
                  className="glass-input"
                />
              ) : field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  className="glass-input"
                >
                  <option value="">Выберите...</option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  className="glass-input"
                />
              )}
            </div>
          ))}

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-primary relative"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Отправка...
                </span>
              ) : (
                'Отправить заявку'
              )}
            </button>
          </div>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-500"
            >
              Заявка успешно отправлена!
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-500"
            >
              Произошла ошибка при отправке. Пожалуйста, попробуйте снова.
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  )
}