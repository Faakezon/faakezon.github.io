// middleware.ts
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["sv", "en"],
  defaultLocale: "sv",
  localeDetection: true, // automatically detect user locale
});

export const config = {
  // Match everything except _next and static files
  matcher: ["/((?!_next|.*\\..*).*)"], // Apply to all routes except _next
};
