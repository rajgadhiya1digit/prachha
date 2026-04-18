import React, { useState } from 'react'
import { Code, Smartphone, Cloud, Brain, Shield, Palette, Megaphone, Search, ShoppingCart, Puzzle, View } from 'lucide-react';
import { RiLoaderFill } from "react-icons/ri";
import {motion } from "framer-motion"
import servicebg from '../assets/servicebg.jpg'
import { Card } from '../components/ui/card';
import { services } from '../data/serviceData';
import { WhyChoose } from '../components/WhyChoose';
import { Link } from 'react-router-dom';

const ServicesPage = () => {

  const ServiceData = services;

  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);

    setTimeout(()=>{
      setVisibleCount((prev) => prev + 3);
      setLoading(false);
    },1000)
  }
   

  const handleViewServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth"
    })
  }

  
  return (
    <>
    <section className='relative min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden text-white'>

        <div className="absolute inset-0">
          <img src='/servicess/servicesbg.png' alt="Service Background" 
          className='w-full h-full object-cover bg-center bg-no-repeat' />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/40 via-[#0B0F19]/45 to-[#0B0F19]/60" />
    
        <div className='relative text-center px-4 max-w-4xl'>
            <div className="mb-6">
                <span className="inline-block text-xs sm:text-sm font-[600] tracking-widest uppercase bg-red-500/10 text-white px-5 py-2 rounded-full border border-orange-400 backdrop-blur-md">
                    Our Services
                </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Powerful Digital
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading">
                    Experiences That Scale
                </span>
            </h1>

            <p className='text-gray-100 text-sm sm:text-base md:text-lg  max-w-2xl mx-auto'>
              We design, develop, and deliver high-performance digital solutions
              tailored for growth, innovation, and long-term success.
            </p>


            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link to={"/contact"}>
                <button className="h-full bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition duration-300 shadow-lg hover:scale-105 px-5 sm:px-6 py-2 sm:py-3 text-sm md:text-base">
                  Get Started
                </button>
              </Link>
              

              <button className="h-full border-2 border-white hover:border-red-400 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition duration-300 bg-white/30 hover:bg-white hover:text-black text-sm md:text-base"
                onClick={handleViewServices}>
                View Services
              </button>

            </div>
              {/* </div> */}
        </div>
    </section>


    <section id='services' className='py-16  bg-gray-50 overflow-hidden'>
      <section className='container mx-auto px-4'>
        <div className="text-center mb-16">
          <span className="text-[#FF0000] tracking-wider uppercase text-sm mb-4 font-[600] block">
            Our Services
          </span>

           <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-5 text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold text-gray-900 leading-tight"
          >
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
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


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServiceData.slice(0, visibleCount).map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-lg border border-gray-200 
              transition-all duration-500 hover:-translate-y-3"
            >
              
              {/* Image Section */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md
                  group-hover:scale-105 transition">
                  <service.icon className="w-6 h-6 text-red-500" />
                </div>

                {/* Title on Image */}
                <h3 className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-200 via-amber-400 to-amber-600 bg-clip-text text-transparent text-lg font-semibold">
                  {service.title}
                </h3>
                
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

              
                {/* <button className="mt-5 text-sm font-semibold text-red-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More →
                </button> */}
              </div>

            </div>
          ))}
        </div>

        {visibleCount < services.length && (
          <div className='flex justify-center mt-10 sm:mt-12 md:mt-16 font-[600]'>
              <button onClick={handleLoadMore} disabled={loading}
              className="px-6 py-2.5 bg-red-500 text-white rounded-full flex items-center gap-3
              text-[14px] sm:text-[16px] cursor-pointer hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 hover:scale-105 transition-all duration-300"
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