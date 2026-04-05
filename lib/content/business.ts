import type { Locale } from "@/lib/seo";
import type { BusinessDetailData } from "@/components/templates/business-detail-template";

// SEO metadata for business pages
export const BUSINESS_SEO: Record<
  string,
  {
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    keywords: Record<Locale, string[]>;
  }
> = {
  "foreign-invested-company": {
    title: {
      ko: "외국인투자기업설립 | 외투법인 설립 가이드",
      en: "Foreign-Invested Company | FDI Company Setup Korea",
      zh: "外商投资企业设立 | 韩国外资企业指南",
      ja: "外国人投資企業設立 | 韓国外資企業ガイド",
    },
    description: {
      ko: "외국인투자촉진법에 따른 외국인투자기업 설립 가이드. 투자신고, 법인설립, 사업자등록까지 전 과정을 안내합니다.",
      en: "Guide to establishing a foreign-invested company in Korea under FIPA. Complete process from investment report to business registration.",
      zh: "根据外国投资促进法设立外商投资企业指南。从投资申报到营业执照的全过程。",
      ja: "外国人投資促進法に基づく外国人投資企業設立ガイド。投資届出から法人設立、事業者登録まで全過程をご案内します。",
    },
    keywords: {
      ko: ["외국인투자기업", "외투법인", "법인설립", "외국인투자", "FIPA"],
      en: ["foreign-invested company Korea", "FDI Korea", "company setup Korea"],
      zh: ["外商投资企业", "韩国外资企业", "外资法人设立"],
      ja: ["外国人投資企業", "韓国外資法人", "法人設立"],
    },
  },
  "liaison-office": {
    title: {
      ko: "연락사무소 설립 | 외국기업 한국 진출 첫 단계",
      en: "Liaison Office Setup | First Step to Enter Korean Market",
      zh: "联络处设立 | 外企进入韩国市场第一步",
      ja: "連絡事務所設立 | 外国企業の韓国進出第一歩",
    },
    description: {
      ko: "외국기업의 한국 연락사무소 설립 가이드. 사업 조사, 시장 분석 등 비영업활동을 위한 사무소 설립 절차와 요건을 안내합니다.",
      en: "Guide to establishing a liaison office in Korea for foreign companies. Learn about procedures for non-commercial activities like market research.",
      zh: "外国企业在韩国设立联络处指南。了解市场调研等非营业活动所需的办公室设立程序和要求。",
      ja: "外国企業の韓国連絡事務所設立ガイド。市場調査などの非営業活動のための事務所設立手続きと要件をご案内します。",
    },
    keywords: {
      ko: ["연락사무소", "외국기업진출", "한국진출", "사무소설립"],
      en: ["liaison office", "Korea market entry", "representative office"],
      zh: ["联络处", "外企进入韩国", "代表处设立"],
      ja: ["連絡事務所", "韓国進出", "駐在事務所"],
    },
  },
  "branch-office": {
    title: {
      ko: "지사 설립 | 외국기업 한국 지사 등록",
      en: "Branch Office Registration | Foreign Company Branch in Korea",
      zh: "分公司设立 | 外企韩国分公司注册",
      ja: "支店設立 | 外国企業の韓国支店登録",
    },
    description: {
      ko: "외국기업의 한국 지사 설립 절차 안내. 영업활동이 가능한 지사 등록 요건과 진행 과정을 상세히 설명합니다.",
      en: "Guide to registering a branch office in Korea. Learn about requirements for business operations and registration procedures.",
      zh: "外企韩国分公司设立程序指南。详细说明可开展营业活动的分公司注册要求和流程。",
      ja: "外国企業の韓国支店設立手続きガイド。営業活動が可能な支店登録要件と進行過程を詳しくご説明します。",
    },
    keywords: {
      ko: ["지사설립", "외국기업지사", "한국지사등록"],
      en: ["branch office Korea", "foreign company branch", "Korea branch registration"],
      zh: ["分公司设立", "外企分公司", "韩国分公司注册"],
      ja: ["支店設立", "外国企業支店", "韓国支店登録"],
    },
  },
  "subsidiary": {
    title: {
      ko: "현지법인 설립 | 외국인투자기업 설립",
      en: "Subsidiary Establishment | Foreign-Invested Company Setup",
      zh: "子公司设立 | 外商投资企业设立",
      ja: "現地法人設立 | 外国人投資企業設立",
    },
    description: {
      ko: "외국인투자 현지법인 설립 가이드. 자본금 요건, 법인 등록, 외국인투자신고 절차를 안내합니다.",
      en: "Guide to establishing a foreign-invested subsidiary in Korea. Learn about capital requirements, registration, and FDI procedures.",
      zh: "外商投资子公司设立指南。了解资本金要求、法人注册、外国投资申报程序。",
      ja: "外国人投資現地法人設立ガイド。資本金要件、法人登録、外国人投資届出手続きをご案内します。",
    },
    keywords: {
      ko: ["현지법인설립", "외국인투자기업", "자회사설립"],
      en: ["subsidiary Korea", "foreign-invested company", "FDI Korea"],
      zh: ["子公司设立", "外商投资企业", "韩国外资企业"],
      ja: ["現地法人設立", "外国人投資企業", "子会社設立"],
    },
  },
  "criminal-review": {
    title: {
      ko: "범죄경력 심사 대응 | 비자 거부 사유 해소",
      en: "Criminal Record Review | Visa Denial Resolution",
      zh: "犯罪记录审查应对 | 签证拒签解决",
      ja: "犯罪経歴審査対応 | ビザ拒否理由解消",
    },
    description: {
      ko: "범죄경력으로 인한 비자 거부 또는 입국 제한 사례에 대한 전문 컨설팅. 소명서 작성 및 이의신청 절차를 지원합니다.",
      en: "Expert consulting for visa denial or entry restrictions due to criminal records. We assist with appeal statements and procedures.",
      zh: "针对因犯罪记录导致的签证拒签或入境限制的专业咨询。协助撰写申诉书及申诉程序。",
      ja: "犯罪経歴によるビザ拒否または入国制限に関する専門コンサルティング。釈明書作成および異議申請手続きをサポートします。",
    },
    keywords: {
      ko: ["범죄경력심사", "비자거부", "입국금지해제", "이의신청"],
      en: ["criminal record visa", "visa denial appeal", "entry ban removal"],
      zh: ["犯罪记录签证", "签证拒签申诉", "入境禁止解除"],
      ja: ["犯罪経歴審査", "ビザ拒否", "入国禁止解除"],
    },
  },
};

