import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;
  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    !token &&
    (role !== "admin" || "super_admin")
  ) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}
