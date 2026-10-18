// proxy.ts (Next.js 16+) or middleware.ts (Next.js ≤15)
import { clerkMiddleware } from "@clerk/nextjs/server";

// Just export the middleware as-is without route matching logic
export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?! _next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/(.*)",
  ],
};
