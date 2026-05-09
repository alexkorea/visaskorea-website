import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import { User, FileText, Bell, Settings, ArrowRight, LogIn } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const MYPAGE_SEO = {
  title: {
    ko: "마이페이지",
    en: "My Page",
    zh: "我的页面",
    ja: "マイページ",
  },
  description: {
    ko: "비자 상담 신청 내역, 알림, 계정 설정을 관리하세요.",
    en: "Manage your visa consultation history, notifications, and account settings.",
    zh: "管理您的签证咨询申请记录、通知和账户设置。",
    ja: "ビザ相談申込履歴、通知、アカウント設定を管理できます。",
  },
} as const;

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

  return generatePageMetadata({
    locale: validLocale,
    pathname: "/mypage",
    seo: {
      title: MYPAGE_SEO.title[validLocale],
      description: MYPAGE_SEO.description[validLocale],
    },
  });
}

export default async function MyPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  const t = {
    loginRequired: {
      ko: "로그인이 필요합니다",
      en: "Login Required",
      zh: "需要登录",
      ja: "ログインが必要です",
    }[validLocale],
    loginDesc: {
      ko: "마이페이지를 이용하려면 로그인이 필요합니다. Google 계정으로 간편하게 로그인하세요.",
      en: "Please log in to access your page. Sign in easily with your Google account.",
      zh: "请登录以访问我的页面。使用Google账户轻松登录。",
      ja: "マイページをご利用いただくにはログインが必要です。Googleアカウントで簡単にサインインできます。",
    }[validLocale],
    loginBtn: {
      ko: "Google로 로그인",
      en: "Sign in with Google",
      zh: "使用Google登录",
      ja: "Googleでサインイン",
    }[validLocale],
    features: [
      {
        icon: <FileText className="h-6 w-6" />,
        title: {
          ko: "상담 신청 내역",
          en: "Consultation History",
          zh: "咨询申请记录",
          ja: "相談申込履歴",
        }[validLocale],
        desc: {
          ko: "비자 상담 신청 내역 및 진행 상태를 확인하세요.",
          en: "Check your visa consultation requests and their status.",
          zh: "查看您的签证咨询申请记录及处理状态。",
          ja: "ビザ相談申込履歴と進捗状況をご確認いただけます。",
        }[validLocale],
      },
      {
        icon: <Bell className="h-6 w-6" />,
        title: {
          ko: "알림 설정",
          en: "Notifications",
          zh: "通知设置",
          ja: "通知設定",
        }[validLocale],
        desc: {
          ko: "비자 정책 변경, 상담 일정 등 중요 알림을 받아보세요.",
          en: "Receive important notifications about visa policy changes and consultation schedules.",
          zh: "接收签证政策变更、咨询日程等重要通知。",
          ja: "ビザポリシーの変更や相談スケジュールなどの重要な通知を受け取れます。",
        }[validLocale],
      },
      {
        icon: <Settings className="h-6 w-6" />,
        title: {
          ko: "계정 설정",
          en: "Account Settings",
          zh: "账户设置",
          ja: "アカウント設定",
        }[validLocale],
        desc: {
          ko: "개인정보 및 언어 설정을 관리하세요.",
          en: "Manage your personal information and language preferences.",
          zh: "管理您的个人信息和语言设置。",
          ja: "個人情報と言語設定を管理できます。",
        }[validLocale],
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        <PageHero
          title={MYPAGE_SEO.title[validLocale]}
          subtitle={MYPAGE_SEO.description[validLocale]}
          image="/slides/consultation.jpg"
        />

        {/* Login prompt */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-2xl border bg-card p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <User className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold">{t.loginRequired}</h2>
              <p className="mt-3 text-muted-foreground">{t.loginDesc}</p>
              <div className="mt-6">
                <Button size="lg" asChild>
                  <Link href={`/${validLocale}/login`}>
                    <LogIn className="mr-2 h-5 w-5" />
                    {t.loginBtn}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Feature preview */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {t.features.map((feature, idx) => (
                <div key={idx} className="rounded-xl border bg-card p-6 shadow-sm">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/50 py-12">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-muted-foreground">
              {dict.common.freeConsultation}
            </p>
            <div className="mt-4">
              <Button variant="outline" asChild>
                <Link href={`/${validLocale}/contact`}>
                  {dict.common.contact}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
