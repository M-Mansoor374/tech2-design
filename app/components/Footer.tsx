"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle navigation to service pages
  const navigateToService = (servicePath: string) => {
    window.location.href = servicePath;
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
            backgroundSize: '100px 100px, 150px 150px, 200px 200px'
          }}></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-cyan-400/45 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-pink-400/35 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-green-400/30 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-20 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 right-0 w-16 h-0.5 bg-gradient-to-l from-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400/40 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-blue-400/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border border-purple-400/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 border border-cyan-400/20 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-5 h-5 border border-pink-400/20 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Top Section with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            
            {/* Company Info with Enhanced Styling */}
            <div className="lg:col-span-2">
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-6">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 transform group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/WhatsApp Image 2025-08-12 at 13.05.18_e89f280b.LOGO - Edited.png"
                      alt="Tech 2 Design Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="text-white text-center sm:text-left">
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-semibold leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                      Innovating tomorrow, today.
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-md leading-relaxed text-base sm:text-lg text-center sm:text-left">
                Transforming ideas into immersive digital realities. We craft intelligent, 
                interactive, and inspiring digital experiences that empower brands to shape the future.
              </p>
              
                             {/* Enhanced Contact Info */}
               <div className="space-y-4">
                 <div className="flex items-center space-x-3 sm:space-x-4 group">
                   <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                   </div>
                   <a href="mailto:Info@tech2design.co.uk" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm sm:text-base break-all">
                     Info@tech2design.co.uk
                   </a>
                 </div>
                 
                 <div className="flex items-center space-x-3 sm:space-x-4 group">
                   <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                   </div>
                   <span className="text-gray-300 font-medium text-sm sm:text-base">Lincolnshire UK</span>
                 </div>

                                   {/* Facebook Icon */}
                  <div className="flex items-center space-x-3 sm:space-x-4 group">
                    <a href="https://www.facebook.com/share/19d16BGDhX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon group">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl border border-gray-700/50 hover:border-blue-400/50 flex-shrink-0">
                        <svg className="w-5 h-5 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                    </a>
                    <span className="text-gray-300 font-medium text-sm sm:text-base">Follow us on Facebook</span>
                  </div>
               </div>
            </div>

            {/* Quick Links with Enhanced Design */}
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-6 sm:mb-8 relative">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quick Links</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </h3>
              <div className="space-y-4 sm:space-y-5">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="block text-gray-300 hover:text-white transition-all duration-300 group w-full text-left transform hover:translate-x-2 py-2 sm:py-3 min-h-[44px] flex items-center"
                >
                  <span className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-base sm:text-lg">Home</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="block text-gray-300 hover:text-white transition-all duration-300 group w-full text-left transform hover:translate-x-2"
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-lg">About Us</span>
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="block text-gray-300 hover:text-white transition-all duration-300 group w-full text-left transform hover:translate-x-2"
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-lg">Services</span>
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="block text-gray-300 hover:text-white transition-all duration-300 group w-full text-left transform hover:translate-x-2"
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-lg">Projects</span>
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block text-gray-300 hover:text-white transition-all duration-300 group w-full text-left transform hover:translate-x-2"
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-lg">Contact Us</span>
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Services with Enhanced Design */}
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-6 sm:mb-8 relative">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
              </h3>
                             <div className="space-y-4 sm:space-y-5">
                                   <button 
                    onClick={() => navigateToService('/services/ui-ux-design')} 
                    className="block text-gray-300 hover:text-white transition-all duration-300 cursor-pointer w-full text-left transform hover:translate-x-2 text-base sm:text-lg py-2 sm:py-3 min-h-[44px] flex items-center"
                  >
                    UI/UX Design
                  </button>
                                   <button 
                    onClick={() => navigateToService('/services/3d-web-apps')} 
                    className="block text-gray-300 hover:text-white transition-all duration-300 cursor-pointer w-full text-left transform hover:translate-x-2 text-lg"
                  >
                    3D Web Apps
                  </button>
                                   <button 
                    onClick={() => navigateToService('/services/ai-integration')} 
                    className="block text-gray-300 hover:text-white transition-all duration-300 cursor-pointer w-full text-left transform hover:translate-x-2 text-lg"
                  >
                    AI Integration
                  </button>
                                   <button 
                    onClick={() => navigateToService('/services/motion-design')} 
                    className="block text-gray-300 hover:text-white transition-all duration-300 cursor-pointer w-full text-left transform hover:translate-x-2 text-lg"
                  >
                    Motion Design
                  </button>
                                   <button 
                    onClick={() => navigateToService('/services/branding')} 
                    className="block text-gray-300 hover:text-white transition-all duration-300 cursor-pointer w-full text-left transform hover:translate-x-2 text-lg"
                  >
                    Branding
                  </button>
                                   <button 
                    onClick={() => navigateToService('/services/graphic-designing')} 
                    className="block text-gray-300 hover:text-white transition-all duration-300 cursor-pointer w-full text-left transform hover:translate-x-2 text-lg"
                  >
                    Graphic Designing
                  </button>
                                   <button 
                    onClick={() => navigateToService('/services/machine-learning')} 
                    className="block text-gray-300 hover:text-white transition-all duration-300 cursor-pointer w-full text-left transform hover:translate-x-2 text-lg"
                  >
                    Machine Learning
                  </button>
               </div>
            </div>
          </div>

                     {/* Enhanced Social Media & Bottom Section */}
           <div className="border-t border-white/10 pt-8 sm:pt-12">
             <div className="flex flex-col md:flex-row justify-between items-center space-y-6 sm:space-y-8 md:space-y-0">
               
               {/* Enhanced Social Media Icons */}
               <div className="flex space-x-6">
                 {/* Facebook icon moved to contact info section */}
               </div>

              {/* Enhanced Copyright */}
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm sm:text-base font-medium">
                  © {currentYear} Tech 2 Design. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-2 font-light">
                  Innovating tomorrow, today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 