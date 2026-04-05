"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type Locale = "ko" | "en" | "zh" | "ja";

interface SlideData {
  image: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
}

const slides: SlideData[] = [
  {
    image: "/slides/passport.jpg",
    title: {
      ko: "전문 비자 \u00B7 이민 컨설팅",
      en: "Expert Visa & Immigration Consulting",
      zh: "\u4E13\u4E1A\u7B7E\u8BC1\u00B7\u79FB\u6C11\u54A8\u8BE2",
      ja: "\u5C02\u9580\u30D3\u30B6\u30FB\u79FB\u6C11\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0",
    },
    subtitle: {
      ko: "\uD55C\uAD6D \uBE44\uC790, \uD22C\uC790, \uC774\uBBFC \uC5C5\uBB34\uB97C \uC804\uBB38\uC801\uC73C\uB85C \uC9C0\uC6D0\uD569\uB2C8\uB2E4",
      en: "Professional support for Korean visa, investment, and immigration services",
      zh: "\u4E13\u4E1A\u652F\u6301\u97E9\u56FD\u7B7E\u8BC1\u3001\u6295\u8D44\u548C\u79FB\u6C11\u4E1A\u52A1",
      ja: "\u97D3\u56FD\u30D3\u30B6\u3001\u6295\u8CC7\u3001\u79FB\u6C11\u696D\u52D9\u3092\u5C02\u9580\u7684\u306B\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059",
    },
  },
  {
    image: "/slides/business.jpg",
    title: {
      ko: "\uC678\uAD6D\uC778 \uD22C\uC790 \u00B7 \uBC95\uC778\uC124\uB9BD",
      en: "Foreign Investment & Company Setup",
      zh: "\u5916\u56FD\u4EBA\u6295\u8D44\u00B7\u6CD5\u4EBA\u8BBE\u7ACB",
      ja: "\u5916\u56FD\u4EBA\u6295\u8CC7\u30FB\u6CD5\u4EBA\u8A2D\u7ACB",
    },
    subtitle: {
      ko: "D-8, D-7 \uBE44\uC790\uBD80\uD130 \uBC95\uC778\uC124\uB9BD\uAE4C\uC9C0 \uC6D0\uC2A4\uD1B1 \uC11C\uBE44\uC2A4",
      en: "One-stop service from D-8, D-7 visa to company establishment",
      zh: "\u4ECDD-8\u3001D-7\u7B7E\u8BC1\u5230\u6CD5\u4EBA\u8BBE\u7ACB\u7684\u4E00\u7AD9\u5F0F\u670D\u52A1",
      ja: "D-8\u3001D-7\u30D3\u30B6\u304B\u3089\u6CD5\u4EBA\u8A2D\u7ACB\u307E\u3067\u30EF\u30F3\u30B9\u30C8\u30C3\u30D7\u30B5\u30FC\u30D3\u30B9",
    },
  },
  {
    image: "/slides/city.jpg",
    title: {
      ko: "\uC601\uC8FC\uAD8C \u00B7 \uCCB4\uB958\uC790\uACA9 \uC804\uBB38",
      en: "Permanent Residency & Stay Status Expert",
      zh: "\u6C38\u4F4F\u6743\u00B7\u5C45\u7559\u8D44\u683C\u4E13\u5BB6",
      ja: "\u6C38\u4F4F\u6A29\u30FB\u5728\u7559\u8CC7\u683C\u5C02\u9580",
    },
    subtitle: {
      ko: "F-5 \uC601\uC8FC\uAD8C, F-2 \uAC70\uC8FC\uBE44\uC790, \uCCB4\uB958\uC790\uACA9 \uBCC0\uACBD \uC804\uBB38 \uC0C1\uB2F4",
      en: "Expert consulting for F-5 permanent residency, F-2 residence visa, and status changes",
      zh: "F-5\u6C38\u4F4F\u6743\u3001F-2\u5C45\u4F4F\u7B7E\u8BC1\u3001\u5C45\u7559\u8D44\u683C\u53D8\u66F4\u4E13\u4E1A\u54A8\u8BE2",
      ja: "F-5\u6C38\u4F4F\u6A29\u3001F-2\u5C45\u4F4F\u30D3\u30B6\u3001\u5728\u7559\u8CC7\u683C\u5909\u66F4\u5C02\u9580\u76F8\u8AC7",
    },
  },
];

const ctaLabels: Record<Locale, { consult: string; services: string }> = {
  ko: { consult: "\uC0C1\uB2F4\uBB38\uC758", services: "\uC11C\uBE44\uC2A4 \uBCF4\uAE30" },
  en: { consult: "Contact Us", services: "View Services" },
  zh: { consult: "\u54A8\u8BE2\u8054\u7CFB", services: "\u67E5\u770B\u670D\u52A1" },
  ja: { consult: "\u76F8\u8AC7\u304A\u554F\u5408\u305B", services: "\u30B5\u30FC\u30D3\u30B9\u3092\u898B\u308B" },
};

interface HeroSliderProps {
  locale: Locale;
}

export function HeroSlider({ locale }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === current || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [current, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const labels = ctaLabels[locale];

  return (
    <section className="relative min-h-[480px] flex items-center overflow-hidden">
      {/* Background image */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current && !isTransitioning ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.title[locale]}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-7xl px-4 py-20 text-center transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
          {slide.title[locale]}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
          {slide.subtitle[locale]}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
          >
            {labels.consult}
          </Link>
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            {labels.services}
          </Link>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === current
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
