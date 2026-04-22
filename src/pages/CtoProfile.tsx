import React, { useEffect, useRef } from 'react'
import { MdDesignServices, MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { MdArchitecture } from "react-icons/md";
import { FaServer, FaCloud, FaReact, FaNodeJs, FaCode, FaAws , FaLinkedinIn} from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import profileImage from "../../public/profile/profileimg-hiteshsir.png"
import { GrInstagram } from 'react-icons/gr';
import { SiPostgresql } from 'react-icons/si';
import { easeIn, easeInOut, easeOut, motion, scale, stagger } from "framer-motion"
import ScrollReveal from '../utils/ScrollFolat';

const data = {
    name: "Hitesh Sarkheliya",
    role: "CTO",
    slug: "hitesh-patel",

    about: [
        "Hello, I’m Hitesh, a passionate technology leader focused on building scalable and high-performance systems.",
        "With years of experience in web development and software architecture, I specialize in creating robust digital solutions.",
        "I believe in leveraging modern technologies to deliver seamless user experiences and business growth."
    ],

    social: {
        linkedin: "https://www.linkedin.com/in/hitesh-gs/",
        twitter: "https://x.com/hiteshgs",
        email: "mailto:hitesh@prachha.tech"
    },

    profileImage:'/profile/profileimg-hiteshsir.png',
    signature: "/assets/logo_vijay4.webp",

    Technical: [
        {
            title: "System Architecture",
            desc: "Designing scalable and efficient backend systems.",
            icon: <MdArchitecture />,
        },
        {
            title: "Global Infrastructure",
            desc: "Managing cloud infrastructure and global deployment.",
            icon: <FaCloud />,
        },
        {
            title: "Backend Systems",
            desc: "Building secure and high-performance server-side systems.",
            icon: <FaServer />,
        },
        {
            title: "API Development",
            desc: "Creating powerful APIs for seamless integrations.",
            icon: <AiOutlineApi />,
        }
    ],

    technologies: [
        {
            name: "React.js",
            icon: <FaReact className="text-blue-500" />
        },
        {
            name: "Node.js",
            icon: <FaNodeJs className="text-green-500" />
        },
        {
            name: "PostgreSQL",
            icon: <SiPostgresql className="text-indigo-500" />,
        },
        {
            name: "Cloud",
            icon: <FaCloud className="text-sky-500" />,
        },
        {
            name: "AWS",
            icon: <FaAws  className="text-sky-500" />,
        }
    ],
    vision:[
        "Our vision is to build cutting-edge digital platforms that combine performance, scalability, and innovation to deliver exceptional user experiences.",
        "We focus on creating high-performance platforms, seamless user experiences, and data-driven systems that support global growth. By combining modern technologies with continuous optimization, we aim to deliver reliability, speed, and long-term value across every touchpoint."
    ],

    services: [
        {
            title: "Web Development",
            desc: "Building fast, responsive, and scalable web applications.",
            icon: <FaCode />,
            color: "text-blue-500",
        },
        {
            title: "Backend Systems",
            desc: "Developing secure and high-performance server-side systems.",
            icon: <FaServer />,
            color: "text-green-500",
        },
        {
            title: "Cloud Solutions",
            desc: "Deploying and managing applications on modern cloud platforms.",
            icon: <FaCloud />,
            color: "text-sky-500",

        },
        {
            title: "API Development",
            desc: "Creating powerful APIs for seamless integrations.",
            icon: <AiOutlineApi />,
            color: "text-purple-500",
        }
    ],
    projects: [
        {
            title: "Global E-commerce Platform",
            desc: "Built a scalable e-commerce platform handling 1M+ users with real-time inventory management.",
            tech: ["React.js", "Node.js", "PostgreSQL", "AWS"],
            image: "/assets/project-ecommerce.webp",
            link: "https://example-ecommerce.com"
        },
        {
            title: "SaaS Analytics Dashboard",
            desc: "Developed an interactive analytics dashboard for enterprise clients, providing real-time insights.",
            tech: ["React.js", "Node.js", "AWS", "PostgreSQL"],
            image: "/assets/project-dashboard.webp",
            link: "https://example-dashboard.com"
        },
        {
            title: "API Integration Platform",
            desc: "Created robust APIs connecting multiple third-party services with high reliability.",
            tech: ["Node.js", "Express", "PostgreSQL", "AWS"],
            image: "/assets/project-api.webp",
            link: "https://example-api.com"
        }
    ]
}

//technlogies card
const tcardCotainer = {
    hidden:{},
    visible: {
        transition:{
            staggerChildren: 0.08
        }
    }
}

const tcardVraint ={
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.1,
            ease: "easeInOut" as const
        }
    }
}

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
            // ease: [0.16, 1, 0.3, 1]
        }
    }
};


