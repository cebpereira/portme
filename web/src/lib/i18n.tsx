import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { en } from '@/content/en'
import { pt } from '@/content/pt'
import type { Content, Language } from '@/content/types'

const dictionaries: Record<Language, Content> = { pt, en }

const STORAGE_KEY = 'portme.lang'

function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'pt'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') return stored

  return window.navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

interface LanguageContextValue {
  language: Language
  content: Content
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectLanguage)

  const content = dictionaries[language]

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = content.meta.htmlLang
    document.title = content.meta.title

    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', content.meta.description)
  }, [language, content])

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === 'pt' ? 'en' : 'pt'))
  }, [])

  const value = useMemo(
    () => ({ language, content, setLanguage, toggleLanguage }),
    [language, content, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage precisa estar dentro de <LanguageProvider>')
  return context
}

export function useContent(): Content {
  return useLanguage().content
}
