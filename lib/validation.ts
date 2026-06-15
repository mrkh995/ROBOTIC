import { z } from "zod"

export const leadSchema = z.object({
  name: z.string().min(2, "نام را کامل وارد کنید"),
  phone: z
    .string()
    .min(8, "شماره تماس معتبر وارد کنید")
    .regex(/^[0-9+\-\s]+$/, "شماره تماس فقط شامل عدد است"),
  age: z.string().min(1, "سن هنرجو را وارد کنید"),
  interest: z.string().min(1, "حوزه‌ی مورد علاقه را انتخاب کنید"),
  message: z.string().max(1000).optional().or(z.literal("")),
})

export type LeadInput = z.infer<typeof leadSchema>
