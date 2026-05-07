import { Card } from "./ui/card";
import {
  Award,
  Users,
  Zap,
  HeadphonesIcon,
  Lock,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export function WhyChoose() {
  const reasons = [
    {
      icon: Award,
      title: "Proven Excellence",
      description:
        "Award-winning team with industry certifications and recognized expertise in cutting-edge technologies.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We work closely with you to understand and exceed your expectations.",
    },
    {
      icon: Zap,
      title: "Agile & Fast Delivery",
      description:
        "Rapid development cycles with agile methodologies ensuring quick time-to-market without compromising quality.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
    },
    {
      icon: Lock,
      title: "Security First",
      description:
        "Enterprise-grade security measures and compliance with industry standards to protect your data.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description:
        "Future-proof architecture designed to grow with your business needs and handle increasing demands.",
    },
  ];

  return (
    <section className="relative py-12 sm:py-14 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-red-100 blur-3xl opacity-40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-pink-100 blur-3xl opacity-40 rounded-full animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider uppercase text-red-500 rounded-full select-none">
            Why Choose Us
          </span>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-5 text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold text-gray-900 leading-tight select-none"
          >
            Your Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-orange-500 select-none">
              Technology Partner
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            We combine innovation, expertise, and dedication to deliver
            exceptional results that help your business grow faster.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 items-stretch">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative group p-4 sm:p-6 lg:p-8 h-full rounded-xl border border-gray-100 bg-white backdrop-blur-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden">

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-red-500/10 to-pink-500/10 blur-2xl"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000"></div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 text-center group-hover:text-red-600 transition select-none">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base line-clamp-3">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}