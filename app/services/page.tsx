
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">

      {/* Header Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
              backgroundSize: '100px 100px, 150px 150px'
            }}></div>
          </div>
          
          {/* Floating 3D Icons */}
          <div className="absolute inset-0">
            {/* Cube */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 transform rotate-45 animate-spin" style={{animationDuration: '20s'}}>
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg shadow-lg opacity-30"></div>
            </div>
            
            {/* Sphere */}
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full shadow-lg opacity-30 animate-pulse"></div>
            
            {/* Pyramid */}
            <div className="absolute bottom-1/3 left-1/3 w-20 h-20 transform rotate-45 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg shadow-lg opacity-30"></div>
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-full shadow-lg opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full shadow-lg opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            What We Build
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-2">
            Transforming ideas into immersive digital realities.
          </p>

          {/* Floating Tech Elements */}
          <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 mt-12 sm:mt-16">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg shadow-lg animate-float"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full shadow-lg animate-float" style={{animationDelay: '0.5s'}}></div>
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg shadow-lg animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* UI/UX Design Card */}
            <Link href="/services/ui-ux-design" className="service-card group">
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/Screenshot 2025-08-11 110559.png"
                        alt="UI/UX Design Showcase"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">UI/UX Design</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Create intuitive, beautiful interfaces that users love. From wireframes to pixel-perfect designs.
                  </p>
                </div>
              </div>
            </Link>

            {/* 3D Web Apps Card */}
            <Link href="/services/3d-web-apps" className="service-card group">
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/Screenshot 2025-08-11 113124.png"
                        alt="3D Web Apps Showcase"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">3D Web Apps</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Immersive 3D experiences that push the boundaries of web technology and user engagement.
                  </p>
                </div>
              </div>
            </Link>

            {/* AI Integration Card */}
            <Link href="/services/ai-integration" className="service-card group">
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/Screenshot 2025-08-11 113406.png"
                        alt="AI Integration Showcase"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">AI Integration</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Smart solutions powered by artificial intelligence. From chatbots to predictive analytics.
                  </p>
                </div>
              </div>
            </Link>

            {/* Motion Design Card */}
            <Link href="/services/motion-design" className="service-card group">
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/Screenshot 2025-08-11 113832.png"
                        alt="Motion Design Showcase"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Motion Design</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Fluid animations and micro-interactions that bring your digital experiences to life.
                  </p>
                </div>
              </div>
            </Link>

            {/* Branding Card */}
            <Link href="/services/branding" className="service-card group">
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/Screenshot 2025-08-11 130121.png"
                        alt="Branding Showcase"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Branding</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Complete brand identity systems that tell your story and connect with your audience.
                  </p>
                </div>
              </div>
            </Link>

            {/* Web Development Card */}
            <Link href="/services/web-development" className="service-card group">
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/Screenshot 2025-08-11 130350.png"
                        alt="Web Development Showcase"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Web Development</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Cutting-edge web applications built with modern technologies and best practices.
                  </p>
                </div>
              </div>
            </Link>

            {/* Graphic Designing Card */}
            <Link href="/services/graphic-designing" className="service-card group">
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-rose-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/Screenshot 2025-08-11 130533.png"
                        alt="Graphic Designing Showcase"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Graphic Designing</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Creative visual solutions that capture attention and communicate your message effectively.
                  </p>
                </div>
              </div>
            </Link>

            {/* Machine Learning Card */}
            <Link href="/services/machine-learning" className="service-card group">
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/Screenshot 2025-08-11 131044.png"
                        alt="Machine Learning Showcase"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Machine Learning</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Advanced AI algorithms and data-driven insights to automate and optimize your business processes.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Visual Element - 3D Globe */}
      <section className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
            {/* 3D Globe */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
              <div className="absolute inset-4 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-8 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              
              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-6 sm:p-8 md:p-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Let&apos;s Build the Future Together
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Ready to transform your ideas into reality? Let&apos;s create something extraordinary.
              </p>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 text-sm sm:text-base">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 