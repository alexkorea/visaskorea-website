/**
 * Q&A Data
 *
 * Questions and answers with multilingual content.
 */

import type { Locale } from "@/lib/i18n/config";
import type { QAItem } from "./types";

export const qaItems: QAItem[] = [
  {
    id: "1",
    slug: "what-is-corporate-restructuring",
    category: "corporate",
    question: {
      en: "What is corporate restructuring and when is it necessary?",
      ko: "기업 구조조정이란 무엇이며 언제 필요합니까?",
      zh: "什么是公司重组，何时需要？",
      ja: "企業再編とは何ですか？いつ必要ですか？",
    },
    answer: {
      en: `<p>Corporate restructuring refers to the process of reorganizing a company's structure, operations, or finances to improve efficiency, adapt to market changes, or address financial challenges.</p>
<p>Restructuring is typically necessary when:</p>
<ul>
<li>The company is facing financial difficulties or bankruptcy risk</li>
<li>A merger or acquisition is being planned</li>
<li>Market conditions require operational changes</li>
<li>Tax optimization opportunities exist</li>
</ul>`,
      ko: `<p>기업 구조조정은 효율성을 개선하거나 시장 변화에 적응하거나 재정적 어려움을 해결하기 위해 회사의 구조, 운영 또는 재무를 재편하는 과정을 말합니다.</p>
<p>구조조정은 일반적으로 다음과 같은 경우에 필요합니다:</p>
<ul>
<li>회사가 재정적 어려움이나 파산 위험에 직면한 경우</li>
<li>합병이나 인수를 계획하고 있는 경우</li>
<li>시장 상황이 운영 변경을 요구하는 경우</li>
<li>세금 최적화 기회가 존재하는 경우</li>
</ul>`,
      zh: `<p>公司重组是指重新组织公司的结构、运营或财务以提高效率、适应市场变化或解决财务挑战的过程。</p>
<p>重组通常在以下情况下是必要的：</p>
<ul>
<li>公司面临财务困难或破产风险</li>
<li>正在计划合并或收购</li>
<li>市场条件需要运营变更</li>
<li>存在税务优化机会</li>
</ul>`,
      ja: `<p>企業再編とは、効率性の向上、市場変化への適応、財務上の課題への対処のために、企業の構造、運営、財務を再編成するプロセスです。</p>
<p>再編は通常、以下のような場合に必要です：</p>
<ul>
<li>会社が財務上の困難や倒産リスクに直面している場合</li>
<li>合併や買収を計画している場合</li>
<li>市場環境が運営の変更を求めている場合</li>
<li>税務最適化の機会がある場合</li>
</ul>`,
    },
  },
  {
    id: "2",
    slug: "work-visa-processing-time",
    category: "immigration",
    question: {
      en: "How long does it typically take to process a work visa application?",
      ko: "취업 비자 신청 처리에는 일반적으로 얼마나 걸립니까?",
      zh: "工作签证申请通常需要多长时间处理？",
      ja: "就労ビザの申請処理には通常どのくらいかかりますか？",
    },
    answer: {
      en: `<p>Work visa processing times vary significantly depending on the type of visa and the applicant's country of origin.</p>
<ul>
<li><strong>Standard processing:</strong> 2-6 months</li>
<li><strong>Premium/expedited processing:</strong> 2-4 weeks (where available)</li>
<li><strong>Complex cases:</strong> 6-12 months or longer</li>
</ul>`,
      ko: `<p>취업 비자 처리 시간은 비자 유형, 신청자의 출신 국가에 따라 크게 다릅니다.</p>
<ul>
<li><strong>표준 처리:</strong> 2-6개월</li>
<li><strong>프리미엄/신속 처리:</strong> 2-4주 (가능한 경우)</li>
<li><strong>복잡한 케이스:</strong> 6-12개월 이상</li>
</ul>`,
      zh: `<p>工作签证处理时间因签证类型、申请人的原籍国而有很大差异。</p>
<ul>
<li><strong>标准处理：</strong>2-6个月</li>
<li><strong>优先/加急处理：</strong>2-4周（如有）</li>
<li><strong>复杂案件：</strong>6-12个月或更长</li>
</ul>`,
      ja: `<p>就労ビザの処理時間は、ビザの種類や申請者の出身国によって大きく異なります。</p>
<ul>
<li><strong>標準処理：</strong>2〜6ヶ月</li>
<li><strong>優先/迅速処理：</strong>2〜4週間（利用可能な場合）</li>
<li><strong>複雑なケース：</strong>6〜12ヶ月以上</li>
</ul>`,
    },
  },
  {
    id: "3",
    slug: "trademark-registration-process",
    category: "ip",
    question: {
      en: "What is the process for registering a trademark internationally?",
      ko: "국제 상표 등록 절차는 어떻게 됩니까?",
      zh: "国际商标注册流程是什么？",
      ja: "国際商標登録のプロセスはどのようなものですか？",
    },
    answer: {
      en: `<p>International trademark registration can be accomplished through several routes:</p>
<h3>Madrid System</h3>
<p>The Madrid Protocol allows you to file a single application to register your trademark in multiple countries (currently 130+ members).</p>
<h3>Direct National Filings</h3>
<p>For specific markets, direct national applications may be necessary.</p>
<h3>General Process Steps:</h3>
<ol>
<li>Trademark search and clearance</li>
<li>Application preparation and filing</li>
<li>Examination by trademark office</li>
<li>Publication and opposition period</li>
<li>Registration and certificate issuance</li>
</ol>`,
      ko: `<p>국제 상표 등록은 여러 경로를 통해 달성할 수 있습니다:</p>
<h3>마드리드 시스템</h3>
<p>마드리드 의정서를 사용하면 단일 신청으로 여러 국가(현재 130개 이상 회원국)에서 상표를 등록할 수 있습니다.</p>
<h3>직접 국가 출원</h3>
<p>특정 시장의 경우 직접 국가 출원이 필요할 수 있습니다.</p>
<h3>일반 프로세스 단계:</h3>
<ol>
<li>상표 검색 및 클리어런스</li>
<li>출원 준비 및 제출</li>
<li>상표청의 심사</li>
<li>공고 및 이의 신청 기간</li>
<li>등록 및 증명서 발급</li>
</ol>`,
      zh: `<p>国际商标注册可以通过几种途径完成：</p>
<h3>马德里体系</h3>
<p>马德里议定书允许您通过单一申请在多个国家（目前130多个成员国）注册商标。</p>
<h3>直接国家申请</h3>
<p>对于特定市场，可能需要直接国家申请。</p>
<h3>一般流程步骤：</h3>
<ol>
<li>商标搜索和清除</li>
<li>申请准备和提交</li>
<li>商标局审查</li>
<li>公告和异议期</li>
<li>注册和证书颁发</li>
</ol>`,
      ja: `<p>国際商標登録はいくつかのルートで達成できます：</p>
<h3>マドリッド制度</h3>
<p>マドリッド議定書により、単一の出願で複数の国（現在130以上の加盟国）で商標を登録できます。</p>
<h3>直接国内出願</h3>
<p>特定の市場では、直接国内出願が必要な場合があります。</p>
<h3>一般的なプロセス：</h3>
<ol>
<li>商標調査とクリアランス</li>
<li>出願準備と提出</li>
<li>商標庁による審査</li>
<li>公告と異議申立期間</li>
<li>登録と証明書発行</li>
</ol>`,
    },
  },
  {
    id: "4",
    slug: "initial-consultation-process",
    category: "general",
    question: {
      en: "What should I expect during an initial consultation?",
      ko: "초기 상담 시 무엇을 기대해야 합니까?",
      zh: "初次咨询时应该期待什么？",
      ja: "初回相談ではどのようなことが期待できますか？",
    },
    answer: {
      en: `<p>Our initial consultation is designed to understand your situation and determine how we can best assist you.</p>
<h3>Before the Consultation</h3>
<ul>
<li>We'll send you a brief questionnaire to gather basic information</li>
<li>You should gather relevant documents related to your matter</li>
</ul>
<h3>During the Consultation</h3>
<ul>
<li>We'll discuss your situation and objectives in detail</li>
<li>You'll receive an initial assessment and recommended next steps</li>
</ul>
<p>Initial consultations are typically 30-60 minutes.</p>`,
      ko: `<p>저희의 초기 상담은 귀하의 상황을 이해하고 최선의 도움을 드릴 수 있는 방법을 결정하기 위해 설계되었습니다.</p>
<h3>상담 전</h3>
<ul>
<li>기본 정보를 수집하기 위한 간단한 설문지를 보내드립니다</li>
<li>귀하의 사안과 관련된 문서를 준비해 주세요</li>
</ul>
<h3>상담 중</h3>
<ul>
<li>귀하의 상황과 목표에 대해 자세히 논의합니다</li>
<li>초기 평가와 권장 다음 단계를 받게 됩니다</li>
</ul>
<p>초기 상담은 일반적으로 30-60분입니다.</p>`,
      zh: `<p>我们的初次咨询旨在了解您的情况并确定我们如何最好地帮助您。</p>
<h3>咨询前</h3>
<ul>
<li>我们将发送一份简短的问卷以收集基本信息</li>
<li>您应该收集与您的事务相关的文件</li>
</ul>
<h3>咨询期间</h3>
<ul>
<li>我们将详细讨论您的情况和目标</li>
<li>您将收到初步评估和建议的后续步骤</li>
</ul>
<p>初次咨询通常为30-60分钟。</p>`,
      ja: `<p>初回相談は、お客様の状況を理解し、最善のサポート方法を決定するために設計されています。</p>
<h3>相談前</h3>
<ul>
<li>基本情報を収集するための簡単なアンケートをお送りします</li>
<li>お客様の案件に関連する書類をご準備ください</li>
</ul>
<h3>相談中</h3>
<ul>
<li>お客様の状況と目標について詳しく話し合います</li>
<li>初期評価と推奨される次のステップをお伝えします</li>
</ul>
<p>初回相談は通常30〜60分です。</p>`,
    },
  },
  {
    id: "5",
    slug: "document-translation-requirements",
    category: "general",
    question: {
      en: "Do I need to have my documents translated before submitting them?",
      ko: "서류를 제출하기 전에 번역을 해야 합니까?",
      zh: "提交文件前是否需要翻译？",
      ja: "書類を提出する前に翻訳する必要がありますか？",
    },
    answer: {
      en: `<p>Document translation requirements vary depending on the type of legal matter and the jurisdictions involved.</p>
<h3>When Translation is Required</h3>
<ul>
<li>Court filings in a different language jurisdiction</li>
<li>Immigration applications</li>
<li>International contracts and agreements</li>
<li>Documents submitted to government agencies</li>
</ul>
<p>Our multilingual team can review documents in English, Korean, Chinese, and Japanese.</p>`,
      ko: `<p>문서 번역 요건은 법적 문제의 유형과 관련 관할권에 따라 다릅니다.</p>
<h3>번역이 필요한 경우</h3>
<ul>
<li>다른 언어 관할권에서의 법원 제출</li>
<li>이민 신청</li>
<li>국제 계약 및 합의</li>
<li>정부 기관에 제출하는 문서</li>
</ul>
<p>저희 다국어 팀은 영어, 한국어, 중국어, 일본어로 문서를 검토할 수 있습니다.</p>`,
      zh: `<p>文件翻译要求因法律事务类型和涉及的司法管辖区而异。</p>
<h3>需要翻译的情况</h3>
<ul>
<li>在不同语言司法管辖区提交的法庭文件</li>
<li>移民申请</li>
<li>国际合同和协议</li>
<li>提交给政府机构的文件</li>
</ul>
<p>我们的多语言团队可以审查英语、韩语、中文和日语的文件。</p>`,
      ja: `<p>書類の翻訳要件は、法的問題の種類と関連する管轄区域によって異なります。</p>
<h3>翻訳が必要な場合</h3>
<ul>
<li>異なる言語の管轄区域での裁判所提出</li>
<li>移民申請</li>
<li>国際契約と協定</li>
<li>政府機関への提出書類</li>
</ul>
<p>当社の多言語チームは、英語、韓国語、中国語、日本語で書類をレビューできます。</p>`,
    },
  },
  {
    id: "6",
    slug: "setting-up-foreign-subsidiary",
    category: "corporate",
    question: {
      en: "What are the legal requirements for setting up a foreign subsidiary?",
      ko: "외국 자회사 설립을 위한 법적 요건은 무엇입니까?",
      zh: "设立外国子公司的法律要求是什么？",
      ja: "外国子会社を設立するための法的要件は何ですか？",
    },
    answer: {
      en: `<p>Establishing a foreign subsidiary involves multiple legal considerations that vary by jurisdiction.</p>
<h3>Registration Requirements</h3>
<ul>
<li>Corporate name registration and approval</li>
<li>Articles of incorporation or formation documents</li>
<li>Capital requirements (varies by jurisdiction)</li>
<li>Director and officer appointments</li>
</ul>
<h3>Regulatory Compliance</h3>
<ul>
<li>Business licenses and permits</li>
<li>Tax registration</li>
<li>Employment law compliance</li>
<li>Foreign investment approvals (if required)</li>
</ul>`,
      ko: `<p>외국 자회사 설립은 관할권에 따라 다양한 법적 고려 사항을 포함합니다.</p>
<h3>등록 요건</h3>
<ul>
<li>법인명 등록 및 승인</li>
<li>정관 또는 설립 문서</li>
<li>자본 요건 (관할권에 따라 다름)</li>
<li>이사 및 임원 임명</li>
</ul>
<h3>규제 준수</h3>
<ul>
<li>사업 면허 및 허가</li>
<li>세금 등록</li>
<li>노동법 준수</li>
<li>외국인 투자 승인 (필요한 경우)</li>
</ul>`,
      zh: `<p>设立外国子公司涉及多个法律考虑因素，因司法管辖区而异。</p>
<h3>注册要求</h3>
<ul>
<li>公司名称注册和批准</li>
<li>公司章程或组建文件</li>
<li>资本要求（因司法管辖区而异）</li>
<li>董事和高管任命</li>
</ul>
<h3>监管合规</h3>
<ul>
<li>营业执照和许可证</li>
<li>税务登记</li>
<li>劳动法合规</li>
<li>外国投资批准（如需要）</li>
</ul>`,
      ja: `<p>外国子会社の設立には、管轄区域によって異なる複数の法的考慮事項が含まれます。</p>
<h3>登録要件</h3>
<ul>
<li>法人名の登録と承認</li>
<li>定款または設立書類</li>
<li>資本要件（管轄区域により異なる）</li>
<li>取締役および役員の任命</li>
</ul>
<h3>規制遵守</h3>
<ul>
<li>事業許可と認可</li>
<li>税務登録</li>
<li>労働法の遵守</li>
<li>外国投資の承認（必要な場合）</li>
</ul>`,
    },
  },
];

export function getQAItemBySlug(slug: string): QAItem | undefined {
  return qaItems.find((item) => item.slug === slug);
}

export function getQAItemsByCategory(category: string): QAItem[] {
  if (category === "all") return qaItems;
  return qaItems.filter((item) => item.category === category);
}

export function searchQAItems(query: string, locale: Locale): QAItem[] {
  const lowerQuery = query.toLowerCase();
  return qaItems.filter(
    (item) =>
      item.question[locale].toLowerCase().includes(lowerQuery) ||
      item.answer[locale].toLowerCase().includes(lowerQuery)
  );
}

export function getRelatedQAItems(
  currentSlug: string,
  limit = 3
): QAItem[] {
  const currentItem = getQAItemBySlug(currentSlug);
  if (!currentItem) return [];

  return qaItems
    .filter(
      (item) =>
        item.slug !== currentSlug && item.category === currentItem.category
    )
    .slice(0, limit);
}
