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

export const employmentCategoryEn: CategoryData = {
  id: 'employment',
  slug: 'employment',
  locale: 'en',

  hero: {
    badge: 'Work Visa Services',
    title: 'Korea Work Visa Specialist',
    subtitle: 'Expert work visa services for professionals, artists, expat employees, and investors',
    description: 'With 8+ years of experience, VISION Immigration supports the entire process for E-7, E-6, D-7, D-8, and D-9 work visas. We provide accurate consulting based on the Immigration Act with high approval rates.',
  },

  summary: {
    title: 'Korea Work Visa Overview',
    content: 'Korean work visas are residence permits required for foreigners to legally work in Korea. Various visa types exist depending on job type, skill level, corporate transfer status, and investment amount, including E-7, E-6, D-7, D-8, and D-9.',
    highlights: [
      'E-7 Professional Activity: IT, engineering, and other professional employment',
      'E-6 Arts & Entertainment: Performance, arts, modeling, sports',
      'D-7 Intra-company Transfer: Transfer from overseas HQ to Korean branch',
      'D-8 Corporate Investment: Foreign-invested company management',
      'D-9 Trade & Management: Import/export trade and business management',
    ],
  },

  serviceGroups: [
    {
      id: 'professional-work',
      title: 'Professional Work Visas',
      description: 'Visas for foreign professionals with specialized skills and knowledge',
      services: [
        {
          id: 'e-7',
          title: 'E-7 Professional Activity Visa',
          description: 'Work visa for IT, engineering, translation, design, and other professional occupations',
          href: '/en/visa/e-7',
          featured: true,
          tags: ['Work Visa', 'Professional'],
        },
        {
          id: 'e-6',
          title: 'E-6 Arts & Entertainment Visa',
          description: 'Visa for performance, entertainment, modeling, sports, and other arts activities',
          href: '/en/visa/e-6',
          tags: ['Work Visa', 'Arts'],
        },
      ],
    },
    {
      id: 'corporate-dispatch',
      title: 'Corporate Transfer & Investment Visas',
      description: 'Visas for overseas company branch transfers and investment activities',
      services: [
        {
          id: 'd-7',
          title: 'D-7 Intra-company Transfer Visa',
          description: 'For employees transferred from overseas headquarters to Korean branches',
          href: '/en/visa/d-7',
          featured: true,
          tags: ['Transfer', 'Corporate'],
        },
        {
          id: 'd-8',
          title: 'D-8 Corporate Investment Visa',
          description: 'Management activities for foreign-invested companies under FIPA',
          href: '/en/visa/d-8',
          featured: true,
          tags: ['Investment Visa', 'Company Setup'],
        },
        {
          id: 'd-9',
          title: 'D-9 Trade & Management Visa',
          description: 'Visa for import/export trade, business management, and operations',
          href: '/en/visa/d-9',
          tags: ['Trade Visa', 'Management'],
        },
      ],
    },
  ],

  process: {
    title: 'Work Visa Application Process',
    subtitle: 'General procedure for Korean work visas (E-7 basis)',
    steps: [
      { step: 1, title: 'Eligibility Check', description: 'Verify job classification, education/experience requirements, and employment contract.' },
      { step: 2, title: 'Employment Recommendation', description: 'Employer obtains employment recommendation from the relevant authority (Ministry of Employment and Labor, etc.).' },
      { step: 3, title: 'Document Preparation & Filing', description: 'Prepare visa application form, business registration, employment contract, and supporting documents.' },
      { step: 4, title: 'Immigration Office Review', description: 'Review of Certificate of Confirmation of Visa Issuance (CCVI) or status change application.' },
      { step: 5, title: 'Visa Issuance & Entry', description: 'Visa issuance and entry into Korea or completion of status change.' },
    ],
  },

  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Common questions about Korean work visas',
    items: [
      {
        question: 'Are there education requirements for an E-7 visa?',
        answer: 'Yes, E-7 visas require a bachelor\'s degree or higher, or relevant work experience depending on the occupation. IT and engineering typically require a bachelor\'s degree plus related experience; some occupations require a master\'s or higher.',
      },
      {
        question: 'What is the difference between D-7 and D-8 visas?',
        answer: 'D-7 is for employees transferred from overseas headquarters to Korean branches. D-8 is for foreigners who directly invest KRW 100M+ to manage a business in Korea.',
      },
      {
        question: 'Can I transition from a work visa to permanent residency (F-5)?',
        answer: 'Yes, E-7 or D-8 visa holders can change to an F-2 points-based visa after a certain period, then apply for F-5 permanent residency. Direct F-5 application is also possible if requirements are met.',
      },
      {
        question: 'How long does work visa processing take?',
        answer: 'Generally, 4-8 weeks from CCVI application to visa issuance. Additional time may be needed for employment recommendation and document supplementation.',
      },
    ],
    viewAllHref: '/en/faq',
  },

  cta: {
    title: 'Work Visa Consultation',
    description: 'Our 8+ year experienced specialists will guide you to the optimal work visa pathway.',
    primaryButton: { text: 'Request Free Consultation', href: '/en/contact?service=employment' },
    secondaryButton: { text: 'View Visa Types', href: '/en/services' },
  },

  relatedContent: {
    title: 'Related Content',
    links: [
      { title: 'E-7 Professional Visa Guide', description: 'Eligibility and application procedures for professional work visas', href: '/en/visa/e-7', type: 'guide' },
      { title: 'D-8 Investment Visa Guide', description: 'Company formation and investment visa process', href: '/en/visa/d-8', type: 'guide' },
      { title: 'F-2 Points-based Visa Transition', description: 'Pathway from work visa to residence visa', href: '/en/visa/f-2-points', type: 'article' },
      { title: 'Foreign Employee Hiring Guide', description: 'Guide to foreign employment procedures for employers', href: '/en/blog', type: 'resource' },
    ],
  },

  breadcrumbs: [
    { label: 'Home', href: '/en' },
    { label: 'Services', href: '/en/services' },
    { label: 'Work Visas', href: '/en/services/employment' },
  ],

  seo: {
    title: 'Work Visa Services | E-7, D-7, D-8 Specialist | VISION Immigration',
    description: 'E-7 professional visa, D-7 transfer visa, D-8 investment visa and more. 8+ years experience. VISION Immigration.',
    keywords: ['work visa', 'E-7 visa', 'D-7 visa', 'D-8 visa', 'foreign employment', 'Korea visa'],
  },
}

