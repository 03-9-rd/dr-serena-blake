// src/components/AboutSection.tsx
// // app/components/AboutSection.tsx
// 'use client'
// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="w-full bg-gray-300 py-2 px-6 scroll-mt-20"
//     >
//       <div className="max-w-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
//         {/* Left: Image */}
//         <div>
//           <img
//             src="/dr-sarena.jpg" // Replace with your real image inside /public folder
//             alt="Dr. Serena Blake"
//             className="w-full h-auto rounded-lg shadow-xl object-cover"
//           />
//         </div>

//         {/* Right: About Text */}
//         <div className="text-gray-800 leading-relaxed space-y-6">
//           <h2 className="text-4xl font-bold tracking-tight">
//             About Dr. Serena Blake
//           </h2>

//           <p className="text-lg">
//             Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
//           </p>

//           <p className="text-lg">
//             She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
//           </p>

//           <p className="text-lg">
//             Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSec() {
  const { ref, inView } = useInView({
    triggerOnce: false, // ← change this
    threshold: 0.3,
  })

  return (
    <section id="about" className="py-20 px-6 bg-[#ffffff] scroll-mt-20">
      <div ref={ref} className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/dr-sarena.jpg"
            alt="Dr. Serena Blake"
            className="rounded-lg shadow-md w-full h-auto object-cover">
          </img>
        </motion.div>

        <motion.div
          className="md:w-1/2 text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-4">Meet Dr. Serena Blake</h2>
          <p className="text-base leading-relaxed">
            About: Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
