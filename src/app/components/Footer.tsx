// export default function Footer() {
//   return (
//     <footer className="bg-gray-300 text-[#333333] text-center py-10 px-4 border-t border-[#e2e0d2]">
//       <div className="max-w-3xl mx-auto space-y-4 text-sm md:text-base">
//         <p className="font-medium text-lg">Dr. Serena Blake, PsyD (Clinical Psychologist)</p>

//         <p>
//           <a href="mailto:serena@blakepsychology.com" className="text-blue-600 underline hover:text-blue-800">
//             serena@blakepsychology.com
//           </a>
//         </p>

//         <p>
//           Phone: <a href="tel:3235550192" className="text-blue-600 underline hover:text-blue-800">(323) 555-0192</a>
//         </p>

//         <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>

        

//         <div className="flex justify-center gap-6 pt-4">
//           <a href="/" className="underline hover:text-blue-700">Home</a>
//           <a href="/privacy" className="underline hover:text-blue-700">Privacy Policy</a>
//           <a href="/estimate" className="underline hover:text-blue-700">Good Faith Estimate</a>
//         </div>

//         <div className="pt-6">
//           <a href="/client-portal" className="text-blue-600 underline hover:text-blue-800">
//             Client Portal
//           </a>
//         </div>

//         <p className="text-xs text-gray-500 pt-6">
//           © 2025 Dr. Serena Blake, PsyD. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   )
// }
'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-[#333333] text-center py-10 px-4 border-t border-[#e2e0d2]">
      <div className="max-w-3xl mx-auto space-y-4 text-sm md:text-base">
        <p className="font-medium text-lg">Dr. Serena Blake, PsyD (Clinical Psychologist)</p>

        <p>
          <a href="mailto:serena@blakepsychology.com" className="text-blue-600 underline hover:text-blue-800">
            serena@blakepsychology.com
          </a>
        </p>

        <p>
          Phone: <a href="tel:3235550192" className="text-blue-600 underline hover:text-blue-800">(323) 555-0192</a>
        </p>

        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>

        <div className="flex justify-center gap-6 pt-4">
          <Link href="/" className="underline hover:text-blue-700">Home</Link>
          <Link href="/privacy" className="underline hover:text-blue-700">Privacy Policy</Link>
          <Link href="/estimate" className="underline hover:text-blue-700">Good Faith Estimate</Link>
        </div>

        <div className="pt-6">
          <Link href="/client-portal" className="text-blue-600 underline hover:text-blue-800">
            Client Portal
          </Link>
        </div>

        <p className="text-xs text-gray-500 pt-6">
          © 2025 Dr. Serena Blake, PsyD. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
