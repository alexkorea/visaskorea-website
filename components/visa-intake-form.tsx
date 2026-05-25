"use client"

import { useState, FormEvent } from "react"

interface Props {
  visaSlug: string
  visaLabel: string
}

const VISA_KEYS = ["f-2-7", "f-2", "e-7", "d-8", "d-7"] as const

function getVisaKey(slug: string): string {
  for (const k of VISA_KEYS) {
    if (slug === k) return k
    if (slug.startsWith(k)) return k
    if (slug.includes(k)) return k
  }
  return ""
}

export function VisaIntakeForm({ visaSlug, visaLabel }: Props) {
  const vk = getVisaKey(visaSlug)

  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [nationality, setNationality] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  // F-2
  const [currentVisaF2, setCurrentVisaF2] = useState("")
  const [periodF2, setPeriodF2] = useState("")
  const [subTypeF2, setSubTypeF2] = useState("")

  // E-7
  const [currentVisaE7, setCurrentVisaE7] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [educationE7, setEducationE7] = useState("")
  const [employer, setEmployer] = useState("")

  // D-8
  const [investAmount, setInvestAmount] = useState("")
  const [bizType, setBizType] = useState("")
  const [existingCo, setExistingCo] = useState("")

  // D-7
  const [parentCo, setParentCo] = useState("")
  const [koreanEntity, setKoreanEntity] = useState("")
  const [position, setPosition] = useState("")
  const [postingPeriod, setPostingPeriod] = useState("")

  // F-2-7
  const [currentVisaF27, setCurrentVisaF27] = useState("")
  const [ageGroup, setAgeGroup] = useState("")
  const [educationF27, setEducationF27] = useState("")
  const [topik, setTopik] = useState("")
  const [income, setIncome] = useState("")

  function buildMessage(): string {
    const parts: string[] = []
    if (vk === "f-2") {
      if (currentVisaF2) parts.push(`현재비자: ${currentVisaF2}`)
      if (periodF2) parts.push(`한국거주기간: ${periodF2}`)
      if (subTypeF2) parts.push(`F-2신청유형: ${subTypeF2}`)
    } else if (vk === "e-7") {
      if (currentVisaE7) parts.push(`현재비자: ${currentVisaE7}`)
      if (jobTitle) parts.push(`희망직종: ${jobTitle}`)
      if (educationE7) parts.push(`최종학력: ${educationE7}`)
      if (employer) parts.push(`고용업체: ${employer}`)
    } else if (vk === "d-8") {
      if (investAmount) parts.push(`투자예정금액: ${investAmount}`)
      if (bizType) parts.push(`사업업종: ${bizType}`)
      if (existingCo) parts.push(`기존법인여부: ${existingCo}`)
    } else if (vk === "d-7") {
      if (parentCo) parts.push(`본국회사: ${parentCo}`)
      if (koreanEntity) parts.push(`한국법인/지점: ${koreanEntity}`)
      if (position) parts.push(`직책: ${position}`)
      if (postingPeriod) parts.push(`파견기간: ${postingPeriod}`)
    } else if (vk === "f-2-7") {
      if (currentVisaF27) parts.push(`현재비자: ${currentVisaF27}`)
      if (ageGroup) parts.push(`나이대: ${ageGroup}`)
      if (educationF27) parts.push(`최종학력: ${educationF27}`)
      if (topik) parts.push(`TOPIK: ${topik}`)
      if (income) parts.push(`연간소득: ${income}`)
    }
    if (message.trim()) parts.push(`추가문의: ${message.trim()}`)
    return parts.join(" | ")
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !contact.trim()) return
    setStatus("loading")
    try {
      const res = await fetch("/api/contact-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          email: email.trim(),
          nationality: nationality.trim(),
          services: [visaLabel],
          message: buildMessage(),
          source: "visa-intake-form",
          visaSlug,
        }),
      })
      if (!res.ok) throw new Error("fail")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const inp = "h-10 w-full rounded-lg border border-blue-200 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
  const sel = "h-10 w-full rounded-lg border border-blue-200 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
  const lbl = "block text-xs font-semibold text-blue-800 mb-1"

  if (status === "success") {
    return (
      <div className="my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6 text-center">
        <p className="text-lg font-bold text-blue-800">상담 신청 완료!</p>
        <p className="mt-2 text-sm text-blue-600">영업일 기준 1일 이내 담당자가 연락드립니다.</p>
      </div>
    )
  }

  return (
    <div className="my-8 rounded-xl border-2 border-blue-100 bg-blue-50/60 p-6 md:p-8">
      <h3 className="mb-5 text-lg font-bold text-blue-900">
        {visaLabel} 무료 상담 신청
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Common fields */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className={lbl}>이름 *</label>
            <input type="text" required placeholder="홍길동" value={name} onChange={e => setName(e.target.value)} className={inp} />
          </div>
          <div>
            <label className={lbl}>연락처 *</label>
            <input type="tel" required placeholder="010-0000-0000" value={contact} onChange={e => setContact(e.target.value)} className={inp} />
          </div>
          <div>
            <label className={lbl}>이메일</label>
            <input type="email" placeholder="example@email.com" value={email} onChange={e => setEmail(e.target.value)} className={inp} />
          </div>
          <div>
            <label className={lbl}>국적 *</label>
            <input type="text" required placeholder="중국, 미국, 베트남..." value={nationality} onChange={e => setNationality(e.target.value)} className={inp} />
          </div>
        </div>

        {/* F-2 specific */}
        {vk === "f-2" && (
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className={lbl}>현재 체류자격</label>
              <input type="text" placeholder="E-7, D-8 등" value={currentVisaF2} onChange={e => setCurrentVisaF2(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>한국 거주 기간</label>
              <select value={periodF2} onChange={e => setPeriodF2(e.target.value)} className={sel}>
                <option value="">선택</option>
                <option>1년 미만</option>
                <option>1~3년</option>
                <option>3~5년</option>
                <option>5년 이상</option>
              </select>
            </div>
            <div>
              <label className={lbl}>신청 유형</label>
              <select value={subTypeF2} onChange={e => setSubTypeF2(e.target.value)} className={sel}>
                <option value="">선택</option>
                <option>결혼 이민 (F-2-1)</option>
                <option>점수제 (F-2-7)</option>
                <option>기타 장기거주</option>
              </select>
            </div>
          </div>
        )}

        {/* E-7 specific */}
        {vk === "e-7" && (
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className={lbl}>현재 체류자격</label>
              <input type="text" placeholder="D-10, D-4 등" value={currentVisaE7} onChange={e => setCurrentVisaE7(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>희망 직종</label>
              <input type="text" placeholder="IT개발자, 회계사 등" value={jobTitle} onChange={e => setJobTitle(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>최종 학력</label>
              <select value={educationE7} onChange={e => setEducationE7(e.target.value)} className={sel}>
                <option value="">선택</option>
                <option>전문학사</option>
                <option>학사</option>
                <option>석사</option>
                <option>박사</option>
              </select>
            </div>
            <div>
              <label className={lbl}>고용 예정 업체</label>
              <input type="text" placeholder="회사명 (옵션)" value={employer} onChange={e => setEmployer(e.target.value)} className={inp} />
            </div>
          </div>
        )}

        {/* D-8 specific */}
        {vk === "d-8" && (
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className={lbl}>투자 예정 금액</label>
              <select value={investAmount} onChange={e => setInvestAmount(e.target.value)} className={sel}>
                <option value="">선택</option>
                <option>1억 원 미만</option>
                <option>1억~3억 원</option>
                <option>3억~5억 원</option>
                <option>5억 원 이상</option>
              </select>
            </div>
            <div>
              <label className={lbl}>사업 업종</label>
              <input type="text" placeholder="무역, IT, 음식업 등" value={bizType} onChange={e => setBizType(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>법인 설립 여부</label>
              <select value={existingCo} onChange={e => setExistingCo(e.target.value)} className={sel}>
                <option value="">선택</option>
                <option>신규 설립 예정</option>
                <option>기존 법인 있음</option>
                <option>지점 설치 예정</option>
              </select>
            </div>
          </div>
        )}

        {/* D-7 specific */}
        {vk === "d-7" && (
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className={lbl}>본국 회사명</label>
              <input type="text" placeholder="해외 본사명" value={parentCo} onChange={e => setParentCo(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>한국 법인/지점명</label>
              <input type="text" placeholder="없으면 '미설립'" value={koreanEntity} onChange={e => setKoreanEntity(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>직책</label>
              <input type="text" placeholder="지점장, 이사 등" value={position} onChange={e => setPosition(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>예정 파견 기간</label>
              <select value={postingPeriod} onChange={e => setPostingPeriod(e.target.value)} className={sel}>
                <option value="">선택</option>
                <option>1년 미만</option>
                <option>1~2년</option>
                <option>2~3년</option>
                <option>3년 이상</option>
              </select>
            </div>
          </div>
        )}

        {/* F-2-7 specific */}
        {vk === "f-2-7" && (
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className={lbl}>현재 체류자격</label>
              <input type="text" placeholder="E-7, D-8 등" value={currentVisaF27} onChange={e => setCurrentVisaF27(e.target.value)} className={inp} />
            </div>
            <div>
              <label className={lbl}>나이대</label>
              <select value={ageGroup} onChange={e => setAgeGroup(e.target.value)} className={sel}>
                <option value="">선택</option>
                <option>25~29세 (25점)</option>
                <option>30~34세 (20점)</option>
                <option>35~39세 (15점)</option>
                <option>40~44세 (10점)</option>
                <option>45세 이상 (5점)</option>
              </select>
            </div>
            <div>
              <label className={lbl}>최종 학력</label>
              <select value={educationF27} onChange={e => setEducationF27(e.target.value)} className={sel}>
                <option value="">선택</option>
                <option>박사 (35점)</option>
                <option>석사 (30점)</option>
                <option>학사 (25점)</option>
                <option>전문학사 (20점)</option>
              </select>
            </div>
            <div>
              <label className={lbl}>TOPIK 급수</label>
              <select value={topik} onChange={e => setTopik(e.target.value)} className={sel}>
                <option value="">선택/해당없음</option>
                <option>6급 (20점)</option>
                <option>5급 (15점)</option>
                <option>4급 (10점)</option>
                <option>3급 (5점)</option>
                <option>없음</option>
              </select>
            </div>
            <div>
              <label className={lbl}>연간 소득 (GNI 대비)</label>
              <select value={income} onChange={e => setIncome(e.target.value)} className={sel}>
                <option value="">선택</option>
                <option>GNI 2배 이상 (20점)</option>
                <option>GNI 1.5~2배 (15점)</option>
                <option>GNI 1~1.5배 (10점)</option>
                <option>GNI 80%~1배 (5점)</option>
              </select>
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label className={lbl}>추가 문의사항</label>
          <textarea
            placeholder="궁금하신 점을 자유롭게 작성해 주세요."
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="h-11 w-full rounded-lg bg-blue-600 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-60 sm:w-auto sm:px-12"
        >
          {status === "loading" ? "전송 중..." : "무료 상담 신청"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600">전송에 실패했습니다. 다시 시도해주세요.</p>
        )}
      </form>
    </div>
  )
}
