'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MachineLearningPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-emerald-300 mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Machine Learning Services
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Unleashing the Power</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              of Intelligent Automation
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            At <span className="text-emerald-300 font-semibold">Tech2Design</span>, we harness the cutting-edge power of machine learning to transform your business operations. Our advanced AI algorithms and data-driven solutions automate complex processes, predict trends, and unlock unprecedented insights that drive innovation and competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 flex items-center space-x-3"
            >
              <span>Start Your Project</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/projects"
              className="group px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 backdrop-blur-sm hover:bg-white/5"
            >
              <span>View Our Work</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Machine Learning Showcase Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Machine Learning Showcase</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of artificial intelligence and neural network technology
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                <Image
                  src="/Screenshot 2025-08-11 131044.png"
                  alt="Machine Learning Showcase - AI Brain with Neural Networks"
                  width={500}
                  height={400}
                  className="w-auto h-auto max-w-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2">
                <span className="text-sm font-semibold">Advanced AI Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Machine Learning Expertise Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Machine Learning Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI solutions that revolutionize how you operate and compete
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Predictive Analytics */}
            <div className="group">
              <div className="relative p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Leverage advanced machine learning algorithms to forecast trends, identify patterns, and make data-driven decisions that give you a competitive edge in your market.
                  </p>
                </div>
              </div>
            </div>

            {/* Natural Language Processing */}
            <div className="group">
              <div className="relative p-8 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Natural Language Processing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Build intelligent chatbots, sentiment analysis systems, and language understanding applications that enhance customer interactions and automate communication processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Computer Vision */}
            <div className="group">
              <div className="relative p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Computer Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Develop intelligent image and video analysis systems that can recognize objects, detect anomalies, and extract valuable insights from visual data to optimize operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Recommendation Systems */}
            <div className="group">
              <div className="relative p-8 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Recommendation Systems</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Create personalized recommendation engines that understand user preferences and behavior, driving engagement, conversions, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Deep Learning Solutions */}
            <div className="group md:col-span-2">
              <div className="relative p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Deep Learning Solutions</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Implement cutting-edge neural networks and deep learning architectures that solve complex problems, from autonomous systems to advanced pattern recognition, delivering breakthrough results that transform your business capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Machine Learning Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Why Choose Our Machine Learning Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI expertise can revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cutting-Edge Technology */}
            <div className="text-center group">
              <div className="relative p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Stay ahead of the competition with the latest machine learning frameworks, algorithms, and AI technologies that deliver superior performance and accuracy.
                  </p>
                </div>
              </div>
            </div>

            {/* Data-Driven Insights */}
            <div className="text-center group">
              <div className="relative p-8 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Insights</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Transform raw data into actionable intelligence with advanced analytics and machine learning models that reveal hidden patterns and opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Scalable Solutions */}
            <div className="text-center group">
              <div className="relative p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Build robust, scalable machine learning systems that grow with your business, handling increasing data volumes and evolving requirements seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl border border-white/20 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-400/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to start your machine learning journey and unlock the transformative potential of intelligent automation that drives innovation and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 flex items-center space-x-3"
                >
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link 
                  href="/services"
                  className="group px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 backdrop-blur-sm hover:bg-white/5"
                >
                  <span>View All Services</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

