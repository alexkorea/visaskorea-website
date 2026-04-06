import type { CategoryData } from '../types'

export const criminalCategoryKo: CategoryData = {
  id: 'criminal',
  slug: 'criminal',
  locale: 'ko',

  hero: {
    badge: '사범심사 서비스',
    title: '입국금지·강제퇴거·범죄경력 심사 전문',
    subtitle: '한국 출입국관리법에 따른 사범심사 대응, 입국금지 해제, 강제퇴거 방어 전문',
    description: '과거의 출입국법 위반이나 범죄기록이 한국 입국·체류에 장애가 되고 있나요? 비전행정사사무소가 출입국관리법에 근거한 전문 대응으로 해결책을 찾아드립니다.',
  },

  summary: {
    title: '사범심사 개요',
    content: '사범심사는 출입국관리법 위반, 범죄기록, 강제퇴거 이력, 입국금지 등으로 인해 한국 입국이나 체류에 제한을 받는 외국인을 대상으로 하는 심사 절차입니다. 적절한 법적 대응과 소명을 통해 입국금지 해제, 강제퇴거 유예, 체류자격 회복 등의 구제가 가능합니다.',
    highlights: [
      '입국금지 해제 신청 (출입국관리법 제11조)',
      '강제퇴거 방어 및 이의신청 (출입국관리법 제59조)',
      '범죄경력 관련 비자·체류 심사 대응',
      '불법체류 구제 및 출국유예 신청',
    ],
  },

  serviceGroups: [
    {
      id: 'entry-ban-release',
      title: '입국금지 해제',
      description: '한국 입국금지 처분에 대한 해제 신청',
      services: [
        {
          id: 'entry-ban-release',
          title: '입국금지 해제 신청',
          description: '출입국관리법 제11조에 따른 입국금지 처분을 해제받기 위한 소명 및 신청 대행',
          href: '/ko/services/criminal/entry-ban-release',
          featured: true,
          tags: ['입국금지', '해제신청'],
        },
        {
          id: 'entry-ban-period-reduction',
          title: '입국금지 기간 단축 신청',
          description: '입국금지 기간(1~10년)의 단축을 위한 사유 소명 및 신청',
          href: '/ko/services/criminal/entry-ban-reduction',
          featured: true,
          tags: ['입국금지', '기간단축'],
        },
        {
          id: 'entry-refusal-response',
          title: '입국심사 거부 대응',
          description: '공항·항만 입국심사에서 입국 거부 시 대응 전략 및 소명',
          href: '/ko/services/criminal/entry-refusal',
          tags: ['입국거부', '공항심사'],
        },
      ],
    },
    {
      id: 'deportation-defense',
      title: '강제퇴거 방어',
      description: '출입국관리법에 따른 강제퇴거 절차 대응',
      services: [
        {
          id: 'deportation-defense',
          title: '강제퇴거 방어·이의신청',
          description: '출입국관리법 제59조에 따른 이의신청, 법무부장관 특별체류허가 신청',
          href: '/ko/services/criminal/deportation-defense',
          featured: true,
          tags: ['강제퇴거', '이의신청'],
        },
        {
          id: 'detention-release',
          title: '보호(구금) 해제 신청',
          description: '외국인보호소 구금에 대한 보호일시해제(보석) 신청',
          href: '/ko/services/criminal/detention-release',
          tags: ['보호해제', '구금'],
        },
        {
          id: 'departure-grace',
          title: '출국유예 신청',
          description: '강제퇴거 대상자의 자진출국 유예 신청',
          href: '/ko/services/criminal/departure-grace',
          tags: ['출국유예', '자진출국'],
        },
      ],
    },
    {
      id: 'criminal-record',
      title: '범죄경력 심사 대응',
      description: '범죄기록이 비자·체류에 미치는 영향 분석 및 대응',
      services: [
        {
          id: 'criminal-impact-analysis',
          title: '범죄경력 영향 분석',
          description: '형사기록이 한국 비자 발급·체류자격 변경·연장에 미치는 영향 평가',
          href: '/ko/services/criminal/criminal-analysis',
          featured: true,
          tags: ['범죄경력', '영향분석'],
        },
        {
          id: 'criminal-visa-strategy',
          title: '범죄경력자 비자 전략',
          description: '범죄기록이 있는 외국인의 비자 신청 전략 수립',
          href: '/ko/services/criminal/criminal-visa-strategy',
          tags: ['범죄경력', '비자전략'],
        },
      ],
    },
    {
      id: 'overstay-relief',
      title: '불법체류 구제',
      description: '불법체류(초과체류) 외국인을 위한 구제 절차',
      services: [
        {
          id: 'overstay-voluntary',
          title: '자진신고 및 출국유예',
          description: '불법체류 자진신고를 통한 입국금지 기간 감경 및 출국유예',
          href: '/ko/services/criminal/overstay-voluntary',
          featured: true,
          tags: ['불법체류', '자진신고'],
        },
        {
          id: 'status-recovery',
          title: '체류자격 회복 신청',
          description: '일정 요건 충족 시 불법체류 상태에서의 체류자격 회복',
          href: '/ko/services/criminal/status-recovery',
          tags: ['체류자격', '회복'],
        },
      ],
    },
  ],

  process: {
    title: '사범심사 대응 과정',
    subtitle: '입국금지 해제 신청 기준',
    steps: [
      {
        step: 1,
        title: '사안 분석 및 상담',
        description: '입국금지·강제퇴거 사유, 관련 법조항, 해제 가능성 정밀 분석',
      },
      {
        step: 2,
        title: '소명자료 준비',
        description: '입국 필요성, 재범 방지 의지, 한국 내 유대관계 등 소명자료 수집',
      },
      {
        step: 3,
        title: '해제 신청서 작성',
        description: '출입국관리법에 근거한 입국금지 해제 신청서 및 소명서 작성',
      },
      {
        step: 4,
        title: '출입국·외국인관서 심사',
        description: '출입국·외국인청(사무소)의 심사 및 법무부 보고',
      },
      {
        step: 5,
        title: '결과 통보 및 후속 조치',
        description: '해제 결정 시 비자 신청 진행, 불허 시 재신청 또는 행정심판 검토',
      },
    ],
  },

  faq: {
    title: '자주 묻는 질문',
    subtitle: '사범심사·입국금지·강제퇴거에 대한 궁금증을 해결해 드립니다',
    items: [
      {
        question: '불법체류 후 출국하면 입국금지 기간은 얼마나 되나요?',
        answer: '출입국관리법에 따라 불법체류 기간에 비례하여 1년~10년의 입국금지가 부과됩니다. 자진출국 시에는 감경될 수 있으며, 적발 후 강제퇴거 시에는 더 긴 기간이 적용됩니다.',
      },
      {
        question: '입국금지 해제 신청은 언제 할 수 있나요?',
        answer: '입국금지 기간 중이라도 해제 신청이 가능합니다. 다만, 잔여 금지기간, 위반 경위, 입국 필요성 등을 종합적으로 소명해야 하며, 승인 여부는 출입국·외국인청의 재량입니다.',
      },
      {
        question: '범죄기록이 있으면 한국 비자를 받을 수 없나요?',
        answer: '범죄 유형과 형량에 따라 다릅니다. 경미한 범죄는 비자 발급에 큰 영향이 없을 수 있으나, 중범죄·마약범죄·출입국관리법 위반 등은 입국금지 사유에 해당할 수 있습니다. 전문가 상담을 통해 정확한 영향을 분석해야 합니다.',
      },
      {
        question: '강제퇴거 명령에 대해 이의신청할 수 있나요?',
        answer: '네, 출입국관리법 제59조에 따라 강제퇴거 명령을 받은 날부터 7일 이내에 법무부장관에게 이의신청할 수 있습니다. 이의가 인정되면 특별체류허가를 받을 수 있습니다.',
      },
    ],
    viewAllHref: '/ko/faq/criminal',
  },

  cta: {
    title: '비밀 보장 무료 상담',
    description: '입국금지, 강제퇴거, 범죄기록 등으로 고민하고 계신가요? 모든 상담은 철저히 비밀이 보장됩니다. 출입국관리법 전문 행정사가 해결책을 찾아드립니다.',
    primaryButton: {
      text: '비밀 상담 신청',
      href: '/ko/contact?service=criminal',
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
        title: '입국금지 사유 완벽 가이드',
        description: '출입국관리법상 입국금지 사유와 해제 절차 상세 해설',
        href: '/ko/guides/entry-ban',
        type: 'guide',
      },
      {
        title: '강제퇴거 절차 이해하기',
        description: '강제퇴거 절차 및 이의신청 권리 안내',
        href: '/ko/guides/deportation-process',
        type: 'guide',
      },
      {
        title: '불법체류 자진신고 안내',
        description: '자진신고 시 혜택 및 절차 안내',
        href: '/ko/guides/overstay-voluntary-report',
        type: 'guide',
      },
      {
        title: '범죄유형별 입국 영향 분석',
        description: '범죄 유형에 따른 비자·체류 영향 분석',
        href: '/ko/resources/criminal-impact',
        type: 'resource',
      },
    ],
  },

  breadcrumbs: [
    { label: '홈', href: '/ko' },
    { label: '서비스', href: '/ko/services' },
    { label: '사범심사', href: '/ko/services/criminal' },
  ],

  seo: {
    title: '사범심사 | 입국금지 해제·강제퇴거 방어·범죄경력 심사 | 비전행정사사무소',
    description: '입국금지 해제, 강제퇴거 이의신청, 범죄경력 심사 대응, 불법체류 구제 전문. 출입국관리법 기반 전문 행정사 상담.',
    keywords: ['사범심사', '입국금지 해제', '강제퇴거', '범죄경력', '불법체류', '출입국관리법'],
  },
}

