"use client";

import Image from "next/image";
import About from "@/app/about/page";
import Services from "@/app/services/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/projects/page";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header/Navbar */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4">
               <div className="relative w-24 h-24 group">
                 {/* Enhanced glow effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                 
                 {/* Logo container with enhanced styling */}
                 <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
                   <div className="relative w-full h-full p-3">
                     <Image
                       src="/Tech 2 Design-01.png"
                       alt="Tech 2 Design Logo"
                       fill
                       className="object-contain drop-shadow-lg"
                       priority
                     />
                   </div>
                 </div>
                 
                 {/* Border glow effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-cyan-400/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
               </div>
               <div className="text-white">
                 <div className="text-sm text-gray-300 font-medium tracking-wider">TECH 2 DESIGN</div>
                 <div className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Tech 2 Design</div>
               </div>
            </div>

            {/* Navigation Links with 3D Effects */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </a>
              
              <a href="#services" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </a>
              
              <a href="#about" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </a>
              
              <a href="#contact" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </a>
              
              <a href="#projects" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </a>
              
              <a href="/testimonials" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">Testimonials</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </a>
            </nav>

            {/* Mobile Menu Button with 3D Effect */}
            <div className="md:hidden">
              <button className="nav-button relative p-2 text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110 hover:rotate-12 group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/back.jpg"
              alt="Futuristic City Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Animated Blinking Elements */}
          <div className="absolute inset-0 z-5">
            {/* Blinking Nodes */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-blink" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-blink" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-blink" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-blink" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-blink" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-blink" style={{animationDelay: '2.5s'}}></div>
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-blink" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-blink" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-blink" style={{animationDelay: '1.3s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-blink" style={{animationDelay: '1.8s'}}></div>
            
            {/* Larger Blinking Elements */}
            <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-20 w-4 h-4 bg-purple-400/40 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-5 h-5 bg-cyan-400/35 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            
            {/* Circuit Lines with Blinking */}
            <div className="absolute top-1/4 left-1/3 w-20 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-fade-in-out"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 animate-fade-in-out" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/3 left-1/4 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 animate-fade-in-out" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 left-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in-out" style={{animationDelay: '1.5s'}}></div>
            
            {/* Floating Numbers with Blinking */}
            <div className="absolute top-1/4 right-1/4 text-blue-400/60 font-mono text-sm animate-pulse-slow">3599</div>
            <div className="absolute top-1/2 left-1/4 text-cyan-400/60 font-mono text-sm animate-pulse-slow" style={{animationDelay: '0.5s'}}>953</div>
            <div className="absolute bottom-1/3 right-1/3 text-purple-400/60 font-mono text-sm animate-pulse-slow" style={{animationDelay: '1s'}}>1112</div>
            <div className="absolute top-1/3 left-1/3 text-blue-400/60 font-mono text-sm animate-pulse-slow" style={{animationDelay: '1.5s'}}>3036</div>
            <div className="absolute bottom-1/4 left-1/3 text-cyan-400/60 font-mono text-sm animate-pulse-slow" style={{animationDelay: '2s'}}>4697</div>
            
            {/* Geometric Shapes with Blinking */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-blue-400/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 border border-cyan-400/30 transform rotate-45 animate-pulse-slow"></div>
          </div>
        </div>
    

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Professional Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-blue-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              Trusted by 500+ Global Businesses
            </div>
          </div>

          {/* Main Heading with Enhanced Typography */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Advance Your Business</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                With Our Professional
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
          </div>
          
          {/* Enhanced Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light">
              We deliver <span className="text-blue-300 font-semibold">tailored services</span> that encompass mobile app design, web development, 
              <span className="text-purple-300 font-semibold"> boosting search engine rankings</span>, refining digital marketing efforts, 
              and a variety of other <span className="text-cyan-300 font-semibold">specialized offerings</span>.
            </p>
          </div>



          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="#services" 
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-3"
            >
              <span>Explore Our Services</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group px-10 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 backdrop-blur-sm hover:bg-white/5"
            >
              <span>Get Free Consultation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <div id="about">
        <About />
      </div>
      
      {/* Services Section */}
      <div id="services">
        <Services />
      </div>
      
      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>
      
      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}
