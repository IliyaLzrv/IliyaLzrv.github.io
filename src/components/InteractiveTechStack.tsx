import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import {
  SiCss,
  SiDart,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJunit5,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRender,
  SiSharp,
  SiSonar,
  SiSocketdotio,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { Cloud, Database, KeyRound, Layers, Link2, TestTube2 } from 'lucide-react'
import { Reveal } from './Reveal'
import { cn } from '../lib/cn'

type IconComp = ComponentType<{ className?: string }>

type SkillDef = {
  name: string
  years: string
  Icon: IconComp
  /** Shown on hover only — where it showed up */
  hoverWhere: string
  /** Shown on hover only — what you shipped */
  hoverWhat: string
}

type Group = { title: string; skills: SkillDef[] }

const LucideCloud = Cloud
const LucideDatabase = Database
const LucideLink = Link2
const LucideTest = TestTube2
const LucideJwt = KeyRound
const LucidePgVector = Layers

const groups: Group[] = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React',
        years: '3+ yrs',
        Icon: SiReact,
        hoverWhere: 'Portfolio, LazDev SaaS, enterprise UI',
        hoverWhat: 'Used in portfolio, SaaS platform, and production UI work',
      },
      {
        name: 'Next.js',
        years: '3+ yrs',
        Icon: SiNextdotjs,
        hoverWhere: 'LazDev products',
        hoverWhat: 'Used for LazDev SaaS and business website',
      },
      {
        name: 'TypeScript',
        years: '3+ yrs',
        Icon: SiTypescript,
        hoverWhere: 'React and Next.js codebases',
        hoverWhat: 'Typed APIs, safer refactors, scalable frontend architecture',
      },
      {
        name: 'JavaScript',
        years: '3+ yrs',
        Icon: SiJavascript,
        hoverWhere: 'Web apps and coursework',
        hoverWhat: 'Interactive UI, ES modules, integration layers',
      },
      {
        name: 'Tailwind CSS',
        years: '4+ yrs',
        Icon: SiTailwindcss,
        hoverWhere: 'Portfolio and LazDev products',
        hoverWhat: 'Design tokens, responsive layouts, premium dark UI',
      },
      {
        name: 'HTML5 / CSS3',
        years: '4+ yrs',
        Icon: SiHtml5,
        hoverWhere: 'Every shipped web surface',
        hoverWhat: 'Semantic structure, responsive grids, accessible patterns',
      },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      {
        name: 'Flutter',
        years: '2+ yr',
        Icon: SiFlutter,
        hoverWhere: 'Mobile coursework and side projects',
        hoverWhat: 'Sensor-driven UI, navigation, stateful mobile features',
      },
      {
        name: 'Dart',
        years: '2+ yr',
        Icon: SiDart,
        hoverWhere: 'Flutter codebases',
        hoverWhat: 'App logic, packages, async data flow',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Java',
        years: '4+ yrs',
        Icon: SiOpenjdk,
        hoverWhere: 'University projects and Spring services',
        hoverWhat: 'OOP services, APIs, backend-heavy features',
      },
      {
        name: 'Spring Boot',
        years: '4+ yrs',
        Icon: SiSpringboot,
        hoverWhere: 'LazDev SaaS and coursework APIs',
        hoverWhat: 'Built REST APIs, authentication, and backend services',
      },
      {
        name: 'C#',
        years: '5+ yr',
        Icon: SiSharp,
        hoverWhere: 'Enterprise platform work',
        hoverWhat: 'API integration layers and service-oriented modules',
      },
      {
        name: '.NET',
        years: '4+ yr',
        Icon: SiDotnet,
        hoverWhere: 'Enterprise backends',
        hoverWhat: 'React frontends integrated with C# APIs',
      },
      {
        name: 'JWT',
        years: '4+ yr',
        Icon: LucideJwt,
        hoverWhere: 'LazDev SaaS auth flows',
        hoverWhat: 'Secure tokens, role-based access, session boundaries',
      },
    ],
  },
  {
    title: 'Databases & APIs',
    skills: [
      {
        name: 'PostgreSQL',
        years: '2+ yr',
        Icon: SiPostgresql,
        hoverWhere: 'LazDev SaaS data layer',
        hoverWhat: 'Relational modeling, migrations, production queries',
      },
      {
        name: 'pgvector',
        years: '<1 yr',
        Icon: LucidePgVector,
        hoverWhere: 'LazDev AI features',
        hoverWhat: 'Semantic search and vector-backed Q&A',
      },
      {
        name: 'MySQL',
        years: '4+ yrs',
        Icon: SiMysql,
        hoverWhere: 'University and full-stack projects',
        hoverWhat: 'CRUD services, relational schemas',
      },
      {
        name: 'Microsoft SQL Server',
        years: '4+ yr',
        Icon: LucideDatabase,
        hoverWhere: 'Backend-driven coursework',
        hoverWhat: 'Stored procedures, relational integrations',
      },
      {
        name: 'REST APIs',
        years: '4+ yrs',
        Icon: LucideLink,
        hoverWhere: 'Across Spring, .NET, and Next clients',
        hoverWhat: 'Versioned contracts, auth-aware endpoints, error handling',
      },
      {
        name: 'WebSockets',
        years: '4+ yr',
        Icon: SiSocketdotio,
        hoverWhere: 'Realtime apps and games',
        hoverWhat: 'Live channels, multiplayer sync, push-style updates',
      },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      {
        name: 'Git',
        years: '4+ yrs',
        Icon: SiGit,
        hoverWhere: 'Daily engineering workflow',
        hoverWhat: 'Branching, reviews, clean history for team delivery',
      },
      {
        name: 'Docker',
        years: '4+ yr',
        Icon: SiDocker,
        hoverWhere: 'Local and deployment pipelines',
        hoverWhat: 'Reproducible builds and containerized services',
      },
      {
        name: 'Postman',
        years: '4+ yrs',
        Icon: SiPostman,
        hoverWhere: 'API development cycles',
        hoverWhat: 'Collections, regression checks, integration tests',
      },
      {
        name: 'Firebase',
        years: '2+ yr',
        Icon: SiFirebase,
        hoverWhere: 'Mobile and lightweight web features',
        hoverWhat: 'Auth hooks, hosting, realtime where it fit',
      },
      {
        name: 'Azure',
        years: '4+ yr',
        Icon: LucideCloud,
        hoverWhere: 'Enterprise cloud environment',
        hoverWhat: 'Deployments, integrations, hosted services',
      },
      {
        name: 'Vercel',
        years: '3+ yr',
        Icon: SiVercel,
        hoverWhere: 'Next.js frontends',
        hoverWhat: 'Preview deploys and production edge delivery',
      },
      {
        name: 'Render',
        years: '3+ yr',
        Icon: SiRender,
        hoverWhere: 'Spring Boot backends',
        hoverWhat: 'Managed hosting for APIs and workers',
      },
    ],
  },
  {
    title: 'Testing & Quality',
    skills: [
      {
        name: 'JUnit',
        years: '1+ yr',
        Icon: SiJunit5,
        hoverWhere: 'Java and Spring services',
        hoverWhat: 'Unit coverage for services and controllers',
      },
      {
        name: 'Mockito',
        years: '1+ yr',
        Icon: LucideTest,
        hoverWhere: 'Service-layer tests',
        hoverWhat: 'Isolated mocks for dependencies and edge cases',
      },
      {
        name: 'SonarQube',
        years: '2+ yr',
        Icon: SiSonar,
        hoverWhere: 'Quality gates in coursework',
        hoverWhat: 'Maintainability scans and defect tracking',
      },
    ],
  },
]

