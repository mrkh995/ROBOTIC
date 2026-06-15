import type { MetadataRoute } from "next"
import { site } from "@/lib/data/site"
import { courses } from "@/lib/data/courses"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url
  const staticRoutes = ["", "/courses", "/about", "/schools", "/contact"]
  const now = new Date()

  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
  }))

  const courseEntries = courses.map((course) => ({
    url: `${base}/courses/${course.slug}`,
    lastModified: now,
  }))

  return [...staticEntries, ...courseEntries]
}
