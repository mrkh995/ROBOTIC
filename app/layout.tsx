import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/blocks/navbar"
import { Footer } from "@/components/blocks/footer"
import { site } from "@/lib/data/site"

const vazirmatn = Vazirmatn({ subsets: ["arabic"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | آموزش رباتیک در کرج`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "آموزش رباتیک در کرج",
    "کلاس رباتیک کودکان در کرج",
    "آموزش الکترونیک",
    "آموزش برنامه‌نویسی کودکان",
    "هوش مصنوعی",
    "آریما",
  ],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    title: site.name,
    description: site.description,
    siteName: site.name,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
