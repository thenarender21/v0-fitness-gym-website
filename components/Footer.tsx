'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-navy-800 border-t border-red-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gold-primary mb-4">FITNESS EMPIRE</h3>
            <p className="text-gray-light/80 leading-relaxed">
              Transforming lives through fitness, one member at a time. Join our community of champions today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-light hover:text-red-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-red-primary flex-shrink-0 mt-1" />
                <a href="tel:+919773329211" className="text-gray-light hover:text-red-primary transition-colors">
                  +91 9773329211
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-red-primary flex-shrink-0 mt-1" />
                <a href="mailto:hello@fitnessempire.com" className="text-gray-light hover:text-red-primary transition-colors">
                  hello@fitnessempire.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-primary flex-shrink-0 mt-1" />
                <span className="text-gray-light">
                  123 Fitness Street<br />
                  Gym District, City 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-red-primary/10 text-red-primary rounded-lg hover:bg-red-primary hover:text-white transition-all duration-300"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-light/70 text-sm">
              © {currentYear} Fitness Empire. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-light/70 hover:text-gray-light text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-light/70 hover:text-gray-light text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
