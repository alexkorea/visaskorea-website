"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Locale } from "@/lib/seo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { LOCALE_NAMES } from "@/lib/seo/config";
import { removeLocaleFromPathname } from "@/lib/i18n/config";
import { ChevronDown, Globe, Menu, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

interface NavSubItem {
  href: string;
  label: string;
}

interface NavGroup {
  groupLabel: string;
  items: NavSubItem[];
}

interface NavItemSimple {
  type: "link";
  href: string;
  label: string;
}

interface NavItemDropdown {
  type: "dropdown";
  label: string;
  groups: NavGroup[];
}

type NavItem = NavItemSimple | NavItemDropdown;

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPathname(pathname);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  const menuLabels: Record<string, Record<string, string>> = {
    work: { ko: "취업", en: "Employment", zh: "就业", ja: "就労" },
    residence: { ko: "체류", en: "Residence", zh: "居留", ja: "在留" },
    permanentResidency: { ko: "영주권", en: "Permanent Residency", zh: "永住权", ja: "永住権" },
    companySetup: { ko: "법인설립", en: "Company Setup", zh: "法人设立", ja: "法人設立" },
    criminalReview: { ko: "사범심사", en: "Criminal Review", zh: "犯罪审查", ja: "犯罪審査" },
    "e-7": { ko: "E-7 특정활동", en: "E-7 Special Activities", zh: "E-7 特定活动", ja: "E-7 特定活動" },
    "e-6": { ko: "E-6 예술흥행", en: "E-6 Arts & Entertainment", zh: "E-6 艺术演出", ja: "E-6 芸術興行" },
    "d-7": { ko: "D-7 주재원", en: "D-7 Intra-company Transfer", zh: "D-7 驻在员", ja: "D-7 駐在員" },
    "d-8-exec": { ko: "D-8 임원파견", en: "D-8 Executive Transfer", zh: "D-8 高管派遣", ja: "D-8 役員派遣" },
    "d-8-indiv": { ko: "D-8 개인투자", en: "D-8 Individual Investment", zh: "D-8 个人投资", ja: "D-8 個人投資" },
    "d-9": { ko: "D-9 무역경영", en: "D-9 Trade Management", zh: "D-9 贸易经营", ja: "D-9 貿易経営" },
    "f-1-dn": { ko: "F-1 디지털노마드", en: "F-1 Digital Nomad", zh: "F-1 数字游民", ja: "F-1 デジタルノマド" },
    "f-1-visit": { ko: "F-1 방문동거", en: "F-1 Family Visit", zh: "F-1 访问同居", ja: "F-1 訪問同居" },
    "f-2-pts": { ko: "F-2 점수제", en: "F-2 Points-based", zh: "F-2 积分制", ja: "F-2 ポイント制" },
    "f-2-pi": { ko: "F-2 공익사업투자", en: "F-2 Public Interest", zh: "F-2 公益事业投资", ja: "F-2 公益事業投資" },
    "f-2-re": { ko: "F-2 부동산투자", en: "F-2 Real Estate", zh: "F-2 房地产投资", ja: "F-2 不動産投資" },
    "f-4": { ko: "F-4 거소증", en: "F-4 Overseas Korean", zh: "F-4 居留证", ja: "F-4 居所証" },
    "f-6": { ko: "F-6 결혼비자", en: "F-6 Marriage Visa", zh: "F-6 结婚签证", ja: "F-6 結婚ビザ" },
    "f-5": { ko: "F-5 영주권 개요", en: "F-5 PR Overview", zh: "F-5 永住权概要", ja: "F-5 永住権概要" },
    "f-5-1": { ko: "F-5-1 일반영주", en: "F-5-1 General PR", zh: "F-5-1 一般永住", ja: "F-5-1 一般永住" },
    "f-5-2": { ko: "F-5-2 배우자", en: "F-5-2 Spouse", zh: "F-5-2 配偶", ja: "F-5-2 配偶者" },
    "f-5-5": { ko: "F-5-5 고액투자", en: "F-5-5 High Investment", zh: "F-5-5 高额投资", ja: "F-5-5 高額投資" },
    "f-5-6": { ko: "F-5-6 재외동포", en: "F-5-6 Overseas Korean", zh: "F-5-6 海外同胞", ja: "F-5-6 在外同胞" },
    "f-5-8": { ko: "F-5-8 재한화교", en: "F-5-8 Ethnic Chinese", zh: "F-5-8 在韩华侨", ja: "F-5-8 在韓華僑" },
    "f-5-9": { ko: "F-5-9 박사", en: "F-5-9 Doctorate", zh: "F-5-9 博士", ja: "F-5-9 博士" },
    "f-5-10": { ko: "F-5-10 학사·석사", en: "F-5-10 Bachelor/Master", zh: "F-5-10 学士·硕士", ja: "F-5-10 学士·修士" },
    "f-5-11": { ko: "F-5-11 특정분야", en: "F-5-11 Special Field", zh: "F-5-11 特定领域", ja: "F-5-11 特定分野" },
    "f-5-16": { ko: "F-5-16 점수제", en: "F-5-16 Points-based", zh: "F-5-16 积分制", ja: "F-5-16 ポイント制" },
    "f-5-17": { ko: "F-5-17 부동산", en: "F-5-17 Real Estate", zh: "F-5-17 房地产", ja: "F-5-17 不動産" },
    "f-5-21": { ko: "F-5-21 공익사업", en: "F-5-21 Public Interest", zh: "F-5-21 公益事业", ja: "F-5-21 公益事業" },
    "f-5-24": { ko: "F-5-24 기술창업", en: "F-5-24 Tech Startup", zh: "F-5-24 技术创业", ja: "F-5-24 技術創業" },
    "f-5-25": { ko: "F-5-25 조건부", en: "F-5-25 Conditional", zh: "F-5-25 有条件", ja: "F-5-25 条件付き" },
    fdi: { ko: "외국인투자기업설립", en: "Foreign Investment Company", zh: "外国投资企业设立", ja: "外国人投資企業設立" },
    branch: { ko: "지점/지사/영업소 설치", en: "Branch Office Setup", zh: "分公司/营业所设置", ja: "支店/支社/営業所設置" },
    liaison: { ko: "연락사무소 설치", en: "Liaison Office Setup", zh: "联络事务所设置", ja: "連絡事務所設置" },
  };

  const ml = (key: string) => menuLabels[key]?.[locale] ?? menuLabels[key]?.ko ?? key;

  const navItems: NavItem[] = [
    {
      type: "dropdown",
      label: dict.common.visa,
      groups: [
        {
          groupLabel: ml("work"),
          items: [
            { href: "/visa/e-7", label: ml("e-7") },
            { href: "/visa/e-6", label: ml("e-6") },
            { href: "/visa/d-7", label: ml("d-7") },
            { href: "/visa/d-8-executive", label: ml("d-8-exec") },
            { href: "/visa/d-8-individual", label: ml("d-8-indiv") },
            { href: "/visa/d-9", label: ml("d-9") },
          ],
        },
        {
          groupLabel: ml("residence"),
          items: [
            { href: "/visa/f-1-digital-nomad", label: ml("f-1-dn") },
            { href: "/visa/f-1-visit", label: ml("f-1-visit") },
            { href: "/visa/f-2-points", label: ml("f-2-pts") },
            { href: "/visa/f-2-public-interest", label: ml("f-2-pi") },
            { href: "/visa/f-2-real-estate", label: ml("f-2-re") },
            { href: "/visa/f-4", label: ml("f-4") },
            { href: "/visa/f-6", label: ml("f-6") },
          ],
        },
        {
          groupLabel: ml("permanentResidency"),
          items: [
            { href: "/visa/f-5", label: ml("f-5") },
            { href: "/visa/f-5-1", label: ml("f-5-1") },
            { href: "/visa/f-5-2", label: ml("f-5-2") },
            { href: "/visa/f-5-5", label: ml("f-5-5") },
            { href: "/visa/f-5-6", label: ml("f-5-6") },
            { href: "/visa/f-5-8", label: ml("f-5-8") },
            { href: "/visa/f-5-9", label: ml("f-5-9") },
            { href: "/visa/f-5-10", label: ml("f-5-10") },
            { href: "/visa/f-5-11", label: ml("f-5-11") },
            { href: "/visa/f-5-16", label: ml("f-5-16") },
            { href: "/visa/f-5-17", label: ml("f-5-17") },
            { href: "/visa/f-5-21", label: ml("f-5-21") },
            { href: "/visa/f-5-24", label: ml("f-5-24") },
            { href: "/visa/f-5-25", label: ml("f-5-25") },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      label: dict.common.business,
      groups: [
        {
          groupLabel: ml("companySetup"),
          items: [
            { href: "/business/foreign-invested-company", label: ml("fdi") },
            { href: "/business/branch-office", label: ml("branch") },
            { href: "/business/liaison-office", label: ml("liaison") },
          ],
        },
      ],
    },
    { type: "link", href: "/visa/criminal-review", label: ml("criminalReview") },
    { type: "link", href: "/blog", label: dict.common.blog || "블로그" },
    { type: "link", href: "/contact", label: dict.common.contact },
  ];

  // Flatten nav items for mobile menu
  const flatNavItems = navItems.flatMap((item) => {
    if (item.type === "link") return [item];
    return [];
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">V</span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-foreground">VISION</span>
            <span className="text-[10px] text-muted-foreground -mt-1">{{ ko: "행정사사무소", en: "Administrative Office", zh: "行政士事务所", ja: "行政書士事務所" }[locale]}</span>
          </div>
        </Link>

        {/* Desktop Navigation - hover dropdown */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="absolute left-0 top-full pt-1 z-50 hidden group-hover:block">
                  <div className="bg-background rounded-lg shadow-lg border border-border p-4 grid gap-4" style={{ gridTemplateColumns: `repeat(${Math.min(item.groups.length, 3)}, minmax(180px, 1fr))` }}>
                    {item.groups.map((group) => (
                      <div key={group.groupLabel}>
                        <h4 className="mb-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                          {group.groupLabel}
                        </h4>
                        <ul className="space-y-0.5">
                          {group.items.map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                href={`/${locale}${subItem.href}`}
                                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{LOCALE_NAMES[locale]}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {(Object.entries(LOCALE_NAMES) as [Locale, string][]).map(
                ([loc, name]) => (
                  <DropdownMenuItem key={loc} asChild>
                    <Link
                      href={`/${loc}${pathWithoutLocale}`}
                      className={locale === loc ? "font-medium" : ""}
                    >
                      {name}
                    </Link>
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button (Desktop) */}
          <Button size="sm" className="hidden gap-2 md:flex" asChild>
            <Link href={`/${locale}/contact`}>
              <Phone className="h-4 w-4" />
              {dict.common.consultation}
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <span className="font-serif text-primary">VISION</span> {{ ko: "행정사사무소", en: "Administrative Office", zh: "行政士事务所", ja: "行政書士事務所" }[locale]}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  if (item.type === "link") {
                    return (
                      <Link
                        key={item.href}
                        href={`/${locale}${item.href}`}
                        className="text-base font-medium py-2 transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    );
                  }
                  const isOpen = mobileOpen === item.label;
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileOpen(isOpen ? null : item.label)}
                        className="flex w-full items-center justify-between py-2 text-base font-medium transition-colors hover:text-primary"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="ml-2 border-l pl-3 space-y-3 pb-2">
                          {item.groups.map((group) => (
                            <div key={group.groupLabel}>
                              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                                {group.groupLabel}
                              </p>
                              <ul className="space-y-1">
                                {group.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={`/${locale}${subItem.href}`}
                                      className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                <Button className="mt-4 w-full gap-2" asChild>
                  <Link href={`/${locale}/contact`}>
                    <Phone className="h-4 w-4" />
                    {dict.common.freeConsultation}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
