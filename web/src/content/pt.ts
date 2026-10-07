import type { Content } from './types'

export const pt: Content = {
  meta: {
    htmlLang: 'pt-BR',
    title: 'Carlos Elandro — Desenvolvedor back-end',
    description:
      'Desenvolvedor back-end em Jequié, Bahia. PHP, Laravel, PostgreSQL e Docker em sistemas web de produção.',
  },
  person: {
    name: 'Carlos Elandro Bastos Pereira',
    role: 'Desenvolvedor back-end',
    location: 'Jequié, Bahia',
    email: 'c.elandro.bp@gmail.com',
    phone: '(73) 98861-0735',
    phoneHref: 'tel:+5573988610735',
    github: 'https://github.com/cebpereira',
    linkedin: 'https://www.linkedin.com/in/cebpereira/',
  },
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    stack: 'Tecnologias',
    projects: 'Projetos',
    education: 'Formação',
    certifications: 'Certificações',
    contact: 'Contato',
    toggleLanguage: 'Mudar para inglês',
    toggleTheme: 'Alternar tema claro e escuro',
    skipToContent: 'Pular para o conteúdo',
  },
  hero: {
    headline: ['Desenvolvedor', 'back-end.'],
    lede: 'PHP e Laravel no núcleo, PostgreSQL embaixo, Docker em volta. Construo e sustento sistemas web em produção a partir de Jequié, Bahia.',
    availability: 'Na Rhopen Consultoria desde setembro de 2025',
  },
  about: {
    heading: 'Sobre',
    paragraphs: [
      'Sou desenvolvedor back-end desde 2023, com PHP e Laravel no centro do trabalho. Construo e mantenho sistemas que estão em produção e sustentam a operação das empresas: gestão de benefícios corporativos, CRM com análise de crédito automatizada, integrações entre plataformas de terceiros.',
      'Boa parte do meu trabalho é fazer sistemas conversarem: APIs REST, webhooks, filas e jobs assíncronos, sincronização entre plataformas com registro do que mudou. Também passo muito tempo com dados, da modelagem e das consultas em PostgreSQL à importação de planilhas e PDFs que chegam em formatos que ninguém controla.',
      'Cuido do caminho até a produção: ambientes em Docker, deploy por CI/CD, observabilidade e servidores Linux. Quando a entrega pede, construo a interface também, em React com TypeScript.',
      'Prefiro mudanças que chegam em produção sem surpresa, com testes automatizados, análise estática e rollouts ensaiados antes numa cópia dos dados reais.',
    ],
  },
  experience: {
    heading: 'Experiência',
    currentLabel: 'Posição atual',
    items: [
      {
        period: 'set 2025 — atual',
        company: 'Rhopen Consultoria',
        role: 'Desenvolvedor back-end pleno',
        current: true,
        bullets: [
          'Evolução da UseRH, plataforma de gestão de benefícios corporativos: monolito Laravel, área do cliente em React com Laravel como BFF e o e-Leader, produto novo em Laravel 13 com Inertia e React 19.',
          'Processadores de fatura por operadora de saúde (SulAmérica, Unimed, Fortbras e outras), lendo XLSX, CSV e PDF e conciliando beneficiários.',
          'Regras de auditoria que apontam divergências entre folha de pagamento e fatura, parametrizáveis por empresa.',
          'Rollouts ensaiados em dump de produção, com métricas de antes e depois. Qualidade com PHPStan, Pint, PHPUnit e Vitest, em Scrum.',
        ],
        stack: ['PHP', 'Laravel', 'PostgreSQL', 'React.js', 'TypeScript', 'Inertia.js', 'Python', 'PHPStan', 'Docker', 'Git'],
      },
      {
        period: 'set 2025 — jun 2026',
        company: 'Arbus | Frotas Inteligentes',
        role: 'Desenvolvedor back-end pleno',
        bullets: [
          'API central em Laravel que orquestra leads e integrações com Moskit, SGR Hinova, Serasa, Clicksign, Meta Ads e Google Ads, em jobs assíncronos sobre filas Redis.',
          'Motor de análise de crédito por regras configuráveis: recebe o webhook do CRM, consulta o SGR, escala para o Serasa quando a régua pede e devolve o resultado ao lead.',
          'Bridge de sincronização SGR ↔ Veniti por polling com diff de hash e log de auditoria, e painel administrativo em React com TypeScript.',
          'Docker em três ambientes, deploy por GitHub Actions e observabilidade com Horizon, Pulse e Telescope nos servidores Linux.',
        ],
        stack: ['PHP', 'Laravel', 'Slim', 'PostgreSQL', 'Redis', 'React.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'GitHub Actions', 'n8n'],
      },
      {
        period: 'nov 2024 — jun 2025',
        company: 'Midia Simples Intermediação de Negócios',
        role: 'Desenvolvedor back-end PHP',
        bullets: [
          'Desenvolvimento de páginas e sistemas web.',
          'Entregas sob a metodologia ágil Kanban.',
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
        period: 'dez 2023 — set 2024',
        company: 'LIF Solutions / Grupo Sideral',
        role: 'Desenvolvedor PHP',
        bullets: [
          'Desenvolvimento de páginas e sistemas web.',
          'Manutenção e implementação de funcionalidades em WordPress e Bubble.io.',
        ],
        stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'jQuery', 'Docker', 'Git'],
      },
      {
        period: 'fev 2023 — nov 2023',
        company: 'Universidade Estadual do Sudoeste da Bahia',
        role: 'Estagiário em desenvolvimento de software',
        bullets: [
          'Desenvolvimento de software na Fábrica de Software da UESB.',
          'Entregas sob a metodologia ágil Scrum.',
        ],
        stack: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'Docker', 'Git'],
      },
    ],
  },
  skills: {
    heading: 'Tecnologias',
    groups: [
      { label: 'Back-end', items: ['PHP', 'Laravel', 'Slim', 'Python', 'Laravel Horizon'] },
      {
        label: 'Front-end',
        items: ['React.js', 'TypeScript', 'Inertia.js', 'Vue.js', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
      },
      { label: 'Dados', items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Redis'] },
      { label: 'Infraestrutura', items: ['Docker', 'Nginx', 'GitHub Actions', 'Linux', 'WSL', 'Git'] },
      { label: 'Qualidade', items: ['PHPUnit', 'Pest', 'PHPStan', 'Vitest'] },
      { label: 'Processos', items: ['Scrum', 'Kanban'] },
      { label: 'Plataformas', items: ['WordPress', 'Bubble.io'] },
    ],
  },
  education: {
    heading: 'Formação',
    items: [
      {
        title: 'Bacharelado em Sistemas de Informação',
        institution: 'Universidade Estadual do Sudoeste da Bahia — UESB',
        note: 'Em andamento',
      },
    ],
    languagesHeading: 'Idiomas',
    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'Básico' },
    ],
  },
  certifications: {
    heading: 'Certificações',
    items: [
      { title: 'Introdução ao PHP', issuer: 'DIO', year: '2022' },
      { title: 'Desenvolvimento Avançado em PHP', issuer: 'DIO', year: '2023' },
      { title: 'Suporte em TI', issuer: 'Google / Coursera', year: '2023' },
      { title: 'Curso Online de PHP', issuer: 'Rocketseat', year: '2024' },
    ],
  },
  projects: {
    heading: 'Projetos',
    items: [
      {
        name: 'Layers',
        summary:
          'Pacote Laravel que gera repositories, interfaces e services para arquitetura em camadas e registra os bindings sozinho. Mantenho o fork: atualizei para Laravel 12 e PHP 8.2+, tipei os stubs e criei um comando que monta as camadas de todos os models de uma vez.',
        stack: ['PHP', 'Laravel', 'Composer'],
        repoUrl: 'https://github.com/cebpereira/Layers',
      },
      {
        name: 'UniEspaços',
        summary:
          'Sistema open source de reserva de espaços da UESB. Contribuí com a migração para arquitetura em camadas, permissões granulares por papel, um módulo de relatórios com dashboard e o fim dos horários duplicados nas reservas, garantido no banco.',
        stack: ['Laravel', 'React', 'Inertia.js', 'TypeScript', 'PostgreSQL', 'Docker'],
        repoUrl: 'https://github.com/uniespacos/uniespacos',
      },
    ],
  },
  contact: {
    heading: 'Vamos conversar',
    lede: 'Mande uma mensagem e eu respondo no mesmo email.',
    fields: {
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
    },
    placeholders: {
      name: 'Como devo te chamar',
      email: 'onde.te.respondo@email.com',
      subject: 'Sobre o que é',
      message: 'Conte o que você tem em mente',
    },
    submit: 'Enviar mensagem',
    submitting: 'Enviando',
    errors: {
      nameRequired: 'Escreva seu nome.',
      emailRequired: 'Escreva seu email para eu poder responder.',
      emailInvalid: 'Esse email não parece válido.',
      subjectRequired: 'Escreva um assunto.',
      messageRequired: 'Escreva sua mensagem.',
      messageTooShort: 'A mensagem precisa de pelo menos 10 caracteres.',
    },
    toast: {
      success: 'Mensagem enviada. Respondo assim que possível.',
      failure: 'A mensagem não foi enviada. Tente de novo em instantes.',
      rateLimited: 'Muitas mensagens seguidas. Tente de novo em alguns minutos.',
      network: 'Sem conexão com o servidor. Verifique sua internet e tente de novo.',
    },
    directLabel: 'Ou fale direto',
  },
  footer: {
    note: 'Feito em Jequié, Bahia.',
  },
}
