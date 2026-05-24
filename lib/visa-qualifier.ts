export type FieldType = "select" | "radio" | "text" | "textarea" | "number"

export type FieldDef = {
  name: string
  label: string
  type: FieldType
  options?: string[]
  placeholder?: string
  required?: boolean
  hint?: string
}

export type QualifierDef = {
  title: string
  description: string
  fields: FieldDef[]
}

export const QUALIFIER_MAP: Record<string, QualifierDef> = {
  // ── F-2-7 점수제 거주비자 ──────────────────────────────────
  "F-2-7 점수제": {
    title: "F-2-7 점수 자가진단",
    description: "점수제 기준(120점 만점 중 80점 이상)에 맞는지 확인합니다.",
    fields: [
      { name: "age", label: "신청일 기준 나이", type: "select", required: true,
        options: ["29세 이하 (25점)", "30~34세 (20점)", "35~39세 (15점)", "40~44세 (10점)", "45~49세 (5점)", "50세 이상 (0점)"] },
      { name: "education", label: "최종 학력", type: "select", required: true,
        options: ["박사 (35점)", "이공계 석사 (33점)", "석사 (30점)", "이공계 학사 (27점)", "학사 (25점)", "전문대졸 (20점)", "고졸 이하 (0점)"] },
      { name: "topik", label: "한국어 능력 / TOPIK", type: "select", required: true,
        options: ["TOPIK 6급 (20점)", "TOPIK 5급 (18점)", "TOPIK 4급 (14점)", "TOPIK 3급 (10점)", "TOPIK 2급 (6점)", "TOPIK 1급 (3점)", "없음 (0점)"] },
      { name: "income", label: "작년 연간 소득 (원)", type: "select", required: true,
        hint: "GNI 대비 소득 점수에 사용됩니다",
        options: ["GNI 3배 이상 (20점)", "GNI 2배~3배 미만 (17점)", "GNI 1.5배~2배 미만 (14점)", "GNI 1배~1.5배 미만 (11점)", "GNI 1배 미만 (8점)", "소득 없음 (0점)"] },
      { name: "stayDuration", label: "국내 계속 체류 기간", type: "select", required: true,
        options: ["5년 이상", "3~5년", "1~3년", "1년 미만"] },
      { name: "domesticDegree", label: "국내 대학 학위 여부", type: "radio", required: true,
        hint: "가점 3점",
        options: ["있음", "없음"] },
      { name: "kip", label: "사회통합프로그램(KIIP) 이수", type: "radio", required: true,
        hint: "5단계 이수 시 가점 5점",
        options: ["5단계 이수", "4단계 이수", "미이수"] },
      { name: "currentVisa", label: "현재 체류자격", type: "text", required: true,
        placeholder: "예: E-7, D-8, H-2" },
    ],
  },

  // ── F-2 거주비자 (일반) ────────────────────────────────────
  "F-2 거주비자": {
    title: "F-2 거주비자 자격 확인",
    description: "현재 체류 상황에서 F-2 거주비자 신청이 가능한지 확인합니다.",
    fields: [
      { name: "currentVisa", label: "현재 체류자격", type: "text", required: true,
        placeholder: "예: E-7, D-8, H-2" },
      { name: "stayDuration", label: "한국 체류 기간", type: "select", required: true,
        options: ["1년 미만", "1~3년", "3~5년", "5년 이상"] },
      { name: "f27Score", label: "F-2-7 점수제 추정 점수 (알면)", type: "text", required: false,
        placeholder: "예: 72점" },
      { name: "koreanAbility", label: "한국어 능력", type: "select", required: false,
        options: ["없음", "TOPIK 1~2급", "TOPIK 3~4급", "TOPIK 5~6급", "사회통합프로그램 이수"] },
      { name: "f2Type", label: "신청 희망 F-2 유형", type: "select", required: true,
        options: ["F-2-7 점수제", "F-2-1 (한국인 배우자)", "F-2-2 (영주권자 배우자)", "F-2-4 (공익사업 투자)", "F-2-6 (첨단과학기술 분야)", "잘 모름"] },
    ],
  },

  // ── F-5 영주권 ─────────────────────────────────────────────
  "F-5 영주권": {
    title: "F-5 영주권 유형 확인",
    description: "현재 상황에 맞는 F-5 영주권 트랙을 파악합니다.",
    fields: [
      { name: "currentVisa", label: "현재 체류자격", type: "text", required: true,
        placeholder: "예: F-2-7, D-8, E-7, F-6" },
      { name: "stayDuration", label: "한국 체류 기간 (합산)", type: "select", required: true,
        options: ["1년 미만", "1~3년", "3~5년", "5~10년", "10년 이상"] },
      { name: "income", label: "연간 소득 수준", type: "select", required: true,
        options: ["GNI(국민총소득) 이상", "GNI 미만", "소득 없음"] },
      { name: "criminalRecord", label: "범죄 이력", type: "radio", required: true,
        options: ["없음", "있음 (경미)", "있음 (중범죄)"] },
      { name: "f5Track", label: "해당되는 F-5 트랙 (알면)", type: "select", required: false,
        options: ["F-5-1 (5년 이상 체류)", "F-5-5 (점수제 거주 후)", "F-5-6 (고액 투자)", "F-5-7 (국가 공헌)", "F-5-8 (특정 분야 박사)", "F-5-9 (첨단과학기술)", "F-5-10 (고령자)", "F-5-11 (기업투자 후)", "F-5-14 (부양 가족)", "잘 모름"] },
    ],
  },

  // ── D-8 기업투자비자 ───────────────────────────────────────
  "D-8 투자비자": {
    title: "D-8 투자 자격 사전 확인",
    description: "D-8 비자 신청을 위한 투자 요건을 확인합니다.",
    fields: [
      { name: "investAmount", label: "한국 법인 투자 금액", type: "select", required: true,
        hint: "외투기업 등록 최소 1억 원 이상",
        options: ["1억 원 이상 (요건 충족)", "5천만~1억 원 미만", "5천만 원 미만", "아직 미투자"] },
      { name: "companyStatus", label: "한국 법인 설립 상태", type: "select", required: true,
        options: ["설립 완료 + FDI 신고 완료", "설립 완료, FDI 신고 전", "설립 진행 중", "아직 미설립"] },
      { name: "businessType", label: "사업 업종", type: "text", required: true,
        placeholder: "예: 무역업, IT서비스, 제조업, 교육업" },
      { name: "role", label: "한국 법인 내 역할", type: "select", required: true,
        options: ["대표이사", "등기임원", "직원", "미정"] },
      { name: "stayPlan", label: "한국 체류 계획", type: "select", required: false,
        options: ["상시 거주 예정", "월 2~3회 방문", "연 수회 방문", "미정"] },
    ],
  },

  // ── D-7 주재원비자 ─────────────────────────────────────────
  "D-7 주재원비자": {
    title: "D-7 주재원 자격 확인",
    description: "본국 회사에서 한국 법인으로 파견 가능 여부를 확인합니다.",
    fields: [
      { name: "overseasCompanyAge", label: "본국(해외) 회사 설립 연수", type: "select", required: true,
        hint: "D-7-1: 외국 본사 파견, D-7-2: 국내 계열사 파견",
        options: ["1년 미만", "1~3년", "3년 이상"] },
      { name: "koreaEntityStatus", label: "한국 내 법인/지사 상태", type: "select", required: true,
        options: ["법인 설립 완료", "지사 설치 완료", "연락사무소 설치", "설립 예정"] },
      { name: "employmentDuration", label: "본국 회사 근무 기간", type: "select", required: true,
        options: ["1년 미만", "1~3년", "3년 이상"] },
      { name: "position", label: "직급", type: "text", required: true,
        placeholder: "예: 부장, 팀장, Manager" },
      { name: "dispatchPeriod", label: "파견 예정 기간", type: "select", required: false,
        options: ["6개월 이하", "6개월~1년", "1~2년", "2년 이상"] },
    ],
  },

  // ── E-7 취업비자 ───────────────────────────────────────────
  "E-7 취업비자": {
    title: "E-7 취업 자격 확인",
    description: "직종별 요건에 맞는지 사전 확인합니다.",
    fields: [
      { name: "occupation", label: "직종 / 업무 분야", type: "text", required: true,
        placeholder: "예: 소프트웨어 개발, 호텔리어, 요리사" },
      { name: "education", label: "최종 학력", type: "select", required: true,
        options: ["박사", "석사", "학사", "전문대졸", "고졸"] },
      { name: "experience", label: "관련 분야 경력", type: "select", required: true,
        options: ["1년 미만", "1~3년", "3~5년", "5~10년", "10년 이상"] },
      { name: "hasEmployer", label: "고용 회사 확보 여부", type: "radio", required: true,
        options: ["계약 완료", "협의 중", "아직 없음"] },
      { name: "currentVisa", label: "현재 비자 (한국 체류 중이면)", type: "text", required: false,
        placeholder: "예: D-10, C-3, 없음" },
    ],
  },

  // ── E-6 예술흥행비자 ───────────────────────────────────────
  "E-6 예술흥행비자": {
    title: "E-6 예술·흥행 자격 확인",
    description: "활동 분야와 초청 요건을 확인합니다.",
    fields: [
      { name: "activityField", label: "활동 분야", type: "select", required: true,
        options: ["음악/공연 (E-6-1)", "스포츠 (E-6-2)", "유흥업소 (E-6-3)", "기타 예술"] },
      { name: "hasInviter", label: "초청 기관 또는 고용처 확보", type: "radio", required: true,
        options: ["확보 완료", "협의 중", "없음"] },
      { name: "contractPeriod", label: "계약 기간", type: "select", required: false,
        options: ["3개월 미만", "3~6개월", "6개월~1년", "1년 이상"] },
    ],
  },

  // ── F-4 재외동포 ───────────────────────────────────────────
  "F-4 재외동포비자": {
    title: "F-4 재외동포 자격 확인",
    description: "재외동포 자격 요건을 확인합니다.",
    fields: [
      { name: "nationality", label: "현재 보유 국적", type: "text", required: true,
        placeholder: "예: 미국, 캐나다, 호주, 중국" },
      { name: "koreanEthnicity", label: "한국 혈통 증명 가능 여부", type: "radio", required: true,
        hint: "부모·조부모 중 한국인이 있어야 합니다",
        options: ["가능 (호적·제적등본 있음)", "가능하나 서류 미비", "불확실"] },
      { name: "overseasResidence", label: "해외 영주권 또는 시민권", type: "radio", required: true,
        options: ["영주권 보유", "시민권 보유", "없음 (해외 거주)"] },
      { name: "hasKoreanId", label: "과거 한국 주민등록 여부", type: "radio", required: false,
        options: ["있음", "없음", "모름"] },
    ],
  },

  // ── F-6 결혼비자 ───────────────────────────────────────────
  "F-6 결혼비자": {
    title: "F-6 결혼비자 자격 확인",
    description: "한국인 배우자와의 결혼 비자 요건을 확인합니다.",
    fields: [
      { name: "spouseNationality", label: "배우자 국적", type: "radio", required: true,
        options: ["대한민국 (한국인)", "외국인 (영주권자 포함)"] },
      { name: "marriageStatus", label: "혼인 신고 상태", type: "select", required: true,
        options: ["한국 혼인 신고 완료", "본국 혼인 신고만 완료", "혼인 신고 전"] },
      { name: "currentLocation", label: "현재 위치", type: "radio", required: true,
        options: ["한국 체류 중 (비자 변경)", "해외 거주 (비자 신청)"] },
      { name: "meetingFrequency", label: "배우자와 만남 빈도", type: "select", required: true,
        hint: "실질적 혼인 관계 심사에 사용됩니다",
        options: ["동거 중", "주 1회 이상", "월 1~3회", "그 이하"] },
      { name: "prevMarriage", label: "이전 결혼 이력", type: "radio", required: true,
        options: ["없음", "있음"] },
    ],
  },

  // ── 법인설립 / FDI ─────────────────────────────────────────
  "법인설립": {
    title: "외국법인 설립 요건 확인",
    description: "한국 법인 설립을 위한 기본 요건을 확인합니다.",
    fields: [
      { name: "investAmount", label: "예정 투자 금액", type: "select", required: true,
        options: ["1억 원 이상 (외투기업 등록 가능)", "5천만~1억 원 미만", "5천만 원 미만"] },
      { name: "entityType", label: "설립 희망 형태", type: "select", required: true,
        options: ["유한회사 (LLC)", "주식회사 (Corporation)", "지사 (Branch)", "연락사무소 (Liaison)", "미정"] },
      { name: "businessType", label: "주요 사업 업종", type: "text", required: true,
        placeholder: "예: IT서비스, 무역업, 제조업, 교육" },
      { name: "d8Needed", label: "D-8 기업투자비자도 필요한가요?", type: "radio", required: true,
        options: ["예 (대표/임원 비자 포함)", "아니오 (법인 설립만)"] },
    ],
  },

  // ── 사범심사 대응 ──────────────────────────────────────────
  "사범심사 대응": {
    title: "사범심사 상황 파악",
    description: "사범심사 또는 입국규제 상황을 파악합니다.",
    fields: [
      { name: "caseType", label: "사건 유형", type: "select", required: true,
        options: ["음주운전", "폭행·상해", "절도·사기", "체류 위반 (불법체류)", "약물", "성범죄", "기타"] },
      { name: "currentVisa", label: "현재 체류자격", type: "text", required: true,
        placeholder: "예: E-7, F-2, 불법체류" },
      { name: "dispositionStatus", label: "처분 상태", type: "select", required: true,
        options: ["통보 수령 (출석 요구)", "심사 진행 중", "강제퇴거 명령", "처분 완료", "아직 없음"] },
      { name: "urgency", label: "긴급도", type: "radio", required: true,
        options: ["매우 긴급 (7일 이내)", "보통 (1개월 이내)", "여유 있음"] },
    ],
  },

  // ── 체류자격 변경 ──────────────────────────────────────────
  "체류자격 변경": {
    title: "체류자격 변경 요건 확인",
    description: "현재 비자에서 목표 비자로의 변경 가능성을 파악합니다.",
    fields: [
      { name: "currentVisa", label: "현재 체류자격", type: "text", required: true,
        placeholder: "예: E-7, D-10, D-2" },
      { name: "desiredVisa", label: "변경 희망 체류자격", type: "text", required: true,
        placeholder: "예: F-2-7, F-5, E-7" },
      { name: "changeReason", label: "변경 사유", type: "select", required: true,
        options: ["이직·취업", "투자·창업", "결혼", "학업 완료", "점수 충족", "기타"] },
      { name: "visaExpiry", label: "현재 비자 만료일", type: "text", required: true,
        placeholder: "예: 2026-08-15" },
    ],
  },

  // ── D-9-2 설비파견 ─────────────────────────────────────────
  "D-9-2 설비파견": {
    title: "D-9-2 설비파견 자격 확인",
    description: "수출 설비 설치·점검을 위한 파견 요건을 확인합니다.",
    fields: [
      { name: "equipmentType", label: "설비 유형", type: "text", required: true,
        placeholder: "예: 반도체 장비, 공장 설비, IT 인프라" },
      { name: "contractCompany", label: "한국 계약 회사", type: "text", required: true,
        placeholder: "한국 내 발주처 또는 수입처 회사명" },
      { name: "stayPeriod", label: "예정 체류 기간", type: "select", required: true,
        options: ["1개월 이하", "1~3개월", "3~6개월", "6개월 이상"] },
      { name: "techSpec", label: "전문 기술 분야", type: "text", required: false,
        placeholder: "예: 기계공학, 전기·전자, 소프트웨어" },
    ],
  },

  // ── 기타 ───────────────────────────────────────────────────
  "기타": {
    title: "상담 내용 입력",
    description: "궁금하신 내용을 자유롭게 작성해주세요.",
    fields: [
      { name: "inquiry", label: "문의 내용", type: "textarea", required: true,
        placeholder: "현재 상황, 목적, 궁금한 점을 구체적으로 작성해주세요." },
    ],
  },
}

