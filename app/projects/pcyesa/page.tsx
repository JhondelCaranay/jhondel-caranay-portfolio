import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description =
  "How I built PCyesa on my own: a record-keeping POS for a computer shop, with a PC builder that checks compatibility, one write path for every sale and stock change, and cost that never reaches staff.";

export const metadata: Metadata = {
  title: "PCyesa case study",
  description,
  alternates: { canonical: "/projects/pcyesa" },
  openGraph: {
    type: "article",
    url: "/projects/pcyesa",
    title: "PCyesa case study | Jhondel Caranay",
    description,
  },
};

const stats = [
  { value: "19", label: "API modules" },
  { value: "26", label: "Database tables" },
  { value: "2 / 27", label: "Roles / permission codes" },
  { value: "37", label: "Test files" },
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
  "Zod",
  "Recharts",
  "Vitest",
  "Docker",
  "Nginx",
  "Sentry",
];

const modules = [
  {
    title: "Parts catalog",
    body: "Parts are grouped by category and brand, and each category has its own typed spec fields, such as socket, RAM type, wattage or form factor. Each part has a selling price, a low-stock threshold and a weighted-average cost that staff never see.",
  },
  {
    title: "Inventory",
    body: "Deliveries are recorded as stock-ins from suppliers, and corrections as adjustments with a reason and a note. Every change writes a movement row with the balance after it, so each part has a full history, and low stock is flagged live.",
  },
  {
    title: "PC builder",
    body: "Staff pick one part per slot, with quantities on RAM and storage, and the builder checks the build as they go. A build can be saved as a draft or a quote, and a quote holds its prices for 7 days by default.",
  },
  {
    title: "Packages",
    body: "Predefined bundles show how many can be sold from current stock. At the counter, a part can be swapped for another in the same category, and the price adjusts by the difference. The sale records what actually left stock.",
  },
  {
    title: "POS",
    body: "One cart takes parts, builds, packages and service items like assembly or OS installs. It handles discounts, split payments across cash, GCash, Maya, bank transfer or card, downpayments, and serial numbers for each unit sold.",
  },
  {
    title: "Balances, voids and returns",
    body: "A balance can be collected later, and a sale can be held until it's picked up. The Owner can void a sale or return single items, down to one part of a package, either back to stock or written off as damaged.",
  },
  {
    title: "Serials and warranty",
    body: "Any serial can be looked up to see who bought it, when, and whether it's still under warranty. Serials can be corrected with an audit trail, but never deleted.",
  },
  {
    title: "Dashboard and reports",
    body: "An owner dashboard plus sales, best-seller, inventory and profit reports, all in Manila business days. Counters stay in sync over Socket.IO, so a sale on one screen updates stock on every other.",
  },
];

const saleFlow = ["Cart", "Price check", "Lock stock", "Write sale", "Audit"];

const saleShape = [
  "Sale",
  "Lines (what was bought)",
  "Items (what left stock)",
  "Units (serials)",
];

const decisions = [
  {
    title: "One way to change stock",
    body: "Every stock change goes through one function. It locks the part's row, refuses to go below zero with a 409, and writes the movement with its balance. A CHECK in the database backs it up, so stock can't go negative even if a bug slips past.",
  },
  {
    title: "Cost never reaches staff",
    body: "Cost, margin and profit are removed by the API, not just hidden in the UI. A contract test walks every route staff can read and fails on a cost, whether it finds it by name or by value. Staff type the cost on a delivery and never get it back.",
  },
  {
    title: "Compatibility checks warn, not block",
    body: "The builder flags conflicts, cautions and parts it can't check because a spec is missing. A shop sometimes knows better, so staff can still sell the build, and the sale records each conflict and who went ahead.",
  },
  {
    title: "The server always sets the price",
    body: "Prices come from the database, never the request. The pricing, compatibility and refund rules are pure functions with a checked copy in the UI for instant results, and both copies have to pass the same shared cases.",
  },
  {
    title: "Discounts above the cap need the Owner",
    body: "Staff can discount up to a cap the Owner sets. Above it, an Owner approves with a separate 6-digit PIN, so they never type their password in front of staff. Five wrong tries lock it for 15 minutes.",
  },
  {
    title: "Totals always add up",
    body: "A sale-wide discount is spread over lines and then items by largest remainder, so the amounts sum exactly to the centavo. A return first reduces any balance owed and only refunds the rest, and every scenario test ends by checking that stock and money reconcile.",
  },
];

const testing = [
  "Tests run in-process against a real PostgreSQL database and a real Redis, with nothing in the data path mocked.",
  "Contract tests fail the suite on a route with no permission check, a write with no audit row, a cache with no invalidator, or a cost that staff could read.",
  "A route coverage guard fails the suite if any route has no passing test.",
  "A full shop day runs through the API from start to finish, and a concurrency suite fires conflicting writes at once to prove stock and sales stay correct.",
  "A migration test builds a second database from the committed migrations and fails if it differs from the schema in any column, constraint or index.",
  "A load check rebuilds the database at full size, with 5,000 parts and 100,000 sales, and times the catalog, lists, reports and dashboard against their budgets.",
];

