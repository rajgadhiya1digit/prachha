import React, { useState } from 'react'

import { MdDesignServices, MdOutlineEmail } from "react-icons/md";
import { IoDiamond, IoDiamondOutline, IoMapOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { GiBigDiamondRing } from "react-icons/gi";
import profieImg from "../../public/profile/profileimg-vijaysir.png"
import { FaGem, FaGlobe, FaLinkedinIn, } from 'react-icons/fa';
import sign_logo from "../assets/logo_vijay4.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,EffectCoverflow, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/parallax";
import { BsStars } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"
import ScrollReveal from '../utils/ScrollFolat';

const CeoProfile = () => {

    const data =
    {
        name: "Vijay Sarkheliya",
        role: "CEO",

        about: [
            "Hello, I’m Vijay, an entrepreneur, husband, and father of two wonderful kids. Coming from a humble lower-middle-class background, I understand the true meaning of hard work and perseverance. What started a few years ago as a passion in the jewelry and diamond industry has now become my lifelong journey — one filled with constant learning, growth, and thecourage to take risks.",
            "With a strong focus on global markets like the USA and UK, I aim to make sustainable jewelry accessible."
        ],

        social: {
            linkedin: "https://www.linkedin.com/in/vijaysarkheliya/",
            instagram: "https://www.instagram.com/jewelsbyvijay/",
            twitter: "https://x.com/vijaysarkheliya",
            email: "mailto:info@vijaysarkheliya.com"
        },

        profileImage: '/profile/profileimg-vijaysir.png',
        signature:'/profile/logo_vijay4.webp' ,

        businessFocus: [
            {
                title: "Custom Jewelry",
                desc: "Design unique, made-to-order jewelry tailored to customer preferences.",
                icon: <MdDesignServices />,
            },
            {
                title: "Global Sales",
                desc: "Serving customers worldwide with secure shipping.",
                icon: <FaGlobe />,
            },
            {
                title: "Diamond Sourcing",
                desc: "Ethically sourced and lab-grown diamonds.",
                icon: <FaGem />
            }
        ],

        brands: [
            '/profile/brand-1.webp',
            '/profile/brand-2.webp',
            '/profile/brand-3.webp',
            '/profile/brand-4.webp',
            '/profile/brand-5.webp',
            '/profile/brand-6.webp'
        ],

        vision: [
            "Our vision is to become a globally recognised name for lab-grown old-cut diamonds and antique jewelry, celebrated for preserving the beauty and craftsmanship of the past while embracing the innovation and sustainability of today. We aim to create pieces that inspire, endure, and bring lasting value to those who cherish elegance.",
        ],

        services: [
            {
                title: "Custom Diamond Jewelry",
                desc: "Bespoke jewelry crafted to match your unique style, from concept to final masterpiece.",
                icon: <IoDiamondOutline />,
                color: "text-blue-500",
                bg: "bg-blue-100"
            },
            {
                title: "Engagement Rings",
                desc: "Elegant and timeless engagement rings crafted with precision.",
                icon: <GiBigDiamondRing />,
                color: "text-pink-500",
                bg: "bg-pink-100"
            },
            {
                title: "Lab-Grown Diamonds",
                desc: "Sustainable and ethically sourced lab-grown diamonds with exceptional brilliance.",
                icon: <BsStars />,
                color: "text-purple-500",
                bg: "bg-purple-100"
            },
            {
                title: "Loose Diamonds",
                desc: "Explore a wide range of high-quality loose diamonds available in various cuts, sizes.",
                icon: <IoDiamond />,
                color: "text-yellow-500",
                bg: "bg-yellow-100"
            }
        ]
    };

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const card = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section className='bg-[#FAF9FC] py-[60px] md:py-[70px] font-[prata]'>
            <section className="containers mx-auto px-4">

                <div className=''>

                    <div>
                        <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}
                            className='font-[Arima] text-[30px] sm:text-[40px] lg:text-[60px] mb-3 font-[700] leading-tight'>
                            {data.name.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.03 }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            className='mt-2 bg-gradient-to-r from-[#bc0100] to-red-600 tracking-widest text-[12px] md:text-[13px] lg:text-[13px] 
                            bg-red-400 text-white font-[600] py-[6px] px-[15px] rounded-md'>
                            {data.role}
                        </motion.span>

                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-8 '>

                    <div className='bg-white/70 p-6 rounded-2xl  border border-gray-100 flex flex-col h-full
                    shadow-[0_5px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2
                    animate-slide-in
                    '>

                        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -5 }} className='mb-3'>
                            <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] text-[#1c1b1b] font-[600] mb-1'>
                                About Me
                            </h2>

                            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className='w-12 h-[2px] bg-[#1c1b1b]'></motion.div>
                        </motion.div>

                        <div className='text-[13px] sm:text-[15px] text-[#555555] leading-relaxed tracking-wide'>
                            {data.about.map((item, index) => (
                                <p className='mb-3 fade-up-text' key={index} style={{ animationDelay: `${index * 0.8}s` }}>
                                    {item}
                                </p>
                            ))}
                            {/* <p className='mb-3'>With a strong focus on global markets like the USA and UK, I aim to make sustainable and premium jewelry accessible to everyone.</p> */}
                        </div>

                        <div className=''>
                            <img src={data.signature} className='w-52' alt="" />
                        </div>

                        <div className='mt-[30px] flex justify-center text-center xs:text-start xs:justify-end'>
                            <div >
                                <h5 className='text-[12px] font-[700] '>FIND ME AT</h5>

                                <div className="flex flex-wrap items-center gap-3 mt-2">

                                    {/* LinkedIn */}
                                    <a href={data.social.linkedin} target="_blank"
                                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-gray-500
                                        hover:bg-[#0077B5] hover:text-white hover:rounded-md duration-300 transition">
                                        <FaLinkedinIn />
                                    </a>

                                    {/* Instagram */}
                                    <a href={data.social.instagram} target="_blank"
                                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-gray-500
                                            hover:bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)]  hover:text-white hover:rounded-md duration-300 transition">
                                        <GrInstagram />
                                    </a>

                                    {/* twiteer */}
                                    <a href={data.social.twitter} target="_blank"
                                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-gray-500
                                            hover:bg-black  hover:text-white hover:rounded-md duration-300 transition">
                                        <FaXTwitter />
                                    </a>

                                    {/* email */}
                                    <a href={data.social.email} target="_blank"
                                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-gray-500
                                        hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white hover:rounded-md duration-300 transition">
                                        <MdOutlineEmail />

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* profile image */}

                    <div className='flex flex-col h-full animate-slide-in'>
                        <div className='group rounded-2xl overflow-hidden shadow-lg flex-1'>
                            <img src={data.profileImage}
                                className='w-full h-full rounded-md object-cover transition-transform duration-500 group-hover:scale-105 ' alt="" />

                        </div>
                    </div>

                    {/* business focus */}
                    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 flex flex-col h-full
                    shadow-[0_5px_20px_rgba(0,0,0,0.15)]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 animate-slide-in">

                        {/* Title */}
                        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -5 }} className='mb-3'>
                            <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] text-[#1c1b1b] font-[600] mb-1'>
                                Business Focus
                            </h2>

                            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className='w-12 h-[2px] bg-[#1c1b1b]'></motion.div>
                        </motion.div>

                        {/* Items */}
                        <div className="flex flex-col gap-3">
                            {data.businessFocus.map((item, index) => (
                                <div
                                    key={index}
                                    className="animate-slide-top flex gap-3 p-3 rounded-xl hover:bg-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105"
                                    style={{ animationDelay: `${index * 0.3}s` }}
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 flex justify-center items-center rounded-md
                                bg-[#eae7e7] text-[#735c00] text-2xl shadow-xl flex-shrink-0 transition-transform duration-300 ">
                                        {item.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-[#555555]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* company */}
                <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[30px]" >  {/* Companies */}

                    <div>

                        <div className='mb-4'>
                            {/* <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] font-[600] mb-1'>Brands / Markets</h2> */}
                            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -5 }} className='mb-3'>
                                <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] text-[#1c1b1b] font-[600] mb-1'>
                                    Brands / Market
                                </h2>

                                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className='w-12 h-[2px] bg-[#1c1b1b]'></motion.div>
                            </motion.div>

                        </div>

                        <Swiper
                            modules={[Autoplay, Pagination,EffectCoverflow]}
                            effect='coverflow'
                            slidesPerView={1}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 120,
                                modifier: 2.5,
                                slideShadows: false,
                            }}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                                el: ".custom-pagination"
                            }}
                            centeredSlides={true}
                            loop={true}
                            speed={1200}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}

                            breakpoints={{
                                480: { slidesPerView: 2 },
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className='cursor-pointer'
                        >
                            {data.brands.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <motion.div className="flex items-center justify-center p-4 rounded-xl
                            bg-white border border-gray-100 shadow-sm hover:shadow-md transition"
                                    >
                                        <img
                                            src={item}
                                            className="transition duration-300"
                                        />
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="custom-pagination flex justify-center mt-4"></div>
                    </div>


                    <div className='mb-2'>
                        <div className='mb-4'>
                            {/* <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] font-[600] '>Future Vision</h2> */}
                            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -5 }} className='mb-3'>
                                <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] text-[#1c1b1b] font-[600] mb-1'>
                                    Future Vision
                                </h2>

                                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className='w-12 h-[2px] bg-[#1c1b1b]'></motion.div>
                            </motion.div>

                        </div>

                        <div
                            className='text-[13px] sm:text-[15px] text-[#555555] bg-white rounded-2xl p-5 animate-reveal-left'>
                            {data.vision.map((item) => (
                                <ScrollReveal
                                    baseOpacity={0.1}
                                    enableBlur
                                    baseRotation={3}
                                    blurStrength={4}
                                >
                                    {item}
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                </motion.div>

                <motion.div initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                    <div className='mb-4'>
                        {/* <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] font-[600] mb-1'>What We Do</h2> */}
                        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -5 }} className='mb-3'>
                            <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] text-[#1c1b1b] font-[600] mb-1'>
                                What We Do
                            </h2>

                            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className='w-12 h-[2px] bg-[#1c1b1b]'></motion.div>
                        </motion.div>
                    </div>

                    <motion.div variants={container} initial="hidden" whileInView='show'
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {data.services.map((item) => (

                            <motion.div variants={card} className="group border-l-4 border-red-700 rounded-lg p-4 sm:p-6 hover:scale-110 duration-300 cursor-pointer
                            shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(188,1,0,0.3)]">
                                <div className={`text-2xl sm:text-3xl mb-4  ${item.color} 
                                    group-hover:animate-bounce transform transition-transform duration-500 `}
                                >
                                    {item.icon}
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-[#bc0100]">
                                    {item.title}
                                </h3>
                                <p className="text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}

                    </motion.div>
                </motion.div>
                {/* </div>  */}
            </section>
        </section>
    )
}

export default CeoProfile;