export const employmentCategoryZh: CategoryData = {
  id: 'employment',
  slug: 'employment',
  locale: 'zh',

  hero: {
    badge: '就业签证服务',
    title: '韩国就业签证专业服务',
    subtitle: '外国专业人才、艺术人才、驻在员专用就业签证专业服务',
    description: 'VISION行政事务所凭借8年以上经验，全面支持E-7、E-6、D-7、D-8、D-9等韩国就业签证全过程。基于出入境管理法提供精准咨询，保持高批准率。',
  },

  summary: {
    title: '韩国就业签证概要',
    content: '韩国就业签证是外国人在大韩民国合法进行就业活动所需的居留资格。根据职种、技术水平、派遣与否、投资规模等，有E-7、E-6、D-7、D-8、D-9等多种签证类型。',
    highlights: [
      'E-7 特定活动签证：IT、工程师、专业职等专业人才就业',
      'E-6 艺术演出签证：演出、艺术活动、模特、体育领域',
      'D-7 驻在员签证：从海外总部派遣至韩国分公司',
      'D-8 企业投资签证：外国人投资企业经营活动',
      'D-9 贸易经营签证：进出口贸易及经营活动',
    ],
  },

  serviceGroups: [
    {
      id: 'professional-work',
      title: '专业人才就业签证',
      description: '持有专业技术及知识的外国人才签证',
      services: [
        {
          id: 'e-7',
          title: 'E-7 特定活动签证',
          description: 'IT、工程师、翻译、设计师等专业职种就业签证',
          href: '/zh/visa/e-7',
          featured: true,
          tags: ['就业签证', '专业人才'],
        },
        {
          id: 'e-6',
          title: 'E-6 艺术演出签证',
          description: '演出、演艺、模特、体育等艺术·演出活动签证',
          href: '/zh/visa/e-6',
          tags: ['就业签证', '艺术·演出'],
        },
      ],
    },
    {
      id: 'corporate-dispatch',
      title: '企业派遣及投资签证',
      description: '海外企业韩国分公司派遣及投资相关签证',
      services: [
        {
          id: 'd-7',
          title: 'D-7 驻在员签证',
          description: '从海外总部派遣至韩国分公司·分支机构的驻在员',
          href: '/zh/visa/d-7',
          featured: true,
          tags: ['驻在员', '企业派遣'],
        },
        {
          id: 'd-8',
          title: 'D-8 企业投资签证',
          description: '依据外国人投资促进法的投资企业经营·管理活动',
          href: '/zh/visa/d-8',
          featured: true,
          tags: ['投资签证', '法人设立'],
        },
        {
          id: 'd-9',
          title: 'D-9 贸易经营签证',
          description: '进出口贸易业、经营活动、事业运营签证',
          href: '/zh/visa/d-9',
          tags: ['贸易签证', '经营'],
        },
      ],
    },
  ],

  process: {
    title: '就业签证申请流程',
    subtitle: '韩国就业签证一般流程（以E-7为基准）',
    steps: [
      { step: 1, title: '资格条件确认', description: '确认职种分类、学历·经历要求、雇用合同书。' },
      { step: 2, title: '雇用推荐书发放', description: '雇主从管辖机关（雇用劳动部等）获取雇用推荐书。' },
      { step: 3, title: '材料准备及提交', description: '准备签证申请书、事业者登记证、雇用合同书等材料。' },
      { step: 4, title: '出入境管理事务所审查', description: '签证发放认定书（CCVI）或居留资格变更审查。' },
      { step: 5, title: '签证发放及入境', description: '签证发放后入境或居留资格变更完成。' },
    ],
  },

  faq: {
    title: '常见问题',
    subtitle: '关于韩国就业签证的常见疑问',
    items: [
      {
        question: 'E-7签证申请有学历要求吗？',
        answer: '是的，E-7签证根据职种要求学士以上学历或相关领域经历。IT、工程等专业职通常需要学士学位+相关经历，部分职种要求硕士以上。',
      },
      {
        question: 'D-7驻在员签证和D-8企业投资签证有什么区别？',
        answer: 'D-7是从海外总部派遣至韩国分公司的员工签证，D-8是外国人直接投资1亿韩元以上在韩国经营企业的签证。',
      },
      {
        question: '从就业签证可以转换为永住权（F-5）吗？',
        answer: '可以，E-7或D-8等就业签证持有人在居留一定期间后可变更为F-2积分制签证，之后可申请F-5永住权。直接满足F-5要求时也可直接申请。',
      },
      {
        question: '就业签证处理需要多长时间？',
        answer: '一般从签证发放认定书（CCVI）申请到签证发放约需4-8周。根据雇用推荐书发放、材料补充等可能需要更长时间。',
      },
    ],
    viewAllHref: '/zh/faq',
  },

  cta: {
    title: '就业签证咨询申请',
    description: 'VISION行政事务所8年以上经验专业行政士为您推荐最佳就业签证路径。',
    primaryButton: { text: '申请免费咨询', href: '/zh/contact?service=employment' },
    secondaryButton: { text: '查看签证种类', href: '/zh/services' },
  },

  relatedContent: {
    title: '相关内容',
    links: [
      { title: 'E-7 特定活动签证详细指南', description: '专业人才就业签证资格要求和申请流程', href: '/zh/visa/e-7', type: 'guide' },
      { title: 'D-8 企业投资签证指南', description: '外国人法人设立及投资签证取得方法', href: '/zh/visa/d-8', type: 'guide' },
      { title: 'F-2 积分制签证转换指南', description: '从就业签证转换为居住签证的路径', href: '/zh/visa/f-2-points', type: 'article' },
      { title: '外国人雇用流程指南', description: '为雇主提供的外国人雇用流程指南', href: '/zh/blog', type: 'resource' },
    ],
  },

  breadcrumbs: [
    { label: '首页', href: '/zh' },
    { label: '服务', href: '/zh/services' },
    { label: '就业签证', href: '/zh/services/employment' },
  ],

  seo: {
    title: '就业签证服务 | E-7、D-7、D-8专业 | VISION行政事务所',
    description: 'E-7特定活动签证、D-7驻在员签证、D-8企业投资签证等韩国就业签证专业服务。8年以上经验VISION行政事务所。',
    keywords: ['就业签证', 'E-7签证', 'D-7签证', 'D-8签证', '外国人就业', '韩国签证'],
  },
}

