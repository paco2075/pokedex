import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/firebase';

// Array of paths that require authentication
const protectedPaths = ['/team-builder'];

export async function middleware(request: NextRequest) {
  const user = auth.currentUser;
  const path = request.nextUrl.pathname;

  // Check if the path requires authentication
  const isProtectedPath = protectedPaths.some(protectedPath => 
    path.startsWith(protectedPath)
  );

  if (isProtectedPath && !user) {
    // Redirect to login page if user is not authenticated
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', path);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
