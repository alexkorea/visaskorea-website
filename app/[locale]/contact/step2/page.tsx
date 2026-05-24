"use client"

import { useState, Suspense } from "react"
import { useSearchParams, useParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

type FieldDef = {
  name: string
  label: string
  type: "text" | "select" | "textarea" | "radio"
  options?: string[]
  placeholder?: string
  required?: boolean
}

const serviceFields: Record<string, FieldDef[]> = {
  "E-7 취업비자": [
    { name: "education", label: "학력", type: "select", options: ["고등학교 졸업", "전문대 졸업", "대학교 졸업", "석사", "박사"], required: true },
    { name: "experience", label: "경력 기간", type: "select", options: ["1년 미만", "1~3년", "3~5년", "5~10년", "10년 이상"], required: true },
    { name: "currentVisa", label: "현재 비자", type: "text", placeholder: "예: D-10, C-3, 없음", required: false },
    { name: "hasEmployer", label: "고용 회사 유무", type: "radio", options: ["예", "아니오", "협의 중"], required: true },
  ],
  "E-6 예술흥행비자": [
    { name: "activityField", label: "활동 분야", type: "select", options: ["연예/음악", "스포츠", "모델", "예술/공연", "기타"], required: true },
    { name: "hasInviter", label: "초청 기관 유무", type: "radio", options: ["예", "아니오"], required: true },
    { name: "contractPeriod", label: "계약 기간", type: "select", options: ["3개월 미만", "3~6개월", "6개월~1년", "1년 이상"], required: false },
  ],
  "F-2 거주비자": [
    { name: "currentVisa", label: "현재 비자", type: "text", placeholder: "예: E-7, D-8, H-2", required: true },
    { name: "stayDuration", label: "한국 체류 기간", type: "select", options: ["1년 미만", "1~3년", "3~5년", "5년 이상"], required: true },
    { name: "pointsScore", label: "점수제 총점 (알면)", type: "text", placeholder: "예: 72점", required: false },
    { name: "koreanAbility", label: "한국어 능력", type: "select", options: ["없음", "TOPIK 1~2급", "TOPIK 3~4급", "TOPIK 5~6급", "사회통합프로그램 이수"], required: false },
  ],
  "F-5 영주권": [
    { name: "currentVisa", label: "현재 비자", type: "text", placeholder: "예: F-2, E-7, D-8", required: true },
    { name: "stayDuration", label: "한국 체류 기간", type: "select", options: ["1년 미만", "1~3년", "3~5년", "5년 이상"], required: true },
    { name: "income", label: "소득", type: "select", options: ["3,000만 원 미만", "3,000만 ~ 5,000만 원", "5,000만 ~ 1억 원", "1억 원 이상"], required: true },
    { name: "koreanAbility", label: "한국어 능력", type: "select", options: ["없음", "TOPIK 1~2급", "TOPIK 3~4급", "TOPIK 5~6급", "사회통합프로그램 이수"], required: false },
    { name: "criminalRecord", label: "범죄 이력", type: "radio", options: ["없음", "있음"], required: true },
  ],
  "사범심사 대응": [
    { name: "caseType", label: "사건 유형", type: "select", options: ["음주운전", "폭행", "성범죄", "체류위반(불법체류)", "기타"], required: true },
    { name: "currentVisa", label: "현재 비자", type: "text", placeholder: "예: E-7, F-2", required: true },
    { name: "dispositionStatus", label: "처분 상태", type: "radio", options: ["통보받음", "진행 중", "완료"], required: true },
    { name: "urgency", label: "긴급도", type: "radio", options: ["매우 긴급", "보통", "여유 있음"], required: true },
  ],
  "체류자격 변경": [
    { name: "currentVisa", label: "현재 비자", type: "text", placeholder: "예: E-7, D-10", required: true },
    { name: "desiredVisa", label: "변경 희망 비자", type: "text", placeholder: "예: F-2, F-5", required: true },
    { name: "changeReason", label: "변경 사유", type: "text", placeholder: "예: 이직, 결혼, 투자", required: true },
  ],
  "기타": [
    { name: "inquiry", label: "문의 내용", type: "textarea", placeholder: "궁금하신 내용을 자유롭게 작성해주세요.", required: true },
  ],
}

function getFieldsForServices(serviceList: string[]): { service: string; fields: FieldDef[] }[] {
  const sections: { service: string; fields: FieldDef[] }[] = []
  const usedFieldNames = new Set<string>()

  for (const svc of serviceList) {
    const allFields = serviceFields[svc] || serviceFields["기타"]
    const uniqueFields = allFields.filter((f) => {
      if (usedFieldNames.has(f.name)) return false
      usedFieldNames.add(f.name)
      return true
    })
    if (uniqueFields.length > 0) {
      sections.push({ service: svc, fields: uniqueFields })
    }
  }

  return sections
}

function Step2Form() {
  const searchParams = useSearchParams()
  const params = useParams()
  const locale = (params?.locale as string) || "ko"
  const dict = getDictionary(locale as Locale)
  const serviceParam = searchParams.get("service") || ""
  const inquiryId = searchParams.get("inquiryId") || ""
  const step1Name = searchParams.get("name") || ""
  const step1Nationality = searchParams.get("nationality") || ""
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [formData, setFormData] = useState<Record<string, string>>({})

  const serviceList = serviceParam.split(",").map((s) => decodeURIComponent(s).trim()).filter(Boolean)
  const sections = getFieldsForServices(serviceList.length > 0 ? serviceList : ["기타"])
  const serviceLabel = serviceList.length > 0 ? serviceList.join(" / ") : "기타"

  function updateField(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const additionalMessage = (form.elements.namedItem("additionalMessage") as HTMLTextAreaElement)?.value || ""
    try {
      const res = await fetch("/api/contact-step2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inquiryId, service: serviceLabel, details: { ...formData }, additionalMessage }),
      })
      if (res.ok) setStatus("sent")
      else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <main className="min-h-screen flex flex-col">
        <Header locale={locale as Locale} dict={dict} />
        <section className="py-24 flex-1">
          <div className="max-w-xl mx-auto px-6 text-center">
            <div className="bg-white rounded-xl border border-gray-200 p-10 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">상담 신청이 완료되었습니다</h2>
              <p className="text-gray-600 mb-6">영업일 기준 1일 이내 연락드리겠습니다.</p>
              <div className="bg-gray-50 rounded-lg p-5 mb-6 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">전화:</span>
                  <span className="font-medium text-gray-900">02-363-2251</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">카카오톡:</span>
                  <span className="font-medium text-gray-900">alexkorea</span>
                </div>
              </div>
              <Link href={`/${locale}`} className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 h-11 rounded-lg font-semibold transition-colors">
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
        <Footer locale={locale as Locale} dict={dict} />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header locale={locale as Locale} dict={dict} />
      <section className="py-16 flex-1">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</div>
              <span className="text-sm font-medium text-gray-900">기본 정보</span>
            </div>
            <div className="w-8 h-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</div>
              <span className="text-sm font-medium text-gray-900">상세 정보</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            {(step1Name || step1Nationality) && (
              <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-4 text-sm text-blue-800 flex flex-wrap gap-3">
                {step1Name && <span>👤 <strong>{step1Name}</strong>님</span>}
                {step1Nationality && <span>🌏 국적: <strong>{step1Nationality}</strong></span>}
              </div>
            )}
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {serviceList.map((svc) => (
                <span key={svc} className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{svc}</span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">상세 정보 입력</h2>
            <p className="text-sm text-gray-500 mb-6">선택하신 서비스에 맞는 추가 정보를 입력해주세요.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {sections.map((section, sectionIdx) => (
                <div key={section.service}>
                  {sections.length > 1 && (
                    <div className={sectionIdx > 0 ? "mt-6 pt-6 border-t border-gray-200" : ""}>
                      <h3 className="text-sm font-semibold text-primary mb-4">{section.service}</h3>
                    </div>
                  )}
                  {section.fields.map((field) => (
                    <div key={field.name} className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.type === "text" && (
                        <input type="text" required={field.required} placeholder={field.placeholder} value={formData[field.name] || ""} onChange={(e) => updateField(field.name, e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                      )}
                      {field.type === "select" && (
                        <select required={field.required} value={formData[field.name] || ""} onChange={(e) => updateField(field.name, e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white">
                          <option value="">선택해주세요</option>
                          {field.options?.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                        </select>
                      )}
                      {field.type === "radio" && (
                        <div className="flex flex-wrap gap-3 mt-1">
                          {field.options?.map((opt) => (
                            <label key={opt} className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all text-sm ${formData[field.name] === opt ? "border-primary bg-primary/5 text-primary" : "border-gray-200 hover:border-gray-300 text-gray-700"}`}>
                              <input type="radio" name={field.name} value={opt} checked={formData[field.name] === opt} onChange={(e) => updateField(field.name, e.target.value)} className="sr-only" required={field.required} />
                              {opt}
                            </label>
                          ))}
                        </div>
                      )}
                      {field.type === "textarea" && (
                        <textarea required={field.required} placeholder={field.placeholder} rows={5} value={formData[field.name] || ""} onChange={(e) => updateField(field.name, e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none" />
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">추가 메시지 <span className="text-gray-400 font-normal">(선택사항)</span></label>
                <textarea name="additionalMessage" rows={3} placeholder="추가적으로 전달하고 싶은 내용이 있으시면 작성해주세요." className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none" />
              </div>

              <button type="submit" disabled={status === "sending"} className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/40 text-white font-semibold py-3 rounded-lg transition-colors text-base">
                {status === "sending" ? "전송 중..." : "상담 신청 완료"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">전송에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해주세요.</p>
              )}
              <p className="text-xs text-gray-400 text-center">제출하신 정보는 상담 목적으로만 사용됩니다.</p>
            </form>
          </div>

          <div className="mt-4 text-center">
            <Link href={`/${locale}/contact`} className="text-sm text-gray-500 hover:text-primary transition-colors">
              ← 이전 단계로 돌아가기
            </Link>
          </div>
        </div>
      </section>
      <Footer locale={locale as Locale} dict={dict} />
    </main>
  )
}

export default function Step2Page() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <section className="py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4" />
              <div className="h-4 bg-gray-200 rounded w-64 mx-auto" />
            </div>
          </div>
        </section>
      </main>
    }>
      <Step2Form />
    </Suspense>
  )
}
