import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type Tone = "brand" | "accent" | "muted" | "success"

const tones: Record<Tone, string> = {
  brand: "bg-brand/10 text-brand",
  accent: "bg-accent/10 text-accent",
  muted: "bg-slate-100 text-slate-600",
  success: "bg-green-100 text-green-700",
}

export function Badge({
  tone = "brand",
  className,
  children,
}: {
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
