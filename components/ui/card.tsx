import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function Card({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CardBody({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn("p-6", className)}>{children}</div>
}

export function CardTitle({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <h3 className={cn("text-lg font-extrabold text-slate-900", className)}>
      {children}
    </h3>
  )
}
