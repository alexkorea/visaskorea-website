import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

  return generatePageMetadata({
    locale: validLocale,
    pathname: "/terms",
    seo: {
      title: "이용약관",
      description: "비전행정사사무소의 이용약관입니다.",
    },
  });
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />
      <main className="flex-1 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-white mb-8">이용약관</h1>

          {validLocale !== "ko" && (
            <div className="mb-8 rounded-lg bg-yellow-900/30 border border-yellow-700/50 p-4 text-sm text-yellow-200">
              This page is currently available in Korean only. Translation to other languages is pending.
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">제1조 (목적)</h2>
            <p className="text-gray-300">본 약관은 비전행정사사무소(이하 &quot;사무소&quot;)가 운영하는 웹사이트(visaskorea.com)에서 제공하는 서비스(이하 &quot;서비스&quot;)의 이용 조건 및 절차, 이용자와 사무소의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-4">제2조 (서비스 내용)</h2>
            <p className="text-gray-300">사무소가 제공하는 서비스는 다음과 같습니다.</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
              <li>각종 비자(D-7, D-8, E-7, F-2, F-4, F-5 등) 신청 상담 및 대행</li>
              <li>외국인투자기업 설립 상담 및 대행</li>
              <li>지점/지사/연락사무소 설치 대행</li>
              <li>사범심사 대응</li>
              <li>관련 서류 작성 및 제출 대행</li>
              <li>기타 행정사법에 따른 업무</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-10 mb-4">제3조 (이용자의 의무)</h2>
            <p className="text-gray-300">이용자는 서비스 이용 시 다음 사항을 준수해야 합니다.</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
              <li>상담 신청 시 정확한 정보를 제공해야 합니다.</li>
              <li>타인의 개인정보를 도용하여 서비스를 이용해서는 안 됩니다.</li>
              <li>서비스를 이용하여 법령 또는 공공질서에 반하는 행위를 해서는 안 됩니다.</li>
              <li>사무소의 서비스 운영을 방해하는 행위를 해서는 안 됩니다.</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-10 mb-4">제4조 (면책 조항)</h2>
            <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
              <li>사무소는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 서비스를 제공할 수 없는 경우에는 책임이 면제됩니다.</li>
              <li>사무소는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.</li>
              <li>사무소는 이용자가 서비스를 이용하여 기대하는 결과를 얻지 못한 것에 대하여 책임을 지지 않습니다.</li>
              <li>비자 심사 결과 및 처리 기간은 출입국관리사무소의 재량이며, 사무소는 이에 대한 책임을 지지 않습니다.</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-10 mb-4">제5조 (관할법원)</h2>
            <p className="text-gray-300">서비스 이용과 관련하여 분쟁이 발생한 경우, 사무소의 소재지를 관할하는 법원을 전속 관할법원으로 합니다.</p>

            <div className="mt-10 pt-6 border-t border-gray-700 text-sm text-gray-400">
              <p>상호: 비전행정사사무소</p>
              <p>사업자등록번호: 405-05-54079</p>
              <p>대표: 이원중</p>
              <p>주소: 서울특별시 중구 퇴계로 324, 3층</p>
              <p className="mt-4">본 약관은 2025년 4월 25일부터 시행됩니다.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
