import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail, ArrowRight, Users, Award, Target } from 'lucide-react';

const founder = [
    {
        name: 'Vijay Sarkheliya',
        role: 'Chief Executive Officer',
        image: '/team/vijaysirprofile.jpg',
        bio: 'Visionary leader with 15+ years of experience in scaling tech startups and driving digital transformation.',
        profileLink: '/team/ceo/vijay-sarkheliya',
        social: {
            linkedin: 'https://www.linkedin.com/in/vijaysarkheliya/',
            twitter: 'https://x.com/vijaysarkheliya',
            email: 'mailto:info@vijaysarkheliya.com'
        },

    },
    {
        name: 'Hitesh Sarkheliya',
        role: 'Chief Technology Officer',
        image: '/team/hiteshsirprofile.jpg',
        bio: 'Tech architect specializing in AI, cloud solutions, and scalable enterprise systems.',
        profileLink: '/team/cto/hitesh-sarkheliya',
        social: {
            linkedin: 'https://www.linkedin.com/in/hitesh-gs/',
            twitter: 'https://x.com/hiteshgs',
            email: 'info@vijaysarkheliya.com'
        },
    },
];

const teamMembers = [
    {
        name: 'Twinkal Goyani',
        role: 'Human Resources (HR)',
        image: '/api/placeholder/300/300',
        bio: 'Dedicated HR professional focused on building strong teams and fostering a positive work culture.',
        social: {
            linkedin: 'https://www.linkedin.com/in/twinkle-goyani-278a1a304/',
            email: 'twinkal@company.com'
        },

    },
    {
        name: 'Pratham Thakkar',
        role: 'Development Team Leader',
        image: '/api/placeholder/300/300',
        bio: 'Leads the development team with expertise in scalable systems, clean architecture, and delivering high-performance web applications.',
        social: {
            linkedin: 'https://www.linkedin.com/in/pratham-thakkar-11b659244/',
            email: 'pratham.1digit@gmail.com'
        },
    },
    {
        name: 'Raj Bhatt',
        role: 'Team Leader (SEO)',
        image: '/api/placeholder/300/300',
        bio: 'Experienced team leader guiding projects with strong leadership, coordination, and technical expertise.',
        social: {
            linkedin: 'https://www.linkedin.com/in/raj-bhatt-dm/',
            email: 'rajbhatt.seo@gmail.com'
        },

    },
    {
        name: 'Yash Makwana',
        role: 'Development Team Leader',
        image: '/api/placeholder/300/300',
        bio: 'Skilled development leader specializing in building scalable applications and guiding the tech team.',
        social: {
            linkedin: 'https://www.linkedin.com/in/yash-makwana-b2a858287/',
            email: 'yash.1digit@gmail.com'
        },
    },
    {
        name: 'Janvi Goyani',
        role: 'Team Leader (UI/UX design)',
        image: '/api/placeholder/300/300',
        bio: 'Experienced team leader guiding projects with strong leadership, coordination, and technical expertise.',
        social: {
            linkedin: 'https://www.linkedin.com/in/janvikajavadara/',
            email: 'janvi.ouros@gmail.com'
        },

    },
    
]

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
                    src={'/team/teambg.png'}
                    alt="Blog Background"
                    className="w-full h-full object-cover "
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
                        <div className="text-center">
                            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">50+</p>
                            <p className="text-gray-300 text-xs sm:text-sm font-medium">Years Of Experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">100+</p>
                            <p className="text-gray-300 text-xs sm:text-sm font-medium">Projects Delivered</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">50+</p>
                            <p className="text-gray-300 text-xs sm:text-sm font-medium">Team Members</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Leadership Team */}
            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-tight mb-6 fade-up-text">
                            Meet the Leaders Shaping
                            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                                Our Path
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto fade-up-text" style={{ animationDelay: '0.2s' }}>
                            Our experienced leaders guide the company with vision, expertise, and a commitment to excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                        {founder.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="group h-full"
                            >

                                <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 flex flex-col">

                                    <div className="flex flex-col h-full">

                                        {/* TOP */}
                                        <Link to={member.profileLink}>
                                            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
                                                <div className="relative flex-shrink-0">
                                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-[2px]">
                                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                                            <span className="text-lg sm:text-2xl font-bold text-gray-800">
                                                                <img src={member.image} alt="" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-white" />
                                                </div>

                                                <div className="flex-1 ">
                                                    <h3 className="text-lg sm:text-xl font-bold mb-1 text-gray-900 group-hover:text-red-600 transition-colors truncate">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-red-600 text-xs sm:text-sm font-medium line-clamp-2">
                                                        {member.role}
                                                    </p>
                                                </div>

                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-red-600 transition-colors flex-shrink-0" />
                                            </div>
                                        </Link>

                                        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6  line-clamp-3">
                                            {member.bio}
                                        </p>

                                        <div className="flex gap-2 sm:gap-3 mt-auto">
                                            {member.social.linkedin && (
                                                <a href={member.social.linkedin} target='_blank' className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors">
                                                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-red-600" />
                                                </a>
                                            )}
                                            {member.social.twitter && (
                                                <a href={member.social.twitter} target='_blank' className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors">
                                                    <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-red-600" />
                                                </a>
                                            )}
                                            {member.social.email && (
                                                <a href={`mailto:${member.social.email}`} target='_blank' className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors">
                                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-red-600" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold leading-tight mb-6 fade-up-text">
                            Meet Our 
                            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                               Our Dedicated Team
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto fade-up-text" style={{ animationDelay: '0.2s' }}>
                            Talented professionals working together to deliver exceptional results.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                {/* CARD */}
                                <div className="h-full min-h-[240px] sm:min-h-[260px] bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 flex flex-col">

                                    {/* INNER FLEX */}
                                    <div className="flex flex-col items-center text-center h-full">

                                        {/* TOP */}
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-[2px] mb-3 sm:mb-4">
                                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                                <span className="text-base sm:text-lg font-bold text-gray-800">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900">
                                            {member.name}
                                        </h3>

                                        <p className="text-red-600 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                                            {member.role}
                                        </p>

                                        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-3">
                                            {member.bio}
                                        </p>

                                        <div className="flex gap-2 mt-auto">
                                            {member.social.linkedin && (
                                                <a href={member.social.linkedin} target='_blank' className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors">
                                                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                                                </a>
                                            )}
                                            {member.social.email && (
                                                <a href={`mailto:${member.social.email}`} target='_blank' className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors">
                                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                                                </a>
                                            )}
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
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                        >
                            View Open Positions
                        </motion.button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamPage;