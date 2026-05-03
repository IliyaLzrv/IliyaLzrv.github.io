import { motion } from 'framer-motion'
import { Code, ExternalLink, Mail, Phone } from 'lucide-react'
import { Reveal } from './Reveal'
import { cn } from '../lib/cn'

const LINKEDIN = 'https://linkedin.com/in/ilia-lazarov-594409159/'
const GITHUB = 'https://github.com/IliyaLzrv'

const channels = [
  {
    label: 'Email',
    value: 'iliya.lazarov03@gmail.com',
    href: 'mailto:iliya.lazarov03@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'Phone',
    value: '+31627344509',
    href: 'tel:+31627344509',
    icon: Phone,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'ilia-lazarov-594409159',
    href: LINKEDIN,
    icon: ExternalLink,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/IliyaLzrv',
    href: GITHUB,
    icon: Code,
    external: true,
  },
] as const

export function ContactPanel() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let’s talk about your next hire
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
          Open to junior software engineering, full-stack, frontend, backend, and mobile roles. I’m looking to
          contribute to real product teams and ship maintainable, user-focused software.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:p-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {channels.map((row, idx) => (
              <motion.a
                key={row.label}
                href={row.href}
                target={row.external ? '_blank' : undefined}
                rel={row.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.04 * idx, duration: 0.45 }}
                whileHover={{ y: -3 }}
                className={cn(
                  'group flex min-h-[5.75rem] flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/50 p-4 text-left transition',
                  'hover:border-teal-400/25 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.12),0_16px_48px_rgba(0,0,0,0.35)]',
                )}
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-teal-300 transition group-hover:border-teal-400/30 group-hover:text-teal-200">
                    <row.icon size={20} />
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {row.label}
                    </div>
                    <div className="mt-1 break-all text-sm font-medium leading-snug text-zinc-100">{row.value}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
