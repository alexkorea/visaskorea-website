import type { CategoryData } from '../types'

export const investmentCategoryKo: CategoryData = {
  id: 'investment',
  slug: 'investment',
  locale: 'ko',
  
  hero: {
    badge: '투자이민',
    title: '투자를 통한 미국 이민',
    subtitle: 'EB-5 투자이민 및 사업 비자 전문',
    description: '검증된 투자이민 전략으로 미국 영주권 취득의 꿈을 현실로 만들어 드립니다. 20년 이상의 경험과 높은 승인율을 자랑합니다.',
  },
  
  summary: {
    title: '투자이민 개요',
    content: '미국 투자이민은 일정 금액을 미국에 투자하고 고용을 창출함으로써 영주권을 취득하는 방법입니다. EB-5 프로그램을 통해 투자자와 그 가족들이 미국 영주권을 받을 수 있으며, 다양한 투자 옵션이 있습니다.',
    highlights: [
      '직접투자 또는 리저널 센터 투자 가능',
      '배우자와 21세 미만 미혼자녀 동반 가능',
      '투자금액: TEA 지역 $800,000 / 일반지역 $1,050,000',
      '조건부 영주권 → 정식 영주권 전환',
    ],
  },
  
  serviceGroups: [
    {
      id: 'eb5-programs',
      title: 'EB-5 투자이민 프로그램',
      description: '미국 영주권 취득을 위한 투자이민 프로그램',
      services: [
        {
          id: 'eb5-direct',
          title: 'EB-5 직접투자',
          description: '본인이 직접 사업체를 설립하고 운영하는 투자방식',
          href: '/ko/services/investment/eb5-direct',
          featured: true,
          tags: ['영주권', '사업운영'],
        },
        {
          id: 'eb5-regional',
          title: 'EB-5 리저널센터',
          description: 'USCIS 승인 리저널센터를 통한 간접투자 방식',
          href: '/ko/services/investment/eb5-regional',
          featured: true,
          tags: ['영주권', '간접투자'],
        },
        {
          id: 'eb5-tea',
          title: 'TEA 지역 투자',
          description: '목표고용지역(TEA) 투자로 낮은 투자금액 혜택',
          href: '/ko/services/investment/eb5-tea',
          tags: ['영주권', '저투자금'],
        },
      ],
    },
    {
      id: 'business-visas',
      title: '사업 비자',
      description: '미국에서 사업 활동을 위한 비이민 비자',
      services: [
        {
          id: 'e2-visa',
          title: 'E-2 투자비자',
          description: '조약국 국민을 위한 투자비자, 상당한 투자 필요',
          href: '/ko/services/investment/e2-visa',
          featured: true,
          tags: ['비이민비자', '사업'],
        },
        {
          id: 'e1-visa',
          title: 'E-1 무역비자',
          description: '미국과 상당한 무역을 하는 조약국 국민 대상',
          href: '/ko/services/investment/e1-visa',
          tags: ['비이민비자', '무역'],
        },
        {
          id: 'l1-visa',
          title: 'L-1 주재원비자',
          description: '다국적 기업 임원, 관리자, 전문가 대상',
          href: '/ko/services/investment/l1-visa',
          tags: ['비이민비자', '주재원'],
        },
      ],
    },
    {
      id: 'support-services',
      title: '투자이민 지원 서비스',
      description: '성공적인 투자이민을 위한 종합 지원',
      services: [
        {
          id: 'business-plan',
          title: '사업계획서 작성',
          description: '이민국 요구사항에 맞는 전문 사업계획서 작성',
          href: '/ko/services/investment/business-plan',
          tags: ['서류준비'],
        },
        {
          id: 'source-of-funds',
          title: '자금출처 증명',
          description: '투자금 합법성 입증을 위한 서류 준비',
          href: '/ko/services/investment/source-of-funds',
          tags: ['서류준비'],
        },
        {
          id: 'project-review',
          title: '프로젝트 실사',
          description: 'EB-5 프로젝트 검토 및 리스크 분석',
          href: '/ko/services/investment/project-review',
          tags: ['컨설팅'],
        },
      ],
    },
  ],
  
  process: {
    title: '투자이민 진행 과정',
    subtitle: '체계적인 5단계 프로세스',
    steps: [
      {
        step: 1,
        title: '초기 상담',
        description: '투자자 상황 분석 및 최적의 투자이민 경로 설계',
      },
      {
        step: 2,
        title: '투자 프로젝트 선정',
        description: '검증된 프로젝트 추천 및 실사, 투자 계약 체결',
      },
      {
        step: 3,
        title: 'I-526E 청원서 제출',
        description: '이민청원서 작성 및 제출, 자금출처 증명',
      },
      {
        step: 4,
        title: '조건부 영주권 취득',
        description: '비자 인터뷰 및 조건부 영주권(2년) 발급',
      },
      {
        step: 5,
        title: 'I-829 조건해제',
        description: '고용창출 입증 후 정식 영주권으로 전환',
      },
    ],
  },
  
  faq: {
    title: '자주 묻는 질문',
    subtitle: '투자이민에 대한 궁금증을 해결해 드립니다',
    items: [
      {
        question: 'EB-5 투자이민 최소 투자금액은 얼마인가요?',
        answer: 'TEA(목표고용지역)에 투자할 경우 $800,000, 일반 지역의 경우 $1,050,000입니다. 2022년 EB-5 개혁 및 청렴법에 따라 조정된 금액입니다.',
      },
      {
        question: 'EB-5 영주권 취득까지 얼마나 걸리나요?',
        answer: '일반적으로 I-526E 청원서 승인에 12-24개월, 이후 비자 발급까지 추가 시간이 소요됩니다. TEA 지역 투자 시 우선 처리 혜택이 있을 수 있습니다.',
      },
      {
        question: 'E-2 비자와 EB-5의 차이점은 무엇인가요?',
        answer: 'E-2는 비이민 비자로 영주권이 아니며 주기적 갱신이 필요합니다. EB-5는 영주권을 취득하는 이민 비자입니다. E-2는 투자금액 요건이 유연하지만, 한국은 E-2 조약국이 아니므로 별도 확인이 필요합니다.',
      },
      {
        question: '투자금은 돌려받을 수 있나요?',
        answer: '리저널센터 투자의 경우 일반적으로 프로젝트 완료 후 투자금 반환이 예정되어 있습니다. 다만, 투자에는 위험이 따르며 원금 보장은 되지 않습니다.',
      },
    ],
    viewAllHref: '/ko/faq/investment',
  },
  
  cta: {
    title: '투자이민 무료 상담',
    description: '귀하의 상황에 맞는 최적의 투자이민 전략을 제안해 드립니다. 20년 경력의 전문가가 직접 상담합니다.',
    primaryButton: {
      text: '상담 예약하기',
      href: '/ko/contact?service=investment',
    },
    secondaryButton: {
      text: '성공 사례 보기',
      href: '/ko/success-stories/investment',
    },
  },
  
  relatedContent: {
    title: '관련 콘텐츠',
    links: [
      {
        title: 'EB-5 최신 동향 및 정책 변화',
        description: '2024년 EB-5 프로그램 업데이트 정보',
        href: '/ko/insights/eb5-updates-2024',
        type: 'article',
      },
      {
        title: '투자이민 성공 사례',
        description: '실제 고객의 투자이민 성공 스토리',
        href: '/ko/success-stories/investment',
        type: 'case-study',
      },
      {
        title: 'EB-5 vs E-2 비교 가이드',
        description: '어떤 투자 비자가 나에게 맞을까?',
        href: '/ko/guides/eb5-vs-e2',
        type: 'guide',
      },
      {
        title: '투자금 출처 증명 체크리스트',
        description: '필요 서류 및 준비 방법 안내',
        href: '/ko/resources/source-of-funds-checklist',
        type: 'resource',
      },
    ],
  },
  
  breadcrumbs: [
    { label: '홈', href: '/ko' },
    { label: '서비스', href: '/ko/services' },
    { label: '투자이민', href: '/ko/services/investment' },
  ],
  
  seo: {
    title: '투자이민 | EB-5 영주권 & 사업비자 전문 | 로펌명',
    description: 'EB-5 투자이민, E-2 투자비자 전문 로펌. 20년 경력, 높은 승인율. TEA 지역 투자, 리저널센터 프로젝트 검토, 사업계획서 작성 지원.',
    keywords: ['EB-5', '투자이민', '미국영주권', 'E-2비자', '리저널센터', 'TEA'],
  },
}
