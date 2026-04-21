import { Card } from './ui/card';
import { Building2, ShoppingCart, GraduationCap, HeartPulse, TrendingUp, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import Stack from '../hooks/Stack'

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

  //mobile view cards
  const stackCards = industries.map((industry, index) => (
    <div
      key={index}
      className={`w-full h-full p-4 sm:p-5 flex flex-col justify-center items-center text-center ${industry.gradient}`}
    >
      <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${industry.color} mb-2 sm:mb-3`}>
        <industry.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${industry.iconColor}`} />
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        {industry.title}
      </h3>

      <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
        {industry.description}
      </p>
    </div>
  ));

  return (
    <section className="relative py-12 sm:py-14 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" id="industries">
      <div className="pointer-events-none absolute -left-14 top-10 h-52 w-52 rounded-full bg-blue-100/60 blur-2xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-red-100/50 blur-2xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-10 lg:mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider uppercase text-[#ff0000] rounded-full">
            Industries We Transform
          </span>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-gray-900 font-bold mb-4">
            Empowering Businesses <span className=" bg-gradient-to-r from-red-500 to-pink-500  bg-clip-text text-transparent">Across Industries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-gray-600 max-w-3xl mx-auto">
            We deliver tailored digital solutions that address unique challenges in every sector
          </motion.p>
        </div>

        <div className="hidden md:grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden rounded-[32px] border border-gray-200/70 bg-white/95 p-6 sm:p-7 transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl ${industry.gradient}`}
            >

              <div className="relative z-10 text-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-3xl ${industry.color} shadow-lg mx-auto mb-4`}>
                  <industry.icon className={`h-8 w-8 ${industry.iconColor}`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-7">
                  {industry.description}
                </p>

              </div>
            </Card>
          ))}
        </div>

        {/* cards in mobile */}
        <div className='block md:hidden w-full h-[280px] xs:h-[300px] sm:h-[350px] pr-8' >
          <Stack
            cards={stackCards}
            randomRotation={false}
            sensitivity={200}
            sendToBackOnClick={true}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
          />
        </div>

      </div>
    </section>
  );
}
