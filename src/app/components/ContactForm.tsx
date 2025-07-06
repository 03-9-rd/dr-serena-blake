// 'use client'
// import { useState } from 'react'

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', time: '', agree: false })
//   const [errors, setErrors] = useState<any>({})

//   const handleChange = (e: any) => {
//     const { name, type, value, checked } = e.target
//     setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
//   }

//   const handleSubmit = (e: any) => {
//     e.preventDefault()
//     const newErrors: any = {}
//     if (!form.name) newErrors.name = 'Name is required'
//     if (!form.phone) newErrors.phone = 'Phone is required'
//     if (!form.email || !form.email.includes('@')) newErrors.email = 'Valid email required'
//     if (!form.message) newErrors.message = 'Message required'
//     if (!form.time) newErrors.time = 'Preferred time required'
//     if (!form.agree) newErrors.agree = 'Consent required'
//     setErrors(newErrors)

//     if (Object.keys(newErrors).length === 0) {
//       alert('Form submitted!')
//     }
//   }

//   return (
//     <section className=" w-full h-screen py-12 px-6 ">
//       <div className="max-w-xl mx-auto">
//         <h2 className="text-2xl font-bold mb-6 text-center">Contact Dr. Blake</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//           <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded" />
//           {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

//           <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//           <textarea name="message" placeholder="What brings you here?" value={form.message} onChange={handleChange} className="w-full p-2 border rounded" />
//           {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

//           <input name="time" placeholder="Preferred time to reach you" value={form.time} onChange={handleChange} className="w-full p-2 border rounded" />
//           {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}

//           <div className="flex items-center space-x-2">
//             <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
//             <label>I agree to be contacted</label>
//           </div>
//           {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

//           <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   )
// }
'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    time: '',
    agree: false,
  })
  const [errors, setErrors] = useState<any>({})

  const handleChange = (e: any) => {
    const { name, type, value, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const newErrors: any = {}
    if (!form.name) newErrors.name = 'Name is required'
    if (!form.phone) newErrors.phone = 'Phone is required'
    if (!form.email || !form.email.includes('@')) newErrors.email = 'Valid email required'
    if (!form.message) newErrors.message = 'Message required'
    if (!form.time) newErrors.time = 'Preferred time required'
    if (!form.agree) newErrors.agree = 'Consent required'
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted!')
    }
  }

  return (

<section id="contact" className="w-full py-12 px-6 bg-white scroll-mt-20">
      <div className="max-w-2xl mx-auto bg-gray-200 shadow-xl rounded-xl p-8 md:p-10 border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Contact Dr. Blake</h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="What brings you here?"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 h-28 resize-none text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Time */}
          <div>
            <input
              type="text"
              name="time"
              placeholder="Preferred time to reach you"
              value={form.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
          </div>

          {/* Consent */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="agree" className="text-sm text-gray-800">
              I agree to be contacted
            </label>
          </div>
          {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>

      </div>

    </section>
    

  )
}
