"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Tech2Design's custom software solution improved our efficiency and productivity significantly. Their team is knowledgeable, experienced, and provides excellent technical support. Highly recommended for web-based software development.",
    name: "Anjali Patel",
    role: "Customer",
    company: "Ahmedabad",
    image: "/testimonial1.jpg",
    rating: 5,
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 2,
    quote: "GJTECH delivered an outstanding project that exceeded our expectations. Their understanding of modern architecture and commitment to quality is exceptional. They truly understand client needs.",
    name: "Michael Chen",
    role: "Project Manager",
    company: "Tech Solutions Inc.",
    image: "/testimonial2.jpg",
    rating: 5,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    quote: "Working with Tech2Design was a game-changer for our business. Their AI integration services transformed our operations and gave us a competitive edge in the market.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "InnovateCorp",
    image: "/testimonial3.jpg",
    rating: 5,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    quote: "The UI/UX design work they delivered was exceptional. Our user engagement increased by 300% after implementing their designs. Professional, creative, and results-driven team.",
    name: "David Rodriguez",
    role: "Marketing Director",
    company: "Digital Ventures",
    image: "/testimonial4.jpg",
    rating: 5,
    color: "from-blue-500 to-indigo-600"
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pexels-olliecraig1-32947407.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/25 to-indigo-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-emerald-700 mb-8 shadow-lg">
                <svg className="w-6 h-6 mr-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Client Success Stories
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-10 leading-tight">
                <span className="text-yellow-400">
                  Client Praises
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-medium">
                Discover what our clients say about working with Tech2Design. Real feedback from real projects that transformed businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Testimonial Cards */}
              <div className="flex overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto border border-white/30 relative overflow-hidden group">
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        {/* Decorative Elements */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500`}></div>
                        <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${testimonial.color} opacity-10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500`}></div>
                        
                        <div className="relative z-10">
                          <div className="flex flex-col lg:flex-row items-start gap-8 pl--12 pr--16">
                            {/* Quote Icon - Left Side */}
                            <div className="flex-shrink-0">
                              <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                </svg>
                              </div>
                            </div>

                            {/* Testimonial Content - Right Side */}
                            <div className="flex-1 min-w-0">
                              {/* Star Rating */}
                              <div className="flex items-center mb-4">
                                {renderStars(testimonial.rating)}
                                <span className="ml-2 text-sm font-semibold text-gray-600">({testimonial.rating}.0/5.0)</span>
                              </div>
                              
                              <blockquote className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6 font-medium">
                                &ldquo;{testimonial.quote}&rdquo;
                              </blockquote>
                              
                              <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0`}>
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="min-w-0">
                                  <div className="font-bold text-gray-900 text-base">{testimonial.name}</div>
                                  <div className="text-gray-600 font-medium text-sm">{testimonial.role} • {testimonial.company}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Navigation Arrows Inside Card */}
                        <button
                          onClick={prevTestimonial}
                          className="absolute left-2 top-1/2 transform -translate-y-1/22 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-white/30 group z-20"
                        >
                          <svg className="w-5 h-5 text-gray-700 group-hover:text-emerald-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button
                          onClick={nextTestimonial}
                          className="absolute right-16 top-1/2 transform -translate-y-1/16 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-white/30 group z-20"
                        >
                          <svg className="w-5 h-5 text-gray-700 group-hover:text-emerald-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-12 space-x-3">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => goToTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-emerald-500 to-purple-600 scale-125 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Blogs Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-emerald-700 mb-6 shadow-lg">
                <svg className="w-6 h-6 mr-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Articles
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
                Recent Blogs
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                Stay updated with the latest trends and insights in technology and design
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Blog Card 1 */}
              <div className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/30">
                <div className="h-56 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/25 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30">Technology</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    The Future of AI in Web Development
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Explore how artificial intelligence is revolutionizing the way we build and maintain websites, from automated testing to intelligent user experiences.
                  </p>
                  <Link href="/blog/ai-web-development" className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition-colors duration-200 group">
                    Read More 
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/30">
                <div className="h-56 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/25 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30">Design</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    UI/UX Design Trends for 2024
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Discover the latest design trends that will dominate the digital landscape this year, from micro-interactions to sustainable design principles.
                  </p>
                  <Link href="/blog/ui-ux-trends-2024" className="inline-flex items-center text-purple-600 font-bold hover:text-purple-700 transition-colors duration-200 group">
                    Read More 
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Blog Card 3 */}
              <div className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/30">
                <div className="h-56 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-red-400/30 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/25 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30">Development</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    Building Scalable Web Applications
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Learn the best practices for creating web applications that can grow with your business, from architecture patterns to performance optimization.
                  </p>
                  <Link href="/blog/scalable-web-apps" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors duration-200 group">
                    Read More 
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-purple-600 to-pink-600 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 via-purple-600/95 to-pink-600/95"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-15">
              <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-20 w-20 h-20 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-white rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl sm:text-2xl text-emerald-100 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
              Let&apos;s work together to create something amazing. Your success story could be next in our portfolio of satisfied clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link 
                href="/contact"
                className="group px-12 py-6 bg-white text-emerald-600 font-bold rounded-3xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/30 flex items-center space-x-4 text-lg"
              >
                <span>Start Your Project</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/services"
                className="group px-12 py-6 border-3 border-white text-white font-bold rounded-3xl hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-4 backdrop-blur-sm text-lg"
              >
                <span>View Our Services</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
