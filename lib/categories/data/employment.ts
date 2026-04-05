import type { CategoryData } from '../types'

export const employmentCategoryKo: CategoryData = {
  id: 'employment',
  slug: 'employment',
  locale: 'ko',
  
  hero: {
    badge: '취업이민',
    title: '취업을 통한 미국 이민',
    subtitle: '전문직, 기술직, 특수능력자를 위한 취업이민 전문',
    description: '귀하의 능력과 경력을 바탕으로 미국 영주권을 취득하세요. EB-1, EB-2, EB-3 모든 카테고리에서 최적의 전략을 제시합니다.',
  },
  
  summary: {
    title: '취업이민 개요',
    content: '미국 취업이민은 고용주의 스폰서십을 통해 또는 본인의 탁월한 능력을 바탕으로 영주권을 취득하는 방법입니다. 직종, 학력, 경력에 따라 EB-1, EB-2, EB-3 등 다양한 카테고리가 있습니다.',
    highlights: [
      'EB-1: 탁월한 능력자, 저명한 연구원, 다국적 기업 임원',
      'EB-2: 석사학위 이상 또는 학사+5년 경력 전문직',
      'EB-3: 학사학위 전문직, 숙련공, 비숙련공',
      'NIW: 국익면제 - 고용주 스폰서 불필요',
    ],
  },
  
  serviceGroups: [
    {
      id: 'eb1-category',
      title: 'EB-1 (1순위 취업이민)',
      description: '탁월한 능력을 가진 인재를 위한 최우선 카테고리',
      services: [
        {
          id: 'eb1a',
          title: 'EB-1A 특출난 능력자',
          description: '과학, 예술, 교육, 사업, 스포츠 분야 탁월한 능력 보유자',
          href: '/ko/services/employment/eb1a',
          featured: true,
          tags: ['영주권', '자기청원'],
        },
        {
          id: 'eb1b',
          title: 'EB-1B 저명한 연구원/교수',
          description: '국제적으로 인정받는 연구원 또는 교수',
          href: '/ko/services/employment/eb1b',
          featured: true,
          tags: ['영주권', '학계'],
        },
        {
          id: 'eb1c',
          title: 'EB-1C 다국적기업 임원/관리자',
          description: '다국적 기업의 임원 또는 관리자 주재원',
          href: '/ko/services/employment/eb1c',
          tags: ['영주권', '기업'],
        },
      ],
    },
    {
      id: 'eb2-category',
      title: 'EB-2 (2순위 취업이민)',
      description: '고학력 전문직을 위한 카테고리',
      services: [
        {
          id: 'eb2-niw',
          title: 'EB-2 NIW (국익면제)',
          description: '국가이익에 기여하는 인재 - 고용주 스폰서 불필요',
          href: '/ko/services/employment/eb2-niw',
          featured: true,
          tags: ['영주권', '자기청원'],
        },
        {
          id: 'eb2-perm',
          title: 'EB-2 (PERM 경유)',
          description: '석사 이상 또는 학사+5년 경력, 노동허가 필요',
          href: '/ko/services/employment/eb2-perm',
          tags: ['영주권', 'PERM'],
        },
      ],
    },
    {
      id: 'eb3-category',
      title: 'EB-3 (3순위 취업이민)',
      description: '숙련공 및 전문직을 위한 카테고리',
      services: [
        {
          id: 'eb3-professional',
          title: 'EB-3 전문직',
          description: '학사학위 이상 전문직종 종사자',
          href: '/ko/services/employment/eb3-professional',
          tags: ['영주권', 'PERM'],
        },
        {
          id: 'eb3-skilled',
          title: 'EB-3 숙련공',
          description: '2년 이상 훈련/경험 필요 직종',
          href: '/ko/services/employment/eb3-skilled',
          tags: ['영주권', 'PERM'],
        },
        {
          id: 'eb3-unskilled',
          title: 'EB-3 비숙련공',
          description: '2년 미만 훈련으로 가능한 직종',
          href: '/ko/services/employment/eb3-other',
          tags: ['영주권', 'PERM'],
        },
      ],
    },
    {
      id: 'work-visas',
      title: '취업 비자',
      description: '미국 내 합법적 취업을 위한 비이민 비자',
      services: [
        {
          id: 'h1b-visa',
          title: 'H-1B 전문직 비자',
          description: '전문직종 취업비자, 학사학위 이상 필요',
          href: '/ko/services/employment/h1b',
          featured: true,
          tags: ['비이민비자', '취업'],
        },
        {
          id: 'o1-visa',
          title: 'O-1 특기자 비자',
          description: '과학, 예술, 교육, 사업, 스포츠 분야 특출난 능력자',
          href: '/ko/services/employment/o1',
          tags: ['비이민비자', '특기자'],
        },
        {
          id: 'tn-visa',
          title: 'TN 비자 (USMCA)',
          description: '캐나다/멕시코 국민 대상 전문직 비자',
          href: '/ko/services/employment/tn',
          tags: ['비이민비자', 'USMCA'],
        },
      ],
    },
  ],
  
  process: {
    title: '취업이민 진행 과정',
    subtitle: 'PERM 경유 취업이민 기준',
    steps: [
      {
        step: 1,
        title: '자격 평가',
        description: '학력, 경력, 직종 분석 및 최적 카테고리 결정',
      },
      {
        step: 2,
        title: 'PERM 노동허가',
        description: '노동부 노동시장 테스트 및 노동허가 취득 (EB-2/3)',
      },
      {
        step: 3,
        title: 'I-140 이민청원',
        description: '고용주 또는 본인의 이민청원서 제출',
      },
      {
        step: 4,
        title: '비자번호 대기',
        description: '출생국별 비자 번호 우선일자 대기',
      },
      {
        step: 5,
        title: '영주권 발급',
        description: '신체검사, I-485 또는 영사 인터뷰 후 영주권 취득',
      },
    ],
  },
  
  faq: {
    title: '자주 묻는 질문',
    subtitle: '취업이민에 대한 궁금증을 해결해 드립니다',
    items: [
      {
        question: 'NIW와 EB-1A의 차이점은 무엇인가요?',
        answer: 'EB-1A는 분야에서 최상위 수준의 "탁월한 능력"을 요구하며, NIW는 "국가 이익에 기여"할 수 있음을 증명해야 합니다. EB-1A가 기준이 높지만 비자 대기가 없고, NIW는 상대적으로 접근성이 높으나 한국 출생자는 대기 시간이 있습니다.',
      },
      {
        question: 'PERM 프로세스는 얼마나 걸리나요?',
        answer: '노동허가(PERM) 준비부터 승인까지 일반적으로 8-12개월 소요됩니다. 채용공고, 이력서 검토, 노동부 감사 여부에 따라 달라질 수 있습니다.',
      },
      {
        question: 'H-1B에서 영주권으로 전환이 가능한가요?',
        answer: '네, H-1B 신분에서 취업이민(EB-2, EB-3)을 동시에 진행할 수 있습니다. 이를 "dual intent"라고 하며, H-1B는 영주권 신청을 허용하는 비자입니다.',
      },
      {
        question: '한국 출생자의 취업이민 대기 기간은?',
        answer: '출생국별 비자 쿼터로 인해 한국 출생자도 대기가 발생합니다. EB-1은 대기가 짧고, EB-2/EB-3는 수년이 소요될 수 있습니다. NIW EB-2의 경우 현재 약 2-3년의 대기가 있습니다.',
      },
    ],
    viewAllHref: '/ko/faq/employment',
  },
  
  cta: {
    title: '취업이민 자격 평가',
    description: '귀하의 학력, 경력, 업적을 분석하여 가장 유리한 취업이민 경로를 찾아드립니다.',
    primaryButton: {
      text: '무료 자격 평가',
      href: '/ko/contact?service=employment',
    },
    secondaryButton: {
      text: '성공 사례 보기',
      href: '/ko/success-stories/employment',
    },
  },
  
  relatedContent: {
    title: '관련 콘텐츠',
    links: [
      {
        title: 'NIW 승인 전략 가이드',
        description: 'National Interest Waiver 성공을 위한 핵심 요소',
        href: '/ko/guides/niw-strategy',
        type: 'guide',
      },
      {
        title: 'EB-1A 탁월한 능력 기준 해설',
        description: '10가지 기준 중 3가지 충족 방법',
        href: '/ko/insights/eb1a-criteria',
        type: 'article',
      },
      {
        title: 'IT 전문가 취업이민 성공 사례',
        description: '소프트웨어 엔지니어의 NIW 승인 스토리',
        href: '/ko/success-stories/it-niw',
        type: 'case-study',
      },
      {
        title: 'PERM 준비 체크리스트',
        description: '노동허가 신청 전 준비 사항',
        href: '/ko/resources/perm-checklist',
        type: 'resource',
      },
    ],
  },
  
  breadcrumbs: [
    { label: '홈', href: '/ko' },
    { label: '서비스', href: '/ko/services' },
    { label: '취업이민', href: '/ko/services/employment' },
  ],
  
  seo: {
    title: '취업이민 | EB-1, EB-2 NIW, EB-3 전문 | 로펌명',
    description: 'EB-1A, EB-1B, NIW, PERM 기반 취업이민 전문 로펌. H-1B 전문직 비자. 20년 경력의 검증된 승인 전략.',
    keywords: ['취업이민', 'EB-1A', 'NIW', 'PERM', 'H-1B', '영주권'],
  },
}
