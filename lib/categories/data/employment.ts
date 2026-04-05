import type { CategoryData } from '../types'

export const employmentCategoryKo: CategoryData = {
  id: 'employment',
  slug: 'employment',
  locale: 'ko',

  hero: {
    badge: '취업 비자 서비스',
    title: '한국 취업비자 전문 서비스',
    subtitle: '외국인 전문인력, 예술인, 주재원을 위한 취업비자 전문',
    description: '비전행정사사무소는 8년 이상의 경력으로 E-7, E-6, D-7, D-8, D-9 등 한국 취업비자 전 과정을 지원합니다. 출입국관리법에 기반한 정확한 상담과 높은 승인률을 자랑합니다.',
  },

  summary: {
    title: '한국 취업비자 개요',
    content: '한국 취업비자는 외국인이 대한민국에서 합법적으로 취업 활동을 하기 위해 필요한 체류자격입니다. 직종, 기술 수준, 파견 여부, 투자 규모에 따라 E-7, E-6, D-7, D-8, D-9 등 다양한 비자 유형이 있습니다.',
    highlights: [
      'E-7 특정활동비자: IT, 엔지니어, 전문직 등 전문인력 취업',
      'E-6 예술흥행비자: 공연, 예술활동, 모델, 스포츠 분야',
      'D-7 주재원비자: 해외 본사에서 한국 지사로 파견',
      'D-8 기업투자비자: 외국인 투자기업 경영활동',
      'D-9 무역경영비자: 수출입 무역 및 경영활동',
    ],
  },

  serviceGroups: [
    {
      id: 'professional-work',
      title: '전문인력 취업비자',
      description: '전문 기술 및 지식을 보유한 외국인력을 위한 비자',
      services: [
        {
          id: 'e-7',
          title: 'E-7 특정활동비자',
          description: 'IT, 엔지니어, 통번역, 디자이너 등 전문직종 취업비자',
          href: '/ko/visa/e-7',
          featured: true,
          tags: ['취업비자', '전문인력'],
        },
        {
          id: 'e-6',
          title: 'E-6 예술흥행비자',
          description: '공연, 연예, 모델, 스포츠 등 예술·흥행 활동 비자',
          href: '/ko/visa/e-6',
          tags: ['취업비자', '예술·흥행'],
        },
      ],
    },
    {
      id: 'corporate-dispatch',
      title: '기업 파견 및 투자 비자',
      description: '해외 기업의 한국 지사 파견 및 투자 관련 비자',
      services: [
        {
          id: 'd-7',
          title: 'D-7 주재원비자',
          description: '해외 본사에서 한국 지사·지점으로 파견되는 주재원',
          href: '/ko/visa/d-7',
          featured: true,
          tags: ['주재원', '기업파견'],
        },
        {
          id: 'd-8',
          title: 'D-8 기업투자비자',
          description: '외국인투자촉진법에 따른 투자기업 경영·관리 활동',
          href: '/ko/visa/d-8',
          featured: true,
          tags: ['투자비자', '법인설립'],
        },
        {
          id: 'd-9',
          title: 'D-9 무역경영비자',
          description: '수출입 무역업, 경영활동, 사업운영을 위한 비자',
          href: '/ko/visa/d-9',
          tags: ['무역비자', '경영'],
        },
      ],
    },
  ],

  process: {
    title: '취업비자 신청 과정',
    subtitle: '한국 취업비자 일반 절차 (E-7 기준)',
    steps: [
      {
        step: 1,
        title: '자격 요건 확인',
        description: '직종 분류, 학력·경력 요건, 고용계약서 확인',
      },
      {
        step: 2,
        title: '고용추천서 발급',
        description: '고용주가 관할 기관(고용노동부 등)에서 고용추천서 발급',
      },
      {
        step: 3,
        title: '서류 준비 및 접수',
        description: '비자발급신청서, 사업자등록증, 고용계약서 등 구비서류 준비',
      },
      {
        step: 4,
        title: '출입국관리사무소 심사',
        description: '사증발급인정서(CCVI) 또는 체류자격변경 심사',
      },
      {
        step: 5,
        title: '비자 발급 및 입국',
        description: '사증 발급 후 입국 또는 체류자격 변경 완료',
      },
    ],
  },

  faq: {
    title: '자주 묻는 질문',
    subtitle: '한국 취업비자에 대한 궁금증을 해결해 드립니다',
    items: [
      {
        question: 'E-7 비자 신청에 학력 요건이 있나요?',
        answer: '네, E-7 비자는 직종에 따라 학사 이상 학력 또는 관련 분야 경력이 요구됩니다. IT, 엔지니어링 등 전문직은 보통 학사학위 + 관련 경력이 필요하며, 일부 직종은 석사 이상을 요구하기도 합니다.',
      },
      {
        question: 'D-7 주재원비자와 D-8 기업투자비자의 차이는?',
        answer: 'D-7은 해외 본사에서 한국 지사로 파견되는 직원을 위한 비자이며, D-8은 외국인이 직접 1억원 이상을 투자하여 한국에서 기업을 경영하기 위한 비자입니다.',
      },
      {
        question: '취업비자에서 영주권(F-5)으로 전환이 가능한가요?',
        answer: '네, E-7이나 D-8 등 취업비자 소지자는 일정 기간 체류 후 F-2 점수제비자로 변경하고, 이후 F-5 영주권 신청이 가능합니다. 직접 F-5 요건을 갖춘 경우에도 신청할 수 있습니다.',
      },
      {
        question: '취업비자 처리기간은 얼마나 걸리나요?',
        answer: '일반적으로 사증발급인정서(CCVI) 신청부터 비자 발급까지 약 4-8주가 소요됩니다. 고용추천서 발급, 서류 보완 등에 따라 더 걸릴 수 있습니다.',
      },
    ],
    viewAllHref: '/ko/faq',
  },

  cta: {
    title: '취업비자 상담 신청',
    description: '비전행정사사무소의 8년+ 경력 전문 행정사가 최적의 취업비자 경로를 안내해 드립니다.',
    primaryButton: {
      text: '무료 상담 신청',
      href: '/ko/contact?service=employment',
    },
    secondaryButton: {
      text: '비자 종류 보기',
      href: '/ko/services',
    },
  },

  relatedContent: {
    title: '관련 콘텐츠',
    links: [
      {
        title: 'E-7 특정활동비자 상세 안내',
        description: '전문인력 취업비자 자격 요건과 신청 절차',
        href: '/ko/visa/e-7',
        type: 'guide',
      },
      {
        title: 'D-8 기업투자비자 가이드',
        description: '외국인 법인설립 및 투자비자 취득 방법',
        href: '/ko/visa/d-8',
        type: 'guide',
      },
      {
        title: 'F-2 점수제비자 전환 안내',
        description: '취업비자에서 거주비자로의 전환 경로',
        href: '/ko/visa/f-2-points',
        type: 'article',
      },
      {
        title: '외국인 채용 절차 안내',
        description: '고용주를 위한 외국인 고용 절차 가이드',
        href: '/ko/blog',
        type: 'resource',
      },
    ],
  },

  breadcrumbs: [
    { label: '홈', href: '/ko' },
    { label: '서비스', href: '/ko/services' },
    { label: '취업비자', href: '/ko/services/employment' },
  ],

  seo: {
    title: '취업비자 서비스 | E-7, D-7, D-8 전문 | 비전행정사사무소',
    description: 'E-7 특정활동비자, D-7 주재원비자, D-8 기업투자비자 등 한국 취업비자 전문. 8년+ 경력 비전행정사사무소.',
    keywords: ['취업비자', 'E-7비자', 'D-7비자', 'D-8비자', '외국인취업', '한국비자'],
  },
}
