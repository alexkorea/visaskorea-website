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

export const residenceCategoryEn: CategoryData = {
  id: 'residence',
  slug: 'residence',
  locale: 'en',

  hero: {
    badge: 'Residence / Permanent Visa Services',
    title: 'Korea Residence & Permanent Residency Specialist',
    subtitle: 'Digital nomad, points-based, overseas Korean, permanent residency, and marriage visa experts',
    description: 'With 8+ years of experience, VISION Immigration professionally supports F-1, F-2, F-4, F-5, and F-6 residence and permanent residency visa applications in Korea.',
  },

  summary: {
    title: 'Residence / Permanent Visa Overview',
    content: 'Korean residence and permanent visas grant foreigners the right to stay long-term or permanently in Korea. Various categories exist including family visit, points-based residence, overseas Korean, permanent residency, and marriage, each with different requirements and procedures.',
    highlights: [
      'F-1 Family Visit / Digital Nomad: Family cohabitation, workcation stay',
      'F-2 Points-based / Public Interest / Real Estate: Long-term residence for skilled talent',
      'F-4 Overseas Korean: Residence status for Korean diaspora',
      'F-5 Permanent Residency: Permanent residence status in Korea',
      'F-6 Marriage Visa: For foreign spouses of Korean nationals',
    ],
  },

  serviceGroups: [
    {
      id: 'f1-category',
      title: 'F-1 Family Visit / Digital Nomad',
      description: 'Stay for family cohabitation, workcation, and other visit purposes',
      services: [
        {
          id: 'f-1',
          title: 'F-1 Family Visit Visa',
          description: 'Residence status for family cohabitation with foreigners staying in Korea',
          href: '/en/visa/f-1',
          tags: ['Family Visit', 'Family'],
        },
        {
          id: 'f-1-digital-nomad',
          title: 'F-1 Digital Nomad Visa',
          description: 'Visa for foreign digital nomads for workcation purposes',
          href: '/en/visa/f-1-digital-nomad',
          featured: true,
          tags: ['Digital Nomad', 'Workcation'],
        },
      ],
    },
    {
      id: 'f2-category',
      title: 'F-2 Residence Visa',
      description: 'Residence visas based on points, public interest investment, real estate investment',
      services: [
        {
          id: 'f-2-points',
          title: 'F-2 Points-based Visa',
          description: 'Comprehensive evaluation of 80+ points based on education, income, age, Korean proficiency',
          href: '/en/visa/f-2-points',
          featured: true,
          tags: ['Points-based', 'Residence Visa'],
        },
        {
          id: 'f-2-public-interest',
          title: 'F-2 Public Interest Investment Visa',
          description: 'Investment of KRW 500M+ in MOJ-designated public interest projects',
          href: '/en/visa/f-2-public-interest',
          tags: ['Investment', 'Residence Visa'],
        },
        {
          id: 'f-2-real-estate',
          title: 'F-2 Real Estate Investment Visa',
          description: 'Residence visa based on real estate investment in MOJ-designated areas',
          href: '/en/visa/f-2-real-estate',
          tags: ['Real Estate', 'Residence Visa'],
        },
      ],
    },
    {
      id: 'f4-category',
      title: 'F-4 Overseas Korean',
      description: 'Residence status for Korean diaspora',
      services: [
        {
          id: 'f-4',
          title: 'F-4 Overseas Korean Visa',
          description: 'For overseas Koreans who held Korean nationality and their descendants',
          href: '/en/visa/f-4',
          featured: true,
          tags: ['Overseas Korean', 'Diaspora'],
        },
      ],
    },
    {
      id: 'f5-category',
      title: 'F-5 Permanent Residency',
      description: 'Permanent residence status in Korea',
      services: [
        {
          id: 'f-5',
          title: 'F-5 Permanent Residency',
          description: 'Status permitting permanent residence in Korea',
          href: '/en/visa/f-5',
          featured: true,
          tags: ['Permanent Residency', 'Permanent Stay'],
        },
      ],
    },
    {
      id: 'f6-category',
      title: 'F-6 Marriage Visa',
      description: 'Residence status for foreign spouses of Korean nationals',
      services: [
        {
          id: 'f-6',
          title: 'F-6 Marriage Visa',
          description: 'For foreign nationals legally married to Korean citizens',
          href: '/en/visa/f-6',
          featured: true,
          tags: ['Marriage Visa', 'Spouse'],
        },
      ],
    },
  ],

  process: {
    title: 'Residence Visa Application Process',
    subtitle: 'General procedure for status change/extension',
    steps: [
      { step: 1, title: 'Eligibility Check', description: 'Confirm eligibility requirements and required documents by visa type.' },
      { step: 2, title: 'Document Preparation', description: 'Prepare visa application form, supporting documents, and fees.' },
      { step: 3, title: 'Immigration Office Filing', description: 'Submit application at the local immigration office.' },
      { step: 4, title: 'Review', description: 'Document review and interview/supplementation if needed.' },
      { step: 5, title: 'Visa Issuance', description: 'Residence status granted after review (approx. 3-4 weeks).' },
    ],
  },

  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Common questions about residence and permanent residency visas',
    items: [
      {
        question: 'How is the F-2 points-based 80 points calculated?',
        answer: 'Points are summed from education (max 35), income (max 30), age (max 20), Korean proficiency (TOPIK, max 20), and social integration program completion. A total of 80+ points is required to apply.',
      },
      {
        question: 'Who is eligible for the F-4 Overseas Korean visa?',
        answer: 'Eligible applicants include those who held Korean nationality (including those who renounced it) or their direct descendants who acquired foreign nationality. Proof that the applicant or parents held Korean nationality is required.',
      },
      {
        question: 'What are the requirements for F-5 permanent residency?',
        answer: 'F-5 has various pathways by residence status: F-2 points-based 3+ years stay, D-8 investment KRW 300M+, F-6 marriage 2+ years, etc. Requirements differ by sub-type (F-5-1 to F-5-25).',
      },
      {
        question: 'What should I be careful about when applying for an F-6 marriage visa?',
        answer: 'Marriage registration must be completed, and you must prove a genuine marriage (cohabitation, etc.). Invitation letter, income proof, housing proof, and basic livelihood security confirmation are needed.',
      },
    ],
    viewAllHref: '/en/faq',
  },

  cta: {
    title: 'Residence / Permanent Visa Consultation',
    description: 'Our specialist will guide you to the optimal residence and permanent residency visa pathway.',
    primaryButton: { text: 'Request Free Consultation', href: '/en/contact?service=residence' },
    secondaryButton: { text: 'View Visa Types', href: '/en/services' },
  },

  relatedContent: {
    title: 'Related Content',
    links: [
      { title: 'F-2 Points-based Visa Guide', description: 'Point criteria and application procedure by category', href: '/en/visa/f-2-points', type: 'guide' },
      { title: 'F-5 Permanent Residency Guide', description: 'Requirements and application methods by type', href: '/en/visa/f-5', type: 'guide' },
      { title: 'F-6 Marriage Visa Preparation', description: 'Application documents and procedure guide', href: '/en/visa/f-6', type: 'guide' },
      { title: 'Stay Period Extension Guide', description: 'How to apply for extension before expiration', href: '/en/blog', type: 'resource' },
    ],
  },

  breadcrumbs: [
    { label: 'Home', href: '/en' },
    { label: 'Services', href: '/en/services' },
    { label: 'Residence / Permanent', href: '/en/services/residence' },
  ],

  seo: {
    title: 'Residence / Permanent Visa | F-2 Points, F-4 Overseas Korean, F-5 | VISION Immigration',
    description: 'F-1 family visit, F-2 points-based, F-4 overseas Korean, F-5 permanent residency, F-6 marriage visa specialist. 8+ years experience.',
    keywords: ['residence visa', 'permanent residency', 'F-2 points', 'F-4 overseas Korean', 'F-5', 'F-6 marriage visa'],
  },
}

