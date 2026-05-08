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

export const investmentCategoryEn: CategoryData = {
  id: 'investment',
  slug: 'investment',
  locale: 'en',

  hero: {
    badge: 'Foreign Investment',
    title: 'Company Formation & Foreign Investment in Korea',
    subtitle: 'FDI company setup, branch/liaison office establishment under the Foreign Investment Promotion Act (FIPA)',
    description: 'From establishing a foreign-invested company to setting up branch offices and liaison offices, our licensed specialists handle all procedures for your entry into the Korean market.',
  },

  summary: {
    title: 'Foreign Investment Overview',
    content: 'To conduct business in Korea, foreigners can establish a foreign-invested company under the Foreign Investment Promotion Act (FIPA), set up a branch office of a foreign company, or establish a liaison office. Choosing the optimal entry structure based on your business purpose and scale is crucial.',
    highlights: [
      'FDI Company: Min. KRW 100M investment, independent legal entity, tax incentives available',
      'Branch Office: Business under parent company name, no separate entity needed, parent has unlimited liability',
      'Liaison Office: Non-business activities like market research, preparation for Korea entry',
      'Process: Investment report → Fund transfer → Registration → Business registration',
    ],
  },

  serviceGroups: [
    {
      id: 'fdi-company',
      title: 'Foreign-Invested Company Setup',
      description: 'FDI company establishment and registration under FIPA',
      services: [
        {
          id: 'foreign-invested-company',
          title: 'Foreign-Invested Company Setup',
          description: 'Establish an independent legal entity in Korea with min. KRW 100M investment under FIPA. Full support from investment report to corporate registration.',
          href: '/en/business/foreign-invested-company',
          featured: true,
          tags: ['Company Setup', 'D-8 Visa', 'Tax Incentives'],
        },
        {
          id: 'subsidiary',
          title: 'Subsidiary (Local Corporation)',
          description: 'Set up a wholly-owned or joint venture subsidiary in Korea. Independent legal entity for business activities.',
          href: '/en/business/foreign-invested-company',
          tags: ['Company Setup', 'Subsidiary'],
        },
        {
          id: 'joint-venture',
          title: 'Joint Venture Setup',
          description: 'Joint investment between foreign investors and Korean partners to establish a corporation.',
          href: '/en/business/foreign-invested-company',
          tags: ['Joint Venture', 'Company Setup'],
        },
      ],
    },
    {
      id: 'branch-office',
      title: 'Branch / Liaison Office Setup',
      description: 'Establishing business presence in Korea for foreign companies',
      services: [
        {
          id: 'branch-office-setup',
          title: 'Branch Office Setup',
          description: 'Register a branch office for a foreign company to conduct business in Korea under the parent company name.',
          href: '/en/business/branch-office',
          featured: true,
          tags: ['Branch Registration', 'D-7 Visa', 'Business'],
        },
        {
          id: 'branch-to-subsidiary',
          title: 'Branch → Subsidiary Conversion',
          description: 'Convert an existing branch to an independent subsidiary. Asset/liability transfer and tax processing.',
          href: '/en/business/branch-office',
          tags: ['Conversion', 'Restructuring'],
        },
      ],
    },
    {
      id: 'liaison-office',
      title: 'Liaison Office Setup',
      description: 'Preliminary step for entering the Korean market',
      services: [
        {
          id: 'liaison-office-setup',
          title: 'Liaison Office Setup',
          description: 'Office for non-business activities such as market research and information gathering before entering the Korean market.',
          href: '/en/business/liaison-office',
          featured: true,
          tags: ['Market Research', 'D-7 Visa', 'Non-Business'],
        },
        {
          id: 'liaison-to-branch',
          title: 'Liaison → Branch/Company Conversion',
          description: 'Convert a liaison office to a branch or corporation capable of business activities.',
          href: '/en/business/liaison-office',
          tags: ['Restructuring', 'Conversion'],
        },
      ],
    },
    {
      id: 'support-services',
      title: 'Investment Support Services',
      description: 'Comprehensive support for successful Korea market entry',
      services: [
        {
          id: 'investment-report',
          title: 'Investment Report Filing',
          description: 'Preparation and filing of foreign investment report through KOTRA or foreign exchange bank.',
          href: '/en/contact?service=investment',
          tags: ['Investment Report', 'KOTRA'],
        },
        {
          id: 'visa-support',
          title: 'D-8 Investment Visa Support',
          description: 'D-8 corporate investment visa application for FDI company CEO and executives.',
          href: '/en/contact?service=investment',
          tags: ['D-8 Visa', 'Stay Status'],
        },
        {
          id: 'business-registration',
          title: 'Business Registration & Permits',
          description: 'Tax office business registration, industry-specific permits, social insurance enrollment.',
          href: '/en/contact?service=investment',
          tags: ['Business Registration', 'Permits'],
        },
      ],
    },
  ],

  process: {
    title: 'FDI Company Setup Process',
    subtitle: 'Systematic 6-step process from investment report to business launch',
    steps: [
      { step: 1, title: 'Initial Consultation & Entry Structure', description: 'Analyze business purpose, scale, and industry to determine the optimal entry form: company, branch, or liaison office.' },
      { step: 2, title: 'Foreign Investment Report', description: 'Submit foreign investment report to KOTRA or a foreign exchange bank.' },
      { step: 3, title: 'Investment Fund Transfer', description: 'Transfer investment funds from overseas to a dedicated account in Korea (min. KRW 100M for company).' },
      { step: 4, title: 'Corporate / Branch Registration', description: 'Complete corporate registration or foreign company branch registration at the court registry.' },
      { step: 5, title: 'Business Registration & Permits', description: 'Register the business at the tax office and obtain necessary industry permits.' },
      { step: 6, title: 'FDI Company Registration', description: 'Complete FDI company registration with MOTIE (KOTRA) and receive the registration certificate.' },
    ],
  },

  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Common questions about foreign investment and company formation',
    items: [
      {
        question: 'What is the minimum investment for an FDI company?',
        answer: 'Under FIPA, a minimum investment of KRW 100 million is required. Funds must be transferred from overseas; domestic funds are not recognized as foreign investment. Technology investment may have different criteria.',
      },
      {
        question: 'What is the difference between a company, branch, and liaison office?',
        answer: 'An FDI company is an independent legal entity with limited liability and tax incentive eligibility. A branch operates under the parent company with unlimited liability. A liaison office can only conduct non-business activities like market research.',
      },
      {
        question: 'What visa does an FDI company CEO get?',
        answer: 'FDI company CEOs and executives can apply for a D-8 (Corporate Investment) visa. Branch/liaison office staff apply for D-7 (Intra-company Transfer). F-5 (Permanent Residency) may also be considered for large investments.',
      },
      {
        question: 'How long does company formation take?',
        answer: 'Typically 2-4 weeks from investment report to business registration, depending on document readiness. An additional 1-2 weeks may be needed for overseas document notarization/apostille.',
      },
      {
        question: 'What tax benefits do FDI companies receive?',
        answer: 'Qualifying businesses (high-tech, industrial support services, etc.) may receive corporate/income tax reductions (up to 7 years), customs exemptions, and local tax reductions. Benefits vary by investment amount, industry, and location.',
      },
    ],
    viewAllHref: '/en/faq/investment',
  },

  cta: {
    title: 'Free Korea Entry Consultation',
    description: 'We will recommend the optimal Korea market entry strategy for your business. Consult directly with our licensed foreign investment specialists.',
    primaryButton: { text: 'Book Consultation', href: '/en/contact?service=investment' },
    secondaryButton: { text: 'View Services', href: '/en/services' },
  },

  relatedContent: {
    title: 'Related Content',
    links: [
      { title: 'FDI Company vs Branch vs Liaison Office', description: 'Comparison guide for Korea entry structures', href: '/en/business/foreign-invested-company', type: 'guide' },
      { title: 'FDI Company Document Checklist', description: 'Required documents from investment report to registration', href: '/en/business/foreign-invested-company', type: 'resource' },
      { title: 'D-8 Investment Visa Guide', description: 'Stay status for FDI company executives', href: '/en/visa/d-8', type: 'guide' },
      { title: 'Branch Office Setup Guide', description: 'Foreign company branch setup in Korea', href: '/en/business/branch-office', type: 'guide' },
    ],
  },

  breadcrumbs: [
    { label: 'Home', href: '/en' },
    { label: 'Services', href: '/en/services' },
    { label: 'Foreign Investment', href: '/en/services/investment' },
  ],

  seo: {
    title: 'Foreign Investment | Company Setup, Branch, Liaison Office | VISION Immigration',
    description: 'FDI company formation, branch office setup, liaison office establishment. Investment report, corporate registration, business registration, D-8 visa — one-stop service.',
    keywords: ['foreign investment', 'company formation', 'branch office', 'liaison office', 'D-8 visa', 'FIPA', 'KOTRA', 'Korea'],
  },
}

