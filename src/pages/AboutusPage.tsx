import React, { useEffect, useRef } from 'react'
import aboutbg from '../assets/aboutbg.jpg'
import Truststate from '../components/Truststate'
import missionimg1 from '../assets/missionimg-1.png'
import missionimg2 from '../assets/missionimg-2.png'
import { Services } from '../components/Services'
import { WhyChoose } from '../components/WhyChoose'
import visionimg2 from '../assets/visionimg-1.webp'
import { motion } from 'framer-motion'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

const AboutusPage = () => {

  return (
    <>
      <section className="relative overflow-hidden min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] flex justify-center items-center text-white">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={'/about/aboutbg.jpg'}
            alt="About Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/40 via-[#0B0F19]/45 to-[#0B0F19]/60" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full mx-auto px-4 text-center"
        >
          <div className="mb-6">
            <span className="inline-block text-xs sm:text-sm font-[600] tracking-widest uppercase bg-red-500/10 text-white px-5 py-2 rounded-full border border-orange-400 backdrop-blur-md">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We Build Digital Experiences
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading">
              That Drive Growth
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We build smart, scalable digital solutions that help businesses grow and succeed in the modern world with cutting-edge technology and innovative approaches.
          </p>

        </motion.div>
      </section>

      <section className="py-12 sm:py-14 lg:py-20 bg-gray-50 overflow-hidden" id="about">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-[#FF0000] tracking-wider uppercase text-sm mb-4 block font-[600]">
                About Prachha Technology
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-6 font-[600]">
                Transforming Ideas into <span className="text-[#FF0000]"> Scalable Digital Products </span>
              </h2>

              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Prachha Tech is a passionate team of developers, designers, and digital experts focused on building smart and reliable IT solutions. We believe in turning ideas into real digital experiences that help businesses grow and stand out in today’s competitive world.

                {/* Since 2010, Prachha Tech has been at the forefront of digital innovation, 
              helping businesses across the globe transform their operations and achieve remarkable growth. */}
              </p>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                We have done 25+ successful projects, we've established
                ourselves as a trusted partner for enterprises, startups, and everything in between.
              </p>
              <div className="space-y-4 text-base">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                  <span className="text-gray-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                  <span className="text-gray-700">Microsoft Gold Partner</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                  <span className="text-gray-700">AWS Advanced Consulting Partner</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1690264459607-a90b23d887f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjE2Mzk1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Office team collaboration"
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              {/* <div className="absolute bottom-4 left-4 lg:-bottom-8 lg:-left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-xl sm:text-2xl lg:text-4xl text-[#FF0000] mb-1 font-[600]">200+</div>
              <div className="text-gray-600">Expert Team Members</div>
            </div> */}
            </div>
          </div>
        </div>
      </section>

      <Truststate />

      <section className="py-12 sm:py-14 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 space-y-20">

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 items-center gap-10"
          >
  
            <div>
              <img
                src={'/about/missionimg-1.png'}
                alt="Mission"
                className="w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover rounded-2xl shadow-lg transition duration-300"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-red-500  uppercase tracking-wide font-bold text-sm">
                Our Mission
              </span>

              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-5">
                Building Smart & Scalable IT Solutions
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Our mission is to deliver innovative, reliable, and scalable IT solutions that help businesses grow in the digital world. We are committed to understanding our clients’ needs and transforming their ideas into powerful digital products.By combining modern technology, creativity, and strategic thinking, we aim to provide solutions that not only meet expectations but create real business value.
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center">

            {/* Content */}
            <div className=" md:text-left order-2 md:order-2">
              <span className="text-red-500  uppercase tracking-wide font-bold text-sm">
                Our Vision
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-5">
                Empowering Businesses Through Technology
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Our vision is to become a globally trusted IT service provider known for quality, innovation, and long-term partnerships. We aspire to empower businesses of all sizes by leveraging advanced technologies and delivering impactful digital experiences. Through continuous learning, improvement, and a client-first approach, we aim to shape the future of digital transformation.
              </p>
            </div>

            {/* Image */}
            <div className="w-full order-1 md:order-2">
              <img
                src={'/about/visionimg-1.webp'}
                alt="Vision"
                className="w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover rounded-2xl shadow-lg transition duration-300"
              />
            </div>

          </motion.div>

        </div>
      </section>

      <Services />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  )
}

export default AboutusPage