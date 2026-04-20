import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronRight, Star, Check, CreditCard, QrCode, BarChart3, Package, ShoppingCart, FileText, Users, Shield, Zap, Globe, ArrowRight, Menu, X, Maximize2, ZoomIn, ZoomOut, RotateCw, TrendingUp, Award, Clock, Target, Monitor } from "lucide-react";

// Define sendPrompt function to prevent runtime errors
const sendPrompt = (prompt: string) => {
  // console.log('Prompt:', prompt);
};

// Scroll Animation Hook - Optimized for Safari
const useScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [50, 0]);

  return { scale, opacity, y };
};

// Catalog Item Component
const CatalogItem = ({ item, index, onImageClick, id }: { item: any, index: number, onImageClick: (image: string) => void, id?: string }) => {
  const ref = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "end 10%"] });
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.9], isMobile ? [0, 0] : [index % 2 === 0 ? -30 : 30, 0]);

  return (
    <motion.div
      id={id}
      ref={ref}
      style={{ scale, opacity, x }}
      className="grid lg:grid-cols-2 gap-10 items-center mb-1 transform-gpu"
      // layout="position"
    >
      {/* Left Side - Text Content */}
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 mr-2" />
            {item.subtitle}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {item.title}
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {item.description}
          </p>

          {/* Features List */}
          <div className="space-y-3 mb-8">
            {item.features.map((feature: string, featureIndex: number) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 + featureIndex * 0.03, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-start"
              >
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(item.stats).map(([key, value], statIndex: number) => (
              <motion.div
                key={statIndex}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.04 + statIndex * 0.02 }}
                viewport={{ once: true }}
                className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg 
                          min-h-[90px] flex flex-col items-center justify-center text-center"
              >
                <div className="text-base sm:text-lg font-bold text-blue-600 leading-none">
                  {String(value)}
                </div>

                <div className="text-xs sm:text-sm text-gray-600 mt-2 leading-snug break-words">
                  {key}
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => sendPrompt(`Show me ${item.title} demo`)}
            className="px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center
            "
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button> */}
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 + 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-10" />
          <div
            className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-4 cursor-pointer group hover:shadow-2xl transition-shadow duration-200 will-change-transform"
            onClick={() => onImageClick(item.image)}
          >
            <div className="relative w-full h-80 sm:h-96">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-200 will-change-transform"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/10">
              <div className="bg-white rounded-full p-3 shadow-md">
                <Maximize2 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  onImageClick?: (image: string) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, image, onImageClick }) => {
  const handleImageClick = () => {
    if (image && onImageClick) {
      // console.log('Image clicked:', image);
      onImageClick(image);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-200 will-change-transform">
      {image && (
        <div
          className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-4 cursor-pointer group"
          onClick={handleImageClick}
        >
          <div className="relative w-full h-64">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-200 will-change-transform"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-white rounded-full p-3 shadow-md">
              <Monitor className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        {image && (
          <p className="text-sm text-blue-600 mt-3 cursor-pointer hover:text-blue-700 transition-colors" onClick={handleImageClick}>
            Click to view full image
          </p>
        )}
      </div>
    </div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => (
  <div className="text-center group">
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-3 group-hover:scale-105 transition-transform duration-200 will-change-transform">
      {icon}
    </div>
    <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

// Image Modal Component
const ImageModal: React.FC<{
  isOpen: boolean;
  imageSrc: string | null;
  onClose: () => void;
}> = ({ isOpen, imageSrc, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageRotation, setImageRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Handle zoom with mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoomLevel(prev => Math.max(0.5, Math.min(3, prev + delta)));
  };

  // Handle zoom buttons
  const handleZoomIn = () => setZoomLevel(prev => Math.min(3, prev + 0.25));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(0.5, prev - 0.25));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setImageRotation(0);
  };

  // Handle rotation
  const handleRotate = () => setImageRotation(prev => (prev + 90) % 360);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      e.preventDefault();
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoomLevel > 1 && e.touches.length === 1) {
      e.preventDefault();
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Close modal and reset state
  const handleClose = () => {
    setZoomLevel(1);
    setImageRotation(0);
    setPosition({ x: 0, y: 0 });
    onClose();
  };

  useEffect(() => {
    const handleModalZoomIn = () => handleZoomIn();
    const handleModalZoomOut = () => handleZoomOut();
    const handleModalReset = () => handleResetZoom();

    window.addEventListener('modalZoomIn', handleModalZoomIn);
    window.addEventListener('modalZoomOut', handleModalZoomOut);
    window.addEventListener('modalResetZoom', handleModalReset);

    return () => {
      window.removeEventListener('modalZoomIn', handleModalZoomIn);
      window.removeEventListener('modalZoomOut', handleModalZoomOut);
      window.removeEventListener('modalResetZoom', handleModalReset);
    };
  }, []);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      onClick={handleClose}
      onWheel={handleWheel}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        className="fixed top-4 right-4 z-[51] bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 p-3 rounded-full border border-white/20"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Zoom Controls */}
      <div className="fixed top-4 left-4 z-[51] bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-2 flex flex-col gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleResetZoom();
          }}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded transition-colors"
          title="Reset"
        >
          <RotateCw className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRotate();
          }}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded transition-colors"
          title="Rotate"
        >
          <RotateCw className="w-4 h-4" />
        </button>
      </div>

      {/* Zoom Level Indicator */}
      <div className="fixed top-4 left-20 z-[51] bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20 text-sm">
        {Math.round(zoomLevel * 100)}%
      </div>

      {/* Full Screen Image Container */}
      <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
        <div
          className="relative select-none w-auto h-auto max-w-[100vw] max-h-[100vh]"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `scale(${zoomLevel}) rotate(${imageRotation}deg) translate(${position.x}px, ${position.y}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease',
            cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }}
        >
          <img
            src={imageSrc}
            alt="Full size screenshot"
            className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain block"
            draggable={false}
          />
        </div>
      </div>

      {/* Instructions Overlay */}
      <div className="fixed bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md text-white p-4 rounded-lg border border-white/20">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="text-sm">
            <span className="font-medium">Controls:</span> Scroll to zoom | Drag to pan when zoomed | Click buttons to zoom/rotate | ESC or click to close
          </div>
          <div className="flex items-center space-x-2">
            <Maximize2 className="w-5 h-5" />
            <span className="text-xs">Interactive Viewer</span>
          </div>
        </div>
      </div>

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </div>
  );
};

// Contact Modal Component
const ContactModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // console.log('Form submitted:', formData);
    // You can integrate with email service or API here
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">Or reach us directly:</p>
              <div className="space-y-1">
                <a href="mailto:contact@1digittechnology.com" className="text-sm text-blue-600 hover:text-blue-700 block">
                  contact@1digittechnology.com
                </a>
                <a href="tel:9898386870" className="text-sm text-blue-600 hover:text-blue-700 block">
                  9898386870
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated Stat Component
function AnimatedStat({ icon, endValue, suffix, label, gradient, duration }: {
  icon: React.ReactNode;
  endValue: number;
  suffix: string;
  label: string;
  gradient: string;
  duration: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Smooth continuous animation from 0 to 100% in 5 seconds
    const startTime = Date.now();
    const endTime = startTime + 5000; // 5 seconds

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / 5000, 1);

      // Smooth easing function for natural feel
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = endValue * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, endValue]);

  const formatCount = (value: number) => {
    if (endValue >= 1000000) {
      return (value / 1000000).toFixed(1);
    } else if (endValue >= 1000) {
      return (value / 1000).toFixed(0);
    } else if (endValue < 10) {
      return value.toFixed(1);
    } else {
      return Math.floor(value).toString();
    }
  };

  return (
    <motion.div
      ref={ref}
      className="text-center group flex flex-col items-center justify-center"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${gradient} text-white mx-auto mb-2 group-hover:scale-105 transition-all duration-200 shadow-lg`}>
        {icon}
      </div>
      <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 flex items-center justify-center">
        {formatCount(count)}{suffix}
      </div>
      <div className="text-xs text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
}

