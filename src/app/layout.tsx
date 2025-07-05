// app/layout.tsx
// export default function Home() {
  // app/layout.tsx
// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Serena Blake – Clinical Psychologist',
  description: 'Therapy services for anxiety, trauma, and relationships in Los Angeles',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon / browser image */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Or PNG alternative */}
        {/* <link rel="icon" href="/browser-icon.png" type="image/png" /> */}
      </head>
      <body className="bg-white text-gray-800 scroll-smooth">
        {children}
      </body>
    </html>
  )
}
