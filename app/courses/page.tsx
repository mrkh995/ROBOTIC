import { Section } from "@/components/ui/section"
import { CourseCard } from "@/components/blocks/course-card"
import { CategoryCard } from "@/components/blocks/category-card"
import { categories, getCategory } from "@/lib/data/categories"
import { courses, getCoursesByCategory } from "@/lib/data/courses"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "دوره‌ها",
  description:
    "همه‌ی دوره‌های رباتیک، الکترونیک، برنامه‌نویسی و هوش مصنوعی آریما در کرج.",
}

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams
  const activeCategory = getCategory(params.category ?? "")
  const list = activeCategory
    ? getCoursesByCategory(activeCategory.slug)
    : courses

  return (
    <Section
      eyebrow="دوره‌های آریما"
      title={activeCategory ? activeCategory.title : "همه‌ی دوره‌ها"}
      description={
        activeCategory
          ? activeCategory.description
          : "دوره‌های پروژه‌محور در چهار حوزه‌ی رباتیک، الکترونیک، برنامه‌نویسی و هوش مصنوعی."
      }
    >
      <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>

      {list.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-500">
          دوره‌ای در این حوزه یافت نشد.
        </p>
      )}
    </Section>
  )
}
