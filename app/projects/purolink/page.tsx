import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description =
  "How I built Puro Link on my own: a multi-tenant platform for water refilling stations in the Philippines, with a POS, a gallon tracker, partial payments, live delivery orders and PayMongo plans.";

export const metadata: Metadata = {
  title: "Puro Link case study",
  description,
  alternates: { canonical: "/projects/purolink" },
  openGraph: {
    type: "article",
    url: "/projects/purolink",
    title: "Puro Link case study | Jhondel Caranay",
    description,
  },
};

const stats = [
  { value: "30", label: "API modules" },
  { value: "34", label: "Database tables" },
  { value: "185", label: "API routes" },
  { value: "1,800+", label: "API tests" },
];

const techstack = [
  "TypeScript",
  "Express 5",
  "React 19 (Vite)",
  "TanStack Router & Query",
  "Base UI",
  "Tailwind CSS",
  "Leaflet",
  "PostgreSQL",
  "Drizzle ORM",
  "Redis",
  "Socket.IO",
  "PayMongo",
  "Cloudinary",
  "Resend",
  "Zod",
  "Recharts",
  "Vitest",
  "Docker",
  "Caddy",
  "Sentry",
];

const screenshots = [
  {
    src: "/images/purolink-2.png",
    alt: "The Puro Link station dashboard with today's numbers and a 7-day sales chart",
    caption:
      "The station dashboard: today's sales, refills, money collected, what customers owe and gallons out.",
  },
  {
    src: "/images/purolink-3.png",
    alt: "The Puro Link gallons page with counts by status and the customers holding them",
    caption:
      "Gallons by type and status, and which customers are holding them. Every change goes through one ledger.",
  },
  {
    src: "/images/purolink-4.png",
    alt: "The Puro Link balances page with aging buckets and a Collect button per customer",
    caption:
      "Unpaid balances grouped by age, with the oldest unpaid sale and a Collect button for each customer.",
  },
  {
    src: "/images/purolink-5.png",
    alt: "The Puro Link POS with refills, containers and other products",
    caption:
      "The POS. Prices always come from the station's product list, never from the request.",
  },
  {
    src: "/images/purolink-6.png",
    alt: "The Puro Link platform admin overview with platform counts and growth charts",
    caption:
      "The platform admin: stations waiting for review, counts and growth, never a station's customers or sales.",
  },
];

const modules = [
  {
    title: "POS and sales",
    body: "A counter screen for refills, new containers and other items, for walk-ins or saved customers. Sales can be paid in full, in part or later, and a void reverses the gallons and balances with a reason.",
  },
  {
    title: "Gallon tracker",
    body: "Every container type is counted by status: available, for cleaning, reserved, out for delivery, with a customer, damaged or lost. One function moves the counts, refuses to go below zero and writes the ledger.",
  },
  {
    title: "Payments and balances",
    body: "A payment goes to one chosen sale or to the oldest unpaid sales first. Balances are grouped by age, credit limits are checked at the POS, and each customer has a printable statement.",
  },
  {
    title: "Orders and delivery",
    body: "Customers order from the nearest station and follow the order live over Socket.IO. The station accepts, prepares and assigns a rider, and the delivery becomes a sale with cash collected and empties returned.",
  },
  {
    title: "Nearest station map",
    body: "Customers search by address or their location and see approved stations by distance on a Leaflet map, with prices, hours and delivery area. Geocoding goes through a cached, rate-limited proxy.",
  },
  {
    title: "Staff and stations",
    body: "An owner runs several stations under one business. Staff sign in with a station code and get permission presets (counter, rider, manager) that the owner can fine-tune per person.",
  },
  {
    title: "Plans and billing",
    body: "Free, Pro and Business plans with limits on stations, staff and features. Upgrades go through PayMongo GCash checkout, confirmed by a signed webhook, with renewal reminders and a grace period.",
  },
  {
    title: "Reports and admin",
    body: "A dashboard and reports for sales, refills, collections, balances, gallons and orders. A platform admin approves stations from their permits and sees counts and billing across the platform.",
  },
];

const flow = [
  "Pending",
  "Accepted",
  "Preparing",
  "Out for delivery",
  "Delivered",
];

const decisions = [
  {
    title: "Strict tenant isolation",
    body: "Every station request carries its business and station, and every query filters by them. A user who isn't a member, or a station a staff member isn't assigned to, gets 404, not 403, so they can't tell it exists.",
  },
  {
    title: "One path for every gallon",
    body: "Gallon counts change only through one function that locks the rows, refuses to go negative and records who moved what and why. Sales, orders, returns and voids all go through it, so the counts always match the ledger.",
  },
  {
    title: "Money in centavos, prices from the database",
    body: "Amounts are PHP stored as bigint centavos. Prices are read from the station's products, never from the request, and an order keeps the prices it was placed with.",
  },
  {
    title: "The admin never sees station data",
    body: "The platform admin sees counts, billing and verification, never a station's customer list or sales. A privacy contract test fails if an admin or public route returns internal fields.",
  },
  {
    title: "Not an official receipt",
    body: "Puro Link records sales; it doesn't replace a BIR-registered POS. There is no VAT, no OR or SI numbering, and any printed summary says NOT AN OFFICIAL RECEIPT.",
  },
  {
    title: "Private permit documents",
    body: "Station permits are authenticated Cloudinary uploads, signed by kind, size and type. Only the owner and the platform admin can open them, through short-lived signed links.",
  },
];

