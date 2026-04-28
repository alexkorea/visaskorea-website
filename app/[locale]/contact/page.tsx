import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import { ContactForm } from "./contact-form";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const CONTACT_SEO = {
  title: {
    ko: "문의하기",
    en: "Contact Us",
    zh: "联系我们",
    ja: "お問い合わせ",
  },
  description: {
    ko: "비자, 법인설립, 이민 관련 무료 상담을 신청하세요. 전화, 이메일, 카카오톡으로 문의 가능합니다.",
    en: "Request a free consultation for visa, company setup, and immigration services. Contact us by phone, email, or KakaoTalk.",
    zh: "申请签证、法人设立、移民相关免费咨询。可通过电话、电子邮件、KakaoTalk联系。",
    ja: "ビザ、法人設立、移民関連の無料相談をお申し込みください。電話、メール、カカオトークでお問い合わせ可能です。",
  },
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (i18nConfig.locales.includes(locale as Locale) ? locale : "ko") as Locale;
  return generatePageMetadata({
    locale: validLocale,
    pathname: "/contact",
    seo: {
      title: CONTACT_SEO.title[validLocale],
      description: CONTACT_SEO.description[validLocale],
    },
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (i18nConfig.locales.includes(locale as Locale) ? locale : "ko") as Locale;
  const dict = getDictionary(validLocale);

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />
      <main className="flex-1">
        <PageHero
          title={CONTACT_SEO.title[validLocale]}
          subtitle={CONTACT_SEO.description[validLocale]}
          image="/slides/business.jpg"
        />
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <ContactForm locale={validLocale} />
          </div>
        </section>
      </main>
      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
