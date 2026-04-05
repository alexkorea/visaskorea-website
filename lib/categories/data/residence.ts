import type { CategoryData } from '../types'

export const residenceCategoryKo: CategoryData = {
  id: 'residence',
  slug: 'residence',
  locale: 'ko',
  
  hero: {
    badge: '영주권/시민권',
    title: '영주권 및 시민권',
    subtitle: '가족초청, 영주권 갱신, 시민권 취득 전문',
    description: '가족과 함께하는 미국 정착의 꿈을 이루세요. 가족초청이민부터 시민권 취득까지, 모든 단계를 함께합니다.',
  },
  
  summary: {
    title: '영주권/시민권 개요',
    content: '미국 영주권은 미국에 합법적으로 영구 거주할 수 있는 권리를 부여합니다. 시민권은 미국 시민으로서 투표권, 여권 발급 등 모든 권리를 누릴 수 있습니다. 가족초청, 신분조정, 재입국허가 등 다양한 서비스를 제공합니다.',
    highlights: [
      '가족초청: 시민권자/영주권자 가족 초청',
      '신분조정 (I-485): 미국 내 영주권 전환',
      '영주권 갱신 및 조건해제',
      '시민권(귀화) 신청 및 N-400',
    ],
  },
  
  serviceGroups: [
    {
      id: 'family-immigration',
      title: '가족초청이민',
      description: '미국 시민권자 또는 영주권자의 가족 초청',
      services: [
        {
          id: 'ir-immediate',
          title: '즉시 가족이민 (IR)',
          description: '시민권자의 배우자, 미혼자녀(21세 미만), 부모 - 대기 없음',
          href: '/ko/services/residence/immediate-relative',
          featured: true,
          tags: ['영주권', '가족초청'],
        },
        {
          id: 'f1-unmarried',
          title: 'F1 미혼 성인자녀',
          description: '시민권자의 21세 이상 미혼자녀',
          href: '/ko/services/residence/f1',
          tags: ['영주권', '가족초청'],
        },
        {
          id: 'f2a-spouse',
          title: 'F2A 영주권자 배우자/자녀',
          description: '영주권자의 배우자 및 21세 미만 미혼자녀',
          href: '/ko/services/residence/f2a',
          tags: ['영주권', '가족초청'],
        },
        {
          id: 'f2b-unmarried',
          title: 'F2B 영주권자 미혼자녀',
          description: '영주권자의 21세 이상 미혼자녀',
          href: '/ko/services/residence/f2b',
          tags: ['영주권', '가족초청'],
        },
        {
          id: 'f3-married',
          title: 'F3 기혼자녀',
          description: '시민권자의 기혼자녀 및 그 가족',
          href: '/ko/services/residence/f3',
          tags: ['영주권', '가족초청'],
        },
        {
          id: 'f4-siblings',
          title: 'F4 형제자매',
          description: '시민권자의 형제자매 및 그 가족',
          href: '/ko/services/residence/f4',
          tags: ['영주권', '가족초청'],
        },
      ],
    },
    {
      id: 'green-card-services',
      title: '영주권 관련 서비스',
      description: '영주권 취득, 유지, 갱신 관련 서비스',
      services: [
        {
          id: 'aos',
          title: '신분조정 (I-485)',
          description: '미국 내에서 영주권으로 신분 전환',
          href: '/ko/services/residence/adjustment-of-status',
          featured: true,
          tags: ['영주권'],
        },
        {
          id: 'consular',
          title: '영사 수속',
          description: '해외에서 이민비자 인터뷰 및 발급',
          href: '/ko/services/residence/consular-processing',
          tags: ['영주권', '해외'],
        },
        {
          id: 'gc-renewal',
          title: '영주권 갱신 (I-90)',
          description: '10년 영주권 만료 시 갱신 신청',
          href: '/ko/services/residence/green-card-renewal',
          tags: ['영주권', '갱신'],
        },
        {
          id: 'conditional-removal',
          title: '조건부 영주권 해제 (I-751)',
          description: '결혼 기반 2년 조건부 영주권 해제',
          href: '/ko/services/residence/remove-conditions',
          tags: ['영주권', '조건해제'],
        },
        {
          id: 'reentry-permit',
          title: '재입국허가 (I-131)',
          description: '장기 해외체류를 위한 재입국허가서',
          href: '/ko/services/residence/reentry-permit',
          tags: ['영주권', '여행'],
        },
      ],
    },
    {
      id: 'citizenship',
      title: '시민권 (귀화)',
      description: '미국 시민권 취득 및 관련 서비스',
      services: [
        {
          id: 'naturalization',
          title: '시민권 신청 (N-400)',
          description: '영주권자의 미국 시민권(귀화) 신청',
          href: '/ko/services/residence/naturalization',
          featured: true,
          tags: ['시민권', '귀화'],
        },
        {
          id: 'citizenship-interview',
          title: '시민권 인터뷰 준비',
          description: '시민권 시험 및 인터뷰 대비',
          href: '/ko/services/residence/citizenship-interview',
          tags: ['시민권', '준비'],
        },
        {
          id: 'citizenship-certificate',
          title: '시민권 증명서 (N-600)',
          description: '출생 또는 부모를 통한 시민권 증명',
          href: '/ko/services/residence/citizenship-certificate',
          tags: ['시민권', '증명'],
        },
      ],
    },
  ],
  
  process: {
    title: '가족초청이민 진행 과정',
    subtitle: '일반적인 가족초청이민 절차',
    steps: [
      {
        step: 1,
        title: 'I-130 청원서 제출',
        description: '초청자(시민권자/영주권자)가 가족관계 증명 청원',
      },
      {
        step: 2,
        title: '비자번호 대기',
        description: '카테고리별 우선일자 대기 (IR은 대기 없음)',
      },
      {
        step: 3,
        title: '비자 신청',
        description: '미국 내: I-485 신분조정 / 해외: 영사 수속',
      },
      {
        step: 4,
        title: '인터뷰',
        description: '이민국 또는 영사관 인터뷰',
      },
      {
        step: 5,
        title: '영주권 발급',
        description: '승인 후 영주권 카드 수령',
      },
    ],
  },
  
  faq: {
    title: '자주 묻는 질문',
    subtitle: '영주권/시민권에 대한 궁금증을 해결해 드립니다',
    items: [
      {
        question: '영주권자가 부모를 초청할 수 있나요?',
        answer: '아니요, 부모 초청은 미국 시민권자만 가능합니다. 영주권자가 부모를 초청하려면 먼저 시민권을 취득해야 합니다.',
      },
      {
        question: '시민권 신청 자격 요건은 무엇인가요?',
        answer: '일반적으로 영주권 취득 후 5년(시민권자 배우자는 3년) 이상 거주, 실제 체류 요건 충족, 영어 및 시민교육 시험 통과, 선한 도덕성 등이 필요합니다.',
      },
      {
        question: 'F4 형제자매 초청 대기기간은 얼마나 되나요?',
        answer: '한국 출생자 기준 현재 약 14-15년 이상의 대기기간이 있습니다. 가장 긴 대기 카테고리입니다.',
      },
      {
        question: '조건부 영주권과 정식 영주권의 차이는?',
        answer: '결혼 2년 미만 시점에 영주권을 받으면 2년짜리 조건부 영주권이 발급됩니다. 만료 90일 전부터 I-751 조건해제 신청을 해야 10년 정식 영주권으로 전환됩니다.',
      },
    ],
    viewAllHref: '/ko/faq/residence',
  },
  
  cta: {
    title: '영주권/시민권 상담',
    description: '가족과 함께하는 미국 정착의 첫 걸음. 귀하의 상황에 맞는 최선의 방법을 찾아드립니다.',
    primaryButton: {
      text: '상담 신청하기',
      href: '/ko/contact?service=residence',
    },
    secondaryButton: {
      text: '자격 확인하기',
      href: '/ko/eligibility/residence',
    },
  },
  
  relatedContent: {
    title: '관련 콘텐츠',
    links: [
      {
        title: '가족초청 우선일자 이해하기',
        description: 'Visa Bulletin 읽는 방법과 대기기간 예측',
        href: '/ko/guides/visa-bulletin',
        type: 'guide',
      },
      {
        title: '시민권 인터뷰 준비 가이드',
        description: '시민권 시험 100문항 및 인터뷰 팁',
        href: '/ko/guides/citizenship-test',
        type: 'guide',
      },
      {
        title: '배우자 초청 성공 사례',
        description: '국제결혼 후 배우자 초청 과정',
        href: '/ko/success-stories/spouse-petition',
        type: 'case-study',
      },
      {
        title: '영주권 유지 체크리스트',
        description: '장기 해외체류 시 주의사항',
        href: '/ko/resources/maintaining-green-card',
        type: 'resource',
      },
    ],
  },
  
  breadcrumbs: [
    { label: '홈', href: '/ko' },
    { label: '서비스', href: '/ko/services' },
    { label: '영주권/시민권', href: '/ko/services/residence' },
  ],
  
  seo: {
    title: '영주권 & 시민권 | 가족초청, 신분조정, 귀화 전문 | 로펌명',
    description: '가족초청이민, 신분조정(I-485), 시민권(N-400) 전문 로펌. 영주권 갱신, 조건해제, 재입국허가 등 모든 영주권 서비스.',
    keywords: ['영주권', '시민권', '가족초청', 'I-485', 'N-400', '귀화'],
  },
}
