'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-900 flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Hero Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-navy-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Transform Your <span className="text-red-primary">Body</span>, Transform Your <span className="text-gold-primary">Life</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-light mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
            Join Fitness Empire and get access to state-of-the-art facilities, expert trainers, and a supportive community dedicated to your transformation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="px-10 py-4 bg-red-primary hover:bg-red-dark text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-primary/50"
            >
              Start Your Journey
            </a>
            <a
              href="#about"
              className="px-10 py-4 border-2 border-gold-primary text-gold-primary hover:bg-gold-primary/10 font-bold text-lg rounded-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Hero Highlight */}
          <div className="mt-16 pt-8 border-t border-red-primary/30">
            <p className="text-gold-primary font-semibold text-lg">🏆 Trusted by 414+ Members | 4.7★ Rating</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-light text-sm">Scroll to explore</p>
          <svg className="w-6 h-6 text-red-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
