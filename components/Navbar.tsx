'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-navy-800 border-b border-red-primary/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="text-2xl font-bold text-gold-primary hover:text-gold-light transition-colors">
            FITNESS EMPIRE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-light hover:text-gold-primary transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/join"
              className="px-6 py-2 bg-red-primary hover:bg-red-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-light hover:text-gold-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-navy-700 border-t border-red-primary/20">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-light hover:text-gold-primary transition-colors text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link
                href="/join"
                className="block w-full text-center px-4 py-2 bg-red-primary hover:bg-red-dark text-white font-semibold rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
