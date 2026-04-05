import type { Locale } from "./config";

// Common UI translations
export interface Dictionary {
  common: {
    home: string;
    visa: string;
    business: string;
    blog: string;
    qna: string;
    about: string;
    contact: string;
    readMore: string;
    learnMore: string;
    consultation: string;
    freeConsultation: string;
    submitInquiry: string;
    relatedServices: string;
    relatedPosts: string;
    faq: string;
    tableOfContents: string;
    shareArticle: string;
    backToList: string;
    viewAll: string;
    search: string;
    language: string;
  };
  visa: {
    overview: string;
    eligibility: string;
    targetApplicants: string;
    requirements: string;
    requiredDocuments: string;
    process: string;
    processingTime: string;
    importantNotes: string;
    relatedVisa: string;
  };
  business: {
    serviceIntro: string;
    targetCompanies: string;
    requiredDocuments: string;
    processSteps: string;
    considerations: string;
    contactCTA: string;
  };
  blog: {
    publishedOn: string;
    updatedOn: string;
    author: string;
    category: string;
    tags: string;
    readTime: string;
    minutes: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
    submit: string;
    required: string;
  };
  footer: {
    companyInfo: string;
    quickLinks: string;
    services: string;
    support: string;
    privacyPolicy: string;
    termsOfService: string;
    allRightsReserved: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  ko: {
    common: {
      home: "홈",
      visa: "비자",
      business: "법인설립",
      blog: "블로그",
      qna: "자주 묻는 질문",
      about: "회사 소개",
      contact: "문의하기",
      readMore: "더 보기",
      learnMore: "자세히 알아보기",
      consultation: "상담 신청",
      freeConsultation: "무료 상담 신청",
      submitInquiry: "문의 접수",
      relatedServices: "관련 서비스",
      relatedPosts: "관련 글",
      faq: "자주 묻는 질문",
      tableOfContents: "목차",
      shareArticle: "공유하기",
      backToList: "목록으로",
      viewAll: "전체 보기",
      search: "검색",
      language: "언어",
    },
    visa: {
      overview: "개요",
      eligibility: "자격요건",
      targetApplicants: "대상자",
      requirements: "필요 조건",
      requiredDocuments: "필요서류",
      process: "진행절차",
      processingTime: "소요 기간",
      importantNotes: "심사시 유의사항",
      relatedVisa: "관련 비자",
    },
    business: {
      serviceIntro: "서비스 소개",
      targetCompanies: "대상 기업",
      requiredDocuments: "필요서류",
      processSteps: "진행 순서",
      considerations: "예상 검토 포인트",
      contactCTA: "문의하기",
    },
    blog: {
      publishedOn: "작성일",
      updatedOn: "수정일",
      author: "작성자",
      category: "카테고리",
      tags: "태그",
      readTime: "읽는 시간",
      minutes: "분",
    },
    contact: {
      name: "이름",
      email: "이메일",
      phone: "연락처",
      company: "회사명",
      service: "관심 서비스",
      message: "문의 내용",
      submit: "제출하기",
      required: "필수",
    },
    footer: {
      companyInfo: "회사 정보",
      quickLinks: "바로가기",
      services: "서비스",
      support: "고객지원",
      privacyPolicy: "개인정보처리방침",
      termsOfService: "이용약관",
      allRightsReserved: "All rights reserved.",
    },
  },
  en: {
    common: {
      home: "Home",
      visa: "Visa",
      business: "Business Setup",
      blog: "Blog",
      qna: "FAQ",
      about: "About Us",
      contact: "Contact",
      readMore: "Read More",
      learnMore: "Learn More",
      consultation: "Book Consultation",
      freeConsultation: "Free Consultation",
      submitInquiry: "Submit Inquiry",
      relatedServices: "Related Services",
      relatedPosts: "Related Posts",
      faq: "Frequently Asked Questions",
      tableOfContents: "Table of Contents",
      shareArticle: "Share",
      backToList: "Back to List",
      viewAll: "View All",
      search: "Search",
      language: "Language",
    },
    visa: {
      overview: "Overview",
      eligibility: "Eligibility",
      targetApplicants: "Target Applicants",
      requirements: "Requirements",
      requiredDocuments: "Required Documents",
      process: "Process",
      processingTime: "Processing Time",
      importantNotes: "Important Notes",
      relatedVisa: "Related Visas",
    },
    business: {
      serviceIntro: "Service Introduction",
      targetCompanies: "Target Companies",
      requiredDocuments: "Required Documents",
      processSteps: "Process Steps",
      considerations: "Key Considerations",
      contactCTA: "Contact Us",
    },
    blog: {
      publishedOn: "Published on",
      updatedOn: "Updated on",
      author: "Author",
      category: "Category",
      tags: "Tags",
      readTime: "Read time",
      minutes: "min",
    },
    contact: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      service: "Service of Interest",
      message: "Message",
      submit: "Submit",
      required: "Required",
    },
    footer: {
      companyInfo: "Company Info",
      quickLinks: "Quick Links",
      services: "Services",
      support: "Support",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      allRightsReserved: "All rights reserved.",
    },
  },
  zh: {
    common: {
      home: "首页",
      visa: "签证",
      business: "法人设立",
      blog: "博客",
      qna: "常见问题",
      about: "关于我们",
      contact: "联系我们",
      readMore: "阅读更多",
      learnMore: "了解更多",
      consultation: "预约咨询",
      freeConsultation: "免费咨询",
      submitInquiry: "提交咨询",
      relatedServices: "相关服务",
      relatedPosts: "相关文章",
      faq: "常见问题",
      tableOfContents: "目录",
      shareArticle: "分享",
      backToList: "返回列表",
      viewAll: "查看全部",
      search: "搜索",
      language: "语言",
    },
    visa: {
      overview: "概述",
      eligibility: "资格条件",
      targetApplicants: "适用对象",
      requirements: "必要条件",
      requiredDocuments: "所需材料",
      process: "办理流程",
      processingTime: "处理时间",
      importantNotes: "审核注意事项",
      relatedVisa: "相关签证",
    },
    business: {
      serviceIntro: "服务介绍",
      targetCompanies: "适用企业",
      requiredDocuments: "所需材料",
      processSteps: "办理流程",
      considerations: "审核要点",
      contactCTA: "联系我们",
    },
    blog: {
      publishedOn: "发布日期",
      updatedOn: "更新日期",
      author: "作者",
      category: "分类",
      tags: "标签",
      readTime: "阅读时间",
      minutes: "分钟",
    },
    contact: {
      name: "姓名",
      email: "邮箱",
      phone: "电话",
      company: "公司",
      service: "感兴趣的服务",
      message: "咨询内容",
      submit: "提交",
      required: "必填",
    },
    footer: {
      companyInfo: "公司信息",
      quickLinks: "快捷链接",
      services: "服务",
      support: "客服支持",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款",
      allRightsReserved: "版权所有",
    },
  },
  ja: {
    common: {
      home: "ホーム",
      visa: "ビザ",
      business: "法人設立",
      blog: "ブログ",
      qna: "よくある質問",
      about: "会社概要",
      contact: "お問い合わせ",
      readMore: "続きを読む",
      learnMore: "詳細を見る",
      consultation: "相談予約",
      freeConsultation: "無料相談",
      submitInquiry: "お問い合わせ",
      relatedServices: "関連サービス",
      relatedPosts: "関連記事",
      faq: "よくある質問",
      tableOfContents: "目次",
      shareArticle: "シェア",
      backToList: "一覧に戻る",
      viewAll: "すべて見る",
      search: "検索",
      language: "言語",
    },
    visa: {
      overview: "概要",
      eligibility: "資格要件",
      targetApplicants: "対象者",
      requirements: "必要条件",
      requiredDocuments: "必要書類",
      process: "手続き流れ",
      processingTime: "所要期間",
      importantNotes: "審査時の注意点",
      relatedVisa: "関連ビザ",
    },
    business: {
      serviceIntro: "サービス紹介",
      targetCompanies: "対象企業",
      requiredDocuments: "必要書類",
      processSteps: "手続きの流れ",
      considerations: "検討ポイント",
      contactCTA: "お問い合わせ",
    },
    blog: {
      publishedOn: "公開日",
      updatedOn: "更新日",
      author: "著者",
      category: "カテゴリー",
      tags: "タグ",
      readTime: "読了時間",
      minutes: "分",
    },
    contact: {
      name: "お名前",
      email: "メールアドレス",
      phone: "電話番号",
      company: "会社名",
      service: "ご興味のあるサービス",
      message: "お問い合わせ内容",
      submit: "送信",
      required: "必須",
    },
    footer: {
      companyInfo: "会社情報",
      quickLinks: "クイックリンク",
      services: "サービス",
      support: "サポート",
      privacyPolicy: "プライバシーポリシー",
      termsOfService: "利用規約",
      allRightsReserved: "All rights reserved.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.ko;
}

export default dictionaries;
