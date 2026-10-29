import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description =
  "How I built AyosDocs on my own: a multi-tenant document management SaaS for Philippine teams, with two levels of roles, direct signed uploads to Cloudinary, PayMongo billing and contract tests that prove tenants stay isolated.";

export const metadata: Metadata = {
  title: "AyosDocs case study",
  description,
  alternates: { canonical: "/projects/ayosdocs" },
  openGraph: {
    type: "article",
    url: "/projects/ayosdocs",
    title: "AyosDocs case study | Jhondel Caranay",
    description,
  },
};

const stats = [
  { value: "23", label: "API modules" },
  { value: "24", label: "Database tables" },
  { value: "6 / 29", label: "Roles / permission codes" },
  { value: "32", label: "Test files" },
];

const techstack = [
  "TypeScript",
  "Express 5",
  "React 19 (Vite)",
  "TanStack Router & Query",
  "Base UI",
  "Tailwind CSS",
  "PostgreSQL",
  "Drizzle ORM",
  "Redis",
  "Socket.IO",
  "Cloudinary",
  "PayMongo",
  "Resend",
  "Zod",
  "Vitest",
  "Docker",
  "Caddy",
  "Nginx",
];

const modules = [
  {
    title: "Workspaces and roles",
    body: "Every user gets a personal workspace, and teams create more. Workspaces have Owner, Admin and Member roles, each project has its own Admin, Editor and Viewer, and Business plans can lock folders.",
  },
  {
    title: "Documents and uploads",
    body: "Upload files or whole folders by dragging them in. Each document keeps its version history, a preview, signed downloads and an activity timeline, and gets a category and any number of tags.",
  },
  {
    title: "Search",
    body: "Postgres full-text search over name, description, tags, category and file name, ignoring accents, with filters for project, folder, type, uploader and date. A quick search (Ctrl K) shows the top five results as you type.",
  },
  {
    title: "Share links",
    body: "Send one document to someone outside the workspace. Links can expire, need a password and allow or block downloads, and each one tracks its views. Only a hash of the link is stored.",
  },
  {
    title: "Billing",
    body: "Free, Pro and Business plans paid in pesos through PayMongo Checkout (cards, GCash, Maya, QR Ph). Upgrades start right away and credit the unused days. Downgrades wait until the period ends.",
  },
  {
    title: "Admin and audit",
    body: "Business workspaces get an audit log with CSV export. A platform super-admin panel manages workspaces, users and payments, can re-run failed webhooks and can grant plans.",
  },
];

const plans = [
  {
    name: "Free",
    price: "₱0",
    rows: ["500 MB storage", "2 projects", "2 seats", "10 MB files"],
  },
  {
    name: "Pro",
    price: "₱499 / mo",
    rows: ["20 GB storage", "20 projects", "10 seats", "Share links"],
  },
  {
    name: "Business",
    price: "₱2,499 / mo",
    rows: [
      "200 GB storage",
      "Unlimited projects",
      "50 seats",
      "Audit log, folder locks",
    ],
  },
];

const hierarchy = ["Workspace", "Project", "Folder", "Document", "Version"];

const lifecycle = [
  "Paid period",
  "7-day grace",
  "Free plan",
  "Read-only if over limits",
];

const decisions = [
  {
    title: "404, never 403, across tenants",
    body: "Every workspace request carries a workspace id, and every query filters on it. A user who isn't a member gets a 404, so nobody can probe which workspace ids exist.",
  },
  {
    title: "Files never pass through the API",
    body: "The API checks the role, file type, size and storage left, then signs a one-time upload with a file id it picks itself. The browser sends the file straight to private Cloudinary storage, and a confirm step checks it before the document exists. A background job cleans up uploads that are never confirmed.",
  },
  {
    title: "Quotas that hold under concurrency",
    body: "Each write that adds usage locks the workspace row inside its own transaction before it checks the plan's limits. Uploads that finish at the same moment can't add up past the storage quota, and a scenario test checks this.",
  },
  {
    title: "The plan changes only from the webhook",
    body: "Only PayMongo's signed webhook changes a plan, never the checkout redirect. Each event is stored by its id, so a repeat does nothing. Events that fail are kept and can be re-run from the admin panel.",
  },
  {
    title: "Nothing is deleted for unpaid bills",
    body: "An unpaid period gets a 7-day grace period before the workspace drops to Free. If it's then over Free's limits it goes read-only: viewing, downloading and deleting still work, but uploads and invites pause until the owner upgrades or frees up space.",
  },
  {
    title: "An audit log that can't be rewritten",
    body: "Each change is recorded in the same transaction as the change itself, with only the fields that changed. A database trigger rejects any UPDATE or DELETE on the audit table, even when it comes from the API's own connection.",
  },
];

