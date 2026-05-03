import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-wide text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-300/90" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base">
          {subtitle}
        </p>
      </Reveal>
    </div>
  )
}

