import type { Content } from './types'

export const en: Content = {
  meta: {
    htmlLang: 'en',
    title: 'Carlos Elandro — Back-end developer',
    description:
      'Back-end developer in Jequié, Bahia, Brazil. PHP, Laravel, PostgreSQL and Docker on production web systems.',
  },
  person: {
    name: 'Carlos Elandro Bastos Pereira',
    role: 'Back-end developer',
    location: 'Jequié, Bahia, Brazil',
    email: 'c.elandro.bp@gmail.com',
    phone: '+55 73 98861-0735',
    phoneHref: 'tel:+5573988610735',
    github: 'https://github.com/cebpereira',
    linkedin: 'https://www.linkedin.com/in/cebpereira/',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    stack: 'Stack',
    projects: 'Projects',
    education: 'Education',
    certifications: 'Certifications',
    contact: 'Contact',
    toggleLanguage: 'Switch to Portuguese',
    toggleTheme: 'Switch between light and dark theme',
    skipToContent: 'Skip to content',
  },
  hero: {
    headline: ['Back-end', 'developer.'],
    lede: 'PHP and Laravel at the core, PostgreSQL underneath, Docker around it. I build and keep production web systems running, from Jequié, Bahia.',
    availability: 'At Rhopen Consultoria since September 2025',
  },
  about: {
    heading: 'About',
    paragraphs: [
      'I have been a back-end developer since 2023, with PHP and Laravel at the centre of the work. I build and maintain production systems that companies run on: corporate benefits management, a CRM with automated credit analysis, integrations between third-party platforms.',
      'Much of my work is making systems talk to each other: REST APIs, webhooks, queues and async jobs, sync between platforms with a record of what changed. I also spend a lot of time with data, from modelling and querying PostgreSQL to importing spreadsheets and PDFs that arrive in formats nobody controls.',
      'I look after the path to production too: Docker environments, CI/CD deploys, observability and Linux servers. When the delivery calls for it, I build the interface as well, in React with TypeScript.',
      'I prefer changes that reach production without surprises, backed by automated tests, static analysis and rollouts rehearsed first on a copy of real data.',
    ],
  },
  experience: {
    heading: 'Experience',
    currentLabel: 'Current position',
    items: [
      {
        period: 'Sep 2025 — present',
        company: 'Rhopen Consultoria',
        role: 'Mid-level back-end developer',
        current: true,
        bullets: [
          'Evolving UseRH, a corporate benefits management platform: a Laravel monolith, a React client area with Laravel as BFF, and e-Leader, a new product on Laravel 13 with Inertia and React 19.',
          'Invoice processors for each health insurer (SulAmérica, Unimed, Fortbras and others), reading XLSX, CSV and PDF and reconciling beneficiaries.',
          'Audit rules that flag mismatches between payroll and invoices, configurable per company.',
          'Rollouts rehearsed on a production dump, with before-and-after metrics. Quality through PHPStan, Pint, PHPUnit and Vitest, under Scrum.',
        ],
        stack: ['PHP', 'Laravel', 'PostgreSQL', 'React.js', 'TypeScript', 'Inertia.js', 'Python', 'PHPStan', 'Docker', 'Git'],
      },
      {
        period: 'Sep 2025 — Jun 2026',
        company: 'Arbus | Frotas Inteligentes',
        role: 'Mid-level back-end developer',
        bullets: [
          'Central Laravel API orchestrating leads and integrations with Moskit, SGR Hinova, Serasa, Clicksign, Meta Ads and Google Ads, through async jobs on Redis queues.',
          'Rule-driven credit analysis engine: takes the CRM webhook, queries SGR, escalates to Serasa when the rules call for it and writes the result back to the lead.',
          'SGR ↔ Veniti sync bridge using polling with hash diffs and an audit log, plus an admin panel in React and TypeScript.',
          'Docker across three environments, deploys through GitHub Actions, and observability with Horizon, Pulse and Telescope on the Linux servers.',
        ],
        stack: ['PHP', 'Laravel', 'Slim', 'PostgreSQL', 'Redis', 'React.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'GitHub Actions', 'n8n'],
      },
      {
        period: 'Nov 2024 — Jun 2025',
        company: 'Midia Simples Intermediação de Negócios',
        role: 'PHP back-end developer',
        bullets: [
          'Building web pages and systems.',
          'Delivering under Kanban.',
        ],
        stack: [
          'PHP',
          'Laravel',
          'PHPUnit',
          'MySQL',
          'SQL Server',
          'Vue.js',
          'JavaScript',
          'Docker',
          'Git',
        ],
      },
      {
        period: 'Dec 2023 — Sep 2024',
        company: 'LIF Solutions / Grupo Sideral',
        role: 'PHP developer',
        bullets: [
          'Building web pages and systems.',
          'Maintaining and extending features on WordPress and Bubble.io.',
        ],
        stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'jQuery', 'Docker', 'Git'],
      },
      {
        period: 'Feb 2023 — Nov 2023',
        company: 'Universidade Estadual do Sudoeste da Bahia',
        role: 'Software development intern',
        bullets: [
          'Software development at the UESB Software Factory.',
          'Delivering under Scrum.',
        ],
        stack: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'Docker', 'Git'],
      },
    ],
  },
  skills: {
    heading: 'Stack',
    groups: [
      { label: 'Back-end', items: ['PHP', 'Laravel', 'Slim', 'Python', 'Laravel Horizon'] },
      {
        label: 'Front-end',
        items: ['React.js', 'TypeScript', 'Inertia.js', 'Vue.js', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
      },
      { label: 'Data', items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Redis'] },
      { label: 'Infrastructure', items: ['Docker', 'Nginx', 'GitHub Actions', 'Linux', 'WSL', 'Git'] },
      { label: 'Quality', items: ['PHPUnit', 'Pest', 'PHPStan', 'Vitest'] },
      { label: 'Ways of working', items: ['Scrum', 'Kanban'] },
      { label: 'Platforms', items: ['WordPress', 'Bubble.io'] },
    ],
  },
  education: {
    heading: 'Education',
    items: [
      {
        title: 'BSc in Information Systems',
        institution: 'Universidade Estadual do Sudoeste da Bahia — UESB',
        note: 'In progress',
      },
    ],
    languagesHeading: 'Languages',
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Basic' },
    ],
  },
  certifications: {
    heading: 'Certifications',
    items: [
      { title: 'Introduction to PHP', issuer: 'DIO', year: '2022' },
      { title: 'Advanced PHP Development', issuer: 'DIO', year: '2023' },
      { title: 'IT Support', issuer: 'Google / Coursera', year: '2023' },
      { title: 'PHP Online Course', issuer: 'Rocketseat', year: '2024' },
    ],
  },
  projects: {
    heading: 'Projects',
    items: [
      {
        name: 'Layers',
        summary:
          'A Laravel package that generates repositories, interfaces and services for a layered architecture and registers the bindings on its own. I maintain the fork: upgraded it to Laravel 12 and PHP 8.2+, typed the stubs and added a command that scaffolds the layers for every model at once.',
        stack: ['PHP', 'Laravel', 'Composer'],
        repoUrl: 'https://github.com/cebpereira/Layers',
      },
      {
        name: 'UniEspaços',
        summary:
          'Open-source room booking system for UESB. I contributed the move to a layered architecture, role-based granular permissions, a reports module with a dashboard, and an end to duplicated booking slots, enforced in the database.',
        stack: ['Laravel', 'React', 'Inertia.js', 'TypeScript', 'PostgreSQL', 'Docker'],
        repoUrl: 'https://github.com/uniespacos/uniespacos',
      },
    ],
  },
  contact: {
    heading: 'Get in touch',
    lede: 'Send a message and I reply to the same address.',
    fields: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
    },
    placeholders: {
      name: 'What should I call you',
      email: 'where.i.reply@email.com',
      subject: 'What it is about',
      message: 'Tell me what you have in mind',
    },
    submit: 'Send message',
    submitting: 'Sending',
    errors: {
      nameRequired: 'Add your name.',
      emailRequired: 'Add your email so I can reply.',
      emailInvalid: 'That email does not look valid.',
      subjectRequired: 'Add a subject.',
      messageRequired: 'Write your message.',
      messageTooShort: 'The message needs at least 10 characters.',
    },
    toast: {
      success: 'Message sent. I will reply as soon as I can.',
      failure: 'The message was not sent. Try again in a moment.',
      rateLimited: 'Too many messages in a row. Try again in a few minutes.',
      network: 'No connection to the server. Check your internet and try again.',
    },
    directLabel: 'Or reach me directly',
  },
  footer: {
    note: 'Made in Jequié, Bahia.',
  },
}
