import Link from "next/link";
import type { Locale } from "@/lib/seo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/seo/config";
import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const org = SITE_CONFIG.organization;

  // High-value internal links for SEO
  const visaLinks = [
    { href: "/visa/d-8", label: "D-8 기업투자비자" },
    { href: "/visa/d-7", label: "D-7 주재원비자" },
    { href: "/visa/e-7", label: "E-7 특정활동비자" },
    { href: "/visa/f-5", label: "F-5 영주권" },
    { href: "/visa/f-2-7", label: "F-2-7 점수제비자" },
    { href: "/visa/f-4", label: "F-4 재외동포비자" },
  ];

  const businessLinks = [
    { href: "/business/liaison-office", label: "연락사무소 설립" },
    { href: "/business/branch-office", label: "지사 설립" },
    { href: "/business/subsidiary", label: "현지법인 설립" },
    { href: "/business/criminal-review", label: "범죄경력 심사" },
  ];

  const companyLinks = [
    { href: "/about", label: dict.common.about },
    { href: "/blog", label: dict.common.blog },
    { href: "/qna", label: dict.common.qna },
    { href: "/contact", label: dict.common.contact },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              href={`/${locale}`}
              className="inline-block text-xl font-bold"
            >
              <span className="text-primary">5000</span>Meter
            </Link>
            <p className="text-sm text-muted-foreground">
              {locale === "ko" &&
                "전문 비자 및 이민 컨설팅 서비스를 제공합니다."}
              {locale === "en" &&
                "Professional visa and immigration consulting services."}
              {locale === "zh" && "提供专业签证及移民咨询服务。"}
              {locale === "ja" &&
                "専門ビザ・移民コンサルティングサービスを提供します。"}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{org.address.streetAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${org.contactPoint.telephone}`}
                  className="hover:text-foreground"
                >
                  {org.contactPoint.telephone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${org.contactPoint.email}`}
                  className="hover:text-foreground"
                >
                  {org.contactPoint.email}
                </a>
              </div>
            </div>
          </div>

          {/* Visa Services - SEO Internal Links */}
          <div>
            <h3 className="mb-4 font-semibold">{dict.common.visa}</h3>
            <ul className="space-y-2">
              {visaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Services - SEO Internal Links */}
          <div>
            <h3 className="mb-4 font-semibold">{dict.common.business}</h3>
            <ul className="space-y-2">
              {businessLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold">{dict.footer.companyInfo}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {org.name}. {dict.footer.allRightsReserved}
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link
              href={`/${locale}/privacy`}
              className="hover:text-foreground"
            >
              {dict.footer.privacyPolicy}
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-foreground">
              {dict.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