export const criminalCategoryEn: CategoryData = {
  id: 'criminal',
  slug: 'criminal',
  locale: 'en',

  hero: {
    badge: 'Criminal Review Services',
    title: 'Entry Ban, Deportation Defense & Criminal Record Review',
    subtitle: 'Expert assistance under Korea\'s Immigration Act for criminal review, entry ban lifting, and deportation defense',
    description: 'Are past immigration violations or criminal records blocking your entry or stay in Korea? Our licensed immigration specialists provide solutions grounded in the Immigration Act.',
  },

  summary: {
    title: 'Criminal Review Overview',
    content: 'Criminal review covers foreigners who face restrictions on entry or stay in Korea due to violations of the Immigration Act, criminal records, deportation history, or entry bans. Through proper legal response and explanation, it is possible to obtain relief such as entry ban lifting, deportation deferral, and status recovery.',
    highlights: [
      'Entry Ban Lifting (Immigration Act Article 11)',
      'Deportation Defense & Appeal (Immigration Act Article 59)',
      'Criminal Record Impact on Visa & Stay',
      'Overstay Relief & Departure Grace Period',
    ],
  },

  serviceGroups: [
    {
      id: 'entry-ban-release',
      title: 'Entry Ban Lifting',
      description: 'Applications to lift entry ban orders to Korea',
      services: [
        {
          id: 'entry-ban-release',
          title: 'Entry Ban Lifting Application',
          description: 'Explanation and application filing to lift entry ban orders under Article 11 of the Immigration Act',
          href: '/en/services/criminal/entry-ban-release',
          featured: true,
          tags: ['Entry Ban', 'Lifting'],
        },
        {
          id: 'entry-ban-period-reduction',
          title: 'Entry Ban Period Reduction',
          description: 'Application to reduce entry ban period (1-10 years) with supporting justification',
          href: '/en/services/criminal/entry-ban-reduction',
          featured: true,
          tags: ['Entry Ban', 'Reduction'],
        },
        {
          id: 'entry-refusal-response',
          title: 'Entry Refusal Response',
          description: 'Strategy and explanation for entry refusal at airports and ports',
          href: '/en/services/criminal/entry-refusal',
          tags: ['Entry Refusal', 'Airport'],
        },
      ],
    },
    {
      id: 'deportation-defense',
      title: 'Deportation Defense',
      description: 'Response to deportation proceedings under the Immigration Act',
      services: [
        {
          id: 'deportation-defense',
          title: 'Deportation Defense & Appeal',
          description: 'Filing appeals under Article 59 and applying for special stay permission from the Minister of Justice',
          href: '/en/services/criminal/deportation-defense',
          featured: true,
          tags: ['Deportation', 'Appeal'],
        },
        {
          id: 'detention-release',
          title: 'Detention Release Application',
          description: 'Application for temporary release (bail) from immigration detention',
          href: '/en/services/criminal/detention-release',
          tags: ['Detention', 'Release'],
        },
        {
          id: 'departure-grace',
          title: 'Departure Grace Period',
          description: 'Application for voluntary departure deferral for deportation subjects',
          href: '/en/services/criminal/departure-grace',
          tags: ['Departure', 'Grace Period'],
        },
      ],
    },
    {
      id: 'criminal-record',
      title: 'Criminal Record Review',
      description: 'Analysis and response for criminal record impact on visa and stay',
      services: [
        {
          id: 'criminal-impact-analysis',
          title: 'Criminal Record Impact Analysis',
          description: 'Assessment of how criminal records affect visa issuance, status change, and extension in Korea',
          href: '/en/services/criminal/criminal-analysis',
          featured: true,
          tags: ['Criminal Record', 'Analysis'],
        },
        {
          id: 'criminal-visa-strategy',
          title: 'Visa Strategy for Criminal Records',
          description: 'Visa application strategy development for foreigners with criminal records',
          href: '/en/services/criminal/criminal-visa-strategy',
          tags: ['Criminal Record', 'Visa Strategy'],
        },
      ],
    },
    {
      id: 'overstay-relief',
      title: 'Overstay Relief',
      description: 'Relief procedures for overstayed (illegal stay) foreigners',
      services: [
        {
          id: 'overstay-voluntary',
          title: 'Voluntary Report & Departure Grace',
          description: 'Reduction of entry ban period through voluntary overstay reporting and departure grace',
          href: '/en/services/criminal/overstay-voluntary',
          featured: true,
          tags: ['Overstay', 'Voluntary Report'],
        },
        {
          id: 'status-recovery',
          title: 'Status Recovery Application',
          description: 'Recovery of legal stay status from overstay status when certain conditions are met',
          href: '/en/services/criminal/status-recovery',
          tags: ['Status', 'Recovery'],
        },
      ],
    },
  ],

  process: {
    title: 'Criminal Review Process',
    subtitle: 'Based on entry ban lifting application',
    steps: [
      {
        step: 1,
        title: 'Case Analysis & Consultation',
        description: 'Detailed analysis of entry ban/deportation grounds, applicable laws, and lifting possibilities',
      },
      {
        step: 2,
        title: 'Supporting Document Preparation',
        description: 'Gathering evidence of necessity to enter Korea, commitment to compliance, and ties to Korea',
      },
      {
        step: 3,
        title: 'Application Drafting',
        description: 'Preparing entry ban lifting application and explanation letter based on the Immigration Act',
      },
      {
        step: 4,
        title: 'Immigration Authority Review',
        description: 'Review by the Immigration Office and report to the Ministry of Justice',
      },
      {
        step: 5,
        title: 'Result & Follow-up',
        description: 'If approved, proceed with visa application; if denied, consider re-application or administrative appeal',
      },
    ],
  },

  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Common questions about criminal review, entry bans, and deportation',
    items: [
      {
        question: 'How long is the entry ban after overstaying in Korea?',
        answer: 'Under the Immigration Act, entry bans of 1 to 10 years are imposed proportional to the overstay period. The ban may be reduced for voluntary departure, while longer periods apply for forced deportation.',
      },
      {
        question: 'When can I apply for entry ban lifting?',
        answer: 'You can apply for lifting even during the ban period. However, you must comprehensively explain the remaining ban period, circumstances of the violation, and necessity of entry. Approval is at the discretion of the Immigration Office.',
      },
      {
        question: 'Can I get a Korean visa with a criminal record?',
        answer: 'It depends on the type and severity of the crime. Minor offenses may not significantly affect visa issuance, but serious crimes, drug offenses, and immigration violations may constitute grounds for entry ban. Professional consultation is recommended for accurate assessment.',
      },
      {
        question: 'Can I appeal a deportation order?',
        answer: 'Yes, under Article 59 of the Immigration Act, you can file an appeal with the Minister of Justice within 7 days of receiving the deportation order. If the appeal is accepted, you may receive special stay permission.',
      },
    ],
    viewAllHref: '/en/faq/criminal',
  },

  cta: {
    title: 'Confidential Free Consultation',
    description: 'Concerned about entry bans, deportation, or criminal records? All consultations are strictly confidential. Our immigration specialists will find solutions for you.',
    primaryButton: {
      text: 'Request Consultation',
      href: '/en/contact?service=criminal',
    },
    secondaryButton: {
      text: 'View Services',
      href: '/en/services',
    },
  },

  relatedContent: {
    title: 'Related Content',
    links: [
      {
        title: 'Complete Guide to Entry Ban Grounds',
        description: 'Detailed explanation of entry ban grounds and lifting procedures under the Immigration Act',
        href: '/en/guides/entry-ban',
        type: 'guide',
      },
      {
        title: 'Understanding Deportation Procedures',
        description: 'Deportation process and appeal rights guide',
        href: '/en/guides/deportation-process',
        type: 'guide',
      },
      {
        title: 'Overstay Voluntary Reporting Guide',
        description: 'Benefits and procedures for voluntary overstay reporting',
        href: '/en/guides/overstay-voluntary-report',
        type: 'guide',
      },
      {
        title: 'Criminal Record Impact by Type',
        description: 'Analysis of visa and stay impact by crime type',
        href: '/en/resources/criminal-impact',
        type: 'resource',
      },
    ],
  },

  breadcrumbs: [
    { label: 'Home', href: '/en' },
    { label: 'Services', href: '/en/services' },
    { label: 'Criminal Review', href: '/en/services/criminal' },
  ],

  seo: {
    title: 'Criminal Review | Entry Ban Lifting, Deportation Defense | VISION Immigration',
    description: 'Entry ban lifting, deportation appeal, criminal record review, overstay relief. Expert immigration consulting based on Korea\'s Immigration Act.',
    keywords: ['criminal review', 'entry ban', 'deportation defense', 'criminal record', 'overstay', 'Korea immigration'],
  },
}

