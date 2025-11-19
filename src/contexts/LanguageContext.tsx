'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations, TranslationKey } from '@/src/utils/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('bn')

  useEffect(() => {
    // Load language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage === 'en' || savedLanguage === 'bn') {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }

  // Update HTML lang attribute on mount
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

