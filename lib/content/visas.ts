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
      en: {
        slug: "e-6",
        title: "E-6 Arts & Entertainment Visa",
        subtitle: "Work visa for performance, entertainment, and sports activities",
        overview:
          "The E-6 Arts & Entertainment Visa is issued to foreigners who wish to engage in profit-generating activities in music, fine arts, literature, performance, entertainment, or sports in Korea. Sub-types include E-6-1 (Arts/Entertainment), E-6-2 (Hotel/Venue Performance), and E-6-3 (Athletes). A sponsoring organization or contracting party must be confirmed.",
        targetApplicants: [
          "Overseas artists and musicians performing in Korea",
          "Foreigners engaging in broadcasting, advertising, or modeling",
          "Professional athletes and coaching staff",
          "Foreign entertainers performing at hotels and resorts in Korea",
        ],
        eligibility: [
          "A confirmed sponsoring organization or contracting party",
          "Demonstrated expertise through career history or awards in the relevant field",
          "No criminal record or entry ban history",
          "Performance recommendation letter from the Ministry of Culture, Sports and Tourism required for E-6-2",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Employment contract or invitation letter",
          "Career certificate / portfolio",
          "Sponsoring organization's business registration",
          "Performance recommendation letter (for E-6-2)",
          "Degree certificate",
        ],
        process: [
          { step: 1, title: "Contract Signing", description: "Sign a performance or appearance contract with a Korean sponsoring organization" },
          { step: 2, title: "Performance Recommendation", description: "Apply for recommendation letter from the Ministry of Culture (E-6-2)" },
          { step: 3, title: "Visa Issuance Certificate", description: "Apply for a Certificate of Visa Issuance at the immigration office" },
          { step: 4, title: "Visa Application", description: "Apply for E-6 visa at a Korean embassy or consulate" },
          { step: 5, title: "Entry & Alien Registration", description: "Register as a foreigner within 90 days of entry" },
        ],
        processingTime: "Approximately 2-4 weeks",
        importantNotes: [
          "E-6-2 (hotel/venue performances) is subject to strict screening to prevent human trafficking.",
          "You must leave Korea or change your visa status after the contract period ends.",
          "Engaging in work activities outside the permitted scope is illegal.",
        ],
        faqs: [
          {
            question: "How long can I stay with an E-6 visa?",
            answer: "The visa is issued for up to 2 years depending on the contract period, and can be extended if the contract is renewed.",
          },
          {
            question: "Can YouTubers or influencers get an E-6 visa?",
            answer: "If the activity involves profit-generating entertainment or broadcasting, it may qualify for an E-6 visa. However, specifics depend on the contract details and scope of activities.",
          },
          {
            question: "What is the difference between E-6 and E-7?",
            answer: "E-6 is exclusively for arts and entertainment (performance, entertainment, sports), while E-7 is for professional occupations (IT, engineering, etc.). You must choose the appropriate visa based on your field of activity.",
          },
        ],
        relatedVisas: [
          { slug: "e-7", title: "E-7 Special Activities Visa" },
          { slug: "d-8", title: "D-8 Corporate Investment Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency" },
        ],
      },
      zh: {
        slug: "e-6",
        title: "E-6 艺术演出签证",
        subtitle: "用于演出、演艺、体育等艺术活动的工作签证",
        overview:
          "E-6艺术演出签证是为希望在韩国从事以盈利为目的的音乐、美术、文学等艺术活动或演出、演艺、体育活动的外国人签发的工作签证。细分为E-6-1（艺术·演艺）、E-6-2（酒店·娱乐场所演出）、E-6-3（运动员）等类型，需要邀请机构或签约方的确认。",
        targetApplicants: [
          "希望在韩国进行演出活动的海外艺术家·音乐家",
          "希望从事广播·广告·模特等演艺活动的外国人",
          "职业运动员及教练团队",
          "在韩国酒店·度假村等场所演出的外国演艺人员",
        ],
        eligibility: [
          "已确定邀请机构或签约机构",
          "具备相关领域经验或获奖记录等专业能力证明",
          "无犯罪记录及入境禁止历史",
          "E-6-2需要文化体育观光部演出推荐书",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "雇佣合同或邀请函",
          "工作经历证明·作品集",
          "邀请机构营业执照",
          "演出推荐书（E-6-2适用时）",
          "最终学历证明",
        ],
        process: [
          { step: 1, title: "签订合同", description: "与韩国邀请机构签订演出·出演合同" },
          { step: 2, title: "演出推荐书", description: "向文化体育观光部申请演出推荐书（E-6-2）" },
          { step: 3, title: "签证发放认定书申请", description: "向出入境管理局申请签证发放认定书" },
          { step: 4, title: "签证申请", description: "在驻外使领馆申请E-6签证" },
          { step: 5, title: "入境及外国人登记", description: "入境后90天内完成外国人登记" },
        ],
        processingTime: "约2-4周",
        importantNotes: [
          "E-6-2（酒店·娱乐场所演出）为防止人口贩卖，审查十分严格。",
          "合同期满后必须出境或变更居留资格。",
          "从事许可活动以外的其他就业活动属违法行为。",
        ],
        faqs: [
          {
            question: "E-6签证可以停留多久？",
            answer: "根据合同期限最长签发2年，合同续签时可延长居留期限。",
          },
          {
            question: "网红或博主也能获得E-6签证吗？",
            answer: "如从事以盈利为目的的演艺·广播活动，可能属于E-6签证对象。但具体取决于合同内容和活动范围。",
          },
          {
            question: "E-6和E-7有什么区别？",
            answer: "E-6专用于艺术演出（演出、演艺、体育），E-7为专业职种（IT、工程等）工作签证。需根据活动领域选择合适的签证。",
          },
        ],
        relatedVisas: [
          { slug: "e-7", title: "E-7 特定活动签证" },
          { slug: "d-8", title: "D-8 企业投资签证" },
          { slug: "f-5", title: "F-5 永住权" },
        ],
      },
      ja: {
        slug: "e-6",
        title: "E-6 芸術興行ビザ",
        subtitle: "公演・芸能・スポーツ等の芸術興行活動のための就労ビザ",
        overview: "E-6芸術興行ビザは、収益を目的とした音楽、美術、文学等の芸術活動や公演、芸能、スポーツ活動を行う外国人に発給される就労ビザです。E-6-1（芸術・芸能）、E-6-2（ホテル・娯楽施設公演）、E-6-3（スポーツ選手）等の細分類があり、招聘機関または契約相手方の確認が必要です。",
        targetApplicants: [
          "韓国で公演活動を行う海外アーティスト・ミュージシャン",
          "放送・広告・モデル等の芸能活動を行う外国人",
          "プロスポーツ選手およびコーチングスタッフ",
          "韓国のホテ��・リゾート等で公演する外国人芸能人",
        ],
        eligibility: [
          "招聘機関または契約機関が確保されていること",
          "当該分野の経歴または受賞実績等の専門性の証明",
          "犯罪歴および入国禁止履歴がないこと",
          "E-6-2の場合、文化体育観光部の公演推薦書が必要",
        ],
        requiredDocuments: [
          "ビザ申請書",
          "パスポートコピー",
          "証明写真（3.5x4.5cm）",
          "雇用契約書または招聘状",
          "経歴証明書・ポートフォリオ",
          "招聘機関の事業者登録���",
          "公演推薦��（E-6-2該当時）",
          "最終学歴証明書",
        ],
        process: [
          { step: 1, title: "契約締結", description: "韓国の招聘機関と公演・出演契約を締結" },
          { step: 2, title: "公演推薦書取得", description: "文化体育観光部に公演推薦書を申請（E-6-2）" },
          { step: 3, title: "査証発給認定書申請", description: "出入国管理事務所に査証発給認定書を申請" },
          { step: 4, title: "ビザ申請", description: "在外公館でE-6ビザを申請" },
          { step: 5, title: "入国および外国人登録", description: "入国後90日以内に外国人登録" },
        ],
        processingTime: "約2〜4週間",
        importantNotes: [
          "E-6-2（ホテル・娯楽施設公演）は人身売買防止のため審査が厳格です。",
          "契約期間終了後は出国するか在留資格を変更する必要があります。",
          "許可された活動以外の就労は違法です。",
        ],
        faqs: [
          { question: "E-6ビザでどのくらい滞在できますか？", answer: "契約期間に応じて最長2年まで発給され、契約更新時に延長が可能です。" },
          { question: "YouTuberやインフルエンサーもE-6ビザを取得できますか？", answer: "収益目的の芸能・放送活動に該当すればE-6ビザの対象となり得ます��具体的な契約内容と活動範囲によります。" },
          { question: "E-6とE-7の違いは？", answer: "E-6は芸術興行（公演、芸能、スポーツ）専用で、E-7は専門職種（IT、エンジニアリング等）の就労ビザです。" },
        ],
        relatedVisas: [
          { slug: "e-7", title: "E-7 特定活動ビザ" },
          { slug: "d-8", title: "D-8 企業投資ビザ" },
          { slug: "f-5", title: "F-5 永住権" },
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
      en: {
        slug: "d-8-executive",
        title: "D-8 Executive Transfer Visa",
        subtitle: "Visa for executives dispatched to foreign-invested companies in Korea",
        overview:
          "The D-8 Executive Transfer Visa is issued to executives (directors, auditors, etc.) dispatched from an overseas parent company to a foreign-invested company in Korea (subsidiary, joint venture, etc.). The applicant must be registered as an executive officer in the corporate registry of a company qualifying under the Foreign Investment Promotion Act. Investment amount and company performance are key review factors.",
        targetApplicants: [
          "Executives dispatched from an overseas parent company to a Korean subsidiary",
          "Foreigners appointed as registered directors or auditors of a foreign-invested company",
          "Management dispatched from a partner company to a joint venture",
          "Foreigners appointed as CEO of a newly established foreign-invested company",
        ],
        eligibility: [
          "Registered as an executive officer (director/auditor) of a foreign-invested company",
          "Meet investment requirements under the Foreign Investment Promotion Act (minimum KRW 100 million / approx. USD 75,000)",
          "Evidence of executive activities at the company (board meeting minutes, etc.)",
          "No criminal record or entry ban history",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Foreign-invested company registration certificate",
          "Corporate registry (confirming executive registration)",
          "Dispatch order or executive appointment resolution",
          "Parent company business registration and corporate registry",
          "Investment remittance proof",
          "Business plan",
        ],
        process: [
          { step: 1, title: "Investment & Company Establishment", description: "Foreign investment report and establishment/registration of Korean corporation" },
          { step: 2, title: "Executive Registration", description: "Register as executive (director/auditor) in corporate registry" },
          { step: 3, title: "Document Preparation", description: "Prepare dispatch order, investment proof, and other required documents" },
          { step: 4, title: "Visa Application", description: "Apply for D-8 visa at immigration office or Korean embassy" },
          { step: 5, title: "Visa Issuance", description: "Visa issued after review (approx. 2-4 weeks)" },
        ],
        processingTime: "Approximately 2-4 weeks",
        importantNotes: [
          "If you are not registered as an executive in the corporate registry, D-8 executive transfer status will not be recognized.",
          "Visa extension may be denied if the company has no substantial business activity.",
          "Spouse and minor children can apply for F-3 dependent visa.",
        ],
        faqs: [
          {
            question: "What is the difference between D-8 Executive Transfer and D-7 Intra-company Transfer?",
            answer: "D-8 Executive Transfer is for registered executives of foreign-invested companies, while D-7 is for non-executive employees dispatched from overseas headquarters. D-8 requires meeting investment requirements (KRW 100 million or more).",
          },
          {
            question: "Can I be dispatched as an executive without any investment?",
            answer: "The D-8 visa requires meeting investment requirements under the Foreign Investment Promotion Act. If only management dispatch is involved without investment, D-7 visa may be more appropriate.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 Corporate Investment Visa" },
          { slug: "d-7", title: "D-7 Intra-company Transfer Visa" },
          { slug: "d-8-individual", title: "D-8 Individual Investment Visa" },
        ],
      },
      zh: {
        slug: "d-8-executive",
        title: "D-8 高管派遣签证",
        subtitle: "以高管身份派遣至外资企业的签证",
        overview:
          "D-8高管派遣签证是海外母公司向韩国外资企业（子公司·合资企业等）派遣高管（董事、监事等）时签发的签证。申请人须在外国投资促进法规定的外资企业中注册为登记高管，投资金额和企业业绩是主要审查因素。",
        targetApplicants: [
          "从海外母公司派遣至韩国子公司的高管",
          "被任命为外资企业登记董事·监事的外国人",
          "从合作方公司派遣至合资企业的管理层",
          "新设外资企业后就任代表理事的外国人",
        ],
        eligibility: [
          "在外资企业注册为登记高管（董事·监事）",
          "满足外国投资促进法投资要求（最低1亿韩元，约7.5万美元）",
          "提供高管活动证明（董事会议事录等）",
          "无犯罪记录及入境禁止历史",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "外资企业登记证",
          "法人登记簿誊本（确认高管登记）",
          "派遣令或高管任命决议书",
          "母公司营业执照·法人登记簿誊本",
          "投资汇款证明",
          "商业计划书",
        ],
        process: [
          { step: 1, title: "投资及设立法人", description: "外国投资申报及韩国法人设立·登记" },
          { step: 2, title: "高管登记", description: "在法人登记簿上登记高管（董事·监事）" },
          { step: 3, title: "准备材料", description: "准备派遣令、投资证明等所需材料" },
          { step: 4, title: "签证申请", description: "在出入境管理局或驻外使领馆申请D-8签证" },
          { step: 5, title: "签证签发", description: "审核完成后签发签证（约2-4周）" },
        ],
        processingTime: "约2-4周",
        importantNotes: [
          "如未在登记簿上注册为高管，将不被认定为D-8高管派遣资格。",
          "法人无实质经营活动的，签证延期可能被拒。",
          "配偶和未成年子女可申请F-3随行签证。",
        ],
        faqs: [
          {
            question: "D-8高管派遣签证和D-7驻在员签证有什么区别？",
            answer: "D-8高管派遣面向外资企业的登记高管，D-7面向从海外总部派遣的普通员工（非高管）。D-8需要满足投资要求（1亿韩元以上）。",
          },
          {
            question: "没有投资也能以高管身份派遣吗？",
            answer: "D-8签证以满足外国投资促进法的投资要求为前提。如仅为管理派遣而无投资，D-7签证可能更为合适。",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 企业投资签证" },
          { slug: "d-7", title: "D-7 驻在员签证" },
          { slug: "d-8-individual", title: "D-8 个人投资签证" },
        ],
      },
      ja: {
        slug: "d-8-executive",
        title: "D-8 役員派遣ビザ",
        subtitle: "外国人投資企業に役員として派遣される場合のビザ",
        overview: "D-8役員派遣ビザは、海外の親会社から韓国の外国人投資企業（子会社・合弁法人等）に役員（取締役、監査役等）として派遣される場合に発給されるビザです。外国人投資促進法上の外国人投資企業に登記役員として登録される必要があり、投資金額要件と企業実績が審査要素となります。",
        targetApplicants: ["海外親会社から韓国子会社に派遣される役員", "外国人投資企業の登記取締役・監���役に就任する外国人", "合弁法人にパートナー企業から派遣さ���る経営陣", "新規外国人投資企業設立後に代表取締役に就任する外国人"],
        eligibility: ["外国人投資企業に登記役員（取締役・監査役）として登録", "外国人投資促進法に基づく投資要件の充足（最低1億ウォン）", "当該企業での役員活動の証憑（取締役会議事録等）", "犯罪歴および入国禁止履歴がないこと"],
        requiredDocuments: ["ビザ申請書", "パスポートコピー", "証明写真（3.5x4.5cm）", "外国人投資企業登録証明書", "法人登記簿謄本（役員登記確認）", "派遣命令書または役員選任決議書", "親会社の事業者登録証・法人登記簿謄本", "投資金送金証憑", "事業計画書"],
        process: [
          { step: 1, title: "投資および法人設立", description: "外国人投資届出および韓国��人設立・登録" },
          { step: 2, title: "役員登記", description: "法人登記簿に役員（取締役・監査役）を登記" },
          { step: 3, title: "書類準備", description: "派遣命令書、投資証憑等の必要書類を準備" },
          { step: 4, title: "ビザ申請", description: "出入国管理事務所または在外公館��D-8を申請" },
          { step: 5, title: "ビザ発給", description: "審査完了後ビザ発給（約2〜4週間）" },
        ],
        processingTime: "約2〜4週間",
        importantNotes: ["登記簿に役員として登記されていなければD-8役員派遣資格は認められません。", "法人の実質的な営業活動がない場合、ビザ延長が拒否されることがあります。", "配偶者���未成年の子女はF-3同伴ビザの申請が可能です。"],
        faqs: [
          { question: "D-8役員派遣ビザとD-7駐���員ビザの違いは？", answer: "D-8役員派遣は外国人投資企業の登記役員が対象で、D-7は海外本社から派遣された一般社員（非役員）が対象です。D-8は投資要件（1億ウォン以上）が必要です。" },
          { question: "投資なしで役員としてのみ派遣できますか？", answer: "D-8ビザは外国人投資促進法上の投資要件充足が前提です。投��なしで経営派遣のみの場合はD-7ビザが適切な場合があります。" },
        ],
        relatedVisas: [{ slug: "d-8", title: "D-8 企業投資ビザ" }, { slug: "d-7", title: "D-7 駐在員ビザ" }, { slug: "d-8-individual", title: "D-8 個人投資ビザ" }],
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
      en: {
        slug: "d-8-individual",
        title: "D-8 Individual Investment Visa",
        subtitle: "Visa for foreigners personally investing in and operating a business in Korea",
        overview:
          "The D-8 Individual Investment Visa is for foreigners who invest KRW 100 million (approx. USD 75,000) or more in their own name to establish a corporation in Korea and directly participate in management. The applicant must serve as the CEO or a registered executive of the company, and investment report and registration under the Foreign Investment Promotion Act are required.",
        targetApplicants: [
          "Foreigners looking to start a business in Korea with personal capital",
          "Investors establishing a one-person corporation in Korea for direct management",
          "Foreigners investing in franchise businesses in Korea",
          "Foreigners establishing a corporation to enter the Korean market",
        ],
        eligibility: [
          "Investment of KRW 100 million (approx. USD 75,000) or more remitted from overseas",
          "Completion of foreign investment report under the Foreign Investment Promotion Act",
          "Registered as CEO or executive officer after company establishment",
          "No criminal record or entry ban history",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Foreign investment report",
          "Investment remittance proof (overseas wire transfer confirmation)",
          "Corporate registry",
          "Business registration certificate",
          "Business plan",
          "Bank balance certificate",
          "Degree certificate",
        ],
        process: [
          { step: 1, title: "Business Planning", description: "Select business item and determine investment scale" },
          { step: 2, title: "Foreign Investment Report", description: "File investment report through KOTRA or foreign exchange bank" },
          { step: 3, title: "Fund Transfer", description: "Wire investment funds from overseas to the investment account" },
          { step: 4, title: "Company Establishment", description: "Complete corporate registration and business registration" },
          { step: 5, title: "Visa Application", description: "Apply for D-8 visa at the immigration office" },
        ],
        processingTime: "Approximately 2-4 weeks",
        importantNotes: [
          "Investment funds must be remitted from overseas; domestic funds are not recognized as investment.",
          "Visa extension will be difficult if there is no substantial business activity after company establishment.",
          "Revenue performance and employment status are key factors in visa extension reviews.",
        ],
        faqs: [
          {
            question: "What is the difference between individual and corporate investment?",
            answer: "Corporate investment (D-8) involves an overseas corporation investing in Korea, while individual investment is when a foreign individual invests directly. Both fall under the D-8 visa but require different documentation and proof methods.",
          },
          {
            question: "Can I invest less than KRW 100 million?",
            answer: "In principle, an investment of KRW 100 million or more is required. However, special types like tech startups (D-8-4) may have relaxed requirements if selected for government programs.",
          },
          {
            question: "Can I maintain my visa if business is slow?",
            answer: "A certain level of revenue and business performance is required for visa extension. Extensions may be denied if the business has been dormant or revenue is poor for an extended period.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 Corporate Investment Visa" },
          { slug: "d-8-executive", title: "D-8 Executive Transfer Visa" },
          { slug: "d-9", title: "D-9 Trade Management Visa" },
        ],
      },
      zh: {
        slug: "d-8-individual",
        title: "D-8 个人投资签证",
        subtitle: "外国人以个人身份在韩国投资经营的签证",
        overview:
          "D-8个人投资签证适用于外国人以个人名义在韩国投资1亿韩元（约7.5万美元）以上、设立法人并直接参与经营管理的情况。申请人须担任法人的代表理事或登记高管，需按照外国投资促进法完成投资申报和登记。",
        targetApplicants: [
          "希望以个人资本在韩国创业的外国人",
          "希望在韩国设立一人公司并直接经营的投资者",
          "为加盟连锁等业务在韩国投资的外国人",
          "希望以个人身份设立法人进入韩国市场的外国人",
        ],
        eligibility: [
          "从海外汇入1亿韩元（约7.5万美元）以上的投资款",
          "完成外国投资促进法规定的投资申报",
          "设立法人后注册为代表理事或登记高管",
          "无犯罪记录及入境禁止历史",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "外国投资申报书",
          "投资汇款证明（海外汇款确认书）",
          "法人登记簿誊本",
          "营业执照",
          "商业计划书",
          "银行存款证明",
          "最终学历证明",
        ],
        process: [
          { step: 1, title: "制定事业计划", description: "选择商业项目并确定投资规模" },
          { step: 2, title: "外国投资申报", description: "通过KOTRA或外汇银行进行投资申报" },
          { step: 3, title: "汇款投资", description: "从海外向投资账户汇入资金" },
          { step: 4, title: "设立法人", description: "完成法人登记和工商登记" },
          { step: 5, title: "签证申请", description: "向出入境管理局申请D-8签证" },
        ],
        processingTime: "约2-4周",
        importantNotes: [
          "投资款必须从海外汇入，国内资金不予认可。",
          "设立法人后如无实质经营活动，签证延期将十分困难。",
          "营业收入、雇佣情况等是签证延期审查的关键因素。",
        ],
        faqs: [
          {
            question: "个人投资和企业投资有什么区别？",
            answer: "企业投资（D-8）是海外法人在韩国投资，个人投资是外国人个人直接投资。两者均属于D-8签证，但所需材料和证明方式不同。",
          },
          {
            question: "投资不足1亿韩元也可以吗？",
            answer: "原则上需要1亿韩元以上的投资。但技术创业（D-8-4）等特殊类型如被政府支援项目选中，要求可能会降低。",
          },
          {
            question: "经营不善也能维持签证吗？",
            answer: "需要具备一定水平的营收和经营业绩才能延期签证。长期停业或营收不佳时，居留资格延期可能被拒。",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 企业投资签证" },
          { slug: "d-8-executive", title: "D-8 高管派遣签证" },
          { slug: "d-9", title: "D-9 贸易经营签证" },
        ],
      },
      ja: {
        slug: "d-8-individual",
        title: "D-8 個人投資ビザ",
        subtitle: "外国人が個人資格で韓国に投資し事業を運営するためのビザ",
        overview: "D-8個人投資ビザは、外国人が個人名義で韓国に1億ウォン以上を投資��法人を設立して直接経営に参加するためのビザです。法人の代表取締役または登記役員として活動し、外国人投資促進法に基づ���投資届出および登録が必要です。",
        targetApplicants: ["個人資本で韓国での創業を希望する外国人", "韓国に一人法人を設立し直接経営する投資家", "フランチャイズ事業等のために韓国に投資する外国人", "韓国市場参入のために個人資格で法人を設立する外国人"],
        eligibility: ["1億ウォン以上の投資金を海外から送金するこ��", "外国人投資促進法に基づく投資届出完了", "法人設立後、代表取締役または登記役員として登記", "犯罪歴および入国禁止履歴がないこと"],
        requiredDocuments: ["ビザ申請書", "パスポートコピー", "証明写真（3.5x4.5cm）", "外国人投資届出書", "投資金送金証憑（海外送金確認書）", "法人登記簿謄本", "事業者登録証", "事業計画書", "残高証明書", "最終学歴証明書"],
        process: [
          { step: 1, title: "事業計画策定", description: "事業アイテム選定および投資規模の決定" },
          { step: 2, title: "外国人投資届出", description: "KOTRAまたは外国為替銀行を通じた投資届出" },
          { step: 3, title: "投資金送金", description: "海外から投資用口座へ資金を送金" },
          { step: 4, title: "法人設立", description: "法人��記および事業者登録の完了" },
          { step: 5, title: "ビザ申請", description: "出入国管理事務所にD-8ビザを申請" },
        ],
        processingTime: "約2〜4週間",
        importantNotes: ["投資金は必ず海外から送金される必要��あり、国内資金は投資金として認められません。", "法人設立後に実質的な営業活動がなければビザ延長は困難です。", "売上実績、雇用状況等がビザ延長審査の核心要素です。"],
        faqs: [
          { question: "個人投資と企業投資の違いは？", answer: "企業投資（D-8）は海外法人が韓国に投資するもので、個人投資は外国人個人が直接投資するものです。どちらもD-8ビザに該当しますが書類と立証方法が異なります。" },
          { question: "1億ウォン未満でも可能ですか？", answer: "原則として1億ウォン以上の投資が必要です。ただし技術創業（D-8-4）等は政府プログラムに選定されれば要件が緩和されることがあります。" },
          { question: "事業が不振でもビザは維持できますか？", answer: "一定水準の売上と事業実績がなければビザ延長は困難です。長期間の休業や売上不振の場合、在留資格延長が拒否されることがあります。" },
        ],
        relatedVisas: [{ slug: "d-8", title: "D-8 企業投資ビザ" }, { slug: "d-8-executive", title: "D-8 役員派遣ビザ" }, { slug: "d-9", title: "D-9 貿易経営ビザ" }],
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
          "해외 기업 소속 또는 해외 수입원이 있는 프리랜서 (1년 이상 동일 업종 근무)",
          "전년도 1인당 국민총소득(GNI)의 2배 이상 소득 증빙",
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
            answer: "한국은행 고시 전년도 1인당 국민총소득(GNI)의 2배 이상의 소득이 필요합니다. 프리랜서의 경우 최근 1년간의 수입을 증빙해야 합니다.",
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
      en: {
        slug: "f-1-digital-nomad",
        title: "F-1 Digital Nomad Visa",
        subtitle: "Residence permit for remote workers employed by overseas companies",
        overview:
          "The F-1 Digital Nomad Visa (Workation Visa), introduced in 2024, allows foreigners employed by overseas companies to live in Korea while working remotely. Employment with Korean companies is not permitted; applicants must have income from an overseas employer.",
        targetApplicants: [
          "Remote workers currently employed by overseas companies",
          "Freelancers working with overseas clients",
          "Foreigners wishing to stay in Korea for an extended period while working remotely",
          "IT and creative professionals pursuing a digital nomad lifestyle",
        ],
        eligibility: [
          "Employed by an overseas company or a freelancer with overseas income sources (1+ year in the same field)",
          "Income proof of at least twice the previous year's per capita GNI (Gross National Income)",
          "Engaged in a profession that allows remote work",
          "Enrolled in health insurance or travel insurance",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Employment certificate or freelance contract",
          "Income proof (past 12 months)",
          "Bank balance certificate",
          "Health or travel insurance proof",
          "Accommodation proof (lease agreement or hotel reservation)",
          "Remote work confirmation letter (issued by employer)",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify income requirements and remote work eligibility" },
          { step: 2, title: "Document Preparation", description: "Prepare employment certificate, income proof, insurance, etc." },
          { step: 3, title: "Visa Application", description: "Apply for F-1 Digital Nomad visa at a Korean embassy or consulate" },
          { step: 4, title: "Visa Issuance", description: "Visa issued after review (approx. 2-3 weeks)" },
        ],
        processingTime: "Approximately 2-3 weeks",
        importantNotes: [
          "Employment with companies in Korea is not permitted.",
          "Maximum stay is 2 years, extendable in 1-year increments.",
          "Accompanying family members (spouse and minor children) can also stay on F-1 dependent status.",
        ],
        faqs: [
          {
            question: "Can I get a job in Korea with a Digital Nomad visa?",
            answer: "No, the Digital Nomad visa only permits remote work for overseas employers. To work for a Korean company, you need an employment visa such as E-7.",
          },
          {
            question: "What is the exact income requirement?",
            answer: "You need to demonstrate income of at least twice the Bank of Korea's announced per capita GNI for the previous year. Freelancers must provide proof of income for the past 12 months.",
          },
          {
            question: "Can my family come with me?",
            answer: "Yes, your spouse and minor children can stay in Korea on accompanying F-1 status.",
          },
        ],
        relatedVisas: [
          { slug: "f-2-points", title: "F-2 Points-based Visa" },
          { slug: "e-7", title: "E-7 Special Activities Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-1-digital-nomad",
        title: "F-1 数字游民签证",
        subtitle: "适用于海外企业远程工作者的居留资格",
        overview:
          "F-1数字游民签证（工作度假签证）自2024年起实施，允许受雇于海外企业的外国人在韩国居留并进行远程工作。在韩国国内企业就业是不允许的，申请人必须具有来自海外企业的收入。",
        targetApplicants: [
          "在海外企业工作的远程办公人员",
          "与海外客户合作的自由职业者",
          "希望在韩国居留一段时间并远程工作的外国人",
          "追求数字游民生活方式的IT·创意领域专业人士",
        ],
        eligibility: [
          "受雇于海外企业或拥有海外收入来源的自由职业者（同一行业工作1年以上）",
          "收入证明达到前一年人均国民总收入（GNI）的2倍以上",
          "从事可远程办公的职业",
          "已加入健康保险或旅行保险",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "在职证明或自由职业合同",
          "收入证明（最近1年）",
          "银行存款证明",
          "健康保险或旅行保险证明",
          "住所证明（租赁合同或酒店预订）",
          "远程工作确认书（雇主出具）",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认收入要求及远程工作可行性" },
          { step: 2, title: "准备材料", description: "准备在职证明、收入证明、保险等" },
          { step: 3, title: "签证申请", description: "在驻外使领馆申请F-1数字游民签证" },
          { step: 4, title: "签证签发", description: "审核完成后签发签证（约2-3周）" },
        ],
        processingTime: "约2-3周",
        importantNotes: [
          "不允许在韩国国内企业就业。",
          "最长居留2年，可按1年为单位延长。",
          "随行家属（配偶·未成年子女）也可申请F-1随行居留。",
        ],
        faqs: [
          {
            question: "持数字游民签证可以在韩国就业吗？",
            answer: "不可以，数字游民签证仅允许为海外企业远程工作。如需在韩国企业就业，需要E-7等工作签证。",
          },
          {
            question: "收入要求具体是多少？",
            answer: "需要达到韩国银行公布的前一年人均国民总收入（GNI）的2倍以上。自由职业者需提供最近1年的收入证明。",
          },
          {
            question: "家人也可以一起来吗？",
            answer: "可以，配偶和未成年子女可申请随行F-1签证一同居留。",
          },
        ],
        relatedVisas: [
          { slug: "f-2-points", title: "F-2 积分制签证" },
          { slug: "e-7", title: "E-7 特定活动签证" },
          { slug: "f-5", title: "F-5 永住权" },
        ],
      },
      ja: {
        slug: "f-1-digital-nomad",
        title: "F-1 デジタルノマドビザ",
        subtitle: "海外企業所属のリモートワーカーのための在留資格",
        overview: "F-1デジタルノマドビザ（ワー��ーションビザ）は、海外企業に雇用されリモートで���務する外国人が韓国に滞在しながら業務を行えるよう2024年から施行されたビザです。韓国内での就労活動は不可で、海外企業からの所得が必要です。",
        targetApplicants: ["海外企業に在職中のリモートワーカー", "フリーランスとして海外ク���イアントと働く専門家", "韓国で一定期間滞在しリモー���ワークを希望する外国人", "デジタルノマドライフスタイルを追求するIT・クリエイティブ専門家"],
        eligibility: ["海外企��所属または海外収入源があるフリーランス（1年以上同業種勤務）", "前年度1人当たり国民総所得（GNI）の2倍以上の所得証明", "リモートワーク可能な職種に従事", "健康���険または旅行保険に加入"],
        requiredDocuments: ["ビザ申請書", "パスポートコピー", "証明写真（3.5x4.5cm）", "在職証明書またはフリーランス契約書", "所得証明書（直近1��間）", "銀行残高証明書", "健康保険または旅行保険の加入証明", "宿泊証明（賃貸契約書またはホテル予約）", "リモートワーク確認書（雇用主発行）"],
        process: [
          { step: 1, title: "資格確認", description: "所得要件およびリモートワーク可否の確認" },
          { step: 2, title: "書類準備", description: "在職証明書、所得証明、保険等の準備" },
          { step: 3, title: "ビザ申請", description: "在外公館でF-1デジタルノマドビザを申請" },
          { step: 4, title: "ビザ発給", description: "審査完了後ビザ発給（約2〜3週間）" },
        ],
        processingTime: "約2〜3週間",
        importantNotes: ["韓国内企業での就労活動は認められません。", "滞在期間は最大2年で、1年単位で延長可能です。", "同伴家族（配偶者・未成年の子女）もF-1同伴滞在が可能です。"],
        faqs: [
          { question: "デジタルノマドビザで韓国��就職できますか？", answer: "いいえ、デジタルノマドビザは海外企業のリモートワークのみ許可されます。韓国企業に就職するにはE-7等の就労ビザが必要です。" },
          { question: "所得要件は具体的にいくらですか？", answer: "韓国銀行公示の前年度1人当たりGNIの2倍以上の所得が必要です。フリーランスは直近1年間の収入を証明する必要があります。" },
          { question: "家族も一緒に来られますか？", answer: "はい、配偶者と未成年の子女は同伴F-1ビザで一緒に滞在できます。" },
        ],
        relatedVisas: [{ slug: "f-2-points", title: "F-2 ポイント制ビザ" }, { slug: "e-7", title: "E-7 特定活動ビザ" }, { slug: "f-5", title: "F-5 永住権" }],
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
      en: {
        slug: "f-1-visit",
        title: "F-1 Family Visit Visa",
        subtitle: "Visa for cohabitation with family members residing in Korea",
        overview:
          "The F-1 Family Visit Visa is for family members (parents, parents-in-law, etc.) of foreigners legally residing in Korea or Korean nationals who wish to stay for the purpose of cohabitation. Employment is restricted, and documents proving the family relationship are required.",
        targetApplicants: [
          "Parents or grandparents of foreigners residing in Korea",
          "Foreign parents or parents-in-law of Korean nationals",
          "Others seeking to stay for family cohabitation purposes",
          "Relatives entering Korea to care for minor children",
        ],
        eligibility: [
          "Proof of family relationship with a family member residing in Korea",
          "Sponsor (inviter) must hold a valid residence status",
          "Sponsor must demonstrate financial ability (income or assets)",
          "No criminal record or entry ban history",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Family relationship certificate (birth certificate, marriage certificate, etc.)",
          "Invitation letter",
          "Sponsor's alien registration card or ID copy",
          "Sponsor's employment and income certificates",
          "Accommodation proof (lease agreement)",
          "Guarantee letter",
        ],
        process: [
          { step: 1, title: "Document Preparation", description: "Translate, notarize, and apostille family relationship documents" },
          { step: 2, title: "Invitation Letter", description: "Family member in Korea prepares invitation and guarantee letters" },
          { step: 3, title: "Visa Application", description: "Apply for F-1 Family Visit visa at a Korean embassy or consulate" },
          { step: 4, title: "Visa Issuance", description: "Visa issued after review (approx. 2-4 weeks)" },
          { step: 5, title: "Alien Registration", description: "Register as a foreigner within 90 days of entry" },
        ],
        processingTime: "Approximately 2-4 weeks",
        importantNotes: [
          "Employment is generally not permitted on the F-1 Family Visit visa. A separate work permit (activity outside status) is required for employment.",
          "If the sponsor's residence status expires, the F-1 visa may also be affected.",
          "Stay can be extended in 1-year increments, linked to the sponsor's period of stay.",
        ],
        faqs: [
          {
            question: "Can I work with an F-1 Family Visit visa?",
            answer: "In principle, no. If you wish to work, you must obtain a separate permission for activities outside your status from the immigration office.",
          },
          {
            question: "Who can be the sponsor (inviter)?",
            answer: "A family member (child, spouse, etc.) legally residing in Korea serves as the sponsor. The sponsor's residence status and financial ability will be reviewed.",
          },
          {
            question: "How long can I stay on an F-1 visa?",
            answer: "Typically 1-2 years are granted, and extensions are possible within the scope of the sponsor's period of stay.",
          },
        ],
        relatedVisas: [
          { slug: "f-6", title: "F-6 Marriage Visa" },
          { slug: "f-1-digital-nomad", title: "F-1 Digital Nomad Visa" },
          { slug: "f-2-points", title: "F-2 Points-based Visa" },
        ],
      },
      zh: {
        slug: "f-1-visit",
        title: "F-1 探亲同居签证",
        subtitle: "与在韩居住的家人同居的签证",
        overview:
          "F-1探亲同居签证适用于在韩国合法居留的外国人或韩国国民的家庭成员（父母、配偶父母等）以同居为目的来韩居留。就业活动受限，需提供能证明家庭关系的材料。",
        targetApplicants: [
          "在韩居留外国人的父母·祖父母",
          "韩国国民的外国人父母·岳父母",
          "其他因家庭关系需要同居的人员",
          "为照顾未成年子女而入境的亲属",
        ],
        eligibility: [
          "与在韩居住的家人证明家庭关系",
          "邀请人须持有合法居留资格",
          "邀请人须证明经济能力（收入或资产）",
          "无犯罪记录及入境禁止历史",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "亲属关系证明（出生证明·结婚证明等）",
          "邀请函",
          "邀请人外国人登录证或身份证复印件",
          "邀请人在职证明·收入证明",
          "住所证明（租赁合同）",
          "身元保证书",
        ],
        process: [
          { step: 1, title: "准备材料", description: "家庭关系证明文件翻译·公证及海牙认证" },
          { step: 2, title: "起草邀请函", description: "在韩居住的家人准备邀请函和保证书" },
          { step: 3, title: "签证申请", description: "在驻外使领馆申请F-1探亲同居签证" },
          { step: 4, title: "签证签发", description: "审核完成后签发签证（约2-4周）" },
          { step: 5, title: "外国人登记", description: "入境后90天内完成外国人登记" },
        ],
        processingTime: "约2-4周",
        importantNotes: [
          "F-1探亲同居签证原则上不允许就业。如需就业，需另行获得居留资格外活动许可。",
          "邀请人的居留资格到期时，F-1签证也可能受到影响。",
          "可按1年为单位延长居留期限，与邀请人的居留期限挂钩。",
        ],
        faqs: [
          {
            question: "持F-1探亲同居签证可以工作吗？",
            answer: "原则上不可以。如需工作，须在出入境管理局另行获得居留资格外活动许可。",
          },
          {
            question: "邀请人必须是谁？",
            answer: "在韩国合法居留的家人（子女、配偶等）为邀请人。邀请人的居留资格和经济能力将接受审查。",
          },
          {
            question: "F-1签证居留期限是多久？",
            answer: "通常签发1-2年，可在邀请人居留期限范围内延长。",
          },
        ],
        relatedVisas: [
          { slug: "f-6", title: "F-6 结婚签证" },
          { slug: "f-1-digital-nomad", title: "F-1 数字游民签证" },
          { slug: "f-2-points", title: "F-2 积分制签证" },
        ],
      },
      ja: {
        slug: "f-1-visit",
        title: "F-1 訪問同居ビザ",
        subtitle: "韓国に滞在する家族と同居するためのビザ",
        overview: "F-1訪問同居ビザは、���国に合法的に滞在している外国人または��国国民の家族（両親、配偶者の両親等）が同居を目的として滞在するためのビザです。就労活動は制限され、家族関係を証明する書類が必要です。",
        targetApplicants: ["韓国滞在外国人の両親・祖父母", "韓国国民の外国人両親・義父��", "その他家族関係による同居目的の滞在者", "未成年の子女を養育するために入国する親族"],
        eligibility: ["韓国滞在家族との家族関係の証明", "招聘者が合法的な在留資格を保有", "��聘者の経済能力の証明（所得または資産）", "犯罪歴および入国禁止履歴がないこと"],
        requiredDocuments: ["ビザ申請書", "パスポートコピー", "証明写真（3.5x4.5cm）", "家族関係証明書（出生証明書・婚姻証明書等）", "招聘状", "招聘者の外国人登録証または身分証コピー", "招聘者の在職証明書・所得証明書", "宿泊証明（賃貸契約書）", "身元保証書"],
        process: [
          { step: 1, title: "書類準備", description: "家族関係証明書類の翻訳・公証およびアポス���ィーユ" },
          { step: 2, title: "招聘状作成", description: "韓国滞在の家族が招聘状���よび保証書を作成" },
          { step: 3, title: "ビザ申請", description: "在外公館でF-1訪問同居ビザを申請" },
          { step: 4, title: "ビザ発給", description: "審査完了後ビザ発給（約2〜4週間）" },
          { step: 5, title: "外国人登録", description: "入国後90日以内に外国人登録" },
        ],
        processingTime: "約2〜4週間",
        importantNotes: ["F-1訪問同居ビザでは原則として就労活��ができません。就労するには在留資格外活動許可が必要です。", "招聘者の在留資格が満了するとF-1ビザにも影響��出る場合があります。", "1年単位で滞在期間の延長が可能で、招聘者の滞在期間に連動します。"],
        faqs: [
          { question: "F-1訪問同居ビザで働けますか？", answer: "原則として不可です。就労を希望する場合は出入国管理事務所で在留資格外活動許可を別途取得する必要があります。" },
          { question: "招聘者��誰でなければなりませんか？", answer: "韓国に合法的に滞在している家族（子女、配偶者等）が招聘者となります。招聘者の在留資格と経済能力��審査されます。" },
          { question: "F-1ビザの滞在期間はどのくらいですか？", answer: "通常1〜2年が発給され、招聘者の滞在期間の範囲内で延長が可能です。" },
        ],
        relatedVisas: [{ slug: "f-6", title: "F-6 結婚ビザ" }, { slug: "f-1-digital-nomad", title: "F-1 デジタルノマドビザ" }, { slug: "f-2-points", title: "F-2 ポイント制ビザ" }],
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
      en: {
        slug: "f-2-points",
        title: "F-2 Points-based Visa",
        subtitle: "Residence visa based on comprehensive evaluation of education, income, age, and Korean proficiency",
        overview:
          "The F-2 Points-based Visa is a residence visa issued to foreigners who score 80 points or above based on criteria including education, income, age, Korean language proficiency (TOPIK), and completion of the Korea Immigration & Integration Program (KIIP). It is commonly used by holders of E-7 or D-8 visas as a pathway to long-term residence.",
        targetApplicants: [
          "Professionals holding E-7 Special Activities visas",
          "Business owners holding D-8 Corporate Investment visas",
          "Foreigners employed in Korea after obtaining a Korean degree",
          "Professional foreigners seeking long-term residence status change",
        ],
        eligibility: [
          "Total score of 80 points or above across all categories",
          "Currently holding a valid residence status",
          "No criminal record",
          "Income and tax payment requirements met",
        ],
        requiredDocuments: [
          "Visa application form (status change application)",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Points calculation sheet and supporting documents",
          "Education certificate (degree/diploma)",
          "Income certificate (withholding tax statement, etc.)",
          "TOPIK score report",
          "KIIP completion certificate (if applicable)",
          "Employment certificate",
          "Tax payment certificate",
        ],
        process: [
          { step: 1, title: "Self-Assessment", description: "Check your score across each points category" },
          { step: 2, title: "Document Preparation", description: "Gather supporting documents for education, income, Korean proficiency, KIIP, etc." },
          { step: 3, title: "Status Change Application", description: "Apply for F-2 points-based status change at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "F-2 visa issued after points verification (approx. 3-4 weeks)" },
        ],
        processingTime: "Approximately 3-4 weeks",
        importantNotes: [
          "Points are based on education (max 35), income (max 30), age (max 20), Korean proficiency (max 20), among other categories.",
          "After holding F-2 points-based status for 3+ years, you can apply for F-5-16 permanent residency.",
          "Points requirements must be maintained at the time of extension as well.",
        ],
        faqs: [
          {
            question: "Can I apply if my score is below 80 points?",
            answer: "No, the F-2 points-based visa requires a minimum of 80 points. You can improve your score by raising your TOPIK level or completing the KIIP program, then reapply.",
          },
          {
            question: "Can I transition from F-2 points-based to F-5 permanent residency?",
            answer: "Yes, after holding the F-2 points-based visa for 3+ years and meeting certain requirements, you can apply for F-5-16 points-based permanent residency.",
          },
          {
            question: "Can I apply without a TOPIK score?",
            answer: "Yes, if you accumulate enough points in other categories. However, you will score 0 in the Korean proficiency category, so you need strong results in other areas.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-16", title: "F-5-16 Points-based Permanent Residency" },
          { slug: "e-7", title: "E-7 Special Activities Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-2-points",
        title: "F-2 积分制签证",
        subtitle: "综合评估学历·收入·年龄·韩语能力等的居住签证",
        overview:
          "F-2积分制签证是将学历、收入、年龄、韩语能力（TOPIK）、社会融合项目完成情况等进行评分，达到80分以上的外国人可获得的居住签证。是持有E-7、D-8等工作·投资签证的外国人为长期居留而转换的常见途径。",
        targetApplicants: [
          "持有E-7特定活动签证的专业人才",
          "持有D-8企业投资签证的企业家",
          "在韩国取得学位后就业的外国人",
          "希望转换为长期居留的专业外国人",
        ],
        eligibility: [
          "评分项目总分达到80分以上",
          "目前持有合法居留资格",
          "无犯罪记录",
          "满足收入·纳税要求",
        ],
        requiredDocuments: [
          "签证申请表（居留资格变更）",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "积分评估表及证明材料",
          "学历证明（学位证·毕业证）",
          "收入证明（工资扣缴凭证等）",
          "韩国语能力考试（TOPIK）成绩单",
          "社会融合项目结业证（如适用）",
          "在职证明",
          "纳税证明",
        ],
        process: [
          { step: 1, title: "自我评估", description: "逐项确认积分评估分数" },
          { step: 2, title: "准备证明材料", description: "收集学历、收入、韩语、社会融合等证明材料" },
          { step: 3, title: "申请居留资格变更", description: "在出入境管理局申请F-2积分制变更" },
          { step: 4, title: "审核及签发", description: "积分确认后签发F-2签证（约3-4周）" },
        ],
        processingTime: "约3-4周",
        importantNotes: [
          "积分标准由学历（最高35分）、收入（最高30分）、年龄（最高20分）、韩语（最高20分）等构成。",
          "取得F-2积分制签证后居留3年以上，可申请F-5-16永住权。",
          "延长居留期限时也必须维持积分要求。",
        ],
        faqs: [
          {
            question: "积分不足80分就不能申请吗？",
            answer: "低于80分无法获得F-2积分制签证。可通过提高TOPIK成绩、完成社会融合项目等方式提高分数后再申请。",
          },
          {
            question: "F-2积分制可以转换为F-5永住权吗？",
            answer: "可以，取得F-2积分制签证后居留3年以上并满足相关要求，可申请F-5-16积分制永住权。",
          },
          {
            question: "没有TOPIK成绩也可以申请吗？",
            answer: "可以，只要在其他项目上获得足够的分数即可。但韩语项目将为0分，需要在其他方面弥补。",
          },
        ],
        relatedVisas: [
          { slug: "f-5-16", title: "F-5-16 积分制永住者" },
          { slug: "e-7", title: "E-7 特定活动签证" },
          { slug: "f-5", title: "F-5 永住权" },
        ],
      },
      ja: {
        slug: "f-2-points",
        title: "F-2 ポイント制ビザ",
        subtitle: "学歴・所得・年齢・韓国語能力等を総合評価する居住ビザ",
        overview: "F-2ポイント制ビザは、学歴、所得、年齢、韓国語能力（TOPIK）、社会統合プログラム修了等をポイント化し、80点以上の外国人に発給される居住ビザです。E-7、D-8等の就労・投資ビザ所持者が長期滞在のために切り替える経路として多く活用されています。",
        targetApplicants: ["E-7特定活動ビザ所持の専門人材", "D-8企業投資ビザ所持のビジネスパーソン", "韓国内で学位取得後に就職中の外国人", "長期滞在への切り替えを希望する専門職外国人"],
        eligibility: ["ポイント項目の合計80点以上を達成", "現在合法的な在留資格を保有", "犯罪歴なし", "所得・納税実績の充足"],
        requiredDocuments: ["ビザ申請書（在留資格変更）", "パスポートコピー", "証明写真（3.5x4.5cm）", "ポイント算定表および証憑書類", "学歴証明書（学位証・卒業証明書）", "所得証明書（勤労所得源泉徴収領収書等）", "韓国語能力試験（TOPIK）成績表", "社会統合プログラム修了証（該当時）", "在職証明書", "納税証明書"],
        process: [{ step: 1, title: "ポイント自己診断", description: "ポイント制評価項目別に自分のスコアを確認" }, { step: 2, title: "証憑書類準備", description: "学歴、所得、韓国語、社会統合等の証憑を確保" }, { step: 3, title: "在留資格変更申請", description: "出入国管理事務所にF-2ポイント制変更を申請" }, { step: 4, title: "審査および発給", description: "ポイント確認後F-2ビザ発給（約3〜4週間）" }],
        processingTime: "約3〜4週間",
        importantNotes: ["ポイント基準は学歴（最大35点）、所得（最大30点）、年齢（最大20点）、韓国語（最大20点）等で構成されます。", "F-2ポイント制取得後3年以上滞在でF-5-16永住権申請が可能です。", "滞在期間延長時にもポイント要件を維持する必要があります。"],
        faqs: [{ question: "80点未満だと申請できませんか？", answer: "80点未満ではF-2ポイント制ビザを取得できません。TOPIKスコアの向上、社会統合プログラムの修了等でポイントを上げてから再申請できます。" }, { question: "F-2ポイント制からF-5永住権への切り替えは可能ですか？", answer: "はい、F-2ポイント制ビザ取得後3年以上滞在し一定の要件を満たせばF-5-16ポイント制永住権を申請できます。" }, { question: "TOPIKの成績がなくても申請できますか？", answer: "TOPIKがなくても他の項目で十分なポイントを確保すれば可能です。ただし韓国語項目が0点となるため他分野での補完が必要です。" }],
        relatedVisas: [{ slug: "f-5-16", title: "F-5-16 ポイント制永住者" }, { slug: "e-7", title: "E-7 特定活動ビザ" }, { slug: "f-5", title: "F-5 永住権" }],
      },
    },
    "f-2-7": {
      ko: {
        slug: "f-2-7",
        title: "F-2-7 점수제 거주비자",
        subtitle: "학력·소득·나이·한국어 능력 등을 종합 평가하여 80점 이상 외국인에게 발급되는 거주비자",
        overview:
          "F-2-7 점수제 거주비자는 출입국관리법 시행령 별표1 제27호에 따른 거주(F-2) 체류자격 중 점수제를 적용받는 세부유형입니다. 학력, 소득, 나이, 한국어 능력(TOPIK), 사회통합프로그램 이수 등의 항목을 점수화하여 총 80점 이상인 전문외국인력에게 발급됩니다. E-7, D-8 등 취업·투자 비자 소지자가 장기체류를 위해 전환하는 대표적인 경로입니다.",
        targetApplicants: [
          "E-7 특정활동비자 소지 전문인력",
          "D-8 기업투자비자 소지 사업가",
          "한국 내 학위 취득 후 취업 중인 외국인",
          "장기 체류 전환을 원하는 전문직 외국인",
          "기술·경영 분야 우수인력",
        ],
        eligibility: [
          "점수 항목 총점 80점 이상 달성",
          "현재 합법적 체류자격 보유 (E-7, D-8 등)",
          "범죄경력 없음",
          "소득·납세 실적 충족",
          "기본 신원조회 통과",
        ],
        requiredDocuments: [
          "비자발급신청서 (체류자격변경허가신청서)",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "점수산정표 및 각 항목별 증빙서류",
          "학력증명서 (학위증·졸업증명서, 아포스티유/영사확인)",
          "소득증명서 (근로소득원천징수영수증, 소득금액증명원)",
          "한국어능력시험(TOPIK) 성적표",
          "사회통합프로그램(KIIP) 이수증 (해당 시)",
          "재직증명서 및 고용계약서",
          "납세증명서 (국세·지방세)",
          "외국인등록증 사본",
          "수수료 13만원",
        ],
        process: [
          { step: 1, title: "점수 자가진단", description: "점수제 평가 항목별 자기 점수를 확인하고 80점 이상 가능 여부를 판단합니다." },
          { step: 2, title: "증빙서류 준비", description: "학력, 소득, 한국어(TOPIK), 사회통합프로그램 등 각 항목의 증빙서류를 확보합니다." },
          { step: 3, title: "체류자격변경 신청", description: "관할 출입국관리사무소에 F-2-7 체류자격변경허가를 신청합니다." },
          { step: 4, title: "심사 및 발급", description: "점수 확인 및 신원조회 후 F-2-7 비자 발급 (약 3-4주 소요)." },
        ],
        processingTime: "약 3-4주",
        importantNotes: [
          "점수 기준은 학력(최대 35점), 소득(최대 30점), 나이(최대 20점), 한국어(최대 20점) 등으로 구성됩니다.",
          "F-2-7 취득 후 3년 이상 체류하면 F-5-16 점수제 영주권 신청이 가능합니다.",
          "체류기간 연장 시에도 점수 요건을 유지해야 하며, 기준 미달 시 연장이 거부될 수 있습니다.",
          "TOPIK 4급 이상 취득 시 한국어 항목에서 높은 점수를 받을 수 있습니다.",
          "사회통합프로그램(KIIP) 5단계 이수 시 가점이 부여됩니다.",
        ],
        faqs: [
          {
            question: "F-2-7과 F-2 점수제비자는 같은 비자인가요?",
            answer: "네, F-2-7은 거주(F-2) 비자의 세부유형 중 점수제를 적용받는 유형의 정식 코드입니다. 일반적으로 'F-2 점수제비자'라고 부르는 것이 F-2-7입니다.",
          },
          {
            question: "점수가 80점 미만이면 신청할 수 없나요?",
            answer: "80점 미만 시에는 F-2-7 비자를 받을 수 없습니다. TOPIK 점수 향상, 사회통합프로그램 이수, 소득 증가 등으로 점수를 높인 후 재신청할 수 있습니다.",
          },
          {
            question: "F-2-7에서 F-5 영주권으로 전환이 가능한가요?",
            answer: "네, F-2-7 비자 취득 후 3년 이상 체류하고 일정 요건(소득, 품행, 한국어 등)을 갖추면 F-5-16 점수제 영주권을 신청할 수 있습니다.",
          },
          {
            question: "TOPIK 성적이 없어도 신청 가능한가요?",
            answer: "TOPIK이 없어도 다른 항목(학력, 소득, 나이 등)에서 충분한 점수를 확보하면 신청 가능합니다. 다만 한국어 항목의 점수가 0점이 되므로 다른 분야에서 보완이 필요합니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-2-points", title: "F-2 점수제비자" },
          { slug: "f-5-16", title: "F-5-16 점수제 영주자" },
          { slug: "e-7", title: "E-7 특정활동비자" },
          { slug: "f-5", title: "F-5 영주권" },
        ],
      },
      en: {
        slug: "f-2-7",
        title: "F-2-7 Points-based Residence Visa",
        subtitle: "Residence visa issued to foreigners scoring 80+ points across education, income, age, and Korean proficiency",
        overview:
          "The F-2-7 Points-based Residence Visa is a sub-type of the F-2 residence status under Immigration Act enforcement regulations. It evaluates applicants on education, income, age, Korean proficiency (TOPIK), KIIP completion, and other factors, issuing the visa to professional foreigners who score 80 points or above. It is the most common pathway for E-7 and D-8 visa holders seeking long-term residence.",
        targetApplicants: [
          "Professionals holding E-7 Special Activities visas",
          "Business owners holding D-8 Corporate Investment visas",
          "Foreigners employed in Korea after obtaining a Korean degree",
          "Professional foreigners seeking long-term residence status change",
          "Talented professionals in technology and management fields",
        ],
        eligibility: [
          "Total score of 80 points or above across all categories",
          "Currently holding a valid residence status (E-7, D-8, etc.)",
          "No criminal record",
          "Income and tax payment requirements met",
          "Pass basic background check",
        ],
        requiredDocuments: [
          "Visa application form (status change permit application)",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Points calculation sheet and supporting documents for each category",
          "Education certificate (degree/diploma, apostille/consular authentication)",
          "Income certificate (withholding tax statement, income verification)",
          "TOPIK score report",
          "KIIP completion certificate (if applicable)",
          "Employment certificate and employment contract",
          "Tax payment certificate (national and local taxes)",
          "Alien registration card copy",
          "Application fee: KRW 130,000",
        ],
        process: [
          { step: 1, title: "Self-Assessment", description: "Check your score across each category and determine if 80+ points is achievable." },
          { step: 2, title: "Document Preparation", description: "Gather supporting documents for education, income, TOPIK, KIIP completion, etc." },
          { step: 3, title: "Status Change Application", description: "Apply for F-2-7 status change at the jurisdictional immigration office." },
          { step: 4, title: "Review & Issuance", description: "F-2-7 visa issued after points verification and background check (approx. 3-4 weeks)." },
        ],
        processingTime: "Approximately 3-4 weeks",
        importantNotes: [
          "Points are based on education (max 35), income (max 30), age (max 20), Korean proficiency (max 20), among other categories.",
          "After holding F-2-7 for 3+ years, you can apply for F-5-16 points-based permanent residency.",
          "Points requirements must be maintained for extensions; failure to meet the threshold may result in denial.",
          "TOPIK Level 4 or above earns high points in the Korean proficiency category.",
          "Completing KIIP Level 5 earns bonus points.",
        ],
        faqs: [
          {
            question: "Are F-2-7 and F-2 Points-based Visa the same?",
            answer: "Yes, F-2-7 is the official sub-type code for the points-based category under the F-2 residence visa. What is commonly referred to as the 'F-2 Points-based Visa' is F-2-7.",
          },
          {
            question: "Can I apply if my score is below 80 points?",
            answer: "No, the F-2-7 visa requires a minimum of 80 points. You can improve your score through higher TOPIK levels, KIIP completion, or increased income, then reapply.",
          },
          {
            question: "Can I transition from F-2-7 to F-5 permanent residency?",
            answer: "Yes, after holding the F-2-7 visa for 3+ years and meeting requirements (income, conduct, Korean proficiency, etc.), you can apply for F-5-16 points-based permanent residency.",
          },
          {
            question: "Can I apply without a TOPIK score?",
            answer: "Yes, if you accumulate enough points in other categories (education, income, age, etc.). However, you will score 0 in Korean proficiency, so strong results elsewhere are needed.",
          },
        ],
        relatedVisas: [
          { slug: "f-2-points", title: "F-2 Points-based Visa" },
          { slug: "f-5-16", title: "F-5-16 Points-based Permanent Residency" },
          { slug: "e-7", title: "E-7 Special Activities Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-2-7",
        title: "F-2-7 积分制居住签证",
        subtitle: "综合评估学历·收入·年龄·韩语能力等，面向80分以上外国人签发的居住签证",
        overview:
          "F-2-7积分制居住签证是出入境管理法施行令别表1第27号规定的居住（F-2）居留资格中适用积分制的细分类型。将学历、收入、年龄、韩语能力（TOPIK）、社会融合项目完成情况等各项评分，总分达到80分以上的专业外国人才可获签发。是E-7、D-8等工作·投资签证持有者转为长期居留的典型途径。",
        targetApplicants: [
          "持有E-7特定活动签证的专业人才",
          "持有D-8企业投资签证的企业家",
          "在韩国取得学位后就业的外国人",
          "希望转换为长期居留的专业外国人",
          "技术·经营领域的优秀人才",
        ],
        eligibility: [
          "评分项目总分达到80分以上",
          "目前持有合法居留资格（E-7、D-8等）",
          "无犯罪记录",
          "满足收入·纳税要求",
          "通过基本身份审查",
        ],
        requiredDocuments: [
          "签证申请表（居留资格变更许可申请书）",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "积分评估表及各项证明材料",
          "学历证明（学位证·毕业证，海牙认证/领事认证）",
          "收入证明（工资扣缴凭证、收入金额证明）",
          "韩国语能力考试（TOPIK）成绩单",
          "社会融合项目（KIIP）结业证（如适用）",
          "在职证明及劳动合同",
          "纳税证明（国税·地方税）",
          "外国人登录证复印件",
          "手续费13万韩元",
        ],
        process: [
          { step: 1, title: "自我评估", description: "逐项确认积分评估分数，判断是否能达到80分以上。" },
          { step: 2, title: "准备证明材料", description: "收集学历、收入、韩语（TOPIK）、社会融合项目等各项证明材料。" },
          { step: 3, title: "申请居留资格变更", description: "向管辖出入境管理局申请F-2-7居留资格变更许可。" },
          { step: 4, title: "审核及签发", description: "积分确认及身份审查后签发F-2-7签证（约3-4周）。" },
        ],
        processingTime: "约3-4周",
        importantNotes: [
          "积分标准由学历（最高35分）、收入（最高30分）、年龄（最高20分）、韩语（最高20分）等构成。",
          "取得F-2-7后居留3年以上，可申请F-5-16积分制永住权。",
          "延长居留期限时也须维持积分要求，不达标可能被拒绝延期。",
          "取得TOPIK 4级以上可在韩语项目中获得较高分数。",
          "完成社会融合项目（KIIP）第5阶段可获加分。",
        ],
        faqs: [
          {
            question: "F-2-7和F-2积分制签证是同一种签证吗？",
            answer: "是的，F-2-7是居住（F-2）签证中适用积分制的细分类型的正式代码。通常所说的「F-2积分制签证」就是F-2-7。",
          },
          {
            question: "积分不足80分就不能申请吗？",
            answer: "低于80分无法获得F-2-7签证。可通过提高TOPIK成绩、完成社会融合项目、增加收入等方式提高分数后再申请。",
          },
          {
            question: "F-2-7可以转换为F-5永住权吗？",
            answer: "可以，取得F-2-7签证后居留3年以上并满足相关要求（收入、品行、韩语等），可申请F-5-16积分制永住权。",
          },
          {
            question: "没有TOPIK成绩也可以申请吗？",
            answer: "可以，只要在其他项目（学历、收入、年龄等）上获得足够的分数即可。但韩语项目将为0分，需要在其他方面弥补。",
          },
        ],
        relatedVisas: [
          { slug: "f-2-points", title: "F-2 积分制签证" },
          { slug: "f-5-16", title: "F-5-16 积分制永住者" },
          { slug: "e-7", title: "E-7 特定活动签证" },
          { slug: "f-5", title: "F-5 永住权" },
        ],
      },
      ja: {
        slug: "f-2-7",
        title: "F-2-7 ポイント制居住ビザ",
        subtitle: "学歴・所得・年齢・韓国語能力等を総合評価し80点以上の外国人に発給される居住ビザ",
        overview: "F-2-7ポイント制居住ビザは、出入国管理法施行令別表1第27号に基づく居住（F-2）在留資格のうちポイント制が適用される細分類型です。学歴、所得、年齢、韓国語能力（TOPIK）、社会統合プログラム修了等の項目をポイント化し、合計80点以上の専門外国人材に発給されます。E-7、D-8等の就労・投資ビザ所持者が長期滞在に切り替える代表的な経路です。",
        targetApplicants: ["E-7特定活動ビザ所持の専門人材", "D-8企業投資ビザ所持のビジネスパーソン", "韓国内で学位取得後に就職中の外国人", "長期滞在への切り替えを希望する専門職外国人", "技術・経営分野の優秀人材"],
        eligibility: ["ポイント項目の合計80点以上を達成", "現在合法的な在留資格を保有（E-7、D-8等）", "犯罪歴なし", "所得・納税実績の充足", "基本身元調査の通過"],
        requiredDocuments: ["ビザ申請書（在留資格変更許可申請書）", "パスポートコピー", "証明写真（3.5x4.5cm）", "ポイント算定表および各項目の証憑書類", "学歴証明書（学位証・卒業証明書、アポスティーユ/領事認証）", "所得証明書（勤労所得源泉徴収領収書、所得金額証明書）", "韓国語能力試験（TOPIK）成績表", "社会統合プログラム（KIIP）修了証（該当時）", "在職証明書および雇用契約書", "納税証明書（国税・地方税）", "外国人登録証コピー", "手数料13万ウォン"],
        process: [{ step: 1, title: "ポイント自己診断", description: "ポイント制評価項目別に自分のスコアを確認し80点以上の可否を判断" }, { step: 2, title: "証憑書類準備", description: "学歴、所得、韓国語（TOPIK）、社会統合プログラム等の各項目の証憑書類を確保" }, { step: 3, title: "在留資格変更申請", description: "管轄出入国管理事務所にF-2-7在留資格変更許可を申請" }, { step: 4, title: "審査および発給", description: "ポイント確認および身元調査後F-2-7ビザ発給（約3〜4週間）" }],
        processingTime: "約3〜4週間",
        importantNotes: ["ポイント基準は学歴（最大35点）、所得（最大30点）、年齢（最大20点）、韓国語（最大20点）等で構成されます。", "F-2-7取得後3年以上滞在でF-5-16ポイント制永住権申請が可能です。", "滞在期間延長時にもポイント要件を維持する必要があり、基準未達の場合延長が拒否されることがあります。", "TOPIK4級以上の取得で韓国語項目において高い点数を得られます。", "社会統合プログラム（KIIP）第5段階修了で加点が付与されます。"],
        faqs: [{ question: "F-2-7とF-2ポイント制ビザは同じビザですか？", answer: "はい、F-2-7は居住（F-2）ビザの細分類型のうちポイント制が適用される類型の正式コードです。一般に「F-2ポイント制ビザ」と呼ばれるものがF-2-7です。" }, { question: "80点未満だと申請できませんか？", answer: "80点未満ではF-2-7ビザを取得できません。TOPIKスコアの向上、社会統合プログラムの修了、所得増加等でポイントを上げてから再申請できます。" }, { question: "F-2-7からF-5永住権への切り替えは可能ですか？", answer: "はい、F-2-7ビザ取得後3年以上滞在し一定の要件（所得、品行、韓国語等）を満たせばF-5-16ポイント制永住権を申請できます。" }, { question: "TOPIKの成績がなくても申請できますか？", answer: "TOPIKがなくても他の項目（学歴、所得、年齢等）で十分なポイントを確保すれば申請可能です。ただし韓国語項目が0点となるため他分野での補完が必要です。" }],
        relatedVisas: [{ slug: "f-2-points", title: "F-2 ポイント制ビザ" }, { slug: "f-5-16", title: "F-5-16 ポイント制永住者" }, { slug: "e-7", title: "E-7 特定活動ビザ" }, { slug: "f-5", title: "F-5 永住権" }],
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
      en: {
        slug: "f-2-public-interest",
        title: "F-2 Public Interest Investment Visa",
        subtitle: "Residence visa for foreigners investing in government-designated public interest projects",
        overview:
          "The F-2 Public Interest Investment Visa is issued to foreigners who invest KRW 500 million (approx. USD 375,000) or more in public interest projects (government bonds, public funds, etc.) designated by the Minister of Justice. After maintaining the investment for 5 years or more, holders can transition to F-5-21 permanent residency.",
        targetApplicants: [
          "Foreigners looking to invest in Korean public interest projects (government bonds, public funds, etc.)",
          "Investors seeking long-term residence through a residence visa",
          "Investors aiming for permanent residency (F-5-21) in the future",
          "High-net-worth foreigners seeking stable investment-based residence in Korea",
        ],
        eligibility: [
          "Investment of KRW 500 million (approx. USD 375,000) or more in a government-designated public interest project",
          "Proof of legitimate source of investment funds",
          "No criminal record or entry ban history",
          "Obligation to maintain the investment",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Public interest project investment confirmation",
          "Proof of fund source (overseas remittance confirmation, etc.)",
          "Bank balance certificate",
          "Criminal background check",
          "Medical examination certificate",
        ],
        process: [
          { step: 1, title: "Identify Investment Target", description: "Confirm government-designated public interest projects (government bonds, funds, etc.)" },
          { step: 2, title: "Execute Investment", description: "Invest KRW 500 million or more and obtain investment confirmation" },
          { step: 3, title: "Visa Application", description: "Apply for F-2 Public Interest Investment at the immigration office" },
          { step: 4, title: "Visa Issuance", description: "F-2 visa issued after review (approx. 3-4 weeks)" },
        ],
        processingTime: "Approximately 3-4 weeks",
        importantNotes: [
          "The investment must be maintained for 5 years; early withdrawal may result in revocation of residence status.",
          "After 5 years of maintaining the investment, transition to F-5-21 permanent residency is possible.",
          "Accompanying family members (spouse and minor children) can stay on F-1 or F-3 visa status.",
        ],
        faqs: [
          {
            question: "Which public interest projects can I invest in?",
            answer: "Projects designated by the Minister of Justice (government bond purchases, public fund contributions, etc.) are eligible. Specific investment targets should be confirmed through Ministry of Justice announcements.",
          },
          {
            question: "Do I need to invest KRW 500 million all at once?",
            answer: "Yes, the full investment of KRW 500 million or more must be completed at the time of application. Installment investments are generally not accepted.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-21", title: "F-5-21 Public Interest Investor Permanent Residency" },
          { slug: "f-2-real-estate", title: "F-2 Real Estate Investment Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-2-public-interest",
        title: "F-2 公益事业投资签证",
        subtitle: "面向投资法务部指定公益事业的外国人的居住签证",
        overview:
          "F-2公益事业投资签证适用于向法务部长官指定的公益事业（国债、基金等）投资5亿韩元（约37.5万美元）以上的外国人。投资维持5年以上后，可转换为F-5-21永住权。",
        targetApplicants: [
          "希望投资韩国公益事业（国债·基金等）的外国人",
          "希望通过居住签证长期居留的投资者",
          "以取得永住权（F-5-21）为目标的投资者",
          "希望通过稳定投资在韩居留的高净值外国人",
        ],
        eligibility: [
          "向法务部指定的公益事业投资5亿韩元（约37.5万美元）以上",
          "证明投资资金的合法来源",
          "无犯罪记录及入境禁止历史",
          "投资维持义务",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "公益事业投资确认书",
          "资金来源证明（海外汇款确认书等）",
          "银行存款证明",
          "无犯罪证明",
          "健康检查证明",
        ],
        process: [
          { step: 1, title: "确认投资对象", description: "确认法务部指定的公益事业（国债·基金等）" },
          { step: 2, title: "执行投资", description: "投资5亿韩元以上并取得投资确认书" },
          { step: 3, title: "签证申请", description: "向出入境管理局申请F-2公益事业投资签证" },
          { step: 4, title: "签证签发", description: "审核完成后签发F-2签证（约3-4周）" },
        ],
        processingTime: "约3-4周",
        importantNotes: [
          "投资须维持5年，中途取回可能导致居留资格被取消。",
          "投资维持5年后可转换为F-5-21永住权。",
          "随行家属（配偶·未成年子女）可持F-1或F-3签证居留。",
        ],
        faqs: [
          {
            question: "可以投资哪些公益事业？",
            answer: "法务部长官公告的公益事业（购买国债、出资公共基金等）为对象。具体投资对象需查阅法务部公告。",
          },
          {
            question: "必须一次性投资5亿韩元吗？",
            answer: "是的，申请时需完成5亿韩元以上的投资。原则上不接受分期投资。",
          },
        ],
        relatedVisas: [
          { slug: "f-5-21", title: "F-5-21 公益事业投资者永住权" },
          { slug: "f-2-real-estate", title: "F-2 不动产投资签证" },
          { slug: "f-5", title: "F-5 永住权" },
        ],
      },
      ja: {
        slug: "f-2-public-interest",
        title: "F-2 公益事業投資ビザ",
        subtitle: "法務部指定の公益事業に投資した外国人のための居住ビザ",
        overview: "F-2公益事業投資ビザは、法務部長官が指定した公益事業（国債、基金等）に5億ウォン以上を投資した外国人に発給される居住ビザです。投資維持期間が5年以上になるとF-5-21永住権に切り替えることができます。",
        targetApplicants: ["韓国の公益事業（国債・基金等）に投資する外国人", "居住ビザを通じて長期滞在を希望する投資家", "将来の永住権（F-5-21）取得を目標とする投資家", "安定的な投資を通じて韓国滞在を希望する高資産外国人"],
        eligibility: ["法務部指定の公益事業に5億ウォン以上投資", "投資金の合法的な出所の証明", "犯罪歴および入国禁止履歴がないこと", "投資状態の維持義務"],
        requiredDocuments: ["ビザ申請書", "パスポートコピー", "証明写真（3.5x4.5cm）", "公益事業投資確認書", "投資金出所証憑（海外送金確認書等）", "残高証明書", "犯罪経歴証明書", "健康診断書"],
        process: [{ step: 1, title: "投資対象確認", description: "法務部指定の公益事業（国債・基金等）を確認" }, { step: 2, title: "投資実行", description: "5億ウォン以上を投資し投資確認書を取得" }, { step: 3, title: "ビザ申請", description: "出入国管理事務所にF-2公益事業投資を申請" }, { step: 4, title: "ビザ発給", description: "審査完了後F-2ビザ発給（約3〜4週間）" }],
        processingTime: "約3〜4週間",
        importantNotes: ["投資金は5年間維持する必要があり、中途回収すると在留資格が取り消される場合があります。", "5年間の投資維持後、F-5-21永住権への切り替えが可能です。", "同伴家族（配偶者・未成年の子女）もF-1またはF-3ビザで滞在できます。"],
        faqs: [{ question: "どのような公益事業に投資できますか？", answer: "法務部長官が告示した公益事業（国債購入、公共基金出資等）が対象です。具体的な投資対象は法務部の告示を確認する必要があります。" }, { question: "5億ウォンを一度に投資しなければなりませんか？", answer: "はい、申請時点で5億ウォン以上の投資が完了している必要があります。分割投資は原則として認められません。" }],
        relatedVisas: [{ slug: "f-5-21", title: "F-5-21 公益事業投資者永住権" }, { slug: "f-2-real-estate", title: "F-2 不動産投資ビザ" }, { slug: "f-5", title: "F-5 永住権" }],
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
      en: {
        slug: "f-2-real-estate",
        title: "F-2 Real Estate Investment Visa",
        subtitle: "Residence visa through property investment in government-designated areas",
        overview:
          "The F-2 Real Estate Investment Visa is issued to foreigners who invest a certain amount or more in real estate (condos, resorts, etc.) in areas designated by the Ministry of Justice (Jeju Island, Gangwon Province, etc.). After maintaining the investment, holders can transition to F-5-17 permanent residency.",
        targetApplicants: [
          "Foreigners looking to purchase real estate in designated areas in Korea",
          "Foreigners investing in condos or resorts in Jeju or Gangwon Province",
          "Foreigners aiming for residence and permanent residency through real estate investment",
          "Foreigners wishing to own property in Korea for long-term stay",
        ],
        eligibility: [
          "Real estate investment in a government-designated area (typically KRW 500 million / approx. USD 375,000 or more)",
          "Investment property meets Ministry of Justice requirements",
          "Proof of legitimate source of investment funds",
          "No criminal record or entry ban history",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Property purchase contract or property registry",
          "Investment fund remittance proof",
          "Property appraisal report",
          "Bank balance certificate",
          "Criminal background check",
        ],
        process: [
          { step: 1, title: "Identify Investment Target", description: "Confirm designated areas and requirements from the Ministry of Justice" },
          { step: 2, title: "Property Purchase", description: "Sign contract and complete payment for property in a designated area" },
          { step: 3, title: "Registration Complete", description: "Complete property ownership transfer registration" },
          { step: 4, title: "Visa Application", description: "Apply for F-2 Real Estate Investment at the immigration office" },
          { step: 5, title: "Visa Issuance", description: "F-2 visa issued after review" },
        ],
        processingTime: "Approximately 3-4 weeks",
        importantNotes: [
          "Properties outside designated areas do not qualify for the investment immigration program.",
          "Selling the investment property may result in revocation of residence status.",
          "After maintaining the investment for 5+ years, you can apply for F-5-17 permanent residency.",
        ],
        faqs: [
          {
            question: "Where do I need to invest?",
            answer: "Recreational properties (condos, resorts, etc.) in designated areas such as Jeju Island and Gangwon Province are eligible. Regular residential properties in Seoul and other areas do not qualify.",
          },
          {
            question: "What is the minimum investment amount?",
            answer: "Typically KRW 500 million (approx. USD 375,000) or more, though it may vary by region and property type. Exact criteria should be confirmed through Ministry of Justice announcements.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-17", title: "F-5-17 Real Estate Investor Permanent Residency" },
          { slug: "f-2-public-interest", title: "F-2 Public Interest Investment Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-2-real-estate",
        title: "F-2 不动产投资签证",
        subtitle: "通过在法务部指定地区投资不动产获得的居住签证",
        overview:
          "F-2不动产投资签证适用于在法务部指定的特定地区（济州岛、江原道等）投资一定金额以上的不动产（公寓、度假村等）的外国人。投资维持后可转换为F-5-17永住权。",
        targetApplicants: [
          "希望在韩国指定地区购买不动产的外国人",
          "希望在济州岛·江原道等地投资公寓·度假村的外国人",
          "通过不动产投资获得居留权和永住权的外国人",
          "希望在韩国拥有不动产并长期居留的外国人",
        ],
        eligibility: [
          "在法务部指定地区投资不动产（通常5亿韩元/约37.5万美元以上）",
          "投资不动产符合法务部公告要求",
          "证明投资资金的合法来源",
          "无犯罪记录及入境禁止历史",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "不动产买卖合同或不动产登记簿",
          "投资汇款证明",
          "不动产评估报告",
          "银行存款证明",
          "无犯罪证明",
        ],
        process: [
          { step: 1, title: "确认投资对象", description: "确认法务部指定地区及要求" },
          { step: 2, title: "购置不动产", description: "签订指定地区不动产合同并支付尾款" },
          { step: 3, title: "完成登记", description: "完成不动产所有权转移登记" },
          { step: 4, title: "签证申请", description: "向出入境管理局申请F-2不动产投资签证" },
          { step: 5, title: "签证签发", description: "审核完成后签发F-2签证" },
        ],
        processingTime: "约3-4周",
        importantNotes: [
          "指定地区以外的不动产不属于投资移民对象。",
          "出售投资不动产可能导致居留资格被取消。",
          "投资维持5年以上可申请F-5-17永住权。",
        ],
        faqs: [
          {
            question: "在哪里投资？",
            answer: "济州岛、江原道等法务部指定特定地区的休闲用途不动产（公寓、度假村等）为对象。首尔等一般住宅用不动产不在范围内。",
          },
          {
            question: "最低投资金额是多少？",
            answer: "通常为5亿韩元（约37.5万美元）以上，具体因地区和不动产类型而异。准确标准需查阅法务部公告。",
          },
        ],
        relatedVisas: [
          { slug: "f-5-17", title: "F-5-17 不动产投资者永住权" },
          { slug: "f-2-public-interest", title: "F-2 公益事业投资签证" },
          { slug: "f-5", title: "F-5 永住权" },
        ],
      },
      ja: {
        slug: "f-2-real-estate",
        title: "F-2 不動産投資ビザ",
        subtitle: "法務部指定地域の不動産投資による居住ビザ",
        overview: "F-2不動産投資ビザは、法務部が指定した特定地域（済州島、江原道等）に一定金額以上の不動産（コンドミニアム、リゾート等）を投資した外国人に発給される居住ビザです。投資維持後にF-5-17永住権に切り替えが可能です。",
        targetApplicants: ["韓国の指定地域に不動産を購入する外国人", "済州島・江原道等にコンドミニアム・リゾートを投資する外国人", "不動産投資を通じて居住権および永住権を目指す外国人", "韓国に不動産を保有し長期滞在を希望する外国人"],
        eligibility: ["法務部指定地域の不動産投資（通常5億ウォン以上）", "投資不動産が法務部の告示要件に適合", "投資金の合法的な出所の証明", "犯罪歴および入国禁止履歴がないこと"],
        requiredDocuments: ["ビザ申請書", "パスポートコピー", "証明写真（3.5x4.5cm）", "不動産売買契約書または登記簿謄本", "投資金送金証憑", "不動産鑑定評価書", "残高証明書", "犯罪経歴証明書"],
        process: [{ step: 1, title: "投資対象確認", description: "法務部指定地域および要件を確認" }, { step: 2, title: "不動産購入", description: "指定地域の不動産契約および残金支払い" }, { step: 3, title: "登記完了", description: "不動産所有権移転登記を完了" }, { step: 4, title: "ビザ申請", description: "出入国管理事務所にF-2不動産投資を申請" }, { step: 5, title: "ビザ発給", description: "審査完了後F-2ビザ発給" }],
        processingTime: "約3〜4週間",
        importantNotes: ["指定地域以外の不動産は投資移民の対象となりません。", "投資不動産を売却すると在留資格が取り消される場合があります。", "5年以上の投資維持でF-5-17永住権申請が可能です。"],
        faqs: [{ question: "どこに投資すればよいですか？", answer: "済州島、江原道等の法務部が指定した特定地域の休養目的の不動産（コンドミニアム、リゾート等）が対象です。ソウル等の一般住居用不動産は該当しません。" }, { question: "投資最低金額はいくらですか？", answer: "通常5億ウォン以上で、地域や不動産の種類により異なる場合があります。正確な基準は法務部の告示を確認してください。" }],
        relatedVisas: [{ slug: "f-5-17", title: "F-5-17 不動産投資者永住権" }, { slug: "f-2-public-interest", title: "F-2 公益事業投資ビザ" }, { slug: "f-5", title: "F-5 永住権" }],
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
      en: {
        slug: "f-6",
        title: "F-6 Marriage Visa",
        subtitle: "Residence status for foreign spouses of Korean nationals",
        overview:
          "The F-6 Marriage Visa is issued to foreign spouses who are legally married to Korean nationals. Sub-types include F-6-1 (Korean spouse), F-6-2 (child custody), and F-6-3 (no-fault divorce). A genuine marital relationship must be maintained.",
        targetApplicants: [
          "Foreign spouses married to Korean nationals",
          "Foreigners raising minor children after divorce (F-6-2)",
          "Foreigners divorced through no fault of their own (F-6-3)",
          "Foreigners raising children born from a de facto marriage",
        ],
        eligibility: [
          "Proof of legal marriage to a Korean national (marriage registration completed)",
          "Maintaining a genuine marital relationship (cohabitation, etc.)",
          "Basic communication ability (Korean or with an interpreter)",
          "No criminal record or entry ban history",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Marriage certificate",
          "Korean spouse's basic certificate and family relationship certificate",
          "Korean spouse's ID copy",
          "Korean spouse's income and employment certificates",
          "Accommodation proof (lease agreement, etc.)",
          "Photos of wedding or relationship evidence",
          "Guarantee letter",
        ],
        process: [
          { step: 1, title: "Marriage Registration", description: "Complete marriage registration in both countries (Korean district office + home country)" },
          { step: 2, title: "Document Preparation", description: "Prepare marriage certificate and financial documents" },
          { step: 3, title: "Visa Application", description: "Apply for F-6 at a Korean embassy/consulate or immigration office" },
          { step: 4, title: "Interview", description: "Couple interview (to verify the marriage is genuine)" },
          { step: 5, title: "Visa Issuance", description: "F-6 visa issued after review" },
        ],
        processingTime: "Approximately 1-3 months",
        importantNotes: [
          "If a sham marriage is suspected, the visa will be denied and the case may be treated as an immigration violation.",
          "After maintaining a genuine marriage for 2+ years, you can apply for F-5-2 permanent residency.",
          "In case of divorce, residence status may be changed or revoked (depends on fault).",
        ],
        faqs: [
          {
            question: "Can I work with an F-6 visa?",
            answer: "Yes, F-6 visa holders can work freely without a separate work permit.",
          },
          {
            question: "Will my visa be revoked if I get divorced?",
            answer: "In principle, F-6 status is lost upon divorce. However, if the divorce was due to the Korean spouse's fault (F-6-3) or if you are raising minor children (F-6-2), you may continue to stay.",
          },
          {
            question: "Can I transition from marriage visa to permanent residency?",
            answer: "Yes, after holding the F-6 visa for 2+ years with a genuine marriage, you can apply for F-5-2 permanent residency. Korean proficiency and basic aptitude tests are required.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-2", title: "F-5-2 Spouse of Korean National Permanent Residency" },
          { slug: "f-1-visit", title: "F-1 Family Visit Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-6",
        title: "F-6 结婚签证",
        subtitle: "韩国国民配偶外国人的居留资格",
        overview:
          "F-6结婚签证适用于与韩国国民合法结婚的外国人配偶。细分为F-6-1（韩国人配偶）、F-6-2（子女抚养）、F-6-3（婚姻破裂无过错）等类型，须维持正常的婚姻关系。",
        targetApplicants: [
          "与韩国国民结婚的外国人配偶",
          "离婚后抚养未成年子女的外国人（F-6-2）",
          "婚姻破裂无本人过错的外国人（F-6-3）",
          "抚养事实婚姻中出生子女的外国人",
        ],
        eligibility: [
          "证明与韩国国民的合法婚姻关系（已完成婚姻登记）",
          "维持正常婚姻生活（同居等）",
          "具备基本沟通能力（韩语或携带翻译）",
          "无犯罪记录及入境禁止历史",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "婚姻关系证明",
          "韩国配偶基本证明书·家庭关系证明书",
          "韩国配偶身份证复印件",
          "韩国配偶收入证明·在职证明",
          "住所证明（租赁合同等）",
          "结婚照等恋爱关系证明材料",
          "身元保证书",
        ],
        process: [
          { step: 1, title: "婚姻登记", description: "在两国完成婚姻登记（韩国区/厅 + 本国）" },
          { step: 2, title: "准备材料", description: "准备婚姻关系证明及经济能力材料" },
          { step: 3, title: "签证申请", description: "在驻外使领馆或出入境管理局申请F-6签证" },
          { step: 4, title: "面试审查", description: "夫妻面试（确认是否为假结婚）" },
          { step: 5, title: "签证签发", description: "审核完成后签发F-6签证" },
        ],
        processingTime: "约1-3个月",
        importantNotes: [
          "如怀疑假结婚，签证将被拒绝，且可能作为出入境违法者处理。",
          "正常维持婚姻2年以上可申请F-5-2永住权。",
          "离婚时居留资格可能被变更或取消（取决于过错方）。",
        ],
        faqs: [
          {
            question: "F-6签证可以工作吗？",
            answer: "可以，F-6签证持有者无需另行获得工作许可，可自由就业。",
          },
          {
            question: "离婚后签证会被取消吗？",
            answer: "离婚后原则上F-6资格消失。但如因韩国配偶过错离婚（F-6-3）或正在抚养未成年子女（F-6-2），则可继续居留。",
          },
          {
            question: "结婚签证可以转换为永住权吗？",
            answer: "可以，取得F-6签证后正常维持婚姻2年以上，可申请F-5-2永住权。需通过韩语能力和基本素养审查。",
          },
        ],
        relatedVisas: [
          { slug: "f-5-2", title: "F-5-2 国民配偶永住权" },
          { slug: "f-1-visit", title: "F-1 探亲同居签证" },
          { slug: "f-5", title: "F-5 永住权" },
        ],
      },
      ja: {
        slug: "f-6",
        title: "F-6 結婚ビザ",
        subtitle: "韓国国民の配偶者である外国人のための在留資格",
        overview: "F-6結婚ビザは、韓国国民と法的に婚姻した外国人配偶者に発給される在留資格です。F-6-1（韓国人配偶者）、F-6-2（子女養育）、F-6-3（婚姻破綻に本人の責任なし）等の細分類型があり、正常な婚姻関係が維持されている必要があります。",
        targetApplicants: ["韓国国民と結婚した外国人配偶者", "離婚後に未成年の子女を養育中の外国人（F-6-2）", "婚姻破綻に本人の責任がない外国人（F-6-3）", "事実婚関係で出生した子女を養育中の外国人"],
        eligibility: ["韓国国民との法的婚姻関係の証明（婚姻届完了）", "正常な婚姻生活の維持（同居等）", "基礎的な意思疎通が可能（韓国語または通訳同伴）", "犯罪歴および入国禁止履歴がないこと"],
        requiredDocuments: ["ビザ申請書", "パスポートコピー", "証明写真（3.5x4.5cm）", "婚姻関係証明書", "韓国人配偶者の基本証明書・家族関係証明書", "韓国人配偶者の身分証コピー", "韓国人配偶者の所得証明書・在職証明書", "住居証明（賃貸契約書等）", "結婚式写真等の交際立証資料", "身元保証書"],
        process: [{ step: 1, title: "婚姻届", description: "両国で婚姻届を完了（韓国の市・区役所＋本国）" }, { step: 2, title: "書類準備", description: "婚姻関係証明および経済能力書類を準備" }, { step: 3, title: "ビザ申請", description: "在外公館または出入国管理事務所でF-6を申請" }, { step: 4, title: "面接審査", description: "夫婦面接審査（偽装結婚の確認）" }, { step: 5, title: "ビザ発給", description: "審査完了後F-6ビザ発給" }],
        processingTime: "約1〜3ヶ月",
        importantNotes: ["偽装結婚が疑われるとビザが拒否され、出入国違反者として処理される場合があります。", "2年以上正常な婚姻を維持するとF-5-2永住権の申請が可能です。", "離婚時に在留資格が変更または取り消される場合があります（帰責事由により異なる）。"],
        faqs: [{ question: "F-6ビザで就労できますか？", answer: "はい、F-6ビザ所持者は別途の就労許可なしに自由に就労活動が可能です。" }, { question: "離婚するとビザが取り消されますか？", answer: "離婚時は原則としてF-6資格が消滅します。ただし韓国人配偶者の帰責事由による離婚（F-6-3）や未成年の子女を養育中の場合（F-6-2）は滞在が可能です。" }, { question: "結婚ビザから永住権への切り替えは可能ですか？", answer: "はい、F-6ビザ取得後2年以上正常な婚姻を維持すればF-5-2永住権を申請できます。韓国語能力と基本素養の審査を経ます。" }],
        relatedVisas: [{ slug: "f-5-2", title: "F-5-2 国民の配偶者永住権" }, { slug: "f-1-visit", title: "F-1 訪問同居ビザ" }, { slug: "f-5", title: "F-5 永住権" }],
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
      en: {
        slug: "criminal-review",
        title: "Immigration Criminal Review",
        subtitle: "Professional representation for immigration violation hearings and appeals",
        overview:
          "An immigration criminal review is a hearing process for violations of the Immigration Act, including overstay, unauthorized activities, or submission of false documents, which may result in deportation, departure orders, or entry bans. With the assistance of a professional administrative agent, you can prepare written explanations, file appeals, and seek residence permits.",
        targetApplicants: [
          "Foreigners caught for overstay facing deportation or departure orders",
          "Foreigners caught for unauthorized activities (unlawful employment, etc.)",
          "Foreigners whose visa applications or stay extensions were denied",
          "Foreigners subject to entry bans who need to re-enter Korea",
        ],
        eligibility: [
          "Subject to criminal review due to Immigration Act violations",
          "Need to file an appeal against visa denial or stay extension refusal",
          "Seeking to lift an entry ban",
          "Need to provide explanation against a deportation order",
        ],
        requiredDocuments: [
          "Written explanation (describing circumstances and reasons for the violation)",
          "Passport copy",
          "Alien registration card copy",
          "Financial capability proof",
          "Family relationship evidence (if applicable)",
          "Letter of apology / petition letter",
          "Employer confirmation letter (if applicable)",
          "Other favorable evidence materials",
        ],
        process: [
          { step: 1, title: "Situation Analysis", description: "Identify the violation type and criminal review category" },
          { step: 2, title: "Written Explanation", description: "Prepare written explanation covering circumstances, reasons, and future plans" },
          { step: 3, title: "Evidence Preparation", description: "Gather favorable evidence and petition letters" },
          { step: 4, title: "Criminal Review Response", description: "Attend and respond to the criminal review at the immigration office" },
          { step: 5, title: "Result & Follow-up", description: "File appeals or proceed with follow-up based on the review outcome" },
        ],
        processingTime: "Varies by case (2 weeks to several months)",
        importantNotes: [
          "Responding to a criminal review without professional assistance may lead to unfavorable outcomes.",
          "The quality of the written explanation and supporting evidence has a decisive impact on the outcome.",
          "Deportation may result in a re-entry ban of 1 to 10 years.",
        ],
        faqs: [
          {
            question: "Will I be deported immediately if caught for overstay?",
            answer: "No, you will not be deported immediately. A criminal review process determines whether you face deportation, a departure order, or a fine. You will be given an opportunity to explain your situation.",
          },
          {
            question: "Can an entry ban be lifted?",
            answer: "Even during an entry ban period, you can apply for a lift on humanitarian grounds (family reunification, medical treatment, etc.). However, approval depends on individual circumstances.",
          },
          {
            question: "Can I reapply after a visa denial?",
            answer: "Yes, you can reapply after addressing the reasons for denial. Accurate analysis of the denial reasons and proper supplementary documentation are crucial.",
          },
        ],
        relatedVisas: [
          { slug: "f-6", title: "F-6 Marriage Visa" },
          { slug: "e-7", title: "E-7 Special Activities Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency" },
        ],
      },
      zh: {
        slug: "criminal-review",
        title: "违法审查",
        subtitle: "出入境违法审查应对及异议申诉专业服务",
        overview:
          "违法审查是因违反出入境管理法（非法滞留、超范围活动、提交虚假材料等）而面临强制遣返、出境命令、入境禁止等处分时的审查程序。通过专业行政士的协助，可进行申诉书撰写、异议申请、居留许可等应对措施。",
        targetApplicants: [
          "因非法滞留被查处面临强制遣返或出境命令的外国人",
          "因超范围活动（未经许可就业等）被查处的外国人",
          "签证被拒或居留延期被驳回的外国人",
          "受到入境禁止处分需要重新入境的外国人",
        ],
        eligibility: [
          "因违反出入境管理法成为违法审查对象",
          "需要对签证被拒·居留延期驳回等提出异议",
          "需要申请解除入境禁止",
          "需要对强制遣返命令进行申诉",
        ],
        requiredDocuments: [
          "申诉书（说明违法经过及原因）",
          "护照复印件",
          "外国人登录证复印件",
          "经济能力证明材料",
          "家庭关系证明（如适用）",
          "悔过书·请愿书",
          "雇主确认书（如适用）",
          "其他有利证据材料",
        ],
        process: [
          { step: 1, title: "情况分析", description: "分析违法事项及违法审查类型" },
          { step: 2, title: "撰写申诉书", description: "撰写违法经过、原因、未来计划等申诉书" },
          { step: 3, title: "准备证明材料", description: "收集有利证据材料及请愿书" },
          { step: 4, title: "应对违法审查", description: "出席出入境管理局的违法审查并进行答辩" },
          { step: 5, title: "结果及后续", description: "根据审查结果进行异议申请或后续程序" },
        ],
        processingTime: "因案情而异（2周至数月）",
        importantNotes: [
          "在没有专业人士协助的情况下应对违法审查，可能导致不利结果。",
          "申诉书的内容和证明材料的质量对结果具有决定性影响。",
          "强制遣返时可能被禁止入境1年至最长10年。",
        ],
        faqs: [
          {
            question: "非法滞留被查处会立即被遣返吗？",
            answer: "不会立即遣返。需经过违法审查决定强制遣返、出境命令或罚款等处分。在此过程中会给予申诉机会。",
          },
          {
            question: "入境禁止可以解除吗？",
            answer: "即使在入境禁止期间，如有人道主义理由（家庭团聚、治疗等），可申请解除。但批准与否因个案而异。",
          },
          {
            question: "签证被拒后可以重新申请吗？",
            answer: "可以，在解决被拒原因后可重新申请。准确分析被拒原因并准备补充材料至关重要。",
          },
        ],
        relatedVisas: [
          { slug: "f-6", title: "F-6 结婚签证" },
          { slug: "e-7", title: "E-7 特定活动签证" },
          { slug: "f-5", title: "F-5 永住权" },
        ],
      },
      ja: {
        slug: "criminal-review",
        title: "出入国犯罪審査",
        subtitle: "出入国犯罪審査対応および異議申請の専門サービス",
        overview: "犯罪審査は、出入国管理法違反（不法滞在、資格外活動、虚偽書類提出等）により強制退去、出国命令、入国禁止等の処分を受ける場合の審査手続きです。専門行政士の支援を通じて釈明書の作成、異議申請、滞在許可等の対応が可能です。",
        targetApplicants: ["不法滞在で摘発され強制退去または出国命令を受けた外国人", "資格外活動（無許可就労等）で摘発された外国人", "ビザ拒否または滞在期間延長が不許可となった外国人", "入国禁止処分を受け再入国が必要な外国人"],
        eligibility: ["出入国管理法違反により犯罪審査の対象となった場合", "ビザ拒否・滞在延長不許可等に対する異議申請が必要な場合", "入国禁止の解除を申請する場合", "強制退去命令に対する釈明が必要な場合"],
        requiredDocuments: ["釈明書（違反の経緯および事由の説明）", "パスポートコピー", "外国人登録証コピー", "経済能力の立証書類", "家族関係証憑（該当時）", "反省文・嘆願書", "雇��主確認書（該当時）", "その他有利な証拠資料"],
        process: [{ step: 1, title: "状況分析", description: "違反事項および犯罪審査の類型を把握" }, { step: 2, title: "釈明書作成", description: "違反の経緯、事由、今後の計画等の釈明書を作成" }, { step: 3, title: "証憑書類準備", description: "有利な証拠資料および嘆願書を確保" }, { step: 4, title: "犯罪審査対応", description: "出入国管理事務所の犯罪審査に出席・対応" }, { step: 5, title: "結果および後続措置", description: "審査結果に基づく異議申請または後続手続きの遂行" }],
        processingTime: "案件により異なる（2週間〜数ヶ月）",
        importantNotes: ["犯罪審査は専門家の支援なしに対応すると不利な結果を招く可能性があります。", "釈明書の内容と証憑資料の質が結果に決定的な影響を及ぼします。", "強制退去の場合、最短1年から最長10年まで再入国が禁止される場合があります。"],
        faqs: [{ question: "不法滞在が摘発されるとすぐに追放されますか？", answer: "即座に追放されるわけではありません。犯罪審査を経て強制退去、出国命令、または過料処分等が決定されます。この過程で釈明の機会が与えられます。" }, { question: "入国禁止を解除できますか？", answer: "入国禁止期間中でも人道的事由（家族結合、治療等）があれば解除申請が可能です。ただし承認の可否は個別の案件により異なります。" }, { question: "ビザ拒否後に再申請は可能ですか？", answer: "はい、拒否事由を解消した後に再申請できます。拒否事由の正確な分析と補完書類の準備が重要です。" }],
        relatedVisas: [{ slug: "f-6", title: "F-6 結婚ビザ" }, { slug: "e-7", title: "E-7 特定活動ビザ" }, { slug: "f-5", title: "F-5 永住権" }],
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
      en: {
        slug: "f-5-1",
        title: "F-5-1 General Permanent Residency",
        subtitle: "Permanent residency for foreigners with 5+ years of residence in Korea",
        overview:
          "F-5-1 General Permanent Residency is available to foreigners who have legally resided in Korea for 5 or more years and meet certain income and conduct requirements. It is the most basic pathway to permanent residency, requiring stable income, Korean proficiency, and basic civic knowledge.",
        targetApplicants: [
          "Foreigners who have stayed 5+ years on D-8, E-7, or other work/investment visas",
          "Foreigners seeking permanent residency after extended stay",
          "Long-term residents with stable income and intention to settle",
        ],
        eligibility: [
          "5+ years of legal residence in Korea",
          "Legal adult under Korean Civil Act (19 years or older)",
          "Income of the applicant or cohabiting family at or above GNI",
          "Good conduct (no criminal record)",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Photo (3.5x4.5cm)",
          "Residence period verification documents",
          "Income certificate (withholding tax statement, etc.)",
          "Tax payment certificate",
          "TOPIK score or KIIP completion certificate",
          "Criminal background check (home country and Korea)",
          "Medical examination certificate",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify 5-year residence and income/conduct requirements" },
          { step: 2, title: "Korean/KIIP Preparation", description: "Complete TOPIK or KIIP program" },
          { step: 3, title: "Document Preparation", description: "Prepare income, tax, criminal background documents" },
          { step: 4, title: "PR Application", description: "Apply for F-5-1 permanent residency at the immigration office" },
          { step: 5, title: "Review & Issuance", description: "Permanent residency issued after review (approx. 2-6 months)" },
        ],
        processingTime: "Approximately 2-6 months",
        importantNotes: [
          "Even after obtaining permanent residency, leaving Korea for 1+ year without a re-entry permit may result in revocation.",
          "Korean proficiency or KIIP completion is mandatory.",
          "Income at or above GNI is a key review factor.",
        ],
        faqs: [
          {
            question: "Must the 5-year residence be continuous?",
            answer: "Continuous residence is the principle, but short-term departures are counted as part of the residence period. However, extended absences may be excluded from the calculation.",
          },
          {
            question: "What is the income requirement?",
            answer: "The annual income of the applicant or cohabiting family must be at or above Korea's Gross National Income (GNI). The exact amount changes annually, so check at the time of application.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-16", title: "F-5-16 Points-based Permanent Residency" },
          { slug: "f-5-5", title: "F-5-5 High-Value Investor" },
        ],
      },
      zh: {
        slug: "f-5-1",
        title: "F-5-1 一般永住者",
        subtitle: "面向居留5年以上外国人的一般永住权",
        overview:
          "F-5-1一般永住者资格适用于在韩国合法居留5年以上、满足一定收入·品行要求的外国人。是最基本的永住权取得途径，需要具备稳定的收入、韩语能力和基本素养。",
        targetApplicants: [
          "以D-8、E-7等工作·投资签证居留5年以上的外国人",
          "希望在长期居留后转换为永住权的外国人",
          "拥有稳定收入和定居意愿的长期居留者",
        ],
        eligibility: [
          "在韩国合法居留5年以上",
          "韩国民法规定的成年人（19岁以上）",
          "本人或同居家庭成员收入达到GNI以上",
          "品行良好（无犯罪记录）",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "证件照（3.5x4.5cm）",
          "居留期限确认材料",
          "收入证明（工资扣缴凭证等）",
          "纳税证明",
          "TOPIK成绩或社会融合项目结业证",
          "无犯罪证明（本国及韩国）",
          "健康检查证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认5年居留及收入·品行要求" },
          { step: 2, title: "韩语/社会融合准备", description: "完成TOPIK或社会融合项目" },
          { step: 3, title: "准备材料", description: "准备收入、纳税、犯罪记录等证明" },
          { step: 4, title: "申请永住权", description: "在出入境管理局申请F-5-1永住权" },
          { step: 5, title: "审核及签发", description: "审核完成后签发永住权（约2-6个月）" },
        ],
        processingTime: "约2-6个月",
        importantNotes: [
          "取得永住权后，未经再入境许可离境1年以上的，永住权可能被取消。",
          "韩语能力或社会融合项目结业为必要条件。",
          "GNI以上的收入是关键审查因素。",
        ],
        faqs: [
          {
            question: "5年居留要求必须是连续的吗？",
            answer: "原则上需要连续居留，但短期出境会计入居留期限。但长期出境可能不计入居留期限。",
          },
          {
            question: "收入要求是多少？",
            answer: "本人或同居家庭成员的年收入须达到韩国国民总收入（GNI）以上。金额每年变动，申请时需确认。",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-16", title: "F-5-16 积分制永住者" },
          { slug: "f-5-5", title: "F-5-5 高额投资者" },
        ],
      },
      ja: {
        slug: "f-5-1",
        title: "F-5-1 一般永住者",
        subtitle: "5年以上滞在した外国人のための一般永住権",
        overview: "F-5-1一般永住者資格は、韓国に5年以上合法的に滞在し、一定の所得・品行要件を満たした外国人が申請できる永住権です。最も基本的な永住権取得経路であり、安定した所得と韓国語能力、基本素養が求められます。",
        targetApplicants: ["D-8、E-7等の就労・投資ビザで5年以上滞在した外国人", "長期滞在後に永住権への切り替えを希望する外国人", "安定した所得と定住の意志がある長期滞在者"],
        eligibility: ["韓国に5年以上合法的に滞在", "韓国民法上の成年（19歳以上）", "本人または同居家族の所得がGNI以上", "品行方正（犯罪歴なし）"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "証明写真（3.5x4.5cm）", "滞在期間確認書類", "所得証明書（勤労所得源泉徴収領収書等）", "納税証明書", "韓国語能力試験（TOPIK）または社会統合プログラム修了証", "犯罪経歴証明書（本国および韓国）", "健康診断書"],
        process: [{ step: 1, title: "資格確認", description: "5年滞在および所得・品行要件の確認" }, { step: 2, title: "韓国語/社会統合修了", description: "TOPIKまたは社会統合プログラムの修了" }, { step: 3, title: "書類準備", description: "所得、納税、犯罪経歴等の証憑を準備" }, { step: 4, title: "永住権申請", description: "出入国管理事務所にF-5-1永住権を申請" }, { step: 5, title: "審査および発給", description: "審査完了後永住権発給（約2〜6ヶ月）" }],
        processingTime: "約2〜6ヶ月",
        importantNotes: ["永住権取得後も再入国許可なしに1年以上出国すると永住権が取り消される場合があります。", "韓国語能力または社会統合プログラム修了が必須です。", "GNI以上の所得が核心的な審査要素です。"],
        faqs: [{ question: "5年の滞在要件は連続でなければなりませんか？", answer: "連続滞在が原則ですが、短期出国は滞在期間に算入されます。ただし長期間の出国は滞在期間から除外される場合があります。" }, { question: "所得要件はいくらですか？", answer: "本人または同居家族の年間所得が韓国国民総所得（GNI）以上でなければなりません。毎年金額が変動するため申請時に確認が必要です。" }],
        relatedVisas: [{ slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-16", title: "F-5-16 ポイント制永住者" }, { slug: "f-5-5", title: "F-5-5 高額投資者" }],
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
      en: {
        slug: "f-5-2",
        title: "F-5-2 Spouse of Korean National",
        subtitle: "Permanent residency for foreign spouses of Korean nationals",
        overview:
          "F-5-2 permanent residency is available to foreigners holding an F-6 Marriage Visa who have maintained a genuine marriage with a Korean national for 2 or more years. Applicants must demonstrate Korean language proficiency, pass a basic aptitude review, and meet financial requirements.",
        targetApplicants: [
          "Foreign spouses who have held an F-6 Marriage Visa for 2+ years",
          "Foreigners maintaining a stable married life in Korea",
          "Marriage immigrants planning long-term settlement in Korea",
        ],
        eligibility: [
          "2+ years of genuine marriage since obtaining F-6 visa",
          "Basic Korean language proficiency (TOPIK or KIIP)",
          "Income of applicant or spouse at or above GNI",
          "No criminal record",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Marriage certificate",
          "Korean spouse's family relationship certificate",
          "Income certificate",
          "Tax payment certificate",
          "Korean proficiency proof (TOPIK/KIIP)",
          "Criminal background check",
          "Medical examination certificate",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify 2+ years of genuine marriage" },
          { step: 2, title: "Korean Language Preparation", description: "Complete TOPIK or KIIP program" },
          { step: 3, title: "Document Preparation", description: "Prepare marriage, income, and criminal background documents" },
          { step: 4, title: "PR Application", description: "Apply for F-5-2 at the immigration office" },
        ],
        processingTime: "Approximately 2-4 months",
        importantNotes: [
          "Even in case of divorce, permanent residency may be maintained if the Korean spouse was at fault or if you are raising children.",
          "KIIP completion may waive the Korean proficiency requirement.",
        ],
        faqs: [
          {
            question: "Will my permanent residency be revoked if I get divorced?",
            answer: "It depends on the circumstances. If the Korean spouse was at fault or if you are raising Korean children, permanent residency may be maintained.",
          },
          {
            question: "Can I apply if I don't speak Korean?",
            answer: "Basic Korean proficiency is required, which can be demonstrated through TOPIK or KIIP completion. KIIP completion is the most advantageous option.",
          },
        ],
        relatedVisas: [
          { slug: "f-6", title: "F-6 Marriage Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-1", title: "F-5-1 General Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-5-2",
        title: "F-5-2 国民配偶",
        subtitle: "韩国国民配偶的永住权",
        overview:
          "F-5-2永住权适用于持有F-6结婚签证的外国人与韩国国民维持2年以上正常婚姻关系后申请。需满足韩语能力、基本素养审查、经济条件等要求。",
        targetApplicants: [
          "持有F-6结婚签证2年以上的韩国国民的外国配偶",
          "在韩国维持稳定婚姻生活的外国人",
          "计划长期在韩国定居的结婚移民者",
        ],
        eligibility: [
          "取得F-6签证后维持正常婚姻2年以上",
          "基本韩语能力（TOPIK或社会融合项目）",
          "本人或配偶收入达到GNI以上",
          "无犯罪记录",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "婚姻关系证明",
          "韩国配偶家庭关系证明书",
          "收入证明",
          "纳税证明",
          "韩语能力证明（TOPIK·社会融合项目）",
          "无犯罪证明",
          "健康检查证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认维持正常婚姻2年以上" },
          { step: 2, title: "韩语能力准备", description: "完成TOPIK或社会融合项目" },
          { step: 3, title: "准备材料", description: "准备婚姻关系、收入、犯罪记录证明" },
          { step: 4, title: "申请永住权", description: "在出入境管理局申请F-5-2" },
        ],
        processingTime: "约2-4个月",
        importantNotes: [
          "即使婚姻破裂，如系子女抚养或配偶过错，永住资格可能得以维持。",
          "完成社会融合项目可免除韩语能力要求。",
        ],
        faqs: [
          {
            question: "离婚后永住权会被取消吗？",
            answer: "视离婚原因而定。如系韩国配偶过错或正在抚养韩国子女，永住权可能得以维持。",
          },
          {
            question: "不会韩语也可以申请吗？",
            answer: "需要基本韩语能力，可通过TOPIK或社会融合项目结业来证明。完成社会融合项目最为有利。",
          },
        ],
        relatedVisas: [
          { slug: "f-6", title: "F-6 结婚签证" },
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-1", title: "F-5-1 一般永住者" },
        ],
      },
      ja: {
        slug: "f-5-2",
        title: "F-5-2 国民の配偶者",
        subtitle: "韓国国民の配偶者のための永住権",
        overview: "F-5-2永住権は、F-6結婚ビザを所持した外国人が韓国国民と2年以上正常な婚姻関係を維持した場合に申請できる永住資格です。韓国語能力、基本素養審査、経済的要件等を満たす必要があります。",
        targetApplicants: ["F-6結婚ビザを2年以上所持した韓国人配偶者の外国人配偶者", "韓国で安定した婚姻生活を維持している外国人", "長期的に韓国に定着しようとする結婚移民者"],
        eligibility: ["F-6ビザ取得後2年以上正常な婚姻を維持", "基本的な韓国語能力（TOPIKまたは社会統合プログラム）", "本人または配偶者の所得がGNI以上", "犯罪歴なし"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "婚姻関係証明書", "韓国人配偶者の家族関係証明書", "所得証明書", "納税証明書", "韓国語能力証憑（TOPIK・社会統合プログラム）", "犯罪経歴証明書", "健康診断書"],
        process: [{ step: 1, title: "資格確認", description: "2年以上の正常な婚姻維持を確認" }, { step: 2, title: "韓国語能力準備", description: "TOPIKまたは社会統合プログラムを修了" }, { step: 3, title: "書類準備", description: "婚姻関係、所得、犯罪経歴の証憑を準備" }, { step: 4, title: "永住権申請", description: "出入国管理事務所にF-5-2を申請" }],
        processingTime: "約2〜4ヶ月",
        importantNotes: ["婚姻破綻の場合でも子女養育や配偶者の帰責事由が認められれば永住資格が維持される場合があります。", "社会統合プログラム修了時に韓国語能力要件が免除される場合があります。"],
        faqs: [{ question: "離婚すると永住権が取り消されますか？", answer: "離婚事由により異なります。韓国人配偶者の帰責事由や韓国人子女を養育中の場合は永住権が維持される場合があります。" }, { question: "韓国語ができなくても申請できますか？", answer: "基本的な韓国語能力が必要です。TOPIKまたは社会統合プログラムの修了で証明でき、社会統合プログラム修了が最も有利です。" }],
        relatedVisas: [{ slug: "f-6", title: "F-6 結婚ビザ" }, { slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-1", title: "F-5-1 一般永住者" }],
      },
    },
    "f-5-5": {
      ko: {
        slug: "f-5-5",
        title: "F-5-5 고액투자자",
        subtitle: "50만 달러 이상 투자 및 5인 이상 고용 외국인을 위한 영주권",
        overview:
          "F-5-5 고액투자자 영주권은 한국에 50만 달러 이상을 투자하고 5명 이상의 국민을 6개월 이상 정규직으로 고용하고 있는 외국인에게 발급되는 영주자격입니다. 투자 실적과 고용 유지가 핵심 심사 요소입니다.",
        targetApplicants: [
          "한국에 50만 달러 이상을 투자한 D-8 비자 소지자",
          "5명 이상의 한국 국민을 6개월 이상 정규직으로 고용 중인 외국인 투자자",
        ],
        eligibility: [
          "50만 달러 이상의 투자금 유지 (외국인투자기업등록)",
          "5명 이상의 국민을 6개월 이상 정규직(전일제)으로 고용",
          "범죄경력 없음",
          "무범죄조회서 제출 면제",
        ],
        requiredDocuments: [
          "영주자격신청서",
          "여권 및 외국인등록증",
          "외국인투자기업등록증명서",
          "투자금 증빙 (50만 달러 이상)",
          "4대보험 가입자명부 (5명 이상 고용 확인)",
          "법인등기부등본",
          "재무제표·납세증명서",
          "범죄경력증명서",
        ],
        process: [
          { step: 1, title: "자격 확인", description: "투자금 50만 달러 및 고용 5인, 6개월 이상 유지 요건 확인" },
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
      en: {
        slug: "f-5-5",
        title: "F-5-5 High-Value Investor",
        subtitle: "Permanent residency for investors with USD 500,000+ investment and 5+ Korean employees",
        overview:
          "F-5-5 High-Value Investor permanent residency is issued to foreigners who have invested USD 500,000 (approx. KRW 500 million) or more in Korea and employ 5 or more Korean nationals as full-time employees for at least 6 months. Investment performance and employment maintenance are the key review factors.",
        targetApplicants: [
          "D-8 visa holders who have invested USD 500,000+ in Korea",
          "Foreign investors employing 5+ Korean nationals as full-time employees for 6+ months",
        ],
        eligibility: [
          "Investment of USD 500,000+ maintained (registered as a foreign-invested company)",
          "5+ Korean nationals employed full-time for 6+ months",
          "No criminal record",
          "Criminal background check exemption may apply",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Foreign-invested company registration certificate",
          "Investment proof (USD 500,000+)",
          "Social insurance enrollment list (confirming 5+ employees)",
          "Corporate registry",
          "Financial statements and tax payment certificate",
          "Criminal background check",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify USD 500,000 investment and 5+ employees maintained for 6+ months" },
          { step: 2, title: "Document Preparation", description: "Prepare investment, employment, and financial documents" },
          { step: 3, title: "PR Application", description: "Apply for F-5-5 at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "Permanent residency issued after review (approx. 3-6 months)" },
        ],
        processingTime: "Approximately 3-6 months",
        importantNotes: [
          "Investment funds must be legitimate funds remitted from overseas.",
          "Employees must be Korean nationals enrolled in the four major social insurance programs.",
          "Investment and employment must be maintained even after obtaining permanent residency.",
        ],
        faqs: [
          {
            question: "Can I reduce the investment after obtaining permanent residency?",
            answer: "Maintaining the investment is the principle even after obtaining permanent residency. A significant reduction may affect your permanent residency status.",
          },
          {
            question: "Can foreign employees count toward the 5-person requirement?",
            answer: "No, you must employ 5 or more Korean nationals. Foreign employees are not counted toward the employment requirement.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "d-8", title: "D-8 Corporate Investment Visa" },
          { slug: "f-5-25", title: "F-5-25 Conditional High-Value Investor" },
        ],
      },
      zh: {
        slug: "f-5-5",
        title: "F-5-5 高额投资者",
        subtitle: "投资50万美元以上并雇佣5人以上的外国人永住权",
        overview:
          "F-5-5高额投资者永住权适用于在韩国投资50万美元以上、且雇佣5名以上韩国国民为全职员工6个月以上的外国人。投资实绩和雇佣维持是关键审查因素。",
        targetApplicants: [
          "在韩国投资50万美元以上的D-8签证持有者",
          "雇佣5名以上韩国国民全职工作6个月以上的外国投资者",
        ],
        eligibility: [
          "维持50万美元以上的投资（外资企业登记）",
          "雇佣5名以上韩国国民全职工作6个月以上",
          "无犯罪记录",
          "可能免除无犯罪证明提交",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "外资企业登记证",
          "投资证明（50万美元以上）",
          "四大保险参保人员名单（确认5人以上雇佣）",
          "法人登记簿誊本",
          "财务报表·纳税证明",
          "无犯罪证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认50万美元投资及5人雇佣6个月以上维持要求" },
          { step: 2, title: "准备材料", description: "准备投资、雇佣、财务相关证明" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-5" },
          { step: 4, title: "审核及签发", description: "审核完成后签发永住权（约3-6个月）" },
        ],
        processingTime: "约3-6个月",
        importantNotes: [
          "投资资金必须是从海外汇入的合法资金。",
          "雇佣人员必须是参加四大社会保险的韩国国民。",
          "取得永住权后仍需维持投资和雇佣。",
        ],
        faqs: [
          {
            question: "取得永住权后可以减少投资吗？",
            answer: "取得永住权后也应维持投资。大幅削减可能影响永住资格。",
          },
          {
            question: "5人雇佣要求中可以包括外国人吗？",
            answer: "不可以，必须雇佣5名以上韩国国民。外国员工不计入雇佣人数。",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "d-8", title: "D-8 企业投资签证" },
          { slug: "f-5-25", title: "F-5-25 有条件高额投资者" },
        ],
      },
      ja: {
        slug: "f-5-5",
        title: "F-5-5 高額投資者",
        subtitle: "50万ドル以上の投資および5人以上の雇用を行った外国人のための永住権",
        overview: "F-5-5高額投資者永住権は、韓国に50万ドル以上を投資し5名以上の韓国国民を6ヶ月以上正規職として雇用している外国人に発給される永住資格です。投資実績と雇用維持が核心的な審査要素です。",
        targetApplicants: ["韓国に50万ドル以上を投資したD-8ビザ所持者", "5名以上の韓国国民を6ヶ月以上正規職で雇用中の外国人投資家"],
        eligibility: ["50万ドル以上の投資金の維持（外国人投資企業登録）", "5名以上の国民を6ヶ月以上正規職（フルタイム）で雇用", "犯罪歴なし", "無犯罪調査書提出免除の場合あり"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "外国人投資企業登録証明書", "投資金証憑（50万ドル以上）", "4大保険加入者名簿（5名以上の雇用確認）", "法人登記簿謄本", "財務諸表・納税証明書", "犯罪経歴証明書"],
        process: [{ step: 1, title: "資格確認", description: "投資金50万ドルおよび雇用5人、6ヶ月以上維持要件を確認" }, { step: 2, title: "書類準備", description: "投資、雇用、財務関連の証憑を準備" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-5を申請" }, { step: 4, title: "審査および発給", description: "審査完了後永住権発給（約3〜6ヶ月）" }],
        processingTime: "約3〜6ヶ月",
        importantNotes: ["投資金は海外から送金された合法的資金でなければなりません。", "雇用人員は4大保険に加入した韓国国民でなければなりません。", "永住権取得後も投資と雇用を維持する必要があります。"],
        faqs: [{ question: "投資金を減らしても大丈夫ですか？", answer: "永住権取得後も投資金の維持が原則です。大幅な縮小は永住資格に影響を与える可能性があります。" }, { question: "5人の雇用に外国人も含まれますか？", answer: "いいえ、韓国国民を5名以上雇用する必要があります。外国人従業員は雇用人員に算入されません。" }],
        relatedVisas: [{ slug: "f-5", title: "F-5 永住権概要" }, { slug: "d-8", title: "D-8 企業投資ビザ" }, { slug: "f-5-25", title: "F-5-25 条件付き高額投資者" }],
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
      en: {
        slug: "f-5-6",
        title: "F-5-6 Overseas Korean Permanent Residency",
        subtitle: "Permanent residency for overseas Koreans with F-4 status",
        overview:
          "F-5-6 permanent residency is available to ethnic Koreans with foreign nationality who have stayed in Korea for 2 or more years on an F-4 Overseas Korean visa. Applicants must demonstrate the ability to support themselves and basic Korean proficiency.",
        targetApplicants: [
          "Overseas Koreans who have stayed 2+ years on F-4 visa",
          "Overseas Koreans seeking long-term settlement in Korea",
          "Overseas Koreans who prefer permanent residency over nationality recovery",
        ],
        eligibility: [
          "2+ years of residence on F-4 status",
          "Ability to support oneself (income or assets)",
          "Basic Korean language proficiency",
          "No criminal record",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Residence period verification documents",
          "Income or asset proof",
          "Korean proficiency proof",
          "Criminal background check",
          "Medical examination certificate",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify F-4 status for 2+ years and other requirements" },
          { step: 2, title: "Document Preparation", description: "Prepare income, Korean proficiency, and criminal background documents" },
          { step: 3, title: "PR Application", description: "Apply for F-5-6 at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "Permanent residency issued after review" },
        ],
        processingTime: "Approximately 2-4 months",
        importantNotes: [
          "Transitioning from F-4 to F-5 is relatively straightforward, but income requirements must be met.",
          "Korean proficiency standards may be more relaxed compared to general permanent residency.",
        ],
        faqs: [
          {
            question: "What is the difference between F-4 and F-5-6 permanent residency?",
            answer: "F-4 requires renewal every 2 years, while F-5-6 permanent residency has no time limit. Employment restrictions are also further relaxed with permanent residency.",
          },
          {
            question: "Which is better: nationality recovery or permanent residency?",
            answer: "It depends on individual circumstances. Nationality recovery may require giving up your current citizenship, while permanent residency allows you to maintain your foreign nationality while residing long-term in Korea.",
          },
        ],
        relatedVisas: [
          { slug: "f-4", title: "F-4 Overseas Korean Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-1", title: "F-5-1 General Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-5-6",
        title: "F-5-6 海外同胞",
        subtitle: "海外同胞（F-4）居留者的永住权",
        overview:
          "F-5-6永住权适用于以F-4海外同胞签证在韩国居留2年以上的外国籍同胞。需具备维持生计的能力和韩语能力、基本素养等。",
        targetApplicants: [
          "以F-4海外同胞签证居留2年以上的同胞",
          "希望在韩国长期定居的海外同胞",
          "不希望恢复国籍而选择永住权的同胞",
        ],
        eligibility: [
          "以F-4居留资格居留2年以上",
          "维持生计的能力（收入或资产）",
          "基本韩语能力",
          "无犯罪记录",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "居留期限确认材料",
          "收入或资产证明",
          "韩语能力证明",
          "无犯罪证明",
          "健康检查证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认F-4居留2年以上及各项要求" },
          { step: 2, title: "准备材料", description: "准备收入、韩语、犯罪记录等证明" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-6" },
          { step: 4, title: "审核及签发", description: "审核完成后签发永住权" },
        ],
        processingTime: "约2-4个月",
        importantNotes: [
          "F-4转F-5相对容易，但需满足收入要求。",
          "韩语能力标准可能比一般永住权宽松。",
        ],
        faqs: [
          {
            question: "F-4签证和F-5-6永住权有什么区别？",
            answer: "F-4需要每2年续签，而F-5-6永住权没有期限限制。就业限制也进一步放宽。",
          },
          {
            question: "恢复国籍和永住权哪个更有利？",
            answer: "因个人情况而异。恢复国籍可能需要放弃本国国籍，永住权则可在保持外国国籍的同时长期居留韩国。",
          },
        ],
        relatedVisas: [
          { slug: "f-4", title: "F-4 海外同胞签证" },
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-1", title: "F-5-1 一般永住者" },
        ],
      },
      ja: {
        slug: "f-5-6",
        title: "F-5-6 在外同胞",
        subtitle: "在外同胞（F-4）滞在者の永住権",
        overview: "F-5-6永住権は、F-4在外同胞ビザで2年以上韓国に滞在した外国籍同胞が申請できる永住資格です。生計維持能力と韓国語能力、基本素養等が求められます。",
        targetApplicants: ["F-4在外同胞ビザで2年以上滞在した同胞", "韓国に長期定着を希望する在外同胞", "韓国国籍回復ではなく永住権を希望する同胞"],
        eligibility: ["F-4在留資格で2年以上滞在", "生計維持能力（所得または資産）", "基本的な韓国語能力", "犯罪歴なし"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "滞在期間確認書類", "所得または資産の証憑", "韓国語能力の証憑", "犯罪経歴証明書", "健康診断書"],
        process: [{ step: 1, title: "資格確認", description: "F-4で2年以上の滞在および要件を確認" }, { step: 2, title: "書類準備", description: "所得、韓国語、犯罪経歴等の証憑を準備" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-6を申請" }, { step: 4, title: "審査および発給", description: "審査完了後永住権発給" }],
        processingTime: "約2〜4ヶ月",
        importantNotes: ["F-4からF-5への切り替えは比較的容易ですが、所得要件の充足が必要です。", "韓国語能力基準は一般永住権より緩和される場合があります。"],
        faqs: [{ question: "F-4ビザとF-5-6永住権の違いは？", answer: "F-4は2年ごとに更新が必要ですが、F-5-6永住権は期間制限なく滞在できます。また就労活動の制限もさらに緩和されます。" }, { question: "国籍回復と永住権のどちらが有利ですか？", answer: "個人の状況により異なります。国籍回復の場合は本国国籍を放棄する必要がある場合があり、永住権は外国国籍を維持しながら韓国で長期滞在できます。" }],
        relatedVisas: [{ slug: "f-4", title: "F-4 在外同胞ビザ" }, { slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-1", title: "F-5-1 一般永住者" }],
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
      en: {
        slug: "f-5-8",
        title: "F-5-8 Ethnic Chinese in Korea",
        subtitle: "Permanent residency for ethnic Chinese born and raised in Korea",
        overview:
          "F-5-8 is a permanent residency status issued to ethnic Chinese (holding ROC or PRC nationality) who were born in Korea and have continuously resided there. Applicants must demonstrate that they were born in Korea and have maintained continuous residence.",
        targetApplicants: [
          "Ethnic Chinese born and continuously residing in Korea",
          "Long-time ethnic Chinese families established in Korea",
          "Ethnic Chinese business owners and workers settled in Korean society",
        ],
        eligibility: [
          "Proof of birth in Korea and continuous residence",
          "Ability to support oneself",
          "No criminal record",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Birth certificate (confirming birth in Korea)",
          "Alien registration history (confirming continuous residence)",
          "Income or asset proof",
          "Criminal background check",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify birth in Korea and continuous residence" },
          { step: 2, title: "Document Preparation", description: "Prepare birth certificate, residence history, and income proof" },
          { step: 3, title: "PR Application", description: "Apply for F-5-8 at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "Permanent residency issued after review" },
        ],
        processingTime: "Approximately 2-4 months",
        importantNotes: [
          "Both birth in Korea and continuous residence must be demonstrated.",
          "Graduation from a Korean-Chinese school or similar evidence can serve as supporting documentation.",
        ],
        faqs: [
          {
            question: "Can ethnic Chinese not born in Korea apply?",
            answer: "F-5-8 is specifically for ethnic Chinese born in Korea. Those not born in Korea should consider other types such as F-5-1 (General Permanent Residency).",
          },
          {
            question: "How long must I have resided in Korea?",
            answer: "Continuous residence since birth is the principle. Even with short-term stays abroad, the application may be accepted if Korea has been the primary place of residence.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-1", title: "F-5-1 General Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-5-8",
        title: "F-5-8 在韩华侨",
        subtitle: "在韩国出生的华侨永住权",
        overview:
          "F-5-8是面向在韩国出生并持续居住的华侨（中华民国/中华人民共和国国籍）等签发的永住资格。需证明在韩国出生并持续居住的事实。",
        targetApplicants: [
          "在韩国出生并持续居住的华侨",
          "长期在韩国生活的在韩华侨家庭",
          "在韩国社会定居的华侨企业家·劳动者",
        ],
        eligibility: [
          "证明在韩国出生并持续居住的事实",
          "维持生计的能力",
          "无犯罪记录",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "出生证明（确认在韩国出生）",
          "外国人登录事实证明（确认持续居住）",
          "收入或资产证明",
          "无犯罪证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认韩国出生及持续居住事实" },
          { step: 2, title: "准备材料", description: "准备出生证明、居留历史、收入证明" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-8" },
          { step: 4, title: "审核及签发", description: "审核完成后签发永住权" },
        ],
        processingTime: "约2-4个月",
        importantNotes: [
          "必须同时证明韩国出生和持续居住的事实。",
          "在韩华侨学校毕业等辅助证明材料会有所帮助。",
        ],
        faqs: [
          {
            question: "不是在韩国出生的华侨也能申请吗？",
            answer: "F-5-8专为在韩国出生的华侨设立。非韩国出生者需考虑F-5-1（一般永住）等其他类型。",
          },
          {
            question: "需要居住多长时间？",
            answer: "原则上需要从出生起持续居住。即使有短期海外居留，主要生活基地在韩国的也可能被认定。",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-1", title: "F-5-1 一般永住者" },
        ],
      },
      ja: {
        slug: "f-5-8",
        title: "F-5-8 在韓華僑",
        subtitle: "韓国生まれの華僑のための永住権",
        overview: "F-5-8は、韓国で出生し継続して居住している華僑（中華民国/中華人民共和国国籍）等に発給される永住資格です。韓国で生まれ持続的に居住してきた事実を立証する必要があります。",
        targetApplicants: ["韓国で出生し継続して居住中の華僑", "長期間韓国で生活してきた在韓華僑家族", "韓国社会に定着した華僑の事業家・勤労者"],
        eligibility: ["韓国で出生し継続して居住した事実の証明", "生計維持能力", "犯罪歴なし"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "出生証明書（韓国出生確認）", "外国人登録事実証明（継続居住確認）", "所得または資産の証憑", "犯罪経歴証明書"],
        process: [{ step: 1, title: "資格確認", description: "韓国出生および継続居住の事実を確認" }, { step: 2, title: "書類準備", description: "出生証明、滞在履歴、所得証憑を準備" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-8を申請" }, { step: 4, title: "審査および発給", description: "審査完了後永住権発給" }],
        processingTime: "約2〜4ヶ月",
        importantNotes: ["韓国出生の事実と継続居住の事実をどちらも立証する必要があります。", "在韓華僑学校の卒業等の補助的証憑が役立つ場合があります。"],
        faqs: [{ question: "韓国で生まれていない華僑も申請できますか？", answer: "F-5-8は韓国出生の華僑のための類型です。韓国出生でない場合はF-5-1（一般永住）等の他の類型を検討する必要があります。" }, { question: "どの程度の期間居住する必要がありますか？", answer: "出生後の継続居住が原則です。短期海外滞在があっても主な生活拠点が韓国であれば認められる場合があります。" }],
        relatedVisas: [{ slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-1", title: "F-5-1 一般永住者" }],
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
      en: {
        slug: "f-5-9",
        title: "F-5-9 Advanced Technology PhD",
        subtitle: "Permanent residency for doctoral degree holders in advanced technology fields",
        overview:
          "F-5-9 is a permanent residency status available to foreigners who have obtained a doctoral degree in advanced technology fields (IT, bio, nano, etc.) in Korea or abroad and are currently working in related fields in Korea. As a special pathway to attract top talent, residence period requirements are more relaxed than for general permanent residency.",
        targetApplicants: [
          "PhD holders in IT, bio, nano, and other advanced technology fields",
          "Foreigners working at research institutions or companies in Korea in related fields",
          "Foreigners who obtained a doctoral degree in advanced fields from a Korean university",
        ],
        eligibility: [
          "Doctoral degree in an advanced technology field",
          "Currently working in a related field in Korea (research, education, industry)",
          "Meet income requirements",
          "No criminal record",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Doctoral degree certificate",
          "Employment certificate (research institution/company)",
          "Income certificate",
          "Tax payment certificate",
          "Criminal background check",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify advanced field doctoral degree and current field of work" },
          { step: 2, title: "Document Preparation", description: "Prepare degree, employment, and income documents" },
          { step: 3, title: "PR Application", description: "Apply for F-5-9 at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "Permanent residency issued after review" },
        ],
        processingTime: "Approximately 2-4 months",
        importantNotes: [
          "Whether a field qualifies as 'advanced technology' must be confirmed by relevant agencies such as the Ministry of Science and ICT.",
          "Residence period requirements are more relaxed than for general permanent residency (F-5-1).",
        ],
        faqs: [
          {
            question: "Which fields qualify as 'advanced technology'?",
            answer: "IT, bio, nano, digital, energy, aerospace, and other government-designated advanced science and technology fields. Specific fields should be confirmed through official announcements.",
          },
          {
            question: "Are doctoral degrees from overseas universities accepted?",
            answer: "Yes, doctoral degrees from both Korean and overseas universities are recognized. However, you must be working in the relevant field in Korea.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-10", title: "F-5-10 Bachelor/Master/Certificate" },
          { slug: "e-7", title: "E-7 Special Activities Visa" },
        ],
      },
      zh: {
        slug: "f-5-9",
        title: "F-5-9 尖端领域博士",
        subtitle: "尖端产业领域博士学位获得者的永住权",
        overview:
          "F-5-9适用于在韩国或海外取得尖端产业领域（IT、生物、纳米等）博士学位并在韩国从事相关领域工作的外国人。作为吸引高级人才的特别永住权，居留期限要求比一般永住权宽松。",
        targetApplicants: [
          "IT、生物、纳米等尖端领域博士学位持有者",
          "在韩国研究机构·企业从事相关领域工作的外国人",
          "在韩国大学取得尖端领域博士学位的外国人",
        ],
        eligibility: [
          "取得尖端产业领域博士学位",
          "在韩国从事相关领域工作（研究·教育·产业）",
          "满足一定收入要求",
          "无犯罪记录",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "博士学位证明",
          "在职证明（研究机构·企业）",
          "收入证明",
          "纳税证明",
          "无犯罪证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认尖端领域博士学位及工作领域" },
          { step: 2, title: "准备材料", description: "准备学位、在职、收入证明" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-9" },
          { step: 4, title: "审核及签发", description: "审核完成后签发永住权" },
        ],
        processingTime: "约2-4个月",
        importantNotes: [
          "是否属于尖端领域需经科学技术信息通信部等相关机构确认。",
          "居留期限要求比一般永住权（F-5-1）宽松。",
        ],
        faqs: [
          {
            question: "哪些领域属于尖端领域？",
            answer: "IT、生物、纳米、数字、能源、航空航天等政府指定的尖端科技领域。具体领域需查阅公告。",
          },
          {
            question: "海外大学博士也可以吗？",
            answer: "可以，韩国或海外大学的博士学位均被认可。但必须在韩国从事相关领域工作。",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-10", title: "F-5-10 学士·硕士·资格证" },
          { slug: "e-7", title: "E-7 特定活动签证" },
        ],
      },
      ja: {
        slug: "f-5-9",
        title: "F-5-9 先端分野博士",
        subtitle: "先端産業分野の博士号取得者のための永住権",
        overview: "F-5-9は、韓国または海外で先端産業分野（IT、バイオ、ナノ等）の博士号を取得し韓国で関連分野に従事している外国人が申請できる永住資格です。高度人材誘致のための特例永住権で、一般永住権より滞在期間要件が緩和されます。",
        targetApplicants: ["IT、バイオ、ナノ等の先端分野の博士号所持者", "韓国内の研究機関・企業で関連分野に従事中の外国人", "韓国の大学で先端分野の博士号を取得した外国人"],
        eligibility: ["先端産業分野の博士号取得", "韓国内で関連分野に従事（研究・教育・産業）", "一定の所得要件の充足", "犯罪歴なし"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "博士学位証明書", "在職証明書（研究機関・企業）", "所得証明書", "納税証明書", "犯罪経歴証明書"],
        process: [{ step: 1, title: "資格確認", description: "先端分野の博士号および従事分野を確認" }, { step: 2, title: "書類準備", description: "学位、在職、所得の証憑を準備" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-9を申請" }, { step: 4, title: "審査および発給", description: "審査完了後永住権発給" }],
        processingTime: "約2〜4ヶ月",
        importantNotes: ["先端分野の該当可否は科学技術情報通信部等の関係機関の確認が必要です。", "一般永住権（F-5-1）より滞在期間要件が緩和されます。"],
        faqs: [{ question: "どの分野が先端分野に該当しますか？", answer: "IT、バイオ、ナノ、デジタル、エネルギー、宇宙航空等の政府が指定した先端科学技術分野が該当します。具体的な分野は告示を確認する必要があります。" }, { question: "海外の大学の博士号でも可能ですか？", answer: "はい、韓国または海外の大学の博士号のどちらも認められます。ただし韓国で当該分野に従事している必要があります。" }],
        relatedVisas: [{ slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-10", title: "F-5-10 学士・修士・資格証" }, { slug: "e-7", title: "E-7 特定活動ビザ" }],
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
      en: {
        slug: "f-5-10",
        title: "F-5-10 Bachelor/Master Degree or Certificate Holder",
        subtitle: "Permanent residency based on degree or national certification",
        overview:
          "F-5-10 is available to foreigners who have obtained a bachelor's degree or higher from a Korean institution or hold specific national certifications, and who have been employed in Korea for a certain period while meeting income requirements.",
        targetApplicants: [
          "Foreigners who obtained bachelor's or master's degrees from Korean universities",
          "Foreign professionals holding national technical certifications",
          "Foreigners employed in Korea after obtaining their degree",
        ],
        eligibility: [
          "Bachelor's degree or higher from a Korean institution, or specific national certification",
          "Legal employment in Korea for a certain period",
          "Income at or above GNI",
          "No criminal record",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Degree certificate or certification copy",
          "Employment certificate",
          "Income certificate",
          "Tax payment certificate",
          "Criminal background check",
          "Medical examination certificate",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify degree/certification and residence/income requirements" },
          { step: 2, title: "Document Preparation", description: "Prepare degree, employment, and income documents" },
          { step: 3, title: "PR Application", description: "Apply for F-5-10 at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "Permanent residency issued after review" },
        ],
        processingTime: "Approximately 2-4 months",
        importantNotes: [
          "Only degrees from overseas institutions (without a Korean degree) may not qualify.",
          "Employment duration and income level are key review factors.",
        ],
        faqs: [
          {
            question: "Which certifications are accepted?",
            answer: "National technical certifications at the engineer/industrial engineer level or above managed by the Human Resources Development Service of Korea may qualify. Specific acceptance criteria should be confirmed with the immigration office.",
          },
          {
            question: "Can I apply immediately after graduating?",
            answer: "A degree alone is not sufficient. You must have been employed in Korea for a certain period and meet the income requirements.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-9", title: "F-5-9 Advanced Technology PhD" },
          { slug: "f-5-1", title: "F-5-1 General Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-5-10",
        title: "F-5-10 学士·硕士·资格证",
        subtitle: "基于学位或国家资格证的永住权",
        overview:
          "F-5-10适用于在韩国取得学士以上学位或持有特定国家资格证、并在韩国就业一定期限且满足收入要求的外国人。",
        targetApplicants: [
          "在韩国大学取得学士·硕士学位的外国人",
          "持有国家技术资格证的外国专业人才",
          "取得学位后在韩国就业的外国人",
        ],
        eligibility: [
          "在韩国取得学士以上学位或持有特定国家资格证",
          "在韩国合法就业一定期限",
          "收入达到GNI以上",
          "无犯罪记录",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "学位证明或资格证复印件",
          "在职证明",
          "收入证明",
          "纳税证明",
          "无犯罪证明",
          "健康检查证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认学位·资格证及居留·收入要求" },
          { step: 2, title: "准备材料", description: "准备学位、在职、收入等证明" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-10" },
          { step: 4, title: "审核及签发", description: "审核完成后签发永住权" },
        ],
        processingTime: "约2-4个月",
        importantNotes: [
          "仅持有海外学位（无韩国学位）的可能不符合条件。",
          "就业期限和收入水平是关键审查因素。",
        ],
        faqs: [
          {
            question: "哪些资格证被认可？",
            answer: "韩国产业人力公团管理的国家技术资格中技师·产业技师以上可能被认可。具体认可范围需向出入境管理局确认。",
          },
          {
            question: "取得学位后可以立即申请吗？",
            answer: "仅凭学位不够，须在韩国就业一定期限并满足收入要求。",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-9", title: "F-5-9 尖端领域博士" },
          { slug: "f-5-1", title: "F-5-1 一般永住者" },
        ],
      },
      ja: {
        slug: "f-5-10",
        title: "F-5-10 学士・修士・資格証",
        subtitle: "学位または国家資格証に基づく永住権",
        overview: "F-5-10は、韓国で学士以上の学位を取得するか特定の国家資格証を保有し、一定期間韓国で就労して所得要件を満たした外国人が申請できる永住資格です。",
        targetApplicants: ["韓国の大学で学士・修士の学位を取得した外国人", "国家技術資格証を保有する外国人専門人材", "学位取得後に韓国で就職中の外国人"],
        eligibility: ["韓国内で学士以上の学位取得または特定の国家資格証を保有", "韓国で一定期間合法的に就労", "所得がGNI以上", "犯罪歴なし"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "学位証明書または資格証コピー", "在職証明書", "所得証明書", "納税証明書", "犯罪経歴証明書", "健康診断書"],
        process: [{ step: 1, title: "資格確認", description: "学位・資格証および滞在・所得要件を確認" }, { step: 2, title: "書類準備", description: "学位、在職、所得等の証憑を準備" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-10を申請" }, { step: 4, title: "審査および発給", description: "審査完了後永住権発給" }],
        processingTime: "約2〜4ヶ月",
        importantNotes: ["韓国内の学位ではなく海外の学位のみを保有する場合は該当しない場合があります。", "就労期間と所得水準が核心的な審査要素です。"],
        faqs: [{ question: "どのような資格証が認められますか？", answer: "韓国産業人力公団が管理する国家技術資格のうち技師・産業技師以上が該当する場合があります。具体的な認定範囲は出入国管理事務所に確認が必要です。" }, { question: "学位取得後すぐに申請できますか？", answer: "学位取得だけでは不十分で、一定期間韓国で就労し所得要件を満たす必要があります。" }],
        relatedVisas: [{ slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-9", title: "F-5-9 先端分野博士" }, { slug: "f-5-1", title: "F-5-1 一般永住者" }],
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
      en: {
        slug: "f-5-11",
        title: "F-5-11 Exceptional Ability",
        subtitle: "Permanent residency for outstanding talent in science, business, education, culture, or sports",
        overview:
          "F-5-11 is issued to foreigners with exceptional ability in specific fields such as science, business management, education, culture and arts, or sports. International awards, published research, patents, and similar achievements serve as review criteria.",
        targetApplicants: [
          "Internationally recognized scientists and researchers",
          "Global business executives who have contributed to Korea",
          "Foreigners with outstanding achievements in arts, culture, or sports",
        ],
        eligibility: [
          "Demonstrated exceptional ability in a specific field",
          "International awards, published papers, patents, or similar achievements",
          "Plans for or track record of activities in Korea",
          "No criminal record",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Awards and achievement documentation",
          "Recommendation letters (from relevant institutional leaders, etc.)",
          "Employment certificate or activity plan",
          "Criminal background check",
        ],
        process: [
          { step: 1, title: "Achievement Documentation", description: "Compile awards, papers, patents, and other achievement records" },
          { step: 2, title: "Recommendation Letters", description: "Obtain recommendations from relevant institutions and experts" },
          { step: 3, title: "PR Application", description: "Apply for F-5-11 at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "Permanent residency issued after review" },
        ],
        processingTime: "Approximately 3-6 months",
        importantNotes: [
          "Objective proof of exceptional ability is the key factor.",
          "Recommendation letters from experts and institutions in the relevant field have a significant impact on the review.",
        ],
        faqs: [
          {
            question: "What level qualifies as 'exceptional ability'?",
            answer: "Publications in international academic journals, international competition awards, and significant patents serve as benchmarks. Achievements at the national or international level are required.",
          },
          {
            question: "Can I apply without any track record in Korea?",
            answer: "Applications based on overseas achievements are possible, but demonstrating plans for activities or potential contributions in Korea is advantageous.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-9", title: "F-5-9 Advanced Technology PhD" },
          { slug: "e-7", title: "E-7 Special Activities Visa" },
        ],
      },
      zh: {
        slug: "f-5-11",
        title: "F-5-11 特定领域杰出能力",
        subtitle: "科学·经营·教育·文化等特定领域优秀人才永住权",
        overview:
          "F-5-11适用于在科学、经营、教育、文化艺术、体育等特定领域拥有卓越能力的外国人。国际获奖经历、论文发表实绩、专利等是审查因素。",
        targetApplicants: [
          "获得国际认可的科学家·研究者",
          "作为全球企业高管为韩国做出贡献的专家",
          "在艺术·文化·体育领域有突出成就的外国人",
        ],
        eligibility: [
          "证明在特定领域的卓越能力",
          "国际获奖、论文、专利等实绩",
          "在韩国的活动计划或实绩",
          "无犯罪记录",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "获奖经历·成就证明材料",
          "推荐信（相关机构负责人等）",
          "在职证明或活动计划书",
          "无犯罪证明",
        ],
        process: [
          { step: 1, title: "整理成就", description: "整理获奖、论文、专利等成就资料" },
          { step: 2, title: "获取推荐信", description: "获取相关机构·专家推荐信" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-11" },
          { step: 4, title: "审核及签发", description: "审核完成后签发永住权" },
        ],
        processingTime: "约3-6个月",
        importantNotes: [
          "卓越能力的客观证明是关键。",
          "相关领域专家和机构的推荐信对审查有重大影响。",
        ],
        faqs: [
          {
            question: "什么程度算「卓越能力」？",
            answer: "在国际学术期刊发表论文、国际竞赛获奖、持有重要专利等为判断标准。需要国家级或国际级别的成就。",
          },
          {
            question: "没有在韩国的活动实绩也可以吗？",
            answer: "可以凭海外成就申请，但展示在韩国的活动计划或贡献潜力更为有利。",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-9", title: "F-5-9 尖端领域博士" },
          { slug: "e-7", title: "E-7 特定活动签证" },
        ],
      },
      ja: {
        slug: "f-5-11",
        title: "F-5-11 特定分野の能力",
        subtitle: "科学・経営・教育・文化等の特定分野の優秀人材の永住権",
        overview: "F-5-11は、科学、経営、教育、文化芸術、スポーツ等の特定分野で卓越した能力を持つ外国人に発給される永住資格です。国際的な受賞歴、論文発表実績、特許等が審査要素となります。",
        targetApplicants: ["国際的に認められた科学者・研究者", "グローバル企業経営陣として韓国に貢献した専門家", "芸術・文化・スポーツ分野で優れた業績を持つ外国人"],
        eligibility: ["特定分野での卓越した能力の証明", "国際的な受賞、論文、特許等の実績", "韓国での活動計画または実績", "犯罪歴なし"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "受賞歴・業績証憑資料", "推薦書（関連機関長等）", "在職証明書または活動計画書", "犯罪経歴証明書"],
        process: [{ step: 1, title: "業績整理", description: "受賞、論文、特許等の業績資料を整理" }, { step: 2, title: "推薦書確保", description: "関連機関・専門家の推薦書を確保" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-11を申請" }, { step: 4, title: "審査および発給", description: "審査完了後永住権発給" }],
        processingTime: "約3〜6ヶ月",
        importantNotes: ["卓越した能力の客観的な立証が核心です。", "関連分野の専門家や機関の推薦書が審査に大きな影響を与えます。"],
        faqs: [{ question: "どの程度が「卓越した能力」に該当しますか？", answer: "国際学術誌への論文掲載、国際大会での受賞、重要な特許の保有等が基準となります。国家または国際レベルの業績が必要です。" }, { question: "韓国での活動実績がなくても可能ですか？", answer: "海外での業績でも申請可能ですが、韓国での活動計画や貢献の可能性を示すことが有利です。" }],
        relatedVisas: [{ slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-9", title: "F-5-9 先端分野博士" }, { slug: "e-7", title: "E-7 特定活動ビザ" }],
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
      en: {
        slug: "f-5-16",
        title: "F-5-16 Points-based Permanent Residency",
        subtitle: "Permanent residency transitioning from the F-2 points-based visa",
        overview:
          "F-5-16 Points-based Permanent Residency is a pathway for foreigners who have held the F-2-7 points-based residence visa for 3 or more years in Korea. The points-based requirements must be maintained during the residence period, and good income and tax records are required.",
        targetApplicants: [
          "Foreigners who have held F-2 points-based (F-2-7) visa for 3+ years",
          "Professionals seeking permanent residency from a points-based residence visa",
          "Talented professionals planning long-term settlement in Korea",
        ],
        eligibility: [
          "3+ years of residence after obtaining F-2-7 points-based visa",
          "Points-based requirements maintained (80+ points)",
          "Good income and tax payment record",
          "No criminal record",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Residence period verification documents",
          "Points calculation sheet and supporting documents",
          "Income certificate",
          "Tax payment certificate",
          "Criminal background check",
          "Medical examination certificate",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify F-2-7 3-year residence and points maintenance" },
          { step: 2, title: "Document Preparation", description: "Prepare points proof, income, and tax documents" },
          { step: 3, title: "PR Application", description: "Apply for F-5-16 at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "Permanent residency issued after review" },
        ],
        processingTime: "Approximately 2-4 months",
        importantNotes: [
          "The 80-point threshold must be maintained throughout the 3-year period after obtaining F-2-7.",
          "A decline in income or a criminal record may result in denial of the transition.",
          "Even after obtaining permanent residency, staying abroad for 2+ years may result in revocation.",
        ],
        faqs: [
          {
            question: "Is there an additional test when transitioning from F-2-7 to F-5-16?",
            answer: "No additional test is required, but the points-based requirements (80 points) will be re-verified. Completing the KIIP program is advantageous.",
          },
          {
            question: "Will frequent business travel abroad during the 3 years be a problem?",
            answer: "Routine business travel is not an issue, but extended stays abroad may be disadvantageous when calculating the residence period in Korea.",
          },
        ],
        relatedVisas: [
          { slug: "f-2-points", title: "F-2 Points-based Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-1", title: "F-5-1 General Permanent Residency" },
        ],
      },
      zh: {
        slug: "f-5-16",
        title: "F-5-16 积分制永住者",
        subtitle: "从F-2积分制签证转换的永住权",
        overview:
          "F-5-16积分制永住者是持有F-2-7积分制居住签证并在韩国居留3年以上的外国人可转换为永住资格的途径。居留期间须维持积分制要求，收入·纳税实绩须良好。",
        targetApplicants: [
          "持有F-2积分制（F-2-7）签证居留3年以上的外国人",
          "希望从积分制居住签证转换为永住权的专业人才",
          "计划长期定居韩国的优秀人才",
        ],
        eligibility: [
          "取得F-2-7积分制签证后居留3年以上",
          "维持积分制要求（80分以上）",
          "收入及纳税实绩良好",
          "无犯罪记录",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "居留期限确认材料",
          "积分评估表及证明材料",
          "收入证明",
          "纳税证明",
          "无犯罪证明",
          "健康检查证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认F-2-7居留3年及积分维持情况" },
          { step: 2, title: "准备材料", description: "准备积分证明、收入、纳税材料" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-16" },
          { step: 4, title: "审核及签发", description: "审核完成后签发永住权" },
        ],
        processingTime: "约2-4个月",
        importantNotes: [
          "取得F-2-7后3年内须维持积分要求（80分）。",
          "收入水平下降或出现犯罪记录可能导致转换被拒。",
          "取得永住权后在海外居留2年以上的，永住资格可能被取消。",
        ],
        faqs: [
          {
            question: "从F-2-7转换为F-5-16时需要额外考试吗？",
            answer: "无需额外考试，但会重新审查积分制要求（80分）的维持情况。完成社会融合项目的将更为有利。",
          },
          {
            question: "3年中频繁出差海外会有问题吗？",
            answer: "正常出差不会有问题，但长期海外居留较多时，在韩居留期限的计算上可能不利。",
          },
        ],
        relatedVisas: [
          { slug: "f-2-points", title: "F-2 积分制签证" },
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-1", title: "F-5-1 一般永住者" },
        ],
      },
      ja: {
        slug: "f-5-16",
        title: "F-5-16 ポイント制永住者",
        subtitle: "F-2ポイント制ビザから切り替える永住権",
        overview: "F-5-16ポイント制永住者は、F-2-7ポイント制居住ビザを取得し3年以上韓国に滞在した外国人が永住資格に切り替えられる経路です。滞在期間中にポイント制要件を維持し、所得・納税実績が良好であることが求められます。",
        targetApplicants: ["F-2ポイント制（F-2-7）ビザ所持後3年以上滞在した外国人", "ポイント制居住ビザから永住権への切り替えを希望する専門人材", "長期的な韓国定着を計画する優秀人材"],
        eligibility: ["F-2-7ポイント制ビザ取得後3年以上滞在", "ポイント制要件の維持（80点以上）", "所得および納税実績が良好", "犯罪歴なし"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "滞在期間確認書類", "ポイント算定表および証憑書類", "所得証明書", "納税証明書", "犯罪経歴証明書", "健康診断書"],
        process: [{ step: 1, title: "資格確認", description: "F-2-7で3年滞在およびポイント維持を確認" }, { step: 2, title: "書類準備", description: "ポイント証憑、所得、納税書類を準備" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-16を申請" }, { step: 4, title: "審査および発給", description: "審査完了後永住権発給" }],
        processingTime: "約2〜4ヶ月",
        importantNotes: ["F-2-7取得後3年間ポイント要件（80点）を維持する必要があります。", "所得水準の低下や犯罪歴の発生時に切り替えが拒否される場合があります。", "永住権取得後も2年以上海外滞在すると永住資格が取り消される場合があります。"],
        faqs: [{ question: "F-2-7からF-5-16への切り替え時に追加試験はありますか？", answer: "別途の試験はありませんが、ポイント制要件（80点）の維持可否が再審査されます。社会統合プログラムを修了していれば有利です。" }, { question: "3年間に海外出張が多いと問題になりますか？", answer: "通常の出張は問題ありませんが、長期間の海外滞在が多いと韓国滞在期間の算定で不利になる場合があります。" }],
        relatedVisas: [{ slug: "f-2-points", title: "F-2 ポイント制ビザ" }, { slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-1", title: "F-5-1 一般永住者" }],
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
      en: {
        slug: "f-5-17",
        title: "F-5-17 Real Estate Investor",
        subtitle: "Permanent residency through sustained property investment",
        overview:
          "F-5-17 is available to foreigners who have invested a certain amount or more in real estate in areas designated by the Ministry of Justice and maintained the investment for 5+ years. This is the pathway transitioning from the F-2 Real Estate Investment visa.",
        targetApplicants: [
          "Foreigners who have maintained F-2 real estate investment for 5+ years",
          "Foreigners owning property in Ministry of Justice designated areas",
          "Investors aiming for permanent residency through real estate investment",
        ],
        eligibility: [
          "Real estate investment maintained for 5+ years in a designated area",
          "Property ownership maintained",
          "No criminal record",
          "Basic aptitude requirements met",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Property registry",
          "Property appraisal report",
          "Investment maintenance confirmation",
          "Criminal background check",
          "Medical examination certificate",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify 5+ years of sustained real estate investment" },
          { step: 2, title: "Document Preparation", description: "Prepare property registry, appraisal, and other documents" },
          { step: 3, title: "PR Application", description: "Apply for F-5-17 at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "Permanent residency issued after review" },
        ],
        processingTime: "Approximately 3-6 months",
        importantNotes: [
          "Selling the property may result in revocation of permanent residency.",
          "A significant decline in property value below the threshold may cause issues.",
        ],
        faqs: [
          {
            question: "Can I sell the property after obtaining permanent residency?",
            answer: "Even after obtaining permanent residency, the property should be maintained for a certain period. Premature sale may affect your permanent residency status, so prior confirmation is recommended.",
          },
          {
            question: "What happens if property value declines?",
            answer: "The purchase price is the baseline, but a significant decline may require additional investment. Specific criteria should be confirmed through Ministry of Justice announcements.",
          },
        ],
        relatedVisas: [
          { slug: "f-2-real-estate", title: "F-2 Real Estate Investment Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-5", title: "F-5-5 High-Value Investor" },
        ],
      },
      zh: {
        slug: "f-5-17",
        title: "F-5-17 不动产投资者",
        subtitle: "通过维持不动产投资获得的永住权",
        overview:
          "F-5-17适用于在法务部指定地区投资一定金额以上的不动产并维持5年以上的外国人。是从F-2不动产投资签证转换的途径。",
        targetApplicants: [
          "以F-2不动产投资签证维持投资5年以上的外国人",
          "在法务部指定地区持有不动产的外国人",
          "以不动产投资获得永住权为目标的投资者",
        ],
        eligibility: [
          "法务部指定地区不动产投资维持5年以上",
          "维持投资不动产所有权",
          "无犯罪记录",
          "满足基本素养要求",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "不动产登记簿",
          "不动产评估报告",
          "投资维持确认书",
          "无犯罪证明",
          "健康检查证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认不动产投资维持5年以上" },
          { step: 2, title: "准备材料", description: "准备登记簿、评估报告等材料" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-17" },
          { step: 4, title: "审核及签发", description: "审核完成后签发永住权" },
        ],
        processingTime: "约3-6个月",
        importantNotes: [
          "出售不动产可能导致永住资格被取消。",
          "不动产价值跌破基准金额可能产生问题。",
        ],
        faqs: [
          {
            question: "取得永住权后可以出售不动产吗？",
            answer: "取得永住权后也应在一定期限内维持不动产。提前出售可能影响永住资格，建议事先确认。",
          },
          {
            question: "不动产价格下跌怎么办？",
            answer: "以购买时的价格为基准，但大幅下跌时可能需要追加投资。具体标准需查阅法务部公告。",
          },
        ],
        relatedVisas: [
          { slug: "f-2-real-estate", title: "F-2 不动产投资签证" },
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-5", title: "F-5-5 高额投资者" },
        ],
      },
      ja: {
        slug: "f-5-17",
        title: "F-5-17 不動産投資者",
        subtitle: "不動産投資の維持による永住権",
        overview: "F-5-17は、法務部が指定した地域に一定金額以上の不動産を投資し5年以上投資を維持した外国人が申請できる永住資格です。F-2不動産投資ビザから切り替える経路です。",
        targetApplicants: ["F-2不動産投資ビザで5年以上投資を維持した外国人", "法務部指定地域に不動産を保有中の外国人", "不動産投資による永住権を目標とする投資家"],
        eligibility: ["法務部指定地域の不動産投資5年以上維持", "投資不動産の所有権維持", "犯罪歴なし", "基本素養要件の充足"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "不動産登記簿謄本", "不動産鑑定評価書", "投資維持確認書", "犯罪経歴証明書", "健康診断書"],
        process: [{ step: 1, title: "資格確認", description: "5年以上の不動産投資維持を確認" }, { step: 2, title: "書類準備", description: "登記簿謄本、鑑定評価等を準備" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-17を申請" }, { step: 4, title: "審査および発給", description: "審査完了後永住権発給" }],
        processingTime: "約3〜6ヶ月",
        importantNotes: ["不動産を売却すると永住資格が取り消される場合があります。", "不動産価値が基準金額以下に下落すると問題になる場合があります。"],
        faqs: [{ question: "永住権取得後に不動産を売却しても大丈夫ですか？", answer: "永住権取得後も一定期間不動産を維持する必要があります。早期売却は永住資格に影響を与える可能性があるため事前確認が必要です。" }, { question: "不動産価格が下落したらどうなりますか？", answer: "投資時点の価格が基準ですが、大幅な下落時に追加投資が必要な場合があります。具体的な基準は法務部の告示を確認してください。" }],
        relatedVisas: [{ slug: "f-2-real-estate", title: "F-2 不動産投資ビザ" }, { slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-5", title: "F-5-5 高額投資者" }],
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
      en: {
        slug: "f-5-21",
        title: "F-5-21 Public Interest Investor",
        subtitle: "Permanent residency through sustained public interest project investment",
        overview:
          "F-5-21 is available to foreigners who have invested KRW 500 million (approx. USD 375,000) or more in a government-designated public interest project (government bonds, public funds, etc.) and maintained the investment for 5+ years. This is the pathway transitioning from the F-2 Public Interest Investment visa.",
        targetApplicants: [
          "Foreigners who have maintained F-2 public interest investment for 5+ years",
          "Foreigners with KRW 500 million+ invested in a government-designated public interest project",
          "Investors aiming for permanent residency through stable investment",
        ],
        eligibility: [
          "Public interest project investment of KRW 500 million+ maintained for 5+ years",
          "Legitimate source of investment funds already verified",
          "No criminal record",
          "Basic aptitude requirements met",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Public interest project investment maintenance confirmation",
          "Investment performance proof",
          "Criminal background check",
          "Medical examination certificate",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify 5+ years of sustained public interest investment" },
          { step: 2, title: "Document Preparation", description: "Prepare investment maintenance confirmation and proof" },
          { step: 3, title: "PR Application", description: "Apply for F-5-21 at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "Permanent residency issued after review" },
        ],
        processingTime: "Approximately 3-6 months",
        importantNotes: [
          "Early withdrawal during the 5-year maintenance period will result in loss of status.",
          "Maintaining the investment even after obtaining permanent residency is recommended.",
        ],
        faqs: [
          {
            question: "Can I withdraw the investment after obtaining permanent residency?",
            answer: "Withdrawal is possible after obtaining permanent residency, but the exact regulations regarding immediate withdrawal and status maintenance should be confirmed with the Ministry of Justice.",
          },
          {
            question: "What is the return on public interest investments?",
            answer: "Since the investment is in stable assets like government bonds, returns are relatively low. The primary purpose is obtaining residence status rather than investment returns.",
          },
        ],
        relatedVisas: [
          { slug: "f-2-public-interest", title: "F-2 Public Interest Investment Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-5", title: "F-5-5 High-Value Investor" },
        ],
      },
      zh: {
        slug: "f-5-21",
        title: "F-5-21 公益事业投资者",
        subtitle: "通过维持公益事业投资获得的永住权",
        overview:
          "F-5-21适用于向法务部指定的公益事业（国债、基金等）投资5亿韩元（约37.5万美元）以上并维持5年以上的外国人。是从F-2公益事业投资签证转换的途径。",
        targetApplicants: [
          "以F-2公益事业投资签证维持投资5年以上的外国人",
          "向法务部指定公益事业投资5亿韩元以上的外国人",
          "以稳定投资获得永住权为目标的投资者",
        ],
        eligibility: [
          "公益事业5亿韩元以上投资维持5年以上",
          "已完成投资资金合法来源证明",
          "无犯罪记录",
          "满足基本素养要求",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "公益事业投资维持确认书",
          "投资实绩证明",
          "无犯罪证明",
          "健康检查证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认公益事业投资维持5年以上" },
          { step: 2, title: "准备材料", description: "准备投资维持确认书及证明" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-21" },
          { step: 4, title: "审核及签发", description: "审核完成后签发永住权" },
        ],
        processingTime: "约3-6个月",
        importantNotes: [
          "5年投资维持期间中途取回的，资格将消失。",
          "取得永住权后也建议维持投资。",
        ],
        faqs: [
          {
            question: "取得永住权后可以取回投资吗？",
            answer: "取得永住权后可以取回投资，但关于立即取回和资格维持的具体规定需向法务部确认。",
          },
          {
            question: "公益事业投资的收益率如何？",
            answer: "由于投资对象为国债等稳定资产，收益率较低。主要目的是获取居留资格而非投资收益。",
          },
        ],
        relatedVisas: [
          { slug: "f-2-public-interest", title: "F-2 公益事业投资签证" },
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-5", title: "F-5-5 高额投资者" },
        ],
      },
      ja: {
        slug: "f-5-21",
        title: "F-5-21 公益事業投資者",
        subtitle: "公益事業投資の維持による永住権",
        overview: "F-5-21は、法務部が指定した公益事業（国債、基金等）に5億ウォン以上を投資し5年以上維持した外国人が申請できる永住資格です。F-2公益事業投資ビザから切り替える経路です。",
        targetApplicants: ["F-2公益事業投資ビザで5年以上投資を維持した外国人", "法務部指定の公益事業に5億ウォン以上を投資中の外国人", "安定的な投資による永住権を目標とする投資家"],
        eligibility: ["公益事業5億ウォン以上の投資を5年以上維持", "投資金の合法的出所証明完了", "犯罪歴なし", "基本素養要件の充足"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "公益事業投資維持確認書", "投資実績証憑", "犯罪経歴証明書", "健康診断書"],
        process: [{ step: 1, title: "資格確認", description: "5年以上の公益事業投資維持を確認" }, { step: 2, title: "書類準備", description: "投資維持確認書および証憑を準備" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-21を申請" }, { step: 4, title: "審査および発給", description: "審査完了後永住権発給" }],
        processingTime: "約3〜6ヶ月",
        importantNotes: ["5年間の投資維持期間中に中途回収すると資格が消滅します。", "永住権取得後も投資を維持することが推奨されます。"],
        faqs: [{ question: "投資金は永住権取得後に回収できますか？", answer: "永住権取得後は投資金の回収が可能ですが、即座の回収と永住資格維持に関する正確な規定は法務部に確認が必要です。" }, { question: "公益事業投資の収益率はどうですか？", answer: "国債等の安定的な資産に投資するため収益率は低い方です。投資収益よりも在留資格の取得が主な目的です。" }],
        relatedVisas: [{ slug: "f-2-public-interest", title: "F-2 公益事業投資ビザ" }, { slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-5", title: "F-5-5 高額投資者" }],
      },
    },
    "f-5-24": {
      ko: {
        slug: "f-5-24",
        title: "F-5-24 기술창업투자자",
        subtitle: "기술창업으로 한국 경제에 기여한 외국인을 위한 영주권",
        overview:
          "F-5-24는 기술창업(D-8-4) 자격으로 3년 이상 체류하면서 투자자로부터 3억원 이상의 투자금을 유치하고 국민 2명 이상을 고용한 외국인이 신청할 수 있는 영주자격입니다. 기술혁신형 스타트업 대표가 주 대상입니다.",
        targetApplicants: [
          "D-8-4 기술창업비자로 사업을 운영 중인 외국인",
          "기술혁신형 스타트업을 운영하며 매출·고용 실적이 있는 대표",
          "정부 창업지원 프로그램 졸업 기업의 외국인 대표",
        ],
        eligibility: [
          "기술창업(D-8-4) 자격으로 3년 이상 계속 체류",
          "3억원 이상의 투자금 유치 또는 이에 준하는 자본금 확보",
          "국민 2명 이상을 6개월 이상 정규직으로 고용",
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
      en: {
        slug: "f-5-24",
        title: "F-5-24 Tech Startup Investor",
        subtitle: "Permanent residency for foreigners contributing to the Korean economy through tech startups",
        overview:
          "F-5-24 is available to foreigners who have stayed for 3+ years on a tech startup (D-8-4) visa, raised KRW 300 million (approx. USD 225,000) or more in investment, and employed 2+ Korean nationals. The primary target is founders of innovative tech startups.",
        targetApplicants: [
          "Foreigners operating a business on a D-8-4 tech startup visa",
          "Founders of innovative tech startups with revenue and employment track records",
          "Foreign founders of companies that have graduated from government startup support programs",
        ],
        eligibility: [
          "3+ years of continuous residence on tech startup (D-8-4) status",
          "Raised KRW 300 million (approx. USD 225,000) or more in investment or equivalent capital secured",
          "Employed 2+ Korean nationals full-time for 6+ months",
          "No criminal record",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Corporate registry",
          "Business registration certificate",
          "Revenue proof (financial statements, VAT filings, etc.)",
          "Employment proof (social insurance enrollment list)",
          "Patent/technology documents (if applicable)",
          "Criminal background check",
        ],
        process: [
          { step: 1, title: "Eligibility Check", description: "Verify revenue, employment, and business duration requirements" },
          { step: 2, title: "Document Preparation", description: "Prepare financial statements, employment proof, etc." },
          { step: 3, title: "PR Application", description: "Apply for F-5-24 at the immigration office" },
          { step: 4, title: "Review & Issuance", description: "Permanent residency issued after review" },
        ],
        processingTime: "Approximately 3-6 months",
        importantNotes: [
          "Revenue and employment track records are the key review factors.",
          "Participation in government startup support programs is viewed favorably.",
          "General (non-tech) startups may not qualify.",
        ],
        faqs: [
          {
            question: "How much revenue is required?",
            answer: "Specific revenue criteria follow official announcements and vary by industry and scale. Demonstrating consistent growth is important.",
          },
          {
            question: "Can I apply on a visa other than D-8-4?",
            answer: "A track record of operating a business on a tech startup-related visa (D-8-4, etc.) is the baseline, but specific eligibility should be confirmed with the immigration office.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 Corporate Investment Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "f-5-5", title: "F-5-5 High-Value Investor" },
        ],
      },
      zh: {
        slug: "f-5-24",
        title: "F-5-24 技术创业投资者",
        subtitle: "通过技术创业为韩国经济做出贡献的外国人永住权",
        overview:
          "F-5-24适用于以技术创业（D-8-4）资格居留3年以上、从投资人处获得3亿韩元（约22.5万美元）以上投资并雇佣2名以上韩国国民的外国人。主要面向技术创新型初创企业代表。",
        targetApplicants: [
          "以D-8-4技术创业签证运营企业的外国人",
          "运营技术创新型初创企业且有营收·雇佣实绩的代表",
          "政府创业支援项目毕业企业的外国代表",
        ],
        eligibility: [
          "以技术创业（D-8-4）资格连续居留3年以上",
          "获得3亿韩元（约22.5万美元）以上的投资或同等资本金",
          "雇佣2名以上韩国国民全职工作6个月以上",
          "无犯罪记录",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "法人登记簿誊本",
          "营业执照",
          "营收证明（财务报表·增值税申报等）",
          "雇佣证明（四大保险参保人员名单）",
          "专利·技术相关材料（如适用）",
          "无犯罪证明",
        ],
        process: [
          { step: 1, title: "资格确认", description: "确认营收、雇佣、经营期限要求" },
          { step: 2, title: "准备材料", description: "准备财务报表、雇佣证明等" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-24" },
          { step: 4, title: "审核及签发", description: "审核完成后签发永住权" },
        ],
        processingTime: "约3-6个月",
        importantNotes: [
          "营收和雇佣实绩是关键审查因素。",
          "参与政府创业支援项目的经历会被有利看待。",
          "非技术创业的一般创业可能不符合条件。",
        ],
        faqs: [
          {
            question: "需要多少营收？",
            answer: "具体营收标准按官方公告而定，因行业和规模而异。展示持续增长态势很重要。",
          },
          {
            question: "非D-8-4签证也可以申请吗？",
            answer: "以技术创业相关签证（D-8-4等）经营企业的实绩为基础，具体资格需向出入境管理局确认。",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 企业投资签证" },
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "f-5-5", title: "F-5-5 高额投资者" },
        ],
      },
      ja: {
        slug: "f-5-24",
        title: "F-5-24 技術創業投資者",
        subtitle: "技術創業で韓国経済に貢献した外国人のための永住権",
        overview: "F-5-24は、技術創業（D-8-4）資格で3年以上滞在し投資家から3億ウォン以上の投資金を誘致し国民2名以上を雇用した外国人が申請できる永住資格です。技術革新型スタートアップの代表が主な対象です。",
        targetApplicants: ["D-8-4技術創業ビザで事業を運営中の外国人", "技術革新型スタートアップを運営し売上・雇用実績がある代表", "政府創業支援プログラム卒業企業の外国人代表"],
        eligibility: ["技術創業（D-8-4）資格で3年以上継続滞在", "3億ウォン以上の投資金誘致またはそれに準ずる資本金確保", "国民2名以上を6ヶ月以上正規職で雇用", "犯罪歴なし"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "法人登記簿謄本", "事業者登録証", "売上証憑（財務諸表・付加価値税申告書等）", "雇用証憑（4大保険加入者名簿）", "特許・技術関連書類（該当時）", "犯罪経歴証明書"],
        process: [{ step: 1, title: "資格確認", description: "売上、雇用、事業期間の要件を確認" }, { step: 2, title: "書類準備", description: "財務諸表、雇用証憑等を準備" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-24を申請" }, { step: 4, title: "審査および発給", description: "審査完了後永住権発給" }],
        processingTime: "約3〜6ヶ月",
        importantNotes: ["売上と雇用実績が核心的な審査要素です。", "政府創業支援プログラムへの参加経歴が有利に作用します。", "技術創業ではない一般創業は該当しない場合があります。"],
        faqs: [{ question: "売上はどのくらい必要ですか？", answer: "具体的な売上基準は公式告示に従い、事業分野と規模により異なります。持続的な成長を示すことが重要です。" }, { question: "D-8-4ビザ以外のビザでも申請できますか？", answer: "技術創業関連ビザ（D-8-4等）で事業を運営した実績が基本ですが、具体的な資格は出入国管理事務所に確認が必要です。" }],
        relatedVisas: [{ slug: "d-8", title: "D-8 企業投資ビザ" }, { slug: "f-5", title: "F-5 永住権概要" }, { slug: "f-5-5", title: "F-5-5 高額投資者" }],
      },
    },
    "f-5-25": {
      ko: {
        slug: "f-5-25",
        title: "F-5-25 조건부 고액투자자",
        subtitle: "30억원 이상 투자 및 5년 유지 조건부 영주권",
        overview:
          "F-5-25 조건부 고액투자자 영주권은 한국산업은행의 공익사업 투자이민 펀드에 30억원 이상을 예치하고 5년 이상 투자 상태를 유지할 것을 서약한 외국인에게 조건부로 영주자격을 부여하는 비자입니다. 유지 조건을 충족하지 못하면 영주자격이 취소될 수 있습니다.",
        targetApplicants: [
          "한국에 고액 투자를 계획하는 외국인",
          "조건부 영주를 통해 한국 정착을 희망하는 투자자",
          "투자 후 영주권 취득을 목표로 하는 고자산 외국인",
        ],
        eligibility: [
          "한국산업은행 공익사업 투자이민 펀드에 30억원 이상 예치",
          "투자금의 합법적 출처 증명 (외화반입 증빙)",
          "5년 이상 투자 유지 서약",
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
            answer: "5년입니다. 예치한 금액 중 일부 또는 전부를 중도 인출할 경우 영주자격이 취소됩니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-5", title: "F-5-5 고액투자자" },
          { slug: "f-5", title: "F-5 영주권 개요" },
          { slug: "d-8", title: "D-8 기업투자비자" },
        ],
      },
      en: {
        slug: "f-5-25",
        title: "F-5-25 Conditional High-Value Investor",
        subtitle: "Conditional permanent residency through KRW 3 billion+ investment with 5-year maintenance",
        overview:
          "The F-5-25 Conditional High-Value Investor permanent residency is granted conditionally to foreigners who deposit KRW 3 billion (approx. USD 2.25 million) or more in the Korea Development Bank's Public Interest Investment Immigration Fund and pledge to maintain the investment for 5+ years. Failure to meet the maintenance conditions may result in revocation of permanent residency.",
        targetApplicants: [
          "Foreigners planning high-value investment in Korea",
          "Investors seeking Korean settlement through conditional permanent residency",
          "High-net-worth foreigners targeting permanent residency through investment",
        ],
        eligibility: [
          "Deposit of KRW 3 billion (approx. USD 2.25 million) or more in KDB's Public Interest Investment Immigration Fund",
          "Proof of legitimate source of investment funds (foreign currency import proof)",
          "Pledge to maintain investment for 5+ years",
          "No criminal record",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport and alien registration card",
          "Investment confirmation",
          "Investment fund source proof",
          "Investment maintenance agreement",
          "Criminal background check",
          "Medical examination certificate",
        ],
        process: [
          { step: 1, title: "Investment Planning", description: "Determine investment amount and target" },
          { step: 2, title: "Execute Investment", description: "Complete high-value investment and obtain confirmation" },
          { step: 3, title: "PR Application", description: "Apply for F-5-25 at the immigration office" },
          { step: 4, title: "Conditional PR Issuance", description: "Conditional permanent residency granted after review" },
        ],
        processingTime: "Approximately 3-6 months",
        importantNotes: [
          "This is conditional permanent residency, so the investment maintenance conditions must be fulfilled.",
          "Withdrawal or significant reduction of investment funds will result in revocation of permanent residency.",
          "Upon fulfilling all conditions, the status is converted to full permanent residency.",
        ],
        faqs: [
          {
            question: "What is the difference between conditional and regular permanent residency?",
            answer: "Conditional permanent residency requires maintaining the investment for a set period. Upon fulfilling the conditions, it is converted to full permanent residency.",
          },
          {
            question: "How long must the investment be maintained?",
            answer: "5 years. Early withdrawal of part or all of the deposited amount will result in revocation of permanent residency.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-5", title: "F-5-5 High-Value Investor" },
          { slug: "f-5", title: "F-5 Permanent Residency Overview" },
          { slug: "d-8", title: "D-8 Corporate Investment Visa" },
        ],
      },
      zh: {
        slug: "f-5-25",
        title: "F-5-25 有条件高额投资者",
        subtitle: "投资30亿韩元以上并维持5年的有条件永住权",
        overview:
          "F-5-25有条件高额投资者永住权适用于在韩国产业银行公益事业投资移民基金中存入30亿韩元（约225万美元）以上并承诺维持投资5年以上的外国人，附条件授予永住资格。未满足维持条件的，永住资格可能被取消。",
        targetApplicants: [
          "计划在韩国进行高额投资的外国人",
          "希望通过有条件永住在韩国定居的投资者",
          "以投资获得永住权为目标的高净值外国人",
        ],
        eligibility: [
          "在韩国产业银行公益事业投资移民基金存入30亿韩元（约225万美元）以上",
          "证明投资资金的合法来源（外汇汇入证明）",
          "承诺维持投资5年以上",
          "无犯罪记录",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照及外国人登录证",
          "投资确认书",
          "投资资金来源证明",
          "投资维持承诺书",
          "无犯罪证明",
          "健康检查证明",
        ],
        process: [
          { step: 1, title: "制定投资计划", description: "确定投资金额及对象" },
          { step: 2, title: "执行投资", description: "完成高额投资并取得确认书" },
          { step: 3, title: "申请永住权", description: "在出入境管理局申请F-5-25" },
          { step: 4, title: "签发有条件永住权", description: "审核后授予有条件永住资格" },
        ],
        processingTime: "约3-6个月",
        importantNotes: [
          "因为是有条件永住，必须履行投资维持条件。",
          "取回投资或大幅减少的，永住资格将被取消。",
          "条件履行完毕后转换为正式永住资格。",
        ],
        faqs: [
          {
            question: "有条件永住权和普通永住权有什么区别？",
            answer: "有条件永住权附有需在一定期限内维持投资的条件。条件履行后将转换为正式永住资格。",
          },
          {
            question: "投资需要维持多久？",
            answer: "5年。如中途取出部分或全部存款，永住资格将被取消。",
          },
        ],
        relatedVisas: [
          { slug: "f-5-5", title: "F-5-5 高额投资者" },
          { slug: "f-5", title: "F-5 永住权概述" },
          { slug: "d-8", title: "D-8 企业投资签证" },
        ],
      },
      ja: {
        slug: "f-5-25",
        title: "F-5-25 条件付き高額投資者",
        subtitle: "30億ウォン以上の投資および5年維持の条件付き永住権",
        overview: "F-5-25条件付き高額投資者永住権は、韓国産業銀行の公益事業投資移民ファンドに30億ウォン以上を預入れし5年以上投資状態を維持することを誓約した外国人に条件付きで永住資格を付与するビザです。維持条件を満たさないと永住資格が取り消される場合があります。",
        targetApplicants: ["韓国に高額投資を計画する外国人", "条件付き永住を通じて韓国定着を希望する投資家", "投資後に永住権取得を目標とする高資産外国人"],
        eligibility: ["韓国産業銀行の公益事業投資移民ファンドに30億ウォン以上を預入れ", "投資金の合法的出所の証明（外貨搬入証憑）", "5年以上の投資維持を誓約", "犯罪歴なし"],
        requiredDocuments: ["永住資格申請書", "パスポートおよび外国人登録証", "投資確認書", "投資金出所証憑", "投資維持約定書", "犯罪経歴証明書", "健康診断書"],
        process: [{ step: 1, title: "投資計画策定", description: "投資金額および対象を決定" }, { step: 2, title: "投資実行", description: "高額投資を実行し確認書を取得" }, { step: 3, title: "永住権申請", description: "出入国管理事務所にF-5-25を申請" }, { step: 4, title: "条件付き永住権発給", description: "審査後条件付き永住資格を付与" }],
        processingTime: "約3〜6ヶ月",
        importantNotes: ["条件付き永住のため投資維持条件を必ず履行する必要があります。", "投資金の回収または大幅な減少時に永住資格が取り消されます。", "条件履行完了後に正式な永住資格に切り替わります。"],
        faqs: [{ question: "条件付きと一般永住権の違いは？", answer: "条件付き永住権は一定期間投資を維持しなければならない条件が付いています。条件履行後に正式な永住資格に切り替わります。" }, { question: "投資維持期間はどのくらいですか？", answer: "5年です。預入れた金額の一部または全部を中途引き出した場合、永住資格が取り消されます。" }],
        relatedVisas: [{ slug: "f-5-5", title: "F-5-5 高額投資者" }, { slug: "f-5", title: "F-5 永住権概要" }, { slug: "d-8", title: "D-8 企業投資ビザ" }],
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
      en: {
        slug: "naturalization",
        title: "Naturalization",
        subtitle: "Process for acquiring Korean citizenship",
        overview: "Naturalization is the process by which a foreigner acquires Korean nationality. Under the Nationality Act, it is divided into general naturalization, simplified naturalization, and special naturalization, each with different requirements. Applicants must meet requirements including 5+ years of domestic residence, financial self-sufficiency, and Korean language proficiency.",
        targetApplicants: ["Foreigners who have resided in Korea for 5+ years (general naturalization)", "Spouses of Korean nationals (simplified naturalization)", "Individuals with special merit or exceptional talent (special naturalization)", "Foreigners with Korean parents"],
        eligibility: ["5+ years of continuous residence in Korea (general naturalization)", "Legal adult under Korean Civil Act", "Good conduct", "Financial self-sufficiency", "Korean language proficiency and understanding of Korean customs"],
        requiredDocuments: ["Naturalization application form", "Passport copy", "Family relationship documents", "Financial documents", "Criminal background check", "Korean proficiency proof (TOPIK, etc.)", "Basic certificate, family relationship certificate", "Residence proof"],
        process: [{ step: 1, title: "Eligibility Check", description: "Review eligibility by naturalization type" }, { step: 2, title: "Document Preparation", description: "Prepare required documents with translations and notarization" }, { step: 3, title: "Submit to MOJ", description: "Submit naturalization application at the immigration office" }, { step: 4, title: "Review", description: "Document review and interview (approx. 6 months to 1 year)" }, { step: 5, title: "Citizenship Acquired", description: "Korean nationality acquired upon naturalization approval" }],
        processingTime: "Approximately 6 months to 1 year",
        importantNotes: ["You must renounce your previous foreign nationality upon naturalization (exceptions for dual nationality exist).", "Simplified naturalization for Korean spouses requires 2+ years of residence after marriage.", "Korean Language and Aptitude Test (KINAT) or KIIP completion is required."],
        faqs: [{ question: "What is the difference between naturalization and nationality recovery?", answer: "Naturalization is for foreigners who never held Korean nationality acquiring it for the first time, while nationality recovery is for people who previously held Korean nationality regaining it." }, { question: "What happens to my foreign nationality after naturalization?", answer: "In principle, you must renounce your foreign nationality. However, in certain cases (such as those aged 65+), dual nationality may be maintained through a pledge of non-exercise of foreign nationality." }, { question: "How long does the process take?", answer: "Generally 6 months to 1 year from submission." }],
        relatedVisas: [{ slug: "nationality-recovery", title: "Nationality Recovery" }, { slug: "f-5", title: "F-5 Permanent Residency" }, { slug: "f-6", title: "F-6 Marriage Visa" }],
      },
      zh: {
        slug: "naturalization",
        title: "归化申请",
        subtitle: "取得大韩民国国籍的程序",
        overview: "归化是指外国人取得大韩民国国籍。根据国籍法分为一般归化、简易归化、特别归化，各自要求不同。需满足在国内居住5年以上、维持生计能力、韩语能力等要求。",
        targetApplicants: ["在韩国居住5年以上的外国人（一般归化）", "韩国人配偶（简易归化）", "有特别功劳者或优秀人才（特别归化）", "有韩国父母的外国人"],
        eligibility: ["在国内连续居住5年以上（一般归化）", "韩国民法规定的成年人", "品行良好", "维持生计能力", "韩语能力及对韩国风俗的了解"],
        requiredDocuments: ["归化许可申请书", "护照复印件", "家庭关系证明材料", "财产相关材料", "无犯罪证明", "韩语能力证明（TOPIK等）", "基本证明书、家庭关系证明书", "居住地证明材料"],
        process: [{ step: 1, title: "资格确认", description: "按归化类型审核资格条件" }, { step: 2, title: "准备材料", description: "准备必要材料并翻译·公证" }, { step: 3, title: "提交法务部", description: "向出入境管理局提交归化许可申请" }, { step: 4, title: "审查", description: "材料审查及面试（约6个月至1年）" }, { step: 5, title: "取得国籍", description: "归化许可后取得国籍" }],
        processingTime: "约6个月至1年",
        importantNotes: ["归化时须放弃原有外国国籍（有双重国籍例外情形）。", "简易归化中韩国人配偶婚后在韩居留2年以上可申请。", "需通过韩语能力考试（KINAT）或完成社会融合项目。"],
        faqs: [{ question: "归化和国籍恢复有什么区别？", answer: "归化是从未拥有韩国国籍的外国人首次取得国籍，国籍恢复是曾经拥有韩国国籍者重新取回国籍。" }, { question: "归化后外国国籍怎么办？", answer: "原则上须放弃外国国籍。但65岁以上等部分情况可通过外国国籍不行使承诺维持双重国籍。" }, { question: "需要多长时间？", answer: "一般从提交到完成约需6个月至1年。" }],
        relatedVisas: [{ slug: "nationality-recovery", title: "国籍恢复" }, { slug: "f-5", title: "F-5 永住权" }, { slug: "f-6", title: "F-6 结婚签证" }],
      },
      ja: {
        slug: "naturalization",
        title: "帰化申請",
        subtitle: "大韓民国の国籍を取得する手続き",
        overview: "帰化とは、外国人が大韓民国の国籍を取得することです。国籍法に基づき一般帰化、簡易帰化、特別帰化に分かれ、それぞれ要件が異なります。5年以上の国内滞在、生計能力、韓国語能力等の要件を満たす必要があります。",
        targetApplicants: ["韓国に5年以上滞在した外国人（一般帰化）", "韓国人配偶者（簡易帰化）", "特別功労者または優秀人材（特別帰化）", "韓国人の親を持つ外国人"],
        eligibility: ["国内5年以上の継続居住（一般帰化）", "韓国民法上の成年", "品行方正", "生計維持能力", "韓国語能力および韓国の風習に対する理解"],
        requiredDocuments: ["帰化許可申請書", "パスポートコピー", "家族関係立証書類", "財産関連書類", "犯罪経歴証明書", "韓国語能力立証書類（TOPIK等）", "基本証明書、家族関係証明書", "滞在地立証書類"],
        process: [{ step: 1, title: "資格確認", description: "帰化類型別の資格要件を検討" }, { step: 2, title: "書類準備", description: "必須書類の準備および翻訳・公証" }, { step: 3, title: "法務部受付", description: "出入国管理事務所に帰化許可を申請" }, { step: 4, title: "審査", description: "書類審査および面接（約6ヶ月〜1年）" }, { step: 5, title: "国籍取得", description: "帰化許可後に国籍を取得" }],
        processingTime: "約6ヶ月〜1年",
        importantNotes: ["帰化時に既存の外国国籍を放棄する必要があります（複数国籍の例外あり）。", "簡易帰化は韓国人配偶者の場合、婚姻後2年以上韓国に滞在すれば申請可能です。", "韓国語能力試験（KINAT）または社会統合プログラムの修了が必要です。"],
        faqs: [{ question: "帰化と国籍回復の違いは？", answer: "帰化は韓国国籍を持ったことのない外国人が新たに国籍を取得するもので、国籍回復は過去に韓国国籍を保有していた人が国籍を取り戻すものです。" }, { question: "帰化後に外国国籍はどうなりますか？", answer: "原則として外国国籍を放棄する必要がありますが、65歳以上等の一部の場合は外国国籍不行使誓約により複数国籍の維持が可能です。" }, { question: "所要期間はどのくらいですか？", answer: "一般的に受付後6ヶ月〜1年かかります。" }],
        relatedVisas: [{ slug: "nationality-recovery", title: "国籍回復" }, { slug: "f-5", title: "F-5 永住権" }, { slug: "f-6", title: "F-6 結婚ビザ" }],
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
      en: {
        slug: "nationality-recovery",
        title: "Nationality Recovery",
        subtitle: "Process for regaining Korean citizenship",
        overview: "Nationality recovery is a system that allows individuals who previously held Korean nationality but lost it upon acquiring foreign citizenship to reacquire Korean nationality. For those aged 65 or older, a special provision allows dual nationality by simply pledging non-exercise of foreign nationality.",
        targetApplicants: ["Former Korean nationals who now hold foreign citizenship", "Individuals who have completed nationality loss notification", "Those aged 65+ seeking dual nationality", "Korean-born adoptees raised overseas"],
        eligibility: ["Proof of previously holding Korean nationality", "Good conduct", "Financial self-sufficiency", "Korean language proficiency and basic civic knowledge", "Nationality loss notification completed"],
        requiredDocuments: ["Nationality recovery application form", "Passport (original and copy)", "Family relationship certificate (detailed)", "Basic certificate (detailed)", "Nationality loss proof documents", "Criminal background check (apostille)", "Financial proof documents", "1 photo"],
        process: [{ step: 1, title: "Document Preparation", description: "Prepare required documents (apostille needed for overseas documents)" }, { step: 2, title: "Visit Authority", description: "Submit at the Immigration & Foreign Affairs Office" }, { step: 3, title: "MOJ Review", description: "Document and requirements review (6 months to 1 year)" }, { step: 4, title: "Recovery Approval", description: "Published in the Official Gazette" }, { step: 5, title: "Foreign Nationality Processing", description: "Age 65+: pledge of non-exercise / Under 65: renounce foreign nationality" }],
        processingTime: "Approximately 6 months to 1 year",
        importantNotes: ["Those aged 65+ can maintain dual nationality through a pledge of non-exercise of foreign nationality.", "After nationality recovery, resident registration and Korean passport issuance become available.", "Males who lost nationality to evade military service may face restrictions."],
        faqs: [{ question: "Do I need to give up my foreign nationality if I am 65 or older?", answer: "No. Those aged 65+ can maintain both Korean and foreign nationality by making a 'pledge of non-exercise of foreign nationality.'" }, { question: "How long does the review process take?", answer: "Typically 6 months to 1 year." }, { question: "What happens to my F-4 visa after nationality recovery?", answer: "Since you acquire Korean nationality, the F-4 visa expires. After resident registration, you can obtain a Korean passport." }],
        relatedVisas: [{ slug: "naturalization", title: "Naturalization" }, { slug: "f-5", title: "F-5 Permanent Residency" }, { slug: "f-4", title: "F-4 Overseas Korean Visa" }],
      },
      zh: {
        slug: "nationality-recovery",
        title: "国籍恢复",
        subtitle: "恢复大韩民国国籍的程序",
        overview: "国籍恢复是指曾经拥有大韩民国国籍但因取得外国国籍而丧失韩国国籍的人，重新取得大韩民国国籍的制度。65岁以上者可通过外国国籍不行使承诺维持双重国籍的特例。",
        targetApplicants: ["曾经拥有大韩民国国籍的外国人", "已完成国籍丧失申报者", "65岁以上希望拥有双重国籍者", "海外被收养的韩裔"],
        eligibility: ["证明曾拥有大韩民国国籍", "品行良好", "维持生计能力", "韩语能力及基本素养", "已完成国籍丧失申报"],
        requiredDocuments: ["国籍恢复许可申请书", "护照原件及复印件", "家庭关系证明书（详细）", "基本证明书（详细）", "国籍丧失证明材料", "无犯罪证明（海牙认证）", "财产证明材料", "照片1张"],
        process: [{ step: 1, title: "准备材料", description: "准备必要材料（海外材料需海牙认证）" }, { step: 2, title: "前往管辖机构", description: "向出入境·外国人厅提交" }, { step: 3, title: "法务部审查", description: "材料及条件审查（6个月至1年）" }, { step: 4, title: "国籍恢复许可", description: "官报公告" }, { step: 5, title: "外国国籍处理", description: "65岁以上：不行使承诺 / 65岁以下：放弃外国国籍" }],
        processingTime: "约6个月至1年",
        importantNotes: ["65岁以上可通过外国国籍不行使承诺维持双重国籍。", "国籍恢复后可办理居民登记和韩国护照。", "为逃避兵役而丧失国籍的男性可能受到限制。"],
        faqs: [{ question: "65岁以上需要放弃外国国籍吗？", answer: "不需要。65岁以上者仅通过「外国国籍不行使承诺」即可同时保留韩国国籍和外国国籍。" }, { question: "审查需要多长时间？", answer: "一般需要6个月至1年。" }, { question: "国籍恢复后F-4签证怎么办？", answer: "因取得韩国国籍，F-4签证将失效。完成居民登记后可领取韩国护照。" }],
        relatedVisas: [{ slug: "naturalization", title: "归化申请" }, { slug: "f-5", title: "F-5 永住权" }, { slug: "f-4", title: "F-4 居住证" }],
      },
      ja: {
        slug: "nationality-recovery",
        title: "国籍回復",
        subtitle: "大韓民国の国籍を取り戻す手続き",
        overview: "国籍回復は、かつて大韓民国の国籍を保有していたが外国国籍を取得して韓国国籍を喪失した人が再び大韓民国の国籍を取得する制度です。65歳以上の場合は外国国籍不行使誓約のみで複数国籍を維持できる特例が適用されます。",
        targetApplicants: ["かつて大韓民国の国籍を保有していた外国人", "国籍喪失届を完了した者", "65歳以上で複数国籍を希望する者", "海外養子出身の韓国系"],
        eligibility: ["過去に大韓民国の国籍を保有していた事実の立証", "品行方正", "生計維持能力", "韓国語能力および基本素養", "国籍喪失届の完了"],
        requiredDocuments: ["国籍回復許可申請書", "パスポート原本およびコピー", "家族関係証明書（詳細）", "基本証明書（詳細）", "国籍喪失立証書類", "犯罪経歴証明書（アポスティーユ）", "財産立証書類", "写真1枚"],
        process: [{ step: 1, title: "書類準備", description: "必要書類の準備（海外書類はアポスティーユが必要）" }, { step: 2, title: "管轄機関訪問", description: "出入国・外国人庁に受付" }, { step: 3, title: "法務部審査", description: "書類および要件の審査（6ヶ月〜1年）" }, { step: 4, title: "国籍回復許可", description: "官報告示" }, { step: 5, title: "外国国籍の処理", description: "65歳以上：不行使誓約 / 65歳未満：外国国籍の放棄" }],
        processingTime: "約6ヶ月〜1年",
        importantNotes: ["65歳以上は外国国籍不行使誓約により複数国籍の維持が可能です。", "国籍回復後は住民登録および大韓民国パスポートの発給が可能です。", "兵役を回避する目的で国籍を喪失した男性は制限される場合があります。"],
        faqs: [{ question: "65歳以上は外国国籍を放棄しなければなりませんか？", answer: "いいえ。65歳以上は「外国国籍不行使誓約」のみで韓国国籍と外国国籍の両方を維持できます。" }, { question: "審査期間はどのくらいかかりますか？", answer: "通常6ヶ月〜1年かかります。" }, { question: "国籍回復後にF-4ビザはどうなりますか？", answer: "韓国国籍を取得するためF-4ビザは消滅し、住民登録後に大韓民国パスポートを発給されます。" }],
        relatedVisas: [{ slug: "naturalization", title: "帰化申請" }, { slug: "f-5", title: "F-5 永住権" }, { slug: "f-4", title: "F-4 居住証" }],
      },
    },
    "d-7": {
      ko: {
        slug: "d-7",
        title: "D-7 주재원비자",
        subtitle: "해외 본사에서 한국 지사로 파견되는 주재원을 위한 비자",
        overview:
          "D-7 주재원비자는 해외에 본사를 둔 기업이 한국 내 지사, 자회사, 또는 연락사무소에 직원을 파견할 때 필요한 체류자격입니다. 파견 직원은 본사에서 1년 이상 근무한 경력이 있어야 하며, 한국 지사에서 경영·관리·전문기술 업무를 수행하게 됩니다. 주재기간은 통상 1~3년이며, 연장이 가능합니다.",
        targetApplicants: [
          "해외 본사에서 한국 지사/자회사로 파견되는 직원",
          "한국 내 연락사무소에 주재하는 외국인",
          "해외 본사 1년 이상 근무 경력 보유자",
          "경영·관리·전문기술 분야 주재 파견자",
        ],
        eligibility: [
          "해외 본사에서 1년 이상 근무한 경력",
          "한국 내 지사, 자회사, 또는 연락사무소가 설립되어 있을 것",
          "파견 업무가 경영·관리·전문기술 분야에 해당",
          "범죄경력 및 입국금지 이력 없음",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "파견명령서 또는 주재원 발령장",
          "해외 본사 사업자등록증 및 회사 개요",
          "한국 지사/자회사 법인등기부등본",
          "한국 지사/자회사 사업자등록증",
          "본사 1년 이상 재직증명서",
          "경력증명서",
          "최종학력증명서",
        ],
        process: [
          {
            step: 1,
            title: "본사 파견 결정",
            description: "해외 본사에서 한국 주재원 파견을 결정하고 파견명령서 발급",
          },
          {
            step: 2,
            title: "서류 준비",
            description: "본사 및 한국 지사 관련 서류 준비 (해외 서류 공증/아포스티유)",
          },
          {
            step: 3,
            title: "비자 신청",
            description: "재외공관 또는 출입국관리사무소에 D-7 비자 신청",
          },
          {
            step: 4,
            title: "비자 발급",
            description: "심사 완료 후 비자 발급 및 입국",
          },
        ],
        processingTime: "약 2~4주",
        importantNotes: [
          "본사에서 1년 이상 근무 경력이 필수입니다.",
          "한국 지사가 설립되어 있지 않으면 먼저 법인 설립 절차를 진행해야 합니다.",
          "주재 기간 만료 시 연장 신청이 가능하며, 체류자격 변경도 검토할 수 있습니다.",
        ],
        faqs: [
          {
            question: "본사 근무 경력이 1년 미만이면 신청할 수 없나요?",
            answer:
              "원칙적으로 1년 이상 근무 경력이 필요합니다. 다만, 전문성이 인정되는 경우 예외적으로 허가될 수 있으므로 개별 상담이 필요합니다.",
          },
          {
            question: "D-7 비자로 다른 회사에서 일할 수 있나요?",
            answer:
              "D-7 비자는 파견된 한국 지사/자회사에서만 근무할 수 있습니다. 다른 회사에서 근무하려면 체류자격 변경이 필요합니다.",
          },
          {
            question: "가족도 함께 올 수 있나요?",
            answer:
              "네, 배우자와 미성년 자녀는 F-3(동반) 비자를 신청하여 함께 입국할 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 기업투자비자" },
          { slug: "e-7", title: "E-7 특정활동비자" },
          { slug: "f-5", title: "F-5 영주권" },
        ],
      },
      en: {
        slug: "d-7",
        title: "D-7 Intra-company Transfer Visa",
        subtitle: "Visa for employees dispatched from an overseas headquarters to a Korean branch",
        overview:
          "The D-7 Intra-company Transfer Visa is required when an overseas-headquartered company dispatches employees to a branch, subsidiary, or liaison office in Korea. Dispatched employees must have at least 1 year of work experience at the headquarters and will perform management, administrative, or specialized technical duties at the Korean branch. The typical assignment period is 1-3 years, with extensions available.",
        targetApplicants: [
          "Employees dispatched from overseas headquarters to a Korean branch or subsidiary",
          "Foreigners stationed at a liaison office in Korea",
          "Individuals with 1+ year of work experience at overseas headquarters",
          "Assignees in management, administration, or specialized technical roles",
        ],
        eligibility: [
          "1+ year of work experience at the overseas headquarters",
          "A branch, subsidiary, or liaison office established in Korea",
          "Assignment duties in management, administration, or specialized technical fields",
          "No criminal record or entry ban history",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Dispatch order or assignment letter",
          "Overseas headquarters business registration and company profile",
          "Korean branch/subsidiary corporate registry",
          "Korean branch/subsidiary business registration certificate",
          "Employment certificate confirming 1+ year at headquarters",
          "Career certificate",
          "Degree certificate",
        ],
        process: [
          {
            step: 1,
            title: "Dispatch Decision",
            description: "Overseas headquarters decides on Korean assignment and issues dispatch order",
          },
          {
            step: 2,
            title: "Document Preparation",
            description: "Prepare headquarters and Korean branch documents (notarize/apostille overseas documents)",
          },
          {
            step: 3,
            title: "Visa Application",
            description: "Apply for D-7 visa at a Korean embassy/consulate or immigration office",
          },
          {
            step: 4,
            title: "Visa Issuance",
            description: "Visa issued after review and entry into Korea",
          },
        ],
        processingTime: "Approximately 2-4 weeks",
        importantNotes: [
          "1+ year of work experience at the headquarters is mandatory.",
          "If the Korean branch has not been established, the company incorporation process must be completed first.",
          "Extensions can be applied for when the assignment period expires, and visa status changes can also be considered.",
        ],
        faqs: [
          {
            question: "Can I apply if I have less than 1 year of experience at headquarters?",
            answer:
              "In principle, 1+ year of experience is required. However, exceptions may be granted for recognized expertise, so individual consultation is recommended.",
          },
          {
            question: "Can I work at a different company with a D-7 visa?",
            answer:
              "A D-7 visa only permits work at the assigned Korean branch or subsidiary. Working at another company requires a change of residence status.",
          },
          {
            question: "Can my family come with me?",
            answer:
              "Yes, your spouse and minor children can apply for an F-3 (dependent) visa to enter Korea together.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 Corporate Investment Visa" },
          { slug: "e-7", title: "E-7 Special Activities Visa" },
          { slug: "f-5", title: "F-5 Permanent Residency" },
        ],
      },
      zh: {
        slug: "d-7",
        title: "D-7 驻在员签证",
        subtitle: "从海外总部派遣至韩国分公司的驻在员签证",
        overview:
          "D-7驻在员签证是海外总部企业向韩国分公司、子公司或联络处派遣员工时所需的居留资格。被派遣员工须在总部工作1年以上，在韩国分公司从事经营·管理·专业技术工作。驻在期限通常为1-3年，可延长。",
        targetApplicants: [
          "从海外总部派遣至韩国分公司/子公司的员工",
          "驻韩联络处的外国人",
          "在海外总部工作1年以上者",
          "经营·管理·专业技术领域的驻在派遣人员",
        ],
        eligibility: [
          "在海外总部工作1年以上的经历",
          "韩国已设立分公司、子公司或联络处",
          "派遣业务属于经营·管理·专业技术领域",
          "无犯罪记录及入境禁止历史",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "派遣令或驻在员委任状",
          "海外总部营业执照及公司简介",
          "韩国分公司/子公司法人登记簿誊本",
          "韩国分公司/子公司营业执照",
          "总部1年以上在职证明",
          "工作经历证明",
          "最终学历证明",
        ],
        process: [
          {
            step: 1,
            title: "总部派遣决定",
            description: "海外总部决定派遣韩国驻在员并签发派遣令",
          },
          {
            step: 2,
            title: "准备材料",
            description: "准备总部及韩国分公司相关材料（海外材料需公证/海牙认证）",
          },
          {
            step: 3,
            title: "签证申请",
            description: "在驻外使领馆或出入境管理局申请D-7签证",
          },
          {
            step: 4,
            title: "签证签发",
            description: "审核完成后签发签证并入境",
          },
        ],
        processingTime: "约2-4周",
        importantNotes: [
          "在总部工作1年以上的经历为必要条件。",
          "如韩国分公司尚未设立，需先完成法人设立手续。",
          "驻在期限届满时可申请延长，也可考虑变更居留资格。",
        ],
        faqs: [
          {
            question: "总部工作经历不满1年可以申请吗？",
            answer:
              "原则上需要1年以上工作经历。但如被认定具有专业性，可能例外批准，需进行个别咨询。",
          },
          {
            question: "D-7签证可以在其他公司工作吗？",
            answer:
              "D-7签证只能在被派遣的韩国分公司/子公司工作。在其他公司工作需要变更居留资格。",
          },
          {
            question: "家人也可以一起来吗？",
            answer:
              "可以，配偶和未成年子女可申请F-3（随行）签证一同入境。",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 企业投资签证" },
          { slug: "e-7", title: "E-7 特定活动签证" },
          { slug: "f-5", title: "F-5 永住权" },
        ],
      },
      ja: {
        slug: "d-7",
        title: "D-7 駐在員ビザ",
        subtitle: "海外本社から韓国支社に派遣される駐在員のためのビザ",
        overview: "D-7駐在員ビザは、海外に本社を置く企業が韓国内の支社、子会社、または連絡事務所に社員を派遣する際に必要な在留資格です。派遣社員は本社で1年以上の勤務経歴が必要で、韓国支社で経営・管理・専門技術業務を行います。駐在期間は通常1〜3年で、延長が可能です。",
        targetApplicants: ["海外本社から韓国支社/子会社に派遣される社員", "韓国内の連絡事務所に駐在する外国人", "海外本社で1年以上の勤務経歴保有者", "経営・管理・専門技術分野の駐在派遣者"],
        eligibility: ["海外本社で1年以上の勤務経歴", "韓国内に支社、子会社、または連絡事務所が設立されていること", "派遣業務が経営・管理・専門技術分野に該当", "犯罪歴および入国禁止履歴がないこと"],
        requiredDocuments: ["ビザ申請書", "パスポートコピー", "証明写真（3.5x4.5cm）", "派遣命令書または駐在員発令状", "海外本社の事業者登録証および会社概要", "韓国支社/子会社の法人登記簿謄本", "韓国支社/子会社の事業者登録証", "本社1年以上の在職証明書", "経歴証明書", "最終学歴証明書"],
        process: [{ step: 1, title: "本社の派遣決定", description: "海外本社が韓国駐在員の派遣を決定し派遣命令書を発行" }, { step: 2, title: "書類準備", description: "本社および韓国支社関連書類を準備（海外書類の公証/アポスティーユ）" }, { step: 3, title: "ビザ申請", description: "在外公館または出入国管理事務所にD-7ビザを申請" }, { step: 4, title: "ビザ発給", description: "審査完了後ビザ発給および入国" }],
        processingTime: "約2〜4週間",
        importantNotes: ["本社で1年以上の勤務経歴が必須です。", "韓国支社が設立されていない場合は先に法人設立手続きを行う必要があります。", "駐在期間満了時に延長申請が可能で、在留資格変更も検討できます。"],
        faqs: [{ question: "本社勤務経歴が1年未満でも申請できますか？", answer: "原則として1年以上の勤務経歴が必要です。ただし専門性が認められる場合は例外的に許可されることがあるため個別相談が必要です。" }, { question: "D-7ビザで他の会社で働けますか？", answer: "D-7ビザは派遣された韓国支社/子会社でのみ勤務できます。他の会社で勤務するには在留資格変更が必要です。" }, { question: "家族も一緒に来られますか？", answer: "はい、配偶者と未成年の子女はF-3（同伴）ビザを申請して一緒に入国できます。" }],
        relatedVisas: [{ slug: "d-8", title: "D-8 企業投資ビザ" }, { slug: "e-7", title: "E-7 特定活動ビザ" }, { slug: "f-5", title: "F-5 永住権" }],
      },
    },
    "e-7": {
      ko: {
        slug: "e-7",
        title: "E-7 특정활동비자",
        subtitle: "전문 지식·기술·기능을 가진 외국인의 한국 취업을 위한 비자",
        overview:
          "E-7 특정활동비자는 대한민국에서 전문적인 지식, 기술 또는 기능을 활용하여 취업하려는 외국인에게 부여되는 체류자격입니다. 91개 전문 직종에 해당하며, 고용주(한국 기업)가 고용추천서를 발급받아야 합니다. IT, 엔지니어링, 경영, 통번역, 디자인 등 다양한 전문 분야에서 활용됩니다.",
        targetApplicants: [
          "한국 기업에 전문직으로 취업하려는 외국인",
          "IT·소프트웨어·엔지니어링 분야 전문가",
          "통번역·경영·디자인·무역 등 전문 인력",
          "91개 특정활동 직종에 해당하는 전문가",
        ],
        eligibility: [
          "91개 특정활동 직종 중 해당 직종에 부합",
          "관련 분야 학사 이상 학위 또는 동등한 경력",
          "한국 기업과의 고용계약 체결",
          "고용주가 고용추천서를 발급받을 것",
          "범죄경력 및 입국금지 이력 없음",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 사본",
          "증명사진 (3.5x4.5cm)",
          "고용계약서",
          "고용추천서 (고용주가 발급)",
          "최종학력증명서 (아포스티유)",
          "경력증명서",
          "자격증 사본 (해당 시)",
          "회사 사업자등록증",
          "회사 재무제표",
        ],
        process: [
          {
            step: 1,
            title: "고용 계약",
            description: "한국 기업과 고용계약을 체결하고 직종 확인",
          },
          {
            step: 2,
            title: "고용추천서 발급",
            description: "고용주가 관할 출입국관리사무소에서 고용추천서 발급",
          },
          {
            step: 3,
            title: "비자 신청",
            description: "재외공관 또는 출입국관리사무소에 E-7 비자 신청",
          },
          {
            step: 4,
            title: "비자 발급",
            description: "심사 완료 후 비자 발급 및 근무 개시",
          },
        ],
        processingTime: "약 2~4주 (고용추천서 발급 별도 1~2주)",
        importantNotes: [
          "고용추천서는 고용주(한국 기업)가 신청해야 하며, 외국인 본인이 직접 신청할 수 없습니다.",
          "91개 직종 목록은 법무부 고시로 변경될 수 있으므로, 최신 목록을 확인해야 합니다.",
          "직장을 변경할 경우 새 고용주의 고용추천서를 받아 체류자격 변경/연장 신청이 필요합니다.",
        ],
        faqs: [
          {
            question: "E-7 비자로 어떤 직종에서 일할 수 있나요?",
            answer:
              "법무부가 지정한 91개 전문 직종(IT, 엔지니어링, 경영, 통번역, 디자인, 무역, 조선, 기계 등)에서 일할 수 있습니다. 정확한 직종 목록은 법무부 고시를 확인하시기 바랍니다.",
          },
          {
            question: "학위 없이도 E-7 비자를 받을 수 있나요?",
            answer:
              "직종에 따라 학사 학위 대신 관련 분야 일정 기간의 경력으로 대체할 수 있는 경우가 있습니다. 구체적인 요건은 직종별로 다르므로 개별 상담이 필요합니다.",
          },
          {
            question: "E-7에서 영주권(F-5)으로 전환할 수 있나요?",
            answer:
              "네, E-7 비자로 일정 기간 이상 체류하고 소득 요건 등을 충족하면 점수제 영주권(F-5-16) 등을 통해 영주권을 신청할 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 기업투자비자" },
          { slug: "d-7", title: "D-7 주재원비자" },
          { slug: "f-2-points", title: "F-2 점수제비자" },
        ],
      },
      en: {
        slug: "e-7",
        title: "E-7 Special Activities Visa",
        subtitle: "Work visa for foreigners with specialized knowledge, skills, or expertise",
        overview:
          "The E-7 Special Activities Visa is granted to foreigners who wish to work in Korea utilizing their professional knowledge, skills, or expertise. It covers 91 designated professional occupations, and the employer (Korean company) must obtain an employment recommendation letter. It is used across various professional fields including IT, engineering, management, translation/interpretation, and design.",
        targetApplicants: [
          "Foreigners seeking professional employment with Korean companies",
          "IT, software, and engineering specialists",
          "Translation/interpretation, management, design, and trade professionals",
          "Experts in any of the 91 designated special activities occupations",
        ],
        eligibility: [
          "Qualify for one of the 91 designated special activities occupations",
          "Bachelor's degree or higher in a related field, or equivalent work experience",
          "Employment contract with a Korean company",
          "Employer must obtain an employment recommendation letter",
          "No criminal record or entry ban history",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport copy",
          "Photo (3.5x4.5cm)",
          "Employment contract",
          "Employment recommendation letter (obtained by employer)",
          "Degree certificate (apostille)",
          "Career certificate",
          "Professional certification copy (if applicable)",
          "Company business registration certificate",
          "Company financial statements",
        ],
        process: [
          {
            step: 1,
            title: "Employment Contract",
            description: "Sign employment contract with a Korean company and confirm the occupation category",
          },
          {
            step: 2,
            title: "Employment Recommendation",
            description: "Employer obtains employment recommendation letter from the local immigration office",
          },
          {
            step: 3,
            title: "Visa Application",
            description: "Apply for E-7 visa at a Korean embassy/consulate or immigration office",
          },
          {
            step: 4,
            title: "Visa Issuance",
            description: "Visa issued after review and work commences",
          },
        ],
        processingTime: "Approximately 2-4 weeks (employment recommendation takes an additional 1-2 weeks)",
        importantNotes: [
          "The employment recommendation letter must be applied for by the employer (Korean company); the foreign applicant cannot apply directly.",
          "The list of 91 occupations may be updated through Ministry of Justice announcements, so always check the latest list.",
          "When changing jobs, a new employment recommendation from the new employer is required along with a status change/extension application.",
        ],
        faqs: [
          {
            question: "What types of jobs can I work with an E-7 visa?",
            answer:
              "You can work in 91 designated professional occupations (IT, engineering, management, translation/interpretation, design, trade, shipbuilding, machinery, etc.). Please check the Ministry of Justice announcements for the exact list.",
          },
          {
            question: "Can I get an E-7 visa without a degree?",
            answer:
              "Depending on the occupation, a certain period of relevant work experience may substitute for a bachelor's degree. Requirements vary by occupation, so individual consultation is recommended.",
          },
          {
            question: "Can I transition from E-7 to permanent residency (F-5)?",
            answer:
              "Yes, after residing for a certain period on an E-7 visa and meeting income requirements, you can apply for permanent residency through the points-based system (F-5-16) or other pathways.",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 Corporate Investment Visa" },
          { slug: "d-7", title: "D-7 Intra-company Transfer Visa" },
          { slug: "f-2-points", title: "F-2 Points-based Visa" },
        ],
      },
      zh: {
        slug: "e-7",
        title: "E-7 特定活动签证",
        subtitle: "具有专业知识·技术·技能的外国人在韩就业签证",
        overview:
          "E-7特定活动签证授予希望在韩国利用专业知识、技术或技能就业的外国人。涵盖91个指定专业职种，雇主（韩国企业）须取得雇佣推荐书。广泛应用于IT、工程、经营、口笔译、设计等多个专业领域。",
        targetApplicants: [
          "希望在韩国企业从事专业工作的外国人",
          "IT·软件·工程领域专家",
          "口笔译·经营·设计·贸易等专业人才",
          "属于91个特定活动职种的专家",
        ],
        eligibility: [
          "属于91个特定活动职种之一",
          "相关领域学士以上学位或同等工作经历",
          "与韩国企业签订劳动合同",
          "雇主须取得雇佣推荐书",
          "无犯罪记录及入境禁止历史",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照复印件",
          "证件照（3.5x4.5cm）",
          "劳动合同",
          "雇佣推荐书（由雇主取得）",
          "最终学历证明（海牙认证）",
          "工作经历证明",
          "资格证复印件（如适用）",
          "公司营业执照",
          "公司财务报表",
        ],
        process: [
          {
            step: 1,
            title: "签订劳动合同",
            description: "与韩国企业签订劳动合同并确认职种类别",
          },
          {
            step: 2,
            title: "取得雇佣推荐书",
            description: "雇主在管辖出入境管理局取得雇佣推荐书",
          },
          {
            step: 3,
            title: "签证申请",
            description: "在驻外使领馆或出入境管理局申请E-7签证",
          },
          {
            step: 4,
            title: "签证签发",
            description: "审核完成后签发签证并开始工作",
          },
        ],
        processingTime: "约2-4周（雇佣推荐书另需1-2周）",
        importantNotes: [
          "雇佣推荐书须由雇主（韩国企业）申请，外国人本人不能直接申请。",
          "91个职种目录可能因法务部公告而变更，须确认最新目录。",
          "换工作时需要新雇主的雇佣推荐书，并申请居留资格变更/延长。",
        ],
        faqs: [
          {
            question: "E-7签证可以从事哪些职种？",
            answer:
              "可在法务部指定的91个专业职种（IT、工程、经营、口笔译、设计、贸易、造船、机械等）中工作。准确的职种目录请查阅法务部公告。",
          },
          {
            question: "没有学位也能获得E-7签证吗？",
            answer:
              "部分职种可以用相关领域一定期限的工作经历替代学士学位。具体要求因职种而异，需进行个别咨询。",
          },
          {
            question: "E-7可以转换为永住权（F-5）吗？",
            answer:
              "可以，以E-7签证居留一定期限以上并满足收入要求等条件，可通过积分制永住权（F-5-16）等途径申请永住权。",
          },
        ],
        relatedVisas: [
          { slug: "d-8", title: "D-8 企业投资签证" },
          { slug: "d-7", title: "D-7 驻在员签证" },
          { slug: "f-2-points", title: "F-2 积分制签证" },
        ],
      },
      ja: {
        slug: "e-7",
        title: "E-7 特定活動ビザ",
        subtitle: "専門知識・技術・技能を持つ外国人の韓国就労のためのビザ",
        overview: "E-7特定活動ビザは、大韓民国で専門的な知識、技術または技能を活用して就労する外国人に付与される在留資格です。91の専門職種に該当し、雇用主（韓国企業）が雇用推薦書を取得する必要があります。IT、エンジニアリング、経営、通訳翻訳、デザイン等の多様な専門分野で活用されています。",
        targetApplicants: ["韓国企業に専門職として就職する外国人", "IT・ソフトウェア・エンジニアリング分野の専門家", "通訳翻訳・経営・デザイン・貿易等の専門人材", "91の特定活動職種に該当する専門家"],
        eligibility: ["91の特定活動職種のいずれかに該当", "関連分野の学士以上の学位または同等の経歴", "韓国企業との雇用契約の締結", "雇用主が雇用推薦書を取得すること", "犯罪歴および入国禁止履歴がないこと"],
        requiredDocuments: ["ビザ申請書", "パスポートコピー", "証明写真（3.5x4.5cm）", "雇用契約書", "雇用推薦書（雇用主が取得）", "最終学歴証明書（アポスティーユ）", "経歴証明書", "資格証コピー（該当時）", "会社の事業者登録証", "会社の財務諸表"],
        process: [{ step: 1, title: "雇用契約", description: "韓国企業と雇用契約を締結し職種を確認" }, { step: 2, title: "雇用推薦書の取得", description: "雇用主が管轄出入国管理事務所で雇用推薦書を取得" }, { step: 3, title: "ビザ申請", description: "在外公館または出入国管理事務所にE-7ビザを申請" }, { step: 4, title: "ビザ発給", description: "審査完了後ビザ発給および勤務開始" }],
        processingTime: "約2〜4週間（雇用推薦書の取得に別途1〜2週間）",
        importantNotes: ["雇用推薦書は雇用主（韓国企業）が申請する必要があり、外国人本人が直接申請することはできません。", "91職種のリストは法務部の告示により変更される場合があるため、最新リストを確認する必要があります。", "転職する場合は新しい雇用主の雇用推薦書を取得して在留資格変更/延長申請が必要です。"],
        faqs: [{ question: "E-7ビザでどのような職種で働けますか？", answer: "法務部が指定した91の専門職種（IT、エンジニアリング、経営、通訳翻訳、デザイン、貿易、造船、機械等）で働くことができます。正確な職種リストは法務部の告示をご確認ください。" }, { question: "学位なしでもE-7ビザを取得できますか？", answer: "職種によっては学士学位の代わりに関連分野の一定期間の経歴で代替できる場合があります。具体的な要件は職種により異なるため個別相談が必要です。" }, { question: "E-7から永住権（F-5）への切り替えは可能ですか？", answer: "はい、E-7ビザで一定期間以上滞在し所得要件等を満たせば、ポイント制永住権（F-5-16）等を通じて永住権を申請できます。" }],
        relatedVisas: [{ slug: "d-8", title: "D-8 企業投資ビザ" }, { slug: "d-7", title: "D-7 駐在員ビザ" }, { slug: "f-2-points", title: "F-2 ポイント制ビザ" }],
      },
    },
    "f-4": {
      ko: {
        slug: "f-4",
        title: "F-4 재외동포비자 (거소증)",
        subtitle: "외국 국적 재외동포를 위한 장기 체류 자격",
        overview:
          "F-4 재외동포비자는 외국 국적을 가진 재외동포에게 부여되는 장기 체류 자격입니다. 최대 3년까지 체류할 수 있으며, 만료 시 갱신이 가능합니다. 거소증을 발급받으면 은행 계좌 개설, 휴대폰 가입, 부동산 거래 등 국내 생활에 필요한 다양한 서비스를 이용할 수 있어 실질적으로 내국인에 준하는 경제활동이 가능합니다.",
        targetApplicants: [
          "외국 국적을 가진 재외동포 (한국계 외국인)",
          "대한민국 국적을 보유했다가 외국 국적을 취득한 자",
          "부모 또는 조부모가 대한민국 국적이었던 외국인",
          "해외 입양 출신 한국계 외국인",
        ],
        eligibility: [
          "재외동포 요건 충족 (대한민국 국적 보유 이력 또는 혈통 증명)",
          "외국 국적 보유",
          "범죄경력 없음",
          "대한민국 국적 이탈/상실 입증 가능",
        ],
        requiredDocuments: [
          "비자발급신청서",
          "여권 원본 및 사본",
          "증명사진 (3.5x4.5cm)",
          "재외동포 입증 서류 (가족관계증명서, 제적등본 등)",
          "국적 이탈/상실 증명 서류",
          "본국 신분증 사본",
          "범죄경력증명서 (아포스티유)",
          "거소증 발급 신청서 (입국 후)",
        ],
        process: [
          {
            step: 1,
            title: "자격 확인",
            description: "재외동포 요건 해당 여부 확인 (혈통, 국적 이력 등)",
          },
          {
            step: 2,
            title: "서류 준비",
            description: "재외동포 입증 서류 및 필수 서류 준비 (해외 서류 공증/아포스티유)",
          },
          {
            step: 3,
            title: "비자 신청",
            description: "재외공관 또는 출입국관리사무소에 F-4 비자 신청",
          },
          {
            step: 4,
            title: "거소증 발급",
            description: "입국 후 출입국관리사무소에서 국내거소증 발급",
          },
        ],
        processingTime: "약 2~4주",
        importantNotes: [
          "거소증을 발급받으면 은행 계좌, 휴대폰, 부동산 거래 등이 가능합니다.",
          "최대 3년 체류 가능하며, 만료 전 갱신 신청을 해야 합니다.",
          "단순노무 업종에서의 취업은 제한될 수 있습니다.",
        ],
        faqs: [
          {
            question: "F-4 거소증으로 취업할 수 있나요?",
            answer:
              "네, 대부분의 업종에서 자유롭게 취업이 가능합니다. 다만, 단순노무 분야 등 일부 업종은 제한될 수 있습니다.",
          },
          {
            question: "거소증과 외국인등록증의 차이는 무엇인가요?",
            answer:
              "거소증은 재외동포(F-4)에게 발급되며, 은행·부동산·통신 등에서 주민등록번호처럼 활용됩니다. 외국인등록증은 일반 외국인 체류자에게 발급됩니다.",
          },
          {
            question: "F-4에서 영주권(F-5)으로 전환할 수 있나요?",
            answer:
              "네, F-4 비자로 2년 이상 체류하고 일정 요건을 충족하면 F-5 영주권을 신청할 수 있습니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 영주권" },
          { slug: "f-2-7", title: "F-2-7 거주비자" },
          { slug: "f-6", title: "F-6 결혼비자" },
        ],
      },
      en: {
        slug: "f-4",
        title: "F-4 Overseas Korean Visa (Domestic Residence Card)",
        subtitle: "Long-term residence status for ethnic Koreans with foreign nationality",
        overview:
          "The F-4 Overseas Korean Visa is a long-term residence status granted to ethnic Koreans holding foreign nationality. It allows a stay of up to 3 years and can be renewed upon expiration. With a Domestic Residence Card, holders can open bank accounts, sign up for mobile phone services, conduct real estate transactions, and access various services needed for daily life in Korea, effectively enabling economic activities comparable to Korean nationals.",
        targetApplicants: [
          "Ethnic Koreans with foreign nationality (Korean-descent foreigners)",
          "Individuals who previously held Korean nationality and acquired foreign citizenship",
          "Foreigners whose parents or grandparents held Korean nationality",
          "Korean-born adoptees raised overseas",
        ],
        eligibility: [
          "Meet overseas Korean requirements (proven Korean nationality history or lineage)",
          "Hold foreign nationality",
          "No criminal record",
          "Can prove Korean nationality loss or renunciation",
        ],
        requiredDocuments: [
          "Visa application form",
          "Passport (original and copy)",
          "Photo (3.5x4.5cm)",
          "Overseas Korean proof documents (family relationship certificate, family register, etc.)",
          "Nationality loss/renunciation proof documents",
          "Home country ID copy",
          "Criminal background check (apostille)",
          "Domestic Residence Card application form (after entry)",
        ],
        process: [
          {
            step: 1,
            title: "Eligibility Check",
            description: "Verify overseas Korean eligibility (lineage, nationality history, etc.)",
          },
          {
            step: 2,
            title: "Document Preparation",
            description: "Prepare overseas Korean proof and required documents (notarize/apostille overseas documents)",
          },
          {
            step: 3,
            title: "Visa Application",
            description: "Apply for F-4 visa at a Korean embassy/consulate or immigration office",
          },
          {
            step: 4,
            title: "Residence Card Issuance",
            description: "Obtain Domestic Residence Card at the immigration office after entry",
          },
        ],
        processingTime: "Approximately 2-4 weeks",
        importantNotes: [
          "With a Domestic Residence Card, you can open bank accounts, use mobile services, and conduct real estate transactions.",
          "Maximum stay of 3 years; renewal application must be submitted before expiration.",
          "Employment in simple labor jobs may be restricted.",
        ],
        faqs: [
          {
            question: "Can I work with an F-4 Domestic Residence Card?",
            answer:
              "Yes, you can work freely in most industries. However, some sectors such as simple labor may be restricted.",
          },
          {
            question: "What is the difference between a Domestic Residence Card and an Alien Registration Card?",
            answer:
              "A Domestic Residence Card is issued to overseas Koreans (F-4) and functions like a resident registration number for banking, real estate, and communications. An Alien Registration Card is issued to other foreign residents.",
          },
          {
            question: "Can I transition from F-4 to permanent residency (F-5)?",
            answer:
              "Yes, after staying for 2+ years on an F-4 visa and meeting certain requirements, you can apply for F-5 permanent residency.",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 Permanent Residency" },
          { slug: "f-2-7", title: "F-2-7 Residence Visa" },
          { slug: "f-6", title: "F-6 Marriage Visa" },
        ],
      },
      zh: {
        slug: "f-4",
        title: "F-4 海外同胞签证（居住证）",
        subtitle: "外国籍海外同胞的长期居留资格",
        overview:
          "F-4海外同胞签证是授予持有外国国籍的海外同胞的长期居留资格。最长可居留3年，到期可续签。获得居住证后可开设银行账户、办理手机、进行房产交易等，实际上可进行与韩国国民同等的经济活动。",
        targetApplicants: [
          "持有外国国籍的海外同胞（韩裔外国人）",
          "曾持有大韩民国国籍后取得外国国籍者",
          "父母或祖父母曾持有大韩民国国籍的外国人",
          "海外被收养的韩裔外国人",
        ],
        eligibility: [
          "满足海外同胞条件（韩国国籍保有历史或血统证明）",
          "持有外国国籍",
          "无犯罪记录",
          "可证明韩国国籍脱离/丧失",
        ],
        requiredDocuments: [
          "签证申请表",
          "护照原件及复印件",
          "证件照（3.5x4.5cm）",
          "海外同胞证明材料（家庭关系证明书、除籍誊本等）",
          "国籍脱离/丧失证明材料",
          "本国身份证复印件",
          "无犯罪证明（海牙认证）",
          "居住证申请表（入境后）",
        ],
        process: [
          {
            step: 1,
            title: "资格确认",
            description: "确认是否符合海外同胞要求（血统、国籍历史等）",
          },
          {
            step: 2,
            title: "准备材料",
            description: "准备海外同胞证明及必要材料（海外材料需公证/海牙认证）",
          },
          {
            step: 3,
            title: "签证申请",
            description: "在驻外使领馆或出入境管理局申请F-4签证",
          },
          {
            step: 4,
            title: "居住证签发",
            description: "入境后在出入境管理局领取国内居住证",
          },
        ],
        processingTime: "约2-4周",
        importantNotes: [
          "获得居住证后可开设银行账户、办理手机、进行房产交易等。",
          "最长可居留3年，须在到期前申请续签。",
          "在简单劳务行业的就业可能受到限制。",
        ],
        faqs: [
          {
            question: "F-4居住证可以工作吗？",
            answer:
              "可以，在大多数行业可自由就业。但简单劳务等部分行业可能受到限制。",
          },
          {
            question: "居住证和外国人登录证有什么区别？",
            answer:
              "居住证是向海外同胞（F-4）签发的，在银行·房产·通信等场合如同居民登录号一样使用。外国人登录证是向一般外国居留者签发的。",
          },
          {
            question: "F-4可以转换为永住权（F-5）吗？",
            answer:
              "可以，以F-4签证居留2年以上并满足相关要求，可申请F-5永住权。",
          },
        ],
        relatedVisas: [
          { slug: "f-5", title: "F-5 永住权" },
          { slug: "f-2-7", title: "F-2-7 居住签证" },
          { slug: "f-6", title: "F-6 结婚签证" },
        ],
      },
      ja: {
        slug: "f-4",
        title: "F-4 在外同胞ビザ（居住証）",
        subtitle: "外国国籍の在外同胞のための長期滞在資格",
        overview: "F-4在外同胞ビザは、外国国籍を持つ在外同胞に付与される長期滞在資格です。最大3年まで滞在でき、満了時に更新が可能です。居住証を発給されると銀行口座開設、携帯電話契約、不動産取引等の国内生活に必要な各種サービスが利用でき、実質的に内国人に準じた経済活動が可能です。",
        targetApplicants: ["外国国籍を持つ在外同胞（韓国系外国人）", "大韓民国の国籍を保有した後に外国国籍を取得した者", "両親または祖父母が大韓民国の国籍であった外国人", "海外養子出身の韓国系外国人"],
        eligibility: ["在外同胞要件の充足（大韓民国国籍保有歴または血統証明）", "外国国籍の保有", "犯罪歴なし", "大韓民国国籍離脱/喪失の立証可能"],
        requiredDocuments: ["ビザ申請書", "パスポート原本およびコピー", "証明写真（3.5x4.5cm）", "在外同胞立証書類（家族関係証明書、除籍謄本等）", "国籍離脱/喪失証明書類", "本国の身分証コピー", "犯罪経歴証明書（アポスティーユ）", "居住証発給申請書（入国後）"],
        process: [{ step: 1, title: "資格確認", description: "在外同胞要件の該当可否を確認（血統、国籍歴等）" }, { step: 2, title: "書類準備", description: "在外同胞立証書類および必須書類を準備（海外書類の公証/アポスティーユ）" }, { step: 3, title: "ビザ申請", description: "在外公館または出入国管理事務所にF-4ビザを申請" }, { step: 4, title: "居住証発給", description: "入国後出入国管理事務所で国内居住証を発給" }],
        processingTime: "約2〜4週間",
        importantNotes: ["居住証を発給されると銀行口座、携帯電話、不動産取引等が可能になります。", "最大3年間滞在可能で、満了前に更新申請が必要です。", "単純労務業種での就労は制限される場合があります。"],
        faqs: [{ question: "F-4居住証で就労できますか？", answer: "はい、ほとんどの業種で自由に就労が可能です。ただし単純労務分野等の一部業種は制限される場合があります。" }, { question: "居住証と外国人登録証の違いは何ですか？", answer: "居住証は在外同胞（F-4）に発給され、銀行・不動産・通信等で住民登録番号のように活用されます。外国人登録証は一般外国人滞在者に発給されます。" }, { question: "F-4から永住権（F-5）への切り替えは可能ですか？", answer: "はい、F-4ビザで2年以上滞在し一定の要件を満たせばF-5永住権を申請できます。" }],
        relatedVisas: [{ slug: "f-5", title: "F-5 永住権" }, { slug: "f-2-7", title: "F-2-7 居住ビザ" }, { slug: "f-6", title: "F-6 結婚ビザ" }],
      },
    },
    "f-5": {
      ko: {
        slug: "f-5",
        title: "F-5 영주권",
        subtitle: "한국에서 무기한 체류할 수 있는 영주자격",
        overview:
          "F-5 영주권은 대한민국에서 무기한으로 체류할 수 있는 영주자격입니다. 취득 경로가 다양하여 일반영주(F-5-1), 고액투자(F-5-5), 점수제(F-5-16), 부동산투자(F-5-17), 공익사업(F-5-21) 등 여러 하위 유형이 있습니다. 영주권을 취득하면 체류기간 제한 없이 한국에서 생활할 수 있으며, 대부분의 경제활동이 자유롭게 가능합니다.",
        targetApplicants: [
          "한국에 장기 체류하며 영주를 희망하는 외국인",
          "한국에 일정 금액 이상 투자한 외국인 투자자",
          "점수제 요건을 충족하는 전문 인력",
          "공익사업에 기여한 외국인",
          "대한민국에 특별한 공로가 있는 자",
        ],
        eligibility: [
          "F-5 하위 유형별 요건 충족 (아래 관련 비자 참조)",
          "대한민국 법령을 준수하고 품행이 단정할 것",
          "본인 또는 생계를 같이하는 가족의 소득으로 생활할 수 있을 것",
          "기본적인 한국어 능력 및 한국 사회·문화에 대한 이해",
        ],
        requiredDocuments: [
          "영주자격 신청서",
          "여권 원본 및 사본",
          "증명사진 (3.5x4.5cm)",
          "체류자격 입증 서류 (하위 유형에 따라 상이)",
          "소득 입증 서류 (소득금액증명원, 근로소득원천징수영수증 등)",
          "범죄경력증명서",
          "사회통합프로그램(KIIP) 이수증 또는 한국어능력시험(TOPIK) 성적",
          "신원보증서 (해당 시)",
        ],
        process: [
          {
            step: 1,
            title: "자격 확인",
            description: "F-5 하위 유형 중 해당 유형 확인 및 요건 검토",
          },
          {
            step: 2,
            title: "요건 충족",
            description: "소득, 한국어, 체류기간 등 해당 유형별 요건 충족",
          },
          {
            step: 3,
            title: "서류 준비",
            description: "유형별 필수 서류 준비 (해외 서류는 아포스티유 필요)",
          },
          {
            step: 4,
            title: "영주권 신청",
            description: "출입국관리사무소에 영주자격(F-5) 신청",
          },
          {
            step: 5,
            title: "심사 및 발급",
            description: "서류·면접 심사 후 영주권 발급",
          },
        ],
        processingTime: "약 1~3개월 (유형에 따라 상이)",
        importantNotes: [
          "F-5 영주권은 다양한 하위 유형이 있으며, 각 유형별 요건이 다릅니다. 아래 관련 비자에서 상세 요건을 확인하세요.",
          "영주권 취득 후에도 재입국허가를 받아야 출국 후 재입국이 가능합니다 (1~2년).",
          "영주권자도 법령 위반 시 영주자격이 취소될 수 있습니다.",
        ],
        faqs: [
          {
            question: "F-5 영주권의 하위 유형은 어떤 것이 있나요?",
            answer:
              "주요 유형으로 일반영주(F-5-1), 고액투자영주(F-5-5), 점수제영주(F-5-16), 부동산투자영주(F-5-17), 공익사업영주(F-5-21) 등이 있습니다. 각 유형마다 요건과 절차가 다르므로 해당 페이지에서 상세 내용을 확인하세요.",
          },
          {
            question: "영주권을 받으면 영원히 한국에 살 수 있나요?",
            answer:
              "영주권은 체류기간 제한이 없지만, 출국 시 재입국허가(1~2년)를 받아야 하며, 장기간 출국 시 영주자격이 취소될 수 있습니다. 또한 법령을 위반하면 취소 사유가 됩니다.",
          },
          {
            question: "F-5 영주권과 귀화(국적취득)의 차이는 무엇인가요?",
            answer:
              "영주권(F-5)은 외국 국적을 유지하면서 한국에 무기한 체류하는 자격이고, 귀화는 한국 국적을 취득하는 것입니다. 영주권자는 선거권이 없고, 귀화 후에는 대한민국 국민으로서 모든 권리를 갖습니다.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-1", title: "F-5-1 일반영주" },
          { slug: "f-5-5", title: "F-5-5 고액투자영주" },
          { slug: "f-5-16", title: "F-5-16 점수제영주" },
          { slug: "f-5-17", title: "F-5-17 부동산투자영주" },
          { slug: "f-5-21", title: "F-5-21 공익사업영주" },
        ],
      },
      en: {
        slug: "f-5",
        title: "F-5 Permanent Residency",
        subtitle: "Permanent residence status allowing indefinite stay in Korea",
        overview:
          "F-5 Permanent Residency allows indefinite stay in Korea. There are multiple pathways including General Permanent Residency (F-5-1), High-Value Investment (F-5-5), Points-based (F-5-16), Real Estate Investment (F-5-17), and Public Interest Investment (F-5-21). Permanent residents can live in Korea without time restrictions and freely engage in most economic activities.",
        targetApplicants: [
          "Foreigners seeking permanent settlement through long-term residence in Korea",
          "Foreign investors who have invested above certain thresholds in Korea",
          "Professionals meeting points-based requirements",
          "Foreigners who have contributed to public interest projects",
          "Individuals with special merit to Korea",
        ],
        eligibility: [
          "Meet the requirements for the applicable F-5 sub-type (see related visas below)",
          "Comply with Korean laws and maintain good conduct",
          "Able to support oneself or family members through income",
          "Basic Korean language proficiency and understanding of Korean society and culture",
        ],
        requiredDocuments: [
          "Permanent residency application form",
          "Passport (original and copy)",
          "Photo (3.5x4.5cm)",
          "Residence status proof documents (vary by sub-type)",
          "Income proof (income verification, withholding tax statement, etc.)",
          "Criminal background check",
          "KIIP completion certificate or TOPIK score",
          "Guarantee letter (if applicable)",
        ],
        process: [
          {
            step: 1,
            title: "Eligibility Check",
            description: "Identify the applicable F-5 sub-type and review requirements",
          },
          {
            step: 2,
            title: "Meet Requirements",
            description: "Fulfill income, Korean proficiency, residence period, and other sub-type requirements",
          },
          {
            step: 3,
            title: "Document Preparation",
            description: "Prepare required documents by sub-type (apostille needed for overseas documents)",
          },
          {
            step: 4,
            title: "PR Application",
            description: "Apply for F-5 permanent residency at the immigration office",
          },
          {
            step: 5,
            title: "Review & Issuance",
            description: "Permanent residency issued after document and interview review",
          },
        ],
        processingTime: "Approximately 1-3 months (varies by sub-type)",
        importantNotes: [
          "F-5 permanent residency has various sub-types with different requirements for each. See the related visas below for detailed requirements.",
          "Even after obtaining permanent residency, a re-entry permit is required for leaving and re-entering Korea (valid for 1-2 years).",
          "Permanent residency may be revoked for violations of law.",
        ],
        faqs: [
          {
            question: "What are the sub-types of F-5 permanent residency?",
            answer:
              "Key sub-types include General PR (F-5-1), High-Value Investment PR (F-5-5), Points-based PR (F-5-16), Real Estate Investment PR (F-5-17), and Public Interest PR (F-5-21). Each has different requirements and procedures, so please check the detailed pages.",
          },
          {
            question: "Can I live in Korea forever with permanent residency?",
            answer:
              "Permanent residency has no time limit on stay, but you must obtain a re-entry permit (1-2 years) when leaving Korea. Extended absence may result in revocation. Legal violations can also be grounds for revocation.",
          },
          {
            question: "What is the difference between F-5 permanent residency and naturalization?",
            answer:
              "Permanent residency (F-5) allows indefinite stay in Korea while maintaining foreign nationality. Naturalization involves acquiring Korean nationality. Permanent residents do not have voting rights, while naturalized citizens have all rights as Korean nationals.",
          },
        ],
        relatedVisas: [
          { slug: "f-5-1", title: "F-5-1 General Permanent Residency" },
          { slug: "f-5-5", title: "F-5-5 High-Value Investment PR" },
          { slug: "f-5-16", title: "F-5-16 Points-based PR" },
          { slug: "f-5-17", title: "F-5-17 Real Estate Investment PR" },
          { slug: "f-5-21", title: "F-5-21 Public Interest PR" },
        ],
      },
      zh: {
        slug: "f-5",
        title: "F-5 永住权",
        subtitle: "可在韩国无限期居留的永住资格",
        overview:
          "F-5永住权是可在大韩民国无限期居留的永住资格。取得途径多样，包括一般永住（F-5-1）、高额投资（F-5-5）、积分制（F-5-16）、不动产投资（F-5-17）、公益事业（F-5-21）等多个子类型。取得永住权后可不受居留期限限制在韩国生活，大部分经济活动均可自由进行。",
        targetApplicants: [
          "希望在韩国长期居留并永住的外国人",
          "在韩国投资一定金额以上的外国投资者",
          "满足积分制要求的专业人才",
          "对公益事业做出贡献的外国人",
          "对大韩民国有特别功劳者",
        ],
        eligibility: [
          "满足F-5子类型的各项要求（参见下方相关签证）",
          "遵守大韩民国法令，品行良好",
          "能以本人或共同生活家庭成员的收入维持生活",
          "基本韩语能力及对韩国社会·文化的了解",
        ],
        requiredDocuments: [
          "永住资格申请书",
          "护照原件及复印件",
          "证件照（3.5x4.5cm）",
          "居留资格证明材料（因子类型而异）",
          "收入证明（收入金额证明、工资扣缴凭证等）",
          "无犯罪证明",
          "社会融合项目（KIIP）结业证或TOPIK成绩",
          "身元保证书（如适用）",
        ],
        process: [
          {
            step: 1,
            title: "资格确认",
            description: "确认适用的F-5子类型并审核要求",
          },
          {
            step: 2,
            title: "满足要求",
            description: "满足收入、韩语、居留期限等各类型要求",
          },
          {
            step: 3,
            title: "准备材料",
            description: "按类型准备必要材料（海外材料需海牙认证）",
          },
          {
            step: 4,
            title: "申请永住权",
            description: "在出入境管理局申请永住资格（F-5）",
          },
          {
            step: 5,
            title: "审核及签发",
            description: "材料·面试审核后签发永住权",
          },
        ],
        processingTime: "约1-3个月（因类型而异）",
        importantNotes: [
          "F-5永住权有多种子类型，各类型要求不同。请在下方相关签证中查看详细要求。",
          "取得永住权后也须获得再入境许可才能出境后再入境（1-2年有效）。",
          "永住权持有者违反法令时，永住资格可能被取消。",
        ],
        faqs: [
          {
            question: "F-5永住权有哪些子类型？",
            answer:
              "主要类型有一般永住（F-5-1）、高额投资永住（F-5-5）、积分制永住（F-5-16）、不动产投资永住（F-5-17）、公益事业永住（F-5-21）等。各类型要求和程序不同，请查看相应页面的详细内容。",
          },
          {
            question: "取得永住权就能永远住在韩国吗？",
            answer:
              "永住权没有居留期限限制，但出境时须获得再入境许可（1-2年），长期出境的永住资格可能被取消。违反法令也可成为取消事由。",
          },
          {
            question: "F-5永住权和归化（取得国籍）有什么区别？",
            answer:
              "永住权（F-5）是保持外国国籍的同时可无限期居留韩国的资格，归化是取得韩国国籍。永住权持有者没有选举权，归化后作为大韩民国国民享有一切权利。",
          },
        ],
        relatedVisas: [
          { slug: "f-5-1", title: "F-5-1 一般永住" },
          { slug: "f-5-5", title: "F-5-5 高额投资永住" },
          { slug: "f-5-16", title: "F-5-16 积分制永住" },
          { slug: "f-5-17", title: "F-5-17 不动产投资永住" },
          { slug: "f-5-21", title: "F-5-21 公益事业永住" },
        ],
      },
      ja: {
        slug: "f-5",
        title: "F-5 永住権",
        subtitle: "韓国で無期限に滞在できる永住資格",
        overview: "F-5永住権は、大韓民国で無期限に滞在できる永住資格です。取得経路が多様で、一般永住（F-5-1）、高額投資（F-5-5）、ポイント制（F-5-16）、不動産投資（F-5-17）、公益事業（F-5-21）等の複数の下位類型があります。永住権を取得すると滞在期間の制限なく韓国で生活でき、ほとんどの経済活動が自由に可能です。",
        targetApplicants: ["韓国に長期滞在し永住を希望する外国人", "韓国に一定金額以上投資した外国人投資家", "ポイント制要件を満たす専門人材", "公益事業に貢献した外国人", "大韓民国に特別な功労がある者"],
        eligibility: ["F-5下位類型別の要件充足（下記の関連ビザを参照）", "大韓民国の法令を遵守し品行が方正であること", "本人または生計を共にする家族の所得で生活できること", "基本的な韓国語能力および韓国社会・文化への理解"],
        requiredDocuments: ["永住資格申請書", "パスポート原本およびコピー", "証明写真（3.5x4.5cm）", "在留資格立証書類（下位類型により異なる）", "所得立証書類（所得金額証明書、勤労所得源泉徴収領収書等）", "犯罪経歴証明書", "社会統合プログラム（KIIP）修了証または韓国語能力試験（TOPIK）成績", "身元保証書（該当時）"],
        process: [{ step: 1, title: "資格確認", description: "F-5下位類型の中から該当する類型を確認し要件を検討" }, { step: 2, title: "要件充足", description: "所得、韓国語、滞在期間等の該当類型別要件を充足" }, { step: 3, title: "書類準備", description: "類型別の必須書類を準備（海外書類はアポスティーユが必要）" }, { step: 4, title: "永住権申請", description: "出入国管理事務所に永住資格（F-5）を申請" }, { step: 5, title: "審査および発給", description: "書類・面接審査後永住権を発給" }],
        processingTime: "約1〜3ヶ月（類型により異なる）",
        importantNotes: ["F-5永住権には多様な下位類型があり、各類型別の要件が異なります。下記の関連ビザで詳細要件を確認してください。", "永住権取得後も再入国許可を受けなければ出国後の再入国が可能になりません（1〜2年）。", "永住権者も法令違反時に永住資格が取り消される場合があります。"],
        faqs: [{ question: "F-5永住権の下位類型にはどのようなものがありますか？", answer: "主な類型として一般永住（F-5-1）、高額投資永住（F-5-5）、ポイント制永住（F-5-16）、不動産投資永住（F-5-17）、公益事業永住（F-5-21）等があります。各類型ごとに要件と手続きが異なるため該当ページで詳細をご確認ください。" }, { question: "永住権を取得すれば永久に韓国に住めますか？", answer: "永住権は滞在期間の制限はありませんが、出国時に再入国許可（1〜2年）が必要で、長期間の出国時に永住資格が取り消される場合があります。法令違反も取消事由となります。" }, { question: "F-5永住権と帰化（国籍取得）の違いは何ですか？", answer: "永住権（F-5）は外国国籍を維持しながら韓国に無期限滞在する資格で、帰化は韓国国籍を取得するものです。永住権者には選挙権がなく、帰化後は大韓民国国民としてすべての権利を持ちます。" }],
        relatedVisas: [{ slug: "f-5-1", title: "F-5-1 一般永住" }, { slug: "f-5-5", title: "F-5-5 高額投資永住" }, { slug: "f-5-16", title: "F-5-16 ポイント制永住" }, { slug: "f-5-17", title: "F-5-17 不動産投資永住" }, { slug: "f-5-21", title: "F-5-21 公益事業永住" }],
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

