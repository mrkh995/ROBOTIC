import { Container } from "@/components/ui/container"
import { ButtonLink } from "@/components/ui/button"

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-6xl font-extrabold text-brand">۴۰۴</p>
      <h1 className="mt-4 text-2xl font-extrabold text-slate-900">
        صفحه پیدا نشد
      </h1>
      <p className="mt-3 text-slate-600">
        صفحه‌ای که دنبال آن بودید یافت نشد یا منتقل شده است.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">بازگشت به خانه</ButtonLink>
        <ButtonLink href="/courses" variant="outline">
          مشاهده‌ی دوره‌ها
        </ButtonLink>
      </div>
    </Container>
  )
}
