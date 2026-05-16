import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { Team } from "@/components/layout/team";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import {
  ArrowRight,
  Award,
  Globe,
  Shield,
  Building2,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const ABOUT_SEO = {
  title: {
    ko: "회사 소개",
    en: "About Us",
    zh: "关于我们",
    ja: "会社概要",
  },
  description: {
    ko: "비전행정사사무소는 8년 이상의 경험을 바탕으로 비자, 이민, 법인 설립 전문 컨설팅을 제공합니다.",
    en: "VISION Administrative Office provides expert visa, immigration, and company setup consulting with over 8 years of experience.",
    zh: "VISION行政士事务所凭借8年以上的经验，提供签证、移民和法人设立专业咨询服务。",
    ja: "VISION行政書士事務所は8年以上の経験を基に、ビザ、移民、法人設立の専門コンサルティングを提供します。",
  },
} as const;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

  return generatePageMetadata({
    locale: validLocale,
    pathname: "/about",
    seo: {
      title: ABOUT_SEO.title[validLocale],
      description: ABOUT_SEO.description[validLocale],
    },
  });
}

function buildJsonLd(locale: Locale) {
  const base = "https://visaskorea.co.kr"
  const faqsMap = {
    ko: [
      { q: "비전행정사사무소는 어떤 업무를 담당하나요?", a: "비자 신청 대행(D-8, D-7, E-7, F-2-7, F-4, F-5, F-6 등), 외국인투자법인 설립, 외국인 등록, 체류자격 변경·연장, 입국금지·불법체류 심사 등 외국인 체류와 관련된 모든 행정 업무를 대행합니다." },
      { q: "비전행정사사무소는 법무법인인가요?", a: "아닙니다. 행정사법에 따라 인가된 행정사사무소입니다. 인허가 서류 준비 및 관계 행정기관 제출을 대행합니다. 소송·재판·형사 변호 등 변호사 업무는 취급하지 않습니다." },
      { q: "상담은 무료인가요?", a: "네, 초기 상담은 무료입니다. 한국어, 영어, 중국어, 일본어로 상담이 가능합니다. 전화(02-363-2251), KakaoTalk, WeChat, LINE, WhatsApp으로 문의하실 수 있습니다." },
      { q: "비자 처리 기간은 얼마나 걸리나요?", a: "비자 종류와 개인 상황에 따라 다릅니다. 일반적으로 D-8·E-7은 2~4주, F-5 영주권은 1~3개월입니다. 상담 시 더 정확하게 안내해 드립니다." },
      { q: "어떤 언어로 상담이 가능한가요?", a: "한국어, 영어, 중국어(보통화), 일본어로 상담이 가능합니다. KakaoTalk, WeChat, LINE, WhatsApp을 통한 메신저 상담도 제공합니다." },
      { q: "사무소 위치는 어디인가요?", a: "서울특별시 중구 퇴계로 324, 3층 성우빌딩입니다. 동대문역사문화공원역 4번 출구에서 도보 1분 거리입니다. 영업시간: 평일 09:30~18:30(한국시간)." },
      { q: "행정사와 변호사의 차이는 무엇인가요?", a: "행정사는 행정사법에 따라 각종 행정 서류 준비·제출·행정기관 대리를 합니다. 변호사는 소송·재판·법률 자문 등을 담당합니다. 비자·이민 서류 업무는 행정사 업무 범위에 해당합니다." },
    ],
    en: [
      { q: "What services does Vision Administrative Office provide?", a: "Visa applications (D-8, D-7, E-7, F-2-7, F-4, F-5, F-6 and more), Korea company setup for foreign investors, foreigner registration, status changes and extensions, and entry ban review." },
      { q: "Is Vision Administrative Office a law firm?", a: "No. It is a licensed administrative scrivener office. The office prepares and files administrative documents. Court litigation and criminal defense require a licensed attorney (변호사)." },
      { q: "Is the consultation free?", a: "Yes, the initial consultation is free. Available in Korean, English, Chinese, and Japanese by phone (02-363-2251) or via KakaoTalk, WeChat, LINE, WhatsApp." },
      { q: "How long does visa processing take?", a: "It depends on the visa type. Generally D-8/E-7 takes 2–4 weeks; F-5 permanent residency takes 1–3 months. We provide precise timelines during consultation." },
      { q: "What languages are supported?", a: "Korean, English, Chinese (Mandarin), and Japanese. Messenger consultation via KakaoTalk, WeChat, LINE, and WhatsApp is also available." },
      { q: "Where is Vision Administrative Office located?", a: "3F Sungwoo Building, 324 Toegye-ro, Jung-gu, Seoul. 1 minute from Dongdaemun History & Culture Park Station (Exit 4). Business hours: Mon–Fri 09:30–18:30 KST." },
      { q: "What is the difference between an 행정사 and a 변호사?", a: "An 행정사 (administrative scrivener) prepares and files administrative documents and represents clients before administrative agencies. A 변호사 (attorney) handles litigation, criminal defense, and legal advice. Visa and immigration document work falls within the 행정사 scope." },
    ],
    zh: [
      { q: "飞展行政士事务所提供哪些服务?", a: "签证申请代行（D-8、D-7、E-7、F-2-7、F-4、F-5、F-6等）、外国人投资法人设立、外国人登录、居留资格变更·延长、入境禁止·非法滞留审查等全部行政业务。" },
      { q: "飞展行政士事务所是律师事务所吗?", a: "不是。飞展行政士事务所是依据行政士法认可的行政士事务所。负责各类行政文件准备及相关行政机关提交代行。诉讼、裁判、刑事辩护等律师业务不在服务范围内。" },
      { q: "咨询是免费的吗?", a: "是的，初次咨询免费。可以用韩语、英语、中文、日语进行咨询。可通过电话（02-363-2251）、KakaoTalk、微信、LINE、WhatsApp联系。" },
      { q: "签证处理需要多长时间?", a: "根据签证种类和个人情况有所不同。一般D-8、E-7需要2~4周，F-5永久居留权需要1~3个月。具体时间在咨询时会详细说明。" },
      { q: "支持哪些语言咨询?", a: "支持韩语、英语、中文（普通话）、日语咨询。也可通过KakaoTalk、微信、LINE、WhatsApp进行即时通讯咨询。" },
      { q: "事务所在哪里?", a: "首尔特别市中区退溪路324号 成友大厦3层。距东大门历史文化公园站4号出口步行1分钟。营业时间：周一至周五09:30~18:30（韩国时间）。" },
      { q: "行政士和律师有什么区别?", a: "行政士根据行政士法负责各类行政文件准备、提交及行政机关代理。律师负责诉讼、裁判、法律咨询等。签证·移民文件业务属于行政士业务范围。" },
    ],
    ja: [
      { q: "VISION行政書士事務所はどのような業務を担当していますか？", a: "ビザ申請代行（D-8、D-7、E-7、F-2-7、F-4、F-5、F-6など）、外国人投資法人設立、外国人登録、在留資格変更・延長、入国禁止・不法滞在審査など、外国人の在留に関するすべての行政業務を代行します。" },
      { q: "法律事務所ですか？", a: "いいえ。行政書士法に基づいて許可を受けた行政書士事務所です。各種行政書類の準備および関係行政機関への提出を代行します。訴訟・裁判・刑事弁護などの弁護士業務は取り扱っておりません。" },
      { q: "相談は無料ですか？", a: "はい、初回相談は無料です。韓国語、英語、中国語、日本語でご相談いただけます。電話（02-363-2251）、KakaoTalk、WeChat、LINE、WhatsAppでお問い合わせください。" },
      { q: "ビザの処理期間はどのくらいかかりますか？", a: "ビザの種類と個人の状況によって異なります。一般的にD-8・E-7は2〜4週間、F-5永住権は1〜3か月です。詳細はご相談時にご案内します。" },
      { q: "対応言語を教えてください。", a: "韓国語、英語、中国語（普通話）、日本語でご相談いただけます。KakaoTalk、WeChat、LINE、WhatsAppによるメッセンジャー相談も対応しています。" },
      { q: "事務所の場所はどこですか？", a: "ソウル特別市中区退渓路324 成友ビル3階です。東大門歴史文化公園駅4番出口から徒歩1分です。営業時間：平日09:30〜18:30（韓国時間）。" },
      { q: "行政書士と弁護士の違いは何ですか？", a: "行政書士は行政書士法に基づき、各種行政書類の準備・提出・行政機関代理を行います。弁護士は訴訟・裁判・法律顧問などを担当します。ビザ・在留書類業務は行政書士の業務範囲に該当します。" },
    ],
  }
  const faqs = faqsMap[locale] || faqsMap.ko
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#org`,
        name: "비전행정사사무소",
        alternateName: ["Vision Administrative Office", "飞展行政士事务所"],
        url: base,
        telephone: "+82-2-363-2251",
        email: "5000meter@gmail.com",
        address: { "@type": "PostalAddress", streetAddress: "퇴계로 324, 3층 성우빌딩", addressLocality: "Jung-gu", addressRegion: "Seoul", postalCode: "04614", addressCountry: "KR" },
        foundingDate: "2018",
        knowsLanguage: ["ko", "en", "zh", "ja"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: { ko: "홈", en: "Home", zh: "首页", ja: "ホーム" }[locale] || "홈", item: `${base}/${locale}` },
          { "@type": "ListItem", position: 2, name: { ko: "회사 소개", en: "About Us", zh: "关于我们", ja: "会社概要" }[locale] || "회사 소개", item: `${base}/${locale}/about` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  }
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);
  const jsonLd = buildJsonLd(validLocale);

  const strengths = [
    {
      icon: <Award className="h-6 w-6" />,
      title: { ko: "8년+ 전문 경력", en: "8+ Years of Expertise", zh: "8年以上专业经验", ja: "8年以上の専門経歴" }[validLocale],
      description: { ko: "출입국관리법 전문 행정사로서 수천 건의 성공 사례를 보유하고 있습니다.", en: "As specialized immigration administrative scriveners, we have thousands of successful cases.", zh: "作为出入境管理法专业行政士，拥有数千个成功案例。", ja: "出入国管理法専門の行政書士として数千件の成功事例を保有しています。" }[validLocale],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: { ko: "4개 국어 지원", en: "4 Languages Supported", zh: "4种语言服务", ja: "4か国語対応" }[validLocale],
      description: { ko: "한국어, 영어, 중국어, 일본어로 상담이 가능합니다.", en: "Consultation available in Korean, English, Chinese, and Japanese.", zh: "可用韩语、英语、中文、日语进行咨询。", ja: "韓国語、英語、中国語、日本語でご相談いただけます。" }[validLocale],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: { ko: "98% 성공률", en: "98% Success Rate", zh: "98%成功率", ja: "98%成功率" }[validLocale],
      description: { ko: "철저한 사전 분석과 맞춤형 전략으로 높은 승인률을 달성합니다.", en: "We achieve high approval rates through thorough analysis and tailored strategies.", zh: "通过彻底的事前分析和定制策略，实现高通过率。", ja: "徹底した事前分析とカスタマイズ戦略で高い承認率を達成します。" }[validLocale],
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: { ko: "원스톱 서비스", en: "One-Stop Service", zh: "一站式服务", ja: "ワンストップサービス" }[validLocale],
      description: { ko: "비자 신청부터 법인 설립, 사후 관리까지 모든 과정을 지원합니다.", en: "We support the entire process from visa application to company setup and aftercare.", zh: "从签证申请到法人设立、后续管理，支持全过程。", ja: "ビザ申請から法人設立、アフターケアまで全過程をサポートします。" }[validLocale],
    },
  ];

  const faqItems = {
    ko: [
      { q: "비전행정사사무소는 어떤 업무를 담당하나요?", a: "비자 신청 대행(D-8, D-7, E-7, F-2-7, F-4, F-5, F-6 등), 외국인투자법인 설립, 외국인 등록, 체류자격 변경·연장, 입국금지·불법체류 심사 등 외국인 체류와 관련된 모든 행정 업무를 대행합니다." },
      { q: "비전행정사사무소는 법무법인인가요?", a: "아닙니다. 행정사법에 따라 인가된 행정사사무소입니다. 소송·재판·형사 변호 등 변호사 업무는 취급하지 않습니다." },
      { q: "상담은 무료인가요?", a: "네, 초기 상담은 무료입니다. 한국어, 영어, 중국어, 일본어로 상담이 가능합니다." },
      { q: "어떤 언어로 상담이 가능한가요?", a: "한국어, 영어, 중국어(보통화), 일본어로 상담이 가능합니다. KakaoTalk, WeChat, LINE, WhatsApp을 통한 메신저 상담도 제공합니다." },
      { q: "비자 처리 기간은 얼마나 걸리나요?", a: "비자 종류와 개인 상황에 따라 다릅니다. D-8·E-7은 2~4주, F-5 영주권은 1~3개월입니다. 상담 시 더 정확하게 안내해 드립니다." },
      { q: "사무소 위치는 어디인가요?", a: "서울특별시 중구 퇴계로 324, 3층 성우빌딩입니다. 영업시간: 평일 09:30~18:30(한국시간)." },
      { q: "행정사와 변호사의 차이는 무엇인가요?", a: "행정사는 행정 서류 준비·제출·행정기관 대리를 합니다. 변호사는 소송·재판·법률 자문을 담당합니다. 비자·이민 서류 업무는 행정사 업무 범위입니다." },
    ],
    en: [
      { q: "What services does Vision Administrative Office provide?", a: "Visa applications (D-8, D-7, E-7, F-2-7, F-4, F-5, F-6 and more), Korea company setup, foreigner registration, status changes and extensions, and entry ban review." },
      { q: "Is Vision Administrative Office a law firm?", a: "No. It is a licensed administrative scrivener office. Court litigation and criminal defense require a licensed attorney." },
      { q: "Is the consultation free?", a: "Yes, free in Korean, English, Chinese, and Japanese by phone or via KakaoTalk, WeChat, LINE, WhatsApp." },
      { q: "What languages are supported?", a: "Korean, English, Chinese (Mandarin), and Japanese. Messenger consultation via KakaoTalk, WeChat, LINE, and WhatsApp." },
      { q: "How long does visa processing take?", a: "D-8/E-7: 2–4 weeks; F-5 permanent residency: 1–3 months. Exact timelines provided during consultation." },
      { q: "Where is Vision Administrative Office located?", a: "3F Sungwoo Bldg, 324 Toegye-ro, Jung-gu, Seoul. Mon–Fri 09:30–18:30 KST." },
      { q: "What is the difference between 행정사 and 변호사?", a: "행정사 (administrative scrivener) prepares and files administrative documents. 변호사 (attorney) handles litigation and legal advice. Visa work falls within 행정사 scope." },
    ],
    zh: [
      { q: "飞展行政士事务所提供哪些服务?", a: "签证申请代行（D-8、D-7、E-7、F-2-7、F-4、F-5、F-6等）、外国人投资法人设立、外国人登录、居留资格变更·延长、入境禁止审查等全部行政业务。" },
      { q: "是律师事务所吗?", a: "不是。是依据行政士法认可的行政士事务所。诉讼、裁判、刑事辩护等律师业务不在服务范围内。" },
      { q: "咨询是免费的吗?", a: "是的，初次咨询免费。可用韩语、英语、中文、日语进行咨询。" },
      { q: "支持哪些语言咨询?", a: "韩语、英语、中文（普通话）、日语。也可通过KakaoTalk、微信、LINE、WhatsApp咨询。" },
      { q: "签证处理需要多长时间?", a: "D-8、E-7约2~4周，F-5永久居留权约1~3个月。具体时间咨询时会详细说明。" },
      { q: "事务所在哪里?", a: "首尔特别市中区退溪路324号 成友大厦3层。营业时间：周一至周五09:30~18:30（韩国时间）。" },
      { q: "行政士和律师有什么区别?", a: "行政士负责行政文件准备、提交及行政机关代理。律师负责诉讼、裁判、法律咨询。签证业务属于行政士业务范围。" },
    ],
    ja: [
      { q: "どのような業務を担当していますか？", a: "ビザ申請代行（D-8、D-7、E-7、F-2-7、F-4、F-5、F-6など）、外国人投資法人設立、外国人登録、在留資格変更・延長、入国禁止審査など在留に関するすべての行政業務を代行します。" },
      { q: "法律事務所ですか？", a: "いいえ。行政書士法に基づく行政書士事務所です。訴訟・裁判・刑事弁護などの弁護士業務は取り扱っておりません。" },
      { q: "相談は無料ですか？", a: "はい、初回無料です。韓国語、英語、中国語、日本語でご相談いただけます。" },
      { q: "対応言語を教えてください。", a: "韓国語、英語、中国語（普通話）、日本語。KakaoTalk、WeChat、LINE、WhatsAppによるメッセンジャー相談も対応しています。" },
      { q: "ビザの処理期間はどのくらいかかりますか？", a: "D-8・E-7は2〜4週間、F-5永住権は1〜3か月です。詳細はご相談時にご案内します。" },
      { q: "事務所の場所はどこですか？", a: "ソウル中区退渓路324 成友ビル3階。営業時間：平日09:30〜18:30（韓国時間）。" },
      { q: "行政書士と弁護士の違いは何ですか？", a: "行政書士は行政書類の準備・提出・代理を行います。弁護士は訴訟・法律顧問を担当します。ビザ業務は行政書士の業務範囲です。" },
    ],
  }[validLocale] || []

  const faqTitle = { ko: "자주 묻는 질문", en: "Frequently Asked Questions", zh: "常见问题", ja: "よくある質問" }[validLocale]

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          title={ABOUT_SEO.title[validLocale]}
          subtitle={ABOUT_SEO.description[validLocale]}
          image="/slides/consultation.jpg"
        />

        {/* Strengths */}
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {strengths.map((strength, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {strength.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{strength.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team - All 9 members (6 admins + 3 staff) */}
        <Team locale={validLocale} />

        {/* FAQ */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-center mb-2">{faqTitle}</h2>
            <div className="mt-8 space-y-3">
              {faqItems.map(({ q, a }, i) => (
                <details key={i} className="rounded-xl border border-slate-200 bg-white p-5">
                  <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center text-sm">
                    {q}
                    <span className="text-primary ml-4 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              {{ ko: "전문 상담을 시작하세요", en: "Start Your Consultation", zh: "开始专业咨询", ja: "専門相談を始めましょう" }[validLocale]}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {{ ko: "비자, 법인 설립, 이민에 관한 모든 궁금증을 해결해 드립니다.", en: "We answer all your questions about visas, company setup, and immigration.", zh: "解答您关于签证、法人设立、移民的所有疑问。", ja: "ビザ、法人設立、移民に関するすべてのご質問にお答えします。" }[validLocale]}
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href={`/${validLocale}/contact`}>
                  {dict.common.freeConsultation}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
