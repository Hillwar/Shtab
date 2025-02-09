import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { Rule } from '@sanity/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-13'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Typed fetch functions
export async function getPage(slug: string) {
  return client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}

export async function getEvent(slug: string) {
  return client.fetch(`*[_type == "event" && slug.current == $slug][0]`, { slug })
}

export async function getEvents(type?: string) {
  const filter = type 
    ? `*[_type == "event" && eventType == $type] | order(startDate desc)`
    : `*[_type == "event"] | order(startDate desc)`
  return client.fetch(filter, { type })
}

interface FormData {
  formType: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  [key: string]: any;
}

// Form submission function
export async function submitForm(formData: FormData) {
  const doc = {
    _type: 'form',
    formType: formData.formType,
    submittedAt: new Date().toISOString(),
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    additionalFields: Object.entries(formData)
      .filter(([key]) => !['formType', 'name', 'email', 'phone', 'message'].includes(key))
      .map(([fieldName, fieldValue]) => ({
        fieldName,
        fieldValue: String(fieldValue)
      })),
    status: 'new'
  }

  return client.create(doc)
} 