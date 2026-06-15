import Link from "next/link"
import { Icon } from "@/lib/icons"
import { Card, CardBody, CardTitle } from "@/components/ui/card"
import type { Category } from "@/lib/data/categories"

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/courses?category=${category.slug}`} className="block h-full">
      <Card className="h-full">
        <CardBody>
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
            <Icon name={category.icon} className="h-6 w-6" />
          </div>
          <CardTitle>{category.title}</CardTitle>
          <p className="mt-1 text-xs font-bold text-brand">{category.age}</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {category.description}
          </p>
        </CardBody>
      </Card>
    </Link>
  )
}
