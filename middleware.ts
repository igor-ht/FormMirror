import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
	const currentPath = req.nextUrl.pathname;
	if (currentPath !== '/') return NextResponse.redirect(new URL('/', req.url));
	return NextResponse.next();
}

export const config = { matcher: ['/:path*'] };
