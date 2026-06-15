import { Icon } from "@/lib/icons"
import { Card, CardBody, CardTitle } from "@/components/ui/card"

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <Card>
      <CardBody>
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
          <Icon name={icon} className="h-6 w-6" />
        </div>
        <CardTitle>{title}</CardTitle>
        <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
      </CardBody>
    </Card>
  )
}
