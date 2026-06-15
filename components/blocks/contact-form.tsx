"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { leadSchema, type LeadInput } from "@/lib/validation"
import { submitLead, type LeadResult } from "@/app/actions/lead"
import { Input, Textarea, Select, Label } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data/categories"

export function ContactForm() {
  const [result, setResult] = useState<LeadResult | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({ resolver: zodResolver(leadSchema) })

  const onSubmit = handleSubmit(async (data) => {
    const res = await submitLead(data)
    setResult(res)
    if (res.ok) reset()
  })

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">نام و نام خانوادگی</Label>
        <Input id="name" {...register("name")} placeholder="مثلاً علی رضایی" />
        {errors.name && (
          <p className="mt-1 text-xs text-danger">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone">شماره تماس</Label>
        <Input
          id="phone"
          inputMode="tel"
          {...register("phone")}
          placeholder="09xxxxxxxxx"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-danger">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="age">سن هنرجو</Label>
        <Input id="age" {...register("age")} placeholder="مثلاً ۸ سال" />
        {errors.age && (
          <p className="mt-1 text-xs text-danger">{errors.age.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="interest">حوزه‌ی مورد علاقه</Label>
        <Select id="interest" defaultValue="" {...register("interest")}>
          <option value="" disabled>
            یک حوزه را انتخاب کنید
          </option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </Select>
        {errors.interest && (
          <p className="mt-1 text-xs text-danger">{errors.interest.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">پیام (اختیاری)</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="سؤال یا توضیح شما"
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "در حال ارسال..." : "ارسال درخواست مشاوره"}
      </Button>
      {result && (
        <p
          className={
            result.ok
              ? "rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700"
              : "rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
          }
        >
          {result.message}
        </p>
      )}
    </form>
  )
}
