// Absolute URL of the deployed site, used for metadata, the sitemap and share previews.
// Set NEXT_PUBLIC_SITE_URL once you have a custom domain; on Vercel it falls back to
// the production deployment URL.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteName = "Jhondel Caranay";

export const siteTitle = "Jhondel Caranay | Full-Stack Web Developer";

export const siteDescription =
  "Full-stack web developer building business software: ERPs, POS and inventory systems with React, Next.js, Express, TypeScript and PostgreSQL, from the database to deployment.";
