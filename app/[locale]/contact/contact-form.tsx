"use client"

import { useState, useRef, useEffect } from "react"

const SERVICE_GROUPS = [
  {
    group: "비자취득",
    options: [
      "D-7-1 주재 (외국기업 한국지점)",
      "D-7-2 국내본사 해외지사 인력 전입",
      "D-8 기업투자",
      "D-9-1 무역경영",
      "D-9-2 설비파견",
      "E-6 예술흥행",
      "E-7 특정활동",
      "F-2 거주비자 (F-2-7 제외)",
      "F-2-7 거주(점수제)",
      "F-4 재외동포( 거소증 )",
      "F-5 영주권",
      "F-6 결혼이민",
      "국적회복",
    ],
  },
  {
    group: "연장",
    options: [
      "D-7-1 주재 연장",
      "D-7-2 주재 연장",
      "D-8 기업투자 연장",
      "D-9-1 무역경영 연장",
      "D-9-2 설비파견 연장",
      "E-6 예술흥행 연장",
      "E-7 특정활동 연장",
      "F-2 거주비자 연장",
      "F-2-7 거주 연장",
      "F-4 재외동포 연장(거소증)",
      "F-5 영주권 갱신",
      "F-6 결혼이민 연장",
    ],
  },
  {
    group: "법인업무",
    options: [
      "외국법인 한국연락사무소",
      "외국법인 한국지점설치",
      "외국법인 폐업",
      "외국인직접투자(FDI) 법인",
    ],
  },
  {
    group: "사범심사",
    options: [
      "사범심사",
    ],
  },
  {
    group: "행정",
    options: [
      "기타",
    ],
  },
]

function ServiceDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-left flex justify-between items-center bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none"
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || "희망업무선택부탁드립니다."}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-72 overflow-y-auto">
          <div
            onClick={() => { onChange(""); setOpen(false) }}
            className="px-4 py-2.5 text-sm text-gray-400 hover:bg-gray-50 cursor-pointer"
          >
            희망업무선택부탁드립니다.
          </div>
          {SERVICE_GROUPS.map((group) => (
            <div key={group.group}>
              <div className="px-4 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 border-t border-gray-100">
                {group.group}
              </div>
              {group.options.map((opt) => (
                <div
                  key={opt}
                  onClick={() => { onChange(opt); setOpen(false) }}
                  className={`px-4 py-2 text-sm cursor-pointer pl-6 hover:bg-gray-50 ${value === opt ? "bg-primary/5 text-primary font-medium" : "text-gray-700"}`}
                >
                  {opt}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function ContactForm({ locale = "ko" }: { locale?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [selectedService, setSelectedService] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const contact = (form.elements.namedItem("contact") as HTMLInputElement).value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

    try {
      const res = await fetch("/api/contact-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, contact,
          services: selectedService ? [selectedService] : ["기타"],
          message,
        }),
      })
      if (res.ok) {
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
        <div className="bg-white rounded-xl border border-gray-200 p-10 shadow-sm text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">상담 신청이 접수되었습니다</h2>
          <p className="text-gray-600 mb-6">영업일 기준 1일 이내에 연락드리겠습니다.</p>
          <div className="bg-gray-50 rounded-lg p-5 space-y-2 text-sm">
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-500">전화:</span>
              <span className="font-medium text-gray-900">02-363-2251</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-500">카카오톡:</span>
              <span className="font-medium text-gray-900">alexkorea</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-500">이메일:</span>
              <span className="font-medium text-gray-900">5000meter@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-1">문의하기 — VISAS KOREA · 비전행정사사무소</h2>
        <p className="text-sm text-gray-500 mb-6">외국인 비자·인허가·법인설립 전문. 평일 09:30–18:30 KST 회신.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이름 <span className="text-red-500">*</span></label>
            <input name="name" type="text" required className={inputClass} placeholder="홍길동" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이메일 <span className="text-red-500">*</span></label>
            <input name="email" type="email" required className={inputClass} placeholder="example@email.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">연락처 (휴대폰) <span className="text-red-500">*</span></label>
            <input name="contact" type="text" required className={inputClass} placeholder="010-1234-5678" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">희망 업무 <span className="text-gray-400 font-normal text-xs">(선택)</span></label>
            <ServiceDropdown value={selectedService} onChange={setSelectedService} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용 <span className="text-red-500">*</span></label>
            <textarea name="message" required rows={5}
              placeholder="어떤 도움이 필요하신지 자세히 적어주세요."
              className={inputClass + " resize-none"} />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors text-base"
          >
            {status === "sending" ? "처리 중..." : "무료 상담 신청하기"}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
          )}
          <p className="text-xs text-gray-400 text-center">제출하신 정보는 상담 목적으로만 사용됩니다.</p>
        </form>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
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
