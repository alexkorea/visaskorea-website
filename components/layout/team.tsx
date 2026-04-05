import Image from "next/image"

const admins = [
  { name: "이원중", role: "대표행정사", roleEn: "Chief Admin", roleZh: "代表行政士", roleJa: "代表行政士", photo: "/team/leewj.jpg" },
  { name: "정유선", role: "행정사", roleEn: "Admin Specialist", roleZh: "行政士", roleJa: "行政士", photo: "/team/jungyus.jpg" },
  { name: "한경택", role: "행정사", roleEn: "Admin Specialist", roleZh: "行政士", roleJa: "行政士", photo: "/team/hankt.jpg" },
  { name: "김정은", role: "행정사", roleEn: "Admin Specialist", roleZh: "行政士", roleJa: "行政士", photo: "/team/kimje.jpg" },
  { name: "이시정", role: "행정사", roleEn: "Admin Specialist", roleZh: "行政士", roleJa: "行政士", photo: "/team/leesj.jpg" },
  { name: "정희정", role: "행정사", roleEn: "Admin Specialist", roleZh: "行政士", roleJa: "行政士", photo: "/team/junghj.jpg" },
]

const staff = [
  { name: "백승수", role: "사무장", roleEn: "Office Manager", roleZh: "事务长", roleJa: "事務長", photo: "/team/baekss.jpg" },
  { name: "김영주", role: "실장", roleEn: "Director", roleZh: "室长", roleJa: "室長", photo: "/team/kimyj.jpg" },
  { name: "허경", role: "실장", roleEn: "Director", roleZh: "室长", roleJa: "室長", photo: "/team/hukyung.jpg" },
]

const titles: Record<string, { title: string; subtitle: string; admin: string; staff: string }> = {
  ko: { title: "전문가 소개", subtitle: "풍부한 경험과 전문 지식을 갖춘 행정 전문가들이 함께합니다.", admin: "행정사", staff: "사무장 · 실장" },
  en: { title: "Our Team", subtitle: "Experienced professionals with deep expertise in immigration services.", admin: "Administrative Specialists", staff: "Office Managers" },
  zh: { title: "专家介绍", subtitle: "拥有丰富经验和专业知识的行政专家团队为您服务。", admin: "行政士", staff: "事务长 · 室长" },
  ja: { title: "専門家紹介", subtitle: "豊富な経験と専門知識を持つ行政専門家がお手伝いします。", admin: "行政士", staff: "事務長 · 室長" },
}

export function Team({ locale = "ko" }: { locale?: string }) {
  const t = titles[locale] || titles.ko
  const getRoleKey = (locale: string) => {
    if (locale === "en") return "roleEn"
    if (locale === "zh") return "roleZh"
    if (locale === "ja") return "roleJa"
    return "role"
  }
  const roleKey = getRoleKey(locale) as keyof typeof admins[0]

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
          <p className="mt-1 text-sm text-gray-500">{t.subtitle}</p>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{t.admin}</h3>
        <div className="grid gap-3 grid-cols-3 lg:grid-cols-6 mb-4">
          {admins.map((member) => (
            <div key={member.name} className="bg-gray-50 rounded-xl p-2 text-center">
              <div className="mx-auto mb-1 w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                <Image src={member.photo} alt={member.name} width={96} height={96} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">{member.name}</h4>
              <p className="text-xs text-blue-600">{member[roleKey] as string}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{t.staff}</h3>
        <div className="grid gap-3 grid-cols-3 max-w-lg mx-auto">
          {staff.map((member) => (
            <div key={member.name} className="bg-gray-50 rounded-xl p-2 text-center">
              <div className="mx-auto mb-1 w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                <Image src={member.photo} alt={member.name} width={96} height={96} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">{member.name}</h4>
              <p className="text-xs text-blue-600">{member[roleKey] as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
