export type Language = 'pt' | 'en'

export interface ExperienceItem {
  period: string
  company: string
  role: string
  bullets: string[]
  stack: string[]
  current?: boolean
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface EducationItem {
  title: string
  institution: string
  note?: string
}

export interface CertificationItem {
  title: string
  issuer: string
  year: string
}

export interface ProjectImage {
  src: string
  url: string
  title: string
  description: string
}

export interface ProjectItem {
  name: string
  summary: string
  stack: string[]
  repoUrl?: string
  liveUrl?: string
  images?: ProjectImage[]
}

export interface HeroQuestion {
  id: string
  question: string
  answer: string
  link?: { href: string; label: string }
}

export interface Content {
  meta: {
    htmlLang: string
    title: string
    description: string
  }
  person: {
    name: string
    role: string
    focus: string
    location: string
    email: string
    phone: string
    phoneHref: string
    whatsapp: string
    github: string
    linkedin: string
  }
  nav: {
    about: string
    how: string
    experience: string
    stack: string
    projects: string
    education: string
    certifications: string
    contact: string
    toggleLanguage: string
    toggleTheme: string
    skipToContent: string
  }
  hero: {
    greeting: string[]
    status: string
    prompt: string
    typing: string
    restart: string
    conversationLabel: string
    resume: { label: string; href: string }
    whatsappLabel: string
    visitorLabel: string
    questions: HeroQuestion[]
  }
  about: {
    heading: string
    paragraphs: string[]
  }
  how: {
    heading: string
    items: { title: string; text: string }[]
  }
  experience: {
    heading: string
    currentLabel: string
    items: ExperienceItem[]
  }
  skills: {
    heading: string
    groups: SkillGroup[]
  }
  education: {
    heading: string
    items: EducationItem[]
    languagesHeading: string
    languages: { name: string; level: string }[]
  }
  certifications: {
    heading: string
    items: CertificationItem[]
  }
  projects: {
    heading: string
    liveLabel: string
    gallery: {
      open: string
      close: string
      previous: string
      next: string
      counter: string
    }
    items: ProjectItem[]
  }
  contact: {
    heading: string
    lede: string
    fields: {
      name: string
      email: string
      subject: string
      message: string
    }
    placeholders: {
      name: string
      email: string
      subject: string
      message: string
    }
    submit: string
    submitting: string
    errors: {
      nameRequired: string
      emailRequired: string
      emailInvalid: string
      subjectRequired: string
      messageRequired: string
      messageTooShort: string
    }
    toast: {
      success: string
      failure: string
      rateLimited: string
      network: string
    }
    directLabel: string
  }
  footer: {
    note: string
  }
}
