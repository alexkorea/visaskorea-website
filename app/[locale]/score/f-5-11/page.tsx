// F-5-11 점수제 영주권 자가진단 페이지 (보스 16505, 2026-06-11).

import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScoreCalculator } from "@/components/score-calculator";
import { F511_SCHEMA, F511_PASS_SCORE } from "@/lib/score-schemas/f-5-11";

export const metadata: Metadata = {
  title: "F-5-11 점수제 영주권 점수 자가진단 | 비전행정사사무소",
  description:
    "F-5-11 점수제 영주권 신청 가능 점수를 무료로 자가진단하세요. 나이·학력·한국어·소득·체류기간 등 항목별 점수표 (필수 245 + 선택 205 + 가점 110, 합격 80점) 기반 분석 결과를 이메일로 무료 발송. 비전행정사사무소 전문 행정사 상담.",
  keywords: [
    "F-5-11",
    "F5-11",
    "점수제 영주권",
    "영주권 점수",
    "F-5 영주권 점수",
    "점수제 영주 자가진단",
    "한국 영주권 점수표",
  ],
  alternates: { canonical: "https://www.visaskorea.com/ko/score/f-5-11" },
  openGraph: {
    title: "F-5-11 점수제 영주권 자가진단 | 비전행정사사무소",
    description: "필수 245 + 선택 205 + 가점 110, 합격 80점. 무료 점수 분석 + 보완 전략 이메일 발송.",
    url: "https://www.visaskorea.com/ko/score/f-5-11",
    type: "article",
  },
};

export default function F511ScorePage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        <nav className="text-xs text-gray-500">
          <a href="/ko" className="hover:underline">홈</a> ›{" "}
          <a href="/ko/visa" className="hover:underline">비자</a> ›{" "}
          <span className="text-gray-700">F-5-11 점수제 영주권</span>
        </nav>
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">F-5-11 점수제 영주권 자가진단</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            한국 영주권(F-5) 중 <b>점수제 영주권 (F-5-11)</b> 신청 가능 여부를 무료로 확인하세요.
            나이 / 학력 / 한국어 능력 / 한국 내 체류기간 / 소득 / 자격증 / 사회기여 등{" "}
            <b>14개 항목 점수</b>를 입력하면 비전행정사사무소 전문 행정사가
            분석 결과 + 보완 전략을 무료 이메일로 발송해 드립니다.
          </p>
        </header>

        <section className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
          <h2 className="font-bold text-blue-900 mb-2">📌 F-5-11 점수제 영주권이란?</h2>
          <ul className="list-disc pl-5 space-y-1 text-blue-900">
            <li>국적·체류기간·소득 등 일정 자격을 갖춘 외국인이 점수제로 영주권 부여받는 제도</li>
            <li>합격 기준: <b>총점 {F511_PASS_SCORE}점 이상</b></li>
            <li>점수 구조: <b>필수 245점 + 선택 205점 + 가점 110점</b> (총 560점 만점)</li>
            <li>매년 기준 일부 변동 가능 (출입국·외국인정책본부 매뉴얼 기준)</li>
          </ul>
        </section>

        <ScoreCalculator
          visaCode="F-5-11"
          schema={F511_SCHEMA}
          passScore={F511_PASS_SCORE}
          title="F-5-11 점수 입력"
          description="해당하는 항목별 선택지를 골라주세요. 결과는 입력하신 이메일로 발송됩니다."
        />

        <section className="border-t border-gray-200 pt-6 text-sm text-gray-700 space-y-3">
          <h2 className="text-lg font-bold text-gray-900">📞 영주권 전문 상담</h2>
          <p>
            점수 분석 후 더 정확한 진단·서류 준비·신청 대행이 필요하신 경우{" "}
            <a href="/ko/contact" className="text-blue-700 underline font-medium">행정사 상담 신청</a>{" "}
            을 통해 전문 행정사가 직접 도와드립니다.
          </p>
          <p className="text-xs text-gray-500">
            본 자가진단은 사용자 응답을 기반으로 한 사전 안내용입니다.
            실제 심사는 출입국·외국인정책본부의 종합 판단에 따르며, 본 결과와 다를 수 있습니다.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
