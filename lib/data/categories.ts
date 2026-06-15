export type CategorySlug = "robotics" | "electronics" | "programming" | "ai"

export interface Category {
  slug: CategorySlug
  title: string
  age: string
  description: string
  icon: string
}

export const categories: Category[] = [
  {
    slug: "robotics",
    title: "رباتیک",
    age: "ویژه‌ی ۶ تا ۱۴ سال",
    description:
      "ساخت ربات‌های خلاق، مسابقه‌ای و هوشمند به صورت پروژه‌محور و گام‌به‌گام.",
    icon: "Bot",
  },
  {
    slug: "electronics",
    title: "الکترونیک",
    age: "ویژه‌ی ۱۴ سال به بالا و بزرگسالان",
    description:
      "آموزش اصول الکترونیک، قطعه‌شناسی، بردبورد و میکروکنترلرهای AVR و آردوینو.",
    icon: "CircuitBoard",
  },
  {
    slug: "programming",
    title: "برنامه‌نویسی",
    age: "ویژه‌ی ۸ سال به بالا",
    description:
      "از برنامه‌نویسی بصری و اسکرچ تا پایتون؛ تقویت تفکر الگوریتمی و حل مسئله.",
    icon: "Code2",
  },
  {
    slug: "ai",
    title: "هوش مصنوعی",
    age: "ویژه‌ی ۱۴ سال به بالا",
    description:
      "آشنایی با مفاهیم هوش مصنوعی، یادگیری ماشین و پردازش تصویر در رباتیک.",
    icon: "BrainCircuit",
  },
]

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