// Sample business detail content
export function getBusinessDetail(slug: string, locale: Locale): BusinessDetailData | null {
  const businessData: Record<string, Partial<Record<Locale, BusinessDetailData>>> = {
    "foreign-invested-company": {
      ko: {
        slug: "foreign-invested-company",
        title: "외국인투자법인 설립",
        subtitle: "외국인투자촉진법(FIPA)에 따른 외투법인 설립 요건과 절차",
        serviceIntro:
          "외국인투자법인 설립은 외국인투자촉진법(FIPA)에 따라 외국인이 한국에 1억원 이상을 투자하고 법인을 설립하는 절차입니다. 투자신고와 외국인투자기업 등록증 발급 절차를 제외하면 국내법인 설립 절차와 유사합니다. 투자신고 → 투자자금 송금 → 법인설립등기 → 인허가 → 사업자등록 → 외국인투자기업 등록증 발급 순서로 진행되며, 업종과 투자규모에 따라 법인세·소득세 감면, 관세 면제 등 각종 인센티브를 받을 수 있습니다. 설립 후 대표이사가 외국인인 경우 D-8(기업투자) 비자, 일정 금액 이상 투자 시 F-5(공익사업투자) 영주비자 신청도 가능합니다.",
        targetCompanies: [
          "한국에 자회사(100% 외투) 또는 합작법인을 설립하려는 해외기업",
          "개인 자격으로 한국에서 법인을 설립하려는 외국인 투자자",
          "기술창업을 위해 한국 법인을 설립하려는 외국인 스타트업",
          "외국인투자 인센티브(세금감면, 입지보조금 등)를 활용하려는 기업",
          "한국에서 독립된 법인격으로 영업활동을 하려는 외국기업",
        ],
        requiredDocuments: [
          "외국인투자신고서",
          "투자자 신분증 (여권 사본)",
          "투자자 또는 모기업 법인등기부등본 (공증·아포스티유)",
          "투자금 송금 확인서 (해외 송금 증빙)",
          "법인 정관",
          "주주명부",
          "발기인 총회 의사록 (공증)",
          "사무실 임대차계약서",
          "사업계획서",
          "대표이사 취임승낙서 및 인감증명서",
          "법인인감 도장",
        ],
        processSteps: [
          {
            step: 1,
            title: "외국인투자신고",
            description: "KOTRA(대한무역투자진흥공사) 또는 외국환은행에 외국인투자신고서를 제출하고 신고확인서를 발급받습니다.",
          },
          {
            step: 2,
            title: "투자자금 송금",
            description: "해외에서 한국 내 투자전용 계좌로 투자금을 송금합니다. 최소 1억원 이상이며, 반드시 해외에서 송금되어야 합니다.",
          },
          {
            step: 3,
            title: "법인설립등기",
            description: "법원 등기소에서 법인설립등기를 진행합니다. 정관, 발기인 총회 의사록, 주주명부, 취임승낙서 등을 첨부합니다.",
          },
          {
            step: 4,
            title: "인허가 취득",
            description: "업종에 따라 필요한 인허가를 관할 관청에서 취득합니다 (음식업, 교육업, 여행업 등).",
          },
          {
            step: 5,
            title: "사업자등록",
            description: "관할 세무서에서 사업자등록증을 발급받습니다. 법인설립등기 후 20일 이내 신청해야 합니다.",
          },
          {
            step: 6,
            title: "외국인투자기업 등록",
            description: "산업통상자원부(KOTRA)에 외국인투자기업 등록을 완료하고 등록증을 발급받습니다. 세금감면 등 인센티브 수혜의 근거가 됩니다.",
          },
          {
            step: 7,
            title: "D-8 비자 신청",
            description: "대표이사 및 경영진이 외국인인 경우, 출입국관리사무소에 D-8(기업투자) 체류자격을 신청합니다.",
          },
        ],
        considerations: [
          "투자금은 반드시 해외에서 송금되어야 하며, 국내 자금은 외국인투자로 인정되지 않습니다.",
          "법인 설립 후 외국인투자기업 등록을 완료해야 세금감면 등 인센티브를 받을 수 있습니다.",
          "대표이사가 외국인인 경우 D-8 기업투자비자 신청이 필요하며, 5억원 이상 투자 시 F-5(공익사업투자) 영주비자도 검토 가능합니다.",
          "업종에 따라 별도의 인·허가가 필요한 경우가 있습니다 (음식업, 교육업, 관광업 등).",
          "수도권과 지방의 인센티브(세금감면 기간·비율, 입지보조금)가 다를 수 있습니다.",
          "고도기술수반사업, 산업지원서비스업 등은 법인세 최대 7년 감면 혜택이 있습니다.",
        ],
        faqs: [
          {
            question: "외국인투자법인 설립 최소 투자금액은 얼마인가요?",
            answer:
              "외국인투자촉진법에 따라 최소 1억원 이상을 투자해야 합니다. 투자금은 반드시 해외에서 송금되어야 하며, 국내에서 조달한 자금은 외국인투자로 인정되지 않습니다. 기술투자(산업재산권 등)의 경우 별도 기준이 적용될 수 있습니다.",
          },
          {
            question: "설립까지 얼마나 걸리나요?",
            answer:
              "서류 준비 상태에 따라 다르지만, 투자신고부터 사업자등록까지 통상 2~4주 정도 소요됩니다. 해외 서류 공증·아포스티유가 필요한 경우 추가 1~2주가 소요될 수 있습니다.",
          },
          {
            question: "외국인투자기업의 세금 혜택은 무엇인가요?",
            answer:
              "고도기술수반사업, 산업지원서비스업 등에 해당하면 법인세·소득세 최대 7년 감면, 관세 면제, 지방세 감면, 입지보조금 등의 혜택이 있습니다. 투자 규모, 업종, 입지(수도권/비수도권)에 따라 혜택 범위가 달라집니다.",
          },
          {
            question: "외국인투자법인 설립 비용은 얼마인가요?",
            answer:
              "법인설립등기 비용(등록면허세, 교육세 등), 공증비, 번역비, 컨설팅비 등이 발생합니다. 투자금 1억원 기준 약 300~500만원 정도의 부대비용이 예상됩니다.",
          },
          {
            question: "D-8 비자와 F-5 비자의 차이는 무엇인가요?",
            answer:
              "D-8(기업투자)은 외국인투자기업의 경영·관리 활동을 위한 비자로, 투자금 1억원 이상 시 신청 가능합니다. F-5(공익사업투자)는 영주비자로, 5억원 이상 투자 후 3년 이상 한국인 고용 등 요건 충족 시 신청 가능합니다.",
          },
        ],
        relatedServices: [
          { slug: "branch-office", title: "지사/지점/영업소 설치" },
          { slug: "liaison-office", title: "연락사무소 설치" },
        ],
      },
    },
    "branch-office": {
      ko: {
        slug: "branch-office",
        title: "지사/지점/영업소 설치",
        subtitle: "외국기업의 한국 지사(지점) 설치 절차와 서류 대행",
        serviceIntro:
          "지사(지점) 설치는 외국기업이 한국에서 직접 영업활동을 수행하기 위해 설립하는 영업거점입니다. 별도의 법인을 설립하지 않고도 본사 명의로 한국에서 사업을 영위할 수 있으며, 법원에 외국회사 국내지점 설치등기 후 사업자등록을 하면 바로 영업활동이 가능합니다. 회계는 해외 모회사에 종속되며, 한국 내 발생 소득에 대해서만 과세됩니다. 지사장(지점장)에 대해서는 D-7(주재) 비자, 경우에 따라 D-8(기업투자) 비자 신청이 가능합니다.",
        targetCompanies: [
          "한국에서 본사 명의로 직접 영업활동을 하려는 외국기업",
          "별도 법인 설립 없이 한국에서 매출을 발생시키려는 기업",
          "한국 시장을 테스트하면서 본격적 영업을 시작하려는 기업",
          "한국 고객사와 직접 계약을 체결해야 하는 기업",
          "한국 내 프로젝트 수행을 위한 영업거점이 필요한 기업",
        ],
        requiredDocuments: [
          "본사 법인등기부등본 (공증, 아포스티유)",
          "본사 정관 (공증, 아포스티유)",
          "본사 이사회 의사록 (한국 지사 설치 결의, 공증·아포스티유)",
          "한국 대표자(지점장) 임명장",
          "한국 대표자 신분증 사본 및 이력서",
          "사무실 임대차계약서",
          "영업기금 송금 확인서",
          "지사 사업 목적 및 활동 계획서",
          "한국 내 소송 수령 대리인 지정서 (필요 시)",
        ],
        processSteps: [
          {
            step: 1,
            title: "서류 준비",
            description: "본사 법인등기부등본, 정관, 이사회 의사록 등을 공증하고 아포스티유를 받은 후, 한국어 번역 공증을 진행합니다.",
          },
          {
            step: 2,
            title: "영업기금 송금",
            description: "본사에서 한국 내 은행 계좌로 영업기금을 송금합니다. 법적 최소 금액은 없으나 운영에 충분한 금액이 필요합니다.",
          },
          {
            step: 3,
            title: "외국회사 국내지점 설치등기",
            description: "법원 등기소에 외국회사 국내지점 설치등기를 신청합니다. 등록면허세, 교육세 등을 납부합니다.",
          },
          {
            step: 4,
            title: "사업자등록",
            description: "관할 세무서에서 사업자등록증을 발급받습니다. 지점등기 완료 후 20일 이내에 신청합니다.",
          },
          {
            step: 5,
            title: "인허가 취득",
            description: "업종에 따라 필요한 영업 인허가를 관할 관청에서 취득합니다.",
          },
          {
            step: 6,
            title: "비자 신청",
            description: "지점장 및 파견직원에 대해 D-7(주재) 비자를 출입국관리사무소에 신청합니다.",
          },
        ],
        considerations: [
          "지사는 법인과 달리 본사의 일부로 간주되므로, 본사가 지사의 채무에 대해 무한책임을 집니다.",
          "회계는 해외 모회사에 종속되며, 한국 내 발생 소득에 대해서만 한국에서 법인세가 부과됩니다.",
          "매년 결산기에 대차대조표 등 영업보고서를 법원에 제출해야 합니다.",
          "지사를 법인(자회사)으로 전환하려면 별도의 절차(지사 폐쇄 + 법인설립)가 필요합니다.",
          "지점장(대표자)은 한국 내 거주하는 자(한국인 또는 한국 체류 외국인)여야 합니다.",
          "외국인투자촉진법상 외국인투자기업 등록 대상이 아니므로, 세금감면 등 FDI 인센티브는 적용되지 않습니다.",
        ],
        faqs: [
          {
            question: "지사(지점)와 법인(자회사)의 차이는 무엇인가요?",
            answer:
              "지사는 본사의 일부로 독립된 법인격이 없으며, 본사가 무한책임을 집니다. 법인(자회사)은 독립된 법인격이 있어 책임이 투자금 한도로 제한됩니다. 또한 지사는 외국인투자 세금감면 혜택 대상이 아니지만, 외국인투자법인은 요건 충족 시 세금감면 혜택을 받을 수 있습니다.",
          },
          {
            question: "지사 설치에 최소 자본금(영업기금) 요건이 있나요?",
            answer:
              "법적 최소 자본금 요건은 없으나, 영업활동을 위한 충분한 영업기금을 본사에서 송금해야 합니다. 실질적으로 사무실 임대료, 인건비 등 최소 6개월 이상의 운영자금을 확보하는 것이 일반적입니다.",
          },
          {
            question: "지사에서 법인으로 전환할 수 있나요?",
            answer:
              "네, 지사를 폐쇄하고 새로 법인을 설립하거나, 지사의 자산·부채를 신설 법인으로 이전하는 방법이 있습니다. 세금 및 법률적 고려사항이 많으므로 전문가 상담을 권장합니다.",
          },
          {
            question: "지사 설치 비용과 기간은 얼마나 되나요?",
            answer:
              "등록면허세, 교육세, 공증비, 번역비, 대행 수수료 등이 발생하며, 서류 준비 상태에 따라 지점등기부터 사업자등록까지 약 2~3주 소요됩니다. 해외 서류 공증·아포스티유에 추가 1~2주가 필요할 수 있습니다.",
          },
        ],
        relatedServices: [
          { slug: "foreign-invested-company", title: "외국인투자법인 설립" },
          { slug: "liaison-office", title: "연락사무소 설치" },
        ],
      },
    },
    "liaison-office": {
      ko: {
        slug: "liaison-office",
        title: "연락사무소 설치",
        subtitle: "외국기업의 한국 시장 조사를 위한 첫 단계 — 신속 대행",
        serviceIntro:
          "연락사무소는 해외 기업이 한국에서 영업을 시작하기 전 업무연락, 시장조사, 연구개발, 계약 협상 등의 사전 활동을 위해 설치하는 사무소입니다. 수익을 창출하는 영업활동은 할 수 없으며, 한국 시장 진출을 위한 사전 준비 단계로 많이 활용됩니다. 운영 자금 도입 시 D-7(주재) 파견비자 신청도 가능합니다. 연락사무소에서 시장성을 확인한 후 지사(지점) 또는 법인으로 전환하는 것이 일반적인 한국 진출 경로입니다.",
        targetCompanies: [
          "한국 시장 진출을 검토 중인 외국기업",
          "한국 내 파트너사·거래처 발굴이 필요한 기업",
          "시장조사 및 타당성 검토(Feasibility Study)가 필요한 기업",
          "한국 고객사 지원·기술지원 업무가 필요한 기업",
          "본격적인 영업 전 최소 비용으로 한국 사무소를 운영하려는 기업",
        ],
        requiredDocuments: [
          "본사 법인등기부등본 (공증, 아포스티유)",
          "본사 사업자등록증 사본",
          "본사 대표자 신분증 사본",
          "한국 사무소장 임명장 (본사 발행, 공증)",
          "한국 사무소장 신분증 및 이력서",
          "사무실 임대차계약서",
          "업무활동계획서 (비영업활동 범위 명시)",
          "운영자금 송금 증빙 (필요 시)",
        ],
        processSteps: [
          {
            step: 1,
            title: "서류 준비",
            description: "본사 법인등기부등본, 사업자등록증 등을 공증하고 아포스티유를 받은 후, 한국어 번역 공증을 진행합니다.",
          },
          {
            step: 2,
            title: "사무소 확보",
            description: "한국 내 사무실 임대 계약을 체결합니다. 실제 사무공간이 확인되어야 신고가 가능합니다.",
          },
          {
            step: 3,
            title: "연락사무소 설치신고",
            description: "관할 세무서에 연락사무소 설치신고서를 제출합니다. 법원 등기는 불필요합니다.",
          },
          {
            step: 4,
            title: "고유번호증 발급",
            description: "세무서에서 고유번호증(비영리 사업자번호)을 발급받습니다. 사업자등록증과 다르며 매출 신고 의무가 없습니다.",
          },
          {
            step: 5,
            title: "운영자금 도입",
            description: "본사에서 한국 계좌로 운영자금을 송금합니다. 외국환거래 신고가 필요할 수 있습니다.",
          },
          {
            step: 6,
            title: "D-7 비자 신청",
            description: "파견 외국인 직원이 있는 경우 D-7(주재) 비자를 출입국관리사무소에 신청합니다.",
          },
        ],
        considerations: [
          "연락사무소는 영업활동(수익 창출)이 불가합니다. 매출 발생 시 탈세 등 법적 문제가 될 수 있습니다.",
          "가능한 활동: 업무연락, 시장조사, 연구개발, 품질관리, 광고선전, 계약 협상 지원 등.",
          "직원 고용 시 4대보험(국민연금, 건강보험, 고용보험, 산재보험) 가입 및 근로계약서 작성이 필요합니다.",
          "본사에서 운영비를 송금받는 경우 외국환거래법에 따른 신고가 필요할 수 있습니다.",
          "연락사무소에서 지사 또는 법인으로 전환하려면 연락사무소 폐쇄 후 별도 설치/설립 절차를 진행해야 합니다.",
        ],
        faqs: [
          {
            question: "연락사무소 설치 비용은 얼마인가요?",
            answer:
              "연락사무소 설치 자체에는 법원 등기가 불필요하므로 최소 비용만 발생합니다. 다만 사무실 임대료, 본사 서류 번역·공증 비용(약 50~100만원), 컨설팅 대행 수수료 등이 추가됩니다.",
          },
          {
            question: "연락사무소에서 영업활동이 가능한가요?",
            answer:
              "아니요, 연락사무소는 시장조사, 업무연락, 정보수집 등 비영업 활동만 가능합니다. 수익을 발생시키는 영업활동을 하려면 지사(지점) 또는 법인으로 전환해야 합니다.",
          },
          {
            question: "연락사무소 직원도 비자가 필요한가요?",
            answer:
              "본사에서 한국에 파견되는 외국인 직원은 D-7(주재) 비자가 필요합니다. 한국인 직원을 현지 채용하는 것도 가능하며, 이 경우 비자 문제는 없습니다.",
          },
          {
            question: "연락사무소 설치부터 운영 시작까지 얼마나 걸리나요?",
            answer:
              "서류 준비 상태에 따라 다르지만, 본사 서류가 준비된 상태에서 설치신고부터 고유번호증 발급까지 약 1~2주 소요됩니다. 해외 서류 공증·아포스티유에 추가 1~2주가 필요합니다.",
          },
        ],
        relatedServices: [
          { slug: "branch-office", title: "지사/지점/영업소 설치" },
          { slug: "foreign-invested-company", title: "외국인투자법인 설립" },
        ],
      },
      en: {
        slug: "liaison-office",
        title: "Liaison Office Setup",
        subtitle: "First step for foreign companies entering the Korean market",
        serviceIntro:
          "A liaison office is an establishment for foreign companies to conduct non-commercial activities such as market research, information gathering, and advertising before entering the Korean market. While business operations are not permitted, it is widely used as a preparatory step for market entry.",
        targetCompanies: [
          "Foreign companies considering entry into the Korean market",
          "Companies seeking local partners in Korea",
          "Companies requiring market research and feasibility studies",
          "Companies needing customer support operations in Korea",
        ],
        requiredDocuments: [
          "HQ corporate registry (notarized, apostilled)",
          "HQ business registration certificate",
          "HQ representative ID copy",
          "Korean office chief appointment letter",
          "Korean office chief ID and resume",
          "Office lease agreement",
          "Business activity plan",
        ],
        processSteps: [
          {
            step: 1,
            title: "Document Preparation",
            description: "HQ document notarization, apostille, and translation",
          },
          {
            step: 2,
            title: "Office Acquisition",
            description: "Sign office lease agreement in Korea",
          },
          {
            step: 3,
            title: "Registration",
            description: "Report liaison office to local tax office",
          },
          {
            step: 4,
            title: "Business Number",
            description: "Obtain unique number (non-profit entity)",
          },
          {
            step: 5,
            title: "Visa Application",
            description: "Apply for D-7 visa (if needed)",
          },
        ],
        considerations: [
          "Liaison offices cannot conduct business operations; revenue generation may cause legal issues.",
          "Employee hiring requires social insurance registration and employment contracts.",
          "Converting to branch or subsidiary requires separate procedures.",
          "Foreign exchange reporting may be required when receiving operational funds from HQ.",
        ],
        faqs: [
          {
            question: "How much does it cost to set up a liaison office?",
            answer:
              "The liaison office registration itself incurs minimal costs like registration fees. However, office rent, document translation/notarization, and consulting fees are additional.",
          },
          {
            question: "Can a liaison office conduct business operations?",
            answer:
              "No, liaison offices can only conduct non-commercial activities like market research. To conduct business, you must convert to a branch or subsidiary.",
          },
          {
            question: "Do liaison office staff need visas?",
            answer:
              "Foreign employees dispatched to Korea need D-7 visas. Korean employees can also be hired, in which case there are no visa issues.",
          },
        ],
        relatedServices: [
          { slug: "branch-office", title: "Branch Office Setup" },
          { slug: "foreign-invested-company", title: "Foreign-Invested Company Setup" },
        ],
      },
      zh: {
        slug: "liaison-office",
        title: "联络处设立",
        subtitle: "外国企业进入韩国市场的第一步",
        serviceIntro:
          "联络处是外国企业在进入韩国市场前，为进行市场调研、信息收集、广告宣传等非营业活动而设立的办公机构。虽然不能开展营业活动，但作为进入韩国市场的准备阶段被广泛使用。",
        targetCompanies: [
          "正在考虑进入韩国市场的外国企业",
          "需要在韩国寻找合作伙伴的企业",
          "需要进行市场调研和可行性研究的企业",
          "需要在韩国开展客户支持业务的企业",
        ],
        requiredDocuments: [
          "总公司法人登记簿（公证、海牙认证）",
          "总公司营业执照副本",
          "总公司代表人身份证复印件",
          "韩国办事处负责人任命书",
          "韩国办事处负责人身份证及简历",
          "办公室租赁合同",
          "业务活动计划书",
        ],
        processSteps: [
          {
            step: 1,
            title: "准备材料",
            description: "总公司文件公证、海牙认证及翻译公证",
          },
          {
            step: 2,
            title: "确保办公场所",
            description: "签订韩国办公室租赁合同",
          },
          {
            step: 3,
            title: "设立申报",
            description: "向管辖税务局申报联络处设立",
          },
          {
            step: 4,
            title: "取得登记号",
            description: "获取固有编号（非营利事业者）",
          },
          {
            step: 5,
            title: "申请签证",
            description: "申请驻在员D-7签证（如需要）",
          },
        ],
        considerations: [
          "联络处不能开展营业活动，如产生营业收入可能会引发法律问题。",
          "雇用员工时需要办理四大保险登记并签订劳动合同。",
          "从联络处转为分公司或法人需要另行办理手续。",
          "从总公司接收运营资金时可能需要进行外汇交易申报。",
        ],
        faqs: [
          {
            question: "设立联络处需要多少费用？",
            answer:
              "联络处设立本身只需要支付登记许可税等最低费用。但办公室租金、文件翻译公证费用、咨询费用等另计。",
          },
          {
            question: "联络处可以开展营业活动吗？",
            answer:
              "不可以，联络处只能进行市场调研、信息收集等非营业活动。要开展营业活动需要转换为分公司或法人。",
          },
          {
            question: "联络处员工也需要签证吗？",
            answer:
              "被派遣到韩国的外国员工需要D-7驻在员签证。也可以雇用韩国员工，这种情况下没有签证问题。",
          },
        ],
        relatedServices: [
          { slug: "branch-office", title: "分公司设立" },
          { slug: "foreign-invested-company", title: "外商投资企业设立" },
        ],
      },
      ja: {
        slug: "liaison-office",
        title: "連絡事務所設立",
        subtitle: "外国企業の韓国市場進出の第一歩",
        serviceIntro:
          "連絡事務所は、外国企業が韓国市場に進出する前に、市場調査、情報収集、広告宣伝などの非営業活動を行うために設立する事務所です。営業活動はできませんが、韓国市場進出のための準備段階として多く活用されています。",
        targetCompanies: [
          "韓国市場進出を検討中の外国企業",
          "韓国でのパートナー企業発掘が必要な企業",
          "市場調査およびフィジビリティスタディが必要な企業",
          "韓国での顧客サポート業務が必要な企業",
        ],
        requiredDocuments: [
          "本社法人登記簿謄本（公証、アポスティーユ）",
          "本社事業者登録証コピー",
          "本社代表者身分証コピー",
          "韓国事務所長任命状",
          "韓国事務所長身分証および履歴書",
          "オフィス賃貸契約書",
          "業務活動計画書",
        ],
        processSteps: [
          {
            step: 1,
            title: "書類準備",
            description: "本社書類の公証・アポスティーユ、翻訳公証",
          },
          {
            step: 2,
            title: "オフィス確保",
            description: "韓国でのオフィス賃貸契約締結",
          },
          {
            step: 3,
            title: "設立届出",
            description: "管轄税務署に連絡事務所設置届出",
          },
          {
            step: 4,
            title: "事業者登録",
            description: "固有番号証の発行（非営利事業者）",
          },
          {
            step: 5,
            title: "ビザ申請",
            description: "駐在員D-7ビザ申請（必要な場合）",
          },
        ],
        considerations: [
          "連絡事務所は営業活動ができず、売上発生時は法的問題になる可能性があります。",
          "職員雇用時は4大保険加入および労働契約書の作成が必要です。",
          "連絡事務所から支店または法人への転換には別途手続きが必要です。",
          "本社から運営費を送金される場合、外国為替取引届出が必要な場合があります。",
        ],
        faqs: [
          {
            question: "連絡事務所設立費用はいくらですか？",
            answer:
              "連絡事務所設立自体には登録免許税など最低限の費用のみかかります。ただし、オフィス賃料、書類翻訳・公証費用、コンサルティング費用などが別途かかります。",
          },
          {
            question: "連絡事務所で営業活動はできますか？",
            answer:
              "いいえ、連絡事務所は市場調査、情報収集などの非営業活動のみ可能です。営業活動をするには支店または法人に転換する必要があります。",
          },
          {
            question: "連絡事務所のスタッフもビザが必要ですか？",
            answer:
              "韓国に派遣される外国人職員はD-7駐在員ビザが必要です。韓国人職員の採用も可能で、その場合はビザの問題はありません。",
          },
        ],
        relatedServices: [
          { slug: "branch-office", title: "支店設立" },
          { slug: "foreign-invested-company", title: "外国人投資企業設立" },
        ],
      },
    },
  };

  return businessData[slug]?.[locale] || null;
}

// Get all business slugs for static generation
export function getAllBusinessSlugs(): string[] {
  return Object.keys(BUSINESS_SEO);
}

// Get business list items for category page
export function getBusinessListItems(locale: Locale) {
  return Object.entries(BUSINESS_SEO).map(([slug, seo]) => ({
    slug,
    title: seo.title[locale].split(" | ")[0],
    description: seo.description[locale],
  }));
}
