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

//         'use client'

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ServicesSec() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  const services = [
    {
      title: 'Anxiety & Stress',
      desc: 'Learn to manage overwhelming thoughts and find calm through guided strategies.',
      img: '/trauma.jpg',
    },
    {
      title: 'Depression',
      desc: 'Supportive therapy to help lift the fog of depression and rediscover joy.',
      img: '/depression.jpg',
    },
    {
      title: 'Relationship Issues',
      desc: 'Heal communication breakdowns and build stronger, meaningful connections.',
      img: '/relation.jpg',
    },
    {
      title: 'Self-Esteem & Confidence',
      desc: 'Empowering sessions to help you build a positive self-image and inner strength.',
      img: '/confidence.jpg',
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-[#f3f4f6] scroll-mt-20">
      <div ref={ref} className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          Services Offered
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
