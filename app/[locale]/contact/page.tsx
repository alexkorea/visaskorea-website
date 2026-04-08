import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

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
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  const t4 = (ko: string, en: string, zh: string, ja: string) =>
    ({ ko, en, zh, ja }[validLocale] ?? en);

  const contactMethods = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: t4("전화 상담", "Phone", "电话咨询", "電話相談"),
      value: "02-363-2251",
      description: t4("월-금 9:30 AM - 5:30 PM", "Mon-Fri 9:30 AM - 5:30 PM", "周一至周五 9:30 AM - 5:30 PM", "月-金 9:30 AM - 5:30 PM"),
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: t4("이메일", "Email", "电子邮件", "メール"),
      value: "5000meter@gmail.com",
      description: t4("24시간 접수 가능", "Available 24/7", "24小时可受理", "24時間受付可能"),
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: t4("카카오톡", "KakaoTalk", "KakaoTalk", "KakaoTalk"),
      value: "alexkorea",
      description: t4("실시간 상담", "Real-time chat", "实时咨询", "リアルタイム相談"),
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: t4("사무소 위치", "Office Location", "事务所位置", "事務所所在地"),
      value: t4(
        "(04614) 서울특별시 중구 퇴계로 324, 3층 (성우빌딩)",
        "324 Toegyero, 3F (Seongwoo Bldg), Jung-gu, Seoul",
        "(04614) 首尔市中区退溪路324, 3层 (成友大厦)",
        "(04614) ソウル市中区退渓路324, 3階 (ソンウビル)"
      ),
      description: t4("동대문역사문화공원역 4번출구 10미터", "Dongdaemun History & Culture Park Stn. Exit 4, 10m", "东大门历史文化公园站4号出口10米", "東大門歴史文化公園駅4番出口10m"),
    },
  ];

  const qrCodes = [
    { name: "KakaoTalk", image: "/qr/kakao.jpg" },
    { name: "WhatsApp", image: "/qr/whatsapp.jpg" },
    { name: "WeChat", image: "/qr/wechat.jpg" },
    { name: "LINE", image: "/qr/line.jpg" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          title={CONTACT_SEO.title[validLocale]}
          subtitle={CONTACT_SEO.description[validLocale]}
          image="/slides/business.jpg"
        />

        {/* Contact Methods */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {method.icon}
                    </div>
                    <h3 className="font-semibold">{method.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {method.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form + QR Codes */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {t4("상담 신청서", "Consultation Request", "咨询申请表", "相談申請書")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm
                      dict={{ contact: dict.contact, common: dict.common }}
                      otherLabel={t4("기타", "Other", "其他", "その他")}
                      locale={validLocale}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* QR Codes */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      {t4("메신저로 문의", "Chat with Us", "通过聊天软件咨询", "メッセンジャーでお問い合わせ")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {qrCodes.map((qr) => (
                        <div
                          key={qr.name}
                          className="text-center"
                        >
                          <div className="relative mx-auto aspect-square w-full max-w-[120px] overflow-hidden rounded-lg border">
                            <Image
                              src={qr.image}
                              alt={`${qr.name} QR Code`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <p className="mt-2 text-xs font-medium">
                            {qr.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      {t4("영업 시간", "Business Hours", "营业时间", "営業時間")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t4("월-금", "Mon-Fri", "周一至周五", "月-金")}
                        </span>
                        <span className="font-medium">9:30 AM - 5:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t4("토/일/공휴일", "Sat/Sun/Holidays", "周六/周日/节假日", "土/日/祝日")}
                        </span>
                        <span className="font-medium">
                          {t4("휴무", "Closed", "休息", "休業")}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
