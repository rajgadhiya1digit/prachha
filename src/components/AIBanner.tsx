import { Button } from './ui/button';
import { ArrowRight, Brain, Sparkles, Zap, Network, Cpu, Database, CloudCog, BotMessageSquare, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function AIBanner() {
  const [rotation, setRotation] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);

  useEffect(() => {
    // Continuous rotation animation
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 0.15) % 360);
    }, 50);

    const flowInterval = setInterval(() => {
      setDataFlow(prev => (prev + 1) % 100);
    }, 30);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(flowInterval);
    };
  }, []);

  const aiCapabilities = [
    { icon: Brain, label: 'Machine Learning', color: 'from-cyan-500 to-blue-500', glow: 'cyan' },
    { icon: BotMessageSquare, label: 'AI Chatbots', color: 'from-blue-500 to-indigo-500', glow: 'blue' },
    { icon: TrendingUp, label: 'Predictive Analytics', color: 'from-indigo-500 to-purple-500', glow: 'indigo' },
    { icon: Network, label: 'Neural Networks', color: 'from-purple-500 to-pink-500', glow: 'purple' },
    { icon: Cpu, label: 'Deep Learning', color: 'from-pink-500 to-rose-500', glow: 'pink' },
    { icon: CloudCog, label: 'AI Cloud Services', color: 'from-violet-500 to-fuchsia-500', glow: 'violet' },
    { icon: Database, label: 'Big Data AI', color: 'from-fuchsia-500 to-cyan-500', glow: 'fuchsia' },
    { icon: Sparkles, label: 'AI Automation', color: 'from-teal-500 to-cyan-500', glow: 'teal' },
  ];

  return (
    <section className="relative pt-[80px] min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" id="home">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a15_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        {/* AI Circuit Board Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* Horizontal circuit lines */}
          {[...Array(6)].map((_, i) => (
            <g key={`h-${i}`}>
              <line
                x1="0%"
                y1={`${(i + 1) * 16}%`}
                x2="100%"
                y2={`${(i + 1) * 16}%`}
                stroke="url(#circuitGradient)"
                strokeWidth="1"
                opacity="0.4"
              />
              <circle cx={`${(i * 15) % 100}%`} cy={`${(i + 1) * 16}%`} r="3" fill="#3b82f6" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
          ))}
          {/* Vertical circuit lines */}
          {[...Array(6)].map((_, i) => (
            <g key={`v-${i}`}>
              <line
                x1={`${(i + 1) * 16}%`}
                y1="0%"
                x2={`${(i + 1) * 16}%`}
                y2="100%"
                stroke="url(#circuitGradient)"
                strokeWidth="1"
                opacity="0.4"
              />
            </g>
          ))}
        </svg>

        {/* Data Flow Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                left: `${(i * 3.33 + dataFlow) % 100}%`,
                top: `${Math.sin(i) * 50 + 50}%`,
                background: `linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4)`,
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)',
                animationName: 'dataFlowPulse',
                animationDuration: `${1 + Math.random() * 2}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs with AI theme */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-blue-500/30 rounded-full px-6 py-3 mb-8 animate-pulse-glow">
              <Brain className="w-5 h-5 text-cyan-400 " />
              <span className="text-blue-100 text-[12px] sm:text-[14px] md:text-[16px]">AI-Powered Innovation</span>
            </div>

            <h1 className="text-5xl lg:text-7xl text-white mb-6 leading-tight">
              <span className="block text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] mb-3">Building the Future</span>
              <span className="block text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-flow">
                With AI Technology
              </span>
            </h1>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-gray-300 mb-10 leading-relaxed max-w-xl">
              Prachha Tech harnesses the power of Artificial Intelligence to create intelligent 
              solutions that transform businesses. From AI-powered applications to machine learning models, 
              we bring your vision to life with cutting-edge AI innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 h-14 px-8 group border-0 shadow-lg shadow-blue-500/30">
                <Sparkles className="mr-2 w-5 h-5" />
                Explore AI Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="h-14 px-8 border-2 border-blue-500/50 text-white hover:text-white hover:bg-blue-500/10 hover:border-blue-400 backdrop-blur-sm"
              >
                <Zap className="mr-2 w-5 h-5" />
                See AI in Action
              </Button>
            </div>

            {/* AI Stats */}
            <div className=" grid grid-cols-3 gap-6">
              <div className="text-center bg-blue-600/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
                <div className="text-[18px] text-cyan-400 mb-1">500+</div>
                <div className="text-gray-300 text-[14px]">AI Projects</div>
              </div>
              <div className="text-center bg-purple-600/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                <div className="text-[18px] text-purple-400 mb-1">100+</div>
                <div className="text-gray-300 text-sm">AI Models</div>
              </div>
              <div className="text-center bg-indigo-600/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-4">
                <div className="text-[18px] text-indigo-400 mb-1">24/7</div>
                <div className="text-gray-300 text-sm">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - AI Brain Visualization */}
          <div className="relative flex items-center justify-center py-[100px] lg:min-h-[700px] px-5">
            {/* Central AI Core */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer Energy Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-3xl animate-pulse-slow"></div>
              
              {/* Rotating Orbit Rings */}
              <div className="absolute inset-0 -m-32 md:-m-40">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  {/* Outer orbit ring */}
                  <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="url(#circuitGradient)"
                    strokeWidth="2"
                    strokeDasharray="8,12"
                    className="animate-spin-slow"
                    opacity="0.5"
                  />
                  {/* Middle orbit ring */}
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="rgba(139, 92, 246, 0.4)"
                    strokeWidth="1"
                    strokeDasharray="5,10"
                    className="animate-spin-reverse"
                    opacity="0.6"
                  />
                  {/* Inner orbit ring */}
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="3,8"
                    className="animate-spin-slow"
                    opacity="0.7"
                  />
                </svg>
              </div>

              {/* AI Core Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 border-4 border-blue-600/50 flex items-center justify-center shadow-2xl shadow-blue-500/50 backdrop-blur-sm overflow-hidden">
                {/* Neural network pattern inside */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {[...Array(8)].map((_, i) => (
                      <g key={i}>
                        <line 
                          x1="50" 
                          y1="50" 
                          x2={50 + 40 * Math.cos(i * Math.PI / 4)} 
                          y2={50 + 40 * Math.sin(i * Math.PI / 4)}
                          stroke="#3b82f6"
                          strokeWidth="0.5"
                        />
                        <circle 
                          cx={50 + 40 * Math.cos(i * Math.PI / 4)} 
                          cy={50 + 40 * Math.sin(i * Math.PI / 4)}
                          r="2"
                          fill="#8b5cf6"
                        />
                      </g>
                    ))}
                  </svg>
                </div>
                
                {/* AI Brain Icon */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-3 mx-auto shadow-lg shadow-blue-500/50 animate-float">
                    <Brain className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  <div className="text-white tracking-widest text-xs md:text-sm mb-1">AI POWERED</div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-sm md:text-base">
                    Prachha Tech
                  </div>
                </div>

                {/* Scanning effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-scan"></div>
              </div>

              {/* Orbiting AI Capability Icons */}
              <div className="absolute inset-0 -m-32 md:-m-40">
                {aiCapabilities.map((capability, index) => {
                  const adjustedAngle = (index * 45) + rotation;
                  const radian = (adjustedAngle * Math.PI) / 180;
                  const radius = 160;
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;

                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        transition: 'transform 0.1s linear',
                      }}
                    >
                      <div className="relative group">
                        {/* Energy beam to center */}
                        <div 
                          className="absolute top-1/2 left-1/2 w-40 h-px opacity-30"
                          style={{
                            background: `linear-gradient(to left, transparent, #3b82f6, transparent)`,
                            transform: `rotate(${adjustedAngle + 180}deg)`,
                            transformOrigin: 'left center',
                          }}
                        ></div>

                        {/* Icon Container */}
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${capability.color} p-0.5 hover:scale-110 transition-all shadow-lg group-hover:shadow-2xl`}
                          style={{
                            boxShadow: `0 0 20px rgba(59, 130, 246, 0.4)`,
                          }}
                        >
                          <div className="w-full h-full bg-slate-950/90 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm">
                            <capability.icon className="w-8 h-8 text-white mb-1" />
                            <span className="text-white text-xs text-center px-1 leading-tight">{capability.label}</span>
                          </div>
                        </div>

                        {/* Pulsing glow effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-60 blur-xl transition-opacity animate-pulse`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes dataFlowPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
        @keyframes gradient-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-flow {
          background-size: 200% auto;
          animation: gradient-flow 4s ease infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-pulse-slow {
          animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
