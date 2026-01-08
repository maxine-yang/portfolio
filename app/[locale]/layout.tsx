import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import ThemeContextProvider from "@/context/theme-context"
import { ActionSectionContextProvider } from "@/context/action-section-context"
import Footer from "@/components/Footer"
import ThemeSwitch from "@/components/ThemeTwich"
// import { usePathname } from "next/navigation"
import LanguageSwitch from "@/components/LanguageSwitch"
import { NextIntlClientProvider, useMessages } from "next-intl"
import WidgetWrapper from "@/components/WidgetWrapper"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  // const pathname = usePathname()
  // const isProjectDetail = pathname.includes("projects")
  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-950 relative dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeContextProvider>
            <ActionSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <WidgetWrapper>
                <ThemeSwitch />
                <LanguageSwitch />
              </WidgetWrapper>
            </ActionSectionContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
