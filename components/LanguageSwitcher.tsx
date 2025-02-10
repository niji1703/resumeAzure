import Link from "next/link"
import { type Locale, locales, localeNames } from "../i18n/locales"

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  return (
    <div className="flex space-x-2">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className={`px-3 py-1 rounded ${
            currentLang === locale ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {localeNames[locale]}
        </Link>
      ))}
    </div>
  )
}