function SkillToolkitTile({ skill }: { skill: SkillDef }) {
  const Icon = skill.Icon
  const isHtmlCss = skill.name === 'HTML5 / CSS3'
  return (
    <div className="relative h-full min-h-0">
      <motion.div
        tabIndex={0}
        initial={false}
        whileHover={{ scale: 1.05, y: -4 }}
        transition={{ type: 'spring', stiffness: 420, damping: 26 }}
        className={cn(
          'group/skill relative flex h-full min-h-[6.5rem] flex-col items-center justify-between rounded-xl border border-white/10 bg-zinc-950/40 px-1.5 py-2',
          'shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-[border-color,box-shadow] duration-300',
          'hover:border-teal-400/30 hover:shadow-[0_0_28px_rgba(45,212,191,0.12),0_8px_28px_rgba(0,0,0,0.35)]',
          'focus-visible:border-teal-400/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/25',
        )}
      >
        <span
          className={cn(
            'flex h-9 min-w-[2.35rem] shrink-0 items-center justify-center gap-0.5 rounded-lg border border-white/10 bg-zinc-900/80 px-0.5 text-zinc-200',
            'transition duration-300 group-hover/skill:border-teal-400/25 group-hover/skill:text-teal-100',
            'group-hover/skill:shadow-[0_0_18px_rgba(45,212,191,0.2)]',
          )}
        >
          {isHtmlCss ? (
            <>
              <SiHtml5 className="h-[1.05rem] w-[1.05rem]" aria-hidden />
              <SiCss className="h-[1.05rem] w-[1.05rem]" aria-hidden />
            </>
          ) : (
            <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
          )}
        </span>

        <div className="mt-1.5 flex min-h-0 w-full flex-1 flex-col items-center justify-end gap-1 text-center">
          <span className="line-clamp-2 text-[11px] font-semibold leading-tight tracking-tight text-zinc-100">
            {skill.name}
          </span>
          <span className="rounded-md border border-white/[0.07] bg-white/[0.04] px-1.5 py-0.5 font-mono text-[9px] font-medium tabular-nums tracking-wide text-zinc-500">
            {skill.years}
          </span>
        </div>

        <div
          role="tooltip"
          className={cn(
            'pointer-events-none absolute left-1/2 z-30 w-[min(13.5rem,calc(100vw-2.5rem))] -translate-x-1/2',
            'bottom-[calc(100%+0.5rem)] rounded-lg border border-white/12 bg-[#0c101c]/95 px-2.5 py-2 text-left shadow-2xl backdrop-blur-md',
            'opacity-0 translate-y-1 transition duration-200',
            'group-hover/skill:opacity-100 group-hover/skill:translate-y-0',
            'group-focus-within/skill:opacity-100 group-focus-within/skill:translate-y-0',
          )}
        >
          <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-500">Where</p>
          <p className="mt-0.5 text-[10px] leading-snug text-zinc-300">{skill.hoverWhere}</p>
          <p className="mt-2 text-[9px] font-semibold uppercase tracking-wider text-zinc-500">What I built</p>
          <p className="mt-0.5 text-[10px] leading-snug text-zinc-400">{skill.hoverWhat}</p>
        </div>
      </motion.div>
    </div>
  )
}

function SkillGroupPanel({ group, gi }: { group: Group; gi: number }) {
  return (
    <Reveal key={group.title} delay={0.04 * gi}>
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.38)] sm:p-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-500/[0.07] blur-3xl"
        />
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
          <div className="shrink-0 sm:w-32">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Toolkit</p>
            <h3 className="mt-0.5 text-sm font-semibold tracking-tight text-white sm:text-base">{group.title}</h3>
          </div>
          <div className="grid min-h-0 min-w-0 flex-1 auto-rows-fr grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {group.skills.map((skill) => (
              <SkillToolkitTile key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function InteractiveTechStack() {
  return (
    <div className="relative mx-auto max-w-6xl space-y-3 sm:space-y-3.5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-6 h-24 bg-[radial-gradient(ellipse_at_50%_0%,rgba(45,212,191,0.06),transparent_72%)]"
      />
      {groups.map((group, gi) => (
        <SkillGroupPanel key={group.title} group={group} gi={gi} />
      ))}
    </div>
  )
}
