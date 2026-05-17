export function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative min-h-[300px] flex items-center py-16 bg-gray-900">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>}
      </div>
    </section>
  )
}
