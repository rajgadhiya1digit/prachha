import React from 'react'
import Newsletter from '../components/Newsletter'

const InqueryPage = () => {
  return (
    <>
    <section className='py-[80px]'>
        <section className="container mx-auto px-4 ">
           <div className='block text-center mb-5'>
                <div className="relative inline-block">

                    {/* Main heading */}
                    <h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                    Make an{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 italic text-red-600">Inquiry</span>
                            {/* Underline accent */}
                            <span className="absolute bottom-1 left-0 w-full h-[3px] bg-red-500/80 rounded-full" />
                        </span>
                    </h1>
                </div>
            </div>


            <div className=''>
                <div className='w-full max-w-2xl mx-auto'>
                    <form className="w-full max-w-full bg-gray-50 backdrop-blur-xl border border-white/20 rounded-2xl p-6 lg:p-8">

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                        <label htmlFor="" className='block text-[rgb(78,70,57)] mb-2'>Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-[5px] bg-white/10 border border-gray-400  placeholder-gray-400 focus:outline-none focus:border-red-500"
                        />
                        </div>
                    
                        <div>
                        <label htmlFor="" className='block text-[#4e4639] mb-2'>Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-[5px] bg-white/10 border border-gray-400 placeholder-gray-400 focus:outline-none focus:border-red-500"
                        />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="" className='block text-[#4e4639] mb-2'>Company</label>
                        <input
                            type="text"
                            placeholder="company name"
                            className="w-full px-4 py-2 rounded-[5px] bg-white/10 border border-gray-400  placeholder-gray-400 mb-4 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="" className='block text-[#4e4639] mb-2'>Service</label>
                        <input
                            type="text"
                            placeholder="service interested in"
                            className="w-full px-4 py-2 rounded-[5px] bg-white/10 border border-gray-400  placeholder-gray-400 mb-4 focus:outline-none focus:border-red-500"
                        />
                    </div> 

                    <div>
                        <label htmlFor="" className='block text-[#4e4639] mb-2'>Contact Number</label>
                        <input
                            type="text"
                            placeholder="contact"
                            className="w-full px-4 py-2 rounded-[5px] bg-white/10 border border-gray-400  placeholder-gray-400 mb-4 focus:outline-none focus:border-red-500"
                        />
                    </div>

                     <div>
                        <label htmlFor="" className='block text-[#4e4639] mb-2'>Country</label>
                        <input
                            type="text"
                            placeholder="Country"
                            className="w-full px-4 py-2 rounded-[5px] bg-white/10 border border-gray-400  placeholder-gray-400 mb-4 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    {/* Message */}
                    <label htmlFor="" className='block text-[#4e4639] mb-2'>write your requirement</label>
                    <textarea
                        rows={5}
                        placeholder="Your Message..."
                        className="w-full px-4 py-2 rounded-[5px] bg-white/10 border border-gray-400 placeholder-gray-400 mb-6 focus:outline-none focus:border-red-500"
                    ></textarea>

                    <button
                        type="submit"
                        style={{ background: "linear-gradient(to right, #ef4444, #fbbf24)" }}
                        className="w-fit py-2 sm:py-2 px-6 md:px-8 rounded-full text-white font-medium hover:scale-[1.02] transition duration-300 shadow-lg "
                    >
                        Send Inquiry
                    </button>

                    </form>
                </div>
            </div>
        </section>
    </section>

    <Newsletter />
    </>
  )
}

export default InqueryPage