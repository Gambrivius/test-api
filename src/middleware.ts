// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// log all requests
export default async function asyncmiddleware(request: NextRequest) {
  console.log("TEST");
  console.log(`${request.method} ${request.nextUrl.pathname}`);

  console.log("request", request);

  return NextResponse.next();
}
