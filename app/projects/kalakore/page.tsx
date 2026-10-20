import type { Metadata } from "next";
import Link from "next/link";
import { ProjectVideo } from "@/components/projects/project-video";

const description =
  "How I built Kalakore on my own: a wholesale distribution ERP for Philippine distributors with a BIR-ready multi-terminal POS, double-entry accounting, a full audit trail and about 5,900 automated tests.";

export const metadata: Metadata = {
  title: "Kalakore case study",
  description,
  alternates: { canonical: "/projects/kalakore" },
  openGraph: {
    type: "article",
    url: "/projects/kalakore",
    title: "Kalakore case study | Jhondel Caranay",
    description,
  },
};

const stats = [
  { value: "51", label: "API modules" },
  { value: "74", label: "Database tables" },
  { value: "8 / 287", label: "Roles / permission codes" },
  { value: "~5,900", label: "Automated tests" },
];

const techstack = [
  "TypeScript",
  "Express 5",
  "React 19 (Vite)",
  "TanStack Router, Query & Table",
  "shadcn/ui",
  "Tailwind CSS",
  "PostgreSQL",
  "Drizzle ORM",
  "Redis",
  "Socket.IO",
  "Zod",
  "Vitest",
  "Docker",
  "Nginx",
];

const modules = [
  {
    title: "Purchasing",
    body: "Purchase requests are grouped into a canvass, suppliers send offers, and each item is awarded to the best one. The awards become purchase orders, then goods receipts, supplier invoices and payables, with returns and debit notes.",
  },
  {
    title: "Inventory",
    body: "Stock per product per warehouse. Every movement, whether received, sold, returned or adjusted, writes its own inventory transaction, so a stock level can always be traced back.",
  },
  {
    title: "Sales",
    body: "Quotation, sales order, delivery receipt, invoice and receivable. Each customer gets the lowest of their price tier, price list and promo, and approval checks their credit limit and the approver's discount limit.",
  },
  {
    title: "Point of sale",
    body: "Several terminals, each with cash sessions, VAT-inclusive pricing, Senior Citizen, PWD, NAAC and Solo Parent discounts per line, returns and an end-of-day Z reading.",
  },
  {
    title: "Accounting",
    body: "Double-entry books. Every posting document creates its own journal entry, checked so debits equal credits, feeding receivables, payables, customer deposits and supplier credit.",
  },
  {
    title: "BIR compliance",
    body: "Built to RMO 24-2023: sequential invoice numbers per terminal, X and Z readings with a Z-counter, an electronic journal, the sales summary, special discount books and marked reprints.",
  },
];

const flows = [
  {
    name: "Purchasing",
    steps: [
      "Purchase request",
      "Canvass",
      "Purchase order",
      "Goods receipt",
      "Supplier invoice",
      "AP payment",
    ],
  },
  {
    name: "Sales",
    steps: [
      "Quotation",
      "Sales order",
      "Delivery receipt",
      "Customer invoice",
      "AR payment",
    ],
  },
  {
    name: "POS",
    steps: ["Cash session", "Sale", "X reading", "Z reading"],
  },
];

const decisions = [
  {
    title: "Money as whole centavos",
    body: "Every amount is stored as an integer number of centavos, never a floating-point peso value, so totals, VAT splits and balances never pick up rounding drift.",
  },
  {
    title: "One transaction per business event",
    body: "Posting a document moves stock, writes the journal entry, takes the document number and records the audit row in a single database transaction. Either all of it happens or none of it does.",
  },
  {
    title: "Invoice numbers that can't collide",
    body: "A POS sale locks its terminal's row before taking the next invoice number, so two cashiers can't get the same one. Database triggers refuse any attempt to lower a terminal's serial or grand total.",
  },
  {
    title: "An audit trail you can't edit",
    body: "Every change is logged in the same transaction as the change itself, recording only the fields that changed. Changes made outside the app are caught by database triggers, and the log refuses updates and deletes.",
  },
  {
    title: "Caching that stays correct",
    body: "Redis caches reads and rate-limits the API. A test scans the source and fails if a write forgets to clear its cache. If Redis goes down, reads fall back to the database, but the login lockout fails closed.",
  },
  {
    title: "Permissions before validation",
    body: "8 roles share 287 permission codes. Every protected route checks permission before validating input, so a user without access gets a 403 and learns nothing about the form. A contract test enforces the order.",
  },
];

