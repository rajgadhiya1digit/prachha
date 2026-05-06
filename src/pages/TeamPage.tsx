import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail, ArrowRight, Users, Award, Target } from 'lucide-react';
import { teamData, getProfileLink } from '../data/teamData';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};
const TeamPage = () => {
    return (
        <>
            <section className="relative overflow-hidden min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] flex justify-center items-center text-white">
               
                <div className="absolute inset-0">
                    <img
                    src={'/team/teambg.webp'}
                    alt="Blog Background"
                    className="w-full h-full object-cover "
                    loading="lazy"
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
                            Meet Our Team
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        The Minds Behind
                        <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading">
                            Our Success
                        </span>
                    </h1>

                    <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Meet the talented individuals who bring innovation, expertise, and passion to every project we undertake.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-row justify-center gap-4 sm:gap-8 lg:gap-10 mt-10 text-sm text-gray-400">
                        {/* <div className="text-center">
                            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">50+</p>
                            <p className="text-gray-300 text-xs sm:text-sm font-medium">Years Of Experience</p>
                        </div> */}
                        <div className="text-center">
                            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">25+</p>
                            <p className="text-gray-300 text-xs sm:text-sm font-medium">Projects Delivered</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">20+</p>
                            <p className="text-gray-300 text-xs sm:text-sm font-medium">Team Members</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Leadership Team */}
            <section className="relative py-16 sm:py-20 bg-gray-50 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-100/50 to-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-100/50 to-red-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-block text-red-500 tracking-wider uppercase text-sm mb-4 font-[600]"
                        >
                            Leadership
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-tight mb-6"
                        >
                            Meet the Leaders Shaping
                            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                                Our Path
                            </span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Our experienced leaders guide the company with vision, expertise, and a commitment to excellence.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                        {teamData.founders.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                viewport={{ once: true, margin: '-100px' }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group h-full"
                            >
                                <div className="relative h-full">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                                    
                                    <div className="relative h-full bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 flex flex-col">
                                        <div className="flex flex-col h-full">
                                            {/* Profile Section */}
                                            <Link to={getProfileLink(member)} className="block">
                                                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                                                    <div className="relative flex-shrink-0">
                                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-[3px] shadow-lg">
                                                            <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                                                                <img 
                                                                    src={member.image} 
                                                                    alt={member.name} 
                                                                    loading="lazy" 
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                                            <div className="w-2 h-2 bg-white rounded-full" />
                                                        </div>
                                                    </div>

                                                    <div className="flex-1">
                                                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                                                            {member.name}
                                                        </h3>
                                                        <p className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-sm sm:text-base font-semibold">
                                                            {member.role}
                                                        </p>
                                                    </div>

                                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-50 to-orange-50 flex items-center justify-center group-hover:from-red-100 group-hover:to-orange-100 transition-colors">
                                                        <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </Link>

                                            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed line-clamp-3">
                                                {member.bio}
                                            </p>

                                            <div className="flex gap-3 mt-auto">
                                                {member.linkedin && (
                                                    <a 
                                                        href={member.linkedin} 
                                                        target='_blank' 
                                                        rel='noopener noreferrer' 
                                                        aria-label='Linkedin'
                                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 group/btn"
                                                    >
                                                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover/btn:text-white transition-colors" />
                                                    </a>
                                                )}
                                                {member.twitter && (
                                                    <a 
                                                        href={member.twitter} 
                                                        target='_blank' 
                                                        rel='noopener noreferrer' 
                                                        aria-label='Twitter'
                                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 group/btn"
                                                    >
                                                        <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover/btn:text-white transition-colors" />
                                                    </a>
                                                )}
                                                {member.email && (
                                                    <a 
                                                        href={`mailto:${member.email}`} 
                                                        target='_blank' 
                                                        rel='noopener noreferrer' 
                                                        aria-label='Email'
                                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 group/btn"
                                                    >
                                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover/btn:text-white transition-colors" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="relative py-16 sm:py-20  bg-white overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-orange-100/60 to-red-100/60 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-red-100/60 to-orange-100/60 rounded-full blur-3xl" />
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-block text-red-500 tracking-wider uppercase text-sm mb-4 font-[600]"
                        >
                            Our Team
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-tight mb-6"
                        >
                            Meet Our 
                            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                                Dedicated Team
                            </span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Talented professionals working together to deliver exceptional results.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {teamData.members.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true, margin: '-100px' }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="h-full"
                            >
                                <div className="relative h-full group">
                                    {/* Card Glow */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                                    
                                    <div className="relative h-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 flex flex-col">
                                        <div className="flex flex-col items-center text-center h-full">
                                            {/* Avatar */}
                                            <div className="relative mb-5">
                                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-[3px] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
                                                        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                                                            {member.name.split(' ').map((n: any) => n[0]).join('')}
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* Decorative dots */}
                                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full" />
                                                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-400 rounded-full" />
                                            </div>

                                            <Link to={getProfileLink(member)} className="block">
                                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                                                    {member.name}
                                                </h3>
                                            </Link>

                                            <p className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wide">
                                                {member.role}
                                            </p>

                                            <p className="text-gray-600 text-xs sm:text-sm mb-5 flex-grow line-clamp-3 leading-relaxed">
                                                {member.bio}
                                            </p>

                                            <div className="flex gap-3 mt-auto w-full justify-center">
                                                {member.linkedin && ( 
                                                    <a 
                                                        href={member.linkedin} 
                                                        target='_blank' 
                                                        aria-label='Linkedin' 
                                                        rel='noopener noreferrer'
                                                        className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 group/btn"
                                                    >
                                                        <Linkedin className="w-4 h-4 text-gray-600 group-hover/btn:text-white transition-colors" />
                                                    </a>
                                                )}
                                                {member.email && (
                                                    <a 
                                                        href={`mailto:${member.email}`} 
                                                        target='_blank' 
                                                        aria-label='Email' 
                                                        rel='noopener noreferrer'
                                                        className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 group/btn"
                                                    >
                                                        <Mail className="w-4 h-4 text-gray-600 group-hover/btn:text-white transition-colors" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Join Our Team</h2>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            We're always looking for talented individuals to join our growing team. Check out our open positions and start your journey with us.
                        </p>
                        <motion.a
                            href='/career'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                        >
                            View Open Positions
                        </motion.a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamPage;