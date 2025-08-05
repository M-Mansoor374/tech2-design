"use client";

import Image from "next/image";
import Link from "next/link";
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
            <div className="flex items-center space-x-3">
               <div className="relative w-16 h-16">
        <Image
                  src="/Tech 2 Design-01.png"
                  alt="Tech 2 Design Logo"
                  fill
                  className="object-contain"
          priority
        />
              </div>
              <div className="text-white">
                <div className="text-xs text-gray-300">TECH 2 DESIGN</div>
                <div className="text-xl font-bold">Tech 2 Design</div>
              </div>
            </div>

            {/* Navigation Links with 3D Effects */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </Link>
              
              <Link href="/services" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </Link>
              
              <Link href="/about" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </Link>
              
              <Link href="/contact" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-gray-100/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </Link>
              
              <a href="#projects" className="nav-button relative px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-2xl group">
                <span className="relative z-10">Projects</span>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              with Our Expertise
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We offer professional services including mobile app development, web development, 
            SEO, digital marketing, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Our Services
            </Link>
            
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group"
            >
              <span>Contact Us</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
              <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}
