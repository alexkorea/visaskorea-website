import { NextResponse } from "next/server"

const NOTION_KEY = process.env.NOTION_CRM_KEY || "' + (process.env.NOTION_CRM_KEY || '') + '"
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ""
const TELEGRAM_CHAT_ID = "5533847195"

async function notionReq(endpoint: string, method: string, body?: any) {
  const res = await fetch(`https://api.notion.com/v1/${endpoint}`, {
    method,
    headers: {
      "Authorization": `Bearer ${NOTION_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  return res.json()
}

function formatDetailsForDisplay(service: string, details: Record<string, string>, additionalMessage?: string): string {
  const fieldLabels: Record<string, string> = {
    nationality: "국적", education: "학력", experience: "경력 기간",
    currentVisa: "현재 비자", hasEmployer: "고용 회사 유무",
    activityField: "활동 분야", hasInviter: "초청 기관 유무", contractPeriod: "계약 기간",
    stayDuration: "한국 체류 기간", pointsScore: "점수제 총점", koreanAbility: "한국어 능력",
    income: "소득", criminalRecord: "범죄 이력",
    caseType: "사건 유형", dispositionStatus: "처분 상태", urgency: "긴급도",
    desiredVisa: "변경 희망 비자", changeReason: "변경 사유",
    inquiry: "문의 내용",
  }

  let text = `[VisasKorea] 상세 상담 정보\n\n`
  text += `서비스: ${service}\n`
  text += `────────────\n`

  for (const [key, value] of Object.entries(details)) {
    if (value) {
      const label = fieldLabels[key] || key
      text += `${label}: ${value}\n`
    }
  }

  if (additionalMessage) {
    text += `\n추가 메시지:\n${additionalMessage}`
  }

  return text
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { inquiryId, service, details, additionalMessage } = body

    if (!service || !details) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    const detailsSummary = Object.entries(details as Record<string, string>)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join(" | ")

    const fullSummary = additionalMessage
      ? `${detailsSummary} | 추가메시지: ${additionalMessage}`
      : detailsSummary

    const updatePromise = (async () => {
      if (inquiryId && NOTION_KEY) {
        try {
          await notionReq(`pages/${inquiryId}`, "PATCH", {
            properties: {
              "Form Type": { select: { name: "consultation_complete" } },
              "Quote Answers Summary": {
                rich_text: [{ text: { content: fullSummary.substring(0, 2000) } }],
              },
              "Message": {
                rich_text: [{ text: { content: (additionalMessage || "").substring(0, 2000) } }],
              },
            },
          })
        } catch (err) {
          console.error("Notion update error:", err)
        }
      }
    })()

    const telegramText = formatDetailsForDisplay(service, details, additionalMessage)
    const telegramPromise = fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: telegramText }),
      }
    ).catch((err) => console.error("Telegram error:", err))

    await Promise.all([updatePromise, telegramPromise])

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact step2 error:", error)
    return NextResponse.json({ ok: false, error: "Failed to process inquiry" }, { status: 500 })
  }
}
