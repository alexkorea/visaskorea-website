import type { CategoryData } from '../types'

export const residenceCategoryKo: CategoryData = {
  id: 'residence',
  slug: 'residence',
  locale: 'ko',

  hero: {
    badge: '체류/영주 비자 서비스',
    title: '한국 체류 및 영주비자 전문',
    subtitle: '디지털노마드, 점수제, 재외동포, 영주권, 결혼비자 전문',
    description: '비전행정사사무소는 8년 이상의 경력으로 F-1, F-2, F-4, F-5, F-6 등 한국 체류·영주비자 신청을 전문적으로 지원합니다.',
  },

  summary: {
    title: '체류/영주 비자 개요',
    content: '한국 체류·영주 비자는 외국인이 대한민국에 장기 거주하거나 영구 체류할 수 있는 자격을 부여합니다. 방문동거, 점수제 거주, 재외동포, 영주권, 결혼 등 다양한 체류자격이 있으며, 각 비자별 요건과 절차가 다릅니다.',
    highlights: [
      'F-1 방문동거/디지털노마드: 가족동거, 워케이션 체류',
      'F-2 점수제/공익/부동산: 우수인재 장기체류 거주비자',
      'F-4 재외동포: 해외 한인동포를 위한 체류자격',
      'F-5 영주권: 대한민국 영구 거주 자격',
      'F-6 결혼비자: 한국 국민의 외국인 배우자',
    ],
  },

  serviceGroups: [
    {
      id: 'f1-category',
      title: 'F-1 방문동거/디지털노마드',
      description: '가족동거, 워케이션 등 방문·동거 목적 체류',
      services: [
        {
          id: 'f-1',
          title: 'F-1 방문동거비자',
          description: '한국 체류 외국인의 가족 동거 목적 체류자격',
          href: '/ko/visa/f-1',
          tags: ['방문동거', '가족'],
        },
        {
          id: 'f-1-digital-nomad',
          title: 'F-1 디지털노마드비자',
          description: '워케이션 목적의 외국인 디지털 노마드를 위한 비자',
          href: '/ko/visa/f-1-digital-nomad',
          featured: true,
          tags: ['디지털노마드', '워케이션'],
        },
      ],
    },
    {
      id: 'f2-category',
      title: 'F-2 거주비자',
      description: '점수제, 공익사업투자, 부동산투자 기반 거주비자',
      services: [
        {
          id: 'f-2-points',
          title: 'F-2 점수제비자',
          description: '학력·소득·나이·한국어 능력 등 종합평가 80점 이상',
          href: '/ko/visa/f-2-points',
          featured: true,
          tags: ['점수제', '거주비자'],
        },
        {
          id: 'f-2-public-interest',
          title: 'F-2 공익사업투자비자',
          description: '법무부 지정 공익사업에 5억원 이상 투자',
          href: '/ko/visa/f-2-public-interest',
          tags: ['투자', '거주비자'],
        },
        {
          id: 'f-2-real-estate',
          title: 'F-2 부동산투자비자',
          description: '법무부 지정 지역 부동산 투자 기반 거주비자',
          href: '/ko/visa/f-2-real-estate',
          tags: ['부동산', '거주비자'],
        },
      ],
    },
    {
      id: 'f4-category',
      title: 'F-4 재외동포',
      description: '해외 한인동포를 위한 체류자격',
      services: [
        {
          id: 'f-4',
          title: 'F-4 재외동포비자',
          description: '대한민국 국적을 보유했던 재외동포 및 그 후손',
          href: '/ko/visa/f-4',
          featured: true,
          tags: ['재외동포', '한인'],
        },
      ],
    },
    {
      id: 'f5-category',
      title: 'F-5 영주권',
      description: '대한민국 영구 거주 자격',
      services: [
        {
          id: 'f-5',
          title: 'F-5 영주권',
          description: '대한민국에 영구적으로 거주할 수 있는 체류자격',
          href: '/ko/visa/f-5',
          featured: true,
          tags: ['영주권', '영구체류'],
        },
      ],
    },
    {
      id: 'f6-category',
      title: 'F-6 결혼비자',
      description: '한국 국민의 외국인 배우자를 위한 체류자격',
      services: [
        {
          id: 'f-6',
          title: 'F-6 결혼비자',
          description: '한국 국민과 법적 혼인한 외국인 배우자',
          href: '/ko/visa/f-6',
          featured: true,
          tags: ['결혼비자', '배우자'],
        },
      ],
    },
  ],

  process: {
    title: '체류비자 신청 과정',
    subtitle: '일반적인 체류자격 변경/연장 절차',
    steps: [
      {
        step: 1,
        title: '자격 요건 확인',
        description: '비자 유형별 자격 요건 및 필요 서류 확인',
      },
      {
        step: 2,
        title: '서류 준비',
        description: '비자발급신청서, 증빙서류, 수수료 등 준비',
      },
      {
        step: 3,
        title: '출입국관리사무소 접수',
        description: '관할 출입국관리사무소에 신청서 접수',
      },
      {
        step: 4,
        title: '심사',
        description: '서류 심사 및 필요 시 면접·보완 요청',
      },
      {
        step: 5,
        title: '비자 발급',
        description: '심사 완료 후 체류자격 부여 (약 3-4주)',
      },
    ],
  },

  faq: {
    title: '자주 묻는 질문',
    subtitle: '체류/영주 비자에 대한 궁금증을 해결해 드립니다',
    items: [
      {
        question: 'F-2 점수제비자 80점은 어떻게 계산하나요?',
        answer: '학력(최대 35점), 소득(최대 30점), 나이(최대 20점), 한국어 능력(TOPIK, 최대 20점), 사회통합프로그램 이수 등을 합산합니다. 총점 80점 이상이면 신청 가능합니다.',
      },
      {
        question: 'F-4 재외동포비자 신청 자격은 누구인가요?',
        answer: '대한민국 국적을 보유했던 사람(국적 포기자 포함) 또는 그 직계비속으로서 외국 국적을 취득한 재외동포가 대상입니다. 본인 또는 부모가 한국 국적이었던 증명이 필요합니다.',
      },
      {
        question: 'F-5 영주권 취득 요건은 무엇인가요?',
        answer: 'F-5 영주권은 체류자격별로 다양한 경로가 있습니다. F-2 점수제 3년 이상 체류, D-8 투자 3억원 이상, F-6 결혼 2년 이상 등 세부 유형(F-5-1~F-5-25)에 따라 요건이 다릅니다.',
      },
      {
        question: 'F-6 결혼비자 신청 시 주의사항은?',
        answer: '혼인신고가 완료되어야 하며, 실질적인 혼인관계(동거 등)를 입증해야 합니다. 초청장, 소득증명, 주거공간 증빙, 기초생활수급 확인서 등이 필요합니다.',
      },
    ],
    viewAllHref: '/ko/faq',
  },

  cta: {
    title: '체류/영주 비자 상담',
    description: '비전행정사사무소의 전문 행정사가 최적의 체류·영주 비자 경로를 안내해 드립니다.',
    primaryButton: {
      text: '무료 상담 신청',
      href: '/ko/contact?service=residence',
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
        title: 'F-2 점수제비자 상세 안내',
        description: '점수 항목별 기준과 신청 절차',
        href: '/ko/visa/f-2-points',
        type: 'guide',
      },
      {
        title: 'F-5 영주권 취득 가이드',
        description: '영주권 유형별 요건과 신청 방법',
        href: '/ko/visa/f-5',
        type: 'guide',
      },
      {
        title: 'F-6 결혼비자 준비 가이드',
        description: '결혼비자 신청 서류와 절차 안내',
        href: '/ko/visa/f-6',
        type: 'guide',
      },
      {
        title: '체류기간 연장 안내',
        description: '체류기간 만료 전 연장 신청 방법',
        href: '/ko/blog',
        type: 'resource',
      },
    ],
  },

  breadcrumbs: [
    { label: '홈', href: '/ko' },
    { label: '서비스', href: '/ko/services' },
    { label: '체류/영주', href: '/ko/services/residence' },
  ],

  seo: {
    title: '체류/영주 비자 | F-2 점수제, F-4 재외동포, F-5 영주권 | 비전행정사사무소',
    description: 'F-1 방문동거, F-2 점수제, F-4 재외동포, F-5 영주권, F-6 결혼비자 전문. 8년+ 경력 비전행정사사무소.',
    keywords: ['체류비자', '영주권', 'F-2점수제', 'F-4재외동포', 'F-5영주권', 'F-6결혼비자'],
  },
}
