import { motion } from 'framer-motion'

export function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className="relative flex h-full min-h-[9.5rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow] duration-300 hover:border-teal-400/18 hover:shadow-[0_22px_70px_rgba(0,0,0,0.48),0_0_0_1px_rgba(45,212,191,0.08)] sm:p-6"
    >
      <div className="text-sm font-semibold tracking-tight text-white">{title}</div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{desc}</p>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.10), transparent 60%)' }}
      />
    </motion.div>
  )
}
