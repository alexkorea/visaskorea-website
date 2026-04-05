import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

  const isKo = validLocale === "ko";

  const contactMethods = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: isKo ? "전화 상담" : "Phone",
      value: "02-363-2251",
      description: isKo ? "월-금 9:30 AM - 5:30 PM" : "Mon-Fri 9:30 AM - 5:30 PM",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: isKo ? "이메일" : "Email",
      value: "5000meter@gmail.com",
      description: isKo ? "24시간 접수 가능" : "Available 24/7",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: isKo ? "카카오톡" : "KakaoTalk",
      value: "alexkorea",
      description: isKo ? "실시간 상담" : "Real-time chat",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: isKo ? "사무소 위치" : "Office Location",
      value: isKo
        ? "(04614) 서울특별시 중구 퇴계로 324, 3층 (성우빌딩)"
        : "324 Toegyero, 3F (Seongwoo Bldg), Jung-gu, Seoul",
      description: isKo ? "동대문역사문화공원역 4번출구 10미터" : "Dongdaemun History & Culture Park Stn. Exit 4, 10m",
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
                      {isKo ? "상담 신청서" : "Consultation Request"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">{dict.contact.name} *</Label>
                          <Input id="name" placeholder={dict.contact.name} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{dict.contact.email} *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={dict.contact.email}
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">{dict.contact.phone}</Label>
                          <Input id="phone" placeholder={dict.contact.phone} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">
                            {dict.contact.company}
                          </Label>
                          <Input
                            id="company"
                            placeholder={dict.contact.company}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">
                          {dict.contact.service}
                        </Label>
                        <select
                          id="service"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        >
                          <option value="">{dict.contact.service}</option>
                          <option value="visa">{dict.common.visa}</option>
                          <option value="business">
                            {dict.common.business}
                          </option>
                          <option value="other">
                            {isKo ? "기타" : "Other"}
                          </option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {dict.contact.message} *
                        </Label>
                        <textarea
                          id="message"
                          rows={5}
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground"
                          placeholder={dict.contact.message}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        {dict.contact.submit}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* QR Codes */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      {isKo ? "메신저로 문의" : "Chat with Us"}
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
                      {isKo ? "영업 시간" : "Business Hours"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {isKo ? "월-금" : "Mon-Fri"}
                        </span>
                        <span className="font-medium">9:30 AM - 5:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {isKo ? "토/일/공휴일" : "Sat/Sun/Holidays"}
                        </span>
                        <span className="font-medium">
                          {isKo ? "휴무" : "Closed"}
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
