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
  const businessData: Record<string, Record<Locale, BusinessDetailData>> = {
    "liaison-office": {
      ko: {
        slug: "liaison-office",
        title: "연락사무소 설립",
        subtitle: "외국기업의 한국 시장 조사를 위한 첫 단계",
        serviceIntro:
          "연락사무소는 외국기업이 한국 시장에 진출하기 전 시장조사, 정보수집, 광고선전 등 비영업 활동을 수행하기 위해 설립하는 사무소입니다. 영업활동은 불가능하지만, 한국 시장 진출을 위한 사전 준비 단계로 많이 활용됩니다.",
        targetCompanies: [
          "한국 시장 진출을 검토 중인 외국기업",
          "한국 내 파트너사 발굴이 필요한 기업",
          "시장조사 및 타당성 검토가 필요한 기업",
          "한국 고객사 지원 업무가 필요한 기업",
        ],
        requiredDocuments: [
          "본사 법인등기부등본 (공증, 아포스티유)",
          "본사 사업자등록증 사본",
          "본사 대표자 신분증 사본",
          "한국 사무소장 임명장",
          "한국 사무소장 신분증 및 이력서",
          "사무실 임대차계약서",
          "업무활동계획서",
        ],
        processSteps: [
          {
            step: 1,
            title: "서류 준비",
            description: "본사 서류 공증 및 아포스티유, 번역 공증 진행",
          },
          {
            step: 2,
            title: "사무소 확보",
            description: "한국 내 사무실 임대 계약 체결",
          },
          {
            step: 3,
            title: "설립신고",
            description: "관할 세무서에 연락사무소 설치신고",
          },
          {
            step: 4,
            title: "사업자등록",
            description: "고유번호증 발급 (비영리 사업자)",
          },
          {
            step: 5,
            title: "비자 신청",
            description: "주재원 D-7 비자 신청 (필요시)",
          },
        ],
        considerations: [
          "연락사무소는 영업활동이 불가하며, 매출 발생 시 법적 문제가 될 수 있습니다.",
          "직원 고용 시 4대 보험 가입 및 근로계약서 작성이 필요합니다.",
          "연락사무소에서 지사 또는 법인으로 전환하려면 별도 절차가 필요합니다.",
          "본사에서 운영비를 송금받는 경우 외국환거래 신고가 필요할 수 있습니다.",
        ],
        faqs: [
          {
            question: "연락사무소 설립 비용은 얼마인가요?",
            answer:
              "연락사무소 설립 자체에는 등록면허세 등 최소 비용만 발생합니다. 다만 사무실 임대료, 서류 번역·공증 비용, 컨설팅 비용 등이 추가됩니다.",
          },
          {
            question: "연락사무소에서 영업활동이 가능한가요?",
            answer:
              "아니요, 연락사무소는 시장조사, 정보수집 등 비영업 활동만 가능합니다. 영업활동을 하려면 지사 또는 법인으로 전환해야 합니다.",
          },
          {
            question: "연락사무소 직원도 비자가 필요한가요?",
            answer:
              "한국에 파견되는 외국인 직원은 D-7 주재원비자가 필요합니다. 한국인 직원 채용도 가능하며 이 경우 비자 문제는 없습니다.",
          },
        ],
        relatedServices: [
          { slug: "branch-office", title: "지사 설립" },
          { slug: "subsidiary", title: "현지법인 설립" },
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
          { slug: "subsidiary", title: "Subsidiary Establishment" },
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
          { slug: "subsidiary", title: "子公司设立" },
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
          { slug: "subsidiary", title: "現地法人設立" },
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
