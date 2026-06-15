"use server"

import { leadSchema, type LeadInput } from "@/lib/validation"

export interface LeadResult {
  ok: boolean
  message: string
}

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  const parsed = leadSchema.safeParse(input)
  if (!parsed.success) {
    return {
      ok: false,
      message:
        "اطلاعات واردشده معتبر نیست. لطفاً دوباره بررسی کنید.",
    }
  }

  // TODO: اتصال به مقصد واقعی (ایمیل، CRM یا پایگاه داده).
  console.log("New consultation lead:", parsed.data)

  return {
    ok: true,
    message: "درخواست شما ثبت شد. به‌زودی با شما تماس می‌گیریم.",
  }
}
