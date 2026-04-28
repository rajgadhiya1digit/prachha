import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Package, Users, BarChart3, Shield, TrendingUp, Clock, CheckCircle2, Database, Eye, Settings, FileText, Activity } from "lucide-react";

const Wherit = () => {
  const [showJumpToTop, setShowJumpToTop] = useState(false);

  const heroRef = useRef(null);
  const inventoryRef = useRef(null);
  const lifecycleRef = useRef(null);
  const trackingRef = useRef(null);
  const assignmentsRef = useRef(null);
  const usersRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const inventoryInView = useInView(inventoryRef, { once: true });
  const lifecycleInView = useInView(lifecycleRef, { once: true });
  const trackingInView = useInView(trackingRef, { once: true });
  const assignmentsInView = useInView(assignmentsRef, { once: true });
  const usersInView = useInView(usersRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  useEffect(() => {
    const handleScroll = () => {
      setShowJumpToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 15,
        duration: 0.4,
      },
    },
  }), []);

  const slideInLeft = useMemo(() => ({
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        duration: 0.5,
      },
    },
  }), []);

  const slideInRight = useMemo(() => ({
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        duration: 0.5,
      },
    },
  }), []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900 overflow-hidden">

      <motion.section ref={heroRef} className="relative z-10 pt-16 pb-16 ">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Complete
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "} Asset Management
              </span>
              <br />
              Platform Showcase
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the comprehensive features of Wherit&apos;s enterprise asset management system.
              From inventory tracking to user assignments, see how modern businesses manage their IT infrastructure.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 transition-all"
              >
                View Demo
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Assets Inventory Section */}
      <motion.section ref={inventoryRef} id="inventory" className="relative z-10 py-16 sm:py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={inventoryInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-12 max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
                <Database className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-600 font-medium">Asset Inventory</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Complete
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}
                  Inventory Overview
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Get a comprehensive view of all your IT assets in one centralized dashboard.
                Track every device, monitor status, and manage your entire asset portfolio efficiently.
              </p>
            </motion.div>

            <motion.div variants={slideInLeft} className="relative w-full">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-4 md:p-6 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">
                  <img
                    src="/product/wherit/Assets inventry.webp"
                    alt="Assets Inventory Dashboard"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "520px" }}
                    loading="lazy"
                  />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-2   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Database className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-6 grid-cols-1 md:grid-cols-3">
              {[
                { icon: Package, title: "Asset Catalog", desc: "Complete inventory of all devices" },
                { icon: BarChart3, title: "Real-time Status", desc: "Live monitoring of asset health" },
                { icon: TrendingUp, title: "Usage Analytics", desc: "Detailed utilization reports" },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Asset Lifecycle Tracking Section */}
      <motion.section ref={lifecycleRef} id="lifecycle" className="relative z-10 py-16 sm:py-20  bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate={lifecycleInView ? "visible" : "hidden"} variants={containerVariants} className="space-y-12 max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full">
                <Clock className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-purple-600 font-medium">Lifecycle Management</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Asset
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}
                  Lifecycle Tracking
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Monitor your assets from procurement to disposal. Track maintenance schedules,
                warranty periods, and optimize asset utilization throughout their entire lifecycle.
              </p>
            </motion.div>

            <motion.div variants={slideInRight} className="relative w-full">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-4 md:p-6 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">

                  <img
                    src="/product/wherit/wherit_asset_lifecycle_tracking.webp"
                    alt="Assets Inventory Dashboard"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "520px" }}
                    loading="lazy"
                  />

                </div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -left-2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-4 grid-cols-1 md:grid-cols-4">
              {[
                { step: "01", title: "Procurement", desc: "Asset acquisition" },
                { step: "02", title: "Deployment", desc: "Setup & configuration" },
                { step: "03", title: "Maintenance", desc: "Regular servicing" },
                { step: "04", title: "Retirement", desc: "End-of-life management" },
              ].map((phase) => (
                <motion.div
                  key={phase.title}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-purple-300 transition-all shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-purple-600">
                    {phase.step}
                  </div>
                  <h3 className="font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-600">{phase.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Assets Tracking List Section */}
      <motion.section ref={trackingRef} id="tracking" className="relative z-10 py-16 sm:py-20 bg-white/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate={trackingInView ? "visible" : "hidden"} variants={containerVariants} className="space-y-12 max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full">
                <Eye className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-green-600 font-medium">Real-time Tracking</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Assets
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Tracking List
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Track every asset movement in real-time. Monitor location changes,
                check-in/check-out status, and maintain complete audit trails for compliance.
              </p>
            </motion.div>

            <motion.div variants={slideInLeft} className="relative w-full">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-4 md:p-6 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">
                  <img
                    src="/product/wherit/wherit_assets_tracking_list.webp"
                    alt="Assets Inventory Dashboard"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "520px" }}
                    loading="lazy"
                  />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: CheckCircle2, title: "Live Location", desc: "GPS-enabled tracking" },
                { icon: Activity, title: "Movement History", desc: "Complete audit trail" },
                { icon: Shield, title: "Security Alerts", desc: "Unauthorized movement detection" },
                { icon: FileText, title: "Compliance Reports", desc: "Regulatory documentation" },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-all shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* User Assignments Section */}
      <motion.section ref={assignmentsRef} id="assignments" className="relative z-10 py-16 sm:py-20  bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate={assignmentsInView ? "visible" : "hidden"} variants={containerVariants} className="space-y-12 max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full">
                <Users className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-orange-600 font-medium">User Management</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                User
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {" "}
                  Assignments
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Efficiently assign assets to employees and track usage patterns.
                Manage permissions, monitor checkout history, and optimize asset distribution.
              </p>
            </motion.div>

            <motion.div variants={slideInRight} className="relative w-full">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-4 md:p-6 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">

                  <img
                    src="/product/wherit/wherit_user_assignments.webp"
                    alt="Assets Inventory Dashboard"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "520px" }}
                    loading="lazy"
                  />
                </div>
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute  -top-2 -left-2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-6 grid-cols-1 md:grid-cols-3">
              {[
                { icon: Users, title: "Employee Profiles", desc: "Complete user management" },
                { icon: Settings, title: "Role-based Access", desc: "Permission control" },
                { icon: BarChart3, title: "Usage Analytics", desc: "Employee asset utilization" },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-all shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Users List Section */}
      <motion.section ref={usersRef} id="users" className="relative z-10 py-16 sm:py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate={usersInView ? "visible" : "hidden"} variants={containerVariants} className="space-y-12 max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full">
                <Shield className="w-4 h-4 text-indigo-600 mr-2" />
                <span className="text-indigo-600 font-medium">User Administration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Users
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Management
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive user administration with role-based access control.
                Manage user accounts, permissions, and maintain security across your organization.
              </p>
            </motion.div>

            <motion.div variants={slideInLeft} className="relative w-full">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-4 md:p-6 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">
                  <img
                    src="/product/wherit/wherit_users_list.webp"
                    alt="Assets Inventory Dashboard"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "520px" }}
                    loading="lazy"
                  />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        id="contact"
        className="relative z-10 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-6xl space-y-10 sm:space-y-12 mx-auto"
          >

            {/* Heading */}
            <motion.div
              variants={itemVariants}
              className="text-center space-y-3 sm:space-y-4"
            >
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 rounded-full">
                <Users className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-600 font-medium text-sm sm:text-base">
                  Get Connected
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Reach Out to
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}Us
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
                We're here to help. Have questions about Wherit? Get in touch with our team and we'll be happy to assist you.
              </p>
            </motion.div>

            {/* Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
            >

              {/* Email Card */}
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 lg:p-8 text-center shadow-md will-change-transform"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  borderColor: "rgba(99, 102, 241, 0.3)"
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center justify-center w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white mx-auto mb-4">
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

                <a
                  href="mailto:contact@1digittechnology.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base break-all"
                >
                  contact@1digittechnology.com
                </a>
              </motion.div>

              {/* Call Card */}
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 lg:p-8 text-center shadow-md will-change-transform"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  borderColor: "rgba(34, 197, 94, 0.3)"
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
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

                <a
                  href="tel:9898386870"
                  className="text-green-600 hover:text-green-700 font-medium text-base sm:text-lg"
                >
                  9898386870
                </a>
              </motion.div>

              {/* Address Card */}
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 lg:p-8 text-center shadow-md will-change-transform sm:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  borderColor: "rgba(168, 85, 247, 0.3)"
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
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
                  Beside -Diamond City Restaurant,<br />
                  Surat People's Bank,<br />
                  Lal Darvaja - Rampura Road
                </p>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ... */}
      <section className="relative z-10 bg-gradient-to-br from-green-100 to-orange-100 text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center space-y-8 max-w-xl mx-auto">
            <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="text-2xl sm:text-3xl md:text-4xl
             lg:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent ">
                {" "}
                Asset Management?
              </span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Experience the power of comprehensive asset management with Wherit.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-orange-600 text-white px-10 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-base">
                Start Free Trial <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </motion.button>

              <motion.button whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto bg-transparent text-gray-800 px-10 py-3 rounded-xl font-semibold border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all text-base">
                Schedule Demo
              </motion.button>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </section>
  );
};

export default Wherit;