import { CheckCircle2, Lightbulb, Palette, Code2, TestTube2, Rocket, Wrench, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const processes = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your business goals and define project scope, timeline, and deliverables.',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500',
      details: ['Requirement Analysis', 'Feasibility Study', 'Project Roadmap', 'Resource Allocation'],
    },
    {
      step: '02',
      title: 'Design & Prototype',
      description: 'Creating wireframes and interactive prototypes to visualize the final product.',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      details: ['UI/UX Design', 'Interactive Mockups', 'Design System', 'User Testing'],
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building robust, scalable solutions using cutting-edge technologies and best practices.',
      icon: Code2,
      color: 'from-green-500 to-emerald-500',
      details: ['Agile Sprints', 'Code Reviews', 'Version Control', 'CI/CD Pipeline'],
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing to ensure quality, performance, and security standards are met.',
      icon: TestTube2,
      color: 'from-orange-500 to-red-500',
      details: ['Unit Testing', 'Integration Testing', 'Security Audit', 'Performance Testing'],
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Smooth deployment to production with minimal downtime and maximum efficiency.',
      icon: Rocket,
      color: 'from-red-500 to-pink-500',
      details: ['Cloud Setup', 'Data Migration', 'Launch Strategy', 'Monitoring Setup'],
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and enhancements to keep your solution running perfectly.',
      icon: Wrench,
      color: 'from-indigo-500 to-purple-500',
      details: ['24/7 Support', 'Bug Fixes', 'Feature Updates', 'Performance Optimization'],
    },
  ];

  const detailCardGradient =
    activeStep === 0
      ? 'from-gray-900/80 to-red-950/80 '
      : activeStep === 1
      ? 'from-gray-900/80 to-orange-950/80'
      : activeStep === 2
      ? 'from-gray-900/80 to-yellow-950/80'
      : activeStep === 3
      ? 'from-gray-900/80 to-red-950/80'
      : activeStep === 4
      ? 'from-gray-900/80 to-pink-950/80'
      : 'from-gray-900/80 to-orange-950/80';

  useEffect(() => {
    // Simulate initial loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % processes.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [processes.length, isLoading]);

  return (  
    <section className={`relative py-24 overflow-hidden transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`} id="process">
      {/* Premium Background with Office Image */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTc0MDcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/92 to-gray-900/95"></div>
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-red-600/20 via-orange-600/10 to-transparent rounded-full"></div>
        </div>

        {/* Circular pattern background */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.3"/>
              <circle cx="50" cy="50" r="25" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.5"/>
              <circle cx="50" cy="50" r="10" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.7"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-red-500/20 backdrop-blur-md border border-red-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <span className="text-red-100 text-sm sm:text-base font-medium">Our Development Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 font-bold leading-tight">
            From Concept to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-orange-400 font-extrabold">
              Launch
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            A proven, systematic circular approach to deliver exceptional results through innovation
          </p>
        </div>

        {/* Circular Process Visualization - Desktop */}
        <div className="hidden lg:block max-w-6xl mx-auto mb-16">
          <div className="relative w-full" style={{ height: '700px', position: 'relative' }}>
            {/* Center Hub */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '256px', height: '256px', zIndex: 20 }} className="rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-4 border-red-500/30 flex items-center justify-center shadow-2xl shadow-red-500/30">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-2 sm:mb-3 mx-auto shadow-lg shadow-red-500/30">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-white tracking-wider mb-1 text-sm sm:text-base font-bold">AGILE</div>
                <div className="text-red-400 text-xs sm:text-sm font-medium">Process Flow</div>
              </div>
              
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-red-500/50 animate-ping-slow"></div>
            </div>

            {/* Circular orbit path */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              {/* Main circle path */}
              <circle
                cx="50%"
                cy="50%"
                r="280"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                strokeDasharray="10,10"
                opacity="0.4"
              />
              {/* Connection lines from center to each step */}
              {processes.map((_, index) => {
                const angle = (index * 60 - 90) * (Math.PI / 180);
                const x1 = 50;
                const y1 = 50;
                const x2 = 50 + (40 * Math.cos(angle));
                const y2 = 50 + (40 * Math.sin(angle));
                
                return (
                  <line
                    key={index}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#pathGradient)"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                );
              })}
              {/* Curved arrows between steps */}
              {processes.map((_, index) => {
                const currentAngle = (index * 60 - 90) * (Math.PI / 180);
                const nextAngle = ((index + 1) * 60 - 90) * (Math.PI / 180);
                const radius = 40;
                
                const x1 = 50 + (radius * Math.cos(currentAngle));
                const y1 = 50 + (radius * Math.sin(currentAngle));
                const x2 = 50 + (radius * Math.cos(nextAngle));
                const y2 = 50 + (radius * Math.sin(nextAngle));
                
                const midAngle = ((index * 60 + 30 - 90) * Math.PI / 180);
                const controlRadius = radius + 8;
                const cx = 50 + (controlRadius * Math.cos(midAngle));
                const cy = 50 + (controlRadius * Math.sin(midAngle));
                
                return (
                  <path
                    key={`arrow-${index}`}
                    d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="2"
                    opacity="0.5"
                    markerEnd="url(#arrowhead)"
                  />
                );
              })}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
                </marker>
              </defs>
            </svg>

            {/* Process Steps in Circle */}
            {processes.map((process, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const Icon = process.icon;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    className={`relative cursor-pointer transition-all duration-700 ease-out transform ${
                      activeStep === index ? 'z-30 rotate-0' : 'z-10 hover:scale-105 hover:-translate-y-1'
                    }`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${process.color} opacity-0 ${activeStep === index ? 'opacity-60 animate-pulse' : 'group-hover:opacity-30'} blur-2xl transition-all duration-700`}></div>
                    
                    {/* Card */}
                    <div className={`relative w-52 h-52 rounded-3xl p-1 bg-gradient-to-br ${activeStep === index ? process.color : 'from-gray-900/30 to-gray-800/30'} transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-red-500/20`}>
                      <div className="w-full h-full bg-gray-900/90 rounded-3xl flex flex-col items-center justify-center p-6 backdrop-blur-sm border border-white/10 group-hover:border-red-500/30 transition-all duration-700">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${process.color} p-0.5 mb-3 transform transition-all duration-700 group-hover:rotate-12 group-hover:scale-110`}>
                          <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center group-hover:bg-red-950 transition-colors duration-700">
                            <Icon className="w-8 h-8 text-white transition-transform duration-700 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Step number */}
                        <div className={`text-xs mb-2 ${activeStep === index ? 'text-red-300' : 'text-gray-500'}`}>
                          Step {process.step}
                        </div>

                        {/* Title */}
                        <h3 className={`text-center text-xs sm:text-sm mb-2 font-semibold leading-tight ${activeStep === index ? 'text-white' : 'text-gray-400'}`}>
                          {process.title}
                        </h3>

                        {/* Progress indicator */}
                        {activeStep === index && (
                          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-2 animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Step number badge */}
                    <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center border-4 border-gray-900 shadow-lg z-10 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 ${activeStep === index ? 'animate-bounce' : ''}`}>
                      <span className="text-white text-sm font-bold">{process.step}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Details Card */}
          <div className={`mt-24 bg-gradient-to-br ${detailCardGradient} backdrop-blur-xl border border-red-500/30 rounded-3xl p-10 shadow-2xl transition-all duration-700 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>

            <div className={`flex items-start gap-8 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${processes[activeStep].color} p-1 flex-shrink-0 transition-all duration-700 ${isTransitioning ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
                  <div className="w-full h-full bg-gray-900 rounded-3xl flex items-center justify-center">
                  {(() => {
                    const Icon = processes[activeStep].icon;
                    return <Icon className="w-12 h-12 text-white" />;
                  })()}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <span className="text-red-400 text-xs sm:text-sm font-bold uppercase tracking-wider">Step {processes[activeStep].step}</span>
                  <h3 className="text-2xl sm:text-3xl text-white font-bold leading-tight">{processes[activeStep].title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed font-light">
                  {processes[activeStep].description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {processes[activeStep].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${processes[activeStep].color}`}></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col max-w-4xl mx-auto px-2 sm:px-4">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <div
                key={index}
                className="relative mt-0"
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`relative rounded-2xl p-1 cursor-pointer transition-all duration-500 transform group ${
                    activeStep === index 
                      ? `bg-gradient-to-br ${process.color} scale-105 shadow-2xl shadow-red-500/20` 
                      : 'bg-gradient-to-br from-gray-900/20 to-gray-800/20 hover:scale-102 hover:shadow-lg hover:shadow-red-500/10'
                  }`}
                >
                  <div className="bg-gray-900/90 rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/10 group-hover:border-red-500/30 transition-all duration-500">
                    <div className="flex flex-col xs:flex-row items-center xs:items-start text-center xs:text-start gap-4 sm:gap-5">
                      {/* Icon */}
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${process.color} p-0.5 flex-shrink-0 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                        <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center group-hover:bg-red-950 transition-colors duration-500">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-center xs:justify-start gap-2 sm:gap-3 mb-2">
                          <span className="text-xs text-red-400 font-bold uppercase tracking-wider">Step {process.step}</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-xl mb-2 text-white font-bold leading-tight group-hover:text-red-300 transition-colors duration-500">
                          {process.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                          {process.description}
                        </p>
                        {activeStep === index && (
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            {process.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-white text-xs">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${process.color}`}></div>
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection line */}
                {index < processes.length - 1 && (
                  <div className="flex justify-center py-4 sm:py-6">
                    <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-red-500/50 via-orange-500/30 to-transparent opacity-60"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 text-white bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-md border border-red-500/30 px-4 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500">
            <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-red-400" />
            <span className="text-xs sm:text-base font-medium">Continuous iteration with client collaboration</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
