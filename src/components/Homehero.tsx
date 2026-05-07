import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Smartphone, Search } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { 
    icon: Code2, 
    title: "Custom Software",
    description: "Tailored solutions built to match your business needs."
  },
  { 
    icon: Globe, 
    title: "Web Applications",
    description: "Fast, scalable, and modern web apps for all industries."
  },
  { 
    icon: Smartphone, 
    title: "Mobile Apps",
    description: "High-performance apps for iOS and Android devices."
  },
  { 
    icon: Search, 
    title: "SEO Strategy",
    description: "Data-driven SEO to boost visibility and organic growth."
  },
];

const heroVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};

const HomeHero = () => {
  return (
    <motion.section
      variants={heroVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="relative bg-[#070B14] text-white overflow-hidden min-h-[calc(100vh-64px)]  sm:min-h-[calc(100vh-72px)] flex justify-center items-center 
      py-20 sm:py-24"
    >
      <div className="container mx-auto px-4">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-red-600/15 blur-[60px] rounded-full top-[-100px] left-[-100px]" />
          <div className="absolute w-[150px] sm:w-[250px] lg:w-[350px] h-[150px] sm:h-[250px] lg:h-[350px] bg-orange-600/15 blur-[60px] rounded-full bottom-[-100px] right-[-100px]" />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:60px_60px]" />

        {/* Main Content */}
        <div
          className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 "
        >
          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={fadeInUp}
              className="text-red-400 font-medium tracking-widest uppercase text-xs sm:text-sm select-none"
            >
             Precision-Built Software for Next-Gen Businesses
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              transition={{ delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-4 select-none"
            >
              Build AI Powerful <br className="hidden sm:block" />
              Digital Products
              <motion.span
                variants={fadeIn}
                transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                animate={{ scale: [0.99, 1.01, 1], opacity: [0.9, 1, 1] }}
                className="text-red-500 block sm:inline select-none"
              >
                {" "}
                That Scale Fast
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
              className="text-gray-400 mt-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
            >
              We design and develop custom software, web applications, mobile
              apps, and SEO strategies that help businesses grow faster in the
              digital era.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.22 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-gradient-to-r from-red-600  to-orange-500 px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition w-full sm:w-auto text-white font-medium shadow-lg shadow-red-500/20 select-none"
                >
                  Get Started <ArrowRight size={18} className="group-hover:translate-x-1 duration-300"/>
                </motion.button>
              </Link>

              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-red-500/60 hover:border-red-500  hover:text-white px-6 py-3 rounded-xl transition w-full sm:w-auto text-white font-medium select-none"
                >
                  View Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.28 }}
              className="flex justify-center lg:justify-start gap-4 sm:gap-8 mt-12"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-4 text-center min-w-[100px] sm:min-w-[120px] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <p
                    className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1 select-none"
                  >
                    25+
                  </p>
                  <p className="text-red-300 text-xs sm:text-sm font-medium select-none">Projects Delivered</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-4 text-center min-w-[100px] sm:min-w-[120px] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <p 
                    className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1 select-none"
                  >
                    100%
                  </p>
                  <p className="text-red-300 text-xs sm:text-sm font-medium select-none">Client Satisfaction</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-4 text-center min-w-[100px] sm:min-w-[120px] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <p className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1 select-none"
                  >
                    10+
                  </p>
                  <p className="text-red-300 text-xs sm:text-sm font-medium select-none">Satisfied Clients</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-none">
            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm transition-transform will-change-transform \
                  flex flex-col items-center xs:items-start text-center xs:text-left"
                >
                  <item.icon className="text-red-400 mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-sm sm:text-base select-none">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Floating Card */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="flex justify-center lg:justify-end">

            
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="relative group mt-10"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Main card */}
              <motion.div
                className="relative bg-gradient-to-r from-red-600 to-orange-600 p-[2px] rounded-2xl shadow-xl shadow-red-500/30"
                whileHover={{ rotateX: 5, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-5 rounded-2xl text-center overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 animate-pulse"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-2"></div>
                      <p className="text-xs sm:text-sm text-red-300 font-medium tracking-wider uppercase select-none">
                        Next Gen Development
                      </p>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse ml-2"></div>
                    </div>
                    <p className="font-bold text-white text-sm sm:text-base mb-2 select-none">
                      AI + Cloud Ready Systems
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