export const residenceCategoryZh: CategoryData = {
  id: 'residence',
  slug: 'residence',
  locale: 'zh',

  hero: {
    badge: '居留/永住签证服务',
    title: '韩国居留及永住签证专业服务',
    subtitle: '数字游民、积分制、海外同胞、永住权、结婚签证专业',
    description: 'VISION行政事务所凭借8年以上经验，专业支持F-1、F-2、F-4、F-5、F-6等韩国居留·永住签证申请。',
  },

  summary: {
    title: '居留/永住签证概要',
    content: '韩国居留·永住签证赋予外国人在大韩民国长期居住或永久居留的资格。有访问同居、积分制居住、海外同胞、永住权、结婚等多种居留资格，各签证的要求和程序不同。',
    highlights: [
      'F-1 访问同居/数字游民：家属同居、远程办公居留',
      'F-2 积分制/公益/房地产：优秀人才长期居留签证',
      'F-4 海外同胞：海外韩裔同胞居留资格',
      'F-5 永住权：大韩民国永久居住资格',
      'F-6 结婚签证：韩国国民的外国人配偶',
    ],
  },

  serviceGroups: [
    {
      id: 'f1-category',
      title: 'F-1 访问同居/数字游民',
      description: '家属同居、远程办公等访问·同居目的居留',
      services: [
        {
          id: 'f-1',
          title: 'F-1 访问同居签证',
          description: '与在韩居留外国人的家属同居目的居留资格',
          href: '/zh/visa/f-1',
          tags: ['访问同居', '家属'],
        },
        {
          id: 'f-1-digital-nomad',
          title: 'F-1 数字游民签证',
          description: '以远程办公为目的的外国数字游民签证',
          href: '/zh/visa/f-1-digital-nomad',
          featured: true,
          tags: ['数字游民', '远程办公'],
        },
      ],
    },
    {
      id: 'f2-category',
      title: 'F-2 居住签证',
      description: '基于积分制、公益事业投资、房地产投资的居住签证',
      services: [
        {
          id: 'f-2-points',
          title: 'F-2 积分制签证',
          description: '学历·收入·年龄·韩语能力等综合评估80分以上',
          href: '/zh/visa/f-2-points',
          featured: true,
          tags: ['积分制', '居住签证'],
        },
        {
          id: 'f-2-public-interest',
          title: 'F-2 公益事业投资签证',
          description: '向法务部指定公益事业投资5亿韩元以上',
          href: '/zh/visa/f-2-public-interest',
          tags: ['投资', '居住签证'],
        },
        {
          id: 'f-2-real-estate',
          title: 'F-2 房地产投资签证',
          description: '基于法务部指定地区房地产投资的居住签证',
          href: '/zh/visa/f-2-real-estate',
          tags: ['房地产', '居住签证'],
        },
      ],
    },
    {
      id: 'f4-category',
      title: 'F-4 海外同胞',
      description: '海外韩裔同胞居留资格',
      services: [
        {
          id: 'f-4',
          title: 'F-4 海外同胞签证',
          description: '曾持有大韩民国国籍的海外同胞及其后代',
          href: '/zh/visa/f-4',
          featured: true,
          tags: ['海外同胞', '韩裔'],
        },
      ],
    },
    {
      id: 'f5-category',
      title: 'F-5 永住权',
      description: '大韩民国永久居住资格',
      services: [
        {
          id: 'f-5',
          title: 'F-5 永住权',
          description: '可在大韩民国永久居住的居留资格',
          href: '/zh/visa/f-5',
          featured: true,
          tags: ['永住权', '永久居留'],
        },
      ],
    },
    {
      id: 'f6-category',
      title: 'F-6 结婚签证',
      description: '韩国国民外国人配偶的居留资格',
      services: [
        {
          id: 'f-6',
          title: 'F-6 结婚签证',
          description: '与韩国国民合法结婚的外国人配偶',
          href: '/zh/visa/f-6',
          featured: true,
          tags: ['结婚签证', '配偶'],
        },
      ],
    },
  ],

  process: {
    title: '居留签证申请流程',
    subtitle: '一般居留资格变更/延期流程',
    steps: [
      { step: 1, title: '资格条件确认', description: '确认各签证类型的资格条件及所需材料。' },
      { step: 2, title: '材料准备', description: '准备签证申请书、证明材料、手续费等。' },
      { step: 3, title: '出入境管理事务所提交', description: '向管辖出入境管理事务所提交申请书。' },
      { step: 4, title: '审查', description: '材料审查及必要时面试·补充要求。' },
      { step: 5, title: '签证发放', description: '审查完成后居留资格授予（约3-4周）。' },
    ],
  },

  faq: {
    title: '常见问题',
    subtitle: '关于居留/永住签证的常见疑问',
    items: [
      {
        question: 'F-2积分制签证80分如何计算？',
        answer: '学历（最高35分）、收入（最高30分）、年龄（最高20分）、韩语能力（TOPIK，最高20分）、社会融合项目结业等项目合计。总分80分以上即可申请。',
      },
      {
        question: 'F-4海外同胞签证申请资格是谁？',
        answer: '曾持有大韩民国国籍者（含放弃国籍者）或其直系后代中取得外国国籍的海外同胞。需提供本人或父母曾持韩国国籍的证明。',
      },
      {
        question: 'F-5永住权取得条件是什么？',
        answer: 'F-5永住权有多种途径。F-2积分制居留3年以上、D-8投资3亿韩元以上、F-6结婚2年以上等，按子类型（F-5-1~F-5-25）要求不同。',
      },
      {
        question: 'F-6结婚签证申请时有哪些注意事项？',
        answer: '需完成婚姻登记，并证明实质婚姻关系（同居等）。需要邀请函、收入证明、住房证明、基础生活保障确认书等。',
      },
    ],
    viewAllHref: '/zh/faq',
  },

  cta: {
    title: '居留/永住签证咨询',
    description: 'VISION行政事务所专业行政士为您推荐最佳居留·永住签证路径。',
    primaryButton: { text: '申请免费咨询', href: '/zh/contact?service=residence' },
    secondaryButton: { text: '查看签证种类', href: '/zh/services' },
  },

  relatedContent: {
    title: '相关内容',
    links: [
      { title: 'F-2 积分制签证详细指南', description: '各项目积分标准和申请流程', href: '/zh/visa/f-2-points', type: 'guide' },
      { title: 'F-5 永住权取得指南', description: '各类型永住权要求和申请方法', href: '/zh/visa/f-5', type: 'guide' },
      { title: 'F-6 结婚签证准备指南', description: '结婚签证申请材料和流程', href: '/zh/visa/f-6', type: 'guide' },
      { title: '居留期间延期指南', description: '居留期间到期前延期申请方法', href: '/zh/blog', type: 'resource' },
    ],
  },

  breadcrumbs: [
    { label: '首页', href: '/zh' },
    { label: '服务', href: '/zh/services' },
    { label: '居留/永住', href: '/zh/services/residence' },
  ],

  seo: {
    title: '居留/永住签证 | F-2积分制、F-4海外同胞、F-5永住权 | VISION行政事务所',
    description: 'F-1访问同居、F-2积分制、F-4海外同胞、F-5永住权、F-6结婚签证专业服务。8年以上经验VISION行政事务所。',
    keywords: ['居留签证', '永住权', 'F-2积分制', 'F-4海外同胞', 'F-5永住权', 'F-6结婚签证'],
  },
}

