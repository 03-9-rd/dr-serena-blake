

'use client'

export default function HeroSec() {
  return (
    <section
      id="home"
      className="relative h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/mmm.jpg')" }}
    >
      {/* 🔴 Removed dark overlay */}

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          Compassionate Therapy for Growth & Healing
        </h1>
        <h2 className="text-lg md:text-2xl text-white mt-4 font-medium drop-shadow-sm">
          Dr. Serena Blake, PsyD – Clinical Psychologist in Los Angeles
        </h2>
        <a
          href="#contact"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 text-white rounded-lg shadow-lg text-lg"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  )
}

