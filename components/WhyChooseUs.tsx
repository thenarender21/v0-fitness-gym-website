'use client'

import { CheckCircle, Award, Clock, Users, TrendingUp } from 'lucide-react'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Certified Trainers',
      description: 'Our team consists of internationally certified fitness professionals with years of hands-on experience.',
    },
    {
      icon: Clock,
      title: '24/7 Access & Flexibility',
      description: 'Work out on your schedule with 24/7 facility access. We fit your lifestyle, not the other way around.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our members see measurable results within weeks. Join 414+ members who have transformed their bodies.',
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Be part of a welcoming, inclusive community that motivates and supports your fitness journey.',
    },
    {
      icon: CheckCircle,
      title: 'Premium Facilities',
      description: 'State-of-the-art equipment, spotless facilities, and a motivating atmosphere designed for success.',
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Why Choose <span className="text-gold-primary">Fitness Empire</span>?
          </h2>
          <div className="h-1 w-20 bg-red-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="flex gap-6 p-8 bg-navy-800 rounded-xl border border-gold-primary/20 hover:border-gold-primary/60 transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-red-primary/10 group-hover:bg-red-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-red-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-light/80 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-12 bg-gradient-to-r from-red-primary/10 to-gold-primary/10 rounded-xl border border-red-primary/30">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Life?</h3>
          <p className="text-gray-light text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of members who have already achieved their fitness goals at Fitness Empire.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-red-primary hover:bg-red-dark text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Transformation Today
          </a>
        </div>
      </div>
    </section>
  )
}
