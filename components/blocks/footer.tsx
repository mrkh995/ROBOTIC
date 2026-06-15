import Link from "next/link"
import { Container } from "@/components/ui/container"
import { site } from "@/lib/data/site"
import { Bot } from "lucide-react"

export function Footer() {
  const year = "۱۴۰۳"
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-slate-900">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white">
                <Bot className="h-5 w-5" />
              </span>
              <span>{site.name}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900">دسترسی سریع</h4>
            <ul className="mt-4 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900">تماس</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>{site.city}</li>
              <li>ساعات کاری: {site.contact.workingHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © {year} {site.legalName}. تمامی حقوق محفوظ است.
        </div>
      </Container>
    </footer>
  )
}
