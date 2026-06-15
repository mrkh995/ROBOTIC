interface AccordionItem {
  question: string
  answer: string
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-xl border border-slate-200 bg-white p-4"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span className="text-xl text-brand transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
