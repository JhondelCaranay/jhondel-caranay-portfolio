import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description =
  "How I built Seroksan on my own: a multi-tenant record-tracking SaaS for Philippine xerox shops, with cash and machine-counter checks at every shift, sales that can't be edited, and contract tests that prove shops stay isolated.";

export const metadata: Metadata = {
  title: "Seroksan case study",
  description,
  alternates: { canonical: "/projects/seroksan" },
  openGraph: {
    type: "article",
    url: "/projects/seroksan",
    title: "Seroksan case study | Jhondel Caranay",
    description,
  },
};

const stats = [
  { value: "37", label: "API modules" },
  { value: "49", label: "Database tables" },
  { value: "3 / 34", label: "Roles / permission codes" },
  { value: "35", label: "Test files" },
];

const techstack = [
  "TypeScript",
  "Express 5",
  "React 19 (Vite)",
  "TanStack Router, Query & Table",
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
  "Sentry",
];

const modules = [
  {
    title: "Counter",
    body: "The screen staff use all day: favorite tiles, services and supplies, and a cart that's always in view. Each service has its own variants, such as size, color and sides, with volume price tiers. Payments can be cash, GCash, Maya or utang.",
  },
  {
    title: "Shifts and cash",
    body: "Each shift tracks the drawer from opening to close. Staff count the cash, and the shift shows Balanced, Over or Short. A difference outside the shop's tolerance waits for a Manager or the Owner to sign it off with a note.",
  },
  {
    title: "Machine counters",
    body: "Copiers and printers are read when a shift starts and closes, then compared with the pages recorded. An under-recorded gap shows its estimated value in pesos, and toner and ink installs are compared against their rated yield.",
  },
  {
    title: "Stock and consumables",
    body: "Each branch has its own stock of products and consumables, with stock-ins, adjustments, movement history and low-stock alerts. Paper and laminating film deduct with each sale, and spoilage logs deduct the same way.",
  },
  {
    title: "Job orders and utang",
    body: "Drop-off jobs move from Pending to In Progress, Ready and Claimed, and can take downpayments. Customers can buy on credit and pay part of it at any branch, with a ledger, statements and a list of who owes what.",
  },
  {
    title: "Voids and audit",
    body: "Staff ask to void a sale and give a reason, then a Manager or the Owner decides. Approval returns the stock and reverses the payment, and the sale stays on record. Every write adds a row to the audit log.",
  },
  {
    title: "Dashboard and reports",
    body: "A live owner dashboard, plus sales, expense and profit reports. Business plans add cross-branch reports and CSV export. Figures update on their own over Socket.IO, and a notification bell flags what needs attention.",
  },
  {
    title: "Staff and counter devices",
    body: "Owners create staff accounts that sign in with a shop code and username. On a registered counter device, staff switch in with a PIN, and a PIN session can't reach settings, billing, staff, branches or devices.",
  },
];

const plans = [
  {
    name: "Free",
    price: "₱0",
    rows: ["1 branch", "2 users", "500 transactions / mo", "1 machine"],
  },
  {
    name: "Pro",
    price: "₱249 / mo",
    rows: [
      "1 branch",
      "6 users, Manager role",
      "Job orders, utang",
      "Counter checks, profit reports",
    ],
  },
  {
    name: "Business",
    price: "₱699 / mo",
    rows: [
      "5 branches",
      "30 users",
      "Cross-branch reports",
      "Audit log, CSV export",
    ],
  },
];

const hierarchy = ["Shop", "Branch", "Shift", "Sale"];

const shiftFlow = [
  "Open with cash and counters",
  "Record sales",
  "Count the drawer",
  "Read the counters",
  "Review and close",
];

const decisions = [
  {
    title: "Sales are never edited",
    body: "A mistake is voided, not changed. Approving a void is the only code that updates a sale, and a contract test enforces that. The one exception clears a sale's free-text fields when a shop is deleted. A database trigger also rejects any UPDATE or DELETE on the audit log.",
  },
  {
    title: "A retry can't record a sale twice",
    body: "The counter screen gives each sale its own request id, and the database keeps it unique per shop. If a sale is sent again, the API returns the first one, even if the shift has since closed or the plan has hit its cap.",
  },
  {
    title: "The server always sets the price",
    body: "The API works out every price again from one pure function, and the UI keeps a checked copy of it for instant totals. If the catalog changed after the screen loaded, the sale is refused with a 409 rather than saved at a price nobody saw.",
  },
  {
    title: "Closed shifts stay closed",
    body: "Once a shift closes, its figures and counter check are frozen. A sale voided later appears as a post-close adjustment in the shift where the void was approved, so a count an owner already reviewed never moves.",
  },
  {
    title: "No false alarms from the counter check",
    body: "Recorded pages belong to the whole shift and can't be split per machine. If a machine is left out, say after a counter reset, the shift shows Not compared instead of a misleading over-recorded result.",
  },
  {
    title: "A lapsed plan never stops the shop",
    body: "Recording sales is never blocked by an unpaid plan, and a shop can still collect what it's owed. Only Free's monthly transaction cap can refuse a sale. Unpaid plans get a 7-day grace period, and nothing is deleted.",
  },
];

