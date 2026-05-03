import { BookOpen, ExternalLink, Lock, Play } from 'lucide-react'
import type { Project } from '../components/ProjectCard.tsx'

export const featuredProjects: Project[] = [
  {
    title: 'LazDev SaaS Platform',
    category: 'Full-Stack SaaS · Production-ready',
    status: 'In progress · Private',
    description:
      'Built a production-ready SaaS platform for client collaboration, document management, approvals, and AI-powered productivity.',
    tech: [
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
    ],
    contribution: [
      'Admin/Client workspaces',
      'JWT authentication and role-based access',
      'Document management and approval workflows',
      'Notifications and automated emails',
      'AI summaries, Q&A, semantic search',
      'Production deployment with Vercel and Render',
    ],
    previewVariant: 'saas',
    ctas: [
      { label: 'Private project', icon: Lock, state: 'private' },
      { label: 'Request walkthrough', href: '#contact', icon: ExternalLink, state: 'request_walkthrough' },
      { label: 'View Case Study', icon: BookOpen, action: 'case_study' },
    ],
  },
  {
    title: 'Sorama — Enterprise Platform',
    category: 'Enterprise software · React migration',
    status: 'Real-world delivery',
    description:
      'Migrated core modules from Aurelia to React while contributing to an internal enterprise platform.',
    tech: ['React', 'TypeScript', 'C# .NET', 'Azure'],
    contribution: [
      'Migrated modules from Aurelia to React',
      'Built reusable React components',
      'Integrated frontend with C# .NET APIs',
      'Improved usability, performance, and maintainability',
      'Worked in agile planning, implementation, and refinement',
    ],
    previewVariant: 'enterprise',
    ctas: [
      { label: 'Private project', icon: Lock, state: 'private' },
      { label: 'Request walkthrough', href: '#contact', icon: ExternalLink, state: 'request_walkthrough' },
    ],
  },
  {
    title: 'LazDev Website',
    category: 'Business website · Brand presence',
    status: 'Live · Portfolio-ready',
    description:
      'Designed and developed lazdev.io, a business website presenting software services, projects, and contact options.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive design'],
    contribution: [
      'Modern responsive website',
      'Clear services and project presentation',
      'Contact-focused user flow',
      'Clean visual identity',
      'Performance-focused UI',
    ],
    previewVariant: 'brand',
    ctas: [{ label: 'Live site', href: 'https://lazdev.io', icon: Play, state: 'live' }],
  },
]

export type OtherWorkItem = {
  title: string
  description: string
  stack: string
}

export const otherWorkItems: OtherWorkItem[] = [
  {
    title: 'Levski Triaditsa Club Website',
    description: 'Official rhythmic gymnastics club site — modern layout, clearer navigation, responsive UI.',
    stack: 'React · JavaScript · UI/UX',
  },
  {
    title: 'Robot.io',
    description: 'Multiplayer full-stack experience — Java Spring Boot backend with a React client.',
    stack: 'Java · Spring Boot · React',
  },
  {
    title: 'Posture Monitoring App',
    description: 'Flutter app using device sensors for posture feedback and lightweight analytics.',
    stack: 'Flutter · Dart · Sensors',
  },
]
