// src/components/ServicesSection.tsx
// const services = [
//   {
//     title: 'Anxiety & Stress Management',
//     desc: 'Learn to manage overwhelming emotions and navigate life’s challenges with CBT, relaxation strategies, and mindfulness practices tailored to your needs.',
//     img: '/images/anxiety.jpg',
//   },
//   {
//     title: 'Relationship Counseling',
//     desc: 'Couples and individuals receive guidance on communication, trust, and emotional intimacy to build healthier, stronger connections.',
//     img: '/images/relationship.jpg',
//   },
//   {
//     title: 'Trauma Recovery',
//     desc: 'Dr. Blake supports you through healing with trauma-informed care, helping you process past experiences and regain a sense of control and safety.',
//     img: '/images/trauma.jpg',
//   },
// ]

// export default function ServicesSec() {
//   return (
//     <section className=" h-screen w-full py-12 px-4 bg-blue">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold text-center mb-8">Services</h2>
//         <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
//           {services.map((s, i) => (
//             <div key={i} className="bg-gray-100 rounded-xl overflow-hidden shadow">
//               <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{s.title}</h3>
//                 <p className="mt-2 text-gray-600">{s.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

             'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Anxiety & Stress Management',
    desc: 'Learn to manage overwhelming emotions and navigate life’s challenges with CBT, relaxation strategies, and mindfulness practices tailored to your needs.',
    img: '/depression.jpg',
  },
  {
    title: 'Relationship Counseling',
    desc: 'Couples and individuals receive guidance on communication, trust, and emotional intimacy to build healthier, stronger connections.',
    img: '/relation.jpg',
  },
  {
    title: 'Trauma Recovery',
    desc: 'Dr. Blake supports you through healing with trauma-informed care, helping you process past experiences and regain a sense of control and safety.',
    img: '/trauma.jpg',
  },
]

export default function ServicesSec() {
  return (
    <section id="services" className="w-full py-16 px-4 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Services</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Session Fees */}
        <div className="mt-12 text-center border-t pt-10">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Session Fees</h3>
          <p className="text-gray-700 mb-1">💳 $200 / Individual Session</p>
          <p className="text-gray-700">💑 $240 / Couples Session</p>
        </div>
      </div>
    </section>
  )
}
