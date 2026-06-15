export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
}

export interface Faq {
  question: string
  answer: string
}

export const site = {
  name: "آموزشگاه رباتیک آریما",
  shortName: "آریما",
  legalName: "آموزشگاه رباتیک فنی و حرفه‌ای آریما",
  founded: "۱۴۰۳",
  city: "کرج، استان البرز",
  url: "https://arima-robotics.ir",
  description:
    "آموزشگاه رباتیک فنی و حرفه‌ای آریما در کرج؛ آموزش پروژه‌محور رباتیک، الکترونیک، برنامه‌نویسی و هوش مصنوعی برای کودکان، نوجوانان و بزرگسالان.",
  nav: [
    { label: "خانه", href: "/" },
    { label: "دوره‌ها", href: "/courses" },
    { label: "درباره ما", href: "/about" },
    { label: "مدارس", href: "/schools" },
    { label: "تماس", href: "/contact" },
  ] as NavItem[],
  stats: [
    { value: "۴", label: "حوزه‌ی تخصصی آموزش" },
    { value: "۱۴۰۳", label: "سال تأسیس" },
    { value: "کرج", label: "محل برگزاری دوره‌ها" },
    { value: "۱۰۰٪", label: "آموزش پروژه‌محور" },
  ] as Stat[],
  features: [
    {
      icon: "Wrench",
      title: "آموزش پروژه‌محور",
      description: "هر هنرجو با ساختن پروژه‌های واقعی، مفاهیم را عملی یاد می‌گیرد.",
    },
    {
      icon: "GraduationCap",
      title: "مربیان متخصص",
      description: "آموزش توسط مربیان مجرب رباتیک، الکترونیک و برنامه‌نویسی.",
    },
    {
      icon: "Cpu",
      title: "کیت‌های آموزشی",
      description: "استفاده از کیت‌ها و تجهیزات به‌روز برای تجربه‌ی یادگیری بهتر.",
    },
    {
      icon: "Trophy",
      title: "آمادگی مسابقات",
      description: "دوره‌های مسابقه‌ای برای حضور موفق در رقابت‌های رباتیک.",
    },
    {
      icon: "ShieldCheck",
      title: "گواهی پایان دوره",
      description: "ارائه‌ی گواهی معتبر پس از اتمام موفق دوره‌ها.",
    },
    {
      icon: "Building2",
      title: "همکاری با مدارس",
      description: "برگزاری دوره‌ها و کارگاه‌های رباتیک در مدارس کرج و البرز.",
    },
  ] as Feature[],
  testimonials: [
    {
      name: "خانواده‌ی محمدی",
      role: "اولیای هنرجو",
      text: "فرزندم با علاقه به کلاس‌ها می‌آید و حالا خودش ربات می‌سازد. آموزش‌ها کاملاً عملی است.",
    },
    {
      name: "سارا",
      role: "هنرجوی دوره‌ی برنامه‌نویسی",
      text: "از اسکرچ شروع کردم و حالا با پایتون پروژه می‌نویسم. مربی‌ها خیلی صبور و حرفه‌ای‌اند.",
    },
    {
      name: "آقای رضایی",
      role: "اولیای هنرجو",
      text: "محیط آموزشی منظم و پروژه‌محور است و پیشرفت بچه‌ها کاملاً محسوس است.",
    },
  ] as Testimonial[],
  faq: [
    {
      question: "دوره‌ها برای چه رده‌ی سنی مناسب است؟",
      answer: "بسته به حوزه، از ۶ سال تا بزرگسالان؛ دوره‌های رباتیک کودکان از ۶ سالگی آغاز می‌شود.",
    },
    {
      question: "آیا پیش‌نیاز خاصی لازم است؟",
      answer: "بیشتر دوره‌های مقدماتی نیازی به پیش‌نیاز ندارند و از پایه آموزش داده می‌شوند.",
    },
    {
      question: "آیا گواهی پایان دوره ارائه می‌شود؟",
      answer: "بله، پس از اتمام موفق دوره گواهی پایان دوره ارائه می‌شود.",
    },
    {
      question: "کلاس‌ها کجا برگزار می‌شوند؟",
      answer: "دوره‌ها در شهر کرج برگزار می‌شوند؛ امکان همکاری با مدارس نیز وجود دارد.",
    },
  ] as Faq[],
  contact: {
    address: "کرج، استان البرز",
    phone: "",
    whatsapp: "",
    instagram: "",
    email: "",
    workingHours: "شنبه تا پنجشنبه",
  },
}

export type Site = typeof site
