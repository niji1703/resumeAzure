import { type Locale, locales } from "../../i18n/locales"
import type React from "react"

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}

