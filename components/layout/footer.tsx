import Link from "next/link";
import type { Locale } from "@/lib/seo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

const addressByLocale: Record<string, string> = {
  ko: "(04614) 서울특별시 중구 퇴계로 324, 3층 (성우빌딩) | 동대문역사문화공원역 4번출구 10미터",
  en: "(04614) 324 Toegyero, 3F (Seongwoo Bldg), Jung-gu, Seoul | Dongdaemun History & Culture Park Stn. Exit 4, 10m",
  zh: "(04614) 首尔市中区退溪路324, 3层 (成友大厦) | 东大门历史文化公园站4号出口10米",
  ja: "(04614) ソウル市中区退渓路324, 三階 (ソンウビル) | 東大門歴史文化公園駅4番出口10m",
};

export function Footer({ locale, dict }: FooterProps) {
  const visaLinks = [
    { href: "/visa/d-8", label: "D-8 기업투자비자" },
    { href: "/visa/d-7", label: "D-7 주재원비자" },
    { href: "/visa/e-7", label: "E-7 특정활동비자" },
    { href: "/visa/f-5", label: "F-5 영주권" },
    { href: "/visa/f-2-points", label: "F-2 점수제비자" },
    { href: "/visa/f-4", label: "F-4 재외동포비자" },
  ];

  const businessLinks = [
    { href: "/services/investment", label: dict.common?.business || "법인설립" },
    { href: "/services/employment", label: dict.common?.visa || "취업비자" },
    { href: "/services/residence", label: "체류/영주" },
    { href: "/services/criminal", label: "범죄경력 심사" },
  ];

  const companyLinks = [
    { href: "/about", label: dict.common?.about || "회사소개" },
    { href: "/blog", label: dict.common?.blog || "블로그" },
    { href: "/qa", label: dict.common?.qna || "Q&A" },
    { href: "/contact", label: dict.common?.contact || "상담문의" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">V</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-semibold text-white">VISION</span>
                <span className="text-[10px] text-gray-500 -mt-1">행정사사무소</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {locale === "ko" && "전문 비자 및 이민 컨설팅 서비스를 제공하는 비전행정사사무소입니다."}
              {locale === "en" && "VISION Administrative Office providing professional visa and immigration consulting services."}
              {locale === "zh" && "VISION行政士事务所，提供专业签证及移民咨询服务。"}
              {locale === "ja" && "VISION行政士事務所、専門ビザ・移民コンサルティングサービスを提供します。"}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{addressByLocale[locale] || addressByLocale.ko}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:02-363-2251" className="hover:text-white transition-colors">02-363-2251</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:5000meter@gmail.com" className="hover:text-white transition-colors">5000meter@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Visa Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              {dict.common?.visa || "비자 안내"}
            </h3>
            <ul className="space-y-2">
              {visaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={`/${locale}${link.href}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Business */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              {dict.common?.business || "서비스"}
            </h3>
            <ul className="space-y-2">
              {businessLinks.map((link) => (
                <li key={link.href}>
                  <Link href={`/${locale}${link.href}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              {dict.footer?.companyInfo || "회사"}
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={`/${locale}${link.href}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Business Registration */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 pt-8 pb-4">
          <p className="text-sm text-gray-500 text-center">
            © 2018 비전행정사사무소 | 사업자등록번호: 405-05-54079 | 대표: 이원중 | 개인정보관리자: 김영주
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© 2018 비전행정사사무소. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href={`/${locale}/contact`} className="hover:text-gray-300 transition-colors">
              {dict.footer?.privacyPolicy || "개인정보처리방침"}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-gray-300 transition-colors">
              {dict.footer?.termsOfService || "이용약관"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
