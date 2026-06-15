import type { ReactNode, CSSProperties } from "react"

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const style: CSSProperties | undefined =
    delay > 0 ? { animationDelay: `${delay}ms` } : undefined
  return (
    <div className={`animate-fade-up ${className ?? ""}`} style={style}>
      {children}
    </div>
  )
}
