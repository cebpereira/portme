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

export interface ProjectItem {
  name: string
  summary: string
  stack: string[]
  repoUrl?: string
  liveUrl?: string
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
    location: string
    email: string
    phone: string
    phoneHref: string
    github: string
    linkedin: string
  }
  nav: {
    about: string
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
    headline: string[]
    lede: string
    availability: string
  }
  about: {
    heading: string
    paragraphs: string[]
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
