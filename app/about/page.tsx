import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { StatBar } from "@/components/blocks/stat-bar"
import { ButtonLink } from "@/components/ui/button"
import { Card, CardBody, CardTitle } from "@/components/ui/card"
import { site } from "@/lib/data/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "درباره‌ی ما",
  description:
    "آشنایی با آموزشگاه رباتیک آریما، بنیان‌گذاران و رویکرد آموزشی پروژه‌محور آن.",
}

const founders = [
  {
    name: "مهندس نعیمه رجب‌پور",
    role: "بنیان‌گذار و مدیر آموزش",
    bio: "بنیان‌گذار آریما و مدرس رباتیک با تجربه‌ی سال‌ها آموزش کودکان و نوجوانان.",
  },
  {
    name: "دکتر علی‌اصغر زنگانه",
    role: "بنیان‌گذار و مدرس ارشد",
    bio: "نویسنده‌ی کتاب «الکترونیک را ساده بیاموزید» و مدرس دوره‌های الکترونیک و رباتیک.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="درباره‌ی آریما"
        title="آموزشگاهی برای آینده‌سازان"
        description={site.description}
      >
        <div className="mx-auto max-w-3xl space-y-4 text-center leading-8 text-slate-700">
          <p>
            آموزشگاه رباتیک فنی و حرفه‌ای آریما در شهر کرج با هدف آموزش پروژه‌محور رباتیک، الکترونیک، برنامه‌نویسی و هوش مصنوعی به کودکان، نوجوانان و بزرگسالان فعالیت می‌کند.
          </p>
          <p>
            رویکرد ما یادگیری از طریق ساختن است؛ هنرجویان با اجرای پروژه‌های واقعی، مهارت‌های فنی و خلاقیت خود را تقویت می‌کنند.
          </p>
        </div>
      </Section>

      <StatBar />

      <Section surface eyebrow="تیم ما" title="بنیان‌گذاران آریما">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {founders.map((f) => (
            <Card key={f.name}>
              <CardBody>
                <CardTitle>{f.name}</CardTitle>
                <p className="mt-1 text-sm font-bold text-brand">{f.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{f.bio}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <section className="bg-brand-gradient">
        <Container className="py-14 text-center text-white">
          <h2 className="text-2xl font-extrabold">آماده‌ی شروع هستید؟</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            برای دریافت مشاوره‌ی رایگان و انتخاب دوره‌ی مناسب با ما در تماس باشید.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="accent" size="lg">
              مشاوره‌ی رایگان
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
