import { Section } from "@/components/ui/section"
import { Accordion } from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection({
  items,
  title = "پرسش‌های پرتکرار",
  eyebrow = "سؤالات شما",
}: {
  items: FaqItem[]
  title?: string
  eyebrow?: string
}) {
  return (
    <Section eyebrow={eyebrow} title={title} surface>
      <div className="mx-auto max-w-3xl">
        <Accordion items={items} />
      </div>
    </Section>
  )
}
