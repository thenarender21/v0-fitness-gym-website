'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, CheckCircle2 } from 'lucide-react'

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipPlan: 'monthly',
    experience: 'beginner',
    goals: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const membershipPlans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '₹3,999',
      period: '/month',
      features: ['Unlimited gym access', 'Access to all equipment', '2 personal training sessions/month', 'Group fitness classes'],
    },
    {
      id: 'quarterly',
      name: 'Quarterly',
      price: '₹10,499',
      period: '/3 months',
      features: ['Unlimited gym access', 'Access to all equipment', '4 personal training sessions/month', 'Personalized nutrition plan', 'Priority support'],
      popular: true,
    },
    {
      id: 'yearly',
      name: 'Yearly',
      price: '₹39,999',
      period: '/year',
      features: ['Unlimited gym access', 'Access to all equipment', '6 personal training sessions/month', 'Personalized nutrition plan', 'Guest passes (2/month)', 'Exclusive events access'],
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        membershipPlan: 'monthly',
        experience: 'beginner',
        goals: '',
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-navy-900 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold-primary hover:text-gold-light transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Join Fitness Empire</h1>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            Choose your membership plan and start your transformation journey today
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Membership Plans */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Select Your Plan</h2>
              <div className="space-y-4">
                {membershipPlans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setFormData((prev) => ({ ...prev, membershipPlan: plan.id }))}
                    className={`p-4 rounded-lg cursor-pointer transition-all border-2 ${
                      formData.membershipPlan === plan.id
                        ? 'border-red-primary bg-red-primary/10'
                        : 'border-gray-dark/30 bg-navy-800 hover:bg-navy-700'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-white">{plan.name}</h3>
                        <p className="text-gold-primary font-semibold text-lg">
                          {plan.price}
                          <span className="text-sm text-gray-light">{plan.period}</span>
                        </p>
                      </div>
                      {plan.popular && (
                        <span className="px-3 py-1 bg-red-primary text-white text-xs font-bold rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-light flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-gold-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <div className="bg-navy-800 border border-red-primary/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Registration Details</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-light font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-navy-900 border border-gray-dark/30 rounded-lg text-white placeholder-gray-dark/50 focus:outline-none focus:border-red-primary focus:ring-1 focus:ring-red-primary/30 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-light font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-navy-900 border border-gray-dark/30 rounded-lg text-white placeholder-gray-dark/50 focus:outline-none focus:border-red-primary focus:ring-1 focus:ring-red-primary/30 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-light font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-navy-900 border border-gray-dark/30 rounded-lg text-white placeholder-gray-dark/50 focus:outline-none focus:border-red-primary focus:ring-1 focus:ring-red-primary/30 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-gray-light font-semibold mb-2">Fitness Experience</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-navy-900 border border-gray-dark/30 rounded-lg text-white focus:outline-none focus:border-red-primary focus:ring-1 focus:ring-red-primary/30 transition-colors"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  {/* Fitness Goals */}
                  <div>
                    <label className="block text-gray-light font-semibold mb-2">Fitness Goals</label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-navy-900 border border-gray-dark/30 rounded-lg text-white placeholder-gray-dark/50 focus:outline-none focus:border-red-primary focus:ring-1 focus:ring-red-primary/30 transition-colors resize-none"
                      placeholder="Tell us about your fitness goals..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-red-primary hover:bg-red-dark text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-primary/50"
                  >
                    Complete Registration
                  </button>

                  {/* Terms */}
                  <p className="text-center text-sm text-gray-light/70">
                    By registering, you agree to our terms and conditions. We&apos;ll contact you within 24 hours to confirm your membership.
                  </p>
                </form>
              </div>
            ) : (
              /* Success Message */
              <div className="bg-navy-800 border-2 border-green-600 rounded-xl p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Welcome to Fitness Empire!</h2>
                <p className="text-gray-light text-lg mb-6">
                  Your registration is successful. We&apos;ll contact you at {formData.phone} within 24 hours to confirm your membership and get you started.
                </p>
                <p className="text-gold-primary font-semibold text-xl">
                  {membershipPlans.find((p) => p.id === formData.membershipPlan)?.name} Plan
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-navy-800 border border-red-primary/20 rounded-xl p-8 grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gold-primary mb-2">📍 Location</h3>
            <p className="text-gray-light">
              Manorama Nagar Rd, Opposite State Bank of India, Dokali Pada, Dhokali, Thane West, Maharashtra 400607
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gold-primary mb-2">📞 Call Us</h3>
            <a href="tel:+919773329211" className="text-red-primary hover:text-red-light font-semibold">
              +91 9773329211
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gold-primary mb-2">💬 WhatsApp</h3>
            <a
              href="https://wa.me/919773329211?text=Hi%20Fitness%20Empire%2C%20I%27m%20interested%20in%20joining%21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 font-semibold"
            >
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
