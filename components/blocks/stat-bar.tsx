import { Container } from "@/components/ui/container"
import { site } from "@/lib/data/site"

export function StatBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <Container className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {site.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-brand">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
