import { motion } from 'framer-motion'

type Accent = 'teal' | 'sky' | 'indigo'

const accentMap: Record<Accent, { glow: string; dot: string }> = {
  teal: {
    glow: 'radial-gradient(circle, rgba(45,212,191,0.16), transparent 60%)',
    dot: 'bg-teal-300/90',
  },
  sky: {
    glow: 'radial-gradient(circle, rgba(56,189,248,0.16), transparent 60%)',
    dot: 'bg-sky-300/90',
  },
  indigo: {
    glow: 'radial-gradient(circle, rgba(99,102,241,0.18), transparent 60%)',
    dot: 'bg-indigo-300/90',
  },
}

export function SkillGroup({
  title,
  skills,
  accent,
}: {
  title: string
  skills: string[]
  accent: Accent
}) {
  const a = accentMap[accent]

  return (
    <div className="group relative flex h-full min-h-[13.5rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow] duration-300 hover:border-teal-400/18 hover:shadow-[0_22px_70px_rgba(0,0,0,0.48),0_0_0_1px_rgba(45,212,191,0.08)] sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
          <span className={['h-1.5 w-1.5 rounded-full', a.dot].join(' ')} />
          Core
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-wrap content-start gap-2">
        {skills.map((s, idx) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.03 * idx }}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-200 transition group-hover:border-white/12"
          >
            {s}
          </motion.span>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl"
        style={{ background: a.glow }}
      />
    </div>
  )
}

