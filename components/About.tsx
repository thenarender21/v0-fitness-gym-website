'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            About <span className="text-gold-primary">Fitness Empire</span>
          </h2>
          <div className="h-1 w-20 bg-red-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-light max-w-3xl mx-auto leading-relaxed">
            Since our founding 8 years ago, Fitness Empire has been dedicated to transforming lives through fitness. We believe that everyone deserves access to premium facilities, expert guidance, and an inspiring community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="border-l-4 border-red-primary pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-gray-light">
                Empower individuals to achieve their fitness goals through world-class training, state-of-the-art equipment, and unwavering support from our expert team.
              </p>
            </div>

            <div className="border-l-4 border-gold-primary pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-gray-light">
                To be the most trusted and inspiring fitness destination in the region, known for creating life-changing transformations and building a community of champions.
              </p>
            </div>

            <div className="border-l-4 border-red-primary pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">Why Choose Us</h3>
              <ul className="text-gray-light space-y-2">
                <li>✓ Premium equipment and facilities</li>
                <li>✓ Certified professional trainers</li>
                <li>✓ Personalized fitness programs</li>
                <li>✓ Supportive community environment</li>
              </ul>
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-6">
            <div className="bg-navy-800 p-8 rounded-xl border border-red-primary/20 hover:border-red-primary/50 transition-colors">
              <h4 className="text-4xl font-bold text-gold-primary mb-2">414+</h4>
              <p className="text-gray-light">Active Members Transformed</p>
            </div>

            <div className="bg-navy-800 p-8 rounded-xl border border-gold-primary/20 hover:border-gold-primary/50 transition-colors">
              <h4 className="text-4xl font-bold text-red-primary mb-2">8+</h4>
              <p className="text-gray-light">Years of Excellence</p>
            </div>

            <div className="bg-navy-800 p-8 rounded-xl border border-red-primary/20 hover:border-red-primary/50 transition-colors">
              <h4 className="text-4xl font-bold text-gold-primary mb-2">24/7</h4>
              <p className="text-gray-light">Facility Access for Members</p>
            </div>

            <div className="bg-gradient-to-r from-red-primary/10 to-gold-primary/10 p-8 rounded-xl border border-red-primary/30">
              <p className="text-white font-semibold italic">
                &quot;Fitness Empire isn&apos;t just a gym—it&apos;s a community of champions dedicated to your success.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
