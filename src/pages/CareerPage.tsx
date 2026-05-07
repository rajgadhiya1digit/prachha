import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, Zap, Target, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const careerStages = [
  {
    tag: "01",
    title: "Explorer",
    subtitle: "Discover & Learn",
    description:
      "Step into the tech world with curiosity. Explore different tools, technologies, and domains while working on real tasks. Every day is about learning, experimenting, and building confidence.",
    vibe: "Curiosity • Learning • Experimentation",
    icon: Zap,
    color: "from-indigo-500 to-purple-500"
  },
  {
    tag: "02",
    title: "Builder",
    subtitle: "Create & Deliver",
    description:
      "Turn ideas into real products. You start owning features, solving real problems, and delivering value. This is where your skills become visible and impactful.",
    vibe: "Ownership • Execution • Impact",
    icon: Target,
    color: "from-purple-500 to-pink-500"
  },
  {
    tag: "03",
    title: "Architect",
    subtitle: "Design & Lead",
    description:
      "Think beyond code. You design systems, guide decisions, and mentor others. Your focus shifts from tasks to building scalable, efficient solutions.",
    vibe: "Design • Leadership • Strategy",
    icon: Users,
    color: "from-pink-500 to-red-500"
  },
  {
    tag: "04",
    title: "Visionary",
    subtitle: "Inspire & Transform",
    description:
      "Drive the bigger picture. You shape direction, inspire teams, and influence business outcomes. Your ideas define the future of products and people.",
    vibe: "Vision • Influence • Growth",
    icon: Briefcase,
    color: "from-red-500 to-orange-500"
  }
];

const jobOpenings = [
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    experience: "2+ years",
    location: "Surat"
  },
  {
    title: "Backend Developer (Node.js)",
    department: "Engineering",
    type: "Full-time",
    experience: "3+ years",
    location: "Surat"
  },
  {
    title: "QA Engineer",
    department: "Quality Assurance",
    type: "Full-time",
    experience: "2+ years",
    location: "Surat"
  },
  
];

const benefits = [
  {
    icon: "/career/work-environment.png",
    title: "Favorable Work Environment",
    description: "A comfortable and well-equipped workspace designed to boost productivity, creativity, and collaboration."
  },
  {
    icon: "/career/leadersport.png",
    title: "Leaders Support",
    description: "Supportive leadership that provides clear guidance, regular feedback, and helps you grow in your career."
  },
  {
    icon: "/career/development.png",
    title: "Learning & Development",
    description: "Continuous learning opportunities through training programs, workshops, and skill development sessions."
  },
  {
    icon: "/career/Transparent.png",
    title: "Transparent Evaluation",
    description: "Fair and transparent performance evaluation with clearly defined goals, KPIs, and growth opportunities."
  },
  {
    icon: "/career/balance-scale.png",
    title: "Work-Life Balance",
    description: "Flexible and supportive work culture that helps you maintain a healthy balance between personal and professional life."
  },
  {
    icon: "/career/celebration (1).png",
    title: "Festival Celebration",
    description: "Celebrate festivals, milestones, and special occasions together to build a joyful and inclusive workplace culture."
  },
  {
    icon: "/career/workenvironment.png",
    title: "Strong Work Ethics",
    description: "A culture built on integrity, accountability, and professionalism to maintain trust and transparency."
  },
  {
    icon: "/career/feedback&support.png",
    title: "Feedback and Support",
    description: "Open communication culture where employee feedback is valued and support is always available."
  },
  {
    icon: "/career/sportsevent.png",
    title: "Casual Activities",
    description: "Fun activities, sports events, and wellness sessions that encourage teamwork, health, and work-life balance."
  }
]

