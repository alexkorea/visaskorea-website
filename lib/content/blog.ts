/**
 * Blog Data
 *
 * Blog posts with multilingual content.
 */

import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "navigating-cross-border-ma-transactions",
    category: "corporate",
    date: "2024-03-15",
    author: {
      name: "James Park",
      role: "Senior Partner",
    },
    image: "/images/blog/ma-transactions.jpg",
    title: {
      en: "Navigating Cross-Border M&A Transactions: Key Considerations",
      ko: "국경 간 M&A 거래 탐색: 주요 고려 사항",
      zh: "跨境并购交易导航：关键考虑因素",
      ja: "クロスボーダーM&A取引：重要な考慮事項",
    },
    excerpt: {
      en: "Understanding the complexities of international mergers and acquisitions requires careful attention to regulatory frameworks, cultural nuances, and strategic planning.",
      ko: "국제 인수합병의 복잡성을 이해하려면 규제 프레임워크, 문화적 뉘앙스 및 전략적 계획에 세심한 주의가 필요합니다.",
      zh: "理解国际并购的复杂性需要仔细关注监管框架、文化差异和战略规划。",
      ja: "国際的なM&Aの複雑さを理解するには、規制枠組み、文化的ニュアンス、戦略的計画への注意が必要です。",
    },
    content: {
      en: `<p>Cross-border mergers and acquisitions present unique challenges that require sophisticated legal expertise and cultural understanding.</p>
<h2>Regulatory Compliance</h2>
<p>Each jurisdiction has its own regulatory framework governing M&A activities. Understanding these requirements is essential for successful transaction completion.</p>
<h2>Due Diligence Considerations</h2>
<p>International due diligence requires a comprehensive approach that accounts for differences in legal systems, accounting standards, and business practices.</p>
<h2>Cultural Integration</h2>
<p>Beyond legal and financial considerations, successful cross-border M&A requires attention to cultural factors.</p>`,
      ko: `<p>국경 간 인수합병은 정교한 법률 전문성과 문화적 이해가 필요한 독특한 도전을 제시합니다.</p>
<h2>규제 준수</h2>
<p>각 관할권은 M&A 활동을 규율하는 고유한 규제 프레임워크를 가지고 있습니다.</p>
<h2>실사 고려 사항</h2>
<p>국제 실사는 법률 시스템, 회계 기준 및 비즈니스 관행의 차이를 고려하는 포괄적인 접근 방식이 필요합니다.</p>
<h2>문화 통합</h2>
<p>법적 및 재정적 고려 사항 외에도 성공적인 국경 간 M&A는 문화적 요인에 대한 관심이 필요합니다.</p>`,
      zh: `<p>跨境并购呈现出独特的挑战，需要精湛的法律专业知识和文化理解。</p>
<h2>监管合规</h2>
<p>每个司法管辖区都有其自己的监管框架来管理并购活动。</p>
<h2>尽职调查考虑因素</h2>
<p>国际尽职调查需要一种综合方法，考虑法律体系、会计准则和商业惯例的差异。</p>
<h2>文化整合</h2>
<p>除了法律和财务考虑因素外，成功的跨境并购还需要关注文化因素。</p>`,
      ja: `<p>クロスボーダーM&Aは、高度な法的専門知識と文化的理解を必要とする独特の課題を提示します。</p>
<h2>規制遵守</h2>
<p>各管轄区域には、M&A活動を規制する独自の規制枠組みがあります。</p>
<h2>デューデリジェンスの考慮事項</h2>
<p>国際的なデューデリジェンスには、法制度、会計基準、商慣行の違いを考慮した包括的なアプローチが必要です。</p>
<h2>文化的統合</h2>
<p>法的・財務的考慮に加えて、クロスボーダーM&Aの成功には文化的要因への配慮が必要です。</p>`,
    },
  },
  {
    id: "2",
    slug: "immigration-visa-updates-2024",
    category: "immigration",
    date: "2024-03-10",
    author: {
      name: "Sarah Kim",
      role: "Immigration Practice Lead",
    },
    image: "/images/blog/immigration.jpg",
    title: {
      en: "Immigration Visa Updates: What Businesses Need to Know in 2024",
      ko: "이민 비자 업데이트: 2024년 기업이 알아야 할 사항",
      zh: "移民签证更新：2024年企业需要了解的内容",
      ja: "移民ビザアップデート：2024年に企業が知るべきこと",
    },
    excerpt: {
      en: "Recent changes to immigration policies have significant implications for businesses employing international talent.",
      ko: "최근 이민 정책 변화는 국제 인재를 고용하는 기업에 중요한 영향을 미칩니다.",
      zh: "最近的移民政策变化对雇用国际人才的企业有重大影响。",
      ja: "最近の移民政策の変更は、国際人材を雇用する企業に重大な影響を与えています。",
    },
    content: {
      en: `<p>The landscape of business immigration continues to evolve, with significant changes affecting how companies hire and retain international talent.</p>
<h2>New Visa Categories</h2>
<p>Several jurisdictions have introduced new visa categories designed to attract highly skilled workers and entrepreneurs.</p>
<h2>Processing Time Changes</h2>
<p>Processing times for various visa categories have seen adjustments.</p>
<h2>Strategic Planning</h2>
<p>Given these changes, companies should review their immigration strategies and workforce planning.</p>`,
      ko: `<p>비즈니스 이민 환경은 계속 진화하고 있으며, 기업이 국제 인재를 고용하고 유지하는 방식에 영향을 미치는 중요한 변화가 있습니다.</p>
<h2>새로운 비자 카테고리</h2>
<p>여러 관할권에서 고숙련 근로자와 기업가를 유치하기 위해 설계된 새로운 비자 카테고리를 도입했습니다.</p>
<h2>처리 시간 변경</h2>
<p>다양한 비자 카테고리의 처리 시간이 조정되었습니다.</p>
<h2>전략적 계획</h2>
<p>이러한 변화를 감안하여 기업은 이민 전략과 인력 계획을 검토해야 합니다.</p>`,
      zh: `<p>商业移民的格局继续演变，重大变化影响着公司如何雇用和留住国际人才。</p>
<h2>新签证类别</h2>
<p>几个司法管辖区推出了新的签证类别，旨在吸引高技能工人和企业家。</p>
<h2>处理时间变更</h2>
<p>各种签证类别的处理时间已经调整。</p>
<h2>战略规划</h2>
<p>鉴于这些变化，公司应该审查其移民策略和劳动力规划。</p>`,
      ja: `<p>ビジネス移民の環境は進化し続けており、企業が国際人材を雇用・維持する方法に影響を与える重要な変化があります。</p>
<h2>新しいビザカテゴリー</h2>
<p>いくつかの管轄区域で、高度技能労働者や起業家を誘致するための新しいビザカテゴリーが導入されました。</p>
<h2>処理時間の変更</h2>
<p>様々なビザカテゴリーの処理時間が調整されました。</p>
<h2>戦略的計画</h2>
<p>これらの変化を考慮して、企業は移民戦略と人材計画を見直す必要があります。</p>`,
    },
  },
  {
    id: "3",
    slug: "protecting-intellectual-property-digital-age",
    category: "ip",
    date: "2024-03-05",
    author: {
      name: "David Chen",
      role: "IP Practice Lead",
    },
    image: "/images/blog/ip-protection.jpg",
    title: {
      en: "Protecting Intellectual Property in the Digital Age",
      ko: "디지털 시대의 지적재산권 보호",
      zh: "数字时代的知识产权保护",
      ja: "デジタル時代の知的財産権保護",
    },
    excerpt: {
      en: "As businesses increasingly operate in digital environments, protecting intellectual property requires new strategies and vigilant enforcement.",
      ko: "기업이 점점 더 디지털 환경에서 운영됨에 따라 지적재산권 보호에는 새로운 전략과 철저한 집행이 필요합니다.",
      zh: "随着企业越来越多地在数字环境中运营，保护知识产权需要新的策略和严格的执行。",
      ja: "企業がデジタル環境での運営を増やす中、知的財産権の保護には新しい戦略と徹底した執行が必要です。",
    },
    content: {
      en: `<p>The digital transformation of business has created both opportunities and challenges for intellectual property protection.</p>
<h2>Understanding Digital IP Risks</h2>
<p>Digital assets face unique vulnerabilities including unauthorized copying, distribution, and modification.</p>
<h2>Registration and Documentation</h2>
<p>Proper registration of trademarks, patents, and copyrights remains fundamental.</p>
<h2>Enforcement Strategies</h2>
<p>When infringement occurs, swift and appropriate action is essential.</p>`,
      ko: `<p>비즈니스의 디지털 전환은 지적재산권 보호에 기회와 도전을 동시에 만들어냈습니다.</p>
<h2>디지털 IP 위험 이해</h2>
<p>디지털 자산은 무단 복제, 배포 및 수정을 포함한 고유한 취약점에 직면합니다.</p>
<h2>등록 및 문서화</h2>
<p>상표, 특허 및 저작권의 적절한 등록은 여전히 기본입니다.</p>
<h2>집행 전략</h2>
<p>침해가 발생하면 신속하고 적절한 조치가 필수적입니다.</p>`,
      zh: `<p>商业的数字化转型为知识产权保护创造了机遇和挑战。</p>
<h2>了解数字IP风险</h2>
<p>数字资产面临独特的脆弱性，包括未经授权的复制、分发和修改。</p>
<h2>注册和文档</h2>
<p>商标、专利和版权的正确注册仍然是基础。</p>
<h2>执行策略</h2>
<p>当侵权发生时，迅速和适当的行动是必不可少的。</p>`,
      ja: `<p>ビジネスのデジタル変革は、知的財産権保護に機会と課題の両方をもたらしました。</p>
<h2>デジタルIPリスクの理解</h2>
<p>デジタル資産は、無断コピー、配布、改変などの固有の脆弱性に直面しています。</p>
<h2>登録と文書化</h2>
<p>商標、特許、著作権の適切な登録は依然として基本です。</p>
<h2>執行戦略</h2>
<p>侵害が発生した場合、迅速かつ適切な対応が不可欠です。</p>`,
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "all") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter(
      (post) =>
        post.slug !== currentSlug && post.category === currentPost.category
    )
    .slice(0, limit);
}
