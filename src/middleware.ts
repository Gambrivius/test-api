// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// log all requests
export function middleware(request: NextRequest) {
  console.log("TEST");
  console.log(`${request.method} ${request.nextUrl.pathname}`);
  // get the origin
  const origin = request.headers.get("origin");
  console.log("origin", origin);

  // get the host name
  const host = request.headers.get("host");
  console.log("host", host);
  console.log("body", request.body);

  return NextResponse.next();
}
