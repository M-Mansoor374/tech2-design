

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
          
          {/* Holographic Mesh Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
                              linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
              backgroundSize: '200px 200px, 300px 300px, 100px 100px'
            }}></div>
          </div>
          
          {/* Floating 3D Elements */}
          <div className="absolute inset-0">
            {/* Animated Globe */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
              <div className="absolute inset-4 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-8 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
            </div>
            
            {/* Orbiting Tech Nodes */}
            <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-1/4 left-1/3 w-8 h-8 border border-blue-400/30 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border border-purple-400/30 transform rotate-45 animate-pulse-slow"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            We Are Tech2Design
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Designers. Innovators. Future builders.
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

      {/* Mission & Vision Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="group">
              <div className="relative p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    The mission of Tech2Design is to drive innovation and excellence in technology and design by providing comprehensive and cutting-edge solutions tailored to the needs of each client. We aim to empower businesses through strategic digital transformations, ensuring they stay ahead in an ever-evolving technological landscape. At Tech2Design, our focus is on building sustainable, future-ready solutions that enhance growth and success for our clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group">
              <div className="relative p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Tech2Design envisions technology as a transformative force for business efficiency and growth. We lead in innovation, crafting digital experiences to meet current and future demands, empowering businesses to stay ahead in the digital landscape. Our commitment is to build a better tomorrow with sustainable, forward-thinking strategies, ensuring technology serves as a catalyst for positive change and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Journey Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2020 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="group">
                    <div className="relative p-8 bg-gradient-to-br from-blue-500/15 to-purple-500/15 backdrop-blur-xl border border-white/20 rounded-3xl transition-all duration-700 transform hover:scale-105 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-500/20">
                      {/* Enhanced glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Timeline node with enhanced styling */}
                      <div className="absolute -right-4 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-4 border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-500">
                        <div className="absolute inset-1 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-60"></div>
                      </div>
                      
                      {/* Content with enhanced typography */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-start mb-4">
                          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mr-4">2020</h3>
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <p className="text-gray-300 leading-relaxed text-lg font-light">
                            Founded in 2020, <span className="text-blue-300 font-semibold">Tech2Design</span> emerged with a mission to revolutionize how businesses integrate technology and design.
                          </p>
                          <p className="text-gray-300 leading-relaxed text-lg font-light">
                            Our aim is to drive innovation and create future-ready solutions that empower businesses to excel in a rapidly evolving digital landscape.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2021 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-1/2 pl-8">
                  <div className="group">
                    <div className="relative p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                      <div className="absolute -left-3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                      <h3 className="text-2xl font-bold text-white mb-2">2021</h3>
                      <p className="text-gray-300">In 2021, we launched our first AI-powered design platform, marking a significant milestone in our journey to revolutionize the integration of technology and design for businesses.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="group">
                    <div className="relative p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                      <div className="absolute -right-3 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-purple-400 rounded-full border-4 border-gray-900"></div>
                      <h3 className="text-2xl font-bold text-white mb-2 text-left">2022</h3>
                      <p className="text-gray-300">In 2022, we bolstered our team and delivered exceptional service to over 50 international clients, enhancing our global impact.</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-1/2 pl-8">
                  <div className="group">
                    <div className="relative p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                      <div className="absolute -left-3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900"></div>
                      <h3 className="text-2xl font-bold text-white mb-2">2023</h3>
                      <p className="text-gray-300">In 2023, we pioneered 3D web experiences with VR integration, enhancing our innovative technology solutions and solidifying our position as leaders in digital transformation services. This advancement underscores our dedication to delivering creative digital solutions and future-ready digital experiences for businesses worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="group">
                    <div className="relative p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                      <div className="absolute -right-3 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-orange-400 rounded-full border-4 border-gray-900"></div>
                      <h3 className="text-2xl font-bold text-white mb-2 text-left">2024</h3>
                      <p className="text-gray-300">In 2024, we lead the future of immersive digital experiences, enhancing design and technology integration. Our focus on AI-powered platforms and 3D VR experiences positions us at the forefront of creative digital solutions, driving tech-driven business growth for global clients.</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Creativity */}
            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Creativity</h3>
                  <p className="text-gray-300 text-sm">Pushing boundaries with innovative solutions</p>
                </div>
              </div>
            </div>

            {/* Precision */}
            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Precision</h3>
                  <p className="text-gray-300 text-sm">Attention to detail in every pixel</p>
                </div>
              </div>
            </div>

            {/* Innovation */}
            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-purple-500/10 mto-pink-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                  <p className="text-gray-300 text-sm">Embracing cutting-edge technologies</p>
                </div>
              </div>
            </div>

            {/* Integrity */}
            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
                  <p className="text-gray-300 text-sm">Building trust through transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Meet the Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Franics Winnett</h3>
                  <p className="text-blue-400 mb-3">Director</p>
                  <p className="text-gray-300 text-sm">Visionary leader driving our creative excellence</p>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Kellie rose</h3>
                  <p className="text-cyan-400 mb-3">Lead Developer</p>
                  <p className="text-gray-300 text-sm">Technical architect behind our innovations</p>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Chris Webb</h3>
                  <p className="text-purple-400 mb-3">Web Developer</p>
                  <p className="text-gray-300 text-sm">Crafting intuitive user experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-relaxed">
                &ldquo;We don&apos;t just design interfaces — we craft intelligent experiences.&rdquo;
              </h2>
              <p className="text-xl text-gray-300">
                — Tech2Design Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 