const testing = [
  "Tests run in-process against a real PostgreSQL database and a real Redis, starting from the real seed data, not mocks.",
  "Every route is automatically tested for 401 without a token and 403 for each role that lacks access.",
  "A route-coverage guard fails the suite if any route has no passing test.",
  "Scenario tests reconcile the ledger against the AR and AP aging after each run.",
  "Known bugs are pinned with expected-failure tests until they're fixed.",
];

export default function KalakoreCaseStudy() {
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
            Kalakore
          </h1>
          <p className="mt-3 font-titleFont text-xl text-colorDark md:text-2xl">
            Wholesale distribution ERP and BIR-ready POS
          </p>
          <p className="mt-6 max-w-[48rem] text-base leading-relaxed md:text-lg">
            A complete back office for Philippine wholesale distributors:
            purchasing, multi-warehouse inventory, sales, a multi-terminal point
            of sale and double-entry accounting in one system, built to the
            BIR&apos;s rules for POS software. I designed and built all of it on
            my own, from the database schema and API to the interface, tests and
            deployment.
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
              <dd className="mt-1">Version 1.0.0, October 2026</dd>
            </div>
          </dl>
        </section>

        {/* video */}
        <div className="mt-12 overflow-hidden rounded-lg ring-1 ring-colorPrimary/20">
          <ProjectVideo
            src="/videos/kalakore-promo-web.mp4"
            poster="/images/wholesale-erp-system.png"
            title="Kalakore"
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
            A wholesale distributor runs on paperwork that has to agree: what
            was ordered from suppliers, what actually arrived, what was sold,
            what customers still owe and what the business owes. When those live
            in separate tools, the books drift from the stock and month-end
            becomes a reconciliation exercise.
          </p>
          <p>
            In the Philippines there is a second constraint. Point-of-sale
            software must follow the BIR&apos;s rules (RMO 24-2023): unbroken
            invoice numbering per terminal, X and Z readings, an electronic
            journal and specific sales reports. Kalakore was built to handle
            both in one system.
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
        </Section>

        {/* flow diagram */}
        <Section number="03" title="How documents flow">
          <p>
            Every business process is a chain of documents. Each step builds on
            the one before it, and every step that moves money or stock posts
            its own entry to the general ledger.
          </p>
          <div className="mt-2 flex flex-col gap-6 rounded-lg bg-[#112240] p-5 md:p-8">
            {flows.map((flow) => (
              <div key={flow.name}>
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  {flow.name.toUpperCase()}
                </p>
                <ol className="mt-3 flex flex-wrap items-center gap-2">
                  {flow.steps.map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-md border border-colorPrimary/40 bg-colorPrimary/10 px-3 py-1.5 font-titleFont text-xs text-colorLight md:text-sm">
                        {step}
                      </span>
                      {index < flow.steps.length - 1 && (
                        <span aria-hidden className="text-colorPrimary">
                          &rarr;
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2 border-t border-colorDark/30 pt-6">
              <span aria-hidden className="text-colorPrimary">
                &darr;
              </span>
              <p className="rounded-md bg-colorPrimary px-4 py-2 text-center font-titleFont text-sm font-semibold text-bodyColor">
                General ledger: one journal entry per posting, debits = credits
              </p>
              <p className="text-center text-xs text-colorDark">
                Stock moves at the same time, in the same database transaction
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
            Accounting software has to be right, so the API is covered by about
            5,900 automated tests written with Vitest and Supertest, including
            every route and full business scenarios.
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
            The API and the interface each ship as their own Docker image: the
            API on Node.js, the interface as static files served by Nginx.
          </p>
        </Section>

        {/* call to action */}
        <section className="mt-20 flex flex-col items-center gap-4 rounded-lg border border-colorPrimary/30 p-8 text-center md:p-12">
          <h2 className="font-titleFont text-2xl font-semibold md:text-3xl">
            Need a system like this?
          </h2>
          <p className="max-w-[32rem] text-colorDark">
            I build business software that has to be correct: inventory, sales,
            POS and accounting. Let&apos;s talk about yours.
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
