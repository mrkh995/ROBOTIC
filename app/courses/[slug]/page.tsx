import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { Accordion } from "@/components/ui/accordion"
import { ButtonLink } from "@/components/ui/button"
import { courses, getCourse } from "@/lib/data/courses"
import { getCategory } from "@/lib/data/categories"

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) return { title: "دوره یافت نشد" }
  return { title: course.title, description: course.shortDescription }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()

  const category = getCategory(course.category)
  const isComingSoon = course.status === "coming-soon"
  const badgeClass = "border border-white/20 bg-white/10 text-white"

  return (
    <>
      <section className="bg-brand-gradient text-white">
        <Container className="py-14">
          <div className="flex flex-wrap items-center gap-2">
            {category && <Badge className={badgeClass}>{category.title}</Badge>}
            {course.competition && (
              <Badge className={badgeClass}>مسابقه‌ای</Badge>
            )}
            <Badge className={badgeClass}>{course.ageRange}</Badge>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-4 max-w-2xl leading-8 text-white/90">
            {course.longDescription ?? course.shortDescription}
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="accent" size="lg">
              {isComingSoon ? "اطلاع از زمان شروع" : "ثبت‌نام و مشاوره"}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-extrabold text-slate-900">
              سرفصل‌های دوره
            </h2>
            {course.syllabus && course.syllabus.length > 0 ? (
              <ol className="mt-4 space-y-3">
                {course.syllabus.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
                  >
                    <span className="font-bold text-brand">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mt-4 text-slate-500">
                سرفصل‌های کامل این دوره به‌زودی منتشر می‌شود.
              </p>
            )}

            {course.projects && course.projects.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-extrabold text-slate-900">
                  پروژه‌های دوره
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.projects.map((p) => (
                    <Badge key={p} tone="muted">
                      {p}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {course.faq && course.faq.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-4 text-xl font-extrabold text-slate-900">
                  پرسش‌های پرتکرار
                </h2>
                <Accordion items={course.faq} />
              </div>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-900">مشخصات دوره</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-500">رده‌ی سنی</dt>
                  <dd className="font-medium text-slate-800">{course.ageRange}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">مدت دوره</dt>
                  <dd className="font-medium text-slate-800">{course.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">سطح</dt>
                  <dd className="font-medium text-slate-800">{course.level}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">پیش‌نیاز</dt>
                  <dd className="font-medium text-slate-800">
                    {course.prerequisite}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">کیت</dt>
                  <dd className="font-medium text-slate-800">{course.kit}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">گواهی پایان دوره</dt>
                  <dd className="font-medium text-slate-800">
                    {course.certificate ? "دارد" : "ندارد"}
                  </dd>
                </div>
              </dl>
            </div>
            {course.outcome && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-700">
                <h3 className="mb-2 font-bold text-slate-900">دستاورد دوره</h3>
                {course.outcome}
              </div>
            )}
          </aside>
        </div>
      </Section>
    </>
  )
}
