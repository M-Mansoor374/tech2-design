"use client";

import { useState } from "react";


// TypeScript Interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  icon: string;
  link?: string;
  featured?: boolean;
}

interface FilterButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Card Content */}
      <div className="relative p-6 space-y-4">
        {/* Project Image */}
        <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl text-gray-600">{project.icon}</div>
          </div>
        </div>
        
        {/* Project Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="pt-2">
          <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View Case Study
          </button>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
    </div>
  );
};

// Filter Button Component
const FilterButton = ({ 
  category, 
  isActive, 
  onClick 
}: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`filter-button px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50"
      }`}
    >
      {category}
    </button>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Development", "AI", "SaaS", "Design", "Mobile"];

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "A comprehensive analytics platform that leverages machine learning to provide real-time insights and predictive analytics for business intelligence.",
      techStack: ["React", "Python", "TensorFlow", "AWS"],
      category: "AI",
      icon: "🤖",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce SaaS Platform",
      description: "A complete SaaS solution for e-commerce businesses with advanced inventory management, payment processing, and customer analytics.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      category: "SaaS",
      icon: "🛒"
    },
    {
      id: 3,
      title: "Futuristic Mobile App",
      description: "A cutting-edge mobile application featuring AR/VR integration, real-time collaboration, and immersive user experiences.",
      techStack: ["React Native", "Unity", "Firebase", "AR Kit"],
      category: "Mobile",
      icon: "📱"
    },
    {
      id: 4,
      title: "Creative Agency Website",
      description: "A stunning portfolio website for a creative agency with interactive animations, 3D elements, and modern design principles.",
      techStack: ["Three.js", "GSAP", "WebGL", "Tailwind"],
      category: "Design",
      icon: "🎨"
    },
    {
      id: 5,
      title: "Enterprise Web Application",
      description: "A scalable web application for enterprise clients with advanced security, real-time collaboration, and comprehensive reporting.",
      techStack: ["Vue.js", "Django", "Redis", "Docker"],
      category: "Web Development",
      icon: "🏢"
    },
    {
      id: 6,
      title: "AI Chatbot Platform",
      description: "An intelligent chatbot platform that uses natural language processing to provide personalized customer support and automation.",
      techStack: ["OpenAI", "Node.js", "MongoDB", "Socket.io"],
      category: "AI",
      icon: "💬"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
              {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-10 left-20 text-4xl animate-float">🚀</div>
                <div className="absolute top-20 right-32 text-3xl animate-float" style={{animationDelay: '0.5s'}}>⚡</div>
                <div className="absolute bottom-20 left-32 text-3xl animate-float" style={{animationDelay: '1s'}}>💻</div>
                <div className="absolute bottom-10 right-20 text-4xl animate-float" style={{animationDelay: '1.5s'}}>🎯</div>
              </div>
              
              <h1 className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in-scale">
                See What We&apos;ve Built
              </h1>
              <p className="relative text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-in-up">
                Explore our portfolio of innovative projects that showcase cutting-edge technology, 
                creative design, and transformative digital experiences.
              </p>
              
              {/* CTA Button */}
              <div className="relative animate-slide-in-up">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-card-glow">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-up">
          {filters.map((filter, index) => (
            <FilterButton
              key={filter}
              category={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>

        {/* Featured Project Section */}
        {activeFilter === "All" && (
          <div className="mb-16 animate-slide-in-up">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Featured Project
            </h2>
            <div className="max-w-4xl mx-auto">
              {projects.filter(p => p.featured).map((project) => (
                <div key={project.id} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-6xl">{project.icon}</div>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      View Case Study
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-slide-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Load More Section */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-16 animate-slide-in-up">
            <button className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-600/50 animate-card-glow">
              Load More Projects
            </button>
          </div>
        )}

        {/* Scroll to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-float"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 