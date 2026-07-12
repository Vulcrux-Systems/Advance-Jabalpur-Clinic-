'use client'

export default function MissionVisionValuesSection() {
  const cards = [
    {
      icon: '🎯',
      title: 'Our Mission',
      desc: 'To deliver world-class dental care that is painless, ethical and affordable for every patient that walks through our doors.'
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      desc: 'To be central India\'s most trusted dental hospital — a benchmark for clinical excellence and patient experience.'
    },
    {
      icon: '💖',
      title: 'Our Values',
      desc: 'Integrity, compassion, precision and a relentless commitment to continuous learning and patient comfort.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="w-16 h-16 bg-[#E8F5FF] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{card.title}</h3>
              <p className="text-[#475569]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