export const criminalCategoryZh: CategoryData = {
  id: 'criminal',
  slug: 'criminal',
  locale: 'zh',

  hero: {
    badge: '犯罪审查服务',
    title: '入境禁止解除·强制驱逐辩护·犯罪记录审查',
    subtitle: '基于韩国出入境管理法的犯罪审查应对、入境禁止解除、强制驱逐辩护专业服务',
    description: '过去的出入境法违规或犯罪记录是否阻碍了您进入或留在韩国？VISION行政事务所基于出入境管理法提供专业应对方案。',
  },

  summary: {
    title: '犯罪审查概要',
    content: '犯罪审查是针对因违反出入境管理法、犯罪记录、强制驱逐经历、入境禁止等原因而在韩国入境或居留受到限制的外国人的审查程序。通过适当的法律应对和申诉，可以获得入境禁止解除、强制驱逐缓期、居留资格恢复等救济。',
    highlights: [
      '入境禁止解除申请（出入境管理法第11条）',
      '强制驱逐辩护及异议申请（出入境管理法第59条）',
      '犯罪记录相关签证·居留审查应对',
      '非法滞留救济及出境缓期申请',
    ],
  },

  serviceGroups: [
    {
      id: 'entry-ban-release',
      title: '入境禁止解除',
      description: '申请解除韩国入境禁止处分',
      services: [
        {
          id: 'entry-ban-release',
          title: '入境禁止解除申请',
          description: '基于出入境管理法第11条，申诉及代理申请解除入境禁止处分',
          href: '/zh/services/criminal/entry-ban-release',
          featured: true,
          tags: ['入境禁止', '解除申请'],
        },
        {
          id: 'entry-ban-period-reduction',
          title: '入境禁止期间缩短申请',
          description: '申诉缩短入境禁止期间（1~10年）',
          href: '/zh/services/criminal/entry-ban-reduction',
          featured: true,
          tags: ['入境禁止', '期间缩短'],
        },
        {
          id: 'entry-refusal-response',
          title: '入境审查拒绝应对',
          description: '在机场·港口入境审查中被拒时的应对策略及申诉',
          href: '/zh/services/criminal/entry-refusal',
          tags: ['入境拒绝', '机场审查'],
        },
      ],
    },
    {
      id: 'deportation-defense',
      title: '强制驱逐辩护',
      description: '出入境管理法规定的强制驱逐程序应对',
      services: [
        {
          id: 'deportation-defense',
          title: '强制驱逐辩护·异议申请',
          description: '基于出入境管理法第59条提出异议申请，向法务部长官申请特别居留许可',
          href: '/zh/services/criminal/deportation-defense',
          featured: true,
          tags: ['强制驱逐', '异议申请'],
        },
        {
          id: 'detention-release',
          title: '拘留解除申请',
          description: '外国人保护所拘留的临时释放（保释）申请',
          href: '/zh/services/criminal/detention-release',
          tags: ['拘留解除', '保释'],
        },
        {
          id: 'departure-grace',
          title: '出境缓期申请',
          description: '强制驱逐对象的自愿出境缓期申请',
          href: '/zh/services/criminal/departure-grace',
          tags: ['出境缓期', '自愿出境'],
        },
      ],
    },
    {
      id: 'criminal-record',
      title: '犯罪记录审查应对',
      description: '犯罪记录对签证·居留的影响分析及应对',
      services: [
        {
          id: 'criminal-impact-analysis',
          title: '犯罪记录影响分析',
          description: '评估刑事记录对韩国签证发放·居留资格变更·延期的影响',
          href: '/zh/services/criminal/criminal-analysis',
          featured: true,
          tags: ['犯罪记录', '影响分析'],
        },
        {
          id: 'criminal-visa-strategy',
          title: '有犯罪记录者签证策略',
          description: '为有犯罪记录的外国人制定签证申请策略',
          href: '/zh/services/criminal/criminal-visa-strategy',
          tags: ['犯罪记录', '签证策略'],
        },
      ],
    },
    {
      id: 'overstay-relief',
      title: '非法滞留救济',
      description: '非法滞留（超期居留）外国人的救济程序',
      services: [
        {
          id: 'overstay-voluntary',
          title: '自愿申报及出境缓期',
          description: '通过非法滞留自愿申报减轻入境禁止期间及出境缓期',
          href: '/zh/services/criminal/overstay-voluntary',
          featured: true,
          tags: ['非法滞留', '自愿申报'],
        },
        {
          id: 'status-recovery',
          title: '居留资格恢复申请',
          description: '满足一定条件时，从非法滞留状态恢复居留资格',
          href: '/zh/services/criminal/status-recovery',
          tags: ['居留资格', '恢复'],
        },
      ],
    },
  ],

  process: {
    title: '犯罪审查应对流程',
    subtitle: '以入境禁止解除申请为基准',
    steps: [
      {
        step: 1,
        title: '案件分析及咨询',
        description: '精确分析入境禁止·强制驱逐事由、相关法条、解除可能性',
      },
      {
        step: 2,
        title: '申诉材料准备',
        description: '收集入境必要性、守法承诺、韩国关系等申诉材料',
      },
      {
        step: 3,
        title: '申请书撰写',
        description: '基于出入境管理法撰写入境禁止解除申请书及申诉书',
      },
      {
        step: 4,
        title: '出入境管理机关审查',
        description: '出入境·外国人厅（事务所）审查及向法务部报告',
      },
      {
        step: 5,
        title: '结果通知及后续措施',
        description: '获批后进行签证申请，被拒时考虑重新申请或行政审判',
      },
    ],
  },

  faq: {
    title: '常见问题',
    subtitle: '关于犯罪审查、入境禁止、强制驱逐的常见疑问',
    items: [
      {
        question: '非法滞留后出境，入境禁止期间是多久？',
        answer: '根据出入境管理法，按非法滞留期间比例处以1年~10年的入境禁止。自愿出境可减轻，被查获后强制驱逐时适用更长期间。',
      },
      {
        question: '什么时候可以申请入境禁止解除？',
        answer: '即使在入境禁止期间也可以申请解除。但需综合申诉剩余禁止期间、违规经过、入境必要性等，批准与否由出入境管理机关酌定。',
      },
      {
        question: '有犯罪记录就不能获得韩国签证吗？',
        answer: '取决于犯罪类型和刑量。轻微犯罪可能对签证发放影响不大，但重罪·毒品犯罪·出入境管理法违规等可能构成入境禁止事由。建议通过专业咨询准确分析影响。',
      },
      {
        question: '可以对强制驱逐命令提出异议吗？',
        answer: '是的，根据出入境管理法第59条，收到强制驱逐命令之日起7日内可向法务部长官提出异议申请。异议被认可后可获得特别居留许可。',
      },
    ],
    viewAllHref: '/zh/faq/criminal',
  },

  cta: {
    title: '保密免费咨询',
    description: '因入境禁止、强制驱逐、犯罪记录等问题烦恼吗？所有咨询严格保密。出入境管理法专业行政士为您寻找解决方案。',
    primaryButton: {
      text: '申请保密咨询',
      href: '/zh/contact?service=criminal',
    },
    secondaryButton: {
      text: '查看服务介绍',
      href: '/zh/services',
    },
  },

  relatedContent: {
    title: '相关内容',
    links: [
      {
        title: '入境禁止事由完整指南',
        description: '出入境管理法入境禁止事由及解除程序详解',
        href: '/zh/guides/entry-ban',
        type: 'guide',
      },
      {
        title: '了解强制驱逐程序',
        description: '强制驱逐程序及异议申请权利指南',
        href: '/zh/guides/deportation-process',
        type: 'guide',
      },
      {
        title: '非法滞留自愿申报指南',
        description: '自愿申报优惠及程序介绍',
        href: '/zh/guides/overstay-voluntary-report',
        type: 'guide',
      },
      {
        title: '按犯罪类型分析入境影响',
        description: '按犯罪类型分析签证·居留影响',
        href: '/zh/resources/criminal-impact',
        type: 'resource',
      },
    ],
  },

  breadcrumbs: [
    { label: '首页', href: '/zh' },
    { label: '服务', href: '/zh/services' },
    { label: '犯罪审查', href: '/zh/services/criminal' },
  ],

  seo: {
    title: '犯罪审查 | 入境禁止解除·强制驱逐辩护·犯罪记录审查 | VISION行政事务所',
    description: '入境禁止解除、强制驱逐异议申请、犯罪记录审查应对、非法滞留救济专业服务。基于韩国出入境管理法的专业行政士咨询。',
    keywords: ['犯罪审查', '入境禁止解除', '强制驱逐', '犯罪记录', '非法滞留', '出入境管理法'],
  },
}

