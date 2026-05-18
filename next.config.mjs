/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.visaskorea.co.kr" }],
        destination: "https://visaskorea.co.kr/:path*",
        permanent: true,
      },
      // Old WordPress category/tag pages → blog listing
      { source: "/category/:slug*", destination: "/ko/blog", permanent: true },
      { source: "/tag/:slug*", destination: "/ko/blog", permanent: true },
      // Old WP-style page slugs
      { source: "/home", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },
      // Trailing slash blog/visa slugs (old WP URLs)
      { source: "/blog/:slug/", destination: "/ko/blog/:slug", permanent: true },
      { source: "/visa/:slug/", destination: "/ko/visa/:slug", permanent: true },

      // ── Duplicate content 301 redirects ──────────────────────────────────
      // E-7 rejection/reapplication duplicates → e7-visa-refusal-grounds-and-retry-plan
      { source: "/ko/blog/e7-visa-reapplication-after-rejection", destination: "/ko/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/en/blog/e7-visa-reapplication-after-rejection", destination: "/en/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/zh/blog/e7-visa-reapplication-after-rejection", destination: "/zh/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/ja/blog/e7-visa-reapplication-after-rejection", destination: "/ja/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/ko/blog/e7-visa-denial-reapplication-strategy", destination: "/ko/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/en/blog/e7-visa-denial-reapplication-strategy", destination: "/en/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/zh/blog/e7-visa-denial-reapplication-strategy", destination: "/zh/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/ja/blog/e7-visa-denial-reapplication-strategy", destination: "/ja/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/ko/blog/e7-visa-rejection-reapplication", destination: "/ko/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/en/blog/e7-visa-rejection-reapplication", destination: "/en/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/zh/blog/e7-visa-rejection-reapplication", destination: "/zh/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/ja/blog/e7-visa-rejection-reapplication", destination: "/ja/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/ko/blog/e7-visa-rejection-strategy", destination: "/ko/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/en/blog/e7-visa-rejection-strategy", destination: "/en/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/zh/blog/e7-visa-rejection-strategy", destination: "/zh/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      { source: "/ja/blog/e7-visa-rejection-strategy", destination: "/ja/blog/e7-visa-refusal-grounds-and-retry-plan", permanent: true },
      // E-7 salary duplicates → e7-visa-salary-minimum-wage-criteria
      { source: "/ko/blog/e7-visa-salary-requirements", destination: "/ko/blog/e7-visa-salary-minimum-wage-criteria", permanent: true },
      { source: "/en/blog/e7-visa-salary-requirements", destination: "/en/blog/e7-visa-salary-minimum-wage-criteria", permanent: true },
      { source: "/zh/blog/e7-visa-salary-requirements", destination: "/zh/blog/e7-visa-salary-minimum-wage-criteria", permanent: true },
      { source: "/ja/blog/e7-visa-salary-requirements", destination: "/ja/blog/e7-visa-salary-minimum-wage-criteria", permanent: true },
      // E-7 academic duplicates → e7-visa-academic-experience
      { source: "/ko/blog/e7-visa-academic-experience-requirements", destination: "/ko/blog/e7-visa-academic-experience", permanent: true },
      { source: "/en/blog/e7-visa-academic-experience-requirements", destination: "/en/blog/e7-visa-academic-experience", permanent: true },
      { source: "/zh/blog/e7-visa-academic-experience-requirements", destination: "/zh/blog/e7-visa-academic-experience", permanent: true },
      { source: "/ja/blog/e7-visa-academic-experience-requirements", destination: "/ja/blog/e7-visa-academic-experience", permanent: true },
      // E-7 85 occupations duplicates → e7-visa-85-occupations-list
      { source: "/ko/blog/e7-visa-85-occupations-complete-guide", destination: "/ko/blog/e7-visa-85-occupations-list", permanent: true },
      { source: "/en/blog/e7-visa-85-occupations-complete-guide", destination: "/en/blog/e7-visa-85-occupations-list", permanent: true },
      { source: "/zh/blog/e7-visa-85-occupations-complete-guide", destination: "/zh/blog/e7-visa-85-occupations-list", permanent: true },
      { source: "/ja/blog/e7-visa-85-occupations-complete-guide", destination: "/ja/blog/e7-visa-85-occupations-list", permanent: true },
      // D-8 investment duplicates → d8-corporate-investment-visa-guide
      { source: "/ko/blog/d8-foreign-investment-visa-guide", destination: "/ko/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/en/blog/d8-foreign-investment-visa-guide", destination: "/en/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/zh/blog/d8-foreign-investment-visa-guide", destination: "/zh/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ja/blog/d8-foreign-investment-visa-guide", destination: "/ja/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ko/blog/d8-investment-visa-guide", destination: "/ko/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/en/blog/d8-investment-visa-guide", destination: "/en/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/zh/blog/d8-investment-visa-guide", destination: "/zh/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ja/blog/d8-investment-visa-guide", destination: "/ja/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ko/blog/d8-investment-visa-capital-requirements", destination: "/ko/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/en/blog/d8-investment-visa-capital-requirements", destination: "/en/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/zh/blog/d8-investment-visa-capital-requirements", destination: "/zh/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ja/blog/d8-investment-visa-capital-requirements", destination: "/ja/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ko/blog/d8-investment-visa-capital-requirement-guide", destination: "/ko/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/en/blog/d8-investment-visa-capital-requirement-guide", destination: "/en/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/zh/blog/d8-investment-visa-capital-requirement-guide", destination: "/zh/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ja/blog/d8-investment-visa-capital-requirement-guide", destination: "/ja/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ko/blog/d8-capital-requirements-and-application-process", destination: "/ko/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/en/blog/d8-capital-requirements-and-application-process", destination: "/en/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/zh/blog/d8-capital-requirements-and-application-process", destination: "/zh/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ja/blog/d8-capital-requirements-and-application-process", destination: "/ja/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ko/blog/d8-corporate-investment-visa-application-documents", destination: "/ko/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/en/blog/d8-corporate-investment-visa-application-documents", destination: "/en/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/zh/blog/d8-corporate-investment-visa-application-documents", destination: "/zh/blog/d8-corporate-investment-visa-guide", permanent: true },
      { source: "/ja/blog/d8-corporate-investment-visa-application-documents", destination: "/ja/blog/d8-corporate-investment-visa-guide", permanent: true },
      // D-8 extension duplicates → d8-visa-extension-application-cautions
      { source: "/ko/blog/d8-visa-extension-procedure", destination: "/ko/blog/d8-visa-extension-application-cautions", permanent: true },
      { source: "/en/blog/d8-visa-extension-procedure", destination: "/en/blog/d8-visa-extension-application-cautions", permanent: true },
      { source: "/zh/blog/d8-visa-extension-procedure", destination: "/zh/blog/d8-visa-extension-application-cautions", permanent: true },
      { source: "/ja/blog/d8-visa-extension-procedure", destination: "/ja/blog/d8-visa-extension-application-cautions", permanent: true },
      // D-8-4 tech startup duplicates → d8-4-tech-startup-visa-eligibility-procedure
      { source: "/ko/blog/d8-4-tech-startup-visa-requirements", destination: "/ko/blog/d8-4-tech-startup-visa-eligibility-procedure", permanent: true },
      { source: "/en/blog/d8-4-tech-startup-visa-requirements", destination: "/en/blog/d8-4-tech-startup-visa-eligibility-procedure", permanent: true },
      { source: "/zh/blog/d8-4-tech-startup-visa-requirements", destination: "/zh/blog/d8-4-tech-startup-visa-eligibility-procedure", permanent: true },
      { source: "/ja/blog/d8-4-tech-startup-visa-requirements", destination: "/ja/blog/d8-4-tech-startup-visa-eligibility-procedure", permanent: true },
      // D-8 rejection duplicates → d8-visa-screening-and-denial-grounds
      { source: "/ko/blog/d8-visa-rejection-reasons", destination: "/ko/blog/d8-visa-screening-and-denial-grounds", permanent: true },
      { source: "/en/blog/d8-visa-rejection-reasons", destination: "/en/blog/d8-visa-screening-and-denial-grounds", permanent: true },
      { source: "/zh/blog/d8-visa-rejection-reasons", destination: "/zh/blog/d8-visa-screening-and-denial-grounds", permanent: true },
      { source: "/ja/blog/d8-visa-rejection-reasons", destination: "/ja/blog/d8-visa-screening-and-denial-grounds", permanent: true },
      // D-7 corporate duplicates → d7-corporate-transferee-visa-guide
      { source: "/ko/blog/d7-intracompany-transfer-visa-guide", destination: "/ko/blog/d7-corporate-transferee-visa-guide", permanent: true },
      { source: "/en/blog/d7-intracompany-transfer-visa-guide", destination: "/en/blog/d7-corporate-transferee-visa-guide", permanent: true },
      { source: "/zh/blog/d7-intracompany-transfer-visa-guide", destination: "/zh/blog/d7-corporate-transferee-visa-guide", permanent: true },
      { source: "/ja/blog/d7-intracompany-transfer-visa-guide", destination: "/ja/blog/d7-corporate-transferee-visa-guide", permanent: true },
      { source: "/ko/blog/d7-intracompany-transfer-visa", destination: "/ko/blog/d7-corporate-transferee-visa-guide", permanent: true },
      { source: "/en/blog/d7-intracompany-transfer-visa", destination: "/en/blog/d7-corporate-transferee-visa-guide", permanent: true },
      { source: "/zh/blog/d7-intracompany-transfer-visa", destination: "/zh/blog/d7-corporate-transferee-visa-guide", permanent: true },
      { source: "/ja/blog/d7-intracompany-transfer-visa", destination: "/ja/blog/d7-corporate-transferee-visa-guide", permanent: true },
      // F-2-7 duplicates → f2-7-points-visa-guide
      { source: "/ko/blog/f2-7-points-based-long-term-residency", destination: "/ko/blog/f2-7-points-visa-guide", permanent: true },
      { source: "/en/blog/f2-7-points-based-long-term-residency", destination: "/en/blog/f2-7-points-visa-guide", permanent: true },
      { source: "/zh/blog/f2-7-points-based-long-term-residency", destination: "/zh/blog/f2-7-points-visa-guide", permanent: true },
      { source: "/ja/blog/f2-7-points-based-long-term-residency", destination: "/ja/blog/f2-7-points-visa-guide", permanent: true },
      { source: "/ko/blog/f2-7-points-based-residence-visa-guide", destination: "/ko/blog/f2-7-points-visa-guide", permanent: true },
      { source: "/en/blog/f2-7-points-based-residence-visa-guide", destination: "/en/blog/f2-7-points-visa-guide", permanent: true },
      { source: "/zh/blog/f2-7-points-based-residence-visa-guide", destination: "/zh/blog/f2-7-points-visa-guide", permanent: true },
      { source: "/ja/blog/f2-7-points-based-residence-visa-guide", destination: "/ja/blog/f2-7-points-visa-guide", permanent: true },
      // F-5 permanent residence duplicates → f5-permanent-residence-visa-guide
      { source: "/ko/blog/f5-permanent-residency-korea-guide", destination: "/ko/blog/f5-permanent-residence-visa-guide", permanent: true },
      { source: "/en/blog/f5-permanent-residency-korea-guide", destination: "/en/blog/f5-permanent-residence-visa-guide", permanent: true },
      { source: "/zh/blog/f5-permanent-residency-korea-guide", destination: "/zh/blog/f5-permanent-residence-visa-guide", permanent: true },
      { source: "/ja/blog/f5-permanent-residency-korea-guide", destination: "/ja/blog/f5-permanent-residence-visa-guide", permanent: true },
      { source: "/ko/blog/f5-permanent-residency-conditions", destination: "/ko/blog/f5-permanent-residence-visa-guide", permanent: true },
      { source: "/en/blog/f5-permanent-residency-conditions", destination: "/en/blog/f5-permanent-residence-visa-guide", permanent: true },
      { source: "/zh/blog/f5-permanent-residency-conditions", destination: "/zh/blog/f5-permanent-residence-visa-guide", permanent: true },
      { source: "/ja/blog/f5-permanent-residency-conditions", destination: "/ja/blog/f5-permanent-residence-visa-guide", permanent: true },
      // F-6 denial duplicates → f6-visa-appeal-reapplication-guide
      { source: "/ko/blog/f6-visa-denial-retry", destination: "/ko/blog/f6-visa-appeal-reapplication-guide", permanent: true },
      { source: "/en/blog/f6-visa-denial-retry", destination: "/en/blog/f6-visa-appeal-reapplication-guide", permanent: true },
      { source: "/zh/blog/f6-visa-denial-retry", destination: "/zh/blog/f6-visa-appeal-reapplication-guide", permanent: true },
      { source: "/ja/blog/f6-visa-denial-retry", destination: "/ja/blog/f6-visa-appeal-reapplication-guide", permanent: true },
      { source: "/ko/blog/f6-visa-denial-reasons-and-reapplication-strategy", destination: "/ko/blog/f6-visa-appeal-reapplication-guide", permanent: true },
      { source: "/en/blog/f6-visa-denial-reasons-and-reapplication-strategy", destination: "/en/blog/f6-visa-appeal-reapplication-guide", permanent: true },
      { source: "/zh/blog/f6-visa-denial-reasons-and-reapplication-strategy", destination: "/zh/blog/f6-visa-appeal-reapplication-guide", permanent: true },
      { source: "/ja/blog/f6-visa-denial-reasons-and-reapplication-strategy", destination: "/ja/blog/f6-visa-appeal-reapplication-guide", permanent: true },
      // F-6 document duplicates → f6-marriage-visa-documents
      { source: "/ko/blog/f6-marriage-visa-document-checklist", destination: "/ko/blog/f6-marriage-visa-documents", permanent: true },
      { source: "/en/blog/f6-marriage-visa-document-checklist", destination: "/en/blog/f6-marriage-visa-documents", permanent: true },
      { source: "/zh/blog/f6-marriage-visa-document-checklist", destination: "/zh/blog/f6-marriage-visa-documents", permanent: true },
      { source: "/ja/blog/f6-marriage-visa-document-checklist", destination: "/ja/blog/f6-marriage-visa-documents", permanent: true },
      // E-2 duplicates → e2-english-teacher-visa-guide
      { source: "/ko/blog/e2-english-teacher-visa-korea-guide", destination: "/ko/blog/e2-english-teacher-visa-guide", permanent: true },
      { source: "/en/blog/e2-english-teacher-visa-korea-guide", destination: "/en/blog/e2-english-teacher-visa-guide", permanent: true },
      { source: "/zh/blog/e2-english-teacher-visa-korea-guide", destination: "/zh/blog/e2-english-teacher-visa-guide", permanent: true },
      { source: "/ja/blog/e2-english-teacher-visa-korea-guide", destination: "/ja/blog/e2-english-teacher-visa-guide", permanent: true },
      // D-2 duplicates → d2-part-time-work-permit
      { source: "/ko/blog/d2-part-time-work-permit-v2", destination: "/ko/blog/d2-part-time-work-permit", permanent: true },
      { source: "/en/blog/d2-part-time-work-permit-v2", destination: "/en/blog/d2-part-time-work-permit", permanent: true },
      { source: "/zh/blog/d2-part-time-work-permit-v2", destination: "/zh/blog/d2-part-time-work-permit", permanent: true },
      { source: "/ja/blog/d2-part-time-work-permit-v2", destination: "/ja/blog/d2-part-time-work-permit", permanent: true },
      // Chinese-titled KO post → ZH blog
      { source: "/ko/blog/d8-investment-visa-chinese-business-owners-2026", destination: "/zh/blog/d8-investment-visa-chinese-business-owners-2026", permanent: true },
    ];
  },
}

export default nextConfig
