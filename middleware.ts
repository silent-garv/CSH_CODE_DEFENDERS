import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public paths that don't require authentication
  const PUBLIC_PATHS = [
    '/login',
    '/api/auth/login',
    '/api/auth/callback',
    '/api/auth/logout',
  ];

  // Skip middleware for public paths
  if (
    PUBLIC_PATHS.some(path => pathname.startsWith(path)) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/public') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check for auth session cookie
  const authCookie = request.cookies.get('appSession');
  
  if (!authCookie) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('returnTo', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication routes)
     * - _next (Next.js internals)
     * - favicon.ico (browser icon)
     * - public (public files)
     */
    '/((?!api/auth|_next|favicon.ico|public).*)',
  ],
};
