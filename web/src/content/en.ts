import type { Content } from './types'

export const en: Content = {
  meta: {
    htmlLang: 'en',
    title: 'Carlos Elandro | Software developer',
    description:
      'Software developer focused on the back end, open to new opportunities. PHP, Laravel, React, PostgreSQL, Docker and AWS in production web systems, with AI in the development workflow.',
  },
  person: {
    name: 'Carlos Elandro Bastos Pereira',
    role: 'Software developer',
    focus: 'Back-end focus',
    location: 'Jequié, Bahia, Brazil',
    email: 'c.elandro.bp@gmail.com',
    phone: '+55 73 98861-0735',
    phoneHref: 'tel:+5573988610735',
    whatsapp: 'https://wa.me/5573988610735?text=Hi%20Carlos%21%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20an%20opportunity.',
    github: 'https://github.com/cebpereira',
    linkedin: 'https://www.linkedin.com/in/cebpereira/',
  },
  nav: {
    about: 'About',
    how: 'How I work',
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
    greeting: [
      "Hi! I'm Carlos, a software developer.",
      'My strength is the back end with PHP and Laravel, but I take care of the whole path, from the React interface to the deploy on AWS. Pick a question below or scroll down to see everything.',
    ],
    status: 'Open to new opportunities',
    prompt: 'Questions people often ask me',
    typing: 'Carlos is typing',
    restart: 'Start the conversation over',
    conversationLabel: 'Conversation',
    resume: { label: 'Download CV in Portuguese', href: '/curriculo-carlos-elandro.pdf' },
    whatsappLabel: 'Message on WhatsApp',
    visitorLabel: 'You',
    questions: [
      {
        id: 'available',
        question: 'Are you available?',
        answer:
          'Yes. I am open to new opportunities, and we can work out the type of contract together. If you have a role or a project in mind, reach me through the form at the end of the page.',
        link: { href: '#contact', label: 'Go to contact' },
      },
      {
        id: 'what',
        question: 'What do you do, in a few words?',
        answer:
          'I build web systems end to end, with my strength in the back end. I write the business rules, the integrations with other platforms and the databases, build the interface when the project calls for it and handle the deploy. These systems run in production, and companies rely on them every day.',
        link: { href: '#about', label: 'Read more about me' },
      },
      {
        id: 'solve',
        question: 'What kind of problems do you solve?',
        answer:
          'I make systems talk to each other. For a group of vehicle protection and tracking companies, I built a credit check that runs on its own. A lead arrives from the CRM, the system queries the credit bureaus and sends the result back with no one stepping in. I also turn spreadsheets and PDFs in all kinds of formats into data people can trust.',
        link: { href: '#experience', label: 'See the details' },
      },
      {
        id: 'stack',
        question: 'Which technologies do you use?',
        answer:
          'PHP and Laravel every day, PostgreSQL for data, Docker and AWS to ship it. When a project needs it, I build the interface too, with React and TypeScript.',
        link: { href: '#stack', label: 'See every technology' },
      },
      {
        id: 'study',
        question: 'What is your education?',
        answer:
          'I am studying for a bachelor’s degree in Information Systems at UESB. Portuguese is my native language and my English is basic.',
        link: { href: '#education', label: 'See education and courses' },
      },
      {
        id: 'ai',
        question: 'Do you use AI at work?',
        answer:
          'Yes, every day. I work with Claude Code to research code, plan and implement, using skills and agents I wrote for the projects myself. Reviewing and owning what goes to production is still on me.',
      },
      {
        id: 'own',
        question: 'Do you have a project of your own?',
        answer:
          'Yes, Fiz a Nota, a micro SaaS that issues service invoices for Brazilian sole proprietors and small businesses. The app and the landing page are live in beta, and I built all of it myself, from the API to the deploy.',
        link: { href: '#projects', label: 'See Fiz a Nota' },
      },
      {
        id: 'resume',
        question: 'Can you send me your CV?',
        answer:
          'Sure! Download the PDF from the link below. It is in Portuguese, and the same link sits next to my name at the top of the page.',
        link: { href: '/curriculo-carlos-elandro.pdf', label: 'Download my CV in Portuguese' },
      },
      {
        id: 'contact',
        question: 'How do I reach you?',
        answer:
          'Through the form at the end of the page, which goes straight to my inbox, or by writing to c.elandro.bp@gmail.com. I also reply on LinkedIn.',
        link: { href: '#contact', label: 'Go to contact' },
      },
    ],
  },
  about: {
    heading: 'A bit about me',
    paragraphs: [
      'I have been writing software professionally since 2023, with PHP and Laravel at the centre of the work. I build and maintain production systems that companies run on, such as corporate benefits management, a CRM with automated credit analysis and integrations between third-party platforms.',
      'Much of my work is making systems talk to each other, through REST APIs, webhooks, queues and async jobs, and sync between platforms with a record of what changed. I also spend a lot of time with data, from modelling and querying PostgreSQL to importing spreadsheets and PDFs that arrive in formats nobody controls.',
      'I look after the path to production too, with Docker environments, CI/CD deploys, observability and Linux servers. When the delivery calls for it, I build the interface as well, in React with TypeScript.',
      'I use AI as part of the process. With Claude Code and skills I write for each project, I research code, plan and implement faster, while still reviewing everything I ship.',
      'I prefer changes that reach production without surprises, backed by automated tests, static analysis and rollouts rehearsed first on a copy of real data.',
    ],
  },
  how: {
    heading: 'How I work',
    items: [
      {
        title: 'I understand the problem before the code',
        text:
          'I talk to the people who use the system, read what already exists and plan before building. Large changes get a written proposal for the team to discuss.',
      },
      {
        title: 'Nothing reaches production without proof',
        text:
          'Automated tests, static analysis and review on every pull request. When a change touches data, I rehearse it first on a copy of the production database.',
      },
      {
        title: 'AI as a tool, not a shortcut',
        text:
          'I use Claude Code to research, plan and build faster. I review every line, and what goes to production is my responsibility.',
      },
      {
        title: 'I speak the language of non-technical people',
        text:
          'I explain what changed and why in business terms, and I document decisions for whoever comes next.',
      },
    ],
  },
  experience: {
    heading: 'Where I have worked',
    currentLabel: 'Current position',
    items: [
      {
        period: 'Sep 2025 — present',
        company: 'Rhopen Consultoria',
        role: 'Mid-level back-end developer',
        current: true,
        bullets: [
          'Evolving Robô IG, a benefits audit platform. It matches payroll against timesheets and against invoices for health, dental and life insurance, meal and food vouchers and transit vouchers, and flags mismatches.',
          'Over 50 invoice readers for PDF, XLSX, CSV and TXT that reconcile every beneficiary with payroll.',
          'Audit engine configurable per company, with the calculation trail behind every flag.',
          'On e-Leader, a leadership assessment product, I built the spreadsheet import with validation, the result calculation and the audit trail.',
          'AI skills and agents for the team in Claude Code. Quality through PHPStan level 9, automated tests in CI and architecture RFCs.',
        ],
        stack: ['PHP', 'Laravel', 'PostgreSQL', 'React.js', 'TypeScript', 'Inertia.js', 'Python', 'PHPStan', 'Pest', 'Docker', 'Claude Code'],
      },
      {
        period: 'Sep 2025 — Jun 2026',
        company: 'Arbus | Frotas Inteligentes',
        role: 'Mid-level back-end developer',
        bullets: [
          'Also worked for Ponto Track Rastreamento and América Proteção Veicular, companies of the same group.',
          'Central API that takes leads from the WordPress landing page forms and from ads, sends them to the CRM and retries failures on its own.',
          'Automated credit analysis with configurable rules, falling back to manual review when the credit service is down.',
          'Sync of sales, beneficiaries and vehicles between the group platforms, with async processing and an audit log.',
          'Admin panel in React and TypeScript to configure integrations and rules without a deploy.',
          'Docker across three environments, deploys through GitHub Actions, observability and AI agents set up in the repositories.',
        ],
        stack: ['PHP', 'Laravel', 'Slim', 'PostgreSQL', 'Redis', 'React.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'GitHub Actions', 'n8n', 'WordPress', 'Claude Code'],
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
    heading: 'What I work with',
    groups: [
      { label: 'Back-end', items: ['PHP', 'Laravel', 'Slim', 'Python', 'Laravel Horizon'] },
      {
        label: 'Front-end',
        items: ['React.js', 'TypeScript', 'Inertia.js', 'Vue.js', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
      },
      { label: 'Data', items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Redis'] },
      { label: 'Infrastructure', items: ['AWS (EC2, VPC, S3)', 'Docker', 'Nginx', 'GitHub Actions', 'Linux', 'WSL', 'Git'] },
      { label: 'Quality', items: ['PHPUnit', 'Pest', 'PHPStan', 'Vitest'] },
      { label: 'AI in development', items: ['Claude Code', 'Claude API', 'Skills and agents'] },
      { label: 'Ways of working', items: ['Scrum', 'Kanban'] },
      { label: 'Platforms', items: ['WordPress', 'Bubble.io'] },
    ],
  },
  education: {
    heading: 'Where I study',
    items: [
      {
        title: 'BSc in Information Systems',
        institution: 'Universidade Estadual do Sudoeste da Bahia (UESB)',
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
    heading: 'Courses and certificates',
    items: [
      { title: 'Introduction to PHP', issuer: 'DIO', year: '2022' },
      { title: 'Advanced PHP Development', issuer: 'DIO', year: '2023' },
      { title: 'IT Support', issuer: 'Google / Coursera', year: '2023' },
      { title: 'PHP Online Course', issuer: 'Rocketseat', year: '2024' },
    ],
  },
  projects: {
    heading: 'My own and open source projects',
    liveLabel: 'Visit the site',
    gallery: {
      open: 'Enlarge screen',
      close: 'Close',
      previous: 'Previous screen',
      next: 'Next screen',
      counter: '{current} of {total}',
    },
    items: [
      {
        name: 'Fiz a Nota',
        summary:
          'My micro SaaS, in beta, for issuing service invoices (NFS-e) for Brazilian sole proprietors and small businesses, integrated with the national issuing system. I built the API, the app and the landing page on my own, with A1 digital certificates, issuing, cancellation and replacement validated against the official environment, cash flow, subscriptions by PIX, card and bank slip, and a monthly summary written by AI, with the numbers calculated by the system and sensitive data masked. It runs on AWS, on EC2 instances inside its own VPC, with files on S3.',
        stack: ['Laravel', 'PHP 8.4', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'AWS EC2', 'AWS VPC', 'AWS S3', 'Claude API'],
        liveUrl: 'https://fizanota.com.br',
        images: [
          {
            src: '/projects/fizanota-landing.webp',
            url: 'fizanota.com.br',
            title: 'Landing page',
            description:
              'The front door of the product. It explains what Fiz a Nota does, how to get started and what the plans are. Built with React Router 7, separate from the app.',
          },
          {
            src: '/projects/fizanota-resumo-ia.webp',
            url: 'app.fizanota.com.br',
            title: 'Home with an AI-written summary',
            description:
              'The month figures are calculated by the system and Claude only writes the text on top of them. CPF and CNPJ are masked before sending, and each company has a monthly generation budget.',
          },
          {
            src: '/projects/fizanota-emissao.webp',
            url: 'app.fizanota.com.br/notas/emitir',
            title: 'Issuing in four steps',
            description:
              'Client, service, amounts and review. The preview on the side shows how the invoice will look, and nothing reaches the national system before confirmation.',
          },
          {
            src: '/projects/fizanota-notas.webp',
            url: 'app.fizanota.com.br/notas',
            title: 'Invoice list',
            description:
              'Every invoice of the company, each with its status (authorized, refused, cancelled or replaced), filterable by client and period.',
          },
        ],
      },
      {
        name: 'Layers',
        summary:
          'A Laravel package that generates repositories, interfaces and services for a layered architecture and registers the bindings on its own. In the fork I maintain, I upgraded it to Laravel 12 and PHP 8.2+, typed the stubs and added a command that scaffolds the layers for every model at once.',
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
