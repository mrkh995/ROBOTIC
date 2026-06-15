import { Card, CardBody } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialCard({
  name,
  role,
  text,
}: {
  name: string
  role: string
  text: string
}) {
  return (
    <Card className="h-full">
      <CardBody>
        <Quote className="h-6 w-6 text-accent" />
        <p className="mt-3 text-sm leading-7 text-slate-700">{text}</p>
        <div className="mt-4">
          <p className="font-bold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </CardBody>
    </Card>
  )
}
