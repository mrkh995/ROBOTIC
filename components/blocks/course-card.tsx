import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardBody, CardTitle } from "@/components/ui/card"
import type { Course } from "@/lib/data/courses"

export function CourseCard({ course }: { course: Course }) {
  const isComingSoon = course.status === "coming-soon"
  return (
    <Card className="flex h-full flex-col">
      <CardBody className="flex flex-1 flex-col">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {course.competition && <Badge tone="accent">مسابقه‌ای</Badge>}
          {isComingSoon ? (
            <Badge tone="muted">به‌زودی</Badge>
          ) : (
            <Badge tone="success">در حال ثبت‌نام</Badge>
          )}
          <Badge tone="muted">{course.ageRange}</Badge>
        </div>
        <CardTitle>{course.title}</CardTitle>
        <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">
          {course.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
          <span className="text-slate-500">{course.duration}</span>
          {isComingSoon ? (
            <span className="font-bold text-slate-400">به‌زودی</span>
          ) : (
            <Link
              href={`/courses/${course.slug}`}
              className="font-bold text-brand hover:underline"
            >
              مشاهده‌ی دوره
            </Link>
          )}
        </div>
      </CardBody>
    </Card>
  )
}
