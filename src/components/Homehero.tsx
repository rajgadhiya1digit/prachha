import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Smartphone, Search } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Code2, title: "Custom Software" },
  { icon: Globe, title: "Web Applications" },
  { icon: Smartphone, title: "Mobile Apps" },
  { icon: Search, title: "SEO Strategy" },
];

const heroVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HomeHero = () => {
  return (
    <motion.section
      variants={heroVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="relative overflow-hidden bg-[#070B14] text-white"
    >
      <div className="container mx-auto px-4">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[250px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[400px] lg:h-[600px] bg-blue-600/20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
          <div className="absolute w-[200px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[350px] lg:h-[500px] bg-purple-600/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:60px_60px]" />

        {/* Main Content */}
        <div
          className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 
        py-20 sm:py-28 lg:py-32 pb-32 lg:pb-24"
        >
          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={fadeInUp}
              className="text-blue-400 font-medium tracking-widest uppercase text-xs sm:text-sm"
            >
             Precision-Built Software for Next-Gen Businesses
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              transition={{ delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-4"
            >
              Build AI Powerful <br className="hidden sm:block" />
              Digital Products
              <motion.span
                variants={fadeIn}
                transition={{ delay: 0.16, duration: 0.6 }}
                animate={{ scale: [0.98, 1.02, 1], opacity: [0.8, 1, 1] }}
                className="text-blue-500 block sm:inline"
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
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition w-full sm:w-auto"
                >
                  Get Started <ArrowRight size={18} />
                </motion.button>
              </Link>

              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-white/50 hover:border-white/80 px-6 py-3 rounded-xl transition w-full sm:w-auto"
                >
                  View Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.28 }}
              className="flex  justify-center lg:justify-start gap-6 sm:gap-10 mt-10 text-sm text-gray-400"
            >
              <div>
                <p className="text-white text-lg sm:text-2xl font-bold">50+</p>
                Projects Delivered
              </div>
              <div>
                <p className="text-white text-lg sm:text-2xl font-bold">100%</p>
                Client Satisfaction
              </div>
              <div>
                <p className="text-white text-lg sm:text-2xl font-bold">10+</p>
                Years Experience
              </div>
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
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.45 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-xl transition"
                >
                  <item.icon className="text-blue-400 mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
                    Scalable and modern solutions
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              whileHover={{ scale: 1.03 }}
              className="absolute bottom-[-100px] sm:bottom-[-100px] lg:-bottom-28 right-20 lg:right-10 translate-x-1/4 lg:translate-x-0 bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-2xl"
            >
              <div className="bg-[#0B1020] px-5 py-4 rounded-2xl text-center lg:text-left">
                <p className="text-xs sm:text-sm text-gray-300">
                  Next Gen Development
                </p>
                <p className="font-bold text-white text-sm sm:text-base">
                  AI + Cloud Ready Systems
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
