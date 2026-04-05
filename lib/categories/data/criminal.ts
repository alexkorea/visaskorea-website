import type { CategoryData } from '../types'

export const criminalCategoryKo: CategoryData = {
  id: 'criminal',
  slug: 'criminal',
  locale: 'ko',
  
  hero: {
    badge: '범죄기록 심사',
    title: '범죄기록 및 입국거부 문제 해결',
    subtitle: '입국금지 면제, 추방방어, 범죄기록 웨이버 전문',
    description: '과거의 실수가 미래를 막지 않도록. 복잡한 범죄기록 및 입국거부 문제를 전문적으로 해결해 드립니다.',
  },
  
  summary: {
    title: '범죄기록 심사 개요',
    content: '범죄기록, 이민법 위반, 과거 추방 이력 등은 비자 발급 및 입국에 심각한 장애가 될 수 있습니다. 그러나 많은 경우 면제(waiver) 신청이나 적절한 법적 대응을 통해 문제를 해결할 수 있습니다.',
    highlights: [
      '입국불허(Inadmissibility) 면제 신청',
      '추방 방어 및 취소 신청',
      '범죄기록 관련 비자 전략',
      '재입국허가 및 사전승인',
    ],
  },
  
  serviceGroups: [
    {
      id: 'waivers',
      title: '면제(Waiver) 신청',
      description: '입국불허 사유 면제를 위한 신청',
      services: [
        {
          id: 'i212-waiver',
          title: 'I-212 재입국허가 면제',
          description: '추방 후 재입국을 위한 특별허가 신청',
          href: '/ko/services/criminal/i212-waiver',
          featured: true,
          tags: ['면제', '추방'],
        },
        {
          id: 'i601-waiver',
          title: 'I-601 입국불허 면제',
          description: '범죄기록, 사기 등 입국불허 사유 면제',
          href: '/ko/services/criminal/i601-waiver',
          featured: true,
          tags: ['면제', '입국불허'],
        },
        {
          id: 'i601a-waiver',
          title: 'I-601A 임시면제',
          description: '불법체류 3/10년 바 면제 (미국 내 신청)',
          href: '/ko/services/criminal/i601a-waiver',
          featured: true,
          tags: ['면제', '불법체류'],
        },
        {
          id: 'i192-waiver',
          title: 'I-192 비이민 비자 면제',
          description: '비이민 비자 입국불허 사유 면제',
          href: '/ko/services/criminal/i192-waiver',
          tags: ['면제', '비이민비자'],
        },
      ],
    },
    {
      id: 'removal-defense',
      title: '추방 방어',
      description: '이민법정에서의 추방 절차 방어',
      services: [
        {
          id: 'removal-proceedings',
          title: '추방재판 대응',
          description: '이민법원 추방 절차 전면 대응',
          href: '/ko/services/criminal/removal-defense',
          featured: true,
          tags: ['추방', '법정'],
        },
        {
          id: 'cancellation-removal',
          title: '추방취소 (Cancellation)',
          description: '장기 거주자를 위한 추방취소 신청',
          href: '/ko/services/criminal/cancellation-removal',
          tags: ['추방', '취소'],
        },
        {
          id: 'asylum-withholding',
          title: '망명/추방보류',
          description: '박해 우려 시 보호 신청',
          href: '/ko/services/criminal/asylum-withholding',
          tags: ['망명', '보호'],
        },
        {
          id: 'voluntary-departure',
          title: '자진출국',
          description: '추방 대신 자진출국 선택',
          href: '/ko/services/criminal/voluntary-departure',
          tags: ['추방', '출국'],
        },
      ],
    },
    {
      id: 'criminal-issues',
      title: '범죄기록 관련',
      description: '범죄기록이 이민에 미치는 영향 분석 및 대응',
      services: [
        {
          id: 'criminal-analysis',
          title: '범죄기록 영향 분석',
          description: '범죄가 비자/영주권에 미치는 영향 평가',
          href: '/ko/services/criminal/criminal-analysis',
          tags: ['분석', '상담'],
        },
        {
          id: 'post-conviction',
          title: '유죄판결 후 구제',
          description: '형사 기록 정정, 감형, 사면 관련',
          href: '/ko/services/criminal/post-conviction',
          tags: ['범죄', '구제'],
        },
        {
          id: 'cimt-analysis',
          title: '도덕적 타락 범죄(CIMT) 분석',
          description: '이민법상 도덕적 타락 범죄 해당 여부 분석',
          href: '/ko/services/criminal/cimt',
          tags: ['범죄', 'CIMT'],
        },
      ],
    },
    {
      id: 'entry-issues',
      title: '입국 문제 해결',
      description: '입국 거부 및 관련 문제 대응',
      services: [
        {
          id: 'entry-refusal',
          title: '입국거부 대응',
          description: '공항 입국심사 거부 시 대응 전략',
          href: '/ko/services/criminal/entry-refusal',
          tags: ['입국', '거부'],
        },
        {
          id: 'esta-denial',
          title: 'ESTA 거부 해결',
          description: '전자여행허가(ESTA) 거부 사유 분석 및 대응',
          href: '/ko/services/criminal/esta-denial',
          tags: ['ESTA', '비자면제'],
        },
        {
          id: 'redress',
          title: 'DHS TRIP 재심',
          description: '입국 시 반복 검색/지연 문제 해결',
          href: '/ko/services/criminal/dhs-trip',
          tags: ['입국', '재심'],
        },
      ],
    },
  ],
  
  process: {
    title: '면제 신청 과정',
    subtitle: 'I-601 입국불허 면제 기준',
    steps: [
      {
        step: 1,
        title: '사안 분석',
        description: '입국불허 사유 및 면제 가능성 정밀 분석',
      },
      {
        step: 2,
        title: '증거 수집',
        description: '극심한 고통(extreme hardship) 입증 자료 준비',
      },
      {
        step: 3,
        title: '면제 신청서 작성',
        description: '설득력 있는 면제 청원서 및 지원서류 작성',
      },
      {
        step: 4,
        title: '면제 심사',
        description: '출입국관리사무소 또는 법무부 심사',
      },
      {
        step: 5,
        title: '비자 진행',
        description: '면제 승인 후 비자 신청 또는 입국 진행',
      },
    ],
  },
  
  faq: {
    title: '자주 묻는 질문',
    subtitle: '범죄기록 및 입국문제에 대한 궁금증을 해결해 드립니다',
    items: [
      {
        question: '음주운전(DUI) 기록이 있으면 미국 입국이 불가능한가요?',
        answer: '단순 음주운전 1회는 일반적으로 입국불허 사유가 아닙니다. 그러나 복수의 DUI, 중범죄 DUI, 또는 다른 이민법 위반과 결합되면 문제가 될 수 있습니다. 구체적인 상황에 따라 다르므로 전문가 상담을 권장합니다.',
      },
      {
        question: '과거에 추방당한 적이 있습니다. 다시 미국에 갈 수 있나요?',
        answer: '추방 사유와 시기에 따라 5년, 10년, 또는 영구 입국금지가 적용될 수 있습니다. 그러나 I-212 재입국허가 면제를 통해 금지 기간 전에도 입국이 가능할 수 있습니다.',
      },
      {
        question: '불법체류 기간이 길면 영주권을 받을 수 없나요?',
        answer: '180일 이상 불법체류 후 출국하면 3년, 1년 이상이면 10년 입국금지가 적용됩니다. 그러나 미국 시민권자/영주권자 배우자나 부모가 있다면 I-601A 임시면제를 통해 해결할 수 있습니다.',
      },
      {
        question: '면제(waiver) 승인율은 어느 정도인가요?',
        answer: '면제 승인은 개별 사안에 따라 크게 다릅니다. 핵심은 미국 시민권자/영주권자 가족이 겪을 "극심한 고통"을 설득력 있게 입증하는 것입니다. 충분한 증거와 전문적인 청원서가 중요합니다.',
      },
    ],
    viewAllHref: '/ko/faq/criminal',
  },
  
  cta: {
    title: '비밀 보장 무료 상담',
    description: '범죄기록이나 과거 이민 문제로 고민하고 계신가요? 모든 상담은 철저히 비밀이 보장됩니다. 해결책을 함께 찾아드립니다.',
    primaryButton: {
      text: '비밀 상담 신청',
      href: '/ko/contact?service=criminal',
    },
    secondaryButton: {
      text: '성공 사례 보기',
      href: '/ko/success-stories/criminal',
    },
  },
  
  relatedContent: {
    title: '관련 콘텐츠',
    links: [
      {
        title: '입국불허 사유 완벽 가이드',
        description: '어떤 상황이 입국불허에 해당하는지 상세 해설',
        href: '/ko/guides/inadmissibility',
        type: 'guide',
      },
      {
        title: '추방 절차 이해하기',
        description: '이민법원 절차 및 권리 안내',
        href: '/ko/guides/removal-proceedings',
        type: 'guide',
      },
      {
        title: 'I-601A 면제 성공 사례',
        description: '10년 불법체류 후 영주권 취득 스토리',
        href: '/ko/success-stories/i601a-approval',
        type: 'case-study',
      },
      {
        title: '범죄 유형별 이민 영향',
        description: 'CIMT, 약물범죄, 폭력범죄 등 영향 분석',
        href: '/ko/resources/criminal-immigration-impact',
        type: 'resource',
      },
    ],
  },
  
  breadcrumbs: [
    { label: '홈', href: '/ko' },
    { label: '서비스', href: '/ko/services' },
    { label: '범죄기록 심사', href: '/ko/services/criminal' },
  ],
  
  seo: {
    title: '범죄기록 & 입국문제 해결 | 면제, 추방방어 전문 | 로펌명',
    description: '입국불허 면제(I-601, I-601A), 추방방어, 범죄기록 이민영향 분석 전문. 비밀 보장 상담. 복잡한 케이스 해결 경험.',
    keywords: ['면제', 'waiver', '추방', '범죄기록', '입국불허', 'I-601'],
  },
}