const CtoProfile = () => {

  return (
    <>
    <section className='bg-[#FAF9FC] py-[60px] md:py-[70px] font-[prata]'>
        <section className="containers mx-auto px-4">

            <div className=''>
    
                <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                    <h1 className='font-[Arima] text-[30px] sm:text-[40px] lg:text-[60px] mb-3 font-[700] leading-tight'>
                       {data.name.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                className="inline-block"
                            >
                                {/* {char} */}
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </h1>

                     <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className='mt-2 bg-gradient-to-r from-[#bc0100] to-red-600 tracking-widest text-[12px] md:text-[13px] lg:text-[13px] 
                      bg-red-400 text-white font-[600] py-[6px] px-[15px] rounded-md'>
                        {data.role}
                    </motion.span>
                </motion.div>

            </div>
   
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-8 '>
                <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full animate-slide-in'>

                    <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -5 }} className='mb-3'>
                        <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] text-[#1c1b1b] font-[600] mb-1'>About Me</h2>

                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className='w-12 h-[2px] bg-[#1c1b1b]'></motion.div>
                    </motion.div>

                    <div className='text-[14px] sm:text-[15px] text-[#555555]  leading-relaxed tracking-wide'>
                        {data.about.map((item, index)=>(
                            <p className='mb-3' key={index}> {item} </p>
                        ))}
                       
                    </div>

                    {/* <div className=''>
                        <img src={data.signature} className='w-52' alt="" />
                    </div> */}

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
                                {/* <a href={data.social.instagram} target="_blank"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-gray-500
                                            hover:bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)]  hover:text-white hover:rounded-md duration-300 transition">
                                    <GrInstagram />
                                </a> */}

                                {/* twiteer */}
                                <a href={data.social.twitter} target="_blank" 
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-gray-500
                                            hover:bg-black  hover:text-white hover:rounded-md duration-300 transition">
                                    <FaXTwitter />
                                </a>

                                {/* email */}
                                <a href={data.social.email} target="_blank" 
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-gray-500
                                        hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white hover:rounded-md duration-300 transition
                                        ">
                                    <MdOutlineEmail />

                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* profile image */}
            
                <div className='flex flex-col h-full animate-slide-in' >          
                    <div className='group rounded-2xl overflow-hidden shadow-lg flex-1'>
                        <img src={data.profileImage} alt={data.profileImage} className='w-full h-full rounded-md object-cover transition-transform duration-500 group-hover:scale-105 ' loading="lazy" />
                    </div>  
                </div>    

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 flex flex-col h-full animate-slide-in">
        
                    {/* Title */}
                    <div className='mb-3 '>
                        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -5 }} className='mb-3'>
                            <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] text-[#1c1b1b] font-[600] mb-1'>
                                Tech System</h2>

                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className='w-12 h-[2px] bg-[#1c1b1b]'></motion.div>
                    </motion.div>
                    </div>

                    {/* Items */}
                    <div className="flex flex-col gap-3">
                        {data.Technical.map((item, index) => (
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

            {/* technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[30px]" >  {/* Companies */}

                <div>
                    <div className='mb-4'>
                        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -5 }} className='mb-3'>
                        <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] text-[#1c1b1b] font-[600] mb-1'>Technologies</h2>

                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className='w-12 h-[2px] bg-[#1c1b1b]'></motion.div>
                    </motion.div>
                    </div>
            
                    <div>
                        <motion.div variants={tcardCotainer} initial="hidden" whileInView="visible" viewport={{amount:0.3}}
                             className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {data.technologies.map((item, index)=>(

                            <motion.div key={index} variants={tcardVraint} 
                                className='flex flex-col items-center justify-center gap-2 
                                bg-white border border-gray-100 rounded-xl p-4 
                                shadow-sm hover:shadow-md transition 
                                hover:scale-105 cursor-pointer'>

                                <div className='text-3xl'>
                                    {item.icon}
                                </div>
                                <div>
                                    {item.name}
                                </div>
                            </motion.div>
                               
                            ))}
                        </motion.div>
                    </div>
                </div>
                        

                <div className='mb-2'>
                    <div className='mb-4'>
                        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -5 }} className='mb-3'>
                        <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] text-[#1c1b1b] font-[600] mb-1'>Tech Vision</h2>

                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className='w-12 h-[2px] bg-[#1c1b1b]'></motion.div>
                    </motion.div>
                    </div>
                    
                    <div className='text-[13px] sm:text-[15px] text-[#555555] bg-white rounded-2xl p-5'>
                        {/* {data.vision.map((item)=>(
                            <p className='mb-2'>{item}</p>
                        ))} */}
                        {data.vision.map((item, index)=>(
                        <ScrollReveal key={index}
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
            
            </div>
        
            {/* technical work */}
            <motion.div initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} >
                <div className='mb-4'>
                        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -5 }} className='mb-3'>
                        <h2 className='text-[18px] xs:text-[20px] sm:text-[25px] text-[#1c1b1b] font-[600] mb-1'>Technical Work</h2>

                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className='w-12 h-[2px] bg-[#1c1b1b]'></motion.div>
                    </motion.div>
                </div>

                <motion.div variants={container} initial="hidden" whileInView='show'
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {data.services.map((item,index)=>(
                    <motion.div key={index} variants={card}
                        className="group border-l-4 border-red-700 rounded-lg p-4 sm:p-6 hover:scale-105 duration-300 cursor-pointer
                        shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(188,1,0,0.2)] ">
                        <div className={`text-2xl sm:text-3xl mb-4  
                            group-hover:animate-bounce transform transition-transform duration-500 ${item.color}`}
                            >
                            {item.icon}
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold mb-2 text- group-hover:text-[#bc0100]">
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

    <section>
        <section className="containers mx-auto px-4">
            
        </section>
    </section>
    </>
  )
}

export default CtoProfile