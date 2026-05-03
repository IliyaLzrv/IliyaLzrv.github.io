import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/cn'

export type NavbarLink = {
  label: string
  href: string
}

export function Navbar({ links, cta }: { links: NavbarLink[]; cta: NavbarLink }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('#top')
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 60], ['rgba(7,10,18,0)', 'rgba(7,10,18,0.78)'])
  const border = useTransform(scrollY, [0, 60], ['rgba(255,255,255,0.0)', 'rgba(255,255,255,0.10)'])

  useEffect(() => {
    const ids = links
      .map((i) => i.href)
      .filter((h) => h.startsWith('#'))
      .map((h) => h.slice(1))
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const setTopIfNearHero = () => {
      if (window.scrollY < 96) setActive('#top')
    }
    setTopIfNearHero()
    window.addEventListener('scroll', setTopIfNearHero, { passive: true })

    if (!els.length) {
      return () => window.removeEventListener('scroll', setTopIfNearHero)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 96) return
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (!visible?.target?.id) return
        setActive(`#${visible.target.id}`)
      },
      {
        root: null,
        threshold: [0.12, 0.22, 0.35],
        rootMargin: '-20% 0px -58% 0px',
      },
    )

    els.forEach((el) => io.observe(el))
    return () => {
      window.removeEventListener('scroll', setTopIfNearHero)
      io.disconnect()
    }
  }, [links])

  const isActive = (href: string) => {
    if (!href.startsWith('#')) return false
    return active === href
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: bg, borderBottomColor: border }}
    >
      <div className="border-b border-white/10">
        <div className="container-px grid h-16 grid-cols-2 items-center gap-3 md:grid-cols-[minmax(0,auto)_minmax(0,1fr)_auto]">
          <a
            href="#top"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-white"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
              <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.28),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
              <span className="relative text-sm font-semibold text-white/90">IL</span>
            </span>
            <span className="hidden min-[380px]:inline">Ilia Lazarov</span>
          </a>

          <nav className="hidden min-w-0 items-center justify-center justify-self-center gap-0.5 overflow-x-auto md:flex">
            {links.map((item) => {
              const external = item.href.startsWith('http')
              return (
                <a
                  key={item.label + item.href}
                  href={item.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'shrink-0 rounded-lg px-2.5 py-2 text-sm transition lg:px-3',
                    isActive(item.href)
                      ? 'bg-white/[0.06] text-white'
                      : 'text-zinc-400 hover:bg-white/[0.04] hover:text-white',
                  )}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden justify-self-end md:flex">
            <a
              href={cta.href}
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-[0_18px_45px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition hover:bg-white/95"
            >
              {cta.label}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex items-center justify-center justify-self-end rounded-xl border border-white/10 bg-white/[0.03] p-2 text-white/80 transition hover:bg-white/[0.05] md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className={cn('container-px md:hidden', open ? 'block' : 'hidden')}>
        <div className="pb-3">
          <div className="rounded-2xl border border-white/10 bg-[#070A12]/90 p-2 backdrop-blur-md">
            {links.map((item) => {
              const external = item.href.startsWith('http')
              return (
                <a
                  key={item.label + item.href}
                  href={item.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-xl px-3 py-2.5 text-sm transition',
                    isActive(item.href)
                      ? 'bg-white/[0.06] text-white'
                      : 'text-zinc-300 hover:bg-white/[0.04] hover:text-white',
                  )}
                >
                  {item.label}
                </a>
              )
            })}
            <a
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-white px-3 py-2.5 text-center text-sm font-medium text-zinc-900"
            >
              {cta.label}
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