export const investmentCategoryZh: CategoryData = {
  id: 'investment',
  slug: 'investment',
  locale: 'zh',

  hero: {
    badge: '外国人投资',
    title: '韩国法人设立及外国人投资',
    subtitle: '依据外国人投资促进法的法人设立、分公司/分支机构/营业所设置、联络处设立专业服务',
    description: '从外国人投资法人设立到分公司·分支机构设置、联络处设立，专业行政士快速代办韩国市场进入所需的所有手续。',
  },

  summary: {
    title: '外国人投资概要',
    content: '外国人在韩国经营事业，可以选择依据外国人投资促进法（FIPA）设立外国人投资法人、设置外国企业国内分公司·分支机构，或设立联络处。根据事业目的和规模选择最佳进入形式至关重要。',
    highlights: [
      '外国人投资法人：1亿韩元以上投资，独立法人格，可享受税收减免',
      '分公司/分支机构：以总公司名义进行营业活动，无需单独设立法人，总公司承担无限责任',
      '联络处：市场调查·信息收集等非营业活动，韩国市场进入前期准备',
      '流程：投资申报 → 资金汇款 → 登记/申报 → 事业者登记',
    ],
  },

  serviceGroups: [
    {
      id: 'fdi-company',
      title: '外国人投资法人设立',
      description: '依据外国人投资促进法的外投法人设立及登记',
      services: [
        {
          id: 'foreign-invested-company',
          title: '外国人投资法人设立',
          description: '依据外国人投资促进法（FIPA）投资1亿韩元以上，在韩国设立独立法人。从投资申报到法人登记、外国人投资企业注册全程代办。',
          href: '/zh/business/foreign-invested-company',
          featured: true,
          tags: ['法人设立', 'D-8签证', '税收减免'],
        },
        {
          id: 'subsidiary',
          title: '本地法人（子公司）设立',
          description: '海外母公司100%或合资形式的韩国本地法人设立。以独立法人格在韩国开展营业活动。',
          href: '/zh/business/foreign-invested-company',
          tags: ['法人设立', '子公司'],
        },
        {
          id: 'joint-venture',
          title: '合资法人设立',
          description: '外国投资者与韩国合作方共同出资设立法人。',
          href: '/zh/business/foreign-invested-company',
          tags: ['合资投资', '法人设立'],
        },
      ],
    },
    {
      id: 'branch-office',
      title: '分公司/分支机构/营业所设置',
      description: '外国企业在韩国国内设置营业据点',
      services: [
        {
          id: 'branch-office-setup',
          title: '分公司（分支机构）设置',
          description: '外国企业无需单独法人，以总公司名义在韩国开展营业活动的分支机构设置登记及事业者登记。',
          href: '/zh/business/branch-office',
          featured: true,
          tags: ['分支机构登记', 'D-7签证', '营业活动'],
        },
        {
          id: 'branch-to-subsidiary',
          title: '分公司 → 法人转换',
          description: '将现有分公司转换为独立法人（子公司）。资产·负债转移及税务处理。',
          href: '/zh/business/branch-office',
          tags: ['法人转换', '结构变更'],
        },
      ],
    },
    {
      id: 'liaison-office',
      title: '联络处设立',
      description: '韩国市场进入前期准备阶段',
      services: [
        {
          id: 'liaison-office-setup',
          title: '联络处设立',
          description: '韩国市场进入前进行市场调查、信息收集、业务联络等非营业活动的办事处设立。不可进行营业活动。',
          href: '/zh/business/liaison-office',
          featured: true,
          tags: ['市场调查', 'D-7签证', '非营业活动'],
        },
        {
          id: 'liaison-to-branch',
          title: '联络处 → 分公司/法人转换',
          description: '从联络处转换为可进行营业活动的分公司或法人。',
          href: '/zh/business/liaison-office',
          tags: ['结构变更', '转换'],
        },
      ],
    },
    {
      id: 'support-services',
      title: '外国人投资支持服务',
      description: '成功进入韩国市场的综合支持',
      services: [
        {
          id: 'investment-report',
          title: '外国人投资申报代办',
          description: '通过KOTRA或外汇银行代办外国人投资申报书的撰写及提交。',
          href: '/zh/contact?service=investment',
          tags: ['投资申报', 'KOTRA'],
        },
        {
          id: 'visa-support',
          title: '投资签证（D-8）申请支持',
          description: '外国人投资企业代表理事及经营层的D-8企业投资签证申请代办。',
          href: '/zh/contact?service=investment',
          tags: ['D-8签证', '居留资格'],
        },
        {
          id: 'business-registration',
          title: '事业者登记及许可证',
          description: '税务局事业者登记、各行业许可证取得、四大保险加入等事业开始准备。',
          href: '/zh/contact?service=investment',
          tags: ['事业者登记', '许可证'],
        },
      ],
    },
  ],

  process: {
    title: '外国人投资法人设立流程',
    subtitle: '从投资申报到事业开始的系统化6步骤',
    steps: [
      { step: 1, title: '初期咨询及进入形式决定', description: '分析事业目的、规模、行业，决定法人/分公司/联络处中的最佳进入形式。' },
      { step: 2, title: '外国人投资申报', description: '向KOTRA（大韩贸易投资振兴公社）或外汇银行提交外国人投资申报书。' },
      { step: 3, title: '投资金汇款', description: '从海外向韩国国内投资专用账户汇款（法人：最低1亿韩元）。' },
      { step: 4, title: '法人设立登记 / 分支机构设置登记', description: '在法院登记所进行法人设立登记或外国公司国内分支机构设置登记。' },
      { step: 5, title: '事业者登记及许可证', description: '在管辖税务局进行事业者登记，并根据行业取得必要的许可证。' },
      { step: 6, title: '外国人投资企业注册', description: '在产业通商资源部（KOTRA）完成外国人投资企业注册并获发注册证。' },
    ],
  },

  faq: {
    title: '常见问题',
    subtitle: '关于外国人投资及法人设立的常见疑问',
    items: [
      {
        question: '外国人投资法人设立最低投资金额是多少？',
        answer: '依据外国人投资促进法需投资最低1亿韩元以上。投资金必须从海外汇入，国内资金不被认定为外国人投资。技术投资可能适用不同标准。',
      },
      {
        question: '法人、分公司、联络处有什么区别？',
        answer: '法人（外投法人）是独立法人格，在投资金限度内承担有限责任，可享受税收减免。分公司（分支机构）是总公司的一部分，可进行营业活动但总公司承担无限责任。联络处仅可进行市场调查等非营业活动，不可产生营业收入。',
      },
      {
        question: '外国人投资企业代表理事的签证如何？',
        answer: '外国人投资企业的代表理事及经营层可申请D-8（企业投资）居留资格。分公司·联络处的派遣职员申请D-7（驻在）签证。达到一定投资金额时也可考虑F-5（永住）资格。',
      },
      {
        question: '法人设立需要多长时间？',
        answer: '根据文件准备情况，从投资申报到事业者登记通常需要约2~4周。如需海外文件公证·海牙认证，可能额外需要1~2周。',
      },
      {
        question: '外国人投资企业有哪些税收优惠？',
        answer: '符合高端技术产业、产业支持服务业等条件的，可享受法人税·所得税减免（最长7年）、关税免除、地方税减免等优惠。优惠范围因投资规模、行业、所在地（首都圈/地方）而异。',
      },
    ],
    viewAllHref: '/en/faq/investment',
  },

  cta: {
    title: '韩国市场进入免费咨询',
    description: '为贵公司的事业目的推荐最佳的韩国市场进入方案。外国人投资专业行政士亲自咨询。',
    primaryButton: { text: '预约咨询', href: '/zh/contact?service=investment' },
    secondaryButton: { text: '查看服务介绍', href: '/zh/services' },
  },

  relatedContent: {
    title: '相关内容',
    links: [
      { title: '外国人投资法人 vs 分公司 vs 联络处比较', description: '韩国市场进入形式优缺点比较', href: '/zh/business/foreign-invested-company', type: 'guide' },
      { title: '外国人投资企业设立所需文件清单', description: '从投资申报到注册所需的文件目录', href: '/zh/business/foreign-invested-company', type: 'resource' },
      { title: 'D-8 企业投资签证指南', description: '外国人投资企业代表理事的居留资格', href: '/zh/visa/d-8', type: 'guide' },
      { title: '分公司设置流程指南', description: '外国企业韩国分公司·分支机构设置指南', href: '/zh/business/branch-office', type: 'guide' },
    ],
  },

  breadcrumbs: [
    { label: '首页', href: '/zh' },
    { label: '服务', href: '/zh/services' },
    { label: '外国人投资', href: '/zh/services/investment' },
  ],

  seo: {
    title: '外国人投资 | 法人设立·分公司设置·联络处 | VISION行政事务所',
    description: '外国人投资法人设立、分公司·分支机构设置、联络处设立专业服务。投资申报、法人登记、事业者登记、D-8签证一站式代办。',
    keywords: ['外国人投资法人', '法人设立', '分公司设置', '联络处', 'D-8签证', '外国人投资促进法', 'FIPA', 'KOTRA'],
  },
}

