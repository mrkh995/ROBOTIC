import { Container } from "@/components/ui/container"
import { ButtonLink } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            آموزشگاه رباتیک فنی و حرفه‌ای آریما در کرج
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-balance sm:text-5xl">
            آموزش رباتیک، الکترونیک، برنامه‌نویسی و هوش مصنوعی در کرج
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            با آموزش پروژه‌محور آریما، کودکان و نوجوانان مهارت‌های فناورانه را با ساختن پروژه‌های واقعی یاد می‌گیرند.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/contact" variant="accent" size="lg">
              مشاوره‌ی رایگان
            </ButtonLink>
            <ButtonLink
              href="/courses"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              مشاهده‌ی دوره‌ها
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
