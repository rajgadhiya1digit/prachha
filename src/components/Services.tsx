import { Card } from './ui/card';
import { services } from '../data/serviceData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import { GoArrowRight } from "react-icons/go";

export function Services() {
  const ServiceData = services;

  return (
    <section className="py-12 sm:py-14 lg:py-20 bg-white overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
            From concept to deployment, we offer end-to-end digital services
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {ServiceData.slice(0, 3).map((service, index) => (
            
            <div
              key={index}
              className="group relative h-full rounded-2xl overflow-hidden 
              bg-white/80 backdrop-blur-sm border border-gray-100
              shadow-md hover:shadow-2xl transition-transform duration-300 will-change-transform
              hover:-translate-y-2 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform will-change-transform">
                  <service.icon className="w-6 h-6 text-red-500" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-200 select-none">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base flex-grow line-clamp-2">
                  {service.description}
                </p>

                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700 transition-transform duration-200 will-change-transform group-hover:translate-x-0.5"
                    >
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-2 cursor-pointer">
                  <span className="text-red-500 font-medium text-sm tracking-wide select-none">
                    Learn More
                  </span>
                  <span className="text-red-500 transition-transform duration-200 will-change-transform group-hover:translate-x-0.5 select-none">
                    <GoArrowRight />
                  </span>
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
          className="text-center pt-4 sm:pt-8">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-[#FF0000] font-semibold hover:gap-3 transition-all duration-300 select-none"
          >
             Explore More  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