const testing = [
  "Tests run in-process against a real PostgreSQL database and a real Redis. Only Cloudinary, PayMongo, Resend and Google are mocked.",
  "A route catalogue is read from the source, and every route gets 401, 400 and 403 tests for each role, with permission checked before validation.",
  "A tenant-isolation test sends another workspace's id to every route that takes an id and expects a 404.",
  "Static checks fail the suite if a service query on a workspace table skips the workspace filter, or if a write isn't audited.",
  "Scenario tests run a full customer journey and concurrent uploads against the storage quota. A separate load check seeds 100,000 documents and keeps search and listings under 300 ms.",
];

export default function AyosDocsCaseStudy() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-bodyColor via-bodyColor to-indigo-950 font-bodyFont text-colorLight">
      <header className="sticky top-0 z-50 bg-bodyColor/80 px-4 shadow-navbarShadow backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-contentContainer items-center justify-between font-titleFont">
          <Link href="/" className="text-lg font-bold">
            <span className="text-colorPrimary">{"<"}</span> Jhondel{" "}
            <span className="text-colorPrimary">{"/>"}</span>
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-colorLight duration-300 hover:text-colorPrimary"
          >
            &larr; Back to projects
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-contentContainer px-4 pb-24">
        {/* intro */}
        <section className="pt-16 md:pt-24">
          <p className="font-titleFont text-sm tracking-widest text-colorPrimary">
            CASE STUDY
          </p>
          <h1 className="mt-3 font-titleFont text-4xl font-bold md:text-6xl">
            AyosDocs
          </h1>
          <p className="mt-3 font-titleFont text-xl text-colorDark md:text-2xl">
            Multi-tenant document management SaaS
          </p>
          <p className="mt-6 max-w-[48rem] text-base leading-relaxed md:text-lg">
            A place for Philippine teams to store, organize, find and share
            their documents and scans, with roles on each project, version
            history and billing in pesos. I designed and built all of it on my
            own, from the database schema and API to the interface, tests and
            deployment pipeline.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-colorDark">Role</dt>
              <dd className="mt-1">Solo developer, design to deployment</dd>
            </div>
            <div>
              <dt className="text-colorDark">Type</dt>
              <dd className="mt-1">Personal project</dd>
            </div>
            <div>
              <dt className="text-colorDark">Status</dt>
              <dd className="mt-1">Pre-launch hardening, October 2026</dd>
            </div>
          </dl>
        </section>

        {/* screenshot */}
        <div className="mt-12 overflow-hidden rounded-lg ring-1 ring-colorPrimary/20">
          <Image
            src="/images/ayosdocs.png"
            alt="The AyosDocs workspace"
            width={1898}
            height={902}
            priority
            className="h-auto w-full"
          />
        </div>

        {/* numbers */}
        <section className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-[#112240] p-5 text-center"
            >
              <p className="font-titleFont text-2xl font-bold text-colorPrimary md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-colorDark md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* problem */}
        <Section number="01" title="The problem">
          <p>
            Many small Philippine teams still keep contracts, permits, invoices
            and scans in shared drives, chat threads and email attachments.
            Files get duplicated, the latest version is anyone&apos;s guess, and
            sending one file to a client often means sharing the whole folder.
          </p>
          <p>
            General-purpose cloud drives solve part of this, but they bill in
            dollars, don&apos;t take GCash or Maya, and aren&apos;t built around
            projects with their own roles. AyosDocs is a document system where
            each team gets its own isolated workspace, people see only the
            projects they belong to, and billing works the way local businesses
            already pay.
          </p>
        </Section>

        {/* modules */}
        <Section number="02" title="What it does">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {modules.map((module) => (
              <div key={module.title} className="rounded-lg bg-[#112240] p-5">
                <h3 className="font-titleFont font-semibold text-colorPrimary">
                  {module.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-colorDark">
                  {module.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-lg border border-colorPrimary/30 p-5"
              >
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  {plan.name.toUpperCase()}
                </p>
                <p className="mt-1 font-titleFont text-xl font-bold text-colorPrimary">
                  {plan.price}
                </p>
                <ul className="mt-3 flex flex-col gap-1 text-sm text-colorDark">
                  {plan.rows.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* tenancy diagram */}
        <Section number="03" title="How tenancy works">
          <p>
            The workspace is the tenant. It owns the plan, the storage quota,
            the seats and the billing. Everything under it belongs to exactly
            one workspace, and access is decided at two levels.
          </p>
          <div className="mt-2 flex flex-col gap-6 rounded-lg bg-[#112240] p-5 md:p-8">
            <div>
              <p className="font-titleFont text-xs tracking-widest text-colorDark">
                STRUCTURE
              </p>
              <Chain steps={hierarchy} />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-md border border-colorPrimary/30 p-4">
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  WORKSPACE ROLES
                </p>
                <p className="mt-2 font-titleFont text-sm">
                  Owner &middot; Admin &middot; Member
                </p>
                <p className="mt-2 text-xs text-colorDark">
                  Owners and Admins act as project Admin everywhere.
                </p>
              </div>
              <div className="rounded-md border border-colorPrimary/30 p-4">
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  PROJECT ROLES
                </p>
                <p className="mt-2 font-titleFont text-sm">
                  Admin &middot; Editor &middot; Viewer
                </p>
                <p className="mt-2 text-xs text-colorDark">
                  Members see only the projects they&apos;ve been added to.
                </p>
              </div>
            </div>
            <div>
              <p className="font-titleFont text-xs tracking-widest text-colorDark">
                WHEN A PERIOD ENDS UNPAID
              </p>
              <Chain steps={lifecycle} />
            </div>
            <div className="flex flex-col items-center gap-2 border-t border-colorDark/30 pt-6">
              <p className="rounded-md bg-colorPrimary px-4 py-2 text-center font-titleFont text-sm font-semibold text-bodyColor">
                Every query filters by workspace. Outsiders get a 404.
              </p>
              <p className="text-center text-xs text-colorDark">
                Roles map to 29 permission codes, so custom roles can be added
                later
              </p>
            </div>
          </div>
        </Section>

        {/* decisions */}
        <Section number="04" title="Engineering decisions">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {decisions.map((decision) => (
              <div
                key={decision.title}
                className="border-l-2 border-colorPrimary/60 pl-4"
              >
                <h3 className="font-titleFont font-semibold">
                  {decision.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-colorDark">
                  {decision.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* testing */}
        <Section number="05" title="Testing">
          <p>
            In a multi-tenant app the worst bug is one team seeing another
            team&apos;s files. So the API&apos;s Vitest and Supertest suite
            doesn&apos;t just test features. It reads the code&apos;s own route
            and service catalogue and checks the rules on every route.
          </p>
          <ul className="flex flex-col gap-3">
            {testing.map((item) => (
              <li key={item} className="flex gap-3 text-colorDark">
                <span className="mt-0.5 text-colorPrimary">&#9656;</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* stack */}
        <Section number="06" title="Tech stack">
          <ul className="flex flex-wrap gap-2 font-titleFont text-xs tracking-wide md:text-sm">
            {techstack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-colorPrimary/10 px-3 py-1.5 text-colorPrimary"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p>
            The public pages (landing, pricing, terms) are prerendered so they
            load before any script runs. Every green build on main deploys
            through GitHub Actions to Docker containers behind Caddy for HTTPS,
            with a health check, Sentry error reports and backups that are
            tested by restoring them.
          </p>
        </Section>

        {/* call to action */}
        <section className="mt-20 flex flex-col items-center gap-4 rounded-lg border border-colorPrimary/30 p-8 text-center md:p-12">
          <h2 className="font-titleFont text-2xl font-semibold md:text-3xl">
            Building a SaaS?
          </h2>
          <p className="max-w-[32rem] text-colorDark">
            I build multi-tenant apps end to end: tenancy, roles, billing and
            the tests that keep them correct. Let&apos;s talk about yours.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-md bg-colorPrimary px-6 py-3 font-titleFont text-sm font-semibold text-bodyColor duration-300 hover:-translate-y-1"
            >
              Get in touch
            </Link>
            <Link
              href="/#projects"
              className="rounded-md border border-colorPrimary px-6 py-3 font-titleFont text-sm text-colorPrimary duration-300 hover:bg-colorPrimary/10"
            >
              See other projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

const Chain = ({ steps }: { steps: string[] }) => (
  <ol className="mt-3 flex flex-wrap items-center gap-2">
    {steps.map((step, index) => (
      <li key={step} className="flex items-center gap-2">
        <span className="rounded-md border border-colorPrimary/40 bg-colorPrimary/10 px-3 py-1.5 font-titleFont text-xs text-colorLight md:text-sm">
          {step}
        </span>
        {index < steps.length - 1 && (
          <span aria-hidden className="text-colorPrimary">
            &rarr;
          </span>
        )}
      </li>
    ))}
  </ol>
);

const Section = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-20">
    <h2 className="flex items-center gap-3 font-titleFont text-2xl font-semibold md:text-3xl">
      <span className="text-base text-colorPrimary md:text-lg">{number}.</span>
      {title}
      <span className="ml-2 hidden h-px flex-1 bg-gray-700 md:block" />
    </h2>
    <div className="mt-6 flex flex-col gap-4 leading-relaxed">{children}</div>
  </section>
);
