"use client";

import Link from 'next/link';

export default function UIUXTrends2024Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/reviews" className="inline-flex items-center text-white hover:text-purple-400 transition-colors duration-300 mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Testimonials
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-sm font-medium text-purple-300 mb-8">
            Design • UI/UX Trends
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            UI/UX Design Trends for 2024
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the latest design trends that will dominate the digital landscape this year, from micro-interactions to sustainable design principles.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">The Evolution of Digital Design</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                2024 marks a significant shift in how we approach digital design. With the rise of AI, increased focus on accessibility, and growing environmental consciousness, designers are creating experiences that are not just beautiful, but also intelligent, inclusive, and sustainable.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">Micro-Interactions and Animation</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Subtle animations and micro-interactions are becoming essential elements of modern UI design. These small, purposeful animations provide feedback, guide users, and create delightful moments that enhance the overall user experience without being distracting.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">Sustainable Design Principles</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As environmental concerns grow, sustainable design is becoming a priority. This includes optimizing for energy efficiency, reducing digital waste, and creating interfaces that encourage sustainable user behaviors while maintaining excellent usability.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">Accessibility-First Design</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Accessibility is no longer an afterthought but a fundamental principle of good design. From color contrast and typography to navigation and interaction patterns, inclusive design ensures that digital experiences work for everyone, regardless of their abilities.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">Looking Forward</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The future of UI/UX design is bright and full of possibilities. As technology continues to evolve, designers will have even more tools and opportunities to create meaningful, impactful experiences that truly serve their users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Create Trend-Setting Designs?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let Tech2Design help you implement the latest UI/UX trends in your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300">
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/services/ui-ux-design" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

