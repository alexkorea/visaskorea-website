import type { Locale } from "@/lib/seo";
import type { VisaDetailData } from "@/components/templates/visa-detail-template";

// SEO metadata for visa pages
export const VISA_SEO: Record<
  string,
  {
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    keywords: Record<Locale, string[]>;
  }
> = {
  "d-8": {
    title: {
      ko: "D-8 기업투자비자 | 외국인 투자 법인설립 비자",
      en: "D-8 Corporate Investment Visa | Foreign Investment Visa Korea",
      zh: "D-8企业投资签证 | 韩国外国投资签证",
      ja: "D-8企業投資ビザ | 韓国外国人投資ビザ",
    },
    description: {
      ko: "D-8 기업투자비자는 외국인이 한국에서 법인을 설립하거나 투자하여 경영활동을 하기 위한 비자입니다. 자격요건, 필요서류, 진행절차를 안내합니다.",
      en: "D-8 Corporate Investment Visa allows foreigners to establish or invest in a company in Korea. Learn about eligibility, required documents, and application process.",
      zh: "D-8企业投资签证允许外国人在韩国设立或投资公司。了解资格条件、所需材料和申请流程。",
      ja: "D-8企業投資ビザは、外国人が韓国で法人を設立または投資するためのビザです。資格要件、必要書類、手続きをご案内します。",
    },
    keywords: {
      ko: ["D-8 비자", "기업투자비자", "외국인투자", "법인설립비자", "투자비자"],
      en: ["D-8 visa", "corporate investment visa", "foreign investment Korea", "business visa Korea"],
      zh: ["D-8签证", "企业投资签证", "韩国外国投资", "法人设立签证"],
      ja: ["D-8ビザ", "企業投資ビザ", "外国人投資", "法人設立ビザ"],
    },
  },
  "d-7": {
    title: {
      ko: "D-7 주재원비자 | 외국기업 주재원 체류자격",
      en: "D-7 Intra-company Transfer Visa | Expat Visa Korea",
      zh: "D-7驻韩代表签证 | 外企驻韩人员签证",
      ja: "D-7駐在員ビザ | 韓国駐在員ビザ",
    },
    description: {
      ko: "D-7 주재원비자는 외국기업의 한국 지사 또는 연락사무소에 파견되는 직원을 위한 비자입니다. 신청자격과 필요서류를 확인하세요.",
      en: "D-7 Intra-company Transfer Visa is for employees dispatched to Korean branches or liaison offices of foreign companies.",
      zh: "D-7驻韩代表签证适用于被派遣到韩国分公司或联络处的外企员工。",
      ja: "D-7駐在員ビザは、外国企業の韓国支社または連絡事務所に派遣される社員のためのビザです。",
    },
    keywords: {
      ko: ["D-7 비자", "주재원비자", "연락사무소비자", "지사설립"],
      en: ["D-7 visa", "intra-company transfer", "expat visa", "liaison office visa"],
      zh: ["D-7签证", "驻韩代表签证", "外企派遣签证"],
      ja: ["D-7ビザ", "駐在員ビザ", "連絡事務所ビザ"],
    },
  },
  "e-7": {
    title: {
      ko: "E-7 특정활동비자 | 전문인력 취업비자",
      en: "E-7 Special Occupation Visa | Skilled Worker Visa Korea",
      zh: "E-7特定活动签证 | 韩国专业人才签证",
      ja: "E-7特定活動ビザ | 韓国専門人材ビザ",
    },
    description: {
      ko: "E-7 특정활동비자는 전문 기술이나 지식을 가진 외국인이 한국에서 취업하기 위한 비자입니다. 자격요건과 신청 절차를 안내합니다.",
      en: "E-7 Special Occupation Visa allows skilled professionals to work in Korea. Comprehensive guide on eligibility and application.",
      zh: "E-7特定活动签证允许具有专业技能的外国人在韩国就业。了解资格条件和申请流程。",
      ja: "E-7特定活動ビザは、専門技術を持つ外国人が韓国で就労するためのビザです。",
    },
    keywords: {
      ko: ["E-7 비자", "특정활동비자", "취업비자", "전문인력비자"],
      en: ["E-7 visa", "work visa Korea", "skilled worker visa", "employment visa"],
      zh: ["E-7签证", "特定活动签证", "韩国工作签证"],
      ja: ["E-7ビザ", "特定活動ビザ", "就労ビザ"],
    },
  },
  "f-2-7": {
    title: {
      ko: "F-2-7 점수제 거주비자 | 우수인재 장기체류",
      en: "F-2-7 Points-based Residence Visa | Talented Foreign Professionals",
      zh: "F-2-7积分制居住签证 | 优秀人才长期居留",
      ja: "F-2-7ポイント制居住ビザ | 優秀人材長期滞在",
    },
    description: {
      ko: "F-2-7 점수제 거주비자는 학력, 연봉, 나이 등을 점수화하여 80점 이상 시 발급되는 우수인재 거주비자입니다.",
      en: "F-2-7 Points-based Residence Visa is issued to talented professionals scoring 80+ points based on education, income, and age.",
      zh: "F-2-7积分制居住签证根据学历、年薪、年龄等评分，80分以上可获得优秀人才居住签证。",
      ja: "F-2-7ポイント制居住ビザは、学歴・年収・年齢などを点数化し、80点以上で発給される優秀人材ビザです。",
    },
    keywords: {
      ko: ["F-2-7 비자", "점수제비자", "거주비자", "우수인재비자"],
      en: ["F-2-7 visa", "points-based visa", "residence visa Korea", "talented professional visa"],
      zh: ["F-2-7签证", "积分制签证", "居住签证"],
      ja: ["F-2-7ビザ", "ポイント制ビザ", "居住ビザ"],
    },
  },
  "f-5": {
    title: {
      ko: "F-5 영주권 | 한국 영주자격 취득 가이드",
      en: "F-5 Permanent Residency | Korean Green Card Guide",
      zh: "F-5永住权 | 韩国永久居留权指南",
      ja: "F-5永住権 | 韓国永住資格取得ガイド",
    },
    description: {
      ko: "F-5 영주권은 한국에서 영구적으로 거주할 수 있는 체류자격입니다. 투자영주, 고액투자, 점수제 영주 등 다양한 취득 경로를 안내합니다.",
      en: "F-5 Permanent Residency allows indefinite stay in Korea. Learn about investment, high-value investment, and points-based pathways.",
      zh: "F-5永住权允许在韩国永久居留。了解投资移民、高额投资、积分制等多种取得途径。",
      ja: "F-5永住権は、韓国に永久的に居住できる在留資格です。投資永住、高額投資、ポイント制など、様々な取得経路をご案内します。",
    },
    keywords: {
      ko: ["F-5 비자", "영주권", "영주비자", "한국이민", "투자영주"],
      en: ["F-5 visa", "permanent residency Korea", "Korean green card", "immigration Korea"],
      zh: ["F-5签证", "永住权", "韩国绿卡", "韩国移民"],
      ja: ["F-5ビザ", "永住権", "韓国永住", "韓国移民"],
    },
  },
  "f-4": {
    title: {
      ko: "F-4 재외동포비자 | 재외동포 체류자격",
      en: "F-4 Overseas Korean Visa | Ethnic Korean Residence",
      zh: "F-4海外同胞签证 | 韩裔居留签证",
      ja: "F-4在外同胞ビザ | 在外韓国人在留資格",
    },
    description: {
      ko: "F-4 재외동포비자는 해외에 거주하는 한국계 외국인을 위한 체류자격입니다. 자격요건과 신청 절차를 안내합니다.",
      en: "F-4 Overseas Korean Visa is for ethnic Koreans living abroad. Learn about eligibility and application procedures.",
      zh: "F-4海外同胞签证适用于居住在海外的韩裔外国人。了解资格条件和申请流程。",
      ja: "F-4在外同胞ビザは、海外に居住する韓国系外国人のための在留資格です。",
    },
    keywords: {
      ko: ["F-4 비자", "재외동포비자", "동포비자", "재외국민"],
      en: ["F-4 visa", "overseas Korean visa", "ethnic Korean visa"],
      zh: ["F-4签证", "海外同胞签证", "韩裔签证"],
      ja: ["F-4ビザ", "在外同胞ビザ", "同胞ビザ"],
    },
  },
  "d-9": {
    title: {
      ko: "D-9 무역경영비자 | 무역·사업경영 체류자격",
      en: "D-9 Trade Management Visa | Business Management Visa Korea",
      zh: "D-9贸易经营签证 | 韩国贸易管理签证",
      ja: "D-9貿易経営ビザ | 韓国貿易管理ビザ",
    },
    description: {
      ko: "D-9 무역경영비자는 한국에서 무역 또는 사업경영 활동을 위한 체류자격입니다. D-9-5 개인사업자 비자와 D-9-2 설비투자 비자를 안내합니다.",
      en: "D-9 Trade Management Visa for conducting trade or business management in Korea. Learn about D-9-5 and D-9-2 visa types.",
      zh: "D-9贸易经营签证用于在韩国进行贸易或事业经营活动。了解D-9-5和D-9-2签证类型。",
      ja: "D-9貿易経営ビザは韓国で貿易または事業経営活動のための在留資格です。D-9-5とD-9-2ビザをご案内します。",
    },
    keywords: {
      ko: ["D-9 비자", "무역비자", "무역경영비자", "D-9-5", "D-9-2", "설비투자비자"],
      en: ["D-9 visa", "trade visa Korea", "business management visa", "D-9-5", "D-9-2"],
      zh: ["D-9签证", "贸易签证", "贸易经营签证", "D-9-5", "D-9-2"],
      ja: ["D-9ビザ", "貿易ビザ", "貿易経営ビザ", "D-9-5", "D-9-2"],
    },
  },
};

