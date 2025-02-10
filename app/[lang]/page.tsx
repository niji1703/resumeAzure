"use client"

import { useState } from "react"
import ResumeTimeline from "../../components/ResumeTimeline"
import ResumeDetail from "../../components/ResumeDetail"
import ResumeActions from "../../components/ResumeActions"
import AdditionalInfo from "../../components/AdditionalInfo"
import LanguageSwitcher from "../../components/LanguageSwitcher"
import { useTranslations } from "../../hooks/useTranslations"
import { type Locale, defaultLocale } from "../../i18n/locales"
import type { ResumeData } from "../../types/resumeTypes"

export default function Home({ params }: { params: { lang: Locale } }) {
  const lang = params.lang || defaultLocale
  const { t } = useTranslations(lang)
  const [activeItemId, setActiveItemId] = useState<number | null>(null)
  const [activeItemType, setActiveItemType] = useState<"education" | "company" | null>(null)

  const handleItemClick = (id: number | null, type: "education" | "company") => {
    setActiveItemId(id)
    setActiveItemType(type)
  }

  const resumeData = t("resume") as ResumeData
  const education = Array.isArray(resumeData?.education) ? resumeData.education : []
  const companies = Array.isArray(resumeData?.companies) ? resumeData.companies : []

  const activeItem =
    activeItemType === "education"
      ? education.find((edu) => edu.id === activeItemId)
      : companies.find((company) => company.id === activeItemId) || null
  const additionalInfo = t("additionalInfo") as { title: string; items: string[] }[]

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 space-y-4 sm:space-y-0">
          <h1 className="text-4xl font-bold text-gray-800">{t("title")}</h1>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <ResumeActions linkedinUrl={t("linkedinUrl")} linkedinText={t("linkedinText")} />
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <ResumeTimeline
              education={education}
              companies={companies}
              activeItemId={activeItemId}
              activeItemType={activeItemType}
              onItemClick={handleItemClick}
            />
          </div>
          <div className="lg:w-1/2">
            <ResumeDetail item={activeItem} selectItemText={t("selectCompany")} />
          </div>
        </div>
        <div className="mt-12">
          <AdditionalInfo sections={additionalInfo} />
        </div>
      </div>
    </main>
  )
}

