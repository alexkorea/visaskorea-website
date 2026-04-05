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
import { Globe, Menu, Phone } from "lucide-react";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPathname(pathname);

  const navItems = [
    { href: "/visa", label: dict.common.visa },
    { href: "/business", label: dict.common.business },
    { href: "/blog", label: dict.common.blog },
    { href: "/qna", label: dict.common.qna },
    { href: "/about", label: dict.common.about },
    { href: "/contact", label: dict.common.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-bold text-xl"
        >
          <span className="text-primary">5000</span>
          <span>Meter</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
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
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <span className="text-primary">5000</span>Meter
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href}`}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
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