export const employmentCategoryJa: CategoryData = {
  id: 'employment',
  slug: 'employment',
  locale: 'ja',

  hero: {
    badge: '就労ビザサービス',
    title: '韓国就労ビザ専門サービス',
    subtitle: '外国人専門人材、芸術家、駐在員のための就労ビザ専門',
    description: 'VISION行政士事務所は8年以上の経験でE-7、E-6、D-7、D-8、D-9等の韓国就労ビザ全過程を支援します。出入国管理法に基づく正確な相談と高い承認率を誇ります。',
  },

  summary: {
    title: '韓国就労ビザの概要',
    content: '韓国就労ビザは、外国人が大韓民国で合法的に就労活動を行うために必要な在留資格です。職種、技術レベル、派遣有無、投資規模に応じて、E-7、E-6、D-7、D-8、D-9等の多様なビザタイプがあります。',
    highlights: [
      'E-7 特定活動ビザ：IT、エンジニア、専門職等の専門人材就労',
      'E-6 芸術興行ビザ：公演、芸術活動、モデル、スポーツ分野',
      'D-7 駐在員ビザ：海外本社から韓国支社への派遣',
      'D-8 企業投資ビザ：外国人投資企業の経営活動',
      'D-9 貿易経営ビザ：輸出入貿易・経営活動',
    ],
  },

  serviceGroups: [
    {
      id: 'professional-work',
      title: '専門人材就労ビザ',
      description: '専門技術・知識を有する外国人材のためのビザ',
      services: [
        {
          id: 'e-7',
          title: 'E-7 特定活動ビザ',
          description: 'IT、エンジニア、通訳翻訳、デザイナー等の専門職種就労ビザ',
          href: '/ja/visa/e-7',
          featured: true,
          tags: ['就労ビザ', '専門人材'],
        },
        {
          id: 'e-6',
          title: 'E-6 芸術興行ビザ',
          description: '公演、芸能、モデル、スポーツ等の芸術・興行活動ビザ',
          href: '/ja/visa/e-6',
          tags: ['就労ビザ', '芸術・興行'],
        },
      ],
    },
    {
      id: 'corporate-dispatch',
      title: '企業派遣・投資ビザ',
      description: '海外企業の韓国支社派遣及び投資関連ビザ',
      services: [
        {
          id: 'd-7',
          title: 'D-7 駐在員ビザ',
          description: '海外本社から韓国支社・支店に派遣される駐在員',
          href: '/ja/visa/d-7',
          featured: true,
          tags: ['駐在員', '企業派遣'],
        },
        {
          id: 'd-8',
          title: 'D-8 企業投資ビザ',
          description: '外国人投資促進法に基づく投資企業の経営・管理活動',
          href: '/ja/visa/d-8',
          featured: true,
          tags: ['投資ビザ', '法人設立'],
        },
        {
          id: 'd-9',
          title: 'D-9 貿易経営ビザ',
          description: '輸出入貿易業、経営活動、事業運営のためのビザ',
          href: '/ja/visa/d-9',
          tags: ['貿易ビザ', '経営'],
        },
      ],
    },
  ],

  process: {
    title: '就労ビザ申請プロセス',
    subtitle: '韓国就労ビザの一般手続き（E-7基準）',
    steps: [
      { step: 1, title: '資格要件確認', description: '職種分類、学歴・経歴要件、雇用契約書の確認。' },
      { step: 2, title: '雇用推薦書の発行', description: '雇用主が管轄機関（雇用労働部等）から雇用推薦書を取得。' },
      { step: 3, title: '書類準備・提出', description: 'ビザ申請書、事業者登録証、雇用契約書等の必要書類を準備。' },
      { step: 4, title: '出入国管理事務所の審査', description: '査証発給認定書（CCVI）または在留資格変更の審査。' },
      { step: 5, title: 'ビザ発給・入国', description: '査証発給後の入国または在留資格変更の完了。' },
    ],
  },

  faq: {
    title: 'よくある質問',
    subtitle: '韓国就労ビザに関する疑問にお答えします',
    items: [
      {
        question: 'E-7ビザの申請には学歴要件がありますか？',
        answer: 'はい、E-7ビザは職種に応じて学士以上の学歴または関連分野の経歴が必要です。IT・エンジニアリング等の専門職は通常学士号+関連経歴が必要で、一部職種は修士以上を求める場合もあります。',
      },
      {
        question: 'D-7駐在員ビザとD-8企業投資ビザの違いは？',
        answer: 'D-7は海外本社から韓国支社に派遣される社員のためのビザで、D-8は外国人が直接1億ウォン以上を投資して韓国で企業を経営するためのビザです。',
      },
      {
        question: '就労ビザから永住権（F-5）への転換は可能ですか？',
        answer: 'はい、E-7やD-8等の就労ビザ保持者は一定期間滞在後にF-2ポイント制ビザに変更し、その後F-5永住権を申請できます。直接F-5の要件を満たす場合も申請可能です。',
      },
      {
        question: '就労ビザの処理期間はどのくらいですか？',
        answer: '一般的に査証発給認定書（CCVI）申請からビザ発給まで約4～8週間かかります。雇用推薦書の発行や書類補完により追加時間が必要な場合があります。',
      },
    ],
    viewAllHref: '/ja/faq',
  },

  cta: {
    title: '就労ビザ相談申請',
    description: 'VISION行政士事務所の8年以上経験の専門行政士が最適な就労ビザ経路をご案内します。',
    primaryButton: { text: '無料相談を申請', href: '/ja/contact?service=employment' },
    secondaryButton: { text: 'ビザの種類を見る', href: '/ja/services' },
  },

  relatedContent: {
    title: '関連コンテンツ',
    links: [
      { title: 'E-7 特定活動ビザ詳細ガイド', description: '専門人材就労ビザの資格要件と申請手続き', href: '/ja/visa/e-7', type: 'guide' },
      { title: 'D-8 企業投資ビザガイド', description: '外国人法人設立と投資ビザ取得方法', href: '/ja/visa/d-8', type: 'guide' },
      { title: 'F-2 ポイント制ビザ転換ガイド', description: '就労ビザから居住ビザへの転換経路', href: '/ja/visa/f-2-points', type: 'article' },
      { title: '外国人雇用手続きガイド', description: '雇用主向け外国人雇用手続きガイド', href: '/ja/blog', type: 'resource' },
    ],
  },

  breadcrumbs: [
    { label: 'ホーム', href: '/ja' },
    { label: 'サービス', href: '/ja/services' },
    { label: '就労ビザ', href: '/ja/services/employment' },
  ],

  seo: {
    title: '就労ビザサービス | E-7、D-7、D-8専門 | VISION行政士事務所',
    description: 'E-7特定活動ビザ、D-7駐在員ビザ、D-8企業投資ビザ等、韓国就労ビザ専門。8年以上経験のVISION行政士事務所。',
    keywords: ['就労ビザ', 'E-7ビザ', 'D-7ビザ', 'D-8ビザ', '外国人就労', '韓国ビザ'],
  },
}