// Sample visa detail content
export function getVisaDetail(slug: string, locale: Locale): VisaDetailData | null {
  const visaData: Record<string, Record<Locale, VisaDetailData>> = {
    "d-8": {
      ko: {
        slug: "d-8",
        title: "D-8 기업투자비자",
        subtitle: "외국인 투자 법인설립 및 경영활동을 위한 비자",
        overview:
          "D-8 기업투자비자는 외국인이 대한민국에서 외국인투자촉진법에 따른 투자를 하고 해당 기업의 경영, 관리 또는 생산·기술 분야에 필수 전문인력으로 활동하기 위한 체류자격입니다. 최소 1억원 이상의 투자금액이 필요하며, 투자기업의 대표이사 또는 임원으로 활동할 수 있습니다.",
        targetApplicants: [
          "외국인투자기업의 대표이사 또는 등기임원",
          "외국인투자기업의 필수 전문인력",
          "스타트업 창업자 (기술창업 D-8-4)",
          "해외 법인의 한국 자회사 설립 희망자",
        ],
        eligibility: [
          "외국인투자촉진법에 따른 외국인투자 요건 충족 (최소 1억원 이상)",
          "투자기업에서 경영, 관리 또는 전문 기술 업무 담당",
          "범죄경력 및 입국금지 이력 없음",
          "해당 분야 관련 학력 또는 경력 보유",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "외국인투자신고서 또는 외국인투자기업등록증명서",
          "법인등기부등본",
          "사업자등록증",
          "투자금 송금 증빙서류",
          "사업계획서",
          "최종학력증명서",
          "경력증명서",
          "재직증명서 (해당 시)",
        ],
        process: [
          {
            step: 1,
            title: "투자 계획 수립",
            description: "사업 아이템 선정 및 투자 규모, 형태 결정",
          },
          {
            step: 2,
            title: "법인 설립",
            description: "한국 내 법인 설립 및 사업자등록",
          },
          {
            step: 3,
            title: "외국인투자신고",
            description: "KOTRA 또는 외국환은행을 통한 외국인투자신고",
          },
          {
            step: 4,
            title: "투자금 송금",
            description: "해외에서 국내로 투자금 송금 및 증빙 확보",
          },
          {
            step: 5,
            title: "비자 신청",
            description: "출입국관리사무소에 D-8 비자 신청",
          },
          {
            step: 6,
            title: "비자 발급",
            description: "심사 완료 후 D-8 비자 발급 (약 2-4주 소요)",
          },
        ],
        processingTime: "약 2-4주",
        importantNotes: [
          "투자금은 반드시 해외에서 송금되어야 하며, 국내 자금은 인정되지 않습니다.",
          "법인 설립 후 3개월 이내에 외국인투자신고를 완료해야 합니다.",
          "D-8 비자 소지자의 배우자와 미성년 자녀는 F-3 동반비자 신청이 가능합니다.",
          "기업 활동 실적이 없는 경우 비자 연장이 거부될 수 있습니다.",
        ],
        faqs: [
          {
            question: "D-8 비자로 얼마나 체류할 수 있나요?",
            answer:
              "D-8 비자는 최초 1-2년간 발급되며, 이후 기업 활동 실적에 따라 2년 단위로 연장할 수 있습니다. 장기 체류 시 영주권(F-5) 전환도 가능합니다.",
          },
          {
            question: "1억원 미만으로도 D-8 비자를 받을 수 있나요?",
            answer:
              "일반적으로 1억원 이상의 투자가 필요하지만, 기술창업(D-8-4)의 경우 정부 지원 프로그램 선정 시 투자금액 요건이 완화될 수 있습니다.",
          },
          {
            question: "D-8 비자 소지 중 다른 회사에서 일할 수 있나요?",
            answer:
              "D-8 비자는 투자한 기업에서의 활동만 허용됩니다. 다른 기업에서 근무하려면 별도의 체류자격 변경이 필요합니다.",
          },
        ],
        relatedVisas: [
          { slug: "d-7", title: "D-7 주재원비자" },
          { slug: "f-5", title: "F-5 영주권" },
          { slug: "e-7", title: "E-7 특정활동비자" },
        ],
      },
      en: {
        slug: "d-8",
        title: "D-8 Corporate Investment Visa",
        subtitle: "For foreign investment and business management in Korea",
        overview:
          "The D-8 Corporate Investment Visa allows foreigners to invest in Korea under the Foreign Investment Promotion Act and work as essential personnel in management, administration, or technical fields. A minimum investment of 100 million KRW is required, and holders can serve as CEO or executive of the invested company.",
        targetApplicants: [
          "CEOs or registered executives of foreign-invested companies",
          "Essential professional staff of foreign-invested companies",
          "Startup founders (Tech Startup D-8-4)",
          "Those wishing to establish Korean subsidiaries of overseas corporations",
        ],
        eligibility: [
          "Meet foreign investment requirements under FIPA (minimum 100 million KRW)",
          "Engaged in management, administration, or specialized technical work",
          "No criminal record or entry ban history",
          "Relevant educational background or work experience",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Foreign Investment Report or Registration Certificate",
          "Corporate registry",
          "Business registration certificate",
          "Investment remittance proof",
          "Business plan",
          "Degree certificate",
          "Employment certificate",
          "Career certificate (if applicable)",
        ],
        process: [
          {
            step: 1,
            title: "Investment Planning",
            description: "Select business item and determine investment scale",
          },
          {
            step: 2,
            title: "Company Establishment",
            description: "Establish corporation and register business in Korea",
          },
          {
            step: 3,
            title: "Foreign Investment Report",
            description: "Report through KOTRA or foreign exchange bank",
          },
          {
            step: 4,
            title: "Fund Transfer",
            description: "Transfer investment from overseas and obtain proof",
          },
          {
            step: 5,
            title: "Visa Application",
            description: "Apply for D-8 visa at immigration office",
          },
          {
            step: 6,
            title: "Visa Issuance",
            description: "D-8 visa issued after review (approx. 2-4 weeks)",
          },
        ],
        processingTime: "Approximately 2-4 weeks",
        importantNotes: [
          "Investment must be remitted from overseas; domestic funds are not accepted.",
          "Foreign investment report must be completed within 3 months of company establishment.",
          "Spouse and minor children of D-8 holders can apply for F-3 dependent visa.",
          "Visa extension may be denied if there is no business activity.",
        ],
        faqs: [
          {
            question: "How long can I stay with a D-8 visa?",
            answer:
              "D-8 visa is initially issued for 1-2 years and can be extended in 2-year increments based on business performance. Long-term residents may also apply for permanent residency (F-5).",
          },
          {
            question: "Can I get a D-8 visa with less than 100 million KRW?",
            answer:
              "Generally, 100 million KRW or more is required, but for tech startups (D-8-4), investment requirements may be relaxed if selected for government support programs.",
          },
          {
            question: "Can I work at another company while holding a D-8 visa?",
            answer:
              "D-8 visa only permits activities at the invested company. Working at another company requires a separate status change.",
          },
        ],
        relatedVisas: [
          { slug: "d-7", title: "D-7 Intra-company Transfer" },
          { slug: "f-5", title: "F-5 Permanent Residency" },
          { slug: "e-7", title: "E-7 Special Occupation" },
        ],
      },
      zh: {
        slug: "d-8",
        title: "D-8 企业投资签证",
        subtitle: "外国人投资设立法人及经营活动签证",
        overview:
          "D-8企业投资签证允许外国人根据《外国投资促进法》在韩国进行投资，并作为企业经营、管理或技术领域的核心人才开展活动。最低投资金额为1亿韩元，持有者可担任所投资企业的代表理事或高管。",
        targetApplicants: [
          "外资企业的代表理事或登记高管",
          "外资企业的核心专业人才",
          "创业者（技术创业 D-8-4）",
          "希望在韩国设立海外法人子公司者",
        ],
        eligibility: [
          "符合《外国投资促进法》规定的外国投资要求（最低1亿韩元）",
          "从事企业经营、管理或专业技术工作",
          "无犯罪记录及入境禁止历史",
          "具有相关学历或工作经验",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "外国投资申报书或外资企业登记证",
          "法人登记簿誊本",
          "营业执照",
          "投资汇款证明",
          "商业计划书",
          "最终学历证明",
          "工作经历证明",
          "在职证明（如适用）",
        ],
        process: [
          {
            step: 1,
            title: "制定投资计划",
            description: "选择商业项目，确定投资规模和形式",
          },
          {
            step: 2,
            title: "设立法人",
            description: "在韩国设立法人并进行工商登记",
          },
          {
            step: 3,
            title: "外国投资申报",
            description: "通过KOTRA或外汇银行进行外国投资申报",
          },
          {
            step: 4,
            title: "汇款投资",
            description: "从海外汇入投资款并取得证明",
          },
          {
            step: 5,
            title: "申请签证",
            description: "向出入境管理局申请D-8签证",
          },
          {
            step: 6,
            title: "签证签发",
            description: "审核完成后签发D-8签证（约2-4周）",
          },
        ],
        processingTime: "约2-4周",
        importantNotes: [
          "投资款必须从海外汇入，国内资金不予认可。",
          "法人设立后3个月内必须完成外国投资申报。",
          "D-8签证持有者的配偶和未成年子女可申请F-3随行签证。",
          "如无企业活动实绩，签证延期可能被拒。",
        ],
        faqs: [
          {
            question: "D-8签证可以停留多久？",
            answer:
              "D-8签证初次签发1-2年，此后可根据企业活动实绩以2年为单位延期。长期居住者还可申请转换为永住权（F-5）。",
          },
          {
            question: "投资不足1亿韩元也能获得D-8签证吗？",
            answer:
              "一般需要1亿韩元以上的投资，但技术创业（D-8-4）如被政府支援项目选中，投资金额要求可能会降低。",
          },
          {
            question: "持有D-8签证期间可以在其他公司工作吗？",
            answer:
              "D-8签证仅允许在所投资的企业开展活动。如需在其他企业工作，需另行办理居留资格变更。",
          },
        ],
        relatedVisas: [
          { slug: "d-7", title: "D-7 驻韩代表签证" },
          { slug: "f-5", title: "F-5 永住权" },
          { slug: "e-7", title: "E-7 特定活动签证" },
        ],
      },
      ja: {
        slug: "d-8",
        title: "D-8 企業投資ビザ",
        subtitle: "外国人投資による法人設立・経営活動のためのビザ",
        overview:
          "D-8企業投資ビザは、外国人投資促進法に基づき韓国で投資を行い、当該企業の経営、管理、または専門技術分野で必須人材として活動するための在留資格です。最低1億ウォン以上の投資が必要で、投資企業の代表取締役または役員として活動できます。",
        targetApplicants: [
          "外国人投資企業の代表取締役または登記役員",
          "外国人投資企業の必須専門人材",
          "スタートアップ創業者（技術創業 D-8-4）",
          "海外法人の韓国子会社設立希望者",
        ],
        eligibility: [
          "外国人投資促進法に基づく外国人投資要件を満たすこと（最低1億ウォン以上）",
          "投資企業で経営、管理または専門技術業務を担当",
          "犯罪歴および入国禁止履歴がないこと",
          "当該分野の学歴または経歴を有すること",
        ],
        requiredDocuments: [
          "ビザ申請書",
          "パスポートコピー",
          "証明写真（3.5x4.5cm）",
          "外国人投資届出書または外国人投資企業登録証明書",
          "法人登記簿謄本",
          "事業者登録証",
          "投資金送金証明書類",
          "事業計画書",
          "最終学歴証明書",
          "経歴証明書",
          "在職証明書（該当する場合）",
        ],
        process: [
          {
            step: 1,
            title: "投資計画の策定",
            description: "事業アイテム選定、投資規模・形態の決定",
          },
          {
            step: 2,
            title: "法人設立",
            description: "韓国での法人設立および事業者登録",
          },
          {
            step: 3,
            title: "外国人投資届出",
            description: "KOTRAまたは外国為替銀行を通じた外国人投資届出",
          },
          {
            step: 4,
            title: "投資金送金",
            description: "海外から国内への投資金送金および証憑確保",
          },
          {
            step: 5,
            title: "ビザ申請",
            description: "出入国管理事務所でD-8ビザ申請",
          },
          {
            step: 6,
            title: "ビザ発給",
            description: "審査完了後D-8ビザ発給（約2〜4週間）",
          },
        ],
        processingTime: "約2〜4週間",
        importantNotes: [
          "投資金は必ず海外から送金される必要があり、国内資金は認められません。",
          "法人設立後3ヶ月以内に外国人投資届出を完了する必要があります。",
          "D-8ビザ所持者の配偶者と未成年の子女はF-3同伴ビザの申請が可能です。",
          "企業活動実績がない場合、ビザ延長が拒否されることがあります。",
        ],
        faqs: [
          {
            question: "D-8ビザでどれくらい滞在できますか？",
            answer:
              "D-8ビザは最初1〜2年間発給され、その後企業活動実績に応じて2年単位で延長できます。長期滞在の場合、永住権（F-5）への切り替えも可能です。",
          },
          {
            question: "1億ウォン未満でもD-8ビザを取得できますか？",
            answer:
              "一般的に1億ウォン以上の投資が必要ですが、技術創業（D-8-4）の場合、政府支援プログラムに選定されれば投資金額要件が緩和されることがあります。",
          },
          {
            question: "D-8ビザ所持中に他の会社で働けますか？",
            answer:
              "D-8ビザは投資した企業での活動のみ許可されます。他の企業で勤務するには別途の在留資格変更が必要です。",
          },
        ],
        relatedVisas: [
          { slug: "d-7", title: "D-7 駐在員ビザ" },
          { slug: "f-5", title: "F-5 永住権" },
          { slug: "e-7", title: "E-7 特定活動ビザ" },
        ],
      },
    },
    "d-9": {
      ko: {
        slug: "d-9",
        title: "D-9 무역경영비자",
        subtitle: "무역 및 사업경영 활동을 위한 체류자격",
        overview:
          "D-9 무역경영비자는 대한민국에서 무역, 사업경영, 영리사업 등의 활동을 하기 위한 체류자격입니다. 외국인투자촉진법에 의한 투자가 아닌 일반 무역 및 사업 활동에 해당하며, D-9-5(개인사업자)와 D-9-2(설비투자) 등의 세부 유형이 있습니다.",
        targetApplicants: [
          "한국에서 무역업을 운영하려는 외국인",
          "개인사업자로 사업을 운영하려는 외국인 (D-9-5)",
          "설비투자를 통한 사업 운영 희망자 (D-9-2)",
          "한국 기업과의 무역거래를 위해 체류가 필요한 외국인",
        ],
        eligibility: [
          "무역 또는 사업경영을 위한 구체적인 사업계획 보유",
          "사업 운영을 위한 충분한 자금 보유 증빙",
          "국내 사업장 확보 (사무실 임대차 계약 등)",
          "관련 분야 경력 또는 자격 보유",
          "범죄경력 및 입국금지 이력 없음",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "사업자등록증 또는 사업계획서",
          "사업장 임대차 계약서",
          "재산 또는 자금 증빙서류 (은행 잔고증명 등)",
          "무역실적 증빙서류 (해당 시)",
          "경력증명서 또는 자격증 사본",
          "최종학력증명서",
          "납세증명서 (체류 연장 시)",
        ],
        process: [
          { step: 1, title: "사업 계획 수립", description: "무역 또는 사업 아이템 선정 및 사업계획서 작성" },
          { step: 2, title: "사업장 확보", description: "국내 사무실 임대 및 사업자등록" },
          { step: 3, title: "자금 증빙 준비", description: "사업 운영 자금 증빙 서류 확보" },
          { step: 4, title: "비자 신청", description: "출입국관리사무소에 D-9 비자 신청" },
          { step: 5, title: "비자 발급", description: "심사 완료 후 D-9 비자 발급 (약 2-4주 소요)" },
        ],
        processingTime: "약 2-4주",
        importantNotes: [
          "D-9-5 (개인사업자): 외국인이 한국에서 개인사업자로 등록하여 사업을 운영할 수 있는 비자입니다. 일정 규모 이상의 매출 실적이 연장 시 필요할 수 있습니다.",
          "D-9-2 (설비투자): 외국인이 한국에 설비 투자를 하여 제조업 등을 운영하기 위한 비자입니다. 일정 금액 이상의 설비투자 증빙이 필요합니다.",
          "D-9 비자는 D-8 비자와 달리 외국인투자촉진법 적용 대상이 아니므로, 외국인투자 인센티브(세금 감면 등)를 받을 수 없습니다.",
          "사업 실적이 없거나 매출이 저조한 경우 비자 연장이 거부될 수 있습니다.",
          "D-9 비자 소지자의 배우자와 미성년 자녀는 F-3 동반비자 신청이 가능합니다.",
        ],
        faqs: [
          {
            question: "D-9-5 개인사업자 비자의 자격요건은 무엇인가요?",
            answer: "D-9-5 비자는 한국에서 개인사업자로 등록하여 무역이나 서비스업 등을 운영하려는 외국인에게 발급됩니다. 구체적인 사업계획서, 사업장 확보 증빙, 충분한 자금 증명이 필요합니다.",
          },
          {
            question: "D-9-2 설비투자비자는 얼마를 투자해야 하나요?",
            answer: "D-9-2 설비투자비자는 제조업 등 설비가 필요한 업종에서 일정 금액 이상의 설비투자를 한 경우 발급됩니다. 구체적인 투자 금액은 업종과 규모에 따라 다르며, 설비투자 증빙서류가 필요합니다.",
          },
          {
            question: "D-8 비자와 D-9 비자의 차이점은 무엇인가요?",
            answer: "D-8 비자는 외국인투자촉진법에 따른 투자(최소 1억원)로 발급되며, 세금 감면 등 인센티브가 있습니다. D-9 비자는 일반 무역/사업경영용으로, 인센티브는 없지만 투자 요건이 상대적으로 유연합니다.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 기업투자비자" },
          { slug: "d-7", title: "D-7 주재원비자" },
          { slug: "e-7", title: "E-7 특정활동비자" },
          { slug: "f-5", title: "F-5 영주권" },
        ],
      },
      en: {
        slug: "d-9",
        title: "D-9 Trade Management Visa",
        subtitle: "Visa for trade and business management activities",
        overview: "The D-9 Trade Management Visa is for foreigners who wish to conduct trade, business management, or commercial activities in Korea. Unlike the D-8 visa, it is not under the Foreign Investment Promotion Act. Sub-types include D-9-5 (Individual Business) and D-9-2 (Facility Investment).",
        targetApplicants: ["Foreigners operating trade businesses in Korea", "Individual business operators (D-9-5)", "Facility investment business operators (D-9-2)", "Foreigners requiring extended stay for trade with Korean companies"],
        eligibility: ["Concrete business plan for trade or business management", "Sufficient funds for business operation", "Secured domestic business premises", "Relevant experience or qualifications", "No criminal record or entry ban history"],
        requiredDocuments: ["Visa application form", "Passport copy", "Photo (3.5x4.5cm)", "Business registration or business plan", "Office lease agreement", "Financial proof (bank statement)", "Trade performance records (if applicable)", "Career certificate", "Education certificate", "Tax payment certificate (for extension)"],
        process: [{ step: 1, title: "Business Planning", description: "Select trade/business item and prepare business plan" }, { step: 2, title: "Secure Premises", description: "Lease office space and register business" }, { step: 3, title: "Prepare Financial Proof", description: "Gather fund verification documents" }, { step: 4, title: "Apply for Visa", description: "Submit D-9 visa application to immigration office" }, { step: 5, title: "Visa Issuance", description: "D-9 visa issued after review (approx. 2-4 weeks)" }],
        processingTime: "Approx. 2-4 weeks",
        importantNotes: ["D-9-5 (Individual Business): For foreigners registering as individual business operators in Korea.", "D-9-2 (Facility Investment): For foreigners investing in manufacturing facilities.", "D-9 visa does not qualify for foreign investment incentives (tax benefits etc.) unlike D-8.", "Visa extension may be denied if business shows no performance or revenue.", "Spouse and minor children of D-9 visa holders can apply for F-3 dependent visa."],
        faqs: [{ question: "What are the requirements for D-9-5 visa?", answer: "D-9-5 visa requires a concrete business plan, secured business premises, and sufficient fund proof for individual business operation in Korea." }, { question: "How much investment is needed for D-9-2?", answer: "D-9-2 requires facility investment in manufacturing or related industries. The specific amount varies by industry and scale." }, { question: "What is the difference between D-8 and D-9?", answer: "D-8 is under the Foreign Investment Promotion Act (min. KRW 100M) with tax incentives. D-9 is for general trade/business with more flexible requirements but no incentives." }],
        relatedVisas: [{ slug: "d-8", title: "D-8 Corporate Investment Visa" }, { slug: "d-7", title: "D-7 Intra-company Transfer Visa" }, { slug: "e-7", title: "E-7 Professional Visa" }, { slug: "f-5", title: "F-5 Permanent Residency" }],
      },
      zh: {
        slug: "d-9",
        title: "D-9 贸易经营签证",
        subtitle: "贸易及事业经营活动的居留资格",
        overview: "D-9贸易经营签证是在韩国从事贸易、事业经营、营利事业等活动的居留资格。与D-8签证不同，不适用外国人投资促进法。细分类型包括D-9-5（个人事业者）和D-9-2（设备投资）。",
        targetApplicants: ["在韩国经营贸易业的外国人", "个人事业者（D-9-5）", "设备投资事业运营者（D-9-2）", "因与韩国企业贸易往来需要长期居留的外国人"],
        eligibility: ["具有贸易或事业经营的具体事业计划", "拥有充足的事业运营资金", "确保国内事业场所", "具有相关领域经验或资格", "无犯罪记录及入境禁止历史"],
        requiredDocuments: ["签证申请书", "护照复印件", "证件照（3.5x4.5cm）", "事业者登记证或事业计划书", "事务所租赁合同", "资金证明（银行余额证明等）", "贸易实绩证明（如适用）", "经历证明书", "最终学历证明书", "纳税证明（延期时）"],
        process: [{ step: 1, title: "事业计划制定", description: "选定贸易或事业项目并编写事业计划书" }, { step: 2, title: "确保事业场所", description: "租赁国内办公室并进行事业者登记" }, { step: 3, title: "准备资金证明", description: "确保事业运营资金证明材料" }, { step: 4, title: "申请签证", description: "向出入境管理事务所申请D-9签证" }, { step: 5, title: "签证发放", description: "审查完成后发放D-9签证（约2-4周）" }],
        processingTime: "约2-4周",
        importantNotes: ["D-9-5（个人事业者）：外国人在韩国以个人事业者身份登记并经营事业的签证。", "D-9-2（设备投资）：外国人在韩国进行设备投资运营制造业等的签证。", "D-9签证与D-8不同，不能享受外国人投资优惠（减税等）。", "事业无实绩或营收低迷时签证延期可能被拒绝。"],
        faqs: [{ question: "D-9-5签证的资格要件是什么？", answer: "D-9-5签证需要具体的事业计划书、事业场所确保证明和充足的资金证明。" }, { question: "D-9-2需要投资多少？", answer: "D-9-2需要在制造业等需要设备的行业进行一定金额以上的设备投资，具体金额因行业和规模而异。" }, { question: "D-8和D-9的区别是什么？", answer: "D-8适用外国人投资促进法（最低1亿韩元），有减税优惠。D-9用于一般贸易/事业经营，要求更灵活但无优惠。" }],
        relatedVisas: [{ slug: "d-8", title: "D-8 企业投资签证" }, { slug: "d-7", title: "D-7 驻在员签证" }, { slug: "e-7", title: "E-7 特定活动签证" }, { slug: "f-5", title: "F-5 永住权" }],
      },
      ja: {
        slug: "d-9",
        title: "D-9 貿易経営ビザ",
        subtitle: "貿易および事業経営活動のための在留資格",
        overview: "D-9貿易経営ビザは、韓国で貿易、事業経営、営利事業などの活動を行うための在留資格です。D-8ビザとは異なり、外国人投資促進法の適用対象ではありません。D-9-5（個人事業者）とD-9-2（設備投資）などの細分類型があります。",
        targetApplicants: ["韓国で貿易業を運営する外国人", "個人事業者として事業を運営する外国人（D-9-5）", "設備投資による事業運営希望者（D-9-2）", "韓国企業との貿易取引のために滞在が必要な外国人"],
        eligibility: ["貿易または事業経営のための具体的な事業計画", "事業運営のための十分な資金保有", "国内事業場の確保", "関連分野の経験または資格保有", "犯罪歴および入国禁止歴なし"],
        requiredDocuments: ["ビザ申請書", "パスポートのコピー", "証明写真（3.5x4.5cm）", "事業者登録証または事業計画書", "事務所賃貸借契約書", "資金証明書類（銀行残高証明等）", "貿易実績証明書類（該当時）", "経歴証明書", "最終学歴証明書", "納税証明書（延長時）"],
        process: [{ step: 1, title: "事業計画策定", description: "貿易または事業アイテム選定および事業計画書作成" }, { step: 2, title: "事業場確保", description: "国内事務所賃貸および事業者登録" }, { step: 3, title: "資金証明準備", description: "事業運営資金証明書類の確保" }, { step: 4, title: "ビザ申請", description: "出入国管理事務所にD-9ビザ申請" }, { step: 5, title: "ビザ発給", description: "審査完了後D-9ビザ発給（約2-4週間）" }],
        processingTime: "約2-4週間",
        importantNotes: ["D-9-5（個人事業者）：外国人が韓国で個人事業者として登録し事業を運営するビザです。", "D-9-2（設備投資）：外国人が韓国に設備投資を行い製造業等を運営するためのビザです。", "D-9ビザはD-8と異なり、外国人投資インセンティブ（減税等）を受けることができません。", "事業実績がないか売上が低調な場合、ビザ延長が拒否される可能性があります。"],
        faqs: [{ question: "D-9-5ビザの資格要件は何ですか？", answer: "D-9-5ビザは具体的な事業計画書、事業場確保証明、十分な資金証明が必要です。" }, { question: "D-9-2はいくら投資が必要ですか？", answer: "D-9-2は製造業等設備が必要な業種で一定金額以上の設備投資が必要で、具体的な金額は業種と規模によります。" }, { question: "D-8とD-9の違いは何ですか？", answer: "D-8は外国人投資促進法適用（最低1億ウォン）で減税優遇あり。D-9は一般貿易/事業経営用で要件は柔軟ですが優遇なしです。" }],
        relatedVisas: [{ slug: "d-8", title: "D-8 企業投資ビザ" }, { slug: "d-7", title: "D-7 駐在員ビザ" }, { slug: "e-7", title: "E-7 特定活動ビザ" }, { slug: "f-5", title: "F-5 永住権" }],
      },
    },
  };

  return visaData[slug]?.[locale] || null;
}

// Get all visa slugs for static generation
export function getAllVisaSlugs(): string[] {
  return Object.keys(VISA_SEO);
}

// Get visa list items for category page
export function getVisaListItems(locale: Locale) {
  return Object.entries(VISA_SEO).map(([slug, seo]) => ({
    slug,
    title: seo.title[locale].split(" | ")[0],
    description: seo.description[locale],
  }));
}
