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

  const navItems: NavItem[] = [
    {
      type: "dropdown",
      label: dict.common.visa,
      groups: [
        {
          groupLabel: "취업",
          items: [
            { href: "/visa/e-7", label: "E-7 특정활동" },
            { href: "/visa/e-6", label: "E-6 예술흥행" },
            { href: "/visa/d-7", label: "D-7 주재원" },
            { href: "/visa/d-8-executive", label: "D-8 임원파견" },
            { href: "/visa/d-8-individual", label: "D-8 개인투자" },
            { href: "/visa/d-9", label: "D-9 무역" },
          ],
        },
        {
          groupLabel: "체류",
          items: [
            { href: "/visa/f-1-digital-nomad", label: "F-1 디지털노마드" },
            { href: "/visa/f-1-visit", label: "F-1 방문동거" },
            { href: "/visa/f-2-points", label: "F-2 점수제" },
            { href: "/visa/f-2-public-interest", label: "F-2 공익사업투자" },
            { href: "/visa/f-2-real-estate", label: "F-2 부동산투자" },
            { href: "/visa/f-4", label: "F-4 거소증" },
            { href: "/visa/f-6", label: "F-6 결혼비자" },
          ],
        },
        {
          groupLabel: "영주권",
          items: [
            { href: "/visa/f-5", label: "F-5 영주권 개요" },
            { href: "/visa/f-5-1", label: "F-5-1 일반영주" },
            { href: "/visa/f-5-2", label: "F-5-2 배우자" },
            { href: "/visa/f-5-5", label: "F-5-5 고액투자" },
            { href: "/visa/f-5-6", label: "F-5-6 재외동포" },
            { href: "/visa/f-5-8", label: "F-5-8 재한화교" },
            { href: "/visa/f-5-9", label: "F-5-9 박사" },
            { href: "/visa/f-5-10", label: "F-5-10 학사·석사" },
            { href: "/visa/f-5-11", label: "F-5-11 특정분야" },
            { href: "/visa/f-5-16", label: "F-5-16 점수제" },
            { href: "/visa/f-5-17", label: "F-5-17 부동산" },
            { href: "/visa/f-5-21", label: "F-5-21 공익사업" },
            { href: "/visa/f-5-24", label: "F-5-24 기술창업" },
            { href: "/visa/f-5-25", label: "F-5-25 조건부" },
          ],
        },
      ],
    },
    {
      type: "dropdown",
      label: dict.common.business,
      groups: [
        {
          groupLabel: "법인설립",
          items: [
            { href: "/business/foreign-invested-company", label: "외국인투자기업설립" },
            { href: "/business/branch-office", label: "지점/지사/영업소 설치" },
            { href: "/business/liaison-office", label: "연락사무소 설치" },
          ],
        },
      ],
    },
    { type: "link", href: "/visa/criminal-review", label: "사범심사" },
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
            <span className="text-[10px] text-muted-foreground -mt-1">행정사사무소</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => {
                if (item.type === "link") {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <Link
                        href={`/${locale}${item.href}`}
                        className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-3">
                        {item.groups.map((group) => (
                          <div key={group.groupLabel}>
                            <h4 className="mb-2 text-sm font-semibold text-foreground">
                              {group.groupLabel}
                            </h4>
                            <ul className="space-y-1">
                              {group.items.map((subItem) => (
                                <li key={subItem.href}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={`/${locale}${subItem.href}`}
                                      className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                      {subItem.label}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
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
                  <span className="font-serif text-primary">VISION</span> 행정사사무소
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
