import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'
import { ArrowLeft, X } from 'lucide-react'
import { cn } from '../lib/cn'

const TECH = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Java Spring Boot',
  'PostgreSQL',
  'pgvector',
  'JWT',
  'REST APIs',
  'Vercel',
  'Render',
] as const

const FEATURES = [
  'Admin and client workspaces',
  'JWT authentication',
  'Role-based access control',
  'Isolated user data',
  'Document management',
  'Approval workflows',
  'Notifications',
  'Automated emails',
  'AI summaries',
  'AI Q&A',
  'Semantic search (pgvector)',
  'REST API integration',
  'Production deployment',
] as const

const CHALLENGES = [
  'Designing secure role-based workspaces',
  'Keeping client data isolated',
  'Building approval flows that are clear and maintainable',
  'Integrating AI features without making the UX confusing',
  'Deploying a full-stack app with production-ready configuration',
] as const

const LEARNED = [
  'Better full-stack architecture',
  'Secure authentication patterns',
  'Product-minded feature planning',
  'Deployment and environment configuration',
  'How to turn a business problem into a usable SaaS product',
] as const

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <h3 className="text-sm font-semibold tracking-tight text-teal-200/95">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-zinc-300">{children}</div>
    </div>
  )
}

export function LazDevCaseStudyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close case study"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className={cn(
              'relative z-10 flex max-h-[min(92dvh,900px)] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-white/10',
              'bg-[#080c18] shadow-[0_40px_120px_rgba(0,0,0,0.65)] sm:rounded-2xl',
            )}
          >
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Case study</p>
                <h2 id="case-study-title" className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  LazDev SaaS Platform Case Study
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  A production-ready SaaS platform for client collaboration, document management, approvals, and
                  AI-powered productivity.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-6">
              <div className="space-y-4 pb-4">
                <SectionCard title="1. Overview">
                  <p>
                    The LazDev SaaS platform is a full-stack web application built to support client collaboration,
                    secure document management, approval workflows, notifications, and AI-powered productivity features.
                  </p>
                </SectionCard>

                <SectionCard title="2. Problem">
                  <p>
                    Small teams and service businesses often manage client files, approvals, communication, and project
                    context across too many disconnected tools. This creates friction, duplicated work, unclear
                    approval states, and slow communication.
                  </p>
                </SectionCard>

                <SectionCard title="3. Solution">
                  <p>
                    The platform brings client collaboration into one structured workspace with role-based access,
                    secure user areas, document workflows, approval states, notifications, automated emails, and AI
                    support for summaries, Q&amp;A, and semantic search.
                  </p>
                </SectionCard>

                <SectionCard title="4. My role">
                  <ul className="list-inside list-disc space-y-1.5 marker:text-teal-400/80">
                    <li>Full-stack development</li>
                    <li>Product planning</li>
                    <li>Frontend architecture</li>
                    <li>Backend API development</li>
                    <li>Database modeling</li>
                    <li>Authentication and authorization</li>
                    <li>Deployment setup</li>
                    <li>UI/UX and interaction design</li>
                  </ul>
                </SectionCard>

                <SectionCard title="5. Core features">
                  <div className="flex flex-wrap gap-2">
                    {FEATURES.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-white/10 bg-zinc-950/50 px-2.5 py-1 text-[11px] font-medium text-zinc-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="6. Tech stack">
                  <div className="flex flex-wrap gap-2">
                    {TECH.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-teal-400/20 bg-teal-400/10 px-2.5 py-1 text-[11px] font-medium text-teal-100/95"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="7. Architecture">
                  <p className="mb-4">
                    <span className="font-medium text-white">Frontend:</span> Next.js + TypeScript + Tailwind.{' '}
                    <span className="font-medium text-white">Backend:</span> Java Spring Boot REST API.{' '}
                    <span className="font-medium text-white">Database:</span> PostgreSQL with pgvector.{' '}
                    <span className="font-medium text-white">Auth:</span> JWT with role-based access.{' '}
                    <span className="font-medium text-white">Deployment:</span> Vercel frontend + Render backend.
                  </p>
                  <div className="rounded-xl border border-white/10 bg-zinc-950/60 p-4 text-center text-xs font-medium leading-relaxed text-zinc-300 sm:text-sm">
                    <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2">
                      <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">Client UI</span>
                      <span className="hidden text-zinc-600 sm:inline">→</span>
                      <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">Auth / API</span>
                      <span className="hidden text-zinc-600 sm:inline">→</span>
                      <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                        Spring Boot services
                      </span>
                      <span className="hidden text-zinc-600 sm:inline">→</span>
                      <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                        PostgreSQL + pgvector
                      </span>
                      <span className="hidden text-zinc-600 sm:inline">→</span>
                      <span className="rounded-lg border border-teal-400/15 bg-teal-400/10 px-3 py-2 text-teal-100/90">
                        AI features
                      </span>
                    </div>
                  </div>
                </SectionCard>

                <SectionCard title="8. Challenges">
                  <ul className="list-inside list-disc space-y-1.5 marker:text-teal-400/80">
                    {CHALLENGES.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </SectionCard>

                <SectionCard title="9. What I learned">
                  <ul className="list-inside list-disc space-y-1.5 marker:text-teal-400/80">
                    {LEARNED.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </SectionCard>

                <SectionCard title="10. Outcome">
                  <p>
                    The project demonstrates my ability to design and build a full-stack SaaS product with real-world
                    features, production deployment thinking, secure access control, and modern UI/UX.
                  </p>
                </SectionCard>
              </div>
            </div>

            <div className="shrink-0 border-t border-white/10 px-5 py-4 sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.05] py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.08] sm:w-auto sm:px-5"
              >
                <ArrowLeft size={16} className="text-teal-300" />
                Back to portfolio
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
