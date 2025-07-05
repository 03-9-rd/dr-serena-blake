'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [showNav, setShowNav] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setShowNav(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow-md ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-700">Dr. Serena Blake</h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          <Link href="#home" className="hover:text-blue-600 text-black">Home</Link>
          <Link href="#about" className="hover:text-blue-600 text-black">About</Link>
          <Link href="#services" className="hover:text-blue-600 text-black">Services</Link>
          <Link href="#faq" className="hover:text-blue-600 text-black">FAQ</Link>
          <Link href="#contact" className="hover:text-blue-600 text-black">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link href="#home" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="block">About</Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="block">Services</Link>
          <Link href="#faq" onClick={() => setIsOpen(false)} className="block">FAQ</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </header>
  )
}
