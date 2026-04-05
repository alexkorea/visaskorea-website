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
  const fl: Record<string, Record<string, string>> = {
    "d-8": { ko: "D-8 기업투자비자", en: "D-8 Corporate Investment", zh: "D-8 企业投资签证", ja: "D-8 企業投資ビザ" },
    "d-7": { ko: "D-7 주재원비자", en: "D-7 Intra-company Transfer", zh: "D-7 驻在员签证", ja: "D-7 駐在員ビザ" },
    "e-7": { ko: "E-7 특정활동비자", en: "E-7 Special Activities", zh: "E-7 特定活动签证", ja: "E-7 特定活動ビザ" },
    "f-5": { ko: "F-5 영주권", en: "F-5 Permanent Residency", zh: "F-5 永住权", ja: "F-5 永住権" },
    "f-2": { ko: "F-2 점수제비자", en: "F-2 Points-based Visa", zh: "F-2 积分制签证", ja: "F-2 ポイント制ビザ" },
    "f-4": { ko: "F-4 재외동포비자", en: "F-4 Overseas Korean Visa", zh: "F-4 海外同胞签证", ja: "F-4 在外同胞ビザ" },
    fdi: { ko: "외국인투자기업설립", en: "Foreign Investment Company", zh: "外国投资企业设立", ja: "外国人投資企業設立" },
    branch: { ko: "지점/지사/영업소 설치", en: "Branch Office Setup", zh: "分公司/营业所设置", ja: "支店/支社/営業所設置" },
    liaison: { ko: "연락사무소 설치", en: "Liaison Office Setup", zh: "联络事务所设置", ja: "連絡事務所設置" },
    criminal: { ko: "사범심사", en: "Criminal Review", zh: "犯罪审查", ja: "犯罪審査" },
  };
  const fml = (key: string) => fl[key]?.[locale] ?? fl[key]?.ko ?? key;

  const visaLinks = [
    { href: "/visa/d-8", label: fml("d-8") },
    { href: "/visa/d-7", label: fml("d-7") },
    { href: "/visa/e-7", label: fml("e-7") },
    { href: "/visa/f-5", label: fml("f-5") },
    { href: "/visa/f-2-points", label: fml("f-2") },
    { href: "/visa/f-4", label: fml("f-4") },
  ];

  const businessLinks = [
    { href: "/business/foreign-invested-company", label: fml("fdi") },
    { href: "/business/branch-office", label: fml("branch") },
    { href: "/business/liaison-office", label: fml("liaison") },
    { href: "/visa/criminal-review", label: fml("criminal") },
  ];

  const companyLinks = [
    { href: "/about", label: dict.common?.about || "회사소개" },
    { href: "/blog", label: dict.common?.blog || "블로그" },
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
                <span className="text-[10px] text-gray-500 -mt-1">{{ ko: "행정사사무소", en: "Administrative Office", zh: "行政士事务所", ja: "行政書士事務所" }[locale]}</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {locale === "ko" && "전문 비자 및 이민 컨설팅 서비스를 제공하는 비전행정사사무소입니다."}
              {locale === "en" && "VISION Administrative Office providing professional visa and immigration consulting services."}
              {locale === "zh" && "VISION行政士事务所，提供专业签证及移民咨询服务。"}
              {locale === "ja" && "VISION行政書士事務所、専門ビザ・移民コンサルティングサービスを提供します。"}
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
            {{ ko: "© 2018 비전행정사사무소 | 사업자등록번호: 405-05-54079 | 대표: 이원중 | 개인정보관리자: 김영주", en: "© 2018 VISION Administrative Office | Business Reg: 405-05-54079 | CEO: Lee Won-jung | Privacy Officer: Kim Young-ju", zh: "© 2018 VISION行政士事务所 | 营业执照号: 405-05-54079 | 代表: 李元中 | 隐私管理: 金英珠", ja: "© 2018 VISION行政書士事務所 | 事業者登録番号: 405-05-54079 | 代表: 李元中 | 個人情報管理者: 金英珠" }[locale]}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>{{ ko: "© 2018 비전행정사사무소", en: "© 2018 VISION Administrative Office", zh: "© 2018 VISION行政士事务所", ja: "© 2018 VISION行政書士事務所" }[locale]}. All rights reserved.</span>
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
