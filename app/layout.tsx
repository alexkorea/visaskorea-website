import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { headers } from 'next/headers'
import { SITE_CONFIG, LOCALE_HTML_LANG, type Locale } from '@/lib/seo/config'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});


const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  'name': '비전행정사사무소',
  'alternateName': 'Vision Administrative Office',
  'url': 'https://visaskorea.co.kr',
  'description': 'D-8·D-7·E-7·F-2-7·F-5·E-6·D-9-2 비자 신청 전문 행정사사무소. E-7 비자 직종 목록, D-8 visa requirements, 한국본사 외국인초청비자 대행.',
  'telephone': '+82-2-363-2251',
  'address': { '@type': 'PostalAddress', 'streetAddress': '퇴계로 324, 3층', 'addressLocality': '중구', 'addressRegion': '서울특별시', 'postalCode': '04614', 'addressCountry': 'KR' },
  'openingHours': 'Mo-Fr 09:30-17:30',
  'serviceType': ['D-8 visa', 'D-7 visa', 'E-7 visa', 'F-2-7 visa', 'F-5 visa', 'D-9-2 visa', 'E-6 visa', '한국본사 외국인초청비자'],
  'priceRange': '$'
};
export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_CONFIG.name}`,
    default: SITE_CONFIG.name,
  },
  description: 'D-8·D-7·E-7·F-2-7·F-5·E-6·D-9-2 비자 신청 전문. E-7 비자 직종 목록, D-8 비자 요건, 한국본사 외국인초청비자 대행. 서울 중구 02-363-2251.',
  metadataBase: new URL(SITE_CONFIG.domain),
  generator: 'Next.js',
  applicationName: SITE_CONFIG.name,
  referrer: 'origin-when-cross-origin',
  keywords: ['D-8 visa', 'D-7 visa', 'E-7 visa', 'F-2-7 visa', 'F-5 visa', 'D-8 visa requirements', 'E-7 비자 직종 목록', 'D-9-2 visa', 'E-6 visa', '한국본사 외국인초청비자', '비자', '이민', '영주권'],
  authors: [{ name: SITE_CONFIG.organization.name }],
  creator: SITE_CONFIG.organization.name,
  publisher: SITE_CONFIG.organization.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    siteName: SITE_CONFIG.name,
    locale: 'ko_KR',
    alternateLocale: ['en_US', 'zh_CN', 'ja_JP'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    other: {
      'naver-site-verification': '821878d3936191cf689c49a3b381bd5d6120a2a3',
      'msvalidate.01': '9040F35010B56E1A9C560DD7708280D7',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const locale = (headersList.get('x-locale') || SITE_CONFIG.defaultLocale) as Locale
  const htmlLang = LOCALE_HTML_LANG[locale] || 'ko'

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body className={`${notoSansKR.variable} ${inter.variable} font-sans antialiased`}>
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-13R66L3KTZ' strategy='afterInteractive' />
        <Script id='gtag-init' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-13R66L3KTZ');
          `}
        </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}