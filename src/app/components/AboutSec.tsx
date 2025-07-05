// src/components/AboutSection.tsx
// // app/components/AboutSection.tsx
'use client'

// export default function AboutSection() {
//   return (
//     <section id="about" className="w-full py-16 px-6 bg-white scroll-mt-20">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
//         {/* Left: Image */}
//         <div>
//           <img
//             src="/dr-serena.jpg" // replace with your actual image in public folder
//             alt="Dr. Serena Blake"
//             className="w-full h-auto object-cover rounded-xl shadow-lg"
//           />
//         </div>

//         {/* Right: Text */}
//         <div className="space-y-6 text-gray-800">
//           <h2 className="text-4xl font-bold">About Dr. Serena Blake</h2>
//           <p className="text-lg leading-relaxed">
//             Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
//           </p>
//           <p className="text-lg leading-relaxed">
//             Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-white py-20 px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image */}
        <div>
          <img
            src="/dr-sarena.jpg" // Replace with your real image inside /public folder
            alt="Dr. Serena Blake"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>

        {/* Right: About Text */}
        <div className="text-gray-800 leading-relaxed space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">
            About Dr. Serena Blake
          </h2>

          <p className="text-lg">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
          </p>

          <p className="text-lg">
            She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>

          <p className="text-lg">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>
    </section>
  )
}
