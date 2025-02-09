import { NextResponse } from 'next/server'
import { client } from '@/app/lib/sanity'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Basic validation
    if (!formData.formType || !formData.name || !formData.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create form submission in Sanity
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

    const result = await client.create(doc)

    // Send email notification (optional)
    if (process.env.NOTIFICATION_EMAIL) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'АГШШ <noreply@agsh.ru>',
          to: process.env.NOTIFICATION_EMAIL,
          subject: `Новая заявка: ${formData.formType}`,
          html: `
            <h2>Новая заявка</h2>
            <p><strong>Тип:</strong> ${formData.formType}</p>
            <p><strong>Имя:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Телефон:</strong> ${formData.phone}</p>
            <p><strong>Сообщение:</strong> ${formData.message}</p>
          `
        })
      })
    }

    return NextResponse.json({ success: true, id: result._id })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 