"use client"

import Link from "next/link"
import { useState } from "react"
import { Container } from "@/components/ui/container"
import { ButtonLink } from "@/components/ui/button"
import { site } from "@/lib/data/site"
import { Menu, X, Bot } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-slate-900"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white">
            <Bot className="h-5 w-5" />
          </span>
          <span>{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact" size="sm">
            مشاوره رایگان
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="منو"
          className="text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" size="sm" className="mt-2">
              مشاوره رایگان
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  )
}
