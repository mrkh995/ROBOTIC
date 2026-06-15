import { Section } from "@/components/ui/section"
import { ContactForm } from "@/components/blocks/contact-form"
import { site } from "@/lib/data/site"
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "برای مشاوره‌ی رایگان و ثبت‌نام در دوره‌های آریما با ما در تماس باشید.",
}

const FALLBACK = "در حال تکمیل"

export default function ContactPage() {
  const info = [
    { Icon: MapPin, label: "آدرس", value: site.contact.address || site.city },
    { Icon: Phone, label: "تلفن", value: site.contact.phone || FALLBACK },
    {
      Icon: MessageCircle,
      label: "واتساپ",
      value: site.contact.whatsapp || FALLBACK,
    },
    {
      Icon: Instagram,
      label: "اینستاگرام",
      value: site.contact.instagram || FALLBACK,
    },
    { Icon: Mail, label: "ایمیل", value: site.contact.email || FALLBACK },
    {
      Icon: Clock,
      label: "ساعات کاری",
      value: site.contact.workingHours,
    },
  ]
  return (
    <Section
      eyebrow="تماس با آریما"
      title="مشاوره‌ی رایگان بگیرید"
      description="فرم زیر را پر کنید تا کارشناسان ما برای انتخاب دوره‌ی مناسب با شما تماس بگیرند."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
        <ul className="space-y-5">
          {info.map((item) => (
            <li key={item.label} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                <item.Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">{item.label}</p>
                <p className="mt-0.5 text-sm text-slate-600">{item.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