const testing = [
  "Tests run in-process against a real PostgreSQL database and a real Redis. Only Cloudinary, PayMongo and Resend are mocked.",
  "A route coverage guard fails the suite if any route has no test, and a permissions suite fails it if a route has no permission check.",
  "A tenant-isolation suite covers both shops and branches, sending ids that belong to someone else and expecting a 404.",
  "Contract tests also fail the suite on a query that skips the shop filter, a write with no audit row, or a cache prefix with no invalidator.",
  "The API and UI copies of the pricing rule must pass the same set of cases, so they can't drift apart.",
];

export default function SeroksanCaseStudy() {
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
            Seroksan
          </h1>
          <p className="mt-3 font-titleFont text-xl text-colorDark md:text-2xl">
            Multi-tenant record-tracking SaaS for xerox shops
          </p>
          <p className="mt-6 max-w-[48rem] text-base leading-relaxed md:text-lg">
            A system for Philippine xerox shops that also sell school supplies.
            It records every sale, checks the cash drawer and the machine
            counters at each shift, and shows owners what each branch really
            earned. I designed and built all of it on my own, from the database
            schema and API to the interface, tests and deployment pipeline.
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
              <dd className="mt-1">Pre-launch hardening, November 2026</dd>
            </div>
          </dl>
        </section>

        {/* screenshot */}
        <div className="mt-12 overflow-hidden rounded-lg ring-1 ring-colorPrimary/20">
          <Image
            src="/images/seroksan.png"
            alt="The Seroksan counter screen"
            width={1905}
            height={907}
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
            A xerox shop makes many small sales a day, often just a few pesos
            each, and they&apos;re easy to miss. If a job isn&apos;t written
            down, the owner has little to go on when the drawer comes up short,
            paper runs out early or a customer&apos;s credit is disputed.
          </p>
          <p>
            A copier already keeps the evidence, though: its page counter.
            Seroksan compares those counts with the pages staff recorded, and
            the cash in the drawer with the money collected, at every shift. It
            also fits how these shops work, with per-page pricing, drop-off
            jobs, utang and GCash or Maya payments.
          </p>
          <p>
            It&apos;s deliberately not a POS. It keeps the shop&apos;s own
            records and issues no official receipts, uses no OR or SI numbers
            and computes no VAT, so a shop&apos;s tax duties stay separate.
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

        {/* shift diagram */}
        <Section number="03" title="How a shift balances">
          <p>
            The shop is the tenant. It owns the plan, the catalog, the prices
            and the customers, while each branch keeps its own stock, machines
            and cash. Everything recorded at a branch lands in the shift
            that&apos;s open, and closing that shift runs two checks.
          </p>
          <div className="mt-2 flex flex-col gap-6 rounded-lg bg-[#112240] p-5 md:p-8">
            <div>
              <p className="font-titleFont text-xs tracking-widest text-colorDark">
                STRUCTURE
              </p>
              <Chain steps={hierarchy} />
            </div>
            <div>
              <p className="font-titleFont text-xs tracking-widest text-colorDark">
                A SHIFT
              </p>
              <Chain steps={shiftFlow} />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-md border border-colorPrimary/30 p-4">
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  CASH CHECK
                </p>
                <p className="mt-2 font-titleFont text-sm">
                  Expected = opening + cash payments + cash-ins &minus; payouts
                </p>
                <p className="mt-2 text-xs text-colorDark">
                  Compared with the count: Balanced, Over or Short. GCash, Maya
                  and utang never touch the drawer.
                </p>
              </div>
              <div className="rounded-md border border-colorPrimary/30 p-4">
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  COUNTER CHECK
                </p>
                <p className="mt-2 font-titleFont text-sm">
                  Machine pages vs sales + Ready jobs + spoilage
                </p>
                <p className="mt-2 text-xs text-colorDark">
                  OK within 5 pages or 1% by default, whichever is bigger. Color
                  pages are checked against color copies only.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 border-t border-colorDark/30 pt-6">
              <p className="rounded-md bg-colorPrimary px-4 py-2 text-center font-titleFont text-sm font-semibold text-bodyColor">
                Every query filters by shop. Outsiders get a 404.
              </p>
              <p className="text-center text-xs text-colorDark">
                Owner, Manager and Staff map to 34 permission codes, and staff
                reach only the branches they&apos;re assigned to
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
            These records settle questions about money, so the rules have to
            hold on every route, including ones added later. Alongside its
            feature tests, the API&apos;s Vitest and Supertest suite has
            contract tests that check those rules across the whole API.
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
            The public pages (landing, pricing, terms, privacy) are prerendered
            so they load before any script runs, and the app installs as a PWA
            on the counter&apos;s phone or tablet. The deployment pipeline runs
            Docker containers behind Caddy, with a health check, automatic
            rollback and a script that test-restores backups. I&apos;ve
            rehearsed it locally, and the first production deployment comes
            next.
          </p>
        </Section>

        {/* call to action */}
        <section className="mt-20 flex flex-col items-center gap-4 rounded-lg border border-colorPrimary/30 p-8 text-center md:p-12">
          <h2 className="font-titleFont text-2xl font-semibold md:text-3xl">
            Running on paper and guesswork?
          </h2>
          <p className="max-w-[32rem] text-colorDark">
            I build business systems end to end: the records, the checks and the
            tests that keep them correct. Let&apos;s talk about yours.
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
