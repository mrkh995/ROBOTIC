import type { CategorySlug } from "./categories"

export type CourseStatus = "published" | "coming-soon"
export type CourseLevel = "مقدماتی" | "متوسط" | "پیشرفته"

export interface CourseFaq {
  question: string
  answer: string
}

export interface Course {
  slug: string
  title: string
  category: CategorySlug
  shortDescription: string
  longDescription?: string
  ageRange: string
  duration: string
  level: CourseLevel
  prerequisite: string
  kit: string
  certificate: boolean
  popular?: boolean
  competition?: boolean
  status: CourseStatus
  syllabus?: string[]
  projects?: string[]
  skills?: string[]
  outcome?: string
  faq?: CourseFaq[]
}

export const courses: Course[] = [
  {
    slug: "kids-creative-robotics",
    title: "رباتیک خلاق کودکان",
    category: "robotics",
    shortDescription:
      "آشنایی کودکان با دنیای رباتیک از طریق ساخت ربات‌های ساده و سرگرم‌کننده.",
    longDescription:
      "در این دوره کودکان با مفاهیم پایه‌ی رباتیک، مکانیک و حرکت آشنا می‌شوند و با کیت‌های آموزشی ربات‌های خلاق می‌سازند. تمرکز دوره بر یادگیری از طریق بازی و ساخت است.",
    ageRange: "۶ تا ۹ سال",
    duration: "۸ جلسه",
    level: "مقدماتی",
    prerequisite: "ندارد",
    kit: "کیت آموزشی در کلاس ارائه می‌شود",
    certificate: true,
    popular: true,
    status: "published",
    syllabus: [
      "آشنایی با ربات و کاربردهای آن",
      "قطعات ساده‌ی مکانیکی و اتصال آن‌ها",
      "موتور و چرخ‌دنده",
      "ساخت اولین ربات متحرک",
      "ربات‌های جانوری و خلاق",
      "پروژه‌ی پایانی گروهی",
    ],
    projects: ["ربات متحرک ساده", "ربات جانوری"],
    skills: ["تفکر خلاق", "کار گروهی", "حل مسئله"],
    outcome:
      "کودک با مفاهیم پایه‌ی رباتیک آشنا شده و توانایی ساخت ربات‌های ساده را پیدا می‌کند.",
    faq: [
      {
        question: "آیا کودک به دانش قبلی نیاز دارد؟",
        answer: "خیر، دوره از پایه و متناسب با سن کودک طراحی شده است.",
      },
    ],
  },
  {
    slug: "robot-rally",
    title: "ربات مسیریاب (رالی)",
    category: "robotics",
    shortDescription:
      "ساخت ربات مسیریابی که به صورت خودکار مسیر را دنبال می‌کند؛ ویژه‌ی مسابقات.",
    longDescription:
      "در این دوره هنرجویان با سنسورها، موتورها و منطق کنترل آشنا می‌شوند و رباتی می‌سازند که مسیر مشخصی را تشخیص داده و دنبال می‌کند. دوره برای حضور در مسابقات رباتیک آماده‌سازی می‌کند.",
    ageRange: "۱۰ تا ۱۴ سال",
    duration: "۱۰ جلسه",
    level: "متوسط",
    prerequisite: "آشنایی اولیه با رباتیک",
    kit: "کیت مسیریاب آموزشی",
    certificate: true,
    popular: true,
    competition: true,
    status: "published",
    syllabus: [
      "آشنایی با سنسورهای مادون قرمز",
      "کنترل موتور و سرعت",
      "منطق تشخیص مسیر",
      "تنظیم و کالیبراسیون ربات",
      "تمرین مسیرهای مسابقه",
      "مسابقه‌ی داخلی پایان دوره",
    ],
    projects: ["ربات تعقیب خط", "ربات رالی مسابقه‌ای"],
    skills: ["کار با سنسور", "عیب‌یابی", "تفکر منطقی"],
    outcome:
      "هنرجو یک ربات مسیریاب کامل می‌سازد و برای شرکت در مسابقات رباتیک آماده می‌شود.",
    faq: [
      {
        question: "آیا این دوره برای مسابقات مناسب است؟",
        answer: "بله، محتوای دوره بر اساس قوانین رایج مسابقات مسیریابی طراحی شده است.",
      },
    ],
  },
  {
    slug: "robot-painter",
    title: "ربات نقاش",
    category: "robotics",
    shortDescription:
      "ساخت رباتی که می‌تواند نقاشی کند؛ ترکیب خلاقیت و مهندسی.",
    longDescription:
      "هنرجویان در این دوره با سازوکار حرکت قلم و کنترل دقیق موتورها آشنا می‌شوند و رباتی می‌سازند که طرح‌های ساده را روی کاغذ می‌کشد.",
    ageRange: "۱۰ تا ۱۴ سال",
    duration: "۸ جلسه",
    level: "متوسط",
    prerequisite: "آشنایی اولیه با رباتیک",
    kit: "کیت ربات نقاش",
    certificate: true,
    popular: true,
    status: "published",
    syllabus: [
      "آشنایی با سازوکار حرکت قلم",
      "کنترل دقیق موتورها",
      "طراحی مسیر حرکت",
      "ساخت بدنه‌ی ربات",
      "رسم اولین طرح",
      "پروژه‌ی پایانی",
    ],
    projects: ["ربات نقاش طرح ساده"],
    skills: ["کنترل حرکت", "خلاقیت", "دقت"],
    outcome: "هنرجو رباتی می‌سازد که قادر به رسم طرح‌های ساده است.",
  },
  {
    slug: "arduino-intro",
    title: "مقدمات آردوینو",
    category: "robotics",
    shortDescription:
      "شروع برنامه‌نویسی سخت‌افزار با برد آردوینو و ساخت پروژه‌های تعاملی.",
    ageRange: "۱۲ سال به بالا",
    duration: "۱۰ جلسه",
    level: "متوسط",
    prerequisite: "آشنایی با مفاهیم پایه‌ی الکترونیک مفید است",
    kit: "برد آردوینو و قطعات جانبی",
    certificate: true,
    status: "published",
    syllabus: [
      "معرفی برد آردوینو",
      "ورودی و خروجی دیجیتال",
      "کار با سنسورها",
      "کنترل موتور و سروو",
      "پروژه‌ی تعاملی",
    ],
    projects: ["چراغ هوشمند", "سیستم هشدار فاصله"],
    skills: ["برنامه‌نویسی آردوینو", "کار با سنسور"],
    outcome: "هنرجو می‌تواند پروژه‌های ساده‌ی مبتنی بر آردوینو را طراحی و اجرا کند.",
  },
  {
    slug: "line-follower",
    title: "ربات تعقیب خط پیشرفته",
    category: "robotics",
    shortDescription:
      "نسخه‌ی پیشرفته‌ی ربات تعقیب خط با کنترل دقیق برای مسابقات حرفه‌ای.",
    ageRange: "۱۳ سال به بالا",
    duration: "۱۲ جلسه",
    level: "پیشرفته",
    prerequisite: "دوره‌ی ربات مسیریاب",
    kit: "کیت پیشرفته‌ی تعقیب خط",
    certificate: true,
    competition: true,
    status: "published",
    syllabus: [
      "آرایه‌ی سنسور و خوانش دقیق",
      "کنترل تناسبی سرعت",
      "بهینه‌سازی پیچ‌ها",
      "کالیبراسیون پیشرفته",
      "تمرین مسابقه",
    ],
    projects: ["ربات تعقیب خط مسابقه‌ای"],
    skills: ["کنترل پیشرفته", "بهینه‌سازی", "عیب‌یابی"],
    outcome: "هنرجو رباتی رقابتی برای مسابقات تعقیب خط می‌سازد.",
  },
  {
    slug: "humanoid-robot",
    title: "ربات انسان‌نما",
    category: "robotics",
    shortDescription:
      "آشنایی با رباتیک انسان‌نما و کنترل مفاصل و حرکت‌های پایه.",
    ageRange: "۱۳ سال به بالا",
    duration: "۱۰ جلسه",
    level: "پیشرفته",
    prerequisite: "مقدمات آردوینو",
    kit: "کیت سروو و سازه‌ی ربات",
    certificate: true,
    status: "published",
    syllabus: [
      "ساختار ربات‌های انسان‌نما",
      "کنترل سرووموتورها",
      "حرکت‌های پایه",
      "تعادل و راه رفتن",
      "پروژه‌ی نهایی",
    ],
    projects: ["ربات انسان‌نمای ساده"],
    skills: ["کنترل سروو", "مکانیک", "برنامه‌نویسی"],
    outcome: "هنرجو با اصول رباتیک انسان‌نما آشنا می‌شود.",
  },
  {
    slug: "sumo-robot",
    title: "ربات سومو",
    category: "robotics",
    shortDescription:
      "ساخت ربات مسابقه‌ای سومو با تمرکز بر قدرت و استراتژی.",
    ageRange: "۱۲ سال به بالا",
    duration: "۱۰ جلسه",
    level: "متوسط",
    prerequisite: "آشنایی اولیه با رباتیک",
    kit: "کیت ربات سومو",
    certificate: true,
    competition: true,
    status: "published",
    syllabus: [
      "قوانین مسابقات سومو",
      "طراحی بدنه و وزن",
      "سنسور تشخیص حریف و خط",
      "استراتژی مسابقه",
      "مسابقه‌ی داخلی",
    ],
    projects: ["ربات سومو مسابقه‌ای"],
    skills: ["طراحی مکانیکی", "استراتژی", "کار با سنسور"],
    outcome: "هنرجو رباتی برای شرکت در مسابقات سومو می‌سازد.",
  },
  {
    slug: "electronics-fundamentals",
    title: "مبانی الکترونیک",
    category: "electronics",
    shortDescription:
      "آموزش پایه‌ی الکترونیک، قطعه‌شناسی و کار با بردبورد.",
    ageRange: "۱۴ سال به بالا",
    duration: "به‌زودی",
    level: "مقدماتی",
    prerequisite: "ندارد",
    kit: "در حال آماده‌سازی",
    certificate: true,
    status: "coming-soon",
  },
  {
    slug: "scratch-programming",
    title: "برنامه‌نویسی با اسکرچ",
    category: "programming",
    shortDescription:
      "آموزش تفکر برنامه‌نویسی به کودکان با محیط بصری اسکرچ.",
    ageRange: "۸ تا ۱۲ سال",
    duration: "به‌زودی",
    level: "مقدماتی",
    prerequisite: "ندارد",
    kit: "در حال آماده‌سازی",
    certificate: true,
    status: "coming-soon",
  },
  {
    slug: "python-for-teens",
    title: "پایتون برای نوجوانان",
    category: "programming",
    shortDescription:
      "آموزش زبان پایتون با پروژه‌های کاربردی برای نوجوانان.",
    ageRange: "۱۲ سال به بالا",
    duration: "به‌زودی",
    level: "متوسط",
    prerequisite: "آشنایی با برنامه‌نویسی بصری",
    kit: "در حال آماده‌سازی",
    certificate: true,
    status: "coming-soon",
  },
  {
    slug: "ai-intro",
    title: "مقدمه‌ای بر هوش مصنوعی",
    category: "ai",
    shortDescription:
      "آشنایی با مفاهیم هوش مصنوعی و کاربرد آن در رباتیک.",
    ageRange: "۱۴ سال به بالا",
    duration: "به‌زودی",
    level: "متوسط",
    prerequisite: "آشنایی با برنامه‌نویسی",
    kit: "در حال آماده‌سازی",
    certificate: true,
    status: "coming-soon",
  },
]

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

export function getCoursesByCategory(category: CategorySlug): Course[] {
  return courses.filter((c) => c.category === category)
}

export function getPublishedCourses(): Course[] {
  return courses.filter((c) => c.status === "published")
}

export function getPopularCourses(): Course[] {
  return courses.filter((c) => c.popular && c.status === "published")
}
