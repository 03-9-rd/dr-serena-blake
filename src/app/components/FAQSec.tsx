// 'use client'
// import { useState } from 'react'

// const faqs = [
//   { q: 'Do you accept insurance?', a: 'No, but a superbill is provided for self-submission.' },
//   { q: 'Are online sessions available?', a: 'Yes—all virtual sessions are conducted via Zoom.' },
//   { q: 'What is your cancellation policy?', a: '24-hour notice is required to cancel or reschedule a session.' },
// ]

// export default function FAQSec() {
//   const [open, setOpen] = useState<number | null>(null)

//   return (
//     <section className=" h-screen w-full py-12 px-6 text-white">
//       <div className="max-w-2xl mx-auto">
//         <h2 className="text-2xl font-bold mb-6 text-center">FAQ</h2>
//         {faqs.map((item, i) => (
//           <div key={i} className="border-b py-4">
//             <button className="w-full text-left flex justify-between font-medium text-gray" onClick={() => setOpen(open === i ? null : i)}>
//               {item.q}
//               <span>{open === i ? '-' : '+'}</span>
//             </button>
//             {open === i && <p className="mt-2 text-gray-600">{item.a}</p>}
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do you accept insurance?',
    a: 'No, but a superbill is provided for self-submission.',
  },
  {
    q: 'Are online sessions available?',
    a: 'Yes—all virtual sessions are conducted via Zoom.',
  },
  {
    q: 'What is your cancellation policy?',
    a: '24-hour notice is required to cancel or reschedule a session.',
  },
]

export default function FAQSec() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="w-full  bg-white py-16 px-4 scroll-mt-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-md shadow-sm">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium text-lg"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="text-xl">{open === i ? '−' : '+'}</span>
              </button>

              {/* Smooth transition */}
              <div
                className={`px-4 pb-4 text-gray-600 transition-all duration-300 ease-in-out ${
                  open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

