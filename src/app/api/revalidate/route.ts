import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    if (body._type) {
      revalidateTag(body._type)
      return NextResponse.json({ revalidated: true, now: Date.now() })
    }
    
    return NextResponse.json({ revalidated: false, now: Date.now() })
  } catch {
    return NextResponse.json({ revalidated: false, now: Date.now() })
  }
} 