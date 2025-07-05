// components/AvailabilitySection.tsx
'use client'

export default function AvailabilitySection() {
  return (
    <section className="bg-gray-50 py-16 px-6" id="availability">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Session Fees & Availability</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Office Hours */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Office Hours</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li><strong>In-person:</strong> Tue & Thu, 10 AM – 6 PM</li>
              <li><strong>Virtual (Zoom):</strong> Mon, Wed & Fri, 1 PM – 5 PM</li>
            </ul>
          </div>

          {/* Session Fees */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Session Fees</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li><strong>$200</strong> / Individual Session</li>
              <li><strong>$240</strong> / Couples Session</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
