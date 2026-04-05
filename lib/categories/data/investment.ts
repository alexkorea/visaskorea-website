import type { CategoryData } from '../types'

export const investmentCategoryKo: CategoryData = {
  id: 'investment',
  slug: 'investment',
  locale: 'ko',

  hero: {
    badge: '외국인투자',
    title: '한국 법인설립 및 외국인투자',
    subtitle: '외국인투자촉진법에 따른 법인설립, 지사/지점/영업소 설치, 연락사무소 설치 전문',
    description: '외국인투자법인 설립부터 지사·지점 설치, 연락사무소 설치까지 한국 진출에 필요한 모든 절차를 전문 행정사가 신속하게 대행합니다.',
  },

  summary: {
    title: '외국인투자 개요',
    content: '외국인이 한국에서 사업을 영위하기 위해서는 외국인투자촉진법(FIPA)에 따른 외국인투자법인 설립, 외국기업의 국내지사·지점 설치, 또는 연락사무소 설치 등의 방법이 있습니다. 사업 목적과 규모에 따라 최적의 진출 형태를 선택하는 것이 중요합니다.',
    highlights: [
      '외국인투자법인: 1억원 이상 투자, 독립 법인격, 세금감면 혜택 가능',
      '지사/지점: 본사 명의 영업활동, 별도 법인 불필요, 본사 무한책임',
      '연락사무소: 시장조사·정보수집 등 비영업활동, 한국 진출 사전 준비',
      '투자신고 → 자금송금 → 등기/신고 → 사업자등록 순 진행',
    ],
  },

  serviceGroups: [
    {
      id: 'fdi-company',
      title: '외국인투자법인 설립',
      description: '외국인투자촉진법에 따른 외투법인 설립 및 등록',
      services: [
        {
          id: 'foreign-invested-company',
          title: '외국인투자법인 설립',
          description: '외국인투자촉진법(FIPA)에 따라 1억원 이상 투자하여 한국에 독립 법인을 설립하는 절차. 투자신고, 법인등기, 외국인투자기업 등록까지 전 과정 대행.',
          href: '/ko/business/foreign-invested-company',
          featured: true,
          tags: ['법인설립', 'D-8비자', '세금감면'],
        },
        {
          id: 'subsidiary',
          title: '현지법인 (자회사) 설립',
          description: '해외 모기업의 100% 또는 합작 형태의 한국 현지법인 설립. 독립된 법인격으로 한국 내 영업활동 수행.',
          href: '/ko/business/foreign-invested-company',
          tags: ['법인설립', '자회사'],
        },
        {
          id: 'joint-venture',
          title: '합작법인 설립',
          description: '외국인 투자자와 한국 파트너가 공동 출자하여 법인을 설립하는 형태.',
          href: '/ko/business/foreign-invested-company',
          tags: ['합작투자', '법인설립'],
        },
      ],
    },
    {
      id: 'branch-office',
      title: '지사/지점/영업소 설치',
      description: '외국기업의 한국 내 영업거점 설치',
      services: [
        {
          id: 'branch-office-setup',
          title: '지사(지점) 설치',
          description: '외국기업이 별도 법인 없이 본사 명의로 한국에서 영업활동을 수행하기 위한 지점 설치등기 및 사업자등록.',
          href: '/ko/business/branch-office',
          featured: true,
          tags: ['지점등기', 'D-7비자', '영업활동'],
        },
        {
          id: 'branch-to-subsidiary',
          title: '지사 → 법인 전환',
          description: '기존 지사를 독립 법인(자회사)으로 전환하는 절차. 자산·부채 이전 및 세무 처리.',
          href: '/ko/business/branch-office',
          tags: ['법인전환', '구조변경'],
        },
      ],
    },
    {
      id: 'liaison-office',
      title: '연락사무소 설치',
      description: '한국 시장 진출을 위한 사전 준비 단계',
      services: [
        {
          id: 'liaison-office-setup',
          title: '연락사무소 설치',
          description: '한국 시장 진출 전 시장조사, 정보수집, 업무연락 등 비영업 활동을 위한 사무소 설치. 영업활동 불가.',
          href: '/ko/business/liaison-office',
          featured: true,
          tags: ['시장조사', 'D-7비자', '비영업활동'],
        },
        {
          id: 'liaison-to-branch',
          title: '연락사무소 → 지사/법인 전환',
          description: '연락사무소에서 영업활동이 가능한 지사 또는 법인으로 전환하는 절차.',
          href: '/ko/business/liaison-office',
          tags: ['구조변경', '전환'],
        },
      ],
    },
    {
      id: 'support-services',
      title: '외국인투자 지원 서비스',
      description: '성공적인 한국 진출을 위한 종합 지원',
      services: [
        {
          id: 'investment-report',
          title: '외국인투자신고 대행',
          description: 'KOTRA 또는 외국환은행을 통한 외국인투자신고서 작성 및 제출 대행.',
          href: '/ko/contact?service=investment',
          tags: ['투자신고', 'KOTRA'],
        },
        {
          id: 'visa-support',
          title: '투자비자 (D-8) 신청 지원',
          description: '외국인투자기업 대표이사 및 경영진의 D-8 기업투자비자 신청 대행.',
          href: '/ko/contact?service=investment',
          tags: ['D-8비자', '체류자격'],
        },
        {
          id: 'business-registration',
          title: '사업자등록 및 인허가',
          description: '세무서 사업자등록, 업종별 인·허가 취득, 4대보험 가입 등 사업 개시 준비.',
          href: '/ko/contact?service=investment',
          tags: ['사업자등록', '인허가'],
        },
      ],
    },
  ],

  process: {
    title: '외국인투자법인 설립 절차',
    subtitle: '투자신고부터 사업 개시까지 체계적 6단계',
    steps: [
      {
        step: 1,
        title: '초기 상담 및 진출 형태 결정',
        description: '사업 목적, 규모, 업종을 분석하여 법인/지사/연락사무소 중 최적의 진출 형태를 결정합니다.',
      },
      {
        step: 2,
        title: '외국인투자신고',
        description: 'KOTRA(대한무역투자진흥공사) 또는 외국환은행에 외국인투자신고서를 제출합니다.',
      },
      {
        step: 3,
        title: '투자금 송금',
        description: '해외에서 한국 내 투자전용 계좌로 투자금을 송금합니다 (법인: 최소 1억원).',
      },
      {
        step: 4,
        title: '법인설립등기 / 지점설치등기',
        description: '법원 등기소에서 법인설립등기 또는 외국회사 국내지점 설치등기를 진행합니다.',
      },
      {
        step: 5,
        title: '사업자등록 및 인허가',
        description: '관할 세무서에서 사업자등록을 하고, 업종에 따라 필요한 인허가를 취득합니다.',
      },
      {
        step: 6,
        title: '외국인투자기업 등록',
        description: '산업통상자원부(KOTRA)에 외국인투자기업 등록을 완료하고 등록증을 발급받습니다.',
      },
    ],
  },

  faq: {
    title: '자주 묻는 질문',
    subtitle: '외국인투자 및 법인설립에 관한 궁금증을 해결해 드립니다',
    items: [
      {
        question: '외국인투자법인 설립 최소 투자금액은 얼마인가요?',
        answer: '외국인투자촉진법에 따라 최소 1억원 이상을 투자해야 합니다. 투자금은 반드시 해외에서 송금되어야 하며, 국내 자금은 외국인투자로 인정되지 않습니다. 다만 기술투자의 경우 별도 기준이 적용될 수 있습니다.',
      },
      {
        question: '법인, 지사, 연락사무소의 차이는 무엇인가요?',
        answer: '법인(외투법인)은 독립된 법인격으로 투자금 한도 내 유한책임이며, 세금감면 혜택을 받을 수 있습니다. 지사(지점)는 본사의 일부로 영업활동이 가능하나 본사가 무한책임을 집니다. 연락사무소는 시장조사 등 비영업활동만 가능하며 매출 발생이 불가합니다.',
      },
      {
        question: '외국인투자기업 대표이사의 비자는 어떻게 되나요?',
        answer: '외국인투자기업의 대표이사 및 경영진은 D-8(기업투자) 체류자격을 신청할 수 있습니다. 지사·연락사무소의 파견직원은 D-7(주재) 비자를 신청합니다. 일정 금액 이상 투자 시 F-5(영주) 자격도 검토 가능합니다.',
      },
      {
        question: '법인 설립까지 얼마나 걸리나요?',
        answer: '서류 준비 상태에 따라 다르지만, 투자신고부터 사업자등록까지 통상 2~4주 정도 소요됩니다. 해외 서류 공증·아포스티유가 필요한 경우 추가 1~2주가 소요될 수 있습니다.',
      },
      {
        question: '외국인투자기업의 세금 혜택은 무엇인가요?',
        answer: '고도기술수반사업, 산업지원서비스업 등에 해당하면 법인세·소득세 감면(최대 7년), 관세 면제, 지방세 감면 등의 혜택이 있습니다. 투자 규모, 업종, 입지(수도권/지방)에 따라 혜택 범위가 다릅니다.',
      },
    ],
    viewAllHref: '/ko/faq/investment',
  },

  cta: {
    title: '한국 진출 무료 상담',
    description: '귀사의 사업 목적에 맞는 최적의 한국 진출 방안을 제안해 드립니다. 외국인투자 전문 행정사가 직접 상담합니다.',
    primaryButton: {
      text: '상담 예약하기',
      href: '/ko/contact?service=investment',
    },
    secondaryButton: {
      text: '서비스 안내 보기',
      href: '/ko/services',
    },
  },

  relatedContent: {
    title: '관련 콘텐츠',
    links: [
      {
        title: '외국인투자법인 vs 지사 vs 연락사무소 비교',
        description: '한국 진출 형태별 장단점 비교 가이드',
        href: '/ko/business/foreign-invested-company',
        type: 'guide',
      },
      {
        title: '외국인투자기업 설립 필요 서류 체크리스트',
        description: '투자신고부터 등록까지 필요한 서류 목록',
        href: '/ko/business/foreign-invested-company',
        type: 'resource',
      },
      {
        title: 'D-8 기업투자비자 안내',
        description: '외국인투자기업 대표이사를 위한 체류자격',
        href: '/ko/visa/d-8',
        type: 'guide',
      },
      {
        title: '지사 설치 절차 안내',
        description: '외국기업 한국 지사·지점 설치 가이드',
        href: '/ko/business/branch-office',
        type: 'guide',
      },
    ],
  },

  breadcrumbs: [
    { label: '홈', href: '/ko' },
    { label: '서비스', href: '/ko/services' },
    { label: '외국인투자', href: '/ko/services/investment' },
  ],

  seo: {
    title: '외국인투자 | 법인설립·지사설치·연락사무소 | VISA 행정사',
    description: '외국인투자법인 설립, 지사·지점 설치, 연락사무소 설치 전문 행정사. 투자신고, 법인등기, 사업자등록, D-8비자까지 원스톱 대행.',
    keywords: ['외국인투자법인', '법인설립', '지사설치', '연락사무소', 'D-8비자', '외국인투자촉진법', 'FIPA', 'KOTRA'],
  },
}
