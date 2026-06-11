"use client";

// 점수제 비자 자가진단 컴포넌트 (보스 16505, 2026-06-11).
// 사용자가 항목별 선택 → 합계 점수 즉시 표시 X
// "내 점수 확인하기" 클릭 → 이름·이메일·연락처 입력 → 신청 DB 저장 + 이메일 발송 → 사이트 2차 방문 유도.

import { useState } from "react";
import type { ScoreItem } from "@/lib/score-schemas/f-5-11";

type Props = {
  visaCode: string; // e.g. "F-5-11"
  schema: ScoreItem[];
  passScore: number;
  title: string;
  description?: string;
};

export function ScoreCalculator({ visaCode, schema, passScore, title, description }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [contact, setContact] = useState({ name: "", email: "", phone: "", nationality: "", currentVisa: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showContact, setShowContact] = useState(false);

  const categories = [
    { key: "required" as const, label: "필수 항목", color: "bg-rose-50 border-rose-200" },
    { key: "optional" as const, label: "선택 항목", color: "bg-blue-50 border-blue-200" },
    { key: "bonus" as const, label: "가점 항목", color: "bg-amber-50 border-amber-200" },
  ];

  const requiredItems = schema.filter((s) => s.required);
  const allRequiredAnswered = requiredItems.every((s) => answers[s.id] !== undefined);

  async function handleSubmit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/score-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visaCode,
          answers,
          contact,
        }),
      });
      const j = await res.json();
      if (!res.ok || j.error) throw new Error(j.error || `HTTP ${res.status}`);
      setSubmitted(true);
    } catch (e: any) {
      setError(`제출 실패: ${e?.message || e}`);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
        <div className="text-3xl mb-2">✅</div>
        <h3 className="text-lg font-bold text-emerald-900 mb-1">신청이 완료되었습니다</h3>
        <p className="text-sm text-emerald-800">
          입력하신 이메일 ({contact.email}) 로 <b>{visaCode} 점수 분석 결과</b>를 발송했습니다.<br/>
          이메일에서 상세 점수 + 보완 항목 + 행정사 상담 신청 링크를 확인하세요.
        </p>
        <p className="text-xs text-emerald-700 mt-3">스팸함도 확인 부탁드립니다.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
        <div className="text-xs text-gray-500 mt-2">
          ⚖️ 합격 기준: <b>총점 {passScore}점 이상</b> · 필수 항목 모두 입력 필수
        </div>
      </div>

      {categories.map((cat) => {
        const items = schema.filter((s) => s.category === cat.key);
        if (items.length === 0) return null;
        return (
          <div key={cat.key} className={`border rounded-lg p-4 ${cat.color}`}>
            <div className="text-sm font-bold text-gray-900 mb-3">{cat.label}</div>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id}>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    {item.label}
                    {item.required && <span className="text-rose-600 ml-1">*</span>}
                  </label>
                  {item.description && <p className="text-xs text-gray-500 mb-1.5">{item.description}</p>}
                  <select
                    value={answers[item.id] ?? ""}
                    onChange={(e) => setAnswers({ ...answers, [item.id]: Number(e.target.value) })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                  >
                    <option value="">선택하세요</option>
                    {item.options.map((opt, i) => (
                      <option key={i} value={opt.points}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {!showContact ? (
        <button
          onClick={() => {
            if (!allRequiredAnswered) {
              setError("필수 항목을 모두 선택해주세요.");
              return;
            }
            setError(null);
            setShowContact(true);
          }}
          className="w-full bg-gray-900 text-white text-sm font-bold rounded-lg px-4 py-3 hover:bg-gray-700"
        >
          📊 내 점수 확인하기 (이메일로 결과 받기)
        </button>
      ) : (
        <div className="border border-gray-200 rounded-lg p-4 space-y-3 bg-gray-50">
          <div className="text-sm font-bold text-gray-900">점수 분석 결과를 받을 이메일을 입력하세요</div>
          <input
            type="text"
            placeholder="이름"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
          <input
            type="email"
            placeholder="이메일 (필수)"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
          <input
            type="tel"
            placeholder="연락처"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="국적"
              value={contact.nationality}
              onChange={(e) => setContact({ ...contact, nationality: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="현재 체류자격 (예: D-8)"
              value={contact.currentVisa}
              onChange={(e) => setContact({ ...contact, currentVisa: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          {error && <div className="text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded p-2">{error}</div>}
          <button
            onClick={handleSubmit}
            disabled={submitting || !contact.email}
            className="w-full bg-rose-600 text-white text-sm font-bold rounded-lg px-4 py-3 hover:bg-rose-700 disabled:opacity-50"
          >
            {submitting ? "전송 중..." : "📨 결과 받기"}
          </button>
          <p className="text-[10px] text-gray-500 text-center leading-relaxed">
            제출 시 비전행정사사무소의 개인정보처리방침에 동의하는 것으로 간주합니다.<br/>
            점수 결과 이메일 + 상담 안내 외 마케팅 발송 X.
          </p>
        </div>
      )}

      {error && !showContact && (
        <div className="text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded p-2">{error}</div>
      )}
    </div>
  );
}
