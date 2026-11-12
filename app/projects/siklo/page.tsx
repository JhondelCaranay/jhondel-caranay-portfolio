import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description =
  "How I built Siklo on my own: a system that tracks every software project from first plan to shutdown, with a guarded stage flow, post-launch billing, a client portal and money that never reaches programmers.";

export const metadata: Metadata = {
  title: "Siklo case study",
  description,
  alternates: { canonical: "/projects/siklo" },
  openGraph: {
    type: "article",
    url: "/projects/siklo",
    title: "Siklo case study | Jhondel Caranay",
    description,
  },
};

const stats = [
  { value: "35", label: "API modules" },
  { value: "49", label: "Database tables" },
  { value: "197", label: "Documented routes" },
  { value: "49", label: "Test files" },
];

const techstack = [
  "TypeScript",
  "Express 5",
  "React 19 (Vite)",
  "TanStack Router, Query & Table",
  "Base UI",
  "Tailwind CSS",
  "dnd-kit",
  "PostgreSQL",
  "Drizzle ORM",
  "Redis",
  "Socket.IO",
  "Cloudinary",
  "Resend",
  "Zod",
  "Recharts",
  "Vitest",
  "Docker",
  "Sentry",
];

const screenshots = [
  {
    src: "/images/siklo-2.png",
    alt: "The Siklo pipeline board with projects grouped by stage",
    caption:
      "The pipeline. Dragging a card runs the same checked stage change as the Move stage button.",
  },
  {
    src: "/images/siklo-3.png",
    alt: "The Siklo projects list with stage, progress and contract columns",
    caption:
      "Every project with its stage, progress, risk and contract amount, as a list or cards.",
  },
  {
    src: "/images/siklo-4.png",
    alt: "A Siklo project page with its lifecycle track and ticket kanban",
    caption:
      "A project's lifecycle track and its ticket kanban, with per-project ticket codes.",
  },
];

const modules = [
  {
    title: "Lifecycle and pipeline",
    body: "Projects move through eight stages on a drag-and-drop pipeline. Each move checks its own requirements, such as a proposal, a signed approval, a UAT sign-off or a logged production deployment, and records who moved it and why.",
  },
  {
    title: "Phases",
    body: "Phase 1 is the initial build and drives the project's stage. A later phase, like a v2, runs its own pipeline card while the project stays Live, so hosting and billing carry on.",
  },
  {
    title: "Tickets and progress",
    body: "Features, bugs, tasks, change requests and support tickets on a kanban with rank ordering and live updates. Milestones show progress from estimate points and flag work that is at risk or overdue.",
  },
  {
    title: "Time, comments and approvals",
    body: "Programmers log time per ticket against the estimate. Comments support @mentions, attachments and internal notes, and approvals keep the signed document behind each decision.",
  },
  {
    title: "Costs and renewals",
    body: "Expenses by category, with recurring templates for hosting, domains and licenses. Renewals send reminders 30, 7 and 1 day ahead, and every project shows its running cost.",
  },
  {
    title: "Billing and payments",
    body: "A daily job generates service billing records 15 days before they are due. Contract downpayments, milestones and final payments share one table, and payments can be partial but are never edited, only voided with a reason.",
  },
  {
    title: "Deployments and maintenance",
    body: "A deployment log per environment, maintenance schedules and records, and incidents that link to the tickets that fixed them.",
  },
  {
    title: "Chat, portal and reports",
    body: "A chat channel per project plus DMs over Socket.IO. Clients get a separate portal with their progress, tickets and billing. A dashboard and reports share one set of formulas and export to CSV and PDF.",
  },
];

const stages = [
  "Planning",
  "Approval",
  "Development",
  "Testing/UAT",
  "Deployment",
  "Live",
  "Maintenance",
  "Shutdown",
  "Archived",
];

const decisions = [
  {
    title: "Every stage change is guarded",
    body: "Each move has a rule for who may make it and what it needs, kept in one table of cases that both the API and the tests read. A project on hold can't move until it is released, and a backward move needs a note.",
  },
  {
    title: "Money never reaches programmers",
    body: "Cost, contract amount, payments and profit are removed by the API, not just hidden in the UI. A contract test reads every route a programmer can call and fails if any money field comes back.",
  },
  {
    title: "No access means 404, not 403",
    body: "A user who isn't on a project can't tell it exists. Project isolation is checked on every project route by a contract test, and clients only ever see the simplified statuses and their own records.",
  },
  {
    title: "Archived is permanent",
    body: "There is no reopen. Every write on an archived project answers 409 PROJECT_ARCHIVED, chat history included, so the archive stays a reliable record of what happened.",
  },
  {
    title: "Money in centavos, payments never edited",
    body: "All amounts are PHP stored as bigint centavos. Overpayment is refused, a mistake is voided with a reason instead of edited, and an invariant check proves billing and payments reconcile after every scenario.",
  },
  {
    title: "Private files by default",
    body: "Attachments are authenticated Cloudinary assets behind one storage service. A download is a short-lived signed link, issued only after the same permission check as the record it belongs to.",
  },
];

