import { Card } from './ui/card';
import { services } from '../data/serviceData';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BsArrowLeftCircle, BsArrowRightCircle  } from "react-icons/bs";

import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Services() {
  const ServiceData = services;

  return (
    <section className="py-12 sm:py-14 lg:py-20 bg-white overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider uppercase text-[#ff0000] rounded-full select-none">
            Our Services
          </span>

          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-gray-900 font-bold mb-4 select-none">
            Comprehensive <span className="bg-gradient-to-r from-red-500  to-orange-500  bg-clip-text text-transparent select-none">Technology Solutions</span>
          </motion.h2>



          <motion.p 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business grow and succeed
          </motion.p>
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden relative">
          {/* Custom Navigation Buttons */}
          <div className='flex justify-end gap-3 mb-4'>
            <button className="static swiper-button-prev p-0 m-0 w-8 h-8 rounded-full transition-colors duration-200 text-red-500">
              <BsArrowLeftCircle className="w-6 h-6" />
            </button>
            <button className=" static swiper-button-next  p-0 m-0 w-8 h-8 text-black/90 rounded-full transition-colors duration-200 text-red-500">
              <BsArrowRightCircle className="w-6 h-6" />
            </button>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-red-500',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-500'
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="pb-12 universal-pagination"
          >
            {ServiceData.slice(0, 8).map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-orange-50 rounded-lg p-4 flex flex-col h-full cursor-pointer group">
                  {/* Header with icon and number */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center transition-colors duration-300">
                      <img src={service.icon} alt={service.title} className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a 
                        href="#" 
                        className="text-red-500 font-medium text-sm flex justify-end gap-1 hover:gap-2 transition-all duration-200"
                      >
                        <GoArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ServiceData.slice(0, 8).map((service, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-lg transition-all duration-300 p-4 md:p-6 flex flex-col group"
            >
              {/* Header with icon and number */}
              <div className="flex items-start justify-between mb-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center transition-colors duration-300">
                  <img src={service.icon} alt={service.title} className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Number */}
                <span className="text-3xl font-light text-black/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-3">
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

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block text-center pt-4 sm:pt-8">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-[#FF0000] font-semibold hover:gap-3 transition-all duration-300 select-none"
          >
             Explore More  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