export const residenceCategoryJa: CategoryData = {
  id: 'residence',
  slug: 'residence',
  locale: 'ja',

  hero: {
    badge: '在留/永住ビザサービス',
    title: '韓国在留・永住ビザ専門',
    subtitle: 'デジタルノマド、ポイント制、在外同胞、永住権、結婚ビザ専門',
    description: 'VISION行政書士事務所は8年以上の経験でF-1、F-2、F-4、F-5、F-6等の韓国在留・永住ビザ申請を専門的に支援します。',
  },

  summary: {
    title: '在留/永住ビザの概要',
    content: '韓国の在留・永住ビザは、外国人が大韓民国に長期滞在または永住できる資格を付与します。訪問同居、ポイント制居住、在外同胞、永住権、結婚など多様な在留資格があり、ビザごとに要件と手続きが異なります。',
    highlights: [
      'F-1 訪問同居/デジタルノマド：家族同居、ワーケーション滞在',
      'F-2 ポイント制/公益/不動産：優秀人材の長期滞在居住ビザ',
      'F-4 在外同胞：海外韓人同胞のための在留資格',
      'F-5 永住権：大韓民国永住資格',
      'F-6 結婚ビザ：韓国国民の外国人配偶者',
    ],
  },

  serviceGroups: [
    {
      id: 'f1-category',
      title: 'F-1 訪問同居/デジタルノマド',
      description: '家族同居、ワーケーション等の訪問・同居目的滞在',
      services: [
        {
          id: 'f-1',
          title: 'F-1 訪問同居ビザ',
          description: '韓国滞在外国人の家族との同居目的の在留資格',
          href: '/ja/visa/f-1',
          tags: ['訪問同居', '家族'],
        },
        {
          id: 'f-1-digital-nomad',
          title: 'F-1 デジタルノマドビザ',
          description: 'ワーケーション目的の外国人デジタルノマドのためのビザ',
          href: '/ja/visa/f-1-digital-nomad',
          featured: true,
          tags: ['デジタルノマド', 'ワーケーション'],
        },
      ],
    },
    {
      id: 'f2-category',
      title: 'F-2 居住ビザ',
      description: 'ポイント制、公益事業投資、不動産投資に基づく居住ビザ',
      services: [
        {
          id: 'f-2-points',
          title: 'F-2 ポイント制ビザ',
          description: '学歴・所得・年齢・韓国語能力等の総合評価80点以上',
          href: '/ja/visa/f-2-points',
          featured: true,
          tags: ['ポイント制', '居住ビザ'],
        },
        {
          id: 'f-2-public-interest',
          title: 'F-2 公益事業投資ビザ',
          description: '法務部指定の公益事業に5億ウォン以上投資',
          href: '/ja/visa/f-2-public-interest',
          tags: ['投資', '居住ビザ'],
        },
        {
          id: 'f-2-real-estate',
          title: 'F-2 不動産投資ビザ',
          description: '法務部指定地域の不動産投資に基づく居住ビザ',
          href: '/ja/visa/f-2-real-estate',
          tags: ['不動産', '居住ビザ'],
        },
      ],
    },
    {
      id: 'f4-category',
      title: 'F-4 在外同胞',
      description: '海外韓人同胞のための在留資格',
      services: [
        {
          id: 'f-4',
          title: 'F-4 在外同胞ビザ',
          description: '大韓民国国籍を保有していた在外同胞及びその子孫',
          href: '/ja/visa/f-4',
          featured: true,
          tags: ['在外同胞', '韓人'],
        },
      ],
    },
    {
      id: 'f5-category',
      title: 'F-5 永住権',
      description: '大韓民国永住資格',
      services: [
        {
          id: 'f-5',
          title: 'F-5 永住権',
          description: '大韓民国に永久的に居住できる在留資格',
          href: '/ja/visa/f-5',
          featured: true,
          tags: ['永住権', '永久滞在'],
        },
      ],
    },
    {
      id: 'f6-category',
      title: 'F-6 結婚ビザ',
      description: '韓国国民の外国人配偶者のための在留資格',
      services: [
        {
          id: 'f-6',
          title: 'F-6 結婚ビザ',
          description: '韓国国民と法的に婚姻した外国人配偶者',
          href: '/ja/visa/f-6',
          featured: true,
          tags: ['結婚ビザ', '配偶者'],
        },
      ],
    },
  ],

  process: {
    title: '在留ビザ申請プロセス',
    subtitle: '一般的な在留資格変更/延長手続き',
    steps: [
      { step: 1, title: '資格要件確認', description: 'ビザタイプ別の資格要件と必要書類を確認。' },
      { step: 2, title: '書類準備', description: 'ビザ申請書、証明書類、手数料等を準備。' },
      { step: 3, title: '出入国管理事務所への提出', description: '管轄出入国管理事務所に申請書を提出。' },
      { step: 4, title: '審査', description: '書類審査、必要に応じて面接・補完要請。' },
      { step: 5, title: 'ビザ発給', description: '審査完了後、在留資格付与（約3～4週間）。' },
    ],
  },

  faq: {
    title: 'よくある質問',
    subtitle: '在留/永住ビザに関する疑問にお答えします',
    items: [
      {
        question: 'F-2ポイント制ビザの80点はどのように計算しますか？',
        answer: '学歴（最大35点）、所得（最大30点）、年齢（最大20点）、韓国語能力（TOPIK、最大20点）、社会統合プログラム修了等を合算します。合計80点以上で申請可能です。',
      },
      {
        question: 'F-4在外同胞ビザの申請資格は誰ですか？',
        answer: '大韓民国国籍を保有していた方（国籍放棄者含む）またはその直系卑属で外国国籍を取得した在外同胞が対象です。本人または親が韓国国籍であった証明が必要です。',
      },
      {
        question: 'F-5永住権の取得要件は何ですか？',
        answer: 'F-5永住権は在留資格別に様々な経路があります。F-2ポイント制3年以上滞在、D-8投資3億ウォン以上、F-6結婚2年以上等、サブタイプ（F-5-1〜F-5-25）により要件が異なります。',
      },
      {
        question: 'F-6結婚ビザ申請時の注意点は？',
        answer: '婚姻届が完了している必要があり、実質的な婚姻関係（同居等）を証明する必要があります。招待状、所得証明、住居証明、基礎生活保障確認書等が必要です。',
      },
    ],
    viewAllHref: '/ja/faq',
  },

  cta: {
    title: '在留/永住ビザ相談',
    description: 'VISION行政書士事務所の専門行政士が最適な在留・永住ビザ経路をご案内します。',
    primaryButton: { text: '無料相談を申請', href: '/ja/contact?service=residence' },
    secondaryButton: { text: 'ビザの種類を見る', href: '/ja/services' },
  },

  relatedContent: {
    title: '関連コンテンツ',
    links: [
      { title: 'F-2 ポイント制ビザ詳細ガイド', description: '項目別ポイント基準と申請手続き', href: '/ja/visa/f-2-points', type: 'guide' },
      { title: 'F-5 永住権取得ガイド', description: 'タイプ別永住権要件と申請方法', href: '/ja/visa/f-5', type: 'guide' },
      { title: 'F-6 結婚ビザ準備ガイド', description: '結婚ビザ申請書類と手続き案内', href: '/ja/visa/f-6', type: 'guide' },
      { title: '滞在期間延長ガイド', description: '滞在期間満了前の延長申請方法', href: '/ja/blog', type: 'resource' },
    ],
  },

  breadcrumbs: [
    { label: 'ホーム', href: '/ja' },
    { label: 'サービス', href: '/ja/services' },
    { label: '在留/永住', href: '/ja/services/residence' },
  ],

  seo: {
    title: '在留/永住ビザ | F-2ポイント制、F-4在外同胞、F-5永住権 | VISION行政書士事務所',
    description: 'F-1訪問同居、F-2ポイント制、F-4在外同胞、F-5永住権、F-6結婚ビザ専門。8年以上経験のVISION行政書士事務所。',
    keywords: ['在留ビザ', '永住権', 'F-2ポイント制', 'F-4在外同胞', 'F-5永住権', 'F-6結婚ビザ'],
  },
}
