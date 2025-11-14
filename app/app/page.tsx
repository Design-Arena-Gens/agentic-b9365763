import AngularExperience from "../components/AngularExperience";

export default function Home() {
  const projects = [
    {
      name: "PulseKit Design System",
      description:
        "Cross-framework component library exported to both React and Angular packages with automated visual regression coverage.",
      metrics: ["35+ audited components", "99.98% Lighthouse A11y", "Storybook CI"],
      link: "https://dribbble.com",
    },
    {
      name: "JourneyFlow Analytics",
      description:
        "End-to-end funnel diagnostics with multi-touch attribution, live filters, and predictive churn insights backed by real-time APIs.",
      metrics: ["Built in React + TanStack", "Shipped in 11 weeks", "Saved CS 12h/week"],
      link: "https://github.com",
    },
    {
      name: "CareSync Portal",
      description:
        "Angular upgrade and RxJS refactor for a clinician portal with complex scheduling, permissions, and accessible data grids.",
      metrics: ["NgRx state slicing", "220% faster load", "WCAG 2.2 AA"],
      link: "https://medium.com",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 md:gap-24 md:px-10 lg:px-16 lg:pb-32 lg:pt-28">
        <section className="grid gap-10 rounded-[40px] border border-slate-700/40 bg-slate-950/60 p-10 shadow-[0_20px_70px_rgba(15,23,42,0.55)] backdrop-blur-3xl md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16 md:p-16">
          <div className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Avery Chen · Frontend Developer
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-100 md:text-5xl lg:text-6xl">
              Designing accessible, data-rich products with React and Angular.
            </h1>
            <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
              Three years shipping production-ready interfaces, taming complex
              design systems, and shaping delightful flows for fast-moving
              product teams. Focused on collaboration, iteration speed, and
              customer impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:avery.chen@frontend.studio"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
              >
                Start a project
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-900/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
              >
                View work
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[32px] border border-slate-700/40 bg-slate-900/30 p-6">
            <h2 className="text-sm uppercase tracking-[0.28em] text-slate-300">
              Playbook
            </h2>
            <ul className="space-y-5 text-sm text-slate-300">
              <li className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                  React Fast Lane
                </span>
                <p className="mt-2 leading-relaxed text-slate-300">
                  Hooks-first architecture, Suspense-ready data fetching, and
                  shared component patterns documented in Storybook.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Angular Systems Thinking
                </span>
                <p className="mt-2 leading-relaxed text-slate-300">
                  Feature modules with clean schematics, typed signals, and
                  state isolation via NgRx selectors.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Experience Metrics
                </span>
                <p className="mt-2 leading-relaxed text-slate-300">
                  Measure release readiness with performance budgets,
                  accessibility audits, and continuous user feedback loops.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-8 rounded-[36px] border border-slate-800/50 bg-slate-950/50 p-8 md:grid-cols-3 md:gap-6 md:p-12">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Core Toolkit
            </p>
            <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">
              React + Angular + DX empathy
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              From greenfield apps to legacy refactors, I stitch design,
              engineering, and analytics together with cohesive delivery
              practices.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              React Delivery
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Type-safe APIs with TanStack Query</li>
              <li>Progressive enhancement & streaming SSR</li>
              <li>Component libraries documented in Storybook</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Angular Excellence
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Standalone components & typed forms</li>
              <li>NgRx facades with feature-level selectors</li>
              <li>Custom schematics for repeatable scaffolds</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="space-y-10 rounded-[36px] border border-slate-800/50 bg-slate-950/70 p-8 md:p-12">
          <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Case Studies
              </p>
              <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">
                Recent wins with measurable impact
              </h2>
            </div>
            <a
              href="https://www.linkedin.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100"
            >
              Request full case studies
            </a>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group flex h-full flex-col justify-between rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-950/80 p-6 transition hover:border-sky-400/70 hover:shadow-[0_12px_45px_rgba(56,189,248,0.25)]"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                </div>
                <ul className="mt-5 space-y-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {project.metrics.map((metric) => (
                    <li key={metric} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80" />
                      {metric}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:text-sky-200"
                >
                  Explore project ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <AngularExperience />

        <section className="rounded-[36px] border border-slate-800/50 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Collaboration
              </p>
              <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">
                “Avery ships with empathy, precision, and unstoppable momentum.”
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                — Priya Nair, Director of Product Engineering, NovaPath Analytics
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-800/50 bg-slate-950/70 p-6 text-sm text-slate-300">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Feedback Highlights
                </span>
                <ul className="mt-3 space-y-2">
                  <li>• Turned Figma prototypes into production UI in days</li>
                  <li>• Mentored teams migrating AngularJS to modern Angular</li>
                  <li>• Delivered Lighthouse 95+ across enterprise dashboards</li>
                </ul>
              </div>
              <a
                href="mailto:avery.chen@frontend.studio"
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book a pairing session
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
