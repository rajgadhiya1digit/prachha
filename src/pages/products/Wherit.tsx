import React, { useEffect, useRef, useState } from "react";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900">

      <motion.section ref={heroRef} className="relative z-10 pt-16 pb-16 ">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="space-y-8 max-w-6xl mx-auto"
          >
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Complete
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "} Asset Management
              </span>
              <br />
              Platform Showcase
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the comprehensive features of Wherit&apos;s enterprise asset management system.
              From inventory tracking to user assignments, see how modern businesses manage their IT infrastructure.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 transition-all"
              >
                View Demo
              </motion.button>
            </motion.div>
          </motion.div>
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
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-4 md:p-8 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">
                  <img
                    src="/product/wherit/Assets inventry.png"
                    alt="Assets Inventory Dashboard"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "520px" }}
                  />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-3 sm:-right-6 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Database className="w-6 sm:w-10 h-8 sm:h-10 text-white" />
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
                  whileHover={{ scale: 1.05, y: -5 }}
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
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-4 md:p-8 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">
                  <img
                    src="/product/wherit/wherit_asset_lifecycle_tracking.png"
                    alt="Asset Lifecycle Tracking"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "520px" }}
                  />
                </div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -left-3 sm:-left-6 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Clock className="w-6 sm:w-10 h-8 sm:h-10 text-white" />
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
                  whileHover={{ scale: 1.05 }}
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
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-4 md:p-8 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">
                  <img
                    src="/product/wherit/wherit_assets_tracking_list.png"
                    alt="Assets Tracking List"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "520px" }}
                  />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 sm:-bottom-6 -right-3 sm:-right-6 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Eye className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
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
                  whileHover={{ scale: 1.05, y: -5 }}
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
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-4 md:p-8 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">
                  <img
                    src="/product/wherit/wherit_user_assignments.png"
                    alt="User Assignments"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "520px" }}
                  />
                </div>
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-3 sm:-left-6 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Users className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
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
                  whileHover={{ scale: 1.05, y: -5 }}
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
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-4 md:p-8 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">
                  <img
                    src="/product/wherit/wherit_users_list.png"
                    alt="Users List"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "520px" }}
                  />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-2 sm:-right-6 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
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
            className="space-y-10 sm:space-y-12"
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
                
                {/* Email Card */}
                <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-200 hover:border-blue-300 transition-all shadow-md hover:shadow-xl"
                >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                    Send Email
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                    Get in touch via email
                </p>

                <a
                    href="mailto:contact@1digittechnology.com"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm sm:text-base break-all"
                >
                    contact@1digittechnology.com
                </a>
                </motion.div>

                {/* Call Card */}
                <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-200 hover:border-blue-300 transition-all shadow-md hover:shadow-xl"
                >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                    Call Us
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                    Call us for immediate support
                </p>

                <a
                    href="tel:9898386870"
                    className="text-green-600 font-medium hover:text-green-700 transition-colors text-base sm:text-lg"
                >
                    9898386870
                </a>
                </motion.div>

                {/* Address Card */}
                <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-200 hover:border-blue-300 transition-all shadow-md hover:shadow-xl sm:col-span-2 lg:col-span-1"
                >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                    Address
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    7/4003, 4004(1), Prachha House,<br />
                    Baman Ji Ni Sheri,<br />
                    Beside - Diamond City Restaurant,<br />
                    Opp. - Surat People's Bank,<br />
                    Nr. Modh Vanik Ni Vadi,<br />
                    Lal Darvaja - Rampura Road,<br />
                    Rughnathpura
                </p>
                </motion.div>

            </motion.div>
            </motion.div>
        </div>
    </motion.section>

    {/* Footer Section */}
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
              <motion.button whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} 
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-orange-600 text-white px-10 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-base">
                Start Free Trial <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </motion.button>

              <motion.button whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-transparent text-gray-800 px-10 py-3 rounded-xl font-semibold border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all text-base">
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