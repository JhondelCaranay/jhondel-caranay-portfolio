# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build (also the main type-check, since there is no separate `tsc` script)
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript). `next lint` no longer exists in Next 16.
- `npx prettier --write <file>` — format; `prettier-plugin-tailwindcss` sorts Tailwind classes

There is no test suite.

## Architecture

This is a single-page personal portfolio built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3, and Framer Motion. It is deployed on Vercel.

- **One route.** `app/page.tsx` stacks every section (Banner, About, WorkExperiences, Projects, Services, Contact, Footer) inside one scroll container, with fixed `LeftSide`/`RightSide` rails. The `div` in `page.tsx` handles scrolling, not `window`. Navigation uses in-page anchors: each section's root element has an `id` that must match `utils/nav-links.ts`.
- **Content is data-driven.** All copy lives in `utils/data.tsx`: typewriter lines, skill lists, social links, work experience, projects, and services. Their shapes are defined in `utils/types.ts`. To add or edit a project, job, or service, edit `data.tsx`, not the components. Project images go in `public/images/` and are referenced as `/images/...`.
- **Section headings** use `SectionTitle` with a Roman-numeral `titleNumber` (e.g. Projects is `"III"`). Keep the numbering in order when you add or reorder sections.
- **Scroll animations.** `hooks/use-scroll-view.ts` returns `{ ref, mainControls }`. It starts the Framer Motion variants `"visible"`/`"hidden"` as an element enters or leaves view (`once: false`). Components attach `ref` and pass `animate={mainControls}` with matching `hidden`/`visible` variants.
- **URL state.** `providers/Providers.tsx` wraps the app in the `nuqs` adapter. `WorkExperiences` keeps the selected job in the `?workExp=` query param through `useQueryState`. That is why it is wrapped in `<Suspense>` in `page.tsx`.
- **Styling.** `tailwind.config.ts` defines custom breakpoints (`xs`, `sm`, `sml`, `md`, `mdl`, `lg`, `lgl`, `xl`, `limit`), max-widths (`max-w-container`, etc.), colors (`bodyColor`, `colorPrimary`, `colorLight`, `colorDark`), and fonts (`font-bodyFont` = Montserrat, `font-titleFont` = Inter, loaded in `utils/fonts.ts`). Use these tokens rather than arbitrary values. The `tailwind-scrollbar` plugin provides the `scrollbar-*` classes.
- **Contact form.** `components/contact/contact-form.tsx` posts to the server action in `actions/send-email.ts`, which sends through Resend from `onboarding@resend.dev` to `NEXT_PUBLIC_GMAIL_LINK`. It needs `RESEND_API_KEY`. Without a verified domain, Resend only delivers to the account owner's address. All env vars are listed in `.env.example`.
- **Resume.** `components/resume-btn.tsx` links to `public/Jhondel_Caranay_CV.pdf`. To update the CV, replace that file and keep the same name.
- The import alias `@/*` maps to the repo root.
