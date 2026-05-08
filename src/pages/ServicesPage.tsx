import React, { useState, useCallback } from 'react'
import { RiLoaderFill } from "react-icons/ri";
import {motion } from "framer-motion"
import { Card } from '../components/ui/card';
import { services } from '../data/serviceData';
import { WhyChoose } from '../components/WhyChoose';
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

const ServicesPage = () => {

  const ServiceData = services;

  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = useCallback(() => {
    setLoading(true);

    setTimeout(()=>{
      setVisibleCount(prev=>prev+3)
      setLoading(false)
    },1000)
  }, [])

  const handleViewServices = useCallback(() => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth"
    })
  }, [])

  return (
    <>
    <section className='relative min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden text-white'>

        <div className="absolute inset-0">
          <img src='/servicess/servicesbg.png' alt="Service Background" 
          className='w-full h-full object-cover bg-center bg-no-repeat' loading="lazy" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/40 via-[#0B0F19]/45 to-[#0B0F19]/60" />
    
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative text-center px-4 max-w-4xl'
        >
            <div className="mb-6">
                <span className="inline-block text-xs sm:text-sm font-[600] tracking-widest uppercase bg-red-500/10 text-white px-5 py-2 rounded-full border border-orange-400 backdrop-blur-md select-none">
                    Our Services
                </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 select-none" style={{ lineHeight: '1.1' }}>
                Powerful Digital
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading-tight select-none" style={{ lineHeight: '1.1' }}>
                    Experiences That Scale
                </span>
            </h1>

            <p className='text-gray-100 text-sm sm:text-base md:text-lg  max-w-2xl mx-auto'>
              We design, develop, and deliver high-performance digital solutions
              tailored for growth, innovation, and long-term success.
            </p>


            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link to={"/contact"}>
                <button className="h-full bg-gradient-to-r from-red-600  to-orange-500 hover:bg-red-600 text-white rounded-full font-semibold transition duration-300 shadow-lg hover:scale-105 px-5 sm:px-6 py-2 sm:py-3 text-sm md:text-base select-none">
                  Get Started
                </button>
              </Link>
              

              <button className="h-full border-2 border-red-400 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition duration-300 text-sm md:text-base select-none"
                onClick={handleViewServices}>
                View Services
              </button>

            </div>
              {/* </div> */}
        </motion.div>
    </section>


    <section id='services' className='py-16  bg-gray-50 overflow-hidden'>
      <section className='container mx-auto px-4'>
        <div className="text-center mb-16">
          <span className="text-[#FF0000] tracking-wider uppercase text-sm mb-4 font-[600] block select-none">
            Our Services
          </span>

           <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-5 text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold text-gray-900 leading-tight select-none"
          >
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-orange-500 select-none">
              Technology Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end digital services
          </motion.p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ServiceData.slice(0, visibleCount).map((service, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-sm border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-6 flex flex-col group"
            >
              {/* Header with icon and number */}
              <div className="flex items-start justify-between mb-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:from-red-100 group-hover:to-orange-100">
                  <img src={service.icon} alt={service.title} className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="text-red-500 font-medium flex justify-end gap-1 hover:gap-2 transition-all duration-200"
                  >
                    <GoArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < services.length && (
          <div className='flex justify-center mt-10 sm:mt-12 md:mt-16 font-[600]'>
              <button onClick={handleLoadMore} disabled={loading}
              className="px-6 py-2.5 bg-red-500 text-white rounded-full flex items-center gap-3
              text-[14px] sm:text-[16px] cursor-pointer bg-gradient-to-r from-red-600  to-orange-500 hover:scale-105 transition-all duration-300 select-none"
              >
                {loading ? (
                  <>
                    <RiLoaderFill className="animate-spin text-lg" />
                    Loading...
                  </>
                ):(
                  <>
                    View More
                  </>        
                )}
              </button>
          </div>
        )}
        
      </section>
    </section>

    <WhyChoose />
  </>
  )
}

export default ServicesPage