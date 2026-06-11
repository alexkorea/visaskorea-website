// F-5-11 점수제 영주권 점수 schema (보스 16505, 2026-06-11).
// 출처: 출입국·외국인정책본부 F-5-11 점수표 매뉴얼 (필수 245 + 선택 205 + 가점 110).
// 합격: 총점 80점 이상.

export type ScoreCategory = "required" | "optional" | "bonus";

export type ScoreItem = {
  id: string;
  category: ScoreCategory;
  label: string;
  description?: string;
  options: { label: string; points: number }[];
  required?: boolean;
};

export const F511_SCHEMA: ScoreItem[] = [
  // ===== 필수 (총 245점) =====
  {
    id: "age",
    category: "required",
    label: "나이",
    options: [
      { label: "20~25세", points: 5 },
      { label: "26~30세", points: 10 },
      { label: "31~35세", points: 15 },
      { label: "36~40세", points: 20 },
      { label: "41~50세", points: 15 },
      { label: "51~55세", points: 10 },
      { label: "56~60세", points: 5 },
    ],
    required: true,
  },
  {
    id: "education",
    category: "required",
    label: "학력",
    options: [
      { label: "고졸 이하", points: 5 },
      { label: "전문학사", points: 15 },
      { label: "학사", points: 25 },
      { label: "석사", points: 35 },
      { label: "박사", points: 45 },
    ],
    required: true,
  },
  {
    id: "korean_level",
    category: "required",
    label: "한국어 능력",
    description: "TOPIK / KIIP 단계 또는 동등 수준",
    options: [
      { label: "초급 (TOPIK 1~2)", points: 10 },
      { label: "중급 (TOPIK 3~4 / KIIP 4단계)", points: 20 },
      { label: "고급 (TOPIK 5~6 / KIIP 5단계)", points: 35 },
    ],
    required: true,
  },
  {
    id: "korea_residence_years",
    category: "required",
    label: "국내 체류 기간",
    options: [
      { label: "1~3년", points: 10 },
      { label: "3~5년", points: 20 },
      { label: "5~7년", points: 30 },
      { label: "7~10년", points: 40 },
      { label: "10년 이상", points: 50 },
    ],
    required: true,
  },
  {
    id: "annual_income",
    category: "required",
    label: "연 소득 (전년도 기준)",
    description: "본인 명의 한국 내 발생 소득 기준 (KRW)",
    options: [
      { label: "GNI 1배 미만 (≈ 4,200만원 미만)", points: 10 },
      { label: "GNI 1배 ~ 2배", points: 25 },
      { label: "GNI 2배 ~ 3배", points: 40 },
      { label: "GNI 3배 이상", points: 60 },
    ],
    required: true,
  },
  // ===== 선택 (총 205점) =====
  {
    id: "korean_work_experience",
    category: "optional",
    label: "국내 근무 경력",
    options: [
      { label: "1년 미만", points: 5 },
      { label: "1~3년", points: 10 },
      { label: "3~5년", points: 20 },
      { label: "5년 이상", points: 30 },
    ],
  },
  {
    id: "professional_qualification",
    category: "optional",
    label: "국내 자격증·면허",
    options: [
      { label: "없음", points: 0 },
      { label: "국가공인 자격증", points: 15 },
      { label: "기사·전문자격증", points: 25 },
    ],
  },
  {
    id: "social_contribution",
    category: "optional",
    label: "사회기여 (자원봉사·세금납부 등)",
    options: [
      { label: "없음", points: 0 },
      { label: "보통", points: 10 },
      { label: "우수 (자원봉사 100시간+ / 세금성실)", points: 20 },
    ],
  },
  {
    id: "korean_education",
    category: "optional",
    label: "국내 학위 취득",
    options: [
      { label: "없음", points: 0 },
      { label: "전문학사", points: 10 },
      { label: "학사", points: 20 },
      { label: "석사 이상", points: 30 },
    ],
  },
  // ===== 가점 (총 110점) =====
  {
    id: "bonus_advanced_korean",
    category: "bonus",
    label: "가점: TOPIK 6급 또는 KIIP 5단계 이수",
    options: [
      { label: "해당 없음", points: 0 },
      { label: "해당", points: 20 },
    ],
  },
  {
    id: "bonus_industrial_field",
    category: "bonus",
    label: "가점: 첨단산업·국가전략기술 분야 근무",
    options: [
      { label: "해당 없음", points: 0 },
      { label: "해당", points: 20 },
    ],
  },
  {
    id: "bonus_korean_family",
    category: "bonus",
    label: "가점: 한국인 배우자 또는 자녀",
    options: [
      { label: "해당 없음", points: 0 },
      { label: "한국인 배우자", points: 15 },
      { label: "한국인 자녀", points: 15 },
    ],
  },
  {
    id: "bonus_volunteer",
    category: "bonus",
    label: "가점: 사회봉사 / 기여 우수",
    options: [
      { label: "해당 없음", points: 0 },
      { label: "지자체 표창", points: 10 },
      { label: "중앙부처 표창", points: 20 },
    ],
  },
];

export const F511_PASS_SCORE = 80;

export type F511Answers = Record<string, number>; // itemId → points

export function calculateF511(answers: F511Answers): {
  total: number;
  required: number;
  optional: number;
  bonus: number;
  verdict: "PASS" | "GRACE" | "FAIL";
  missingRequired: string[];
} {
  let required = 0;
  let optional = 0;
  let bonus = 0;
  const missingRequired: string[] = [];

  for (const item of F511_SCHEMA) {
    const v = answers[item.id];
    if (item.required && (v === undefined || v === null)) {
      missingRequired.push(item.label);
      continue;
    }
    const pts = Number(v || 0);
    if (item.category === "required") required += pts;
    else if (item.category === "optional") optional += pts;
    else bonus += pts;
  }
  const total = required + optional + bonus;
  let verdict: "PASS" | "GRACE" | "FAIL";
  if (total >= F511_PASS_SCORE + 10) verdict = "PASS";
  else if (total >= F511_PASS_SCORE) verdict = "GRACE";
  else verdict = "FAIL";

  return { total, required, optional, bonus, verdict, missingRequired };
}
