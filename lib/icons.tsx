import {
  Bot,
  CircuitBoard,
  Code2,
  BrainCircuit,
  Wrench,
  Cpu,
  Trophy,
  GraduationCap,
  ShieldCheck,
  Building2,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Bot,
  CircuitBoard,
  Code2,
  BrainCircuit,
  Wrench,
  Cpu,
  Trophy,
  GraduationCap,
  ShieldCheck,
  Building2,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? Bot
  return <Cmp className={className} />
}