const testing = [
  "Tests run in-process against a real PostgreSQL database and a real Redis, with nothing in the data path mocked.",
  "Contract tests fail the suite on a route with no permission check, a write with no audit row, an :id route with no isolation fixture, or internal fields on a public or admin answer.",
  "A route coverage guard fails the suite if any route has no passing test.",
  "A load check builds 5,000 stations, a million sales, half a million orders and three million gallon movements, then times search, the order board, balances, reports and the dashboard against their budgets.",
  "Deploys health-check the new containers and roll back automatically, and a nightly backup is restored into a fresh database to prove it works.",
];

export default function PuroLinkCaseStudy() {
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
            Puro Link
          </h1>
          <p className="mt-3 font-titleFont text-xl text-colorDark md:text-2xl">
            Water refilling station platform
          </p>
          <p className="mt-6 max-w-[48rem] text-base leading-relaxed md:text-lg">
            Puro Link is a multi-tenant SaaS for water refilling stations in the
            Philippines. Station owners record sales, track their 5-gallon
            containers and collect what customers owe, and customers find the
            nearest station and order a refill to their door. I designed and
            built all of it on my own, from the database schema and API to the
            interface, tests and deployment.
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
              <dd className="mt-1">Built, preparing for launch</dd>
            </div>
          </dl>
        </section>

        {/* screenshot */}
        <div className="mt-12 overflow-hidden rounded-lg ring-1 ring-colorPrimary/20">
          <Image
            src="/images/purolink-1.png"
            alt="The Puro Link landing page with a station search and an order tracker"
            width={1920}
            height={960}
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
            A neighborhood water refilling station runs on a notebook. Who
            borrowed how many gallons, who still owes for last week&apos;s
            refill, and which containers are out, damaged or lost all live in
            handwriting and memory. Orders come in by text and phone call, and
            the owner can&apos;t see how a second branch is doing without being
            there.
          </p>
          <p>
            Puro Link puts each station&apos;s sales, gallons, balances and
            orders in one place, and gives customers a simple way to find a
            station near them and order without installing anything.
          </p>
          <p>
            It&apos;s deliberately a record-keeping tool. Payments are recorded
            at the counter or on delivery, and it issues no official receipts
            and computes no VAT.
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

        {/* screenshots */}
        <Section number="03" title="Inside the app">
          <div className="flex flex-col gap-10">
            {screenshots.map((shot) => (
              <figure key={shot.src} className="flex flex-col gap-3">
                <div className="overflow-hidden rounded-lg ring-1 ring-colorPrimary/20">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1920}
                    height={960}
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="text-sm text-colorDark">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* order flow diagram */}
        <Section number="04" title="An order, end to end">
          <p>
            A customer&apos;s order moves through the same steps at every
            station. Each step updates the customer, the station and the rider
            live, and the delivery itself becomes a sale.
          </p>
          <div className="mt-2 flex flex-col gap-6 rounded-lg bg-[#112240] p-5 md:p-8">
            <div>
              <p className="font-titleFont text-xs tracking-widest text-colorDark">
                ORDER STATUS
              </p>
              <Chain steps={flow} />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-md border border-colorPrimary/30 p-4">
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  AT THE STATION
                </p>
                <p className="mt-2 font-titleFont text-sm">
                  Preparing reserves full gallons. Sending a rider moves them
                  out for delivery.
                </p>
                <p className="mt-2 text-xs text-colorDark">
                  New orders ring on the board, and an order nobody accepts is
                  cancelled automatically after the station&apos;s time limit.
                </p>
              </div>
              <div className="rounded-md border border-colorPrimary/30 p-4">
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  AT THE DOOR
                </p>
                <p className="mt-2 font-titleFont text-sm">
                  The rider records cash collected and empties returned, even
                  when it&apos;s only part of the total.
                </p>
                <p className="mt-2 text-xs text-colorDark">
                  What&apos;s left unpaid goes to the customer&apos;s balance,
                  and the gallons they keep go to their holdings.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 border-t border-colorDark/30 pt-6">
              <p className="rounded-md bg-colorPrimary px-4 py-2 text-center font-titleFont text-sm font-semibold text-bodyColor">
                One delivery updates the sale, the balance and the gallon ledger
                together.
              </p>
              <p className="text-center text-xs text-colorDark">
                Owner, counter, rider, manager, customer and platform admin each
                map to permission codes enforced by the API
              </p>
            </div>
          </div>
        </Section>

        {/* decisions */}
        <Section number="05" title="Engineering decisions">
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
        <Section number="06" title="Testing">
          <p>
            Isolation between stations and the gallon and money rules have to
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
        <Section number="07" title="Tech stack">
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
            The interface has its own aqua theme, a light mode and a deep-ocean
            dark mode, with every text pair checked for contrast. The customer
            and rider screens are built for phones, work as an installable web
            app, and load the map library only on pages that show a map.
          </p>
        </Section>

        {/* call to action */}
        <section className="mt-20 flex flex-col items-center gap-4 rounded-lg border border-colorPrimary/30 p-8 text-center md:p-12">
          <h2 className="font-titleFont text-2xl font-semibold md:text-3xl">
            Still running your business on a notebook?
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
