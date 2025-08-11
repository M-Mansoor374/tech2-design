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
  caseStudyUrl?: string;
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    features: string[];
    technologies: string[];
    timeline: string;
    team: string;
  };
}

interface FilterButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{project.icon}</div>
              <div>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <p className="text-gray-400 text-sm">{project.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Overview */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 text-sm">📋</span>
              Project Overview
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
          </div>

          {/* Case Study Content */}
          {project.caseStudy && (
            <>
              {/* Challenge */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-3 text-sm">🎯</span>
                  The Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.caseStudy.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 text-sm">💡</span>
                  Our Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.caseStudy.solution}</p>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 text-sm">📈</span>
                  Results & Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.caseStudy.results.map((result, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                      <p className="text-gray-300">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 text-sm">⚡</span>
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.caseStudy.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-blue-400 text-lg">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.caseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
          <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Timeline</h4>
                  <p className="text-gray-300">{project.caseStudy.timeline}</p>
          </div>
          
                {/* Team */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Team Size</h4>
                  <p className="text-gray-300">{project.caseStudy.team}</p>
                </div>
              </div>
            </>
          )}

          {/* Default Content for projects without case study */}
          {!project.caseStudy && (
            <>
              {/* Technology Stack */}
          <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 text-sm">🛠️</span>
                  Technology Stack
                </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
              {/* Key Features */}
          <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 text-sm">⚡</span>
                  Key Features
                </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>Advanced analytics and reporting capabilities</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>Real-time data processing and visualization</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>Scalable architecture for enterprise use</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>Intuitive user interface and experience</span>
              </li>
            </ul>
          </div>
          
              {/* Results & Impact */}
          <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 text-sm">📈</span>
                  Results & Impact
                </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400">85%</div>
                <div className="text-sm text-gray-300">Performance Improvement</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-4 rounded-lg border border-green-500/20">
                <div className="text-2xl font-bold text-green-400">3x</div>
                <div className="text-sm text-gray-300">Faster Development</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-sm text-gray-300">Uptime Reliability</div>
              </div>
            </div>
          </div>
            </>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-gray-700/50 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            Ready to start your project?
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              Close
            </button>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
              }}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, onViewCaseStudy }: { project: Project; onViewCaseStudy: (project: Project) => void }) => {
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
        <div className="pt-2 relative z-10">
          <button 
            onClick={() => {
              console.log('Button clicked!');
              onViewCaseStudy(project);
            }}
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer relative z-20"
          >
            View Case Study
          </button>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCaseStudy = (project: Project) => {
    console.log('Button clicked for project:', project.title);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filters = ["All", "Web Development", "AI", "SaaS", "Design", "Mobile"];

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "A comprehensive analytics platform that leverages machine learning to provide real-time insights and predictive analytics for business intelligence.",
      techStack: ["React", "Python", "TensorFlow", "AWS"],
      category: "AI",
      icon: "🤖",
      featured: true,
      caseStudy: {
        overview: "Developed a cutting-edge analytics platform that transforms raw data into actionable business insights using advanced AI algorithms.",
        challenge: "The client needed to process massive amounts of data from multiple sources and provide real-time insights to support strategic decision-making. Traditional analytics tools were too slow and couldn't handle the complexity of their data ecosystem.",
        solution: "Built a scalable AI-powered analytics dashboard using React for the frontend, Python with TensorFlow for machine learning models, and AWS for cloud infrastructure. Implemented real-time data processing pipelines and predictive analytics capabilities.",
        results: [
          "85% improvement in data processing speed",
          "Real-time insights with 99.9% accuracy",
          "40% reduction in decision-making time",
          "Scalable to handle 10M+ data points daily"
        ],
        features: [
          "Real-time data visualization",
          "Predictive analytics models",
          "Custom dashboard builder",
          "Automated reporting system",
          "Multi-source data integration",
          "Advanced filtering and search"
        ],
        technologies: ["React", "Python", "TensorFlow", "AWS", "Redshift", "Lambda", "S3"],
        timeline: "6 months",
        team: "8 developers + 2 data scientists"
      }
    },
    {
      id: 2,
      title: "E-Commerce SaaS Platform",
      description: "A complete SaaS solution for e-commerce businesses with advanced inventory management, payment processing, and customer analytics.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      category: "SaaS",
      icon: "🛒",
      caseStudy: {
        overview: "Created a comprehensive SaaS platform that enables businesses to launch and manage their e-commerce operations with enterprise-grade features.",
        challenge: "Small to medium businesses needed a cost-effective e-commerce solution that could compete with enterprise platforms while being easy to use and scalable.",
        solution: "Developed a modern SaaS platform using Next.js for performance, Node.js backend with PostgreSQL for data management, and Stripe for secure payment processing. Built with scalability and user experience in mind.",
        results: [
          "300+ businesses onboarded in first year",
          "99.5% uptime reliability",
          "50% faster page load times",
          "$2M+ in processed transactions"
        ],
        features: [
          "Multi-store management",
          "Advanced inventory tracking",
          "Automated order processing",
          "Customer analytics dashboard",
          "Mobile-responsive design",
          "API for third-party integrations"
        ],
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker", "AWS"],
        timeline: "8 months",
        team: "6 developers + 1 designer"
      }
    },
    {
      id: 3,
      title: "Futuristic Mobile App",
      description: "A cutting-edge mobile application featuring AR/VR integration, real-time collaboration, and immersive user experiences.",
      techStack: ["React Native", "Unity", "Firebase", "AR Kit"],
      category: "Mobile",
      icon: "📱",
      caseStudy: {
        overview: "Developed an innovative mobile application that combines AR/VR technology with real-time collaboration features for immersive user experiences.",
        challenge: "The client wanted to create a mobile app that could provide immersive AR/VR experiences while enabling real-time collaboration between users across different devices and platforms.",
        solution: "Built a cross-platform mobile app using React Native for the core application, Unity for AR/VR experiences, Firebase for real-time collaboration, and AR Kit for iOS AR capabilities.",
        results: [
          "100K+ downloads in first 3 months",
          "4.8/5 average app store rating",
          "Real-time collaboration with <100ms latency",
          "Support for 10+ AR/VR devices"
        ],
        features: [
          "AR/VR content creation",
          "Real-time multiplayer collaboration",
          "3D model sharing and editing",
          "Cross-platform compatibility",
          "Offline mode support",
          "Social features and sharing"
        ],
        technologies: ["React Native", "Unity", "Firebase", "AR Kit", "ARKit", "WebRTC", "WebGL"],
        timeline: "10 months",
        team: "7 developers + 2 3D artists"
      }
    },
    {
      id: 4,
      title: "Creative Agency Website",
      description: "A stunning portfolio website for a creative agency with interactive animations, 3D elements, and modern design principles.",
      techStack: ["Three.js", "GSAP", "WebGL", "Tailwind"],
      category: "Design",
      icon: "🎨",
      caseStudy: {
        overview: "Designed and developed a visually stunning website that showcases the creative agency's portfolio with cutting-edge web technologies and interactive experiences.",
        challenge: "The creative agency needed a website that would stand out from competitors and showcase their work in an engaging, interactive way that reflected their innovative approach to design.",
        solution: "Created a modern, interactive website using Three.js for 3D graphics, GSAP for smooth animations, WebGL for high-performance rendering, and Tailwind CSS for responsive design.",
        results: [
          "300% increase in website engagement",
          "60% longer average session duration",
          "25% increase in client inquiries",
          "Featured in 5 design publications"
        ],
        features: [
          "Interactive 3D portfolio gallery",
          "Smooth scroll animations",
          "Dynamic content loading",
          "Mobile-optimized experience",
          "SEO-optimized structure",
          "Performance monitoring"
        ],
        technologies: ["Three.js", "GSAP", "WebGL", "Tailwind CSS", "Next.js", "Framer Motion", "Vercel"],
        timeline: "4 months",
        team: "3 developers + 2 designers"
      }
    },
    {
      id: 5,
      title: "Enterprise Web Application",
      description: "A scalable web application for enterprise clients with advanced security, real-time collaboration, and comprehensive reporting.",
      techStack: ["Vue.js", "Django", "Redis", "Docker"],
      category: "Web Development",
      icon: "🏢",
      caseStudy: {
        overview: "Built a robust enterprise web application that serves thousands of users with advanced security features, real-time collaboration, and comprehensive reporting capabilities.",
        challenge: "A large enterprise needed a secure, scalable web application that could handle thousands of concurrent users while providing real-time collaboration features and maintaining strict security standards.",
        solution: "Developed a modern web application using Vue.js for the frontend, Django for the backend with advanced security features, Redis for caching and real-time features, and Docker for containerization.",
        results: [
          "10,000+ concurrent users supported",
          "99.99% uptime achieved",
          "50% reduction in development time",
          "Zero security breaches"
        ],
        features: [
          "Role-based access control",
          "Real-time collaboration tools",
          "Advanced reporting system",
          "API-first architecture",
          "Automated testing suite",
          "Comprehensive audit logging"
        ],
        technologies: ["Vue.js", "Django", "Redis", "Docker", "PostgreSQL", "Celery", "Nginx"],
        timeline: "12 months",
        team: "10 developers + 2 DevOps engineers"
      }
    },
    {
      id: 6,
      title: "AI Chatbot Platform",
      description: "An intelligent chatbot platform that uses natural language processing to provide personalized customer support and automation.",
      techStack: ["OpenAI", "Node.js", "MongoDB", "Socket.io"],
      category: "AI",
      icon: "💬",
      caseStudy: {
        overview: "Created an intelligent chatbot platform that leverages advanced NLP and AI to provide personalized customer support and automate business processes.",
        challenge: "The client needed a chatbot solution that could handle complex customer inquiries, provide personalized responses, and integrate seamlessly with their existing systems while reducing support costs.",
        solution: "Built an AI-powered chatbot platform using OpenAI's GPT models for natural language understanding, Node.js for the backend, MongoDB for flexible data storage, and Socket.io for real-time communication.",
        results: [
          "80% reduction in support ticket volume",
          "95% customer satisfaction rate",
          "24/7 automated support coverage",
          "60% faster response times"
        ],
        features: [
          "Natural language processing",
          "Multi-language support",
          "Integration with CRM systems",
          "Analytics and reporting",
          "Custom training capabilities",
          "Voice and text interfaces"
        ],
        technologies: ["OpenAI", "Node.js", "MongoDB", "Socket.io", "Express", "Redis", "Docker"],
        timeline: "5 months",
        team: "5 developers + 1 AI specialist"
      }
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
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-card-glow"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-up">
          {filters.map((filter) => (
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
                    <button 
                      onClick={() => handleViewCaseStudy(project)}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
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
              <ProjectCard project={project} onViewCaseStudy={handleViewCaseStudy} />
            </div>
          ))}
        </div>

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

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
} 