const testing = [
  "Tests run in-process against a real PostgreSQL database and a real Redis, with nothing in the data path mocked.",
  "Contract tests fail the suite on a route with no permission check, a write with no audit row, a cache with no invalidator, money a programmer could read, or internal data in the client portal.",
  "Every route must have a row in the API docs with the right access code, and a route coverage guard fails the suite if any route has no passing test.",
  "A full day runs through the API from start to finish, and a concurrency suite fires conflicting writes at once to prove tickets, billing and payments stay correct.",
  "A load check builds a database with 200 projects, 100,000 tickets and 500,000 messages and times every list, board, report and the dashboard against its budget.",
];

export default function SikloCaseStudy() {
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
            Siklo
          </h1>
          <p className="mt-3 font-titleFont text-xl text-colorDark md:text-2xl">
            Software project lifecycle tracker
          </p>
          <p className="mt-6 max-w-[48rem] text-base leading-relaxed md:text-lg">
            Siklo, Filipino for &ldquo;cycle&rdquo;, is an internal system for a
            software team. It follows every project from the first plan through
            approval, development, launch and maintenance until it is shut down,
            and it keeps tracking after launch: hosting costs, renewals,
            maintenance and client payments. I designed and built all of it on
            my own, from the database schema and API to the interface and tests.
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
              <dd className="mt-1">
                <Link
                  href="https://siklo-ui.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-colorPrimary hover:underline"
                >
                  Live demo
                </Link>
              </dd>
            </div>
          </dl>
        </section>

        {/* screenshot */}
        <div className="mt-12 overflow-hidden rounded-lg ring-1 ring-colorPrimary/20">
          <Image
            src="/images/siklo-1.png"
            alt="The Siklo dashboard"
            width={1896}
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
            A software team&apos;s work doesn&apos;t end at launch. Each system
            still needs hosting, renewals, fixes and maintenance, and the client
            still owes payments. When that lives in chat threads, spreadsheets
            and memory, it&apos;s hard to see which projects are at risk, what
            each one really costs, or who hasn&apos;t paid.
          </p>
          <p>
            Siklo keeps the whole life of a project in one place. Every stage
            change is checked and recorded, tickets and milestones show real
            progress, and after launch the same project carries its costs,
            billing, maintenance and incidents until it is shut down and
            archived.
          </p>
          <p>
            It&apos;s deliberately a record-keeping tool for one organization.
            Payments are recorded, not processed, and it issues no official
            receipts and computes no VAT.
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
                    width={1908}
                    height={904}
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

        {/* lifecycle diagram */}
        <Section number="04" title="The lifecycle">
          <p>
            Every project follows the same stages. Each forward move has its
            own requirement, some moves can go back with a note, and only an
            Admin can approve, shut down, archive or cancel.
          </p>
          <div className="mt-2 flex flex-col gap-6 rounded-lg bg-[#112240] p-5 md:p-8">
            <div>
              <p className="font-titleFont text-xs tracking-widest text-colorDark">
                STAGES
              </p>
              <Chain steps={stages} />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-md border border-colorPrimary/30 p-4">
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  BEFORE LAUNCH
                </p>
                <p className="mt-2 font-titleFont text-sm">
                  Approval needs a signed document. Live needs a logged
                  production deployment.
                </p>
                <p className="mt-2 text-xs text-colorDark">
                  Moving to Deployment warns about open urgent bugs, and a
                  project can be cancelled with a reason before it goes live.
                </p>
              </div>
              <div className="rounded-md border border-colorPrimary/30 p-4">
                <p className="font-titleFont text-xs tracking-widest text-colorDark">
                  AFTER LAUNCH
                </p>
                <p className="mt-2 font-titleFont text-sm">
                  Maintenance needs an active service plan. Archiving needs a
                  finished shutdown checklist.
                </p>
                <p className="mt-2 text-xs text-colorDark">
                  Archiving warns about any unpaid balance, and an archived
                  project can never be reopened.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 border-t border-colorDark/30 pt-6">
              <p className="rounded-md bg-colorPrimary px-4 py-2 text-center font-titleFont text-sm font-semibold text-bodyColor">
                Every move is checked, recorded and on the project&apos;s
                timeline.
              </p>
              <p className="text-center text-xs text-colorDark">
                Admin, Project Manager, Finance, Programmer and Client each map
                to permission codes enforced by the API
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
            Access and money rules have to hold on every route, including ones
            added later. Alongside its feature tests, the API&apos;s Vitest and
            Supertest suite has contract tests that check those rules across
            the whole API.
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
            The interface has its own &ldquo;Mission Control&rdquo; theme, a
            blueprint-paper light mode and a control-room dark mode, with every
            text pair checked for WCAG AA contrast in both. Heavy libraries like
            dnd-kit and the charts load only on the pages that use them.
          </p>
        </Section>

        {/* call to action */}
        <section className="mt-20 flex flex-col items-center gap-4 rounded-lg border border-colorPrimary/30 p-8 text-center md:p-12">
          <h2 className="font-titleFont text-2xl font-semibold md:text-3xl">
            Losing track of your projects after launch?
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
