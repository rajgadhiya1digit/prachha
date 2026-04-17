import { Button } from './ui/button';
import { ArrowRight, Mail, Phone, Sparkles, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTA() {
  return (
    <section className="relative py-12 sm:py-18 md:py-24 overflow-hidden">
      {/* Animated Background with Image Overlay */}
      <div className="absolute inset-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1639004643331-9526630beb3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMGNpcmN1aXR8ZW58MXx8fHwxNzYxNzQzNTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Technology Network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-red-950/90 to-slate-900/95"></div>
        </div>

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/30 via-transparent to-pink-600/30 animate-gradient-shift"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-600/20 via-transparent to-blue-600/20 animate-gradient-shift-reverse"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <path d="M25 0L50 14.4V43.3L25 57.7L0 43.3V14.4L25 0z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Floating Light Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-400 rounded-full opacity-40 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationName: 'floatParticle',
              animationDuration: `${8 + Math.random() * 8}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Radial Gradient Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-600/20 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-md border border-red-500/30 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-red-400" />
              <span className="text-red-100">Let's Build Something Amazing Together</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl  text-white mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
                  Business?
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 blur-sm"></div>
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your digital goals. Our team of experts is ready to 
              bring your vision to life with cutting-edge technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-gradient-to-r from-[#FF0000] to-red-600 hover:from-red-600 hover:to-[#FF0000] h-14 px-10 group border-0 shadow-lg shadow-red-500/30">
                <Zap className="mr-2 w-5 h-5" />
                Get Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="h-14 px-10 border-2 border-white/30 text-black text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>

          {/* Contact Cards with Enhanced Design */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-white mb-2">Email Us</div>
                <a href="mailto:info@onedigittech.com" className="text-gray-300 hover:text-red-400 transition-colors">
                  info@prachha.tech
                </a>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-white mb-2">Call Us</div>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-red-400 transition-colors">
                 +91-955-802-6870
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          25% {
            transform: translate(30px, -40px);
            opacity: 0.6;
          }
          50% {
            transform: translate(-20px, -80px);
            opacity: 0.3;
          }
          75% {
            transform: translate(40px, -60px);
            opacity: 0.5;
          }
        }
        @keyframes gradient-shift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(10%, 10%) scale(1.1);
          }
        }
        @keyframes gradient-shift-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-10%, -10%) scale(1.1);
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
        }
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 12s ease-in-out infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}