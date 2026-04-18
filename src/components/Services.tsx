import { Card } from './ui/card';
import { services } from '../data/serviceData';
import { Code, Smartphone, Cloud, Brain, Shield, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from "react-icons/fi";
import {motion} from "framer-motion"
import { GoArrowRight } from "react-icons/go";


export function Services() {
  const ServiceData = services;
  // const services = [
  //   {
  //     icon: Code,
  //     title: 'Custom Software Development',
  //     description: 'Bespoke software solutions tailored to your business needs with scalable architecture and modern tech stack.',
  //     image: 'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNzI5MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  //     features: ['Full-Stack Development', 'API Integration', 'Database Design'],
  //   },
  //   {
  //     icon: Smartphone,
  //     title: 'Enterprise Mobility Solutions',
  //     description: 'Comprehensive mobile solutions that streamline business operations and enhance productivity across all devices.',
  //     image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjByb29tfGVufDF8fHx8MTc2MTY4MDQwOHww&ixlib=rb-4.1.0&q=80&w=1080',
  //     features: ['Mobile Strategy', 'Cross-Platform Apps', 'Enterprise Integration'],
  //   },
  //   {
  //     icon: Cloud,
  //     title: 'Cloud Solutions',
  //     description: 'Comprehensive cloud services including migration, deployment, and management on AWS, Azure, and GCP.',
  //     image: 'https://images.unsplash.com/photo-1758813240178-19ef760ded2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE3MTgyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  //     features: ['Cloud Migration', 'DevOps', 'Infrastructure Setup'],
  //   },
  //   {
  //     icon: Brain,
  //     title: 'AI & Machine Learning',
  //     description: 'Intelligent solutions powered by artificial intelligence, machine learning, and data analytics.',
  //     image: 'https://images.unsplash.com/photo-1690264459607-a90b23d887f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjE2Mzk1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  //     features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision'],
  //   },
  //   {
  //     icon: Shield,
  //     title: 'Cybersecurity',
  //     description: 'Advanced security solutions to protect your digital assets, data, and infrastructure from threats.',
  //     image: 'https://images.unsplash.com/photo-1549923746-1d28f336cc41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByZXNlbnRhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjE3MDg0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  //     features: ['Security Audits', 'Penetration Testing', 'Compliance'],
  //   },
  //   {
  //     icon: Palette,
  //     title: 'UI/UX Design',
  //     description: 'User-centric design solutions that create engaging and intuitive digital experiences.',
  //     image: 'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwb2ZmaWNlJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzYxNzI5MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  //     features: ['User Research', 'Wireframing', 'Prototyping'],
  //   },
  // ];

  return (
    <section className="py-14 bg-white overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider uppercase text-[#ff0000] rounded-full">
            Our Services
          </span>

          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-gray-900 font-bold mb-4">
            Comprehensive <span className=" bg-gradient-to-r from-red-500 to-pink-500  bg-clip-text text-transparent">Technology Solutions</span>
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

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-200">
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
                  <span className="text-red-500 font-medium text-sm tracking-wide">
                    Learn More
                  </span>
                  <span className="text-red-500 transition-transform duration-200 will-change-transform group-hover:translate-x-0.5">
                    <GoArrowRight />
                  </span>
                </div>

              </div>
            </div>

          ))}
        </div>

        <div className='flex justify-center mt-12'>
          <Link to={'/services'} className='flex items-center gap-2 text-[18px] text-red-500 font-[600] hover:underline'>
            explore more  <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

