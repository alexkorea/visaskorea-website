"use client"

import { useState, Suspense } from "react"
import { useSearchParams, useParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import { getQualifier, getQualifierTitle, type FieldDef } from "@/lib/visa-qualifier"

function renderField(field: FieldDef, value: string, onChange: (v: string) => void) {
  const base = "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"

  if (field.type === "text") return (
    <input type="text" required={field.required} placeholder={field.placeholder}
      value={value} onChange={e => onChange(e.target.value)} className={base} />
  )
  if (field.type === "number") return (
    <input type="number" required={field.required} placeholder={field.placeholder}
      value={value} onChange={e => onChange(e.target.value)} className={base} />
  )
  if (field.type === "select") return (
    <select required={field.required} value={value} onChange={e => onChange(e.target.value)}
      className={base + " bg-white"}>
      <option value="">선택해주세요</option>
      {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  )
  if (field.type === "radio") return (
    <div className="flex flex-wrap gap-3 mt-1">
      {field.options?.map(opt => (
        <label key={opt} className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all text-sm ${value === opt ? "border-primary bg-primary/5 text-primary font-medium" : "border-gray-200 hover:border-gray-300 text-gray-700"}`}>
          <input type="radio" name={field.name} value={opt} checked={value === opt}
            onChange={e => onChange(e.target.value)} className="sr-only" required={field.required && !value} />
          {opt}
        </label>
      ))}
    </div>
  )
  if (field.type === "textarea") return (
    <textarea required={field.required} placeholder={field.placeholder} rows={5}
      value={value} onChange={e => onChange(e.target.value)}
      className={base + " resize-none"} />
  )
  return null
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

  const serviceList = serviceParam.split(",").map(s => decodeURIComponent(s).trim()).filter(Boolean)

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [formData, setFormData] = useState<Record<string, string>>({})

  function updateField(name: string, value: string) {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Build sections per service (deduplicate field names across services)
  const sections: { service: string; qualifier: ReturnType<typeof getQualifier>; fields: FieldDef[] }[] = []
  const usedFields = new Set<string>()
  for (const svc of (serviceList.length > 0 ? serviceList : ["기타"])) {
    const qualifier = getQualifier(svc)
    const uniqueFields = qualifier.fields.filter(f => {
      if (usedFields.has(f.name)) return false
      usedFields.add(f.name)
      return true
    })
    if (uniqueFields.length > 0) sections.push({ service: svc, qualifier, fields: uniqueFields })
  }

  const pageTitle = getQualifierTitle(serviceList)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const additionalMessage = (form.elements.namedItem("additionalMessage") as HTMLTextAreaElement)?.value || ""
    try {
      const res = await fetch("/api/contact-step2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryId,
          service: serviceList.join(", "),
          details: { ...formData, step1Name, step1Nationality },
          additionalMessage,
        }),
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
              <p className="text-gray-600 mb-6">영업일 기준 1일 이내 담당자가 연락드리겠습니다.</p>
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
          {/* Progress */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">✓</div>
              <span className="text-sm text-gray-500">기본 정보</span>
            </div>
            <div className="w-8 h-px bg-primary" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</div>
              <span className="text-sm font-semibold text-primary">{pageTitle}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            {/* Step1 context */}
            {(step1Name || step1Nationality) && (
              <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-5 text-sm text-blue-800 flex flex-wrap gap-3">
                {step1Name && <span>👤 <strong>{step1Name}</strong>님</span>}
                {step1Nationality && <span>🌏 국적: <strong>{step1Nationality}</strong></span>}
                <span className="flex flex-wrap gap-1">{serviceList.map(s => <span key={s} className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{s}</span>)}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {sections.map((section, idx) => (
                <div key={section.service}>
                  {sections.length > 1 && idx > 0 && <div className="pt-6 mt-6 border-t border-gray-200" />}

                  {/* Purpose-driven section header */}
                  <div className="mb-5">
                    <h2 className="text-lg font-bold text-gray-900 mb-1">{section.qualifier.title}</h2>
                    <p className="text-sm text-gray-500">{section.qualifier.description}</p>
                  </div>

                  {section.fields.map(field => (
                    <div key={field.name} className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.hint && <p className="text-xs text-blue-600 mb-1.5">{field.hint}</p>}
                      {renderField(field, formData[field.name] || "", v => updateField(field.name, v))}
                    </div>
                  ))}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  추가 메시지 <span className="text-gray-400 font-normal text-xs">(선택)</span>
                </label>
                <textarea name="additionalMessage" rows={3}
                  placeholder="추가로 전달하고 싶은 내용을 자유롭게 작성해주세요."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none" />
              </div>

              <button type="submit" disabled={status === "sending"}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/40 text-white font-semibold py-3 rounded-lg transition-colors text-base">
                {status === "sending" ? "전송 중..." : "자격 정보 제출하기"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">전송에 실패했습니다. 전화로 문의해주세요: 02-363-2251</p>
              )}
              <p className="text-xs text-gray-400 text-center">제출하신 정보는 상담 목적으로만 사용됩니다.</p>
            </form>
          </div>

          <div className="mt-4 text-center">
            <Link href={`/${locale}/contact`} className="text-sm text-gray-500 hover:text-primary transition-colors">
              ← 처음으로 돌아가기
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
