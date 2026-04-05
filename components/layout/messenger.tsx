import Image from "next/image"

const messengers = [
  { name: "Kakao Talk", qr: "/qr/kakao.jpg" },
  { name: "WeChat", qr: "/qr/wechat.jpg" },
  { name: "LINE", qr: "/qr/line.jpg" },
  { name: "WhatsApp", qr: "/qr/whatsapp.jpg" },
]

const titles: Record<string, { title: string; subtitle: string }> = {
  ko: { title: "메신저 상담", subtitle: "편하신 메신저로 언제든 상담하세요" },
  en: { title: "Messenger Consultation", subtitle: "Contact us through your preferred messenger" },
  zh: { title: "即时通讯咨询", subtitle: "通过您常用的通讯工具联系我们" },
  ja: { title: "メッセンジャー相談", subtitle: "お好みのメッセンジャーでお気軽にご相談ください" },
}

export function Messenger({ locale = "ko" }: { locale?: string }) {
  const t = titles[locale] || titles.ko

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{t.title}</h2>
          <p className="text-sm text-gray-500">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {messengers.map((m) => (
            <div key={m.name} className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-28 h-28 mx-auto mb-2 rounded-lg overflow-hidden border border-gray-100">
                <Image src={m.qr} alt={`${m.name} QR Code`} width={112} height={112} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{m.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
