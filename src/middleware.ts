import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware для перенаправления всех запросов (кроме главной страницы) на заглушку
export function middleware(request: NextRequest) {
  // Получаем текущий хост
  const hostname = request.headers.get('host') || ''
  
  // Проверяем, что это основной домен (не dev-версия)
  const isMainDomain = hostname === 'shtab.vercel.app' || process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  
  // Если это основной домен и не API запрос
  if (isMainDomain && !request.nextUrl.pathname.startsWith('/api')) {
    // Разрешаем доступ только к главной странице и статическим файлам
    if (
      request.nextUrl.pathname !== '/' && 
      !request.nextUrl.pathname.startsWith('/_next') && 
      !request.nextUrl.pathname.startsWith('/images') &&
      !request.nextUrl.pathname.startsWith('/fonts')
    ) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  
  return NextResponse.next()
}

// Указываем, для каких путей должен срабатывать middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 