// Absolute URL of the deployed site, used for metadata, the sitemap and share previews.
// On Vercel this is the production URL (the free *.vercel.app domain), so nothing needs
// setting. NEXT_PUBLIC_SITE_URL overrides it, e.g. for a custom domain; `||` so a blank
// value still falls back.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteName = "Jhondel Caranay";

export const siteTitle = "Jhondel Caranay | Full-Stack Web Developer";

export const siteDescription =
  "Full-stack web developer building business software: ERPs, POS and inventory systems with React, Next.js, Express, TypeScript and PostgreSQL, from the database to deployment.";