export default function PcyesaCaseStudy() {
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
            PCyesa
          </h1>
          <p className="mt-3 font-titleFont text-xl text-colorDark md:text-2xl">
            Record-keeping POS for a computer shop
          </p>
          <p className="mt-6 max-w-[48rem] text-base leading-relaxed md:text-lg">
            A system for a single computer shop that sells parts, custom PC
            builds and ready-made packages. It tracks every part from delivery
            to sale, checks builds for compatibility, and shows the owner what
            was sold, what is in stock and what the shop really earned. I
            designed and built all of it on my own, from the database schema and
            API to the interface and tests.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-colorDark">Role</dt>
              <dd className="mt-1">Solo developer, design to testing</dd>
            </div>
            <div>
              <dt className="text-colorDark">Type</dt>
              <dd className="mt-1">Personal project</dd>
            </div>
            <div>
              <dt className="text-colorDark">Status</dt>
              <dd className="mt-1">Feature complete, not yet deployed</dd>
            </div>
          </dl>
        </section>

        {/* screenshot */}
        <div className="mt-12 overflow-hidden rounded-lg ring-1 ring-colorPrimary/20">
          <Image
            src="/images/pcyesa.png"
            alt="The PCyesa app"
            width={1912}
            height={903}
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
            A computer shop sells hundreds of different parts, each with its own
            specs, and many sales are custom builds put together at the counter.
            Without proper records, it&apos;s hard to know what&apos;s really in
            stock, which build will actually work, which serial went to which
            customer, or whether a sale made money after the discount.
          </p>
          <p>
            PCyesa keeps all of that in one place. Every part that comes in or
            goes out is recorded, the builder catches parts that don&apos;t fit
            together, and every unit sold carries its serial and warranty. The
            owner sees profit and inventory value, while staff only see what
            they need to sell.
          </p>
          <p>
            It&apos;s deliberately a record-keeping tool for one shop. It issues
            no official receipts, uses no OR or SI numbers and computes no VAT,
            and every printed summary says NOT AN OFFICIAL RECEIPT.
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

        {/* sale diagram */}
        <Section number="03" title="How a sale is written">
          <p>
            Every sale goes through one function, in one transaction. If any
            check fails, nothing is saved: no stock moves, no payment is
            recorded and no serial is taken. Collecting a balance, releasing a
            held sale, voiding and returning each have their own single path
            too.
          </p>
          <div className="mt-2 flex flex-col gap-6 rounded-lg bg-[#112240] p-5 md:p-8">
            <div>
              <p className="font-titleFont text-xs tracking-widest text-colorDark">
                ONE TRANSACTION
              </p>
              <Chain steps={saleFlow} />
            </div>
            <div>
              <p className="font-titleFont text-xs tracking-widest text-colorDark">
                WHAT A SALE RECORDS
              </p>
              <Chain steps={saleShape} />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-md border border-colorPrimary/30 p-4">
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  STOCK
                </p>
                <p className="mt-2 font-titleFont text-sm">
                  Deducted at sale, even when the order is held
                </p>
                <p className="mt-2 text-xs text-colorDark">
                  So held items can&apos;t be sold to someone else. Selling more
                  than is on hand is refused.
                </p>
              </div>
              <div className="rounded-md border border-colorPrimary/30 p-4">
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  PROFIT
                </p>
                <p className="mt-2 font-titleFont text-sm">
                  Net revenue &minus; cost of goods, per item
                </p>
                <p className="mt-2 text-xs text-colorDark">
                  Each item keeps its cost at the time of sale. A damaged return
                  keeps the cost, so the loss shows in the report.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 border-t border-colorDark/30 pt-6">
              <p className="rounded-md bg-colorPrimary px-4 py-2 text-center font-titleFont text-sm font-semibold text-bodyColor">
                Stock never goes below zero. Totals always add up.
              </p>
              <p className="text-center text-xs text-colorDark">
                Owner and Staff map to 27 permission codes, and the database
                backs the key rules with CHECKs and unique indexes
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
            Stock and money have to stay right on every route, including ones
            added later. Alongside its feature tests, the API&apos;s Vitest and
            Supertest suite has contract tests that check those rules across the
            whole API.
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
            The interface uses its own dark theme built for a shop counter, with
            large click targets, keyboard-friendly screens and every text pair
            checked for WCAG AA contrast in both light and dark modes. Every
            feature is built and tested, and deployment comes next.
          </p>
        </Section>

        {/* call to action */}
        <section className="mt-20 flex flex-col items-center gap-4 rounded-lg border border-colorPrimary/30 p-8 text-center md:p-12">
          <h2 className="font-titleFont text-2xl font-semibold md:text-3xl">
            Losing track of stock and sales?
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
