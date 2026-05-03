import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Reveal } from './Reveal'

const CHART_URL = 'https://ghchart.rshah.org/iliyaLzrv'
const PROFILE = 'https://github.com/IliyaLzrv'

export function GitHubActivity() {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.45)] sm:p-6">
        <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/15 [&::-webkit-scrollbar-track]:bg-transparent">
          <img
            src={CHART_URL}
            alt="GitHub contribution chart for Ilia Lazarov"
            className="min-w-[720px] w-full max-w-none rounded-lg border border-white/10 bg-zinc-950/50 p-2 sm:min-w-0 sm:max-w-full"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-teal-300/95 transition hover:text-teal-200"
          >
            View GitHub profile
            <ExternalLink size={14} />
          </a>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            {
              title: 'Public projects',
              body: 'Repositories and commits you can review on GitHub.',
            },
            {
              title: 'Full-stack builds',
              body: 'SaaS, APIs, and UIs shipped end-to-end—not just tutorials.',
            },
            {
              title: 'Continuous learning',
              body: 'Steady commits while iterating on real features and coursework.',
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.05 * i, duration: 0.45, ease: 'easeOut' }}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{c.title}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
