"use client"

import { useState } from "react"
import Link from "next/link"
import { getQualifierTitle } from "@/lib/visa-qualifier"

const services = [
  { value: "E-7 취업비자", label: "E-7 취업비자", sub: "Work Visa", icon: "💼" },
  { value: "E-6 예술흥행비자", label: "E-6 예술흥행비자", sub: "Entertainment Visa", icon: "🎭" },
  { value: "F-2 거주비자", label: "F-2 거주비자", sub: "Residence Visa", icon: "🏠" },
  { value: "F-5 영주권", label: "F-5 영주권", sub: "Permanent Residency", icon: "🏅" },
  { value: "사범심사", label: "사범심사", sub: "불법체류·강제퇴거·출국명령 등", icon: "⚖️" },
  { value: "체류자격 변경", label: "체류자격 변경", sub: "Status Change", icon: "🔄" },
  { value: "D-9-1 무역경영", label: "D-9-1 무역경영", sub: "Trade Management Visa", icon: "🤝" },
  { value: "D-9-2 설비파견", label: "D-9-2 설비파견", sub: "Export Equipment Visa", icon: "⚙️" },
  { value: "기타", label: "기타", sub: "Other", icon: "💬" },
]

const priorityCountries = [
  { value: "미국", label: "🇺🇸 미국" },
  { value: "중국", label: "🇨🇳 중국" },
  { value: "일본", label: "🇯🇵 일본" },
  { value: "베트남", label: "🇻🇳 베트남" },
  { value: "캐나다", label: "🇨🇦 캐나다" },
  { value: "영국", label: "🇬🇧 영국" },
]

const otherCountries = [
  { value: "뉴질랜드", label: "🇳🇿 뉴질랜드" },
  { value: "대만", label: "🇹🇼 대만" },
  { value: "독일", label: "🇩🇪 독일" },
  { value: "러시아", label: "🇷🇺 러시아" },
  { value: "말레이시아", label: "🇲🇾 말레이시아" },
  { value: "몽골", label: "🇲🇳 몽골" },
  { value: "미얀마", label: "🇲🇲 미얀마" },
  { value: "싱가포르", label: "🇸🇬 싱가포르" },
  { value: "인도", label: "🇮🇳 인도" },
  { value: "인도네시아", label: "🇮🇩 인도네시아" },
  { value: "이탈리아", label: "🇮🇹 이탈리아" },
  { value: "우즈베키스탄", label: "🇺🇿 우즈베키스탄" },
  { value: "캄보디아", label: "🇰🇭 캄보디아" },
  { value: "태국", label: "🇹🇭 태국" },
  { value: "프랑스", label: "🇫🇷 프랑스" },
  { value: "필리핀", label: "🇵🇭 필리핀" },
  { value: "호주", label: "🇦🇺 호주" },
  { value: "홍콩", label: "🇭🇰 홍콩" },
  { value: "기타", label: "기타" },
]

