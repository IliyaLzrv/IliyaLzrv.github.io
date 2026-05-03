import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

export type ProjectCtaState =
  | 'live'
  | 'private'
  | 'on_request'
  | 'request_walkthrough'
  | 'case_study_soon'

export type ProjectCta = {
  label: string
  href?: string
  icon: LucideIcon
  state?: ProjectCtaState
  /** In-app case study (button, not a link) */
  action?: 'case_study'
}

export type ProjectStatus =
  | 'Live'
  | 'Private'
  | 'In Progress'
  | 'Case Study on Request'
  | 'Real-world delivery'
  | 'In progress · Private'
  | 'Live · Portfolio-ready'
  | 'Delivered'

export type ProjectPreviewVariant = 'enterprise' | 'brand' | 'internal' | 'saas'

export type Project = {
  title: string
  category: string
  description: string
  tech: readonly string[]
  contribution: readonly string[]
  ctas: readonly ProjectCta[]
  status: ProjectStatus
  previewVariant?: ProjectPreviewVariant
}

function statusTone(status: ProjectStatus) {
  if (status === 'Live' || status === 'Live · Portfolio-ready' || status === 'Delivered') {
    return 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200'
  }
  if (status === 'In Progress' || status === 'In progress · Private') {
    return 'border-sky-400/20 bg-sky-400/10 text-sky-200'
  }
  if (status === 'Real-world delivery') {
    return 'border-teal-400/20 bg-teal-400/10 text-teal-100'
  }
  return 'border-white/10 bg-white/[0.04] text-zinc-300'
}

const previewBar: Record<ProjectPreviewVariant, string> = {
  enterprise: 'from-zinc-500/40 to-zinc-600/30',
  brand: 'from-teal-400/35 to-sky-500/25',
  internal: 'from-indigo-400/30 to-teal-400/20',
  saas: 'from-violet-500/40 to-teal-400/30',
}

function PreviewMockup({ variant }: { variant: ProjectPreviewVariant }) {
  const bar = previewBar[variant]

  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950/80">
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${bar}`} aria-hidden />
      <div className="absolute inset-0 opacity-[0.55] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_15%_0%,rgba(45,212,191,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_100%_at_90%_30%,rgba(56,189,248,0.10),transparent_50%)]" />
      <div className="relative mx-auto mt-[10%] flex h-[58%] w-[88%] flex-col rounded-lg border border-white/10 bg-white/[0.04] p-2 shadow-lg sm:mt-[12%] sm:p-3">
        <div className="flex gap-1.5">
          <div className="h-1.5 w-8 rounded-full bg-white/15" />
          <div className="h-1.5 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="mt-2 grid flex-1 grid-cols-3 gap-2">
          <div className="col-span-2 rounded-md border border-white/10 bg-white/[0.03]" />
          <div className="rounded-md border border-white/10 bg-white/[0.03]" />
        </div>
      </div>
    </div>
  )
}

export function ProjectCard({
  project,
  onOpenCaseStudy,
}: {
  project: Project
  onOpenCaseStudy?: () => void
}) {
  const variant: ProjectPreviewVariant = project.previewVariant ?? 'brand'

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 340, damping: 24 }}
      className={[
        'group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]',
        'shadow-[0_22px_70px_rgba(0,0,0,0.45)] transition-[box-shadow,border-color,transform] duration-300',
        'hover:border-teal-400/20 hover:shadow-[0_22px_70px_rgba(0,0,0,0.5),0_0_0_1px_rgba(45,212,191,0.12)]',
      ].join(' ')}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
        }}
      />
      <div className="relative flex min-h-0 flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pt-6">
        <div className="flex items-start justify-between gap-3">
          <p className="min-w-0 flex-1 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
            {project.category}
          </p>
          <span
            className={[
              'max-w-[11rem] shrink-0 text-right text-[11px] font-medium leading-tight',
              'rounded-full border px-2.5 py-0.5',
              statusTone(project.status),
            ].join(' ')}
          >
            {project.status}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        <div className="relative mt-4 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40">
          <div className="aspect-[16/9] w-full max-w-full overflow-hidden">
            <div className="h-full w-full origin-center transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]">
              <PreviewMockup variant={variant} />
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex min-h-0 flex-1 flex-col justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">What I built</p>
            <ul className="mt-2 space-y-1.5 text-[13px] leading-snug text-zinc-300">
              {project.contribution.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/80" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mt-auto border-t border-white/10 px-4 py-3.5 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {project.ctas.map((l) => {
            if (l.action === 'case_study') {
              return (
                <button
                  key={l.label}
                  type="button"
                  onClick={() => onOpenCaseStudy?.()}
                  className="inline-flex items-center gap-2 rounded-lg border border-teal-400/25 bg-teal-400/10 px-3 py-2 text-xs font-medium text-teal-50 transition hover:border-teal-400/40 hover:bg-teal-400/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400/50"
                >
                  <l.icon size={14} className="text-teal-200" />
                  <span>{l.label}</span>
                </button>
              )
            }

            const isPrivate = l.state === 'private'
            const isSoon = l.state === 'case_study_soon'
            const isDisabled = isPrivate || isSoon || !l.href
            const styles = isDisabled
              ? isSoon
                ? 'cursor-default border-white/10 bg-white/[0.02] text-zinc-500'
                : 'cursor-not-allowed border-white/10 bg-white/[0.02] text-zinc-500'
              : 'border-white/12 bg-white/[0.04] text-white/90 hover:border-white/18 hover:bg-white/[0.06]'

            const external = Boolean(l.href?.startsWith('http'))

            return (
              <a
                key={l.label}
                href={l.href ?? '#'}
                aria-disabled={isDisabled ? true : undefined}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={[
                  'inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400/50',
                  styles,
                ].join(' ')}
                onClick={(e) => {
                  if (isDisabled) e.preventDefault()
                }}
              >
                <l.icon size={14} className={isDisabled ? 'text-zinc-600' : 'text-teal-300'} />
                <span>{l.label}</span>
              </a>
            )
          })}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.14), transparent 60%)' }}
      />
    </motion.article>
  )
}
