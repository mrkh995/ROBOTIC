import { Hero } from "@/components/blocks/hero"
import { StatBar } from "@/components/blocks/stat-bar"
import { Section } from "@/components/ui/section"
import { FeatureCard } from "@/components/blocks/feature-card"
import { CategoryCard } from "@/components/blocks/category-card"
import { CourseCard } from "@/components/blocks/course-card"
import { TestimonialCard } from "@/components/blocks/testimonial-card"
import { FaqSection } from "@/components/blocks/faq-section"
import { CompetitionBanner } from "@/components/blocks/competition-banner"
import { ButtonLink } from "@/components/ui/button"
import { Reveal } from "@/components/blocks/reveal"
import { site } from "@/lib/data/site"
import { categories } from "@/lib/data/categories"
import { getPopularCourses } from "@/lib/data/courses"

export default function HomePage() {
  const popular = getPopularCourses()
  return (
    <>
      <Hero />
      <StatBar />

      <Section
        eyebrow="حوزه‌های آموزشی"
        title="چهار مسیر یادگیری در آریما"
        description="از رباتیک کودکان تا هوش مصنوعی؛ مسیر مناسب هر سن و علاقه‌ای را انتخاب کنید."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Section>

      <Section
        surface
        eyebrow="چرا آریما؟"
        title="ویژگی‌های آموزشگاه رباتیک آریما"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="محبوب‌ترین دوره‌ها"
        title="دوره‌های پرطرفدار رباتیک"
        description="چند نمونه از دوره‌های فعال و پروژه‌محور آریما برای کودکان و نوجوانان."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/courses" variant="outline" size="lg">
            مشاهده‌ی همه‌ی دوره‌ها
          </ButtonLink>
        </div>
      </Section>

      <CompetitionBanner />

      <Section
        eyebrow="نظر هنرجویان و اولیا"
        title="تجربه‌ی یادگیری در آریما"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.map((t) => (
            <Reveal key={t.name}>
              <TestimonialCard name={t.name} role={t.role} text={t.text} />
            </Reveal>
          ))}
        </div>
      </Section>

      <FaqSection items={site.faq} />
    </>
  )
}
