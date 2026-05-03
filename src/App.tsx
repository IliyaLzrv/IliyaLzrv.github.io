import { useState } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, ExternalLink, Sparkles } from 'lucide-react'
import { ContactPanel } from './components/ContactPanel.tsx'
import { GitHubActivity } from './components/GitHubActivity.tsx'
import { InteractiveTechStack } from './components/InteractiveTechStack.tsx'
import { LazDevCaseStudyModal } from './components/LazDevCaseStudyModal.tsx'
import { Navbar } from './components/Navbar.tsx'
import { ProjectCard } from './components/ProjectCard.tsx'
import { Reveal } from './components/Reveal.tsx'
import { SectionHeading } from './components/SectionHeading.tsx'
import { Timeline } from './components/Timeline.tsx'
import { ValueCard } from './components/ValueCard.tsx'
import { featuredProjects, otherWorkItems } from './data/featuredProjects.ts'

const ACCENT = '#2DD4BF'
const LINKEDIN = 'https://linkedin.com/in/ilia-lazarov-594409159/'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github-activity' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Why hire', href: '#why' },
] as const

const LAZDEV_SAAS_TITLE = 'LazDev SaaS Platform'

export default function App() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const spotlight = useMotionTemplate`radial-gradient(700px circle at ${mx}px ${my}px, rgba(45,212,191,0.18), rgba(0,0,0,0) 55%)`

  return (
    <div className="min-h-dvh bg-[#070A12] text-zinc-200 selection:bg-teal-300/20">
      <Navbar links={[...NAV_LINKS]} cta={{ label: 'Contact', href: '#contact' }} />

      <main className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_20%_15%,rgba(45,212,191,0.09),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_40%,rgba(99,102,241,0.10),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.55] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent_70%)]" />
        </div>

        {/* Hero */}
        <section
          id="top"
          className="relative overflow-hidden pt-28 sm:pt-32"
          onMouseMove={(e) => {
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
            mx.set(e.clientX - rect.left)
            my.set(e.clientY - rect.top)
          }}
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: spotlight as unknown as string }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_18%,rgba(45,212,191,0.10),transparent_70%)]"
            animate={{ opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="container-px relative pb-12 sm:pb-16 lg:pb-20">
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <div className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-left text-[12px] text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_16px_40px_rgba(0,0,0,0.45)] sm:text-[13px]">
                  <Sparkles size={14} className="shrink-0 text-teal-300" />
                  <span className="text-zinc-200">Available for junior roles · Eindhoven · Remote-friendly</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.08]">
                  I build polished full-stack and mobile products that feel ready for real users.
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-5 text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
                  <span className="font-medium text-zinc-200">Junior Software Engineer</span> and{' '}
                  <span className="font-medium text-zinc-200">Full-Stack &amp; Mobile Developer</span> based in{' '}
                  <span className="text-zinc-300">Eindhoven, Netherlands</span>. Strong in React, Next.js, Flutter, Java
                  Spring Boot, C#, REST APIs, SaaS, UI/UX, and production-ready software. Open to junior software
                  engineering, full-stack, frontend, backend, and mobile roles—looking to contribute to real product
                  teams.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#projects"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-[0_10px_35px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/95 active:translate-y-0 sm:w-auto"
                  >
                    View Projects
                    <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] active:translate-y-0 sm:w-auto"
                  >
                    Contact Me
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03] active:translate-y-0 sm:w-auto"
                  >
                    <ExternalLink size={16} className="text-teal-300" />
                    LinkedIn
                  </a>
                </div>
              </Reveal>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                {[
                  { label: 'Next.js', delay: 0.1 },
                  { label: 'React', delay: 0.14 },
                  { label: 'TypeScript', delay: 0.18 },
                  { label: 'Flutter', delay: 0.22 },
                  { label: 'Spring Boot', delay: 0.26 },
                  { label: 'C#/.NET', delay: 0.3 },
                ].map((b) => (
                  <motion.span
                    key={b.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + b.delay, duration: 0.55, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-200"
                  >
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0"
                      animate={{ opacity: [0, 0.35, 0] }}
                      transition={{ duration: 3.6, repeat: Infinity, delay: b.delay }}
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, rgba(45,212,191,0.22), transparent)',
                      }}
                    />
                    {b.label}
                  </motion.span>
                ))}
              </div>
            </div>

            <Reveal delay={0.18}>
              <div className="mx-auto mt-10 w-full sm:mt-12">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_10%,rgba(45,212,191,0.18),transparent_55%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_30%,rgba(56,189,248,0.16),transparent_55%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.6] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent_72%)]" />

                  <div className="relative p-5 sm:p-6 lg:p-7">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      <div className="ml-3 text-xs text-zinc-500">How I work — production-minded delivery</div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      {[
                        {
                          title: 'Ship quality, not noise',
                          desc: 'Clean structure, readable UI states, and implementation you can extend with confidence.',
                          icon: BriefcaseBusiness,
                        },
                        {
                          title: 'Full-stack + mobile range',
                          desc: 'From React interfaces to APIs and Flutter—comfortable owning features end-to-end.',
                          icon: Sparkles,
                        },
                        {
                          title: 'Design-aware polish',
                          desc: 'Graphic design background → tighter hierarchy, spacing, and premium presentation.',
                          icon: Sparkles,
                        },
                      ].map((c) => (
                        <motion.div
                          key={c.title}
                          whileHover={{ y: -4 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                          className="group relative flex min-h-[8.5rem] flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05]"
                              style={{
                                boxShadow: `0 0 0 1px rgba(255,255,255,0.03), 0 0 30px rgba(45,212,191,0.10)`,
                              }}
                            >
                              <c.icon size={18} className="text-teal-300" />
                            </div>
                            <div className="text-sm font-medium text-white">{c.title}</div>
                          </div>
                          <div className="mt-2 text-sm text-zinc-300">{c.desc}</div>
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl"
                            style={{
                              background: `radial-gradient(circle, ${ACCENT}33, transparent 60%)`,
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured projects */}
        <section id="projects" className="scroll-anchor section-y container-px relative">
          <SectionHeading
            eyebrow="Featured work"
            title="Production SaaS, enterprise delivery, and live products"
            subtitle="What I owned end-to-end—from auth and APIs to UI polish and deployment."
          />

          <div className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((p, idx) => (
              <Reveal key={p.title} delay={0.04 * idx} className="h-full min-h-0">
                <ProjectCard
                  project={p}
                  onOpenCaseStudy={p.title === LAZDEV_SAAS_TITLE ? () => setCaseStudyOpen(true) : undefined}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 border-t border-white/10 pt-12">
            <Reveal>
              <h3 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Other selected work
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-500">
                Smaller builds and experiments—worth a mention without competing with flagship projects.
              </p>
              <div className="mx-auto mt-6 grid max-w-5xl gap-3 sm:grid-cols-3">
                {otherWorkItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.05 * i, duration: 0.45 }}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.description}</p>
                    <div className="mt-3 text-[11px] font-medium uppercase tracking-wide text-teal-300/80">
                      {item.stack}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-anchor section-y container-px relative">
          <SectionHeading
            eyebrow="About"
            title="Engineering depth with a designer’s eye"
            subtitle="Hire-focused: I want to contribute to real teams, ship maintainable software, and keep leveling up."
          />

          <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-7">
              <div className="flex h-full min-h-0 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.45)] sm:p-8">
                <p className="text-base leading-relaxed text-zinc-300">
                  I’m a <span className="font-medium text-white">Software Engineering student</span> at{' '}
                  <span className="font-medium text-white">Fontys University of Applied Sciences</span> in{' '}
                  <span className="font-medium text-white">Eindhoven</span>, working toward a junior software engineering
                  role with a focus on full-stack, mobile, and SaaS.
                </p>
                <p className="mt-4 text-base leading-relaxed text-zinc-300">
                  My <span className="font-medium text-white">graphic design background</span> shapes how I approach
                  hierarchy, spacing, and modern UI/UX, while my engineering side cares about clean architecture, APIs,
                  testing, and shipping software that teammates can extend.
                </p>
                <p className="mt-4 text-base leading-relaxed text-zinc-300">
                  I’m actively looking to{' '}
                  <span className="font-medium text-white">join a product team</span>, take ownership of meaningful
                  features, and grow alongside experienced engineers.
                </p>
                <div className="mt-7 grid flex-1 content-start gap-3 sm:grid-cols-2">
                  {[
                    {
                      k: 'Title',
                      v: 'Junior Software Engineer / Full-Stack & Mobile',
                    },
                    {
                      k: 'Location',
                      v: 'Eindhoven, Netherlands',
                    },
                    {
                      k: 'Focus',
                      v: 'SaaS, web, mobile, REST APIs, CI/CD',
                    },
                    {
                      k: 'Seeking',
                      v: 'Junior software engineering · full-stack · frontend · backend · mobile',
                    },
                  ].map((item) => (
                    <div key={item.k} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-xs uppercase tracking-wide text-zinc-400">{item.k}</div>
                      <div className="mt-1 text-sm font-medium text-white">{item.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5">
              <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.45)] sm:p-8">
                <div className="text-sm font-medium text-white">Quick profile</div>
                <div className="mt-4 space-y-3 text-sm text-zinc-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-zinc-400">Role</div>
                    <div className="text-right text-white/90">Junior Software Engineer</div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-zinc-400">Strength</div>
                    <div className="text-right text-white/90">UI/UX craft · full-stack delivery</div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-zinc-400">Stack</div>
                    <div className="text-right text-white/90">React, Next.js, Flutter, Spring Boot, C#</div>
                  </div>
                </div>

                <div className="mt-auto rounded-xl border border-white/10 bg-gradient-to-br from-teal-400/15 via-sky-400/10 to-indigo-400/10 p-5">
                  <div className="text-sm font-medium text-white">What you can expect</div>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-200/90">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/90" />
                      Clear UI systems, sensible architecture, and code that teammates can extend.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/90" />
                      REST APIs, testing, CI/CD awareness, and performance-conscious frontend work.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/90" />
                      Communication that keeps stakeholders aligned and delivery predictable.
                    </li>
                  </ul>
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full blur-3xl"
                  style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.16), transparent 60%)' }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-anchor section-y container-px relative overflow-visible">
          <SectionHeading
            eyebrow="Tech stack"
            title="Engineering toolkit"
            subtitle="Years of use are visible at a glance; hover for where it shipped and what I built with it."
          />

          <div className="mt-8 overflow-visible sm:mt-10">
            <InteractiveTechStack />
          </div>
        </section>

        {/* GitHub Activity */}
        <section id="github-activity" className="scroll-anchor section-y container-px relative">
          <SectionHeading
            eyebrow="Open source & consistency"
            title="GitHub Activity"
            subtitle="A snapshot of my consistency, learning, and shipped work."
          />
          <div className="mt-8 sm:mt-10">
            <GitHubActivity />
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="scroll-anchor section-y container-px relative">
          <SectionHeading
            eyebrow="Education & experience"
            title="Where I’ve built momentum"
            subtitle="Formal software engineering training in Eindhoven, enterprise platform delivery at Sorama, and full-stack SaaS ownership at LazDev."
          />

          <div className="mt-8 sm:mt-10">
            <Reveal>
              <Timeline
                items={[
                  {
                    title: 'Fontys University of Applied Sciences — Eindhoven, Netherlands',
                    time: '2022 – Present · BSc ICT - Software Engineering',
                    points: [
                      'Specialized in mobile, web, and full-stack development',
                      'Built applications using Java, Flutter, React, C#, REST APIs, and cloud tooling',
                      'Applied Agile/Scrum, architecture, UI/UX, testing, and CI/CD',
                      'Focused on scalable, maintainable, user-friendly software',
                    ],
                  },
                  {
                    title: 'Software Developer — Sorama',
                    time: 'Sept 2025 – Jan 2026',
                    points: [
                      'Migrated core modules from Aurelia to React',
                      'Built reusable React components integrated with C# .NET APIs',
                      'Delivered user-focused features from stakeholder and design requirements',
                      'Improved usability, performance, and frontend maintainability',
                      'Worked in agile planning, implementation, and technical refinement',
                    ],
                  },
                  {
                    title: 'Full-Stack Developer — LazDev',
                    time: 'May 2026 – Present',
                    points: [
                      'Built SaaS platform for client collaboration, document management, approvals, and AI-powered productivity',
                      'Developed secure Admin/Client workspaces with JWT auth and role-based access',
                      'Implemented AI summaries, Q&A, semantic search, notifications, and automated emails',
                      'Deployed full-stack app using Vercel and Render',
                    ],
                  },
                ]}
              />
            </Reveal>
          </div>
        </section>

        {/* Why hire me */}
        <section id="why" className="scroll-anchor section-y container-px relative">
          <SectionHeading
            eyebrow="Why hire me"
            title="What I bring as a developer"
            subtitle="Practical strengths from coursework, enterprise product work, and shipping a SaaS platform—ready to contribute on day one."
          />

          <div className="mt-8 grid items-stretch gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {[
              {
                title: 'Full-stack foundation',
                desc: 'Comfortable working across frontend, backend, APIs, databases, and deployment.',
              },
              {
                title: 'Design-aware frontend',
                desc: 'Graphic design background helps me build interfaces that feel clean, modern, and easy to use.',
              },
              {
                title: 'Real product experience',
                desc: 'Enterprise platform work at Sorama and SaaS delivery at LazDev taught me real requirements, feedback cycles, and shipping discipline.',
              },
              {
                title: 'Mobile + web range',
                desc: 'Experience with React, Next.js, Flutter, Java Spring Boot, and C# .NET.',
              },
              {
                title: 'Quality mindset',
                desc: 'I care about maintainable code, testing, CI/CD, performance, and clean architecture.',
              },
              {
                title: 'Fast learner',
                desc: 'I adapt quickly, ask the right questions, and turn feedback into better implementation.',
              },
            ].map((card, idx) => (
              <Reveal key={card.title} delay={0.03 * idx} className="h-full min-h-0">
                <ValueCard title={card.title} desc={card.desc} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-anchor section-y container-px relative">
          <ContactPanel />
        </section>

        <footer className="container-px relative pb-10 pt-6 text-sm text-zinc-500">
          <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 sm:flex-row">
            <div>© {new Date().getFullYear()} Ilia Lazarov</div>
            <a href="#top" className="text-zinc-400 hover:text-white/90">
              Back to top
            </a>
          </div>
        </footer>
      </main>

      <LazDevCaseStudyModal open={caseStudyOpen} onClose={() => setCaseStudyOpen(false)} />
    </div>
  )
}
