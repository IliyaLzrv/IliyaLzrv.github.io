import { motion } from 'framer-motion'

export type TimelineItem = {
  title: string
  time: string
  points: string[]
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.45)] sm:p-8">
      <div className="absolute left-6 top-8 bottom-8 w-px bg-white/10 sm:left-8" aria-hidden="true" />

      <div className="space-y-6">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.04 }}
            className="relative pl-10 sm:pl-12"
          >
            <div className="absolute left-[18px] top-2 h-2.5 w-2.5 rounded-full bg-teal-300/90 shadow-[0_0_0_6px_rgba(45,212,191,0.10)] sm:left-[26px]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div className="text-sm font-medium text-white">{item.title}</div>
              <div className="text-xs text-zinc-400">{item.time}</div>
            </div>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              {item.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.14), transparent 60%)' }}
      />
    </div>
  )
}

