import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { projectData } from '../data/projectData';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import  {Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillRocketTakeoffFill, BsArrowLeftCircle, BsArrowRightCircle  } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { LuTarget,LuClock4 } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { GoFileCode } from "react-icons/go";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ProjectDetails = () => {
    const { id } = useParams();

    const {ref, inView} = useInView({   
        threshold: 0.3
    })

    const [openSlide, setOpenSlide] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const project = projectData.find((p)=> p.id === id);

    if (!project) return <div>Project not found</div>;
 
  return (
    <>
    <section className="relative text-white bg-center bg-no-repeat pt-[110px] sm:pt-[120px] md:pt-[140px] lg:pt-[150px] xl:pt-[300px]
    pb-[50px] md:pb-[80px] lg:pb-[100px] "
    >
        <div className="absolute inset-0 h-full w-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                speed={1200}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="h-full w-full"
            >
            {project?.hero_images?.map((img, index) => (
                <SwiperSlide key={index}>
                <div className="relative w-full h-full" >
                    <img
                        src={img}
                        alt={`project-${index}`}
                        className="w-full h-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/50"></div>

                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        

        {/* <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent'></div> */}

        <section className='container mx-auto px-4 relative z-10'>

            <div className=''>
                <div className='flex items-center gap-2'>
                    <Link to={'/projects'} className='tracking-widest text-amber-50 font-[600] text-[13px] sm:text-[16px]'>PROJECTS</Link>
                     <MdOutlineKeyboardArrowRight />
                    <span className='text-amber-200 text-[14px] sm:text-[16px] font-[600] tracking-widest'>{project.title}</span>
                </div>

                <span className="inline-block mt-[15px] py-[6px] md:py-[8px] px-[20px] md:px-[30px] rounded-[10px] text-black/90 font-[600]
                    bg-[#ff0000] text-white text-[12px] sm:text-[14px]"
                >
                    {project.category}
                </span>

                <h1 className="text-[22px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-bold text-white mt-[15px]">
                    {project.title}
                </h1>

                <p className="text-gray-200  font-semibold max-w-2xl text-[13px] sm:text-[14px]">
                  {project.description}
                </p>
            </div>

            
        </section>
    </section>


    <section className='bg-[#FAF9FC] text-black py-[10px] sm:py-[15px] md:py-[25px] lg:py-[50px]'>
        <section className="container mx-auto px-4 "> 

            {/* project info overview */}
            <div className=' mx-auto mt-[25px]
                rounded-[15px]' 
            >   
                <h2 className='text-[18px] sm:text-[22px] text-[#ff0000] font-[600] uppercase tracking-wider '>Project Overview</h2>

                {project.overview.map((items, index)=>(
                    <p key={index} className='mt-[15px] text-[14px] sm:text-[15px] font-[500] text-[#603e39] '>
                        {items}
                    </p>
                ))}
    
            </div>

            {/* puepose , feature, objective */}
            <div className='py-[50px] grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='bg-white p-[20px] rounded-md transition-transform duration-300 hover:-translate-y-3 group'>
                    <span className='block w-fit bg-[#bc01001A] p-[15px] rounded-full text-[#bc0100] group-hover:bg-[#bc0100] group-hover:text-white
                        text-[16px] sm:text-[18px]
                    '>
                        <BsFillRocketTakeoffFill />
                    </span>

                    <h4 className='text-[18px] sm:text-[20px] font-[600] mt-[20px]'>Purpose</h4>
                    <p className='mt-[10px] text-[#603e39] text-[14px] sm:text-[15px] font-[400]'>
                        {project.purpose?.desc}
                    </p>

                    <ul className='text-[13px] sm:text-[14px] mt-[10px]'>
                        {project.purpose?.points.map((item)=>(
                            <li className='flex items-center gap-2 py-1'>
                                <span className='text-red-700'><FaCheckCircle /></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='bg-white p-[20px] rounded-md transition-transform duration-300 hover:-translate-y-3 group'>
                    <span className='block w-fit bg-[#bc01001A] p-[15px] rounded-full text-[#bc0100] group-hover:bg-[#bc0100] group-hover:text-white 
                     text-[16px] sm:text-[18px]'>
                        <CgMenuGridR />
                    </span>

                    <h4 className='text-[18px] sm:text-[20px]  font-[600] mt-[20px]'>Scope</h4>
                    <p className='mt-[10px] text-[#603e39] text-[14px] sm:text-[15px] font-[400]'>
                       {project.scope?.desc}
                    </p>

                    <ul className='text-[13px] sm:text-[14px] mt-[10px]'>
                        {project.scope?.points.map((item)=>(
                            <li className='flex items-center gap-2 py-1'>
                                <span className='text-red-700'><FaCheckCircle /></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='bg-white p-[20px] rounded-md transition-transform duration-300 hover:-translate-y-3 group'>
                    <span className='block w-fit bg-[#bc01001A] p-[15px] rounded-full text-[#bc0100] group-hover:bg-[#bc0100] group-hover:text-white 
                     text-[16px] sm:text-[18px]'>
                        <LuTarget />
                    </span>

                    <h4 className='text-[18px] sm:text-[20px] font-[600] mt-[20px]'>Key Objectives</h4>
                    <p className='mt-[10px] text-[#603e39] text-[14px] sm:text-[15px] font-[400]'>
                       {project.objectives?.desc}
                    </p>

                    <ul className='text-[13px] sm:text-[14px] mt-[10px]'>
                        {project.objectives?.points.map((item)=>(
                            <li className='flex items-center gap-2 py-1'>
                                <span className='text-red-700'><FaCheckCircle /></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>

            {/* project visualization */}
        </section>
    </section>

    <section className='bg-[#f3f1f1] py-[60px]"'>
        <section className="container  mx-auto px-4">
            <div className='py-[50px]'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[25px] text-red-600 font-[600]'>Project Visuals</h2>

                    <div className='flex gap-2'>
                        <button className='custom-prev text-[28px] cursor-pointer'>
                            <BsArrowLeftCircle />
                        </button>
                        <button className='custom-next text-[28px] cursor-pointer'>
                            <BsArrowRightCircle />
                        </button>
                    </div>
                </div>

                <div className='pt-[25px] '>
                    <Swiper 
                        modules={[Navigation, Autoplay]}
                        centeredSlides= {true}
                        autoplay = {{
                            delay: 2000,
                            disableOnInteraction : true
                        }}
                        navigation={{
                            nextEl:".custom-next",
                            prevEl:".custom-prev"
                        }}
                        loop={true}
                        spaceBetween={15}
                        speed={1200}
                        breakpoints={{
                                0: {
                                    slidesPerView: 1},
                                640: {
                                    slidesPerView: 1.5},
                                768: {
                                    slidesPerView: 2},
                                1024: {
                                    slidesPerView: 3},
                        }}
                        className='premium-swiper h-full w-full p-0 sm:p-[25px]'   
                    >   
                    {project.gallery?.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <div onClick={()=> {setOpenSlide(true),setActiveIndex(index)}} className='w-full h-[300px] aspect-video cursor-pointer rounded-md '>
                                {item.type === "image" ? (
                                    <img src={item.src} className='w-full h-full object-cover rounded-md' alt="" />
                                ): (
                                    <video src={item.src}  className='w-full h-full object-cover rounded-md'
                                    autoPlay
                                    muted
                                    loop
                                    playsInline></video>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                        
                    </Swiper>
                </div>

                {openSlide &&(
                <div className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4'>
                    <button
                        onClick={() => setOpenSlide(false)}
                        className="absolute top-5 right-5 text-base sm:text-lg md:text-xl z-50 bg-white rounded-full text-black p-1 cursor-pointer"
                        >
                        <RxCross2 />
                    </button>


                    <div className='relative w-[100%] max-w-[1100px]'>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                prevEl:".custom-prev-in",
                                nextEl:".custom-next-in"
                            }}
                            pagination={{
                                el: ".pagination-btn",
                                clickable: true
                            }}
                            speed={1000}
                            loop={true}
                            initialSlide={activeIndex}
                            spaceBetween={20}
                            breakpoints={{
                                0:{
                                    navigation: false,
                                },
                                768:{
                                    navigation: {
                                        prevEl: ".custom-prev-in",
                                        nextEl: ".custom-next-in"
                                    },
                                }
                            }}
                            className='project-inner-swiper h-full w-full'
                        >
                        {project.gallery?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[500px] max-h-[600px]  flex items-center justify-center'
                                // className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center "
                                >

                                {item.type === "image" ? (
                                    <img
                                        src={item.src}
                                        className="w-full h-full object-cover md:object-contain"
                                    />
                                ) : (
                                    <video
                                        src={item.src}
                                        controls
                                        autoPlay
                                        muted
                                        className="w-full h-full object-cover md:object-contain"
                                    />
                                )}

                                </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="pagination-btn flex justify-center mt-4 md:hidden"></div>
                        
                        <div className='text-white'>
                            <button className='custom-prev-in absolute -left-20 top-1/2 text-[35px] cursor-pointer'>
                                <BsArrowLeftCircle />
                            </button>
                            <button className='custom-next-in absolute -right-20 top-1/2 text-[35px] cursor-pointer'>
                                <BsArrowRightCircle />
                            </button>
                        </div>

                    </div>
                </div>  
                )}
            </div>
        </section>
    </section>

    <section className='py-10 sm:py-12 md:py-[50px] bg-[#d5d5d5]'>
        <section className="container mx-auto px-4">
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 ' >
                
                <div className='flex items-start sm:items-center gap-4 sm:justify-center'>
                    <div className='w-12 h-12 flex items-center justify-center border border-gray-500 rounded-md shrink-0'>
                        <TbTriangleSquareCircle className='text-[#ff0000] text-[20px] sm:text-[24px]' />
                    </div>

                    <div>
                        <small className='uppercase tracking-wider text-gray-700 font-medium text-xs sm:text-sm'>Industry</small>
                        <h4 className='text-sm sm:text-base font-[700]'>{project.industry}</h4>
                    </div>
                </div>

                <div className='flex items-start sm:items-center gap-4 sm:justify-center'>
                    <div className='w-12 h-12 flex items-center justify-center border border-gray-500 rounded-md shrink-0'>
                        <GoFileCode className='text-[#ff0000]  text-[20px] sm:text-[24px]' />
                    </div>

                    <div>
                        <small className='uppercase tracking-wider text-gray-700 font-[500]'>Tech Stack</small>
                        {project.techStack.map((item)=>(
                            <h4 className='text-sm sm:text-base font-[700]'>{item}</h4>
                        ))}
                    </div>
                </div>

                <div className='flex items-start sm:items-center gap-4 sm:justify-center'>
                    <div className='w-12 h-12 flex items-center justify-center border border-gray-500 rounded-md shrink-0'>
                        <LuClock4 className='text-[#ff0000] text-[20px] sm:text-[24px]' />
                    </div>

                    <div>
                        <small className='uppercase tracking-wider text-gray-700 text-xs sm:text-sm font-[500]'>Timeline</small>
                        <h4 className='text-sm sm:text-base font-[700]'>{project.timeline}</h4>
                    </div>
                </div>

                <div className='flex items-center sm:justify-center'>
                    <a href={project.demo_link} target='_blank'>
                        <button className='bg-red-500 text-white py-2 px-6 rounded-full font-medium cursor-pointer
                            hover:bg-white hover:text-red-500 border hover:border-red-500  duration-300 active:scale-90 text-sm '>
                            View Demo
                        </button>
                    </a>
                    
                </div>
            </div>
           
        </section>
    </section>

    {/* impect section */}
    <section className='py-[20px] sm:py-[30px] md:py-[40px] lg:py-[50px] bg-black text-white'>
        <section className="container mx-auto px-4">
            <div className=''>
                <h2 className='text-[20px] sm:text-[22px] md:text-[25px] lg:text-[28px] text-[#E53935] font-[600]'>Real-World Results</h2>
            </div>

            <div ref={ref} className='mt-[30px] grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                <div className='border-l-[3px] border-red-600 bg-white/20 p-[15px] sm:p-[20px] lg:p-[30px] rounded-md cursor-pointer hover:bg-white/30'>
                    <h1 className='text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-[#ff0000] font-[700]'>
                        {inView &&(
                            <CountUp  end={project.impact.efficiency} decimals={1} suffix='%'/>
                        )}
                    </h1>

                    <small className='text-white/70 tracking-widest uppercase'>Operational Efficiency</small>
                    <p className='text-[14px] mt-[10px]'>Measured across all global shipping lanes within the first quarter.</p>
                </div>

                <div className='border-l-[3px] border-red-600 bg-white/20 p-[15px] sm:p-[20px] lg:p-[30px] rounded-md cursor-pointer hover:bg-white/30'>
                    <h1 className='text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-[#ff0000] font-[700]'>
                        {inView &&(
                            <CountUp end={project.impact.latency} decimals={1} suffix='s'/>
                        )}
                    </h1>

                    <small className='text-white/70 uppercase tracking-widest'>Data Latency Reduction</small>
                    <p className='text-[14px] mt-[10px]'>Down from 5.4s, enabling true real-time response capabilities.</p>
                </div>

                <div className='border-l-[3px] border-red-600 bg-white/20 p-[15px] sm:p-[20px] lg:p-[30px] rounded-md cursor-pointer hover:bg-white/30'>
                    <h1 className='text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-[#ff0000] font-[700]'>
                        <p>{project.impact.avialable }</p>
                    </h1>

                    <small className='text-white/70 uppercase tracking-widest'>System Availability</small>
                    <p className='text-[14px] mt-[10px]'>Zero unscheduled downtime since the platform launch.</p>
                </div>
            </div>
        </section>
    </section>

    <section className='py-[50px] bg-white text-white'>
        <section className="containers mx-auto px-4">
            <div className='max-w-[850px] mx-auto p-[40px] sm:p-[60px] md:p-[80px] lg:p-[100px] text-center rounded-2xl'
                 style={{background: "linear-gradient(135deg, #e30613 0%, #000000 100%)"}}>

                <h1 className='text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px] font-[600] leading-none'>Build the future of your infrastructure.</h1>
                <p className='mt-[15px] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px]'>Ready to revolutionize your business with custom software and AI? Let's talk about your vision.</p>

                <Link to={'/contact'}>
                    <button className='s-project text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[600] py-[10px] px-[25px] rounded-3xl tracking-widest
                        bg-red-500 mt-[30px] text-white hover:bg-white hover:text-black cursor-pointer
                    '>
                        START A PROJECT
                    </button>
                </Link>
                
            </div>
        </section>
    </section>
    </>
  )
}
