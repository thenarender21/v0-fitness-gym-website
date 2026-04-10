'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Marketing Manager',
      image: '/images/testimonial-1.jpg',
      before: '/images/before-1.jpg',
      after: '/images/after-1.jpg',
      text: 'Fitness Empire completely transformed my life! In just 6 months, I lost 30 pounds and gained confidence I never thought possible. The trainers are amazing!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      title: 'Software Engineer',
      image: '/images/testimonial-2.jpg',
      before: '/images/before-2.jpg',
      after: '/images/after-2.jpg',
      text: 'I was skeptical at first, but the personalized training programs really work. I&apos;ve never been stronger, and the community support keeps me motivated.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      title: 'Teacher',
      image: '/images/testimonial-3.jpg',
      before: '/images/before-3.jpg',
      after: '/images/after-3.jpg',
      text: 'The 24/7 access is perfect for my schedule. I&apos;ve built the physique I always wanted while becoming part of an incredible fitness family.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Member <span className="text-red-primary">Transformations</span>
          </h2>
          <div className="h-1 w-20 bg-gold-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            Real stories from real people who have transformed their bodies and lives at Fitness Empire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-navy-900 rounded-xl overflow-hidden border border-red-primary/20 hover:border-red-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-primary/20"
            >
              {/* Before/After Images */}
              <div className="flex gap-2 p-4 bg-navy-800">
                <div className="flex-1 relative h-48 rounded-lg overflow-hidden border border-gold-primary/30">
                  <Image
                    src={testimonial.before}
                    alt={`${testimonial.name} Before`}
                    fill
                    className="object-cover"
                  />
                  <p className="absolute bottom-2 left-2 bg-black/80 text-gold-primary text-xs font-bold px-2 py-1 rounded">BEFORE</p>
                </div>
                <div className="flex-1 relative h-48 rounded-lg overflow-hidden border border-gold-primary/30">
                  <Image
                    src={testimonial.after}
                    alt={`${testimonial.name} After`}
                    fill
                    className="object-cover"
                  />
                  <p className="absolute bottom-2 left-2 bg-black/80 text-gold-primary text-xs font-bold px-2 py-1 rounded">AFTER</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-primary text-gold-primary" />
                  ))}
                </div>

                <p className="text-gray-light mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>

                <div className="border-t border-red-primary/20 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gray-light/70 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-navy-900 rounded-xl border border-gold-primary/20">
            <p className="text-5xl font-bold text-red-primary mb-2">4.7★</p>
            <p className="text-gray-light">Average Rating</p>
          </div>
          <div className="p-8 bg-navy-900 rounded-xl border border-gold-primary/20">
            <p className="text-5xl font-bold text-gold-primary mb-2">414+</p>
            <p className="text-gray-light">Success Stories</p>
          </div>
          <div className="p-8 bg-navy-900 rounded-xl border border-gold-primary/20">
            <p className="text-5xl font-bold text-red-primary mb-2">98%</p>
            <p className="text-gray-light">Member Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
