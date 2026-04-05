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
  "naturalization": {
    title: { ko: "귀화 신청 | 대한민국 국적 취득", en: "Naturalization | Korean Citizenship", zh: "归化申请 | 韩国国籍取得", ja: "帰化申請 | 韓国国籍取得" },
    description: { ko: "대한민국 귀화 신청 절차, 자격요건, 필요서류를 안내합니다. 일반귀화, 간이귀화, 특별귀화의 차이점을 확인하세요.", en: "Korean naturalization application process, eligibility, and required documents.", zh: "韩国归化申请流程、资格要件、所需文件指南。", ja: "韓国帰化申請手続き、資格要件、必要書類をご案内します。" },
    keywords: { ko: ["귀화", "귀화신청", "한국국적", "일반귀화", "간이귀화"], en: ["naturalization", "Korean citizenship"], zh: ["归化", "韩国国籍"], ja: ["帰化", "韓国国籍"] },
  },
  "nationality-recovery": {
    title: { ko: "국적회복 | 대한민국 국적 되찾기", en: "Nationality Recovery | Regain Korean Citizenship", zh: "国籍恢复 | 恢复韩国国籍", ja: "国籍回復 | 韓国国籍を取り戻す" },
    description: { ko: "외국 국적 취득 후 대한민국 국적을 되찾는 국적회복 절차와 요건을 안내합니다. 65세 이상 복수국적 특례도 확인하세요.", en: "Procedures for recovering Korean nationality after acquiring foreign citizenship.", zh: "获取外国国籍后恢复韩国国籍的手续和要件指南。", ja: "外国籍取得後の韓国国籍回復手続きと要件をご案内します。" },
    keywords: { ko: ["국적회복", "한국국적회복", "복수국적", "65세 국적회복"], en: ["nationality recovery", "Korean citizenship recovery"], zh: ["国籍恢复", "韩国国籍恢复"], ja: ["国籍回復", "韓国国籍回復"] },
  },
  "e-6": {
    title: {
      ko: "E-6 예술흥행비자 | 공연·연예·스포츠 취업비자",
      en: "E-6 Arts & Entertainment Visa | Performance Visa Korea",
      zh: "E-6艺术演出签证 | 韩国演艺签证",
      ja: "E-6芸術興行ビザ | 韓国芸能ビザ",
    },
    description: {
      ko: "E-6 예술흥행비자는 공연, 연예, 스포츠 등 예술흥행 활동을 위한 취업비자입니다. 자격요건, 필요서류, 신청 절차를 안내합니다.",
      en: "E-6 Arts & Entertainment Visa for performance, entertainment, and sports activities in Korea.",
      zh: "E-6艺术演出签证用于在韩国从事演出、演艺、体育等活动。",
      ja: "E-6芸術興行ビザは、公演・芸能・スポーツ等の活動のための就労ビザです。",
    },
    keywords: {
      ko: ["E-6 비자", "예술흥행비자", "공연비자", "연예비자", "스포츠비자"],
      en: ["E-6 visa", "entertainment visa Korea", "performance visa", "artist visa"],
      zh: ["E-6签证", "艺术演出签证", "演艺签证"],
      ja: ["E-6ビザ", "芸術興行ビザ", "芸能ビザ"],
    },
  },
  "d-8-executive": {
    title: {
      ko: "D-8 임원파견비자 | 외국인투자기업 임원 체류자격",
      en: "D-8 Executive Transfer Visa | Foreign-Invested Company Executive",
      zh: "D-8高管派遣签证 | 外资企业高管居留",
      ja: "D-8役員派遣ビザ | 外国人投資企業役員",
    },
    description: {
      ko: "D-8 임원파견비자는 외국인투자기업에 임원으로 파견되는 경우를 위한 비자입니다. 자격요건과 신청 절차를 안내합니다.",
      en: "D-8 Executive Transfer Visa for executives dispatched to foreign-invested companies in Korea.",
      zh: "D-8高管派遣签证适用于被派遣到韩国外资企业担任高管的人员。",
      ja: "D-8役員派遣ビザは外国人投資企業に役員として派遣される場合のビザです。",
    },
    keywords: {
      ko: ["D-8 임원파견", "임원비자", "외투기업임원", "파견비자"],
      en: ["D-8 executive visa", "executive transfer Korea", "foreign investment executive"],
      zh: ["D-8高管签证", "高管派遣", "外资企业高管"],
      ja: ["D-8役員ビザ", "役員派遣", "外国人投資企業役員"],
    },
  },
  "d-8-individual": {
    title: {
      ko: "D-8 개인투자비자 | 외국인 개인투자 체류자격",
      en: "D-8 Individual Investment Visa | Personal Foreign Investment",
      zh: "D-8个人投资签证 | 外国人个人投资居留",
      ja: "D-8個人投資ビザ | 外国人個人投資",
    },
    description: {
      ko: "D-8 개인투자비자는 외국인이 개인 자격으로 한국에 투자하여 사업을 운영하기 위한 비자입니다. 투자 요건과 절차를 안내합니다.",
      en: "D-8 Individual Investment Visa for foreigners investing personally in Korean businesses.",
      zh: "D-8个人投资签证适用于以个人身份在韩国投资经营事业的外国人。",
      ja: "D-8個人投資ビザは外国人が個人資格で韓国に投資し事業を運営するためのビザです。",
    },
    keywords: {
      ko: ["D-8 개인투자", "개인투자비자", "외국인개인투자", "투자비자"],
      en: ["D-8 individual investment", "personal investment visa Korea", "foreign investor visa"],
      zh: ["D-8个人投资", "个人投资签证", "外国人投资"],
      ja: ["D-8個人投資", "個人投資ビザ", "外国人個人投資"],
    },
  },
  "f-1-digital-nomad": {
    title: {
      ko: "F-1 디지털노마드비자 | 원격근무 체류자격",
      en: "F-1 Digital Nomad Visa | Remote Work Visa Korea",
      zh: "F-1数字游民签证 | 韩国远程工作签证",
      ja: "F-1デジタルノマドビザ | 韓国リモートワークビザ",
    },
    description: {
      ko: "F-1 디지털노마드비자는 해외 기업에 소속된 원격근무자가 한국에 체류하며 근무할 수 있는 비자입니다. 자격요건과 신청 방법을 안내합니다.",
      en: "F-1 Digital Nomad Visa allows remote workers employed overseas to live and work in Korea.",
      zh: "F-1数字游民签证允许海外企业的远程工作者在韩国居留和工作。",
      ja: "F-1デジタルノマドビザは海外企業に所属するリモートワーカーが韓国に滞在し勤務できるビザです。",
    },
    keywords: {
      ko: ["디지털노마드비자", "원격근무비자", "워케이션비자", "F-1 비자"],
      en: ["digital nomad visa Korea", "remote work visa", "workation visa Korea"],
      zh: ["数字游民签证", "远程工作签证", "韩国工作签证"],
      ja: ["デジタルノマドビザ", "リモートワークビザ", "ワーケーションビザ"],
    },
  },
  "f-1-visit": {
    title: {
      ko: "F-1 방문동거비자 | 가족 동거 체류자격",
      en: "F-1 Family Visit Visa | Family Cohabitation Visa Korea",
      zh: "F-1探亲同居签证 | 韩国家庭团聚签证",
      ja: "F-1訪問同居ビザ | 家族同居ビザ韓国",
    },
    description: {
      ko: "F-1 방문동거비자는 한국에 체류하는 가족과 동거하기 위한 체류자격입니다. 자격요건, 필요서류, 절차를 안내합니다.",
      en: "F-1 Family Visit Visa for cohabitation with family members residing in Korea.",
      zh: "F-1探亲同居签证用于与在韩国居留的家人同居。",
      ja: "F-1訪問同居ビザは韓国に滞在する家族と同居するための在留資格です。",
    },
    keywords: {
      ko: ["F-1 비자", "방문동거비자", "가족비자", "동거비자"],
      en: ["F-1 visa", "family visit visa Korea", "cohabitation visa"],
      zh: ["F-1签证", "探亲同居签证", "家庭团聚签证"],
      ja: ["F-1ビザ", "訪問同居ビザ", "家族同居ビザ"],
    },
  },
  "f-2-points": {
    title: {
      ko: "F-2 점수제비자 | 우수인재 장기체류 거주비자",
      en: "F-2 Points-based Visa | Skilled Professional Residence Korea",
      zh: "F-2积分制签证 | 优秀人才长期居留",
      ja: "F-2ポイント制ビザ | 優秀人材長期滞在",
    },
    description: {
      ko: "F-2 점수제비자는 학력, 소득, 나이, 한국어 능력 등을 점수화하여 일정 점수 이상일 때 발급되는 거주비자입니다.",
      en: "F-2 Points-based Visa issued to skilled professionals meeting point thresholds in education, income, age, and Korean proficiency.",
      zh: "F-2积分制签证根据学历、收入、年龄、韩语能力等综合评分后发放。",
      ja: "F-2ポイント制ビザは学歴・所得・年齢・韓国語能力等を点数化し一定点数以上で発給される居住ビザです。",
    },
    keywords: {
      ko: ["F-2 점수제", "점수제비자", "거주비자", "우수인재비자"],
      en: ["F-2 points visa", "points-based residence visa Korea", "skilled worker visa"],
      zh: ["F-2积分制", "积分制签证", "居住签证"],
      ja: ["F-2ポイント制", "ポイント制ビザ", "居住ビザ"],
    },
  },
  "f-2-public-interest": {
    title: {
      ko: "F-2 공익사업투자비자 | 공익투자 거주자격",
      en: "F-2 Public Interest Investment Visa | Korea Residence",
      zh: "F-2公益事业投资签证 | 韩国居留",
      ja: "F-2公益事業投資ビザ | 韓国居住資格",
    },
    description: {
      ko: "F-2 공익사업투자비자는 법무부 장관이 지정한 공익사업에 일정 금액 이상 투자한 외국인에게 발급되는 거주비자입니다.",
      en: "F-2 Public Interest Investment Visa for foreigners investing in government-designated public interest projects.",
      zh: "F-2公益事业投资签证发放给在法务部指定公益事业中投资一定金额以上的外国人。",
      ja: "F-2公益事業投資ビザは法務部長官指定の公益事業に一定額以上投資した外国人に発給されます。",
    },
    keywords: {
      ko: ["F-2 공익사업투자", "공익투자비자", "거주비자", "투자비자"],
      en: ["F-2 public interest investment", "investment residence visa Korea"],
      zh: ["F-2公益投资", "公益事业投资签证"],
      ja: ["F-2公益事業投資", "公益投資ビザ"],
    },
  },
  "f-2-real-estate": {
    title: {
      ko: "F-2 부동산투자비자 | 부동산투자 거주자격",
      en: "F-2 Real Estate Investment Visa | Property Investment Korea",
      zh: "F-2房地产投资签证 | 韩国房产投资居留",
      ja: "F-2不動産投資ビザ | 不動産投資居住資格",
    },
    description: {
      ko: "F-2 부동산투자비자는 법무부 지정 지역에 일정 금액 이상의 부동산을 투자한 외국인에게 발급되는 거주비자입니다.",
      en: "F-2 Real Estate Investment Visa for foreigners investing in designated property in Korea.",
      zh: "F-2房地产投资签证发放给在法务部指定地区投资一定金额以上房产的外国人。",
      ja: "F-2不動産投資ビザは法務部指定地域に一定額以上の不動産投資をした外国人に発給されます。",
    },
    keywords: {
      ko: ["F-2 부동산투자", "부동산투자비자", "부동산비자", "투자비자"],
      en: ["F-2 real estate investment visa", "property investment visa Korea"],
      zh: ["F-2房产投资", "房地产投资签证"],
      ja: ["F-2不動産投資", "不動産投資ビザ"],
    },
  },
  "f-6": {
    title: {
      ko: "F-6 결혼비자 | 한국인 배우자 체류자격",
      en: "F-6 Marriage Visa | Korean Spouse Visa",
      zh: "F-6结婚签证 | 韩国人配偶签证",
      ja: "F-6結婚ビザ | 韓国人配偶者ビザ",
    },
    description: {
      ko: "F-6 결혼비자는 한국 국민의 배우자인 외국인에게 발급되는 체류자격입니다. 자격요건, 필요서류, 절차를 안내합니다.",
      en: "F-6 Marriage Visa for foreign spouses of Korean nationals. Learn about requirements and procedures.",
      zh: "F-6结婚签证发放给韩国公民的外国人配偶。了解资格要求和申请程序。",
      ja: "F-6結婚ビザは韓国国民の配偶者である外国人に発給される在留資格です。",
    },
    keywords: {
      ko: ["F-6 비자", "결혼비자", "배우자비자", "국제결혼비자"],
      en: ["F-6 visa", "marriage visa Korea", "spouse visa Korea"],
      zh: ["F-6签证", "结婚签证", "配偶签证"],
      ja: ["F-6ビザ", "結婚ビザ", "配偶者ビザ"],
    },
  },
  "criminal-review": {
    title: {
      ko: "사범심사 | 출입국 사범심사 대응",
      en: "Criminal Review | Immigration Criminal Review",
      zh: "犯罪审查 | 出入境犯罪审查应对",
      ja: "犯罪審査 | 出入国犯罪審査対応",
    },
    description: {
      ko: "출입국 사범심사 대응 전문 서비스. 불법체류, 자격외활동, 위반경력 등에 대한 소명 및 이의신청을 지원합니다.",
      en: "Expert immigration criminal review services. Support for overstay, unauthorized activities, and violation appeals.",
      zh: "出入境犯罪审查应对专业服务。支持非法居留、资格外活动、违规记录的申诉。",
      ja: "出入国犯罪審査対応専門サービス。不法滞在、資格外活動、違反歴に関する釈明・異議申請をサポート。",
    },
    keywords: {
      ko: ["사범심사", "출입국사범", "불법체류", "강제퇴거", "이의신청", "출국명령"],
      en: ["criminal review immigration", "overstay Korea", "deportation appeal", "visa violation"],
      zh: ["犯罪审查", "非法居留", "强制遣返", "出境命令"],
      ja: ["犯罪審査", "不法滞在", "強制退去", "退去命令"],
    },
  },
  "f-5-1": {
    title: {
      ko: "F-5-1 일반 영주자 | 일반 요건 영주권",
      en: "F-5-1 General Permanent Residency | Korea",
      zh: "F-5-1一般永住者 | 韩国永住权",
      ja: "F-5-1一般永住者 | 韓国永住権",
    },
    description: {
      ko: "F-5-1 일반 영주자 자격은 한국에서 5년 이상 체류한 외국인이 일정 요건을 갖춘 경우 신청할 수 있는 영주권입니다.",
      en: "F-5-1 General Permanent Residency for foreigners who have resided in Korea for 5+ years.",
      zh: "F-5-1一般永住者资格适用于在韩国居住5年以上且满足条件的外国人。",
      ja: "F-5-1一般永住者資格は韓国に5年以上滞在した外国人が申請できる永住権です。",
    },
    keywords: {
      ko: ["F-5-1", "일반영주", "영주권", "5년체류"],
      en: ["F-5-1", "general permanent residency Korea"],
      zh: ["F-5-1", "一般永住"],
      ja: ["F-5-1", "一般永住"],
    },
  },
  "f-5-2": {
    title: {
      ko: "F-5-2 국민의 배우자 | 배우자 영주권",
      en: "F-5-2 Spouse of Korean National | Permanent Residency",
      zh: "F-5-2韩国公民配偶 | 永住权",
      ja: "F-5-2国民の配偶者 | 永住権",
    },
    description: {
      ko: "F-5-2는 한국 국민의 배우자로서 2년 이상 정상적인 혼인 상태를 유지한 외국인이 신청할 수 있는 영주권입니다.",
      en: "F-5-2 Permanent Residency for foreign spouses of Korean nationals with 2+ years of marriage.",
      zh: "F-5-2永住权适用于与韩国公民保持2年以上正常婚姻的外国人。",
      ja: "F-5-2は韓国国民の配偶者として2年以上正常な婚姻を維持した外国人が申請できる永住権です。",
    },
    keywords: {
      ko: ["F-5-2", "배우자영주권", "결혼영주권", "국민배우자"],
      en: ["F-5-2", "spouse permanent residency Korea"],
      zh: ["F-5-2", "配偶永住权"],
      ja: ["F-5-2", "配偶者永住権"],
    },
  },
  "f-5-5": {
    title: {
      ko: "F-5-5 고액투자자 | 투자 영주권",
      en: "F-5-5 High-Value Investor | Investment Permanent Residency",
      zh: "F-5-5高额投资者 | 投资永住权",
      ja: "F-5-5高額投資者 | 投資永住権",
    },
    description: {
      ko: "F-5-5 고액투자자 영주권은 5억원 이상을 투자하고 5명 이상의 한국인을 고용한 외국인에게 발급되는 영주자격입니다.",
      en: "F-5-5 Permanent Residency for high-value investors with 500M+ KRW investment and 5+ Korean employees.",
      zh: "F-5-5高额投资者永住权发放给投资5亿韩元以上并雇用5名以上韩国人的外国人。",
      ja: "F-5-5高額投資者永住権は5億ウォン以上投資し5名以上の韓国人を雇用した外国人に発給されます。",
    },
    keywords: {
      ko: ["F-5-5", "고액투자영주권", "투자영주", "5억투자"],
      en: ["F-5-5", "high-value investor permanent residency Korea"],
      zh: ["F-5-5", "高额投资永住权"],
      ja: ["F-5-5", "高額投資永住権"],
    },
  },
  "f-5-6": {
    title: {
      ko: "F-5-6 재외동포 영주권 | 동포 영주자격",
      en: "F-5-6 Overseas Korean Permanent Residency",
      zh: "F-5-6海外同胞永住权",
      ja: "F-5-6在外同胞永住権",
    },
    description: {
      ko: "F-5-6은 재외동포(F-4) 자격으로 2년 이상 체류한 외국국적 동포가 신청할 수 있는 영주권입니다.",
      en: "F-5-6 Permanent Residency for overseas Koreans who have held F-4 status for 2+ years.",
      zh: "F-5-6永住权适用于以F-4海外同胞身份居留2年以上的外国籍同胞。",
      ja: "F-5-6は在外同胞(F-4)資格で2年以上滞在した外国籍同胞が申請できる永住権です。",
    },
    keywords: {
      ko: ["F-5-6", "재외동포영주권", "동포영주", "F-4영주전환"],
      en: ["F-5-6", "overseas Korean permanent residency"],
      zh: ["F-5-6", "海外同胞永住权"],
      ja: ["F-5-6", "在外同胞永住権"],
    },
  },
  "f-5-8": {
    title: {
      ko: "F-5-8 재한화교 | 화교 영주권",
      en: "F-5-8 Ethnic Chinese in Korea | Permanent Residency",
      zh: "F-5-8在韩华侨 | 永住权",
      ja: "F-5-8在韓華僑 | 永住権",
    },
    description: {
      ko: "F-5-8은 한국에서 출생하여 계속 거주하고 있는 화교 등에게 발급되는 영주자격입니다.",
      en: "F-5-8 Permanent Residency for ethnic Chinese born and continuously residing in Korea.",
      zh: "F-5-8永住权发放给在韩国出生并持续居住的华侨。",
      ja: "F-5-8は韓国で出生し継続して居住している華僑等に発給される永住資格です。",
    },
    keywords: {
      ko: ["F-5-8", "재한화교", "화교영주권", "화교비자"],
      en: ["F-5-8", "Chinese Korean permanent residency"],
      zh: ["F-5-8", "在韩华侨永住权"],
      ja: ["F-5-8", "在韓華僑永住権"],
    },
  },
  "f-5-9": {
    title: {
      ko: "F-5-9 첨단분야 박사 | 박사학위 영주권",
      en: "F-5-9 Advanced Degree Holder | PhD Permanent Residency",
      zh: "F-5-9尖端领域博士 | 博士永住权",
      ja: "F-5-9先端分野博士 | 博士永住権",
    },
    description: {
      ko: "F-5-9는 국내 첨단산업 분야에서 박사학위를 취득한 외국인이 신청할 수 있는 영주자격입니다.",
      en: "F-5-9 Permanent Residency for foreigners with doctoral degrees in advanced technology fields in Korea.",
      zh: "F-5-9永住权适用于在韩国尖端产业领域取得博士学位的外国人。",
      ja: "F-5-9は韓国の先端産業分野で博士学位を取得した外国人が申請できる永住資格です。",
    },
    keywords: {
      ko: ["F-5-9", "박사영주권", "첨단분야영주", "박사비자"],
      en: ["F-5-9", "PhD permanent residency Korea"],
      zh: ["F-5-9", "博士永住权"],
      ja: ["F-5-9", "博士永住権"],
    },
  },
  "f-5-10": {
    title: {
      ko: "F-5-10 학사·석사·자격증 | 학위 기반 영주권",
      en: "F-5-10 Bachelor/Master Degree Holder | Permanent Residency",
      zh: "F-5-10学士·硕士·资格证 | 永住权",
      ja: "F-5-10学士·修士·資格証 | 永住権",
    },
    description: {
      ko: "F-5-10은 국내에서 학사 이상 학위 또는 특정 자격증을 취득하고 일정 요건을 갖춘 외국인이 신청할 수 있는 영주권입니다.",
      en: "F-5-10 Permanent Residency for degree holders or certified professionals meeting specific requirements in Korea.",
      zh: "F-5-10永住权适用于在韩国取得学士以上学位或特定资格证并满足条件的外国人。",
      ja: "F-5-10は韓国で学士以上の学位または特定資格証を取得し要件を満たした外国人が申請できる永住権です。",
    },
    keywords: {
      ko: ["F-5-10", "학위영주권", "자격증영주권", "학사영주"],
      en: ["F-5-10", "degree permanent residency Korea"],
      zh: ["F-5-10", "学位永住权"],
      ja: ["F-5-10", "学位永住権"],
    },
  },
  "f-5-11": {
    title: {
      ko: "F-5-11 특정분야 능력 | 전문능력 영주권",
      en: "F-5-11 Special Ability | Professional Permanent Residency",
      zh: "F-5-11特定领域能力 | 专业永住权",
      ja: "F-5-11特定分野能力 | 専門能力永住権",
    },
    description: {
      ko: "F-5-11은 과학, 경영, 교육, 문화, 체육 등 특정분야에서 탁월한 능력을 보유한 외국인에게 발급되는 영주자격입니다.",
      en: "F-5-11 Permanent Residency for foreigners with outstanding ability in science, business, education, culture, or sports.",
      zh: "F-5-11永住权发放给在科学、经营、教育、文化、体育等领域具有卓越能力的外国人。",
      ja: "F-5-11は科学・経営・教育・文化・体育等の特定分野で卓越した能力を有する外国人に発給される永住資格です。",
    },
    keywords: {
      ko: ["F-5-11", "특정분야영주", "전문능력영주", "우수인재영주권"],
      en: ["F-5-11", "exceptional ability permanent residency Korea"],
      zh: ["F-5-11", "特定领域永住权"],
      ja: ["F-5-11", "特定分野永住権"],
    },
  },
  "f-5-16": {
    title: {
      ko: "F-5-16 점수제 영주자 | 점수제 영주권",
      en: "F-5-16 Points-based Permanent Residency | Korea",
      zh: "F-5-16积分制永住者 | 永住权",
      ja: "F-5-16ポイント制永住者 | 永住権",
    },
    description: {
      ko: "F-5-16은 F-2-7 점수제 거주비자 소지자가 3년 이상 체류 후 영주자격으로 전환할 수 있는 영주권입니다.",
      en: "F-5-16 Points-based Permanent Residency for F-2-7 holders after 3+ years of residence.",
      zh: "F-5-16积分制永住权适用于持F-2-7签证居留3年以上的外国人。",
      ja: "F-5-16はF-2-7ポイント制居住ビザ保有者が3年以上滞在後に永住資格に転換できる永住権です。",
    },
    keywords: {
      ko: ["F-5-16", "점수제영주", "F-2-7영주전환", "영주권"],
      en: ["F-5-16", "points-based permanent residency Korea"],
      zh: ["F-5-16", "积分制永住权"],
      ja: ["F-5-16", "ポイント制永住権"],
    },
  },
  "f-5-17": {
    title: {
      ko: "F-5-17 부동산투자자 | 부동산 영주권",
      en: "F-5-17 Real Estate Investor | Property Permanent Residency",
      zh: "F-5-17房地产投资者 | 房产永住权",
      ja: "F-5-17不動産投資者 | 不動産永住権",
    },
    description: {
      ko: "F-5-17은 법무부 지정 지역에 일정 금액 이상의 부동산 투자를 유지한 외국인이 신청할 수 있는 영주권입니다.",
      en: "F-5-17 Permanent Residency for foreigners maintaining real estate investment in designated areas.",
      zh: "F-5-17永住权适用于在法务部指定地区维持一定金额以上房产投资的外国人。",
      ja: "F-5-17は法務部指定地域に一定額以上の不動産投資を維持した外国人が申請できる永住権です。",
    },
    keywords: {
      ko: ["F-5-17", "부동산영주", "부동산투자영주권", "투자영주"],
      en: ["F-5-17", "real estate permanent residency Korea"],
      zh: ["F-5-17", "房产永住权"],
      ja: ["F-5-17", "不動産永住権"],
    },
  },
  "f-5-21": {
    title: {
      ko: "F-5-21 공익사업투자자 | 공익투자 영주권",
      en: "F-5-21 Public Interest Investor | Permanent Residency",
      zh: "F-5-21公益事业投资者 | 永住权",
      ja: "F-5-21公益事業投資者 | 永住権",
    },
    description: {
      ko: "F-5-21은 법무부가 지정한 공익사업에 일정 금액 이상을 투자하고 5년 이상 유지한 외국인에게 발급되는 영주자격입니다.",
      en: "F-5-21 Permanent Residency for investors in government-designated public interest projects for 5+ years.",
      zh: "F-5-21永住权发放给在法务部指定公益事业投资一定金额以上并维持5年以上的外国人。",
      ja: "F-5-21は法務部指定の公益事業に一定額以上投資し5年以上維持した外国人に発給される永住資格です。",
    },
    keywords: {
      ko: ["F-5-21", "공익사업투자영주", "공익투자영주권"],
      en: ["F-5-21", "public interest investor permanent residency Korea"],
      zh: ["F-5-21", "公益投资永住权"],
      ja: ["F-5-21", "公益事業投資永住権"],
    },
  },
  "f-5-24": {
    title: {
      ko: "F-5-24 기술창업투자자 | 기술창업 영주권",
      en: "F-5-24 Tech Startup Investor | Permanent Residency",
      zh: "F-5-24技术创业投资者 | 永住权",
      ja: "F-5-24技術創業投資者 | 永住権",
    },
    description: {
      ko: "F-5-24는 기술창업으로 한국에서 사업을 운영하며 일정 매출과 고용 요건을 갖춘 외국인이 신청할 수 있는 영주권입니다.",
      en: "F-5-24 Permanent Residency for tech startup founders meeting revenue and employment requirements in Korea.",
      zh: "F-5-24永住权适用于在韩国经营技术创业企业并满足一定营收和雇用条件的外国人。",
      ja: "F-5-24は技術創業で韓国で事業を運営し一定の売上と雇用要件を満たした外国人が申請できる永住権です。",
    },
    keywords: {
      ko: ["F-5-24", "기술창업영주", "스타트업영주권", "창업투자영주"],
      en: ["F-5-24", "tech startup permanent residency Korea"],
      zh: ["F-5-24", "技术创业永住权"],
      ja: ["F-5-24", "技術創業永住権"],
    },
  },
  "f-5-25": {
    title: {
      ko: "F-5-25 조건부 고액투자자 | 조건부 영주권",
      en: "F-5-25 Conditional High-Value Investor | Permanent Residency",
      zh: "F-5-25有条件高额投资者 | 永住权",
      ja: "F-5-25条件付高額投資者 | 永住権",
    },
    description: {
      ko: "F-5-25는 고액 투자를 통해 조건부로 영주자격을 부여받는 비자로, 일정 기간 투자 유지 조건이 있습니다.",
      en: "F-5-25 Conditional Permanent Residency through high-value investment with maintenance requirements.",
      zh: "F-5-25是通过高额投资有条件获得永住资格的签证，需维持一定期间的投资。",
      ja: "F-5-25は高額投資により条件付で永住資格を付与されるビザで、一定期間投資維持条件があります。",
    },
    keywords: {
      ko: ["F-5-25", "조건부영주", "고액투자영주", "조건부투자영주권"],
      en: ["F-5-25", "conditional permanent residency Korea", "high-value investment"],
      zh: ["F-5-25", "有条件永住权"],
      ja: ["F-5-25", "条件付永住権"],
    },
  },
};

