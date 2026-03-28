import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of routes that are currently under development (Drafts)
const draftRoutes = [
  '/journal/3',
  '/articles/best-blue-light-blocking-glasses-for-anxiety-and-sleep',
  '/articles/why-your-stomach-gets-upset-before-important-events',
  '/articles/mothers-day-anxiety-why-this-holiday-feels-so-stressful'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the current route is one of the draft routes
  if (draftRoutes.some(route => pathname.startsWith(route))) {
    const devAccess = request.cookies.get('dev_access')?.value;

    // If no dev_access cookie is found, redirect to the home page
    if (devAccess !== 'true') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

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
};
