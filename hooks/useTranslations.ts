"use client"

import { useCallback } from "react"
import type { Locale } from "../i18n/locales"
import en from "../i18n/translations/en.json"
import ja from "../i18n/translations/ja.json"
import type { ResumeData } from "../types/resumeTypes"

const translations: Record<Locale, any> = { en, ja }

type TranslationKey =
  | "title"
  | "selectCompany"
  | "linkedinText"
  | "downloadText"
  | "linkedinUrl"
  | "pdfUrl"
  | "resume"
  | "additionalInfo"

export function useTranslations(locale: Locale) {
  const t = useCallback(
    (key: TranslationKey): string | ResumeData | { title: string; items: string[] }[] => {
      const value = translations[locale][key]
      if (key === "resume") {
        return value as ResumeData
      }
      return value
    },
    [locale],
  )

  return { t }
}