// Sample visa detail content
export function getVisaDetail(slug: string, locale: Locale): VisaDetailData | null {
  const visaData: Record<string, Partial<Record<Locale, VisaDetailData>>> = {
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
    "e-6": {
      ko: {
        slug: "e-6",
        title: "E-6 예술흥행비자",
        subtitle: "공연, 연예, 스포츠 등 예술흥행 활동을 위한 취업비자",
        overview:
          "E-6 예술흥행비자는 수익을 목적으로 하는 음악, 미술, 문학 등의 예술활동이나 공연, 연예, 스포츠 활동을 하려는 외국인에게 발급되는 취업비자입니다. E-6-1(예술·연예), E-6-2(호텔·유흥), E-6-3(운동선수) 등의 세부 유형이 있으며, 초청기관 또는 계약 상대방의 확인이 필요합니다.",
        targetApplicants: [
          "한국에서 공연 활동을 하려는 해외 아티스트·뮤지션",
          "방송·광고·모델 등 연예 활동을 하려는 외국인",
          "프로스포츠 선수 및 코칭 스태프",
          "국내 호텔·리조트 등에서 공연하는 외국인 연예인",
        ],
        eligibility: [
          "초청기관 또는 계약 기관이 확보되어 있을 것",
          "해당 분야 경력 또는 수상실적 등 전문성 입증",
          "범죄경력 및 입국금지 이력 없음",
          "E-6-2의 경우 문화체육관광부 공연추천서 필요",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "고용계약서 또는 초청장",
          "경력증명서·포트폴리오",
          "초청기관 사업자등록증",
          "공연추천서 (E-6-2 해당 시)",
          "최종학력증명서",
        ],
        process: [
          { step: 1, title: "계약 체결", description: "국내 초청기관과 공연·출연 계약 체결" },
          { step: 2, title: "공연추천서 발급", description: "문화체육관광부 공연추천서 신청 (E-6-2)" },
          { step: 3, title: "사증발급인정서 신청", description: "출입국관리사무소에 사증발급인정서 신청" },
          { step: 4, title: "비자 신청", description: "재외공관에서 E-6 비자 신청" },
          { step: 5, title: "입국 및 외국인등록", description: "입국 후 90일 이내 외국인등록" },
        ],
        processingTime: "약 2-4주",
        importantNotes: [
          "E-6-2(호텔·유흥업소 공연)는 인신매매 방지를 위해 심사가 엄격합니다.",
          "계약 기간 종료 후 반드시 출국하거나 체류자격을 변경해야 합니다.",
          "허가된 활동 외의 다른 취업활동은 불법입니다.",
        ],
        faqs: [
          {
            question: "E-6 비자로 얼마나 체류할 수 있나요?",
            answer: "계약 기간에 따라 최대 2년까지 발급되며, 계약 연장 시 체류기간 연장이 가능합니다.",
          },
          {
            question: "유튜버나 인플루언서도 E-6 비자를 받을 수 있나요?",
            answer: "수익을 목적으로 하는 연예·방송 활동에 해당하면 E-6 비자 대상이 될 수 있습니다. 다만 구체적인 계약 내용과 활동 범위에 따라 다릅니다.",
          },
          {
            question: "E-6와 E-7의 차이는 무엇인가요?",
            answer: "E-6는 예술흥행(공연, 연예, 스포츠) 전용이고, E-7은 전문직종(IT, 엔지니어링 등) 취업비자입니다. 활동 분야에 따라 적절한 비자를 선택해야 합니다.",
          },
        ],
        relatedVisas: [
          { slug: "e-7", title: "E-7 특정활동비자" },
          { slug: "d-8", title: "D-8 기업투자비자" },
          { slug: "f-5", title: "F-5 영주권" },
        ],
      },
    },
    "d-8-executive": {
      ko: {
        slug: "d-8-executive",
        title: "D-8 임원파견비자",
        subtitle: "외국인투자기업에 임원으로 파견되는 경우를 위한 비자",
        overview:
          "D-8 임원파견비자는 해외 모기업에서 한국 외국인투자기업(자회사·합작법인 등)에 임원(이사, 감사 등)으로 파견되는 경우에 발급되는 비자입니다. 외국인투자촉진법상 외국인투자기업에 등기임원으로 등록되어야 하며, 투자금액 요건과 기업 실적이 심사 요소가 됩니다.",
        targetApplicants: [
          "해외 모기업에서 한국 자회사에 파견되는 임원",
          "외국인투자기업의 등기이사·감사로 취임하는 외국인",
          "합작법인에 파트너사에서 파견하는 경영진",
          "신규 외국인투자기업 설립 후 대표이사로 취임하는 외국인",
        ],
        eligibility: [
          "외국인투자기업에 등기임원(이사·감사)으로 등록",
          "외국인투자촉진법에 따른 투자 요건 충족 (최소 1억원)",
          "해당 기업에서의 임원 활동 증빙 (이사회 의사록 등)",
          "범죄경력 및 입국금지 이력 없음",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "외국인투자기업등록증명서",
          "법인등기부등본 (임원 등재 확인)",
          "파견명령서 또는 임원선임결의서",
          "모기업 사업자등록증·법인등기부등본",
          "투자금 송금 증빙",
          "사업계획서",
        ],
        process: [
          { step: 1, title: "투자 및 법인 설립", description: "외국인투자신고 및 한국 법인 설립·등록" },
          { step: 2, title: "임원 등기", description: "법인등기부에 임원(이사·감사) 등기" },
          { step: 3, title: "서류 준비", description: "파견명령서, 투자 증빙 등 구비서류 준비" },
          { step: 4, title: "비자 신청", description: "출입국관리사무소 또는 재외공관에서 D-8 신청" },
          { step: 5, title: "비자 발급", description: "심사 완료 후 비자 발급 (약 2-4주)" },
        ],
        processingTime: "약 2-4주",
        importantNotes: [
          "등기부에 임원으로 등재되지 않으면 D-8 임원파견 자격이 인정되지 않습니다.",
          "법인의 실질적 영업활동이 없으면 비자 연장이 거부될 수 있습니다.",
          "배우자와 미성년 자녀는 F-3 동반비자 신청이 가능합니다.",
        ],
        faqs: [
          {
            question: "D-8 임원파견비자와 D-7 주재원비자의 차이는?",
            answer: "D-8 임원파견은 외국인투자기업의 등기임원 대상이고, D-7은 해외 본사에서 파견된 직원(비임원) 대상입니다. D-8은 투자 요건(1억원 이상)이 필요합니다.",
          },
          {
            question: "투자금 없이 임원으로만 파견할 수 있나요?",
            answer: "D-8 비자는 외국인투자촉진법상 투자 요건 충족이 전제입니다. 투자 없이 경영 파견만 하는 경우 D-7 비자가 적합할 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 기업투자비자" },
          { slug: "d-7", title: "D-7 주재원비자" },
          { slug: "d-8-individual", title: "D-8 개인투자비자" },
        ],
      },
    },
    "d-8-individual": {
      ko: {
        slug: "d-8-individual",
        title: "D-8 개인투자비자",
        subtitle: "외국인이 개인 자격으로 한국에 투자하여 사업을 운영하기 위한 비자",
        overview:
          "D-8 개인투자비자는 외국인이 개인 명의로 한국에 1억원 이상을 투자하고 법인을 설립하여 직접 경영에 참여하기 위한 비자입니다. 법인의 대표이사 또는 등기임원으로 활동하며, 외국인투자촉진법에 따른 투자신고 및 등록이 필요합니다.",
        targetApplicants: [
          "개인 자본으로 한국에서 창업하려는 외국인",
          "한국에 1인 법인을 설립하고 직접 경영하려는 투자자",
          "프랜차이즈 사업 등을 위해 한국에 투자하려는 외국인",
          "한국 시장 진출을 위해 개인 자격으로 법인을 설립하려는 외국인",
        ],
        eligibility: [
          "1억원 이상의 투자금을 해외에서 송금할 것",
          "외국인투자촉진법에 따른 투자신고 완료",
          "법인 설립 후 대표이사 또는 등기임원으로 등기",
          "범죄경력 및 입국금지 이력 없음",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "외국인투자신고서",
          "투자금 송금 증빙 (해외 송금 확인서)",
          "법인등기부등본",
          "사업자등록증",
          "사업계획서",
          "잔고증명서",
          "최종학력증명서",
        ],
        process: [
          { step: 1, title: "사업 계획 수립", description: "사업 아이템 선정 및 투자 규모 결정" },
          { step: 2, title: "외국인투자신고", description: "KOTRA 또는 외국환은행을 통한 투자신고" },
          { step: 3, title: "투자금 송금", description: "해외에서 투자용 계좌로 자금 송금" },
          { step: 4, title: "법인 설립", description: "법인등기 및 사업자등록 완료" },
          { step: 5, title: "비자 신청", description: "출입국관리사무소에 D-8 비자 신청" },
        ],
        processingTime: "약 2-4주",
        importantNotes: [
          "투자금은 반드시 해외에서 송금되어야 하며, 국내 자금은 투자금으로 인정되지 않습니다.",
          "법인 설립 후 실질적 영업활동을 하지 않으면 비자 연장이 어렵습니다.",
          "매출 실적, 고용 현황 등이 비자 연장 심사의 핵심 요소입니다.",
        ],
        faqs: [
          {
            question: "개인투자와 기업투자의 차이는 무엇인가요?",
            answer: "기업투자(D-8)는 해외 법인이 한국에 투자하는 것이고, 개인투자는 외국인 개인이 직접 투자하는 것입니다. 두 경우 모두 D-8 비자에 해당하지만 서류와 입증 방법이 다릅니다.",
          },
          {
            question: "1억원 미만으로도 가능한가요?",
            answer: "원칙적으로 1억원 이상의 투자가 필요합니다. 다만 기술창업(D-8-4) 등 특수 유형은 정부 프로그램 선정 시 요건이 완화될 수 있습니다.",
          },
          {
            question: "사업이 부진해도 비자 유지가 가능한가요?",
            answer: "일정 수준의 매출과 사업 실적이 있어야 비자 연장이 가능합니다. 장기간 휴업이나 매출 부진 시 체류자격 연장이 거부될 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 기업투자비자" },
          { slug: "d-8-executive", title: "D-8 임원파견비자" },
          { slug: "d-9", title: "D-9 무역경영비자" },
        ],
      },
    },
    "f-1-digital-nomad": {
      ko: {
        slug: "f-1-digital-nomad",
        title: "F-1 디지털노마드비자",
        subtitle: "해외 기업 소속 원격근무자를 위한 체류자격",
        overview:
          "F-1 디지털노마드비자(워케이션비자)는 해외 기업에 고용되어 원격으로 근무하는 외국인이 한국에 체류하며 업무를 수행할 수 있도록 2024년부터 시행된 비자입니다. 한국 내 취업활동은 불가하며, 해외 기업으로부터의 소득이 있어야 합니다.",
        targetApplicants: [
          "해외 기업에 재직 중인 원격근무자",
          "프리랜서로 해외 클라이언트와 일하는 전문가",
          "한국에서 일정 기간 체류하며 원격근무를 희망하는 외국인",
          "디지털노마드 라이프스타일을 추구하는 IT·크리에이티브 전문가",
        ],
        eligibility: [
          "해외 기업 소속 또는 해외 수입원이 있는 프리랜서",
          "일정 금액 이상의 연간 소득 증빙 (약 미화 $65,000 이상 또는 이에 준하는 금액)",
          "원격근무 가능 직종 종사",
          "건강보험 가입 또는 여행자보험 가입",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "재직증명서 또는 프리랜서 계약서",
          "소득증명서 (최근 1년)",
          "은행 잔고증명서",
          "건강보험 또는 여행자보험 가입 증명",
          "숙소 증명 (임대차 계약서 또는 호텔 예약)",
          "원격근무 확인서 (고용주 발급)",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "소득 요건 및 원격근무 가능 여부 확인" },
          { step: 2, title: "서류 준비", description: "재직증명서, 소득증명, 보험 등 준비" },
          { step: 3, title: "비자 신청", description: "재외공관에서 F-1 디지털노마드 비자 신청" },
          { step: 4, title: "비자 발급", description: "심사 완료 후 비자 발급 (약 2-3주)" },
        ],
        processingTime: "약 2-3주",
        importantNotes: [
          "한국 내 기업에서의 취업활동은 허용되지 않습니다.",
          "체류 기간은 최대 2년이며, 1년 단위로 연장 가능합니다.",
          "동반 가족(배우자·미성년자녀)도 F-1 동반 체류가 가능합니다.",
        ],
        faqs: [
          {
            question: "디지털노마드비자로 한국에서 취업할 수 있나요?",
            answer: "아니요, 디지털노마드비자는 해외 기업의 원격근무만 허용합니다. 한국 기업에 취업하려면 E-7 등 취업비자가 필요합니다.",
          },
          {
            question: "소득 요건은 정확히 얼마인가요?",
            answer: "연간 약 미화 $65,000 이상(한국 GNI 2배 이상)의 소득이 필요합니다. 프리랜서의 경우 최근 1년간의 수입을 증빙해야 합니다.",
          },
          {
            question: "가족도 함께 올 수 있나요?",
            answer: "네, 배우자와 미성년 자녀는 동반 F-1 비자로 함께 체류할 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-2-points", title: "F-2 점수제비자" },
          { slug: "e-7", title: "E-7 특정활동비자" },
          { slug: "f-5", title: "F-5 영주권" },
        ],
      },
    },
    "f-1-visit": {
      ko: {
        slug: "f-1-visit",
        title: "F-1 방문동거비자",
        subtitle: "한국에 체류하는 가족과 함께 동거하기 위한 비자",
        overview:
          "F-1 방문동거비자는 한국에 합법적으로 체류하고 있는 외국인 또는 한국 국민의 가족(부모, 배우자의 부모 등)이 동거를 목적으로 체류하기 위한 비자입니다. 취업활동은 제한되며, 가족관계를 입증할 수 있는 서류가 필요합니다.",
        targetApplicants: [
          "한국 체류 외국인의 부모·조부모",
          "한국 국민의 외국인 부모·장인·장모",
          "기타 가족관계에 의한 동거 목적 체류자",
          "미성년 자녀를 양육하기 위해 입국하는 친족",
        ],
        eligibility: [
          "한국 체류 가족과의 가족관계 증명",
          "초청인의 합법적 체류자격 보유",
          "초청인의 재정능력 입증 (소득 또는 자산)",
          "범죄경력 및 입국금지 이력 없음",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "가족관계증명서 (출생증명서·혼인증명서 등)",
          "초청장",
          "초청인 외국인등록증 또는 신분증 사본",
          "초청인 재직증명서·소득증명서",
          "숙소 증명 (임대차계약서)",
          "신원보증서",
        ],
        process: [
          { step: 1, title: "서류 준비", description: "가족관계 증명 서류 번역·공증 및 아포스티유" },
          { step: 2, title: "초청장 작성", description: "한국 체류 가족이 초청장 및 보증서 작성" },
          { step: 3, title: "비자 신청", description: "재외공관에서 F-1 방문동거 비자 신청" },
          { step: 4, title: "비자 발급", description: "심사 완료 후 비자 발급 (약 2-4주)" },
          { step: 5, title: "외국인등록", description: "입국 후 90일 이내 외국인등록" },
        ],
        processingTime: "약 2-4주",
        importantNotes: [
          "F-1 방문동거비자로는 원칙적으로 취업활동이 불가합니다. 취업하려면 체류자격외활동허가가 필요합니다.",
          "초청인의 체류자격이 만료되면 F-1 비자도 영향을 받을 수 있습니다.",
          "1년 단위로 체류기간 연장이 가능하며, 초청인의 체류기간에 연동됩니다.",
        ],
        faqs: [
          {
            question: "F-1 방문동거비자로 일할 수 있나요?",
            answer: "원칙적으로 불가합니다. 취업을 원하면 출입국관리사무소에서 체류자격외활동허가를 별도로 받아야 합니다.",
          },
          {
            question: "초청인이 누구여야 하나요?",
            answer: "한국에 합법적으로 체류하고 있는 가족(자녀, 배우자 등)이 초청인이 됩니다. 초청인의 체류자격과 재정능력이 심사됩니다.",
          },
          {
            question: "F-1 비자 체류 기간은 얼마나 되나요?",
            answer: "통상 1-2년이 발급되며, 초청인의 체류기간 범위 내에서 연장할 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-6", title: "F-6 결혼비자" },
          { slug: "f-1-digital-nomad", title: "F-1 디지털노마드비자" },
          { slug: "f-2-points", title: "F-2 점수제비자" },
        ],
      },
    },
    "f-2-points": {
      ko: {
        slug: "f-2-points",
        title: "F-2 점수제비자",
        subtitle: "학력·소득·나이·한국어 능력 등을 종합 평가하는 거주비자",
        overview:
          "F-2 점수제비자는 학력, 소득, 나이, 한국어 능력, 사회통합프로그램 이수 등을 점수화하여 일정 점수(80점) 이상인 외국인에게 발급되는 거주비자입니다. E-7, D-8 등 취업·투자 비자를 소지한 외국인이 장기 체류를 위해 전환하는 경로로 많이 활용됩니다.",
        targetApplicants: [
          "E-7 특정활동비자 소지 전문인력",
          "D-8 기업투자비자 소지 사업가",
          "한국 내 학위 취득 후 취업 중인 외국인",
          "장기 체류 전환을 원하는 전문직 외국인",
        ],
        eligibility: [
          "점수 항목 총점 80점 이상 달성",
          "현재 합법적 체류자격 보유",
          "범죄경력 없음",
          "소득·납세 실적 충족",
        ],
        requiredDocuments: [
          "비자발급신청서 (체류자격변경)",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "점수산정표 및 증빙서류",
          "학력증명서 (학위증·졸업증명서)",
          "소득증명서 (근로소득원천징수영수증 등)",
          "한국어능력시험(TOPIK) 성적표",
          "사회통합프로그램 이수증 (해당 시)",
          "재직증명서",
          "납세증명서",
        ],
        process: [
          { step: 1, title: "점수 자가진단", description: "점수제 평가 항목별 자기 점수 확인" },
          { step: 2, title: "증빙서류 준비", description: "학력, 소득, 한국어, 사회통합 등 증빙 확보" },
          { step: 3, title: "체류자격변경 신청", description: "출입국관리사무소에 F-2 점수제 변경 신청" },
          { step: 4, title: "심사 및 발급", description: "점수 확인 후 F-2 비자 발급 (약 3-4주)" },
        ],
        processingTime: "약 3-4주",
        importantNotes: [
          "점수 기준은 학력(최대 35점), 소득(최대 30점), 나이(최대 20점), 한국어(최대 20점) 등으로 구성됩니다.",
          "F-2 점수제 취득 후 3년 이상 체류하면 F-5-16 영주권 신청이 가능합니다.",
          "체류기간 연장 시에도 점수 요건을 유지해야 합니다.",
        ],
        faqs: [
          {
            question: "점수가 80점 미만이면 신청할 수 없나요?",
            answer: "80점 미만 시에는 F-2 점수제 비자를 받을 수 없습니다. TOPIK 점수 향상, 사회통합프로그램 이수 등으로 점수를 높인 후 재신청할 수 있습니다.",
          },
          {
            question: "F-2 점수제에서 F-5 영주권으로 전환이 가능한가요?",
            answer: "네, F-2 점수제 비자 취득 후 3년 이상 체류하고 일정 요건을 갖추면 F-5-16 점수제 영주권을 신청할 수 있습니다.",
          },
          {
            question: "TOPIK 성적이 없어도 신청 가능한가요?",
            answer: "TOPIK이 없어도 다른 항목에서 충분한 점수를 확보하면 가능합니다. 다만 한국어 항목의 점수가 0점이 되므로 다른 분야에서 보완이 필요합니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-16", title: "F-5-16 점수제 영주자" },
          { slug: "e-7", title: "E-7 특정활동비자" },
          { slug: "f-5", title: "F-5 영주권" },
        ],
      },
    },
    "f-2-public-interest": {
      ko: {
        slug: "f-2-public-interest",
        title: "F-2 공익사업투자비자",
        subtitle: "법무부 지정 공익사업에 투자한 외국인을 위한 거주비자",
        overview:
          "F-2 공익사업투자비자는 법무부 장관이 지정한 공익사업(국채, 기금 등)에 5억원 이상을 투자한 외국인에게 발급되는 거주비자입니다. 투자 유지 기간이 5년 이상이 되면 F-5-21 영주권으로 전환할 수 있습니다.",
        targetApplicants: [
          "한국 공익사업(국채·기금 등)에 투자하려는 외국인",
          "거주비자를 통해 장기 체류를 원하는 투자자",
          "향후 영주권(F-5-21) 취득을 목표로 하는 투자자",
          "안정적 투자를 통해 한국 체류를 원하는 고자산 외국인",
        ],
        eligibility: [
          "법무부 지정 공익사업에 5억원 이상 투자",
          "투자금의 합법적 출처 증명",
          "범죄경력 및 입국금지 이력 없음",
          "투자 상태 유지 의무",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "공익사업 투자 확인서",
          "투자금 출처 증빙 (해외 송금 확인서 등)",
          "잔고증명서",
          "범죄경력증명서",
          "건강진단서",
        ],
        process: [
          { step: 1, title: "투자 대상 확인", description: "법무부 지정 공익사업(국채·기금 등) 확인" },
          { step: 2, title: "투자 실행", description: "5억원 이상 투자 및 투자 확인서 발급" },
          { step: 3, title: "비자 신청", description: "출입국관리사무소에 F-2 공익사업투자 신청" },
          { step: 4, title: "비자 발급", description: "심사 완료 후 F-2 비자 발급 (약 3-4주)" },
        ],
        processingTime: "약 3-4주",
        importantNotes: [
          "투자금은 5년간 유지해야 하며, 중도 회수 시 체류자격이 취소될 수 있습니다.",
          "5년 투자 유지 후 F-5-21 영주권 전환이 가능합니다.",
          "동반 가족(배우자·미성년자녀)도 F-1 또는 F-3 비자로 체류할 수 있습니다.",
        ],
        faqs: [
          {
            question: "어떤 공익사업에 투자할 수 있나요?",
            answer: "법무부 장관이 고시한 공익사업(국채매입, 공공기금 출자 등)이 대상입니다. 구체적인 투자 대상은 법무부 고시를 확인해야 합니다.",
          },
          {
            question: "5억원을 한 번에 투자해야 하나요?",
            answer: "네, 신청 시점에 5억원 이상의 투자가 완료되어야 합니다. 분할 투자는 원칙적으로 인정되지 않습니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-21", title: "F-5-21 공익사업투자자 영주권" },
          { slug: "f-2-real-estate", title: "F-2 부동산투자비자" },
          { slug: "f-5", title: "F-5 영주권" },
        ],
      },
    },
    "f-2-real-estate": {
      ko: {
        slug: "f-2-real-estate",
        title: "F-2 부동산투자비자",
        subtitle: "법무부 지정 지역의 부동산 투자를 통한 거주비자",
        overview:
          "F-2 부동산투자비자는 법무부가 지정한 특정 지역(제주도, 강원 등)에 일정 금액 이상의 부동산(콘도, 리조트 등)을 투자한 외국인에게 발급되는 거주비자입니다. 투자 유지 후 F-5-17 영주권으로 전환 가능합니다.",
        targetApplicants: [
          "한국 지정 지역에 부동산을 구매하려는 외국인",
          "제주도·강원도 등에 콘도·리조트를 투자하려는 외국인",
          "부동산 투자를 통해 거주 및 영주권을 목표로 하는 외국인",
          "한국에 부동산을 보유하며 장기 체류를 원하는 외국인",
        ],
        eligibility: [
          "법무부 지정 지역에 소재한 부동산 투자 (통상 5억원 이상)",
          "투자 부동산이 법무부 고시 요건에 부합",
          "투자금의 합법적 출처 증명",
          "범죄경력 및 입국금지 이력 없음",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "부동산 매매계약서 또는 등기부등본",
          "투자금 송금 증빙",
          "부동산 감정평가서",
          "잔고증명서",
          "범죄경력증명서",
        ],
        process: [
          { step: 1, title: "투자 대상 확인", description: "법무부 지정 지역 및 요건 확인" },
          { step: 2, title: "부동산 매입", description: "지정 지역 부동산 계약 및 잔금 납부" },
          { step: 3, title: "등기 완료", description: "부동산 소유권이전등기 완료" },
          { step: 4, title: "비자 신청", description: "출입국관리사무소에 F-2 부동산투자 신청" },
          { step: 5, title: "비자 발급", description: "심사 완료 후 F-2 비자 발급" },
        ],
        processingTime: "약 3-4주",
        importantNotes: [
          "지정 지역 외의 부동산은 투자이민 대상이 되지 않습니다.",
          "투자 부동산을 매각하면 체류자격이 취소될 수 있습니다.",
          "5년 이상 투자 유지 시 F-5-17 영주권 신청이 가능합니다.",
        ],
        faqs: [
          {
            question: "어디에 투자해야 하나요?",
            answer: "제주도, 강원도 등 법무부가 지정한 특정 지역의 휴양목적 부동산(콘도, 리조트 등)이 대상입니다. 서울 등 일반 주거용 부동산은 해당되지 않습니다.",
          },
          {
            question: "투자 최소 금액은 얼마인가요?",
            answer: "통상 5억원 이상이며, 지역과 부동산 유형에 따라 다를 수 있습니다. 정확한 기준은 법무부 고시를 확인해야 합니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-17", title: "F-5-17 부동산투자자 영주권" },
          { slug: "f-2-public-interest", title: "F-2 공익사업투자비자" },
          { slug: "f-5", title: "F-5 영주권" },
        ],
      },
    },
    "f-6": {
      ko: {
        slug: "f-6",
        title: "F-6 결혼비자",
        subtitle: "한국 국민의 배우자인 외국인을 위한 체류자격",
        overview:
          "F-6 결혼비자는 한국 국민과 법적으로 혼인한 외국인 배우자에게 발급되는 체류자격입니다. F-6-1(한국인 배우자), F-6-2(자녀양육), F-6-3(혼인파탄 귀책 없음) 등의 세부 유형이 있으며, 정상적인 혼인관계가 유지되어야 합니다.",
        targetApplicants: [
          "한국 국민과 결혼한 외국인 배우자",
          "이혼 후 미성년 자녀를 양육 중인 외국인 (F-6-2)",
          "혼인 파탄에 본인 귀책사유가 없는 외국인 (F-6-3)",
          "사실혼 관계에서 출생한 자녀를 양육 중인 외국인",
        ],
        eligibility: [
          "한국 국민과의 법적 혼인관계 증명 (혼인신고 완료)",
          "정상적 혼인생활 유지 (동거 등)",
          "기초적 의사소통 가능 (한국어 또는 통역 동반)",
          "범죄경력 및 입국금지 이력 없음",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "혼인관계증명서",
          "한국인 배우자 기본증명서·가족관계증명서",
          "한국인 배우자 신분증 사본",
          "한국인 배우자 소득증명서·재직증명서",
          "주거지 증명 (임대차계약서 등)",
          "결혼식 사진 등 교제 입증자료",
          "신원보증서",
        ],
        process: [
          { step: 1, title: "혼인신고", description: "양국에서 혼인신고 완료 (한국 시·구청 + 본국)" },
          { step: 2, title: "서류 준비", description: "혼인관계 증명 및 재정능력 서류 준비" },
          { step: 3, title: "비자 신청", description: "재외공관 또는 출입국관리사무소에서 F-6 신청" },
          { step: 4, title: "면접 심사", description: "부부 면접 심사 (위장결혼 여부 확인)" },
          { step: 5, title: "비자 발급", description: "심사 완료 후 F-6 비자 발급" },
        ],
        processingTime: "약 1-3개월",
        importantNotes: [
          "위장결혼이 의심되면 비자가 거부되며, 출입국사범으로 처리될 수 있습니다.",
          "2년 이상 정상 혼인 유지 시 F-5-2 영주권 신청이 가능합니다.",
          "이혼 시 체류자격이 변경되거나 취소될 수 있습니다 (귀책사유에 따라 다름).",
        ],
        faqs: [
          {
            question: "F-6 비자로 취업할 수 있나요?",
            answer: "네, F-6 비자 소지자는 별도의 취업허가 없이 자유롭게 취업활동이 가능합니다.",
          },
          {
            question: "이혼하면 비자가 취소되나요?",
            answer: "이혼 시 원칙적으로 F-6 자격이 소멸됩니다. 다만 한국인 배우자의 귀책사유로 이혼한 경우(F-6-3)이거나 미성년 자녀를 양육 중인 경우(F-6-2)에는 체류가 가능합니다.",
          },
          {
            question: "결혼비자에서 영주권으로 전환이 가능한가요?",
            answer: "네, F-6 비자 취득 후 2년 이상 정상적 혼인을 유지하면 F-5-2 영주권을 신청할 수 있습니다. 한국어 능력과 기본 소양 심사를 거칩니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-2", title: "F-5-2 국민의 배우자 영주권" },
          { slug: "f-1-visit", title: "F-1 방문동거비자" },
          { slug: "f-5", title: "F-5 영주권" },
        ],
      },
    },
    "criminal-review": {
      ko: {
        slug: "criminal-review",
        title: "사범심사",
        subtitle: "출입국 사범심사 대응 및 이의신청 전문 서비스",
        overview:
          "사범심사는 출입국관리법 위반(불법체류, 자격외활동, 허위서류 제출 등)으로 인해 강제퇴거, 출국명령, 입국금지 등의 처분을 받게 되는 경우에 대한 심사 절차입니다. 전문 행정사의 조력을 통해 소명서 작성, 이의신청, 체류허가 등의 대응이 가능합니다.",
        targetApplicants: [
          "불법체류로 적발되어 강제퇴거 또는 출국명령을 받은 외국인",
          "자격외활동(무허가 취업 등)으로 적발된 외국인",
          "비자 거부 또는 체류기간 연장이 불허된 외국인",
          "입국금지 처분을 받아 재입국이 필요한 외국인",
        ],
        eligibility: [
          "출입국관리법 위반으로 사범심사 대상이 된 경우",
          "비자 거부·체류연장 불허 등에 대한 이의신청이 필요한 경우",
          "입국금지 해제를 신청하려는 경우",
          "강제퇴거 명령에 대한 소명이 필요한 경우",
        ],
        requiredDocuments: [
          "소명서 (위반 경위 및 사유 설명)",
          "여권 사본",
          "외국인등록증 사본",
          "재정능력 입증서류",
          "가족관계 증빙 (해당 시)",
          "반성문·탄원서",
          "고용주 확인서 (해당 시)",
          "기타 유리한 증거자료",
        ],
        process: [
          { step: 1, title: "상황 분석", description: "위반 사항 및 사범심사 유형 파악" },
          { step: 2, title: "소명서 작성", description: "위반 경위, 사유, 향후 계획 등 소명서 작성" },
          { step: 3, title: "증빙서류 준비", description: "유리한 증거자료 및 탄원서 확보" },
          { step: 4, title: "사범심사 대응", description: "출입국관리사무소 사범심사에 출석·대응" },
          { step: 5, title: "결과 및 후속조치", description: "심사 결과에 따른 이의신청 또는 후속 절차 진행" },
        ],
        processingTime: "사안에 따라 상이 (2주-수개월)",
        importantNotes: [
          "사범심사는 전문가의 조력 없이 대응하면 불리한 결과를 초래할 수 있습니다.",
          "소명서의 내용과 증빙자료의 질이 결과에 결정적 영향을 미칩니다.",
          "강제퇴거 시 최소 1년에서 최장 10년까지 재입국이 금지될 수 있습니다.",
        ],
        faqs: [
          {
            question: "불법체류가 적발되면 바로 추방되나요?",
            answer: "즉시 추방되는 것은 아닙니다. 사범심사를 거쳐 강제퇴거, 출국명령, 또는 과태료 처분 등이 결정됩니다. 이 과정에서 소명 기회가 주어집니다.",
          },
          {
            question: "입국금지를 해제할 수 있나요?",
            answer: "입국금지 기간 중이라도 인도적 사유(가족 결합, 치료 등)가 있으면 해제 신청이 가능합니다. 다만 승인 여부는 개별 사안에 따라 다릅니다.",
          },
          {
            question: "비자 거부 후 재신청이 가능한가요?",
            answer: "네, 거부 사유를 해소한 후 재신청할 수 있습니다. 거부 사유에 대한 정확한 분석과 보완 서류 준비가 중요합니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-6", title: "F-6 결혼비자" },
          { slug: "e-7", title: "E-7 특정활동비자" },
          { slug: "f-5", title: "F-5 영주권" },
        ],
      },
    },
    "f-5-1": {
      ko: {
        slug: "f-5-1",
        title: "F-5-1 일반 영주자",
        subtitle: "5년 이상 체류 외국인을 위한 일반 영주권",
        overview:
          "F-5-1 일반 영주자 자격은 한국에서 5년 이상 합법적으로 체류하고, 일정 소득·품행 요건을 갖춘 외국인이 신청할 수 있는 영주권입니다. 가장 기본적인 영주권 취득 경로이며, 안정적인 소득과 한국어 능력, 기본 소양을 갖추어야 합니다.",
        targetApplicants: [
          "D-8, E-7 등 취업·투자 비자로 5년 이상 체류한 외국인",
          "장기 체류 후 영주권 전환을 원하는 외국인",
          "안정적 소득과 정주 의지가 있는 장기 체류자",
        ],
        eligibility: [
          "한국에서 5년 이상 합법적 체류",
          "대한민국 민법에 의한 성년 (19세 이상)",
          "본인 또는 동거 가족의 소득이 GNI 이상",
          "품행 단정 (범죄경력 없음)",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "증명사진 (3.5x4.5cm)",
          "체류기간 확인 서류",
          "소득증명서 (근로소득원천징수영수증 등)",
          "납세증명서",
          "한국어능력시험(TOPIK) 또는 사회통합프로그램 이수증",
          "범죄경력증명서 (본국 및 한국)",
          "건강진단서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "5년 체류 및 소득·품행 요건 확인" },
          { step: 2, title: "한국어/사회통합 이수", description: "TOPIK 또는 사회통합프로그램 이수" },
          { step: 3, title: "서류 준비", description: "소득, 납세, 범죄경력 등 증빙 준비" },
          { step: 4, title: "영주권 신청", description: "출입국관리사무소에 F-5-1 영주권 신청" },
          { step: 5, title: "심사 및 발급", description: "심사 완료 후 영주권 발급 (약 2-6개월)" },
        ],
        processingTime: "약 2-6개월",
        importantNotes: [
          "영주권 취득 후에도 재입국허가 없이 1년 이상 출국하면 영주권이 취소될 수 있습니다.",
          "한국어능력 또는 사회통합프로그램 이수가 필수입니다.",
          "GNI 이상의 소득이 핵심 심사 요소입니다.",
        ],
        faqs: [
          {
            question: "5년 체류 요건은 연속이어야 하나요?",
            answer: "연속 체류가 원칙이지만, 단기 출국은 체류기간에 산입됩니다. 다만 장기간 출국 시 체류기간에서 제외될 수 있습니다.",
          },
          {
            question: "소득 요건은 얼마인가요?",
            answer: "본인 또는 동거 가족의 연간 소득이 한국 국민총소득(GNI) 이상이어야 합니다. 매년 금액이 변동되므로 신청 시 확인이 필요합니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-16", title: "F-5-16 점수제 영주자" },
          { slug: "f-5-5", title: "F-5-5 고액투자자" },
        ],
      },
    },
    "f-5-2": {
      ko: {
        slug: "f-5-2",
        title: "F-5-2 국민의 배우자",
        subtitle: "한국 국민의 배우자를 위한 영주권",
        overview:
          "F-5-2 영주권은 F-6 결혼비자를 소지한 외국인이 한국 국민과 2년 이상 정상적인 혼인관계를 유지한 경우 신청할 수 있는 영주자격입니다. 한국어 능력, 기본 소양 심사, 경제적 요건 등을 충족해야 합니다.",
        targetApplicants: [
          "F-6 결혼비자를 2년 이상 소지한 한국인 배우자의 외국인 배우자",
          "한국에서 안정적 혼인생활을 유지하고 있는 외국인",
          "장기적으로 한국에 정착하려는 결혼이민자",
        ],
        eligibility: [
          "F-6 비자 취득 후 2년 이상 정상 혼인 유지",
          "기본적인 한국어 능력 (TOPIK 또는 사회통합프로그램)",
          "본인 또는 배우자의 소득이 GNI 이상",
          "범죄경력 없음",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "혼인관계증명서",
          "한국인 배우자 가족관계증명서",
          "소득증명서",
          "납세증명서",
          "한국어능력 증빙 (TOPIK·사회통합프로그램)",
          "범죄경력증명서",
          "건강진단서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "2년 이상 정상 혼인 유지 확인" },
          { step: 2, title: "한국어 능력 준비", description: "TOPIK 또는 사회통합프로그램 이수" },
          { step: 3, title: "서류 준비", description: "혼인관계, 소득, 범죄경력 증빙 준비" },
          { step: 4, title: "영주권 신청", description: "출입국관리사무소에 F-5-2 신청" },
        ],
        processingTime: "약 2-4개월",
        importantNotes: [
          "혼인 파탄 시에도 자녀 양육이나 배우자 귀책사유가 인정되면 영주 자격이 유지될 수 있습니다.",
          "사회통합프로그램 이수 시 한국어 능력 요건이 면제될 수 있습니다.",
        ],
        faqs: [
          {
            question: "이혼하면 영주권이 취소되나요?",
            answer: "이혼 사유에 따라 다릅니다. 한국인 배우자의 귀책사유이거나 한국인 자녀를 양육 중인 경우에는 영주권이 유지될 수 있습니다.",
          },
          {
            question: "한국어를 못해도 신청할 수 있나요?",
            answer: "기본적인 한국어 능력이 필요합니다. TOPIK 또는 사회통합프로그램 이수로 증빙할 수 있으며, 사회통합프로그램 이수가 가장 유리합니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-6", title: "F-6 결혼비자" },
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-1", title: "F-5-1 일반 영주자" },
        ],
      },
    },
    "f-5-5": {
      ko: {
        slug: "f-5-5",
        title: "F-5-5 고액투자자",
        subtitle: "5억원 이상 투자 및 5인 이상 고용 외국인을 위한 영주권",
        overview:
          "F-5-5 고액투자자 영주권은 한국에 5억원 이상을 투자하고 5명 이상의 한국인을 고용하고 있는 외국인에게 발급되는 영주자격입니다. 투자 실적과 고용 유지가 핵심 심사 요소이며, 3년 이상 투자를 유지해야 합니다.",
        targetApplicants: [
          "한국에 5억원 이상을 투자한 D-8 비자 소지자",
          "5명 이상의 한국인을 고용 중인 외국인 투자자",
          "3년 이상 투자를 유지하고 있는 외국인 사업가",
        ],
        eligibility: [
          "5억원 이상의 투자금 유지 (외국인투자기업등록)",
          "5명 이상의 한국 국민 고용",
          "3년 이상 투자 및 사업 운영",
          "범죄경력 없음",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "외국인투자기업등록증명서",
          "투자금 증빙 (5억원 이상)",
          "4대보험 가입자명부 (5명 이상 고용 확인)",
          "법인등기부등본",
          "재무제표·납세증명서",
          "범죄경력증명서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "투자금 5억원 및 고용 5인 요건 확인" },
          { step: 2, title: "서류 준비", description: "투자, 고용, 재무 관련 증빙 준비" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-5 신청" },
          { step: 4, title: "심사 및 발급", description: "심사 완료 후 영주권 발급 (약 3-6개월)" },
        ],
        processingTime: "약 3-6개월",
        importantNotes: [
          "투자금은 해외에서 송금된 합법적 자금이어야 합니다.",
          "고용 인원은 4대보험에 가입된 한국 국민이어야 합니다.",
          "영주권 취득 후에도 투자와 고용을 유지해야 합니다.",
        ],
        faqs: [
          {
            question: "5억원 투자금을 줄여도 되나요?",
            answer: "영주권 취득 후에도 투자금을 유지하는 것이 원칙입니다. 대폭 축소 시 영주 자격에 영향을 줄 수 있습니다.",
          },
          {
            question: "고용 5인에 외국인도 포함되나요?",
            answer: "아니요, 한국 국민을 5명 이상 고용해야 합니다. 외국인 직원은 고용 인원에 산입되지 않습니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "d-8", title: "D-8 기업투자비자" },
          { slug: "f-5-25", title: "F-5-25 조건부 고액투자자" },
        ],
      },
    },
    "f-5-6": {
      ko: {
        slug: "f-5-6",
        title: "F-5-6 재외동포",
        subtitle: "재외동포(F-4) 체류자의 영주권",
        overview:
          "F-5-6 영주권은 F-4 재외동포 비자로 2년 이상 한국에 체류한 외국국적 동포가 신청할 수 있는 영주자격입니다. 생계 유지 능력과 한국어 능력, 기본 소양 등을 갖추어야 합니다.",
        targetApplicants: [
          "F-4 재외동포 비자로 2년 이상 체류한 동포",
          "한국에 장기 정착을 원하는 재외동포",
          "한국 국적 회복이 아닌 영주권을 원하는 동포",
        ],
        eligibility: [
          "F-4 체류자격으로 2년 이상 체류",
          "생계 유지 능력 (소득 또는 자산)",
          "기본적 한국어 능력",
          "범죄경력 없음",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "체류기간 확인 서류",
          "소득 또는 자산 증빙",
          "한국어능력 증빙",
          "범죄경력증명서",
          "건강진단서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "F-4 2년 이상 체류 및 요건 확인" },
          { step: 2, title: "서류 준비", description: "소득, 한국어, 범죄경력 등 증빙 준비" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-6 신청" },
          { step: 4, title: "심사 및 발급", description: "심사 완료 후 영주권 발급" },
        ],
        processingTime: "약 2-4개월",
        importantNotes: [
          "F-4에서 F-5 전환은 비교적 수월한 편이나, 소득 요건 충족이 필요합니다.",
          "한국어 능력 기준이 일반 영주권보다 완화될 수 있습니다.",
        ],
        faqs: [
          {
            question: "F-4 비자와 F-5-6 영주권의 차이는?",
            answer: "F-4는 2년마다 연장이 필요하지만, F-5-6 영주권은 기간 제한 없이 체류할 수 있습니다. 또한 취업활동 제한이 더 완화됩니다.",
          },
          {
            question: "국적 회복과 영주권 중 어느 것이 유리한가요?",
            answer: "개인 상황에 따라 다릅니다. 국적 회복 시 본국 국적을 포기해야 할 수 있으며, 영주권은 외국 국적을 유지하면서 한국에서 장기 체류할 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-4", title: "F-4 재외동포비자" },
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-1", title: "F-5-1 일반 영주자" },
        ],
      },
    },
    "f-5-8": {
      ko: {
        slug: "f-5-8",
        title: "F-5-8 재한화교",
        subtitle: "한국 출생 화교를 위한 영주권",
        overview:
          "F-5-8은 한국에서 출생하여 계속 거주하고 있는 화교(중화민국/중화인민공화국 국적) 등에게 발급되는 영주자격입니다. 한국에서 태어나 지속적으로 거주해 온 사실을 입증해야 합니다.",
        targetApplicants: [
          "한국에서 출생하여 계속 거주 중인 화교",
          "오랜 기간 한국에서 생활해 온 재한 화교 가족",
          "한국 사회에 정착한 화교 사업가·근로자",
        ],
        eligibility: [
          "한국에서 출생하여 계속 거주한 사실 증명",
          "생계 유지 능력",
          "범죄경력 없음",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "출생증명서 (한국 출생 확인)",
          "외국인등록 사실증명 (계속 거주 확인)",
          "소득 또는 자산 증빙",
          "범죄경력증명서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "한국 출생 및 계속 거주 사실 확인" },
          { step: 2, title: "서류 준비", description: "출생증명, 체류이력, 소득 증빙 준비" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-8 신청" },
          { step: 4, title: "심사 및 발급", description: "심사 완료 후 영주권 발급" },
        ],
        processingTime: "약 2-4개월",
        importantNotes: [
          "한국 출생 사실과 계속 거주 사실을 모두 입증해야 합니다.",
          "재한화교학교 졸업 등 부수적 증빙이 도움이 될 수 있습니다.",
        ],
        faqs: [
          {
            question: "한국에서 태어나지 않은 화교도 신청 가능한가요?",
            answer: "F-5-8은 한국 출생 화교를 위한 유형입니다. 한국 출생이 아닌 경우 F-5-1(일반 영주) 등 다른 유형을 검토해야 합니다.",
          },
          {
            question: "어느 정도 기간 거주해야 하나요?",
            answer: "출생 후 계속 거주가 원칙입니다. 단기 해외 체류가 있었더라도 주된 생활 근거지가 한국이면 인정될 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-1", title: "F-5-1 일반 영주자" },
        ],
      },
    },
    "f-5-9": {
      ko: {
        slug: "f-5-9",
        title: "F-5-9 첨단분야 박사",
        subtitle: "첨단산업 분야 박사학위 취득자를 위한 영주권",
        overview:
          "F-5-9는 한국 또는 해외에서 첨단산업 분야(IT, 바이오, 나노 등) 박사학위를 취득하고 한국에서 관련 분야에 종사하고 있는 외국인이 신청할 수 있는 영주자격입니다. 고급 인재 유치를 위한 특례 영주권으로, 일반 영주권보다 체류기간 요건이 완화됩니다.",
        targetApplicants: [
          "IT, 바이오, 나노 등 첨단 분야 박사학위 소지자",
          "한국 내 연구기관·기업에서 관련 분야에 종사 중인 외국인",
          "한국 대학에서 첨단 분야 박사학위를 취득한 외국인",
        ],
        eligibility: [
          "첨단산업 분야 박사학위 취득",
          "한국 내 관련 분야 종사 (연구·교육·산업)",
          "일정 소득 요건 충족",
          "범죄경력 없음",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "박사학위증명서",
          "재직증명서 (연구기관·기업)",
          "소득증명서",
          "납세증명서",
          "범죄경력증명서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "첨단 분야 박사학위 및 종사 분야 확인" },
          { step: 2, title: "서류 준비", description: "학위, 재직, 소득 증빙 준비" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-9 신청" },
          { step: 4, title: "심사 및 발급", description: "심사 완료 후 영주권 발급" },
        ],
        processingTime: "약 2-4개월",
        importantNotes: [
          "첨단분야 해당 여부는 과학기술정보통신부 등 관계 기관의 확인을 받아야 합니다.",
          "일반 영주권(F-5-1)보다 체류기간 요건이 완화됩니다.",
        ],
        faqs: [
          {
            question: "어떤 분야가 첨단분야에 해당하나요?",
            answer: "IT, 바이오, 나노, 디지털, 에너지, 우주항공 등 정부가 지정한 첨단과학기술 분야가 해당합니다. 구체적인 분야는 고시를 확인해야 합니다.",
          },
          {
            question: "해외 대학 박사도 가능한가요?",
            answer: "네, 한국 또는 해외 대학의 박사학위 모두 인정됩니다. 다만 한국에서 해당 분야에 종사하고 있어야 합니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-10", title: "F-5-10 학사·석사·자격증" },
          { slug: "e-7", title: "E-7 특정활동비자" },
        ],
      },
    },
    "f-5-10": {
      ko: {
        slug: "f-5-10",
        title: "F-5-10 학사·석사·자격증",
        subtitle: "학위 또는 국가자격증 기반 영주권",
        overview:
          "F-5-10은 한국에서 학사 이상의 학위를 취득하거나 특정 국가자격증을 보유하고, 일정 기간 한국에서 취업하여 소득 요건을 충족한 외국인이 신청할 수 있는 영주자격입니다.",
        targetApplicants: [
          "한국 대학에서 학사·석사 학위를 취득한 외국인",
          "국가기술자격증을 보유한 외국인 전문인력",
          "학위 취득 후 한국에서 취업 중인 외국인",
        ],
        eligibility: [
          "한국 내 학사 이상 학위 취득 또는 특정 국가자격증 보유",
          "한국에서 일정 기간 합법적 취업",
          "소득 요건 충족 (GNI 이상)",
          "범죄경력 없음",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "학위증명서 또는 자격증 사본",
          "재직증명서",
          "소득증명서",
          "납세증명서",
          "범죄경력증명서",
          "건강진단서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "학위·자격증 및 체류·소득 요건 확인" },
          { step: 2, title: "서류 준비", description: "학위, 재직, 소득 등 증빙 준비" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-10 신청" },
          { step: 4, title: "심사 및 발급", description: "심사 완료 후 영주권 발급" },
        ],
        processingTime: "약 2-4개월",
        importantNotes: [
          "한국 내 학위가 아닌 해외 학위만 보유한 경우는 해당되지 않을 수 있습니다.",
          "취업 기간과 소득 수준이 핵심 심사 요소입니다.",
        ],
        faqs: [
          {
            question: "어떤 자격증이 인정되나요?",
            answer: "한국산업인력공단이 관리하는 국가기술자격 중 기사·산업기사 이상이 해당될 수 있습니다. 구체적인 인정 범위는 출입국관리사무소에 확인이 필요합니다.",
          },
          {
            question: "학위 취득 후 바로 신청 가능한가요?",
            answer: "학위 취득만으로는 부족하며, 일정 기간 한국에서 취업하여 소득 요건을 갖추어야 합니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-9", title: "F-5-9 첨단분야 박사" },
          { slug: "f-5-1", title: "F-5-1 일반 영주자" },
        ],
      },
    },
    "f-5-11": {
      ko: {
        slug: "f-5-11",
        title: "F-5-11 특정분야 능력",
        subtitle: "과학·경영·교육·문화 등 특정분야 우수인재 영주권",
        overview:
          "F-5-11은 과학, 경영, 교육, 문화예술, 체육 등 특정분야에서 탁월한 능력을 보유한 외국인에게 발급되는 영주자격입니다. 국제적 수상 경력, 논문 발표 실적, 특허 등이 심사 요소가 됩니다.",
        targetApplicants: [
          "국제적으로 인정받는 과학자·연구자",
          "글로벌 기업 경영진으로서 한국에 기여한 전문가",
          "예술·문화·체육 분야에서 뛰어난 업적을 가진 외국인",
        ],
        eligibility: [
          "특정분야에서의 탁월한 능력 입증",
          "국제적 수상, 논문, 특허 등 실적",
          "한국에서의 활동 계획 또는 실적",
          "범죄경력 없음",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "수상경력·업적 증빙 자료",
          "추천서 (관련 기관장 등)",
          "재직증명서 또는 활동계획서",
          "범죄경력증명서",
        ],
        process: [
          { step: 1, title: "업적 정리", description: "수상, 논문, 특허 등 업적 자료 정리" },
          { step: 2, title: "추천서 확보", description: "관련 기관·전문가 추천서 확보" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-11 신청" },
          { step: 4, title: "심사 및 발급", description: "심사 완료 후 영주권 발급" },
        ],
        processingTime: "약 3-6개월",
        importantNotes: [
          "탁월한 능력의 객관적 입증이 핵심입니다.",
          "관련 분야 전문가나 기관의 추천서가 심사에 큰 영향을 미칩니다.",
        ],
        faqs: [
          {
            question: "어느 정도 수준이 '탁월한 능력'에 해당하나요?",
            answer: "국제 학술지 논문 게재, 국제 대회 수상, 중요 특허 보유 등이 기준이 됩니다. 국가 또는 국제 수준의 업적이 필요합니다.",
          },
          {
            question: "한국에서의 활동 실적이 없어도 가능한가요?",
            answer: "해외에서의 업적으로도 신청 가능하지만, 한국에서의 활동 계획이나 기여 가능성을 보여주는 것이 유리합니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-9", title: "F-5-9 첨단분야 박사" },
          { slug: "e-7", title: "E-7 특정활동비자" },
        ],
      },
    },
    "f-5-16": {
      ko: {
        slug: "f-5-16",
        title: "F-5-16 점수제 영주자",
        subtitle: "F-2 점수제 비자에서 전환하는 영주권",
        overview:
          "F-5-16 점수제 영주자는 F-2-7 점수제 거주비자를 취득하고 3년 이상 한국에 체류한 외국인이 영주자격으로 전환할 수 있는 경로입니다. 체류 기간 중 점수제 요건을 유지하고, 소득·납세 실적이 양호해야 합니다.",
        targetApplicants: [
          "F-2 점수제(F-2-7) 비자 소지 후 3년 이상 체류한 외국인",
          "점수제 거주비자에서 영주권으로 전환을 원하는 전문인력",
          "장기적 한국 정착을 계획하는 우수인재",
        ],
        eligibility: [
          "F-2-7 점수제 비자 취득 후 3년 이상 체류",
          "점수제 요건 유지 (80점 이상)",
          "소득 및 납세 실적 양호",
          "범죄경력 없음",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "체류기간 확인 서류",
          "점수산정표 및 증빙서류",
          "소득증명서",
          "납세증명서",
          "범죄경력증명서",
          "건강진단서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "F-2-7 3년 체류 및 점수 유지 확인" },
          { step: 2, title: "서류 준비", description: "점수 증빙, 소득, 납세 서류 준비" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-16 신청" },
          { step: 4, title: "심사 및 발급", description: "심사 완료 후 영주권 발급" },
        ],
        processingTime: "약 2-4개월",
        importantNotes: [
          "F-2-7 취득 후 3년간 점수 요건(80점)을 유지해야 합니다.",
          "소득 수준 하락이나 범죄 이력 발생 시 전환이 거부될 수 있습니다.",
          "영주권 취득 후에도 2년 이상 해외 체류 시 영주 자격이 취소될 수 있습니다.",
        ],
        faqs: [
          {
            question: "F-2-7에서 F-5-16 전환 시 추가 시험이 있나요?",
            answer: "별도의 시험은 없지만, 점수제 요건(80점) 유지 여부가 재심사됩니다. 사회통합프로그램을 이수했다면 유리합니다.",
          },
          {
            question: "3년 중 해외 출장이 많으면 문제가 되나요?",
            answer: "통상적인 출장은 문제가 없으나, 장기간 해외 체류가 많으면 한국 체류 기간 산정에서 불리할 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-2-points", title: "F-2 점수제비자" },
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-1", title: "F-5-1 일반 영주자" },
        ],
      },
    },
    "f-5-17": {
      ko: {
        slug: "f-5-17",
        title: "F-5-17 부동산투자자",
        subtitle: "부동산 투자 유지를 통한 영주권",
        overview:
          "F-5-17은 법무부 지정 지역에 일정 금액 이상의 부동산을 투자하고 5년 이상 투자를 유지한 외국인이 신청할 수 있는 영주자격입니다. F-2 부동산투자비자에서 전환하는 경로입니다.",
        targetApplicants: [
          "F-2 부동산투자비자로 5년 이상 투자를 유지한 외국인",
          "법무부 지정 지역에 부동산을 보유 중인 외국인",
          "부동산 투자를 통한 영주권을 목표로 하는 투자자",
        ],
        eligibility: [
          "법무부 지정 지역 부동산 투자 5년 이상 유지",
          "투자 부동산 소유권 유지",
          "범죄경력 없음",
          "기본 소양 요건 충족",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "부동산 등기부등본",
          "부동산 감정평가서",
          "투자 유지 확인서",
          "범죄경력증명서",
          "건강진단서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "5년 이상 부동산 투자 유지 확인" },
          { step: 2, title: "서류 준비", description: "등기부등본, 감정평가 등 준비" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-17 신청" },
          { step: 4, title: "심사 및 발급", description: "심사 완료 후 영주권 발급" },
        ],
        processingTime: "약 3-6개월",
        importantNotes: [
          "부동산을 매각하면 영주자격이 취소될 수 있습니다.",
          "부동산 가치가 기준 금액 이하로 하락하면 문제가 될 수 있습니다.",
        ],
        faqs: [
          {
            question: "영주권 취득 후 부동산을 매각해도 되나요?",
            answer: "영주권 취득 후에도 일정 기간 부동산을 유지해야 합니다. 조기 매각 시 영주 자격에 영향을 줄 수 있으므로 사전 확인이 필요합니다.",
          },
          {
            question: "부동산 가격이 하락하면 어떻게 되나요?",
            answer: "투자 시점의 가격이 기준이지만, 대폭 하락 시 추가 투자가 필요할 수 있습니다. 구체적인 기준은 법무부 고시를 확인해야 합니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-2-real-estate", title: "F-2 부동산투자비자" },
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-5", title: "F-5-5 고액투자자" },
        ],
      },
    },
    "f-5-21": {
      ko: {
        slug: "f-5-21",
        title: "F-5-21 공익사업투자자",
        subtitle: "공익사업 투자 유지를 통한 영주권",
        overview:
          "F-5-21은 법무부가 지정한 공익사업(국채, 기금 등)에 5억원 이상을 투자하고 5년 이상 유지한 외국인이 신청할 수 있는 영주자격입니다. F-2 공익사업투자비자에서 전환하는 경로입니다.",
        targetApplicants: [
          "F-2 공익사업투자비자로 5년 이상 투자를 유지한 외국인",
          "법무부 지정 공익사업에 5억원 이상을 투자 중인 외국인",
          "안정적 투자를 통한 영주권을 목표로 하는 투자자",
        ],
        eligibility: [
          "공익사업 5억원 이상 투자 5년 이상 유지",
          "투자금 합법적 출처 증명 완료",
          "범죄경력 없음",
          "기본 소양 요건 충족",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "공익사업 투자 유지 확인서",
          "투자 실적 증빙",
          "범죄경력증명서",
          "건강진단서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "5년 이상 공익사업 투자 유지 확인" },
          { step: 2, title: "서류 준비", description: "투자 유지 확인서 및 증빙 준비" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-21 신청" },
          { step: 4, title: "심사 및 발급", description: "심사 완료 후 영주권 발급" },
        ],
        processingTime: "약 3-6개월",
        importantNotes: [
          "5년 투자 유지 기간 중 중도 회수 시 자격이 소멸됩니다.",
          "영주권 취득 후에도 투자를 유지하는 것이 권장됩니다.",
        ],
        faqs: [
          {
            question: "투자금은 영주권 취득 후 회수 가능한가요?",
            answer: "영주권 취득 후에는 투자금 회수가 가능하지만, 즉시 회수 시 영주 자격 유지에 대한 정확한 규정은 법무부에 확인이 필요합니다.",
          },
          {
            question: "공익사업 투자의 수익률은 어떤가요?",
            answer: "국채 등 안정적 자산에 투자하므로 수익률은 낮은 편입니다. 투자 수익보다는 체류자격 취득이 주 목적입니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-2-public-interest", title: "F-2 공익사업투자비자" },
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-5", title: "F-5-5 고액투자자" },
        ],
      },
    },
    "f-5-24": {
      ko: {
        slug: "f-5-24",
        title: "F-5-24 기술창업투자자",
        subtitle: "기술창업으로 한국 경제에 기여한 외국인을 위한 영주권",
        overview:
          "F-5-24는 한국에서 기술창업(D-8-4 등)을 통해 사업을 운영하면서 일정 수준의 매출 실적과 한국인 고용을 달성한 외국인이 신청할 수 있는 영주자격입니다. 기술혁신형 스타트업 대표가 주 대상입니다.",
        targetApplicants: [
          "D-8-4 기술창업비자로 사업을 운영 중인 외국인",
          "기술혁신형 스타트업을 운영하며 매출·고용 실적이 있는 대표",
          "정부 창업지원 프로그램 졸업 기업의 외국인 대표",
        ],
        eligibility: [
          "기술창업으로 일정 기간 사업 운영",
          "일정 수준의 매출 실적 달성",
          "한국인 고용 실적",
          "범죄경력 없음",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "법인등기부등본",
          "사업자등록증",
          "매출 증빙 (재무제표·부가세 신고서 등)",
          "고용 증빙 (4대보험 가입자명부)",
          "특허·기술 관련 서류 (해당 시)",
          "범죄경력증명서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "매출, 고용, 사업 기간 요건 확인" },
          { step: 2, title: "서류 준비", description: "재무제표, 고용 증빙 등 준비" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-24 신청" },
          { step: 4, title: "심사 및 발급", description: "심사 완료 후 영주권 발급" },
        ],
        processingTime: "약 3-6개월",
        importantNotes: [
          "매출과 고용 실적이 핵심 심사 요소입니다.",
          "정부 창업지원 프로그램 참여 이력이 유리하게 작용합니다.",
          "기술창업이 아닌 일반 창업은 해당되지 않을 수 있습니다.",
        ],
        faqs: [
          {
            question: "매출이 얼마나 있어야 하나요?",
            answer: "구체적인 매출 기준은 공식 고시에 따르며, 사업 분야와 규모에 따라 다릅니다. 지속적인 성장세를 보여주는 것이 중요합니다.",
          },
          {
            question: "D-8-4 비자가 아닌 다른 비자로도 신청 가능한가요?",
            answer: "기술창업 관련 비자(D-8-4 등)로 사업을 운영한 실적이 기본이지만, 구체적인 자격은 출입국관리사무소에 확인이 필요합니다.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 기업투자비자" },
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "f-5-5", title: "F-5-5 고액투자자" },
        ],
      },
    },
    "f-5-25": {
      ko: {
        slug: "f-5-25",
        title: "F-5-25 조건부 고액투자자",
        subtitle: "조건부 영주자격을 부여하는 고액투자 영주권",
        overview:
          "F-5-25 조건부 고액투자자 영주권은 일정 금액 이상을 투자한 외국인에게 조건부로 영주자격을 부여하는 비자입니다. 일정 기간(통상 5년) 투자를 유지해야 하며, 유지 조건을 충족하지 못하면 영주자격이 취소될 수 있습니다.",
        targetApplicants: [
          "한국에 고액 투자를 계획하는 외국인",
          "조건부 영주를 통해 한국 정착을 희망하는 투자자",
          "투자 후 영주권 취득을 목표로 하는 고자산 외국인",
        ],
        eligibility: [
          "법무부가 정한 고액투자 기준 충족",
          "투자금의 합법적 출처 증명",
          "일정 기간 투자 유지 약정",
          "범죄경력 없음",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "투자 확인서",
          "투자금 출처 증빙",
          "투자 유지 약정서",
          "범죄경력증명서",
          "건강진단서",
        ],
        process: [
          { step: 1, title: "투자 계획 수립", description: "투자 금액 및 대상 결정" },
          { step: 2, title: "투자 실행", description: "고액 투자 실행 및 확인서 발급" },
          { step: 3, title: "영주권 신청", description: "출입국관리사무소에 F-5-25 신청" },
          { step: 4, title: "조건부 영주권 발급", description: "심사 후 조건부 영주자격 부여" },
        ],
        processingTime: "약 3-6개월",
        importantNotes: [
          "조건부 영주이므로 투자 유지 조건을 반드시 이행해야 합니다.",
          "투자금 회수 또는 대폭 감소 시 영주자격이 취소됩니다.",
          "조건 이행 완료 후 정식 영주자격으로 전환됩니다.",
        ],
        faqs: [
          {
            question: "조건부와 일반 영주권의 차이는?",
            answer: "조건부 영주권은 일정 기간 투자를 유지해야 하는 조건이 붙어 있습니다. 조건 이행 후 정식 영주자격으로 전환됩니다.",
          },
          {
            question: "투자 유지 기간은 얼마인가요?",
            answer: "통상 5년이며, 구체적인 기간은 투자 유형과 법무부 고시에 따라 다를 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-5", title: "F-5-5 고액투자자" },
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "d-8", title: "D-8 기업투자비자" },
        ],
      },
    },
    "naturalization": {
      ko: {
        slug: "naturalization",
        title: "귀화 신청",
        subtitle: "대한민국 국적을 취득하는 절차",
        overview: "귀화란 외국인이 대한민국 국적을 취득하는 것입니다. 국적법에 따라 일반귀화, 간이귀화, 특별귀화로 나뉘며, 각각 요건이 다릅니다. 5년 이상 국내 체류, 생계능력, 국어능력 등의 요건을 갖추어야 합니다.",
        targetApplicants: ["한국에서 5년 이상 체류한 외국인 (일반귀화)", "한국인 배우자 (간이귀화)", "특별공로자 또는 우수인재 (특별귀화)", "한국인 부모를 둔 외국인"],
        eligibility: ["국내 5년 이상 계속 거주 (일반귀화)", "대한민국 민법상 성년", "품행 단정", "생계유지 능력", "국어능력 및 대한민국 풍습에 대한 이해"],
        requiredDocuments: ["귀화허가 신청서", "여권 사본", "가족관계 입증서류", "재산 관련 서류", "범죄경력증명서", "국어능력 입증서류 (TOPIK 등)", "기본증명서, 가족관계증명서", "체류지 입증서류"],
        process: [{ step: 1, title: "자격 확인", description: "귀화 유형별 자격요건 검토" }, { step: 2, title: "서류 준비", description: "필수 서류 준비 및 번역·공증" }, { step: 3, title: "법무부 접수", description: "출입국관리사무소에 귀화허가 신청" }, { step: 4, title: "심사", description: "서류 심사 및 면접 (약 6개월~1년)" }, { step: 5, title: "국적 취득", description: "귀화허가 후 국적 취득" }],
        processingTime: "약 6개월~1년",
        importantNotes: ["귀화 시 기존 외국 국적을 포기해야 합니다 (복수국적 예외 있음).", "간이귀화는 한국인 배우자의 경우 혼인 후 2년 이상 한국에 체류하면 신청 가능합니다.", "국어능력시험(KINAT) 또는 사회통합프로그램 이수가 필요합니다."],
        faqs: [{ question: "귀화와 국적회복의 차이는?", answer: "귀화는 한국 국적이 없었던 외국인이 새로 국적을 취득하는 것이고, 국적회복은 과거 한국 국적을 보유했던 사람이 국적을 되찾는 것입니다." }, { question: "귀화 후 외국 국적은 어떻게 되나요?", answer: "원칙적으로 외국 국적을 포기해야 하지만, 65세 이상 등 일부 경우 외국국적 불행사 서약으로 복수국적 유지가 가능합니다." }, { question: "소요 기간은 얼마나 되나요?", answer: "일반적으로 접수 후 6개월~1년 소요됩니다." }],
        relatedVisas: [{ slug: "nationality-recovery", title: "국적회복" }, { slug: "f-5", title: "F-5 영주권" }, { slug: "f-6", title: "F-6 결혼비자" }],
      },
    },
    "nationality-recovery": {
      ko: {
        slug: "nationality-recovery",
        title: "국적회복",
        subtitle: "대한민국 국적을 되찾는 절차",
        overview: "국적회복은 과거 대한민국 국적을 보유했다가 외국 국적을 취득하여 한국 국적을 상실한 사람이 다시 대한민국 국적을 취득하는 제도입니다. 65세 이상인 경우 외국국적 불행사 서약만으로 복수국적을 유지할 수 있는 특례가 적용됩니다.",
        targetApplicants: ["과거 대한민국 국적을 보유했던 외국인", "국적상실 신고를 완료한 자", "65세 이상 복수국적 희망자", "해외 입양 출신 한국계"],
        eligibility: ["과거 대한민국 국적 보유 사실 입증", "품행 단정", "생계유지 능력", "국어능력 및 기본 소양", "국적상실 신고 완료"],
        requiredDocuments: ["국적회복 허가 신청서", "여권 원본 및 사본", "가족관계증명서(상세)", "기본증명서(상세)", "국적상실 입증 서류", "범죄경력증명서 (아포스티유)", "재산 입증 서류", "사진 1매"],
        process: [{ step: 1, title: "서류 준비", description: "필수 서류 준비 (해외 서류는 아포스티유 필요)" }, { step: 2, title: "관할 기관 방문", description: "출입국·외국인청에 접수" }, { step: 3, title: "법무부 심사", description: "서류 및 요건 심사 (6개월~1년)" }, { step: 4, title: "국적회복 허가", description: "관보 고시" }, { step: 5, title: "외국국적 처리", description: "65세 이상: 불행사 서약 / 65세 미만: 외국 국적 포기" }],
        processingTime: "약 6개월~1년",
        importantNotes: ["65세 이상은 외국국적 불행사 서약으로 복수국적 유지 가능.", "국적회복 후 주민등록 및 대한민국 여권 발급 가능.", "병역을 기피할 목적으로 국적을 상실한 남성은 제한될 수 있음."],
        faqs: [{ question: "65세 이상이면 외국 국적을 포기해야 하나요?", answer: "아닙니다. 65세 이상은 '외국국적 불행사 서약'만으로 한국 국적과 외국 국적을 모두 유지할 수 있습니다." }, { question: "심사 기간은 얼마나 걸리나요?", answer: "보통 6개월~1년 소요됩니다." }, { question: "국적회복 후 F-4 비자는 어떻게 되나요?", answer: "한국 국적을 취득하므로 F-4 비자는 소멸되고, 주민등록 후 대한민국 여권을 발급받습니다." }],
        relatedVisas: [{ slug: "naturalization", title: "귀화 신청" }, { slug: "f-5", title: "F-5 영주권" }, { slug: "f-4", title: "F-4 거소증" }],
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

