"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ContactFormProps {
  dict: {
    contact: {
      name: string
      email: string
      phone: string
      company: string
      service: string
      message: string
      submit: string
    }
    common: {
      visa: string
      business: string
    }
  }
  otherLabel: string
  locale?: string
}

const serviceOptions: Record<string, { value: string; label: string }[]> = {
  ko: [
    { value: "d8", label: "D-8 기업투자비자" },
    { value: "d7", label: "D-7 주재원비자" },
    { value: "e7", label: "E-7 특정활동비자 (취업)" },
    { value: "e9", label: "E-9 비전문취업비자" },
    { value: "f2", label: "F-2 거주비자 (점수제)" },
    { value: "f4", label: "F-4 재외동포비자" },
    { value: "f5", label: "F-5 영주권" },
    { value: "f6", label: "F-6 결혼이민비자" },
    { value: "h2", label: "H-2 방문취업비자" },
    { value: "extension", label: "체류기간 연장" },
    { value: "change", label: "체류자격 변경" },
    { value: "fdi", label: "외국인투자법인 설립" },
    { value: "branch", label: "지사/연락사무소 설치" },
    { value: "other", label: "기타" },
  ],
  en: [
    { value: "d8", label: "D-8 Corporate Investment Visa" },
    { value: "d7", label: "D-7 Intra-company Transfer Visa" },
    { value: "e7", label: "E-7 Work Visa (Professionals)" },
    { value: "e9", label: "E-9 Non-professional Work Visa" },
    { value: "f2", label: "F-2 Residence Visa (Points)" },
    { value: "f4", label: "F-4 Overseas Korean Visa" },
    { value: "f5", label: "F-5 Permanent Residency" },
    { value: "f6", label: "F-6 Marriage Immigration Visa" },
    { value: "h2", label: "H-2 Working Visit Visa" },
    { value: "extension", label: "Visa Extension" },
    { value: "change", label: "Status Change" },
    { value: "fdi", label: "Foreign Investment Company Setup" },
    { value: "branch", label: "Branch/Liaison Office Setup" },
    { value: "other", label: "Other" },
  ],
  zh: [
    { value: "d8", label: "D-8 企业投资签证" },
    { value: "d7", label: "D-7 驻在员签证" },
    { value: "e7", label: "E-7 特定活动签证（就业）" },
    { value: "e9", label: "E-9 非专业就业签证" },
    { value: "f2", label: "F-2 居住签证（积分制）" },
    { value: "f4", label: "F-4 海外同胞签证" },
    { value: "f5", label: "F-5 永久居留权" },
    { value: "f6", label: "F-6 结婚移民签证" },
    { value: "h2", label: "H-2 访问就业签证" },
    { value: "extension", label: "签证延期" },
    { value: "change", label: "签证变更" },
    { value: "fdi", label: "外商投资企业设立" },
    { value: "branch", label: "分公司/联络处设立" },
    { value: "other", label: "其他" },
  ],
  ja: [
    { value: "d8", label: "D-8 企業投資ビザ" },
    { value: "d7", label: "D-7 駐在員ビザ" },
    { value: "e7", label: "E-7 特定活動ビザ（就労）" },
    { value: "e9", label: "E-9 非専門就労ビザ" },
    { value: "f2", label: "F-2 居住ビザ（ポイント制）" },
    { value: "f4", label: "F-4 在外同胞ビザ" },
    { value: "f5", label: "F-5 永住権" },
    { value: "f6", label: "F-6 結婚移民ビザ" },
    { value: "h2", label: "H-2 訪問就労ビザ" },
    { value: "extension", label: "ビザ延長" },
    { value: "change", label: "在留資格変更" },
    { value: "fdi", label: "外国人投資法人設立" },
    { value: "branch", label: "支社/連絡事務所設立" },
    { value: "other", label: "その他" },
  ],
}

const successMessages: Record<string, { title: string; subtitle: string }> = {
  ko: { title: "상담 신청이 접수되었습니다!", subtitle: "빠른 시일 내에 연락드리겠습니다." },
  en: { title: "Your inquiry has been submitted!", subtitle: "We will contact you shortly." },
  zh: { title: "您的咨询已提交！", subtitle: "我们将尽快与您联系。" },
  ja: { title: "ご相談が受け付けられました！", subtitle: "早急にご連絡いたします。" },
}

const sendingTexts: Record<string, string> = {
  ko: "전송 중...", en: "Sending...", zh: "发送中...", ja: "送信中...",
}

const errorTexts: Record<string, string> = {
  ko: "전송에 실패했습니다. 직접 전화 또는 이메일로 문의해주세요.",
  en: "Failed to send. Please contact us by phone or email.",
  zh: "发送失败。请通过电话或电子邮件联系我们。",
  ja: "送信に失敗しました。お電話またはメールでお問い合わせください。",
}

export function ContactForm({ dict, otherLabel, locale = "ko" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus("sent")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold">{successMessages[locale]?.title || successMessages.ko.title}</h3>
        <p className="mt-2 text-muted-foreground">{successMessages[locale]?.subtitle || successMessages.ko.subtitle}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{dict.contact.name} *</Label>
          <Input id="name" name="name" required placeholder={dict.contact.name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{dict.contact.email} *</Label>
          <Input id="email" name="email" type="email" required placeholder={dict.contact.email} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">{dict.contact.phone}</Label>
          <Input id="phone" name="phone" placeholder={dict.contact.phone} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{dict.contact.company}</Label>
          <Input id="company" name="company" placeholder={dict.contact.company} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">{dict.contact.service}</Label>
        <select
          id="service"
          name="service"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
        >
          <option value="">{dict.contact.service}</option>
          {(serviceOptions[locale] || serviceOptions.ko).map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{dict.contact.message} *</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground"
          placeholder={dict.contact.message}
        />
      </div>
      <Button type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? (sendingTexts[locale] || sendingTexts.ko) : dict.contact.submit}
      </Button>
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">{errorTexts[locale] || errorTexts.ko}</p>
      )}
    </form>
  )
}
