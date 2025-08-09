

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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            What We Build
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Transforming ideas into immersive digital realities.
          </p>

          {/* Floating Tech Elements */}
          <div className="flex justify-center space-x-8 mt-16">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg shadow-lg animate-float"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full shadow-lg animate-float" style={{animationDelay: '0.5s'}}></div>
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg shadow-lg animate-float" style={{animationDelay: '1s'}}></div>
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UI/UX Design Card */}
            <div className="service-card group">
              <div className="relative p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Create intuitive, beautiful interfaces that users love. From wireframes to pixel-perfect designs.
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Web Apps Card */}
            <div className="service-card group">
              <div className="relative p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">3D Web Apps</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Immersive 3D experiences that push the boundaries of web technology and user engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Integration Card */}
            <div className="service-card group">
              <div className="relative p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI Integration</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Smart solutions powered by artificial intelligence. From chatbots to predictive analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* Motion Design Card */}
            <div className="service-card group">
              <div className="relative p-8 bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Motion Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Fluid animations and micro-interactions that bring your digital experiences to life.
                  </p>
                </div>
              </div>
            </div>

            {/* Branding Card */}
            <div className="service-card group">
              <div className="relative p-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Branding</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Complete brand identity systems tha t tell your story and connect with your audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Web Development Card */}
            <div className="service-card group">
              <div className="relative p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Cutting-edge web applications built with modern technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Visual Element - 3D Globe */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 flex items-center justify-center">
            {/* 3D Globe */}
            <div className="relative w-64 h-64">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Let&apos;s Build the Future Together
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to transform your ideas into reality? Let&apos;s create something extraordinary.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 