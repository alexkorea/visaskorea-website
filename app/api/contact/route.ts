import { NextResponse } from "next/server"
import * as nodemailer from "nodemailer"

const SITE_NAME = "VisasKorea"
const SITE_NAME_KR = "비자스코리아"
const NOTION_KEY = process.env.NOTION_API_KEY || ""
const NOTION_DB = "33d557c9-c8f8-81e7-8c8f-cd36d7abac1f"

async function sendEmail(fields: Record<string, string>, senderName: string, senderEmail: string) {
  const appPassword = process.env.GMAIL_APP_PASSWORD
  if (!appPassword) {
    console.warn("GMAIL_APP_PASSWORD not set — skipping email notification")
    return
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "5000meter@gmail.com",
      pass: appPassword,
    },
  })

  const rows = Object.entries(fields)
    .map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f9f9f9;">${label}</td><td style="padding:8px 12px;border:1px solid #ddd;">${value || "-"}</td></tr>`)
    .join("\n")

  const html = `
    <div style="font-family:'Apple SD Gothic Neo',sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#1a56db;">[${SITE_NAME_KR}] 새 상담 신청</h2>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        ${rows}
      </table>
      <p style="color:#666;font-size:13px;">이 메일은 ${SITE_NAME} 웹사이트 상담 폼에서 자동 발송되었습니다.</p>
    </div>
  `

  await transporter.sendMail({
    from: { name: senderName + " via " + SITE_NAME, address: "5000meter@gmail.com" },
    to: "5000meter@gmail.com",
    replyTo: senderEmail,
    subject: `[${SITE_NAME_KR}] 새 상담 신청 - ${fields["이름"] || "고객"}`,
    html,
  })
}

async function saveToNotion(data: Record<string, string>) {
  if (!NOTION_KEY) {
    console.warn("NOTION_API_KEY not set — skipping Notion")
    return
  }

  const today = new Date().toISOString().slice(0, 10)

  await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${NOTION_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: NOTION_DB },
      properties: {
        "이름": { title: [{ text: { content: data.name || "" } }] },
        "이메일": { email: data.email || null },
        "연락처": { phone_number: data.phone || null },
        "국적": { rich_text: [{ text: { content: data.nationality || "" } }] },
        "현재비자": { rich_text: [{ text: { content: data.currentVisa || "" } }] },
        "거주국가": { rich_text: [{ text: { content: data.country || "" } }] },
        "서비스": data.service ? { select: { name: data.service } } : undefined,
        "메시지": { rich_text: [{ text: { content: data.message || "" } }] },
        "접수일": { date: { start: today } },
        "상태": { select: { name: "신규" } },
      },
    }),
  })
}

async function addToCalendar(data: Record<string, string>) {
  // Google Calendar event creation via n8n or direct API
  // For now, skip - will be handled separately if needed
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, nationality, currentVisa, country, service, message } = body

    const text = `[VisasKorea] 새 상담 문의

이름: ${name || "-"}
이메일: ${email || "-"}
전화번호: ${phone || "-"}
국적: ${nationality || "-"}
현재비자: ${currentVisa || "-"}
거주국가: ${country || "-"}
서비스: ${service || "-"}
메시지: ${message || "-"}`

    // Telegram notification
    const telegramPromise = fetch(
      `https://api.telegram.org/bot8748564690:AAEGsXxcfqrHmGue8lkqUaa2E0Q8CDCY-Eo/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "5533847195",
          text,
        }),
      }
    )

    // Email notification
    const emailPromise = sendEmail({
      "이름": name,
      "이메일": email,
      "전화번호": phone,
      "국적": nationality,
      "현재비자": currentVisa,
      "거주국가": country,
      "서비스": service,
      "메시지": message,
    }, name, email).catch((err) => console.error("Email send error:", err))

    // Notion save
    const notionPromise = saveToNotion({ name, email, phone, nationality, currentVisa, country, service, message })
      .catch((err) => console.error("Notion save error:", err))

    // Notion CRM (unified)
    const { saveToCRM } = await import("@/lib/notion-crm")
    const crmPromise = saveToCRM({
      brand: 'visaskorea', formType: 'contact',
      siteUrl: 'https://www.visaskorea.co.kr/contact',
      name, email, phone, nationality,
      currentVisa, residenceCountry: country,
      serviceRaw: service, message,
      rawPayload: body,
    }).catch((err) => console.error("CRM error:", err))

    await Promise.all([telegramPromise, emailPromise, notionPromise, crmPromise])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    )
  }
}
