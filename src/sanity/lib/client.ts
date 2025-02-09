import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { cache } from 'react'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-13',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
  stega: {
    enabled: process.env.NODE_ENV === 'development',
    studioUrl: '/studio',
  },
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export const getHistory = cache(async () => {
  return client.fetch(
    `*[_type == "decade"] | order(startYear asc) {
      _id,
      decade,
      events[] {
        _key,
        year,
        title,
        description,
        image
      }
    }`,
    {},
    {
      next: {
        tags: ['decade']
      }
    }
  )
})

export const getMainPage = cache(async () => {
  return client.fetch(
    `*[_type == "mainPage"][0] {
      hero {
        title,
        description,
        image,
        buttons[] {
          text,
          link,
          isPrimary
        }
      },
      directions[] {
        _key,
        title,
        description,
        icon,
        link,
        order
      }
    }`,
    {},
    {
      next: {
        tags: ['mainPage']
      }
    }
  )
})

export const getActivities = cache(async () => {
  return client.fetch(
    `*[_type == "activities"][0] {
      title,
      description,
      schedule[] {
        _key,
        day,
        time,
        activity
      },
      specialEvents[] {
        _key,
        title,
        date,
        description
      }
    }`,
    {},
    {
      next: {
        tags: ['activities']
      }
    }
  )
})

export const getWinterCamp = cache(async () => {
  return client.fetch(
    `*[_type == "winterCamp"][0] {
      title,
      description,
      program[] {
        _key,
        title,
        icon,
        description
      },
      requirements[] {
        _key,
        item
      },
      images[] {
        _key,
        image,
        caption
      }
    }`,
    {},
    {
      next: {
        tags: ['winterCamp']
      }
    }
  )
})

export const getSeniorCamp = cache(async () => {
  return client.fetch(
    `*[_type == "seniorCamp"][0] {
      title,
      description,
      features[] {
        _key,
        title,
        description,
        icon
      },
      schedule[] {
        _key,
        day,
        title,
        activities
      }
    }`,
    {},
    {
      next: {
        tags: ['seniorCamp']
      }
    }
  )
})

export const getSolovki = cache(async () => {
  return client.fetch(
    `*[_type == "solovki"][0] {
      title,
      description,
      program[] {
        _key,
        title,
        description
      },
      location {
        lat,
        lng,
        zoom
      }
    }`,
    {},
    {
      next: {
        tags: ['solovki']
      }
    }
  )
})

export const getNavigation = cache(async () => {
  return client.fetch(
    `*[_type == "navigation"][0] {
      header[] {
        title,
        link,
        order
      },
      footer {
        description,
        socialLinks[] {
          platform,
          url,
          icon
        },
        address,
        phone,
        email
      }
    }`,
    {},
    {
      next: {
        tags: ['navigation']
      }
    }
  )
})
