import React, { useRef } from 'react'
import { Card, CardContent } from './ui/card'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc.",
        content: "Working with this team has been transformative for our business. Their innovative solutions and attention to detail exceeded our expectations.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Product Manager",
        company: "Digital Solutions",
        content: "Exceptional service and outstanding results. They delivered our project on time and within budget, with quality that speaks for itself.",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Marketing Director",
        company: "Growth Labs",
        content: "The team's expertise and professionalism are unmatched. They understood our needs perfectly and delivered beyond our wildest dreams.",
        rating: 5
    },
    {
        id: 4,
        name: "David Kim",
        role: "CTO",
        company: "Innovation Corp",
        content: "A truly remarkable experience from start to finish. Their technical skills and creative approach solved problems we didn't even know we had.",
        rating: 5
    },
    {
        id: 5,
        name: "Lisa Thompson",
        role: "Operations Manager",
        company: "Global Enterprises",
        content: "I can't recommend them enough. Their dedication to excellence and customer satisfaction is evident in every interaction.",
        rating: 4
    }
]

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    className={`w-4 h-4 ${index < rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                        }`}
                />
            ))}
        </div>
    )
}
const Testimonials = () => {
    const swiperRef = useRef<any>(null);

    return (
        <section className="py-8 xs:py-10 sm:py-12 md:py-14 lg:py-20  bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 lg:mb-10">
                    <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider uppercase text-red-500 rounded-full">
                        Testimonials
                    </span>

                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-gray-900 font-bold mb-4 mt-5">
                        What Our <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Clients Say</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-gray-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
                        Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
                    </motion.p>
                </div>


                <div className="relative">
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={16}
                        loop={true}
                        slidesPerView={1}
                        speed={1100}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        navigation={{
                            prevEl: '.custom-prev-button',
                            nextEl: '.custom-next-button',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 16,
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                        }}
                        className=".custom-pagination pb-12 xs:pb-14 sm:pb-16 cursor-pointer"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className="h-auto">
                                <div className="w-full h-full bg-gray-100 border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">

                                    <div className="p-4 xs:p-5 sm:p-6 flex flex-col h-full">

                                        <div className="flex items-start justify-between mb-3 xs:mb-4">
                                            <Quote className="w-5 xs:w-6 sm:w-7 h-5 xs:h-6 sm:h-7 text-blue-500 opacity-50" />
                                            <StarRating rating={testimonial.rating} />
                                        </div>

                                        <blockquote className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-700 mb-3 xs:mb-4 sm:mb-6 flex-grow italic leading-relaxed">
                                            "{testimonial.content}"
                                        </blockquote>

                                        <div className="flex items-center gap-2 xs:gap-3 mt-auto">
                                            <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                                                <span className="text-xs xs:text-sm sm:text-base font-bold">
                                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0 text-left">
                                                <div className="text-xs xs:text-sm sm:text-base lg:text-lg font-semibold text-gray-900 truncate">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-xs xs:text-xs sm:text-sm text-gray-600 truncate">
                                                    {testimonial.role} at {testimonial.company}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    {/* Prev Button */}
                    <button
                        className="
                        custom-prev-button
                        absolute z-10
                          w-8 h-8 sm:w-10 sm:h-10
                        rounded-full bg-white hover:bg-red-500 hover:text-white shadow-lg border border-gray-200
                        flex items-center justify-center
                        transition-all duration-300

                        right-14 top-[-50px]

                        lg:left-[-60px] lg:right-auto lg:top-1/2 lg:-translate-y-1/2
                    "
                        onClick={() => swiperRef.current?.swiper.slidePrev()}
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Next Button */}
                    <button
                        className="
                        custom-next-button
                        absolute z-10
                        w-8 h-8 sm:w-10 sm:h-10
                        rounded-full bg-white hover:bg-red-500 hover:text-white  shadow-lg border border-gray-200
                        flex items-center justify-center
                        transition-all duration-300
                       
                        right-0 top-[-50px]

                        lg:right-[-60px] lg:top-1/2 lg:-translate-y-1/2
                    "
                        onClick={() => swiperRef.current?.swiper.slideNext()}
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials