import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === '/become-partner') {
    const type = searchParams.get('type');
    
    if (type === 'reseller') {
      return NextResponse.redirect(new URL('/become-reseller', request.url));
    } else if (type === 'institute') {
      return NextResponse.redirect(new URL('/become-institute-partner', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/become-partner'
};