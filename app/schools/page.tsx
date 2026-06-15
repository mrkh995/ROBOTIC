import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { FeatureCard } from "@/components/blocks/feature-card"
import { ButtonLink } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "همکاری با مدارس",
  description:
    "برگزاری کارگاه‌ها و دوره‌های رباتیک و فناوری ویژه‌ی مدارس در کرج و البرز.",
}

const benefits = [
  {
    icon: "Building2",
    title: "برگزاری در محل مدرسه",
    description: "امکان اجرای کارگاه‌ها و دوره‌ها در فضای مدرسه‌ی شما.",
  },
  {
    icon: "Cpu",
    title: "تجهیزات و کیت آموزشی",
    description: "تأمین رباتیک‌کیت و قطعات الکترونیکی متناسب با سن دانش‌آموزان.",
  },
  {
    icon: "GraduationCap",
    title: "مدرسان متخصص",
    description: "حضور مدرسان باتجربه‌ی آریما برای آموزش پروژه‌محور.",
  },
  {
    icon: "Trophy",
    title: "آمادگی برای مسابقات",
    description: "تربیت تیم‌های دانش‌آموزی برای شرکت در مسابقات رباتیک.",
  },
]

export default function SchoolsPage() {
  return (
    <>
      <Section
        eyebrow="ویژه‌ی مدارس"
        title="همکاری آریما با مدارس"
        description="آریما با برگزاری کارگاه‌ها و دوره‌های رباتیک و فناوری، مدارس را در آموزش مهارت‌های آینده همراهی می‌کند."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <FeatureCard
              key={b.title}
              icon={b.icon}
              title={b.title}
              description={b.description}
            />
          ))}
        </div>
      </Section>

      <section className="bg-brand-gradient">
        <Container className="py-14 text-center text-white">
          <h2 className="text-2xl font-extrabold">
            مدرسه‌ی شما آماده‌ی همکاری است؟
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            برای دریافت طرح همکاری و هماهنگی جلسه با ما در تماس باشید.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="accent" size="lg">
              درخواست همکاری
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
