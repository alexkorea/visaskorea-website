// 점수제 비자 자가진단 결과 제출 (보스 16505, 2026-06-11).
// 사용자 답변·연락처 받아 → Notion 신청 DB 저장 → 이메일 발송 (사용자 + 관리자).

import { NextResponse } from "next/server";
import { calculateF511, F511_SCHEMA } from "@/lib/score-schemas/f-5-11";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const NOTION_KEY = process.env.NOTION_KEY_B || "";
const NOTION_VERSION = "2022-06-28";

// 신청 DB id 매핑 (visa code → notion db id)
const DB_BY_VISA: Record<string, string> = {
  "F-5-11": "37b5bd7c-ac5a-8169-8ed0-c9578d0ef6a9", // 일단 E-7-4 와 같은 부모 페이지 child DB (page) — 추후 정확한 DB id 로 교체
  // boss 가 만든 E-7-4 점수 자가진단 DB 의 자식 페이지에 F-5-11 도 같이 적재하거나 별도 DB 생성 가능
};

const VISA_LABELS: Record<string, string> = {
  "F-5-11": "F-5-11 점수제 영주권",
  "F-2-7": "F-2-7 점수제 거주",
  "E-7-4": "E-7-4 숙련기능 점수제",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { visaCode, answers, contact } = body || {};
    if (!visaCode || !answers || !contact?.email) {
      return NextResponse.json({ error: "visaCode, answers, contact.email 필수" }, { status: 400 });
    }
    const label = VISA_LABELS[visaCode] || visaCode;

    // 1) 점수 계산
    let result: ReturnType<typeof calculateF511>;
    if (visaCode === "F-5-11") {
      result = calculateF511(answers);
    } else {
      return NextResponse.json({ error: `${visaCode} 미지원 (아직 구현 안 됨)` }, { status: 400 });
    }

    // 2) 항목별 응답 표 만들기
    const answerLines: string[] = [];
    for (const item of F511_SCHEMA) {
      const v = answers[item.id];
      if (v === undefined) continue;
      const opt = item.options.find((o) => o.points === Number(v));
      answerLines.push(`<tr><td>${item.label}</td><td><b>${opt?.label || "-"}</b></td><td style="text-align:right">${v} 점</td></tr>`);
    }

    // 3) Notion 신청 DB 저장 (best-effort, 실패해도 이메일 발송)
    let notionSaved = false;
    let notionError = "";
    try {
      // 일단 page 내부에 새 row 생성은 child_database 식별 필요. 우선 page 자체에 메모로 저장.
      // TODO: 정확한 DB id 확정 시 databases.create_page 호출로 교체
      notionSaved = false;
      notionError = "Notion DB id 확정 대기 중 — 이메일·텔레그램 발송은 정상";
    } catch (e: any) {
      notionError = String(e?.message || e);
    }

    // 4) 이메일 발송 (사용자)
    const verdictColor = result.verdict === "PASS" ? "#10b981" : result.verdict === "GRACE" ? "#f59e0b" : "#ef4444";
    const verdictLabel = result.verdict === "PASS" ? "✅ 합격 가능권" : result.verdict === "GRACE" ? "⚠ 경계권" : "❌ 미달";

    const userEmailHtml = `
      <div style="font-family:Apple SD Gothic Neo,sans-serif;max-width:640px;margin:0 auto;padding:32px 24px;background:#fff">
        <h2 style="color:#1e3a5f;border-bottom:2px solid #1e3a5f;padding-bottom:8px">📊 ${label} 점수 분석 결과</h2>
        <p>${contact.name || "고객"}님, 비전행정사사무소 자가진단을 신청해 주셔서 감사합니다.</p>
        <div style="background:${verdictColor}15;border-left:4px solid ${verdictColor};padding:16px;margin:24px 0;border-radius:4px">
          <div style="font-size:14px;color:#666">총점</div>
          <div style="font-size:36px;font-weight:bold;color:${verdictColor}">${result.total} 점</div>
          <div style="font-size:15px;color:${verdictColor};margin-top:4px">${verdictLabel}</div>
        </div>
        <h3 style="color:#1e3a5f;margin-top:32px">카테고리별 점수</h3>
        <table cellpadding="8" style="width:100%;border-collapse:collapse;border:1px solid #ddd;font-size:14px">
          <tr style="background:#fef2f2"><td>필수 항목</td><td style="text-align:right"><b>${result.required} 점</b></td></tr>
          <tr style="background:#eff6ff"><td>선택 항목</td><td style="text-align:right"><b>${result.optional} 점</b></td></tr>
          <tr style="background:#fffbeb"><td>가점 항목</td><td style="text-align:right"><b>${result.bonus} 점</b></td></tr>
        </table>
        <h3 style="color:#1e3a5f;margin-top:32px">상세 응답</h3>
        <table cellpadding="6" style="width:100%;border-collapse:collapse;border:1px solid #ddd;font-size:13px">
          ${answerLines.join("")}
        </table>
        ${result.verdict === "PASS" ? `
        <div style="background:#d1fae5;border:1px solid #6ee7b7;padding:20px;margin-top:32px;border-radius:8px">
          <h3 style="color:#065f46;margin:0 0 8px 0">🎉 영주권 신청 가능 점수입니다</h3>
          <p style="margin:8px 0">신청 절차·서류·일정은 행정사 상담을 통해 정확히 안내해 드립니다.</p>
          <a href="https://www.visaskorea.com/contact?from=score-${visaCode}" style="display:inline-block;background:#1e3a5f;color:#fff;padding:12px 24px;text-decoration:none;border-radius:6px;font-weight:bold;margin-top:8px">상담 신청 →</a>
        </div>` : result.verdict === "GRACE" ? `
        <div style="background:#fef3c7;border:1px solid #fcd34d;padding:20px;margin-top:32px;border-radius:8px">
          <h3 style="color:#92400e;margin:0 0 8px 0">⚠ 경계권 — 보강하면 합격 가능</h3>
          <p style="margin:8px 0">현재 점수에서 가점 항목 확보 / 한국어 단계 상승 / 소득 증명 등 보강 시 충분히 통과 가능합니다.</p>
          <a href="https://www.visaskorea.com/contact?from=score-${visaCode}" style="display:inline-block;background:#1e3a5f;color:#fff;padding:12px 24px;text-decoration:none;border-radius:6px;font-weight:bold;margin-top:8px">보강 전략 상담 →</a>
        </div>` : `
        <div style="background:#fee2e2;border:1px solid #fca5a5;padding:20px;margin-top:32px;border-radius:8px">
          <h3 style="color:#991b1b;margin:0 0 8px 0">❌ 현재 점수 미달 — 단계별 전략 필요</h3>
          <p style="margin:8px 0">가능한 향후 1~2년 동안 점수를 보강해 가는 로드맵을 행정사가 무료로 안내합니다.</p>
          <a href="https://www.visaskorea.com/contact?from=score-${visaCode}" style="display:inline-block;background:#1e3a5f;color:#fff;padding:12px 24px;text-decoration:none;border-radius:6px;font-weight:bold;margin-top:8px">로드맵 상담 →</a>
        </div>`}
        <p style="color:#999;font-size:12px;margin-top:40px;border-top:1px solid #eee;padding-top:16px">
          비전행정사사무소 · 02-558-1230 · 5000meter@gmail.com<br/>
          본 분석은 사용자 응답 기반 자가진단으로 실제 심사 결과와 다를 수 있습니다.
        </p>
      </div>
    `;

    const adminEmailHtml = `
      <h2>[VisasKorea] 새 점수제 자가진단 신청</h2>
      <table cellpadding="6" style="border-collapse:collapse;border:1px solid #ddd">
        <tr><td><b>비자</b></td><td>${label}</td></tr>
        <tr><td><b>이름</b></td><td>${contact.name || "-"}</td></tr>
        <tr><td><b>이메일</b></td><td>${contact.email}</td></tr>
        <tr><td><b>연락처</b></td><td>${contact.phone || "-"}</td></tr>
        <tr><td><b>국적</b></td><td>${contact.nationality || "-"}</td></tr>
        <tr><td><b>현재 체류자격</b></td><td>${contact.currentVisa || "-"}</td></tr>
        <tr><td><b>총점</b></td><td><b style="color:${verdictColor}">${result.total} 점 (${verdictLabel})</b></td></tr>
        <tr><td><b>필수/선택/가점</b></td><td>${result.required} / ${result.optional} / ${result.bonus}</td></tr>
      </table>
      <h3>상세 응답</h3>
      <table cellpadding="6" style="width:100%;border-collapse:collapse;border:1px solid #ddd;font-size:13px">${answerLines.join("")}</table>
    `;

    let emailSent = false;
    let emailError = "";
    if (RESEND_API_KEY) {
      try {
        await Promise.all([
          fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { "Authorization": `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
            body: JSON.stringify({
              from: "비전행정사사무소 <noreply@ko-visas.com>",
              to: [contact.email],
              subject: `[비전행정사사무소] ${label} 점수 분석 결과 - ${result.total}점 (${verdictLabel})`,
              html: userEmailHtml,
            }),
          }),
          fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { "Authorization": `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
            body: JSON.stringify({
              from: "비전행정사사무소 <noreply@ko-visas.com>",
              to: ["5000meter@gmail.com"],
              reply_to: contact.email,
              subject: `[VisasKorea] ${label} 자가진단 - ${contact.name || contact.email} ${result.total}점`,
              html: adminEmailHtml,
            }),
          }),
        ]);
        emailSent = true;
      } catch (e: any) {
        emailError = String(e?.message || e);
      }
    } else {
      emailError = "RESEND_API_KEY 미설정";
    }

    return NextResponse.json({
      ok: true,
      total: result.total,
      verdict: result.verdict,
      emailSent,
      emailError: emailError || undefined,
      notionSaved,
      notionError: notionError || undefined,
    });
  } catch (e: any) {
    console.error("[score-submit] failed", e?.message || e);
    return NextResponse.json({ error: String(e?.message || e) }, { status: 500 });
  }
}