export const investmentCategoryJa: CategoryData = {
  id: 'investment',
  slug: 'investment',
  locale: 'ja',

  hero: {
    badge: '外国人投資',
    title: '韓国法人設立及び外国人投資',
    subtitle: '外国人投資促進法に基づく法人設立、支社/支店/営業所設置、連絡事務所設立の専門サービス',
    description: '外国人投資法人設立から支社・支店設置、連絡事務所設立まで、韓国進出に必要なすべての手続きを専門行政書士が迅速に代行します。',
  },

  summary: {
    title: '外国人投資の概要',
    content: '外国人が韓国で事業を営むためには、外国人投資促進法（FIPA）に基づく外国人投資法人の設立、外国企業の国内支社・支店の設置、または連絡事務所の設立などの方法があります。事業目的と規模に応じて最適な進出形態を選択することが重要です。',
    highlights: [
      '外国人投資法人：1億ウォン以上投資、独立法人格、税制優遇の可能性',
      '支社/支店：本社名義で営業活動、別途法人不要、本社の無限責任',
      '連絡事務所：市場調査・情報収集等の非営業活動、韓国進出の事前準備',
      'プロセス：投資届出 → 資金送金 → 登記/届出 → 事業者登録',
    ],
  },

  serviceGroups: [
    {
      id: 'fdi-company',
      title: '外国人投資法人設立',
      description: '外国人投資促進法に基づく外投法人の設立・登録',
      services: [
        {
          id: 'foreign-invested-company',
          title: '外国人投資法人設立',
          description: '外国人投資促進法（FIPA）に基づき1億ウォン以上を投資して韓国に独立法人を設立。投資届出から法人登記、外国人投資企業登録まで全過程を代行。',
          href: '/ja/business/foreign-invested-company',
          featured: true,
          tags: ['法人設立', 'D-8ビザ', '税制優遇'],
        },
        {
          id: 'subsidiary',
          title: '現地法人（子会社）設立',
          description: '海外親会社の100%または合弁形態の韓国現地法人設立。独立した法人格で韓国内の営業活動を遂行。',
          href: '/ja/business/foreign-invested-company',
          tags: ['法人設立', '子会社'],
        },
        {
          id: 'joint-venture',
          title: '合弁法人設立',
          description: '外国人投資家と韓国パートナーが共同出資して法人を設立する形態。',
          href: '/ja/business/foreign-invested-company',
          tags: ['合弁投資', '法人設立'],
        },
      ],
    },
    {
      id: 'branch-office',
      title: '支社/支店/営業所設置',
      description: '外国企業の韓国内営業拠点の設置',
      services: [
        {
          id: 'branch-office-setup',
          title: '支社（支店）設置',
          description: '外国企業が別途法人なしに本社名義で韓国で営業活動を行うための支店設置登記・事業者登録。',
          href: '/ja/business/branch-office',
          featured: true,
          tags: ['支店登記', 'D-7ビザ', '営業活動'],
        },
        {
          id: 'branch-to-subsidiary',
          title: '支社 → 法人への転換',
          description: '既存支社を独立法人（子会社）に転換する手続き。資産・負債の移転及び税務処理。',
          href: '/ja/business/branch-office',
          tags: ['法人転換', '構造変更'],
        },
      ],
    },
    {
      id: 'liaison-office',
      title: '連絡事務所設立',
      description: '韓国市場進出のための事前準備段階',
      services: [
        {
          id: 'liaison-office-setup',
          title: '連絡事務所設立',
          description: '韓国市場進出前の市場調査、情報収集、業務連絡等の非営業活動のための事務所設立。営業活動不可。',
          href: '/ja/business/liaison-office',
          featured: true,
          tags: ['市場調査', 'D-7ビザ', '非営業活動'],
        },
        {
          id: 'liaison-to-branch',
          title: '連絡事務所 → 支社/法人への転換',
          description: '連絡事務所から営業活動が可能な支社または法人へ転換する手続き。',
          href: '/ja/business/liaison-office',
          tags: ['構造変更', '転換'],
        },
      ],
    },
    {
      id: 'support-services',
      title: '外国人投資支援サービス',
      description: '韓国進出成功のための総合支援',
      services: [
        {
          id: 'investment-report',
          title: '外国人投資届出代行',
          description: 'KOTRAまたは外国為替銀行を通じた外国人投資届出書の作成・提出を代行。',
          href: '/ja/contact?service=investment',
          tags: ['投資届出', 'KOTRA'],
        },
        {
          id: 'visa-support',
          title: '投資ビザ（D-8）申請支援',
          description: '外国人投資企業代表取締役・経営陣のD-8企業投資ビザ申請を代行。',
          href: '/ja/contact?service=investment',
          tags: ['D-8ビザ', '在留資格'],
        },
        {
          id: 'business-registration',
          title: '事業者登録・許認可',
          description: '税務署での事業者登録、業種別許認可取得、4大保険加入など事業開始準備。',
          href: '/ja/contact?service=investment',
          tags: ['事業者登録', '許認可'],
        },
      ],
    },
  ],

  process: {
    title: '外国人投資法人設立の手続き',
    subtitle: '投資届出から事業開始まで体系的な6ステップ',
    steps: [
      { step: 1, title: '初回相談・進出形態の決定', description: '事業目的、規模、業種を分析し、法人/支社/連絡事務所から最適な進出形態を決定します。' },
      { step: 2, title: '外国人投資届出', description: 'KOTRA（大韓貿易投資振興公社）または外国為替銀行に外国人投資届出書を提出します。' },
      { step: 3, title: '投資金送金', description: '海外から韓国内の投資専用口座へ投資金を送金します（法人：最低1億ウォン）。' },
      { step: 4, title: '法人設立登記 / 支店設置登記', description: '裁判所登記所で法人設立登記または外国会社国内支店設置登記を進めます。' },
      { step: 5, title: '事業者登録・許認可', description: '管轄税務署で事業者登録を行い、業種に応じて必要な許認可を取得します。' },
      { step: 6, title: '外国人投資企業登録', description: '産業通商資源部（KOTRA）に外国人投資企業登録を完了し、登録証を発給されます。' },
    ],
  },

  faq: {
    title: 'よくある質問',
    subtitle: '外国人投資・法人設立に関する疑問にお答えします',
    items: [
      {
        question: '外国人投資法人設立の最低投資額はいくらですか？',
        answer: '外国人投資促進法に基づき最低1億ウォン以上の投資が必要です。投資金は必ず海外から送金する必要があり、国内資金は外国人投資として認められません。技術投資の場合は別途基準が適用される場合があります。',
      },
      {
        question: '法人、支社、連絡事務所の違いは何ですか？',
        answer: '法人（外投法人）は独立した法人格で投資金限度内の有限責任、税制優遇を受けられます。支社（支店）は本社の一部で営業活動は可能ですが本社が無限責任を負います。連絡事務所は市場調査等の非営業活動のみ可能で売上発生はできません。',
      },
      {
        question: '外国人投資企業の代表取締役のビザはどうなりますか？',
        answer: '外国人投資企業の代表取締役・経営陣はD-8（企業投資）在留資格を申請できます。支社・連絡事務所の派遣社員はD-7（駐在）ビザを申請します。一定額以上投資時はF-5（永住）資格も検討可能です。',
      },
      {
        question: '法人設立までどのくらいかかりますか？',
        answer: '書類準備状況により異なりますが、投資届出から事業者登録まで通常2〜4週間程度かかります。海外書類の公証・アポスティーユが必要な場合は追加で1〜2週間かかることがあります。',
      },
      {
        question: '外国人投資企業の税制優遇にはどのようなものがありますか？',
        answer: '高度技術伴事業、産業支援サービス業等に該当すれば、法人税・所得税減免（最大7年）、関税免除、地方税減免等の優遇があります。投資規模、業種、立地（首都圏/地方）により優遇範囲が異なります。',
      },
    ],
    viewAllHref: '/ja/faq/investment',
  },

  cta: {
    title: '韓国進出 無料相談',
    description: '貴社の事業目的に合った最適な韓国進出方案をご提案します。外国人投資専門の行政書士が直接相談いたします。',
    primaryButton: { text: '相談予約', href: '/ja/contact?service=investment' },
    secondaryButton: { text: 'サービス案内を見る', href: '/ja/services' },
  },

  relatedContent: {
    title: '関連コンテンツ',
    links: [
      { title: '外国人投資法人 vs 支社 vs 連絡事務所の比較', description: '韓国進出形態別のメリット・デメリット比較', href: '/ja/business/foreign-invested-company', type: 'guide' },
      { title: '外国人投資企業設立 必要書類チェックリスト', description: '投資届出から登録まで必要な書類一覧', href: '/ja/business/foreign-invested-company', type: 'resource' },
      { title: 'D-8 企業投資ビザガイド', description: '外国人投資企業代表取締役のための在留資格', href: '/ja/visa/d-8', type: 'guide' },
      { title: '支社設置手続きガイド', description: '外国企業の韓国支社・支店設置ガイド', href: '/ja/business/branch-office', type: 'guide' },
    ],
  },

  breadcrumbs: [
    { label: 'ホーム', href: '/ja' },
    { label: 'サービス', href: '/ja/services' },
    { label: '外国人投資', href: '/ja/services/investment' },
  ],

  seo: {
    title: '外国人投資 | 法人設立・支社設置・連絡事務所 | VISION行政書士事務所',
    description: '外国人投資法人設立、支社・支店設置、連絡事務所設立の専門サービス。投資届出、法人登記、事業者登録、D-8ビザまでワンストップ代行。',
    keywords: ['外国人投資法人', '法人設立', '支社設置', '連絡事務所', 'D-8ビザ', '外国人投資促進法', 'FIPA', 'KOTRA'],
  },
}