// 서비스명 → qualifier key 매핑 (사이트마다 다른 표기 통일)
const SERVICE_ALIAS: Record<string, string> = {
  "F-2-7 점수제 거주비자": "F-2-7 점수제",
  "F-2-7 거주비자": "F-2-7 점수제",
  "F-2 거주비자": "F-2 거주비자",
  "F-5 영주권": "F-5 영주권",
  "D-8 기업투자비자": "D-8 투자비자",
  "D-8 Investment Visa": "D-8 투자비자",
  "D-7 주재원비자": "D-7 주재원비자",
  "D-7 Intra-Company Transfer": "D-7 주재원비자",
  "E-7 취업비자": "E-7 취업비자",
  "E-6 예술흥행비자": "E-6 예술흥행비자",
  "F-4 재외동포비자": "F-4 재외동포비자",
  "F-4 비자": "F-4 재외동포비자",
  "F-6 결혼비자": "F-6 결혼비자",
  "법인설립": "법인설립",
  "Korea Company Setup (Foreign-Invested)": "법인설립",
  "사범심사 대응": "사범심사 대응",
  "체류자격 변경": "체류자격 변경",
  "D-9-2 설비파견": "D-9-2 설비파견",
  "D-9-2 수출설비": "D-9-2 설비파견",
}

export function getQualifier(serviceName: string): QualifierDef {
  const key = SERVICE_ALIAS[serviceName] || serviceName
  return QUALIFIER_MAP[key] || QUALIFIER_MAP["기타"]
}

export function getQualifierTitle(serviceList: string[]): string {
  if (serviceList.length === 0) return "추가 정보 입력"
  if (serviceList.length === 1) return getQualifier(serviceList[0]).title
  return "서비스별 자격 확인"
}