export const criminalCategoryJa: CategoryData = {
  id: 'criminal',
  slug: 'criminal',
  locale: 'ja',

  hero: {
    badge: '犯罪審査サービス',
    title: '入国禁止解除・強制退去防御・犯罪経歴審査',
    subtitle: '韓国出入国管理法に基づく犯罪審査対応、入国禁止解除、強制退去防御の専門サービス',
    description: '過去の出入国法違反や犯罪記録が韓国への入国・滞在の障害になっていませんか？VISION行政士事務所が出入国管理法に基づく専門的な対応で解決策をお探しします。',
  },

  summary: {
    title: '犯罪審査の概要',
    content: '犯罪審査は、出入国管理法違反、犯罪記録、強制退去歴、入国禁止などにより韓国への入国や滞在に制限を受ける外国人を対象とする審査手続きです。適切な法的対応と疎明を通じて、入国禁止解除、強制退去猶予、在留資格回復などの救済が可能です。',
    highlights: [
      '入国禁止解除申請（出入国管理法第11条）',
      '強制退去防御・異議申立て（出入国管理法第59条）',
      '犯罪経歴関連ビザ・在留審査対応',
      '不法滞在救済・出国猶予申請',
    ],
  },

  serviceGroups: [
    {
      id: 'entry-ban-release',
      title: '入国禁止解除',
      description: '韓国入国禁止処分に対する解除申請',
      services: [
        {
          id: 'entry-ban-release',
          title: '入国禁止解除申請',
          description: '出入国管理法第11条に基づく入国禁止処分の解除のための疎明・申請代行',
          href: '/ja/services/criminal/entry-ban-release',
          featured: true,
          tags: ['入国禁止', '解除申請'],
        },
        {
          id: 'entry-ban-period-reduction',
          title: '入国禁止期間短縮申請',
          description: '入国禁止期間（1～10年）の短縮のための事由疎明・申請',
          href: '/ja/services/criminal/entry-ban-reduction',
          featured: true,
          tags: ['入国禁止', '期間短縮'],
        },
        {
          id: 'entry-refusal-response',
          title: '入国審査拒否対応',
          description: '空港・港での入国審査で拒否された際の対応戦略・疎明',
          href: '/ja/services/criminal/entry-refusal',
          tags: ['入国拒否', '空港審査'],
        },
      ],
    },
    {
      id: 'deportation-defense',
      title: '強制退去防御',
      description: '出入国管理法に基づく強制退去手続きへの対応',
      services: [
        {
          id: 'deportation-defense',
          title: '強制退去防御・異議申立て',
          description: '出入国管理法第59条に基づく異議申立て、法務部長官への特別在留許可申請',
          href: '/ja/services/criminal/deportation-defense',
          featured: true,
          tags: ['強制退去', '異議申立て'],
        },
        {
          id: 'detention-release',
          title: '収容解除申請',
          description: '外国人保護所収容に対する一時解除（保釈）申請',
          href: '/ja/services/criminal/detention-release',
          tags: ['収容解除', '保釈'],
        },
        {
          id: 'departure-grace',
          title: '出国猶予申請',
          description: '強制退去対象者の自主出国猶予申請',
          href: '/ja/services/criminal/departure-grace',
          tags: ['出国猶予', '自主出国'],
        },
      ],
    },
    {
      id: 'criminal-record',
      title: '犯罪経歴審査対応',
      description: '犯罪記録がビザ・在留に及ぼす影響の分析・対応',
      services: [
        {
          id: 'criminal-impact-analysis',
          title: '犯罪経歴影響分析',
          description: '刑事記録が韓国ビザ発給・在留資格変更・延長に及ぼす影響の評価',
          href: '/ja/services/criminal/criminal-analysis',
          featured: true,
          tags: ['犯罪経歴', '影響分析'],
        },
        {
          id: 'criminal-visa-strategy',
          title: '犯罪経歴者ビザ戦略',
          description: '犯罪記録のある外国人のビザ申請戦略策定',
          href: '/ja/services/criminal/criminal-visa-strategy',
          tags: ['犯罪経歴', 'ビザ戦略'],
        },
      ],
    },
    {
      id: 'overstay-relief',
      title: '不法滞在救済',
      description: '不法滞在（超過滞在）外国人のための救済手続き',
      services: [
        {
          id: 'overstay-voluntary',
          title: '自主申告・出国猶予',
          description: '不法滞在の自主申告による入国禁止期間の軽減・出国猶予',
          href: '/ja/services/criminal/overstay-voluntary',
          featured: true,
          tags: ['不法滞在', '自主申告'],
        },
        {
          id: 'status-recovery',
          title: '在留資格回復申請',
          description: '一定の要件を満たす場合、不法滞在状態からの在留資格回復',
          href: '/ja/services/criminal/status-recovery',
          tags: ['在留資格', '回復'],
        },
      ],
    },
  ],

  process: {
    title: '犯罪審査対応の流れ',
    subtitle: '入国禁止解除申請を基準',
    steps: [
      {
        step: 1,
        title: '案件分析・相談',
        description: '入国禁止・強制退去事由、関連法条、解除可能性の精密分析',
      },
      {
        step: 2,
        title: '疎明資料準備',
        description: '入国の必要性、遵法意志、韓国との結びつきなどの疎明資料収集',
      },
      {
        step: 3,
        title: '申請書作成',
        description: '出入国管理法に基づく入国禁止解除申請書・疎明書の作成',
      },
      {
        step: 4,
        title: '出入国管理機関の審査',
        description: '出入国・外国人庁（事務所）の審査および法務部への報告',
      },
      {
        step: 5,
        title: '結果通知・後続措置',
        description: '許可の場合はビザ申請へ、不許可の場合は再申請または行政審判を検討',
      },
    ],
  },

  faq: {
    title: 'よくある質問',
    subtitle: '犯罪審査・入国禁止・強制退去に関する疑問にお答えします',
    items: [
      {
        question: '不法滞在後に出国した場合、入国禁止期間はどのくらいですか？',
        answer: '出入国管理法により、不法滞在期間に比例して1年～10年の入国禁止が課されます。自主出国の場合は軽減される可能性があり、摘発後の強制退去の場合はより長い期間が適用されます。',
      },
      {
        question: '入国禁止解除申請はいつできますか？',
        answer: '入国禁止期間中でも解除申請が可能です。ただし、残りの禁止期間、違反の経緯、入国の必要性などを総合的に疎明する必要があり、承認は出入国管理機関の裁量です。',
      },
      {
        question: '犯罪記録があると韓国ビザは取得できませんか？',
        answer: '犯罪の種類と刑量によります。軽微な犯罪はビザ発給に大きな影響がない場合もありますが、重罪・薬物犯罪・出入国管理法違反などは入国禁止事由に該当する可能性があります。正確な影響の分析には専門家への相談をお勧めします。',
      },
      {
        question: '強制退去命令に対して異議申立てはできますか？',
        answer: 'はい、出入国管理法第59条により、強制退去命令を受けた日から7日以内に法務部長官に異議申立てができます。異議が認められれば特別在留許可を受けることができます。',
      },
    ],
    viewAllHref: '/ja/faq/criminal',
  },

  cta: {
    title: '秘密厳守 無料相談',
    description: '入国禁止、強制退去、犯罪記録などでお悩みですか？すべての相談は厳格に秘密が守られます。出入国管理法専門の行政士が解決策をお探しします。',
    primaryButton: {
      text: '秘密相談を申請',
      href: '/ja/contact?service=criminal',
    },
    secondaryButton: {
      text: 'サービス案内を見る',
      href: '/ja/services',
    },
  },

  relatedContent: {
    title: '関連コンテンツ',
    links: [
      {
        title: '入国禁止事由の完全ガイド',
        description: '出入国管理法上の入国禁止事由と解除手続きの詳細解説',
        href: '/ja/guides/entry-ban',
        type: 'guide',
      },
      {
        title: '強制退去手続きを理解する',
        description: '強制退去手続きと異議申立て権利のガイド',
        href: '/ja/guides/deportation-process',
        type: 'guide',
      },
      {
        title: '不法滞在の自主申告ガイド',
        description: '自主申告時の優遇措置と手続き案内',
        href: '/ja/guides/overstay-voluntary-report',
        type: 'guide',
      },
      {
        title: '犯罪類型別入国影響分析',
        description: '犯罪類型に応じたビザ・在留への影響分析',
        href: '/ja/resources/criminal-impact',
        type: 'resource',
      },
    ],
  },

  breadcrumbs: [
    { label: 'ホーム', href: '/ja' },
    { label: 'サービス', href: '/ja/services' },
    { label: '犯罪審査', href: '/ja/services/criminal' },
  ],

  seo: {
    title: '犯罪審査 | 入国禁止解除・強制退去防御・犯罪経歴審査 | VISION行政士事務所',
    description: '入国禁止解除、強制退去異議申立て、犯罪経歴審査対応、不法滞在救済の専門サービス。韓国出入国管理法に基づく専門行政士相談。',
    keywords: ['犯罪審査', '入国禁止解除', '強制退去', '犯罪経歴', '不法滞在', '出入国管理法'],
  },
}
