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
}

export function ContactForm({ dict, otherLabel }: ContactFormProps) {
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
        <h3 className="text-xl font-semibold">상담 신청이 접수되었습니다!</h3>
        <p className="mt-2 text-muted-foreground">빠른 시일 내에 연락드리겠습니다.</p>
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
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
        >
          <option value="">{dict.contact.service}</option>
          <option value="visa">{dict.common.visa}</option>
          <option value="business">{dict.common.business}</option>
          <option value="other">{otherLabel}</option>
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
        {status === "sending" ? "전송 중..." : dict.contact.submit}
      </Button>
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">전송에 실패했습니다. 직접 전화 또는 이메일로 문의해주세요.</p>
      )}
    </form>
  )
}
