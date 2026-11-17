import type { Content } from './types'

export const pt: Content = {
  meta: {
    htmlLang: 'pt-BR',
    title: 'Carlos Elandro | Desenvolvedor de software',
    description:
      'Desenvolvedor de software com foco em back-end, aberto a novas oportunidades. PHP, Laravel, React, PostgreSQL, Docker e AWS em sistemas web de produção, com IA no fluxo de desenvolvimento.',
  },
  person: {
    name: 'Carlos Elandro Bastos Pereira',
    role: 'Desenvolvedor de software',
    focus: 'Foco em back-end',
    location: 'Jequié, Bahia',
    email: 'c.elandro.bp@gmail.com',
    phone: '(73) 98861-0735',
    phoneHref: 'tel:+5573988610735',
    whatsapp: 'https://wa.me/5573988610735?text=Ol%C3%A1%2C%20Carlos%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.',
    github: 'https://github.com/cebpereira',
    linkedin: 'https://www.linkedin.com/in/cebpereira/',
  },
  nav: {
    about: 'Sobre',
    how: 'Como trabalho',
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
    greeting: [
      'Oi! Eu sou o Carlos, desenvolvedor de software.',
      'Meu forte é o back-end com PHP e Laravel, mas cuido do caminho todo, da interface em React ao deploy na AWS. Escolha uma pergunta aqui embaixo ou role a página para ver tudo.',
    ],
    status: 'Aberto a novas oportunidades',
    prompt: 'Perguntas que costumam me fazer',
    typing: 'Carlos está digitando',
    restart: 'Recomeçar a conversa',
    conversationLabel: 'Conversa',
    resume: { label: 'Baixar currículo', href: '/curriculo-carlos-elandro.pdf' },
    whatsappLabel: 'Chamar no WhatsApp',
    visitorLabel: 'Você',
    questions: [
      {
        id: 'available',
        question: 'Você está disponível?',
        answer:
          'Estou aberto a novas oportunidades, e o modelo de contratação a gente alinha na conversa. Se você tem uma vaga ou um projeto em mente, me chame pelo formulário no fim da página.',
        link: { href: '#contact', label: 'Ir para o contato' },
      },
      {
        id: 'what',
        question: 'O que você faz, em poucas palavras?',
        answer:
          'Desenvolvo sistemas web de ponta a ponta, com mais força no back-end. Escrevo as regras de negócio, as integrações com outras plataformas e os bancos de dados, faço a interface quando o projeto pede e cuido do deploy. São sistemas em produção, que empresas usam todo dia para operar.',
        link: { href: '#about', label: 'Ler mais sobre mim' },
      },
      {
        id: 'solve',
        question: 'Que tipo de problema você resolve?',
        answer:
          'Faço sistemas conversarem. Num grupo de empresas de proteção veicular e rastreamento, montei uma análise de crédito que roda sozinha. O lead chega do CRM, o sistema consulta as bases de crédito e devolve o resultado sem ninguém precisar intervir. Também transformo planilhas e PDFs de formatos diferentes em dados confiáveis.',
        link: { href: '#experience', label: 'Ver os detalhes' },
      },
      {
        id: 'stack',
        question: 'Com quais tecnologias você trabalha?',
        answer:
          'PHP e Laravel no dia a dia, PostgreSQL para os dados, Docker e AWS para colocar tudo no ar. Quando o projeto pede, faço a interface também, em React com TypeScript.',
        link: { href: '#stack', label: 'Ver todas as tecnologias' },
      },
      {
        id: 'study',
        question: 'Qual a sua formação?',
        answer:
          'Estou cursando Bacharelado em Sistemas de Informação na UESB. Falo português como língua nativa e tenho inglês básico.',
        link: { href: '#education', label: 'Ver formação e cursos' },
      },
      {
        id: 'ai',
        question: 'Você usa IA no trabalho?',
        answer:
          'Uso, todos os dias. Trabalho com o Claude Code para pesquisar o código, planejar e implementar, com skills e agentes que eu mesmo escrevi para os projetos. A revisão e a responsabilidade pelo que vai para produção continuam comigo.',
      },
      {
        id: 'own',
        question: 'Você tem algum projeto próprio?',
        answer:
          'Tenho o Fiz a Nota, um micro SaaS de emissão de nota fiscal de serviço para MEI e pequenas empresas. O app e a landing page já estão no ar, em beta, e eu construí tudo sozinho, da API ao deploy.',
        link: { href: '#projects', label: 'Ver o Fiz a Nota' },
      },
      {
        id: 'resume',
        question: 'Pode me mandar seu currículo?',
        answer:
          'Claro! É só baixar o PDF pelo link abaixo. Ele também fica no botão ao lado do meu nome, no topo da página.',
        link: { href: '/curriculo-carlos-elandro.pdf', label: 'Baixar currículo (PDF)' },
      },
      {
        id: 'contact',
        question: 'Como eu falo com você?',
        answer:
          'Pelo formulário no fim da página, que chega direto no meu email, ou escrevendo para c.elandro.bp@gmail.com. Também respondo pelo LinkedIn.',
        link: { href: '#contact', label: 'Ir para o contato' },
      },
    ],
  },
  about: {
    heading: 'Um pouco sobre mim',
    paragraphs: [
      'Desenvolvo software desde 2023, com PHP e Laravel no centro do trabalho. Construo e mantenho sistemas que estão em produção e sustentam a operação das empresas, como gestão de benefícios corporativos, CRM com análise de crédito automatizada e integrações entre plataformas de terceiros.',
      'Boa parte do meu trabalho é fazer sistemas conversarem, com APIs REST, webhooks, filas e jobs assíncronos e sincronização entre plataformas com registro do que mudou. Também passo muito tempo com dados, da modelagem e das consultas em PostgreSQL à importação de planilhas e PDFs que chegam em formatos que ninguém controla.',
      'Também cuido do caminho até a produção, com ambientes em Docker, deploy por CI/CD, observabilidade e servidores Linux. Quando a entrega pede, construo a interface também, em React com TypeScript.',
      'Uso IA como parte do processo. Com o Claude Code e skills que escrevo para cada projeto, pesquiso o código, planejo e implemento mais rápido, sem abrir mão de revisar tudo o que entrego.',
      'Prefiro mudanças que chegam em produção sem surpresa, com testes automatizados, análise estática e rollouts ensaiados antes numa cópia dos dados reais.',
    ],
  },
  how: {
    heading: 'Como eu trabalho',
    items: [
      {
        title: 'Entendo o problema antes do código',
        text:
          'Converso com quem usa o sistema, leio o que já existe e planejo antes de implementar. Mudanças grandes ganham um documento de proposta para o time discutir.',
      },
      {
        title: 'Nada chega em produção sem prova',
        text:
          'Testes automatizados, análise estática e revisão em cada pull request. Quando a mudança mexe com dados, ensaio antes numa cópia do banco de produção.',
      },
      {
        title: 'IA como ferramenta, não como atalho',
        text:
          'Uso o Claude Code para pesquisar, planejar e implementar mais rápido. Reviso cada linha, e a responsabilidade pelo que vai para produção é minha.',
      },
      {
        title: 'Falo a língua de quem não é técnico',
        text:
          'Explico o que mudou e por quê em termos de negócio, e documento as decisões para quem vier depois.',
      },
    ],
  },
  experience: {
    heading: 'Por onde passei',
    currentLabel: 'Posição atual',
    items: [
      {
        period: 'set 2025 — atual',
        company: 'Rhopen Consultoria',
        role: 'Desenvolvedor back-end pleno',
        current: true,
        bullets: [
          'Evolução do Robô IG, plataforma que audita benefícios. Ela cruza a folha de pagamento com a folha de ponto e com as faturas de planos de saúde, odontológicos, seguros de vida, vale-alimentação, vale-refeição e vale-transporte, e aponta as divergências.',
          'Mais de 50 leitores de fatura em PDF, XLSX, CSV e TXT, que conciliam cada beneficiário com a folha.',
          'Motor de auditoria configurável por empresa, com a memória de cálculo de cada apontamento.',
          'No e-Leader, produto de avaliação de liderança, desenvolvi a importação por planilha com validação, o cálculo de resultados e a trilha de auditoria.',
          'Skills e agentes de IA para o time no Claude Code. Qualidade com PHPStan nível 9, testes automatizados no CI e RFCs de arquitetura.',
        ],
        stack: ['PHP', 'Laravel', 'PostgreSQL', 'React.js', 'TypeScript', 'Inertia.js', 'Python', 'PHPStan', 'Pest', 'Docker', 'Claude Code'],
      },
      {
        period: 'set 2025 — jun 2026',
        company: 'Arbus | Frotas Inteligentes',
        role: 'Desenvolvedor back-end pleno',
        bullets: [
          'Atuação também na Ponto Track Rastreamento e na América Proteção Veicular, empresas do mesmo grupo.',
          'API central que recebe os leads dos formulários das landing pages em WordPress e dos anúncios, envia ao CRM e reprocessa sozinha o que falha.',
          'Análise de crédito automatizada por regras configuráveis, com revisão manual quando o serviço de crédito está indisponível.',
          'Sincronização de vendas, beneficiários e veículos entre as plataformas do grupo, com processamento assíncrono e log de auditoria.',
          'Painel administrativo em React com TypeScript para configurar integrações e regras sem deploy.',
          'Docker em três ambientes, deploy por GitHub Actions, observabilidade e agentes de IA configurados nos repositórios.',
        ],
        stack: ['PHP', 'Laravel', 'Slim', 'PostgreSQL', 'Redis', 'React.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'GitHub Actions', 'n8n', 'WordPress', 'Claude Code'],
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
    heading: 'Com o que trabalho',
    groups: [
      { label: 'Back-end', items: ['PHP', 'Laravel', 'Slim', 'Python', 'Laravel Horizon'] },
      {
        label: 'Front-end',
        items: ['React.js', 'TypeScript', 'Inertia.js', 'Vue.js', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
      },
      { label: 'Dados', items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Redis'] },
      { label: 'Infraestrutura', items: ['AWS (EC2, VPC, S3)', 'Docker', 'Nginx', 'GitHub Actions', 'Linux', 'WSL', 'Git'] },
      { label: 'Qualidade', items: ['PHPUnit', 'Pest', 'PHPStan', 'Vitest'] },
      { label: 'IA no desenvolvimento', items: ['Claude Code', 'Claude API', 'Skills e agentes'] },
      { label: 'Processos', items: ['Scrum', 'Kanban'] },
      { label: 'Plataformas', items: ['WordPress', 'Bubble.io'] },
    ],
  },
  education: {
    heading: 'Onde estudo',
    items: [
      {
        title: 'Bacharelado em Sistemas de Informação',
        institution: 'Universidade Estadual do Sudoeste da Bahia (UESB)',
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
    heading: 'Cursos e certificados',
    items: [
      { title: 'Introdução ao PHP', issuer: 'DIO', year: '2022' },
      { title: 'Desenvolvimento Avançado em PHP', issuer: 'DIO', year: '2023' },
      { title: 'Suporte em TI', issuer: 'Google / Coursera', year: '2023' },
      { title: 'Curso Online de PHP', issuer: 'Rocketseat', year: '2024' },
    ],
  },
  projects: {
    heading: 'Projetos próprios e open source',
    liveLabel: 'Acessar o site',
    gallery: {
      open: 'Ampliar a tela',
      close: 'Fechar',
      previous: 'Tela anterior',
      next: 'Próxima tela',
      counter: '{current} de {total}',
    },
    items: [
      {
        name: 'Fiz a Nota',
        summary:
          'Meu micro SaaS, em beta, para emissão de nota fiscal de serviço (NFS-e) para MEI e pequenas empresas do Simples Nacional, integrada ao emissor nacional. Construí sozinho a API, o app e a landing page, com certificado digital A1, emissão, cancelamento e substituição validados no ambiente oficial, fluxo de caixa, assinatura por PIX, cartão e boleto e um resumo mensal escrito por IA, com os números calculados pelo sistema e os dados sensíveis mascarados. Roda na AWS, em instâncias EC2 numa VPC própria e com arquivos no S3.',
        stack: ['Laravel', 'PHP 8.4', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'AWS EC2', 'AWS VPC', 'AWS S3', 'Claude API'],
        liveUrl: 'https://fizanota.com.br',
        images: [
          {
            src: '/projects/fizanota-landing.webp',
            url: 'fizanota.com.br',
            title: 'Landing page',
            description:
              'A porta de entrada do produto. Explica o que o Fiz a Nota faz, como começar e quais são os planos. Feita em React Router 7, separada do app.',
          },
          {
            src: '/projects/fizanota-resumo-ia.webp',
            url: 'app.fizanota.com.br',
            title: 'Início com resumo escrito por IA',
            description:
              'Os números do mês são calculados pelo sistema e o Claude só escreve o texto em cima deles. CPF e CNPJ são mascarados antes do envio, e cada empresa tem um limite mensal de gerações.',
          },
          {
            src: '/projects/fizanota-emissao.webp',
            url: 'app.fizanota.com.br/notas/emitir',
            title: 'Emissão em quatro passos',
            description:
              'Cliente, serviço, valores e revisão. A prévia ao lado mostra como a nota vai sair, e nada é enviado ao emissor nacional antes da confirmação.',
          },
          {
            src: '/projects/fizanota-notas.webp',
            url: 'app.fizanota.com.br/notas',
            title: 'Lista de notas',
            description:
              'Todas as notas da empresa, cada uma com a sua situação (autorizada, não autorizada, cancelada ou substituída), com filtro por cliente e período.',
          },
        ],
      },
      {
        name: 'Layers',
        summary:
          'Pacote Laravel que gera repositories, interfaces e services para arquitetura em camadas e registra os bindings sozinho. No fork que mantenho, atualizei para Laravel 12 e PHP 8.2+, tipei os stubs e criei um comando que monta as camadas de todos os models de uma vez.',
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
