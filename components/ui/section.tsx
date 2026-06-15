import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function Section({
  eyebrow,
  title,
  description,
  surface = false,
  className,
  children,
}: {
  eyebrow?: string
  title?: string
  description?: string
  surface?: boolean
  className?: string
  children: ReactNode
}) {
  const hasHeader = Boolean(eyebrow || title || description)
  return (
    <section
      className={cn("py-16 sm:py-20", surface && "bg-slate-50", className)}
    >
      <Container>
        {hasHeader && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && (
              <p className="mb-2 text-sm font-bold text-accent">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
