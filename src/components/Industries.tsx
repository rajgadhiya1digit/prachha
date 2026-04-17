import { Card } from './ui/card';
import { Building2, ShoppingCart, GraduationCap, HeartPulse, TrendingUp, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export function Industries() {
  const industries = [
    {
      icon: HeartPulse,
      title: 'Healthcare',
      description: 'Transforming patient care with digital health solutions, telemedicine platforms, and healthcare management systems.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      gradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    },
    {
      icon: TrendingUp,
      title: 'Finance & Banking',
      description: 'Secure fintech solutions, digital banking platforms, payment gateways, and blockchain-based financial systems.',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      gradient: 'bg-gradient-to-br from-green-100 to-green-200',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce & Retail',
      description: 'Scalable online stores, inventory management, AI-powered recommendations, and seamless checkout experiences.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      gradient: 'bg-gradient-to-br from-purple-100 to-purple-200',
    },
    {
      icon: GraduationCap,
      title: 'Education & E-Learning',
      description: 'Interactive learning platforms, virtual classrooms, student management systems, and educational mobile apps.',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      gradient: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
    },
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'Property management systems, virtual tours, CRM solutions, and real estate marketplaces with advanced search.',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      gradient: 'bg-gradient-to-br from-indigo-100 to-indigo-200',
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'End-to-end tracking systems, warehouse management, route optimization, and supply chain automation.',
      color: 'bg-red-50',
      iconColor: 'text-red-600',
      gradient: 'bg-gradient-to-br from-red-100 to-red-200',
    },
  ];

  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" id="industries">
      <div className="pointer-events-none absolute -left-14 top-10 h-52 w-52 rounded-full bg-blue-100/80 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-red-100/70 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider uppercase text-[#ff0000] rounded-full">
            Industries We Transform
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 , ease: "easeOut" }}
            className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-gray-900 font-bold mb-4">
            Empowering Businesses Across <span className=" bg-gradient-to-r from-red-500 to-pink-500  bg-clip-text text-transparent">Industries</span>
          </motion.h2>

          <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 , delay:0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-gray-600 max-w-3xl mx-auto">
            We deliver tailored digital solutions that address unique challenges in every sector
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden rounded-[32px] border border-gray-200/70 bg-white/95 p-6 sm:p-7 transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${industry.gradient}`}
            >
              <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-white/20 opacity-80" />
              <div className="absolute -right-8 bottom-0 h-20 w-20 rounded-full bg-white/20 opacity-70" />

              <div className="relative z-10 text-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-3xl ${industry.color} shadow-lg mx-auto mb-4`}>
                  <industry.icon className={`h-8 w-8 ${industry.iconColor}`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-red-600">
                  {industry.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-7">
                  {industry.description}
                </p>

              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
