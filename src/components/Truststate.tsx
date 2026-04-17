import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Truststate = () => {
    const trustData = [
        {
            value: "50",
            title: "Projects Completed",
            suffix: "+"
        },
        { 
            value: "100",
            title: "Satisfied Clients",
            suffix: "+"
        },  
        {
            value: "50",
            title: "Team Members",
            suffix: "+"
        },
        {
            value: "10",
            title: "Years of Experience",
            suffix: "+"
        }
    ];

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

  return (
    <section className='py-12 sm:py-16 bg-[#F3F3F6]'>
        <section className='container mx-auto px-4'>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
                {trustData.map((item, index) => (
                <div ref={ref} className='text-center shadow-md rounded-md py-10 bg-white' key={index}>
                    
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[700] mb-3 flex justify-center items-center '>
                        {inView && (
                            <>
                                <CountUp end={parseInt(item.value)} duration={2} />

                                <span className='text-[#bc0100]'>
                                    {item.suffix}   
                                </span>
                            </>
                        )}
                        
                    </h2>

                    <span className='uppercase text-sm tracking-wide text-[#a14637] font-[600]'>{item.title}</span>
                </div>
                ))}
            </div>
        </section>
    </section>
  )
}

export default Truststate