const One_store: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageRotation, setImageRotation] = useState(0);
  const [showJumpToTop, setShowJumpToTop] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Add custom animation classes
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 4s ease infinite;
        will-change: background-position;
      }
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(20px, -30px) scale(1.05); }
        66% { transform: translate(-15px, 15px) scale(0.95); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-blob {
        animation: blob 8s infinite;
        will-change: transform;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    // Ensure page starts at top on refresh
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowJumpToTop(currentScrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
      // Zoom controls with keyboard
      if (event.key === '=' || event.key === '+') {
        event.preventDefault();
        // Trigger zoom in - we'll handle this in the modal
        const zoomInEvent = new CustomEvent('modalZoomIn');
        window.dispatchEvent(zoomInEvent);
      }
      if (event.key === '-' || event.key === '_') {
        event.preventDefault();
        // Trigger zoom out - we'll handle this in the modal
        const zoomOutEvent = new CustomEvent('modalZoomOut');
        window.dispatchEvent(zoomOutEvent);
      }
      if (event.key === '0') {
        event.preventDefault();
        // Reset zoom
        const resetEvent = new CustomEvent('modalResetZoom');
        window.dispatchEvent(resetEvent);
      }
      // Arrow keys for navigation (if we implement image gallery later)
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedImage]);

  const catalogSolutions = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Complete POS Billing",
      subtitle: "Streamlined Billing Solution",
      description: "Transform your billing process with our intuitive POS system. Generate invoices, manage multiple payment methods, and handle customer data seamlessly.",
      features: ["Fast billing interface", "Multiple payment options", "Customer management", "Real-time sales tracking"],
      image: "/product/onestore/pos.png",
      stats: { "Processing Speed": "< 2 seconds", "Support": "24/7 Available", "Accuracy": "99.9%" }
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Smart Inventory Control",
      subtitle: "Advanced Stock Management",
      description: "Never run out of stock with intelligent inventory tracking. Get alerts for low stock, manage suppliers, and optimize your product catalog.",
      features: ["Real-time stock tracking", "Low stock alerts", "Supplier management", "Barcode integration"],
      image: "/product/onestore/Product.png",
      stats: { "Stock Accuracy": "100%", "Alert Speed": "Instant", "Reduction": "40% waste" }
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      subtitle: "Advanced Analytics Dashboard",
      description: "Make data-driven decisions with comprehensive business analytics. Track sales trends, customer behavior, and profit margins in real-time.",
      features: ["Sales analytics", "Customer insights", "Profit tracking", "Custom reports"],
      image: "/product/onestore/Salse summery.png",
      stats: { "Report Generation": "Real-time", "Insights": "50+ metrics", "Growth Tracking": "Daily" }
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "GST Compliance Suite",
      subtitle: "Automated Tax Management",
      description: "Stay GST-compliant with automated invoice generation and tax filing. Generate GST-ready invoices and file returns effortlessly.",
      features: ["GST-compliant invoices", "Auto tax calculation", "Return filing", "HSN/SAC codes"],
      image: "/product/onestore/Invoice.jpg",
      stats: { "Compliance": "100%", "Filing Speed": "5 minutes", "Accuracy": "Error-free" }
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "Digital Transformation",
      subtitle: "Barcode & QR Solutions",
      description: "Embrace digital transformation with advanced barcode and QR code solutions. Speed up billing and inventory management with scanning technology.",
      features: ["Barcode generation", "QR code support", "Mobile scanning", "Label printing"],
      image: "/product/onestore/Print barcode.png",
      stats: { "Scanning Speed": "< 1 second", "Setup Time": "10 minutes", "Error Rate": "0.01%" }
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce Integration",
      subtitle: "Online Store Platform",
      description: "Expand your business online with integrated e-commerce solutions. Manage both physical and online stores from a single platform.",
      features: ["Online store setup", "Inventory sync", "Order management", "Payment integration"],
      image: "/product/onestore/Online store.png",
      stats: { "Setup Time": "24 hours", "Sync Speed": "Real-time", "Sales Growth": "+60%" }
    }
  ];

  const paymentMethods = [
    { icon: <CreditCard className="w-5 h-5" />, name: "UPI & QR Payments", description: "PhonePe, Paytm, Google Pay, BHIM" },
    { icon: <CreditCard className="w-5 h-5" />, name: "Card & POS Machine", description: "Debit, Credit, Contactless, EMI" },
    { icon: <Users className="w-5 h-5" />, name: "Credit & Khata", description: "Udhari tracking with WhatsApp reminders" },
    { icon: <Shield className="w-5 h-5" />, name: "Split & Mixed Payment", description: "Part cash + part UPI in one bill" }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200 rounded-full blur-lg opacity-10"></div>
        <div className="absolute top-40 right-10 w-48 h-48 bg-purple-200 rounded-full blur-lg opacity-10"></div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                One Store
              </span>
              <br />
              <span className="text-gray-900">Business Suite</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Complete business management solution for modern retail. From billing to inventory, analytics to e-commerce - everything you need to grow your business.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => sendPrompt('Start free trial One Store Business Suite')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg flex items-center"
              >
                <Award className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => sendPrompt('Watch One Store Business Suite demo')}
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-6 w-full max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <AnimatedStat
                icon={<Users className="w-6 h-6 sm:w-8 sm:h-8" />}
                endValue={50000}
                suffix="K+"
                label="Active Stores"
                gradient="from-blue-500 to-purple-500"
                duration={5}
              />
              <AnimatedStat
                icon={<FileText className="w-6 h-6 sm:w-8 sm:h-8" />}
                endValue={10000000}
                suffix="Cr+"
                label="Bills/Day"
                gradient="from-green-500 to-teal-500"
                duration={5}
              />
              <AnimatedStat
                icon={<Star className="w-6 h-6 sm:w-8 sm:h-8" />}
                endValue={4.8}
                suffix=""
                label="User Rating"
                gradient="from-yellow-500 to-orange-500"
                duration={5}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <span className="text-gray-400 font-semibold">TRUSTED BY</span>
            <span className="text-gray-200 font-medium">General Stores</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-200 font-medium">Pharmacies</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-200 font-medium">Restaurants</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-200 font-medium">Garments</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-200 font-medium">Supermarkets</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-200 font-medium">Hardware Shops</span>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-base font-bold mb-6">
              <Package className="w-5 h-5 mr-2" />
              Complete Business Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything Your Business Needs
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                In One Platform
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of tools designed for modern retail. Each solution is crafted to solve specific business challenges and drive growth.
            </p>
          </motion.div>

          {/* Catalog Items */}
          <div className="space-y-10">
            {catalogSolutions.map((item, index) => (
              <CatalogItem
                key={index}
                item={item}
                index={index}
                id={
                  index === 0 ? "pos-billing" :
                    index === 1 ? "inventory-management" :
                      index === 3 ? "gst-compliance" :
                        index === 5 ? "e-commerce" :
                          undefined
                }
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-base font-bold mb-6">
              <Package className="w-5 h-5 mr-2" />
              App Screenshots
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              See One Store in Action
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mt-2">
                Beautiful & Intuitive Interface
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our clean, modern interface designed for maximum efficiency and ease of use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShoppingCart className="w-6 h-6" />}
              title="Billing Dashboard"
              description="Clean and intuitive billing interface for fast checkout and customer management."
              image="/product/onestore/pos.png"
              onImageClick={setSelectedImage}
            />
            <FeatureCard
              icon={<Package className="w-6 h-6" />}
              title="Inventory Management"
              description="Comprehensive stock management with real-time updates and smart alerts."
              image="/product/onestore/Product.png"
              onImageClick={setSelectedImage}
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Sales Analytics"
              description="Detailed business insights with interactive charts and reports."
              image="/product/onestore/Salse summery.png"
              onImageClick={setSelectedImage}
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="GST Invoicing"
              description="Professional GST-compliant invoices with automatic tax calculations."
              image="/product/onestore/Invoice.jpg"
              onImageClick={setSelectedImage}
            />
            <FeatureCard
              icon={<QrCode className="w-6 h-6" />}
              title="Barcode Scanner"
              description="Fast barcode scanning for quick product identification and billing."
              image="/product/onestore/Print barcode.png"
              onImageClick={setSelectedImage}
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="E-commerce Store"
              description="Integrated online store with real-time inventory synchronization."
              image="/product/onestore/Online store.png"
              onImageClick={setSelectedImage}
            />
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section id="payments" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-base font-bold mb-6">
              <CreditCard className="w-5 h-5 mr-2" />
              Universal Payment Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Accept Every Payment Method
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mt-2">
                Your Customers Prefer
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From traditional cash to modern digital payments - we support every payment method to make your customers happy and your business grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md will-change-transform"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  borderColor: "rgba(99, 102, 241, 0.3)"
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.name}</h3>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8">
            Join 50,000+ stores already using One Store to grow their business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => sendPrompt('Start free trial One Store POS')}
              className="px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Free Trial
            </button>
            <button 
              onClick={() => sendPrompt('Show me a free demo of One Store POS')}
              className="px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm sm:text-base font-semibold mb-4 sm:mb-6">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get connected
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Reach Out to Us
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                We're Here to Help
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
              Have questions about One Store? Get in touch with our team and we'll be happy to assist you.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

            {/* Email Card */}
            <motion.div
              className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 lg:p-8 text-center shadow-md will-change-transform"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                borderColor: "rgba(99, 102, 241, 0.3)"
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center justify-center w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mx-auto mb-4">
                <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Send Email
              </h3>

              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Get in touch via email
              </p>

              <button
                onClick={() => setShowContactModal(true)}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base break-all"
              >
                contact@1digittechnology.com
              </button>
            </motion.div>

            {/* Call Card */}
            <motion.div
              className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 lg:p-8 text-center shadow-md will-change-transform"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                borderColor: "rgba(34, 197, 94, 0.3)"
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center justify-center w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white mx-auto mb-4">
                <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Call Us
              </h3>

              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Call for immediate support
              </p>

              <button
                onClick={() => setShowContactModal(true)}
                className="text-green-600 hover:text-green-700 font-medium text-base sm:text-lg"
              >
                9898386870
              </button>
            </motion.div>

            {/* Address Card */}
            <motion.div
              className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 lg:p-8 text-center shadow-md will-change-transform sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                borderColor: "rgba(168, 85, 247, 0.3)"
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center justify-center w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white mx-auto mb-4">
                <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Address
              </h3>

              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                7/4003, 4004(1), Prachha House,<br />
                Baman Ji Ni Sheri,<br />
                Diamond City Restaurant,<br />
                Surat People's Bank,<br />
                Lal Darvaja - Rampura Road
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </div>
  );
};

export default One_store;