export function ContactForm({ locale = "ko" }: { locale?: string }) {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [inquiryId, setInquiryId] = useState("")
  const [submittedName, setSubmittedName] = useState("")
  const [submittedNationality, setSubmittedNationality] = useState("")

  function toggleService(value: string) {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (selectedServices.length === 0) return
    setStatus("sending")
    const form = e.currentTarget
    const snsType = (form.elements.namedItem("snsType") as HTMLSelectElement).value
    const snsId = (form.elements.namedItem("snsId") as HTMLInputElement).value
    const nameVal = (form.elements.namedItem("name") as HTMLInputElement).value
    const nationalityVal = (form.elements.namedItem("nationality") as HTMLSelectElement).value
    const data = {
      name: nameVal,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
      snsType: snsType || undefined,
      snsId: snsId || undefined,
      nationality: nationalityVal,
      services: selectedServices,
    }
    try {
      const res = await fetch("/api/contact-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        const result = await res.json()
        setInquiryId(result.inquiryId || "")
        setSubmittedName(nameVal)
        setSubmittedNationality(nationalityVal)
        setStatus("sent")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 p-10 shadow-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">상담신청이 접수되었습니다.</h2>
          <p className="text-gray-600 mb-4 text-center">
            영업일 기준 1일 이내에 연락드리겠습니다.
          </p>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 mb-3">더 정확한 상담을 위해 자격 정보를 입력해주시면 담당자가 미리 검토하고 연락드립니다.</p>
            <Link
              href={`/${locale}/contact/step2?service=${encodeURIComponent(selectedServices.join(','))}&inquiryId=${inquiryId}&name=${encodeURIComponent(submittedName)}&nationality=${encodeURIComponent(submittedNationality)}`}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-lg font-semibold transition-colors text-base"
            >
              {getQualifierTitle(selectedServices)} →
            </Link>
            <p className="text-xs text-gray-400 mt-2">약 2분 소요 · 건너뛰셔도 됩니다</p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6 text-left">
            <h3 className="font-bold text-blue-900 text-lg mb-3">비전행정사사무소</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 8년+ 외국인 비자 전문 실무 경험</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> E-7, F-2, F-5 등 다양한 비자 유형 전문</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 한국어·영어·중국어·일본어 다국어 상담</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 가장 빠른 출입국사무소를 찾아 신속 처리</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 서류 준비부터 접수·수령까지 원스톱 대행</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-gray-500">전화:</span>
              <span className="font-medium text-gray-900">02-363-2251</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-gray-500">카카오톡:</span>
              <span className="font-medium text-gray-900">alexkorea</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-gray-500">이메일:</span>
              <span className="font-medium text-gray-900">5000meter@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-2">⚡ 30초 빠른 신청</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이름 <span className="text-red-500">*</span></label>
            <input name="name" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="홍길동" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이메일 <span className="text-red-500">*</span></label>
            <input name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="example@email.com" />
            <p className="text-xs text-gray-400 mt-1">맞춤 상담 양식 링크를 발송해드립니다</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">연락처 (전화번호)</label>
            <input name="contact" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="010-1234-5678" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SNS ID</label>
            <div className="flex gap-2">
              <select name="snsType" className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white">
                <option value="">선택</option>
                <option value="kakaotalk">카카오톡</option>
                <option value="wechat">WeChat</option>
                <option value="line">LINE</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
              <input name="snsId" type="text" className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="SNS ID 입력" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">국적</label>
            <select name="nationality" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white">
              <option value="">선택해주세요</option>
              {priorityCountries.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
              <option disabled>──────────</option>
              {otherCountries.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">희망 업무 <span className="text-red-500">*</span> <span className="text-gray-400 font-normal text-xs">(복수 선택 가능)</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((svc) => (
                <button
                  key={svc.value}
                  type="button"
                  onClick={() => toggleService(svc.value)}
                  className={`relative flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                    selectedServices.includes(svc.value)
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-2xl">{svc.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{svc.label}</div>
                    <div className="text-xs text-gray-500">{svc.sub}</div>
                  </div>
                  {selectedServices.includes(svc.value) && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending" || selectedServices.length === 0}
            className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors text-base"
          >
            {status === "sending" ? "처리 중..." : "신청하기"}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
          )}
        </form>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 text-center">
          <h3 className="font-semibold text-gray-900 mb-1">전화 상담</h3>
          <p className="text-primary text-lg font-medium">02-363-2251</p>
          <p className="text-sm text-gray-500 mt-1">평일 09:30 – 17:30</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 text-center">
          <h3 className="font-semibold text-gray-900 mb-1">카카오톡 상담</h3>
          <p className="text-primary text-lg font-medium">alexkorea</p>
          <p className="text-sm text-gray-500 mt-1">24시간 접수 가능</p>
        </div>
      </div>
    </div>
  )
}
