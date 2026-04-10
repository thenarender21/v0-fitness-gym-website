'use client'

import { Star, Users, Trophy } from 'lucide-react'

export default function SocialProof() {
  const stats = [
    {
      icon: Star,
      value: '4.7',
      label: 'Star Rating',
      subtext: '414+ reviews',
    },
    {
      icon: Users,
      value: '414+',
      label: 'Active Members',
      subtext: 'Growing daily',
    },
    {
      icon: Trophy,
      value: '8+',
      label: 'Years of Excellence',
      subtext: 'Industry leaders',
    },
  ]

  return (
    <section className="bg-navy-800 py-16 px-4 border-y border-red-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center hover:transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-red-primary/10 rounded-full border border-red-primary/30">
                    <Icon className="w-8 h-8 text-red-primary" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-gold-primary mb-2">{stat.value}</h3>
                <p className="text-gray-light font-semibold text-lg">{stat.label}</p>
                <p className="text-gray-light/70 text-sm mt-1">{stat.subtext}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
