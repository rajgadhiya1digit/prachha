import { CheckCircle2, Lightbulb, Palette, Code2, TestTube2, Rocket, Wrench, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(0);

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
      ? 'from-slate-900/80 to-blue-950/80 '
      : activeStep === 1
      ? 'from-slate-900/80 to-purple-950/80'
      : activeStep === 2
      ? 'from-slate-900/80 to-emerald-950/80'
      : activeStep === 3
      ? 'from-slate-900/80 to-red-950/80'
      : activeStep === 4
      ? 'from-slate-900/80 to-pink-950/80'
      : 'from-slate-900/80 to-indigo-950/80';

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [processes.length]);

  return (  
    <section className="relative py-24 overflow-hidden" id="process">
      {/* Premium Background with Office Image */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTc0MDcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/92 to-indigo-950/95"></div>
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-blue-600/20 via-purple-600/10 to-transparent rounded-full"></div>
        </div>

        {/* Circular pattern background */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3"/>
              <circle cx="50" cy="50" r="25" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.5"/>
              <circle cx="50" cy="50" r="10" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.7"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-blue-500/30 rounded-full px-6 py-3 mb-6">
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <span className="text-blue-100">Our Development Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            From Concept to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Launch
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A proven, systematic circular approach to deliver exceptional results through innovation
          </p>
        </div>

        {/* Circular Process Visualization - Desktop */}
        <div className="hidden lg:block max-w-6xl mx-auto mb-16">
          <div className="relative w-full" style={{ height: '700px', position: 'relative' }}>
            {/* Center Hub */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '256px', height: '256px', zIndex: 20 }} className="rounded-full bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 border-4 border-blue-500/30 flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <div className="text-white tracking-wider mb-1">AGILE</div>
                <div className="text-blue-400 text-sm">Process Flow</div>
              </div>
              
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 animate-ping-slow"></div>
            </div>

            {/* Circular orbit path */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
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
                  <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
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
                    className={`relative cursor-pointer transition-all duration-500 ${
                      activeStep === index ? 'scale-110 z-30' : 'z-10 hover:scale-50'
                    }`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${process.color} opacity-0 ${activeStep === index ? 'opacity-60' : ''} blur-2xl transition-opacity`}></div>
                    
                    {/* Card */}
                    <div className={`relative w-52 h-52 rounded-3xl p-1 bg-gradient-to-br ${activeStep === index ? process.color : 'from-blue-900/30 to-purple-900/30'} transition-all`}>
                      <div className="w-full h-full bg-slate-950/90 rounded-3xl flex flex-col items-center justify-center p-6 backdrop-blur-sm border border-white/10">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${process.color} p-0.5 mb-3`}>
                          <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Step number */}
                        <div className={`text-xs mb-2 ${activeStep === index ? 'text-blue-300' : 'text-gray-500'}`}>
                          Step {process.step}
                        </div>

                        {/* Title */}
                        <h3 className={`text-center text-sm mb-2 ${activeStep === index ? 'text-white' : 'text-gray-400'}`}>
                          {process.title}
                        </h3>

                        {/* Progress indicator */}
                        {activeStep === index && (
                          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                        )}
                      </div>
                    </div>

                    {/* Step number badge */}
                    <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center border-4 border-slate-950 shadow-lg z-10`}>
                      <span className="text-white text-sm">{process.step}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Details Card */}
          <div className={`mt-24 bg-gradient-to-br ${detailCardGradient} backdrop-blur-xl border border-blue-500/30 rounded-3xl p-10 shadow-2xl`}>

            <div className="flex items-start gap-8">
              <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${processes[activeStep].color} p-1 flex-shrink-0`}>
                <div className="w-full h-full bg-slate-950 rounded-3xl flex items-center justify-center">
                  {(() => {
                    const Icon = processes[activeStep].icon;
                    return <Icon className="w-12 h-12 text-white" />;
                  })()}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-blue-400 text-sm">Step {processes[activeStep].step}</span>
                  <h3 className="text-3xl text-white">{processes[activeStep].title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
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
        <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <div
                key={index}
                className="relative"
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`relative rounded-2xl p-1 cursor-pointer transition-all ${
                    activeStep === index 
                      ? `bg-gradient-to-br ${process.color}` 
                      : 'bg-gradient-to-br from-blue-900/20 to-purple-900/20'
                  }`}
                >
                  <div className="bg-slate-950/90 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${process.color} p-0.5 flex-shrink-0`}>
                        <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs text-blue-400">Step {process.step}</span>
                          <ArrowRight className="w-4 h-4 text-blue-400" />
                        </div>
                        <h3 className="text-xl mb-2 text-white">
                          {process.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
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
                  <div className="flex justify-center py-3">
                    <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-purple-500 opacity-50"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-white bg-gradient-to-r from-blue-950/50 to-purple-950/50 backdrop-blur-md border border-blue-500/30 px-8 py-4 rounded-full shadow-lg">
            <CheckCircle2 className="w-6 h-6 text-blue-400" />
            <span className="text-sm sm:text-base">Continuous iteration with client collaboration</span>
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
