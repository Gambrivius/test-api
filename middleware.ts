// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// log all requests
export function middleware(request: NextRequest) {
  console.log("TEST");
  console.log(`${request.method} ${request.nextUrl.pathname}`);
  return NextResponse.next();
}
