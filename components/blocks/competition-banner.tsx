import { ButtonLink } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Trophy } from "lucide-react"

export function CompetitionBanner() {
  return (
    <section className="bg-brand-gradient">
      <Container className="flex flex-col items-center gap-6 py-14 text-center text-white md:flex-row md:justify-between md:text-right">
        <div className="flex items-center gap-4">
          <Trophy className="hidden h-12 w-12 shrink-0 md:block" />
          <div>
            <h2 className="text-2xl font-extrabold">
              آمادگی برای مسابقات رباتیک
            </h2>
            <p className="mt-2 max-w-xl text-white/90">
              دوره‌های مسابقه‌ای آریما هنرجویان را برای رقابت‌های کشوری رباتیک آماده می‌کنند.
            </p>
          </div>
        </div>
        <ButtonLink href="/contact" variant="accent" size="lg">
          مشاوره‌ی رایگان
        </ButtonLink>
      </Container>
    </section>
  )
}