const CareerPage = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative bg-[#070B14] text-white overflow-hidden min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] flex justify-center items-center py-20 sm:py-24"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
            {/* Animated gradient mesh */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/15 to-pink-600/10 blur-[100px] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600/20 via-cyan-600/10 to-teal-600/5 blur-[100px] opacity-20" />
            
            {/* Floating particles */}
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Enhanced gradient orbs */}
          <div className="absolute w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-r from-red-500/20 via-orange-500/15 to-yellow-500/10 blur-[100px] rounded-full top-[-150px] left-[-150px] animate-pulse" />
          <div className="absolute w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-gradient-to-r from-orange-500/15 via-red-500/10 to-pink-500/8 blur-[80px] rounded-full bottom-[-150px] right-[-150px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-r from-blue-500/10 via-purple-500/8 to-red-500/6 blur-[60px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 text-center max-w-4xl"
        >
          <div className="mb-6">
            <span className="inline-block text-xs sm:text-sm font-[600] tracking-widest uppercase bg-red-500/10 text-white px-5 py-2 rounded-full border border-orange-400 backdrop-blur-md select-none">
              Join Our Team
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 select-none">
            Ready to Build the
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading-tight select-none">
              Future of Technology?
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Join a team of passionate innovators building cutting-edge digital solutions.
            Grow your career while working on exciting projects that make a real impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#openings"
                className="bg-gradient-to-r from-red-600  to-orange-500 hover:scale-[1.02] transition duration-300 px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-white font-medium w-full sm:w-auto shadow-lg shadow-red-500/20 select-none"
              >
                View Openings <ArrowRight size={18} />
              </a>
              <a
                href="#culture"
                className="border-2 border-red-400 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition duration-300 text-sm md:text-base select-none"
              >
                Our Culture
              </a>
            </div>
          </motion.div>
      </motion.section>

      {/* Career Growth Section */}
      <section id="culture" className="py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-100/30 to-orange-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-100/30 to-red-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        {/* Curved Path Behind Cards */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 1200 400">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#eab308" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 150 200 Q 300 120, 450 200 T 750 280 Q 900 200, 1050 200"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Moving Circle */}
          <motion.circle
            r="8"
            fill="url(#circleGradient)"
            filter="drop-shadow(0 0 10px rgba(239, 68, 68, 0.5))"
            animate={{
              offsetDistance: ["0%", "100%"]
            }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{
              offsetPath: 'path("M 150 200 Q 300 120, 450 200 T 750 280 Q 900 200, 1050 200")'
            }}
          />
        </svg>
        
                
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16 sm:mb-20"
          >
            <motion.span
              variants={fadeIn}
              className="text-red-500 uppercase tracking-wide font-bold text-sm select-none"
            >
              Career Growth
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight select-none"
            >
              Your Path {' '}
              <span className='bg-gradient-to-r from-red-500  to-orange-500 bg-clip-text text-transparent'>
                To Excellence
              </span>

            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              At Prachha Technology, we believe in nurturing talent and providing clear pathways for professional advancement. Your growth journey is designed to unlock your full potential.
            </motion.p>
          </motion.div>

          {/* Mobile Swiper */}
          <div className="lg:hidden">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              modules={[Pagination]}
              className="universal-pagination"
              pagination={{
                clickable: true,
                // dynamicBullets: true,
              }}
            >
              {careerStages.map((stage, index) => (
                <SwiperSlide key={index}>
                  <motion.div

                    className="group bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full min-h-[400px] flex flex-col"
                  >
                    {/* Gradient Background Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Tag */}
                    <span className={`block text-xs font-bold text-white bg-gradient-to-r ${stage.color} px-3 py-1 rounded-full mb-3 relative z-10 select-none`}>
                      {stage.tag}
                    </span>
                    
                    {/* Icon Container */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 relative z-10`}>
                      <stage.icon className="text-white w-7 h-7" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1 relative z-10 select-none">
                      {stage.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className={`text-sm font-semibold bg-gradient-to-r ${stage.color} bg-clip-text text-transparent mb-2 relative z-10 select-none`}>
                      {stage.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-3 relative z-10">
                      {stage.description}
                    </p>
                    
                    {/* Vibe */}
                    <div className="pt-3 border-t border-gray-100 relative z-10">
                      <p className="text-xs text-gray-400 font-medium tracking-wide">
                        {stage.vibe}
                      </p>
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stage.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
            {careerStages.map((stage, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group bg-white rounded-3xl p-6 sm:p-7 lg:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden ${
                  index === 1 || index === 3 ? 'lg:mt-12' : ''
                }`}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Tag */}
                <span className={`inline-block text-xs font-bold text-white bg-gradient-to-r ${stage.color} px-3 py-1 rounded-full mb-2 sm:mb-3 relative z-10 select-none`}>
                  {stage.tag}
                </span>
                
                {/* Icon Container */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 shadow-lg transition-transform duration-300 relative z-10`}>
                  <stage.icon className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1 relative z-10 select-none">
                  {stage.title}
                </h3>
                
                {/* Subtitle */}
                <p className={`text-sm font-semibold bg-gradient-to-r ${stage.color} bg-clip-text text-transparent mb-2 relative z-10 select-none`}>
                  {stage.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-2 sm:mb-3 relative z-10">
                  {stage.description}
                </p>
                
                {/* Vibe */}
                <div className="pt-2 sm:pt-3 border-t border-gray-100 relative z-10">
                  <p className="text-xs text-gray-400 font-medium tracking-wide">
                    {stage.vibe}
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stage.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.span
              variants={fadeIn}
              className="text-red-500 uppercase tracking-wide font-bold text-sm select-none"
            >
              Why Join Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight select-none"
            >
              Benefits Of Working {' '}
              <span className='bg-gradient-to-r from-red-500  to-orange-500 bg-clip-text text-transparent'>
               With Prachha
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-base max-w-2xl mx-auto"
            >
              We value our team and provide ample support for growth and self-development
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <img src={benefit.icon} alt={benefit.title} className="w-8 h-8" />
                  {/* <benefit.icon className="text-white" size={28} /> */}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 select-none">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.span
              variants={fadeIn}
              className="text-red-500 uppercase tracking-wide font-bold text-sm select-none"
            >
              Current Openings
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 text-gray-900 select-none"
            >
              Join <span className='bg-gradient-to-r from-red-500  to-orange-500 bg-clip-text text-transparent'>
                 Our Team
                </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-base max-w-2xl mx-auto"
            >
              Explore our current job openings and find your perfect role
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-md p-6 border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight select-none">
                        {job.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-600 whitespace-nowrap ml-2 select-none">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Briefcase size={16} className="text-red-500 flex-shrink-0" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} className="text-red-500 flex-shrink-0" />
                        <span>{job.location || "Surat"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users size={16} className="text-red-500 flex-shrink-0" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full bg-gradient-to-r from-red-600  to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-red-500/20 font-semibold select-none"
                  >
                    Apply Now <ArrowRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-100/20 to-orange-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-100/20 to-yellow-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto shadow-2xl border border-gray-100/50 relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-yellow-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-l from-red-100/60 to-orange-100/40 blur-2xl rounded-full animate-pulse" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-orange-100/50 to-yellow-100/40 blur-2xl rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl shadow-red-500/30 relative z-10"
            >
              <Mail className="text-white w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight relative z-10 text-center select-none">
              Don't See the Right Role?
            </h3>
            <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed relative z-10 text-center max-w-2xl mx-auto">
              We're always looking for talented people to join our team. Send us your CV and we'll keep you in mind for future opportunities that match your skills.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }} 
                target='_blank'
                href="mailto:info@prachha.com"
                className="bg-gradient-to-r from-red-600  to-orange-500 transition-all duration-300 px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-white font-semibold w-full sm:w-auto shadow-xl shadow-red-500/30 hover:shadow-red-500/50 select-none"
              >
                <Mail size={20} />
                Email Your CV
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CareerPage;
