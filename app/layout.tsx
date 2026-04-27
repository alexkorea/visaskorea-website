import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { headers } from 'next/headers'
import { SITE_CONFIG, LOCALE_HTML_LANG, type Locale } from '@/lib/seo/config'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_CONFIG.name}`,
    default: SITE_CONFIG.name,
  },
  description: '전문 비자 및 이민 컨설팅 서비스',
  metadataBase: new URL(SITE_CONFIG.domain),
  generator: 'Next.js',
  applicationName: SITE_CONFIG.name,
  referrer: 'origin-when-cross-origin',
  keywords: ['비자', '이민', '영주권', '법인설립', '외국인투자'],
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
    // Add your verification tokens here
    // google: 'your-google-verification-token',
    // naver: 'your-naver-verification-token',
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
  // Read locale from middleware header for dynamic HTML lang attribute
  const headersList = await headers()
  const locale = (headersList.get('x-locale') || SITE_CONFIG.defaultLocale) as Locale
  const htmlLang = LOCALE_HTML_LANG[locale] || 'ko'

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body className={`${notoSansKR.variable} ${inter.variable} font-sans antialiased`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-J6GD76FYJ8" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J6GD76FYJ8');
          `}
        </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
