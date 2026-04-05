// SEO Configuration for Multilingual Visa & Immigration Website

export const SITE_CONFIG = {
  name: "비전행정사사무소",
  shortName: "VISION",
  domain: "https://visaskorea.co.kr",
  defaultLocale: "ko" as const,
  locales: ["ko", "en", "zh", "ja"] as const,
  organization: {
    name: "비전행정사사무소",
    legalName: "비전행정사사무소",
    url: "https://visaskorea.co.kr",
    logo: "https://visaskorea.co.kr/icon.svg",
    foundingDate: "2018",
    address: {
      streetAddress: "퇴계로 324, 3층 (성우빌딩)",
      addressLocality: "중구",
      addressRegion: "서울특별시",
      postalCode: "04614",
      addressCountry: "KR",
    },
    contactPoint: {
      telephone: "02-363-2251",
      email: "5000meter@gmail.com",
      contactType: "customer service",
      availableLanguage: ["Korean", "English", "Chinese", "Japanese"],
    },
    sameAs: [] as string[],
  },
};

export type Locale = (typeof SITE_CONFIG.locales)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
  ja: "日本語",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  ko: "ko-KR",
  en: "en-US",
  zh: "zh-CN",
  ja: "ja-JP",
};

// Default SEO metadata per locale
export const DEFAULT_SEO: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  ko: {
    title: "비전행정사사무소 | 전문 비자 및 이민 컨설팅",
    description:
      "대한민국 비자, 영주권, 법인 설립 전문 컨설팅. D-8, E-7, F-5 비자부터 외국인 투자법인 설립까지 원스톱 서비스를 제공합니다.",
    keywords: [
      "비자 컨설팅",
      "이민 상담",
      "영주권",
      "D-8 비자",
      "E-7 비자",
      "법인설립",
      "외국인 투자",
    ],
  },
  en: {
    title: "VISION Administrative Office | Visa & Immigration Consulting",
    description:
      "Expert visa, permanent residency, and corporate establishment consulting in South Korea. From D-8, E-7, F-5 visas to foreign investment company setup.",
    keywords: [
      "visa consulting",
      "immigration",
      "permanent residency",
      "D-8 visa",
      "E-7 visa",
      "company setup",
      "foreign investment",
    ],
  },
  zh: {
    title: "VISION行政士事务所 | 专业签证及移民咨询",
    description:
      "韩国签证、永住权、法人设立专业咨询。从D-8、E-7、F-5签证到外国投资法人设立，提供一站式服务。",
    keywords: [
      "签证咨询",
      "移民",
      "永住权",
      "D-8签证",
      "E-7签证",
      "法人设立",
      "外国投资",
    ],
  },
  ja: {
    title: "VISION行政書士事務所 | 専門ビザ・移民コンサルティング",
    description:
      "韓国ビザ、永住権、法人設立専門コンサルティング。D-8、E-7、F-5ビザから外国人投資法人設立まで、ワンストップサービスを提供します。",
    keywords: [
      "ビザコンサルティング",
      "移民相談",
      "永住権",
      "D-8ビザ",
      "E-7ビザ",
      "法人設立",
      "外国投資",
    ],
  },
};

// URL path patterns for different page types
export const URL_PATTERNS = {
  home: "/",
  visa: {
    list: "/visa",
    detail: "/visa/[slug]",
  },
  business: {
    list: "/business",
    detail: "/business/[slug]",
  },
  blog: {
    list: "/blog",
    detail: "/blog/[slug]",
  },
  contact: "/contact",
  about: "/about",
};
