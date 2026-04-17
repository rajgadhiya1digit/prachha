import React, { useState } from 'react'
import blogbg from '../assets/blogbg.jpg'
import { blogCategory, blogData, blogTags } from '../data/blogData'
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';

const BlogPage = () => {

    const blogs = blogData;

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState("All");
    const itemsPerPage = 6;

    const filterBlog = blogs.filter((item)=>{
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        
        return matchesSearch && matchesCategory;
    });

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    const currentBlogs = filterBlog.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filterBlog.length / itemsPerPage);
    
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

  return (
    <>
    <section className="relative overflow-hidden min-h-[calc(100vh-64px)]  sm:min-h-[calc(100vh-72px)] flex justify-center items-center text-white">

        {/* Background */}
        <div className="absolute inset-0">
            <img
            src={'/blog/blogbg.jpg'}
            alt="Blog Background"
            className="w-full h-full object-cover "
            />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/40 via-[#0B0F19]/45 to-[#0B0F19]/60" />

        {/* Content */}
        <div className="relative w-full mx-auto px-4  text-center">

            {/* <div className="mb-6">
                <span className="inline-block text-xs sm:text-sm font-[600] tracking-widest uppercase bg-red-500/10 text-red-400 px-5 py-2 rounded-full border border-red-500/40 backdrop-blur-md">
                    Knowledge Hub
                </span>
            </div> */}

            <div className="mb-6">
                <span className="inline-block text-xs sm:text-sm font-[600] tracking-widest uppercase bg-red-500/10 text-white px-5 py-2 rounded-full border border-orange-400 backdrop-blur-md">
                    Knowledge Hub
                </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Insights That Help You
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading">
                    Build Better Digital Products
                </span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Explore practical guides, expert insights, and real-world strategies on
                development, SEO, and digital growth. No fluff — just actionable content.
            </p>

        </div>
    </section>

    <section className='py-12 sm:py-14 md:py-16 bg-gradient-to-b from-gray-50 to-white'>
        <section className="containers mx-auto px-4">
            
            <div className='grid grid-cols-12'>

            </div>
            {/* category tab */}
            <div className='mb-16'>
                <div className='flex flex-wrap justify-start gap-2 sm:gap-3'>
                    <button
                        onClick={() => handleCategoryChange("All")}
                        className={`px-4 py-2 rounded-sm font-[600] transition text-sm sm:text-base ${
                            activeCategory === "All"
                                ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                                : " bg-gray-200 text-gray-700 hover:bg-red-50 hover:text-red-500"
                        }`}
                    >
                        All
                    </button>
                    {blogCategory.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryChange(category.name)}
                            className={`px-4 py-1 rounded-sm font-[600] transition text-sm sm:text-base ${
                                activeCategory === category.name
                                    ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                                    : "bg-gray-200 text-gray-700 hover:bg-red-50 hover:text-red-500"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* BLOG GRID */}
            {currentBlogs.length > 0 ? (
            <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                {currentBlogs.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-md shadow-md hover:shadow-2xl transition-all overflow-hidden group border border-gray-100 h-full flex flex-col hover:-translate-y-2"
                    >
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-[220px] sm:h-[250px]">
                        <img
                        src={item.blog_image}
                        alt="blog"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                        />

                        {/* Date Badge */}
                        <div className='absolute bottom-4 left-4 inline-block bg-red-500 px-3 py-1.5 rounded-md shadow-lg'>
                            <span className='block text-white text-xs font-[700]'>{item.date}</span>
                        </div>

                        {/* Category Badge */}
                        <div className='absolute top-4 right-4 inline-block bg-white/95 backdrop-blur px-4 py-1.5 rounded-md'>
                            <span className='text-red-500 text-xs font-[700] uppercase tracking-wider'>{item.category}</span>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                        {/* Title */}
                        <Link to={`/blog_details/${item.id}`}>
                            <h2 className="text-base sm:text-lg font-[700] mb-3 text-[#0b1c39] cursor-pointer line-clamp-2
                                group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition">
                                {item.title}                    
                            </h2>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                            {item.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {item.tags.slice(0, 2).map((tag, idx) => (
                                <span key={idx} className="text-xs bg-red-50 text-red-600 font-[600] px-2.5 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Read More Button */}
                        <Link to={`/blog_details/${item.id}`}>
                            <button className="text-red-500 font-[700] tracking-wider hover:text-red-600 transition flex items-center gap-2 mt-auto group/btn">
                                Read More <span className="group-hover/btn:translate-x-1 transition">→</span>
                            </button>    
                        </Link>
                        
                    </div>
                </div>
                ))}
            </div>

            {/* PAGINATION */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-16">

                {/* Prev Button */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className={`px-3 sm:px-4 py-2 rounded-xl border font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm ${
                    currentPage === 1
                        ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-md"
                    }`}
                >
                    ← <span className="hidden sm:inline">Prev</span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">

                    {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`min-w-[34px] sm:min-w-[40px] h-[34px] sm:h-[40px] flex items-center justify-center rounded-xl font-semibold text-xs sm:text-sm border transition-all duration-200 ${
                        currentPage === index + 1
                            ? "bg-red-500 text-white border-red-500 shadow-md scale-105"
                            : "bg-white text-gray-700 border-gray-300 hover:border-red-500 hover:text-red-500 hover:shadow-sm"
                        }`}
                    >
                        {index + 1}
                    </button>
                    ))}

                </div>

                {/* Next Button */}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className={`px-3 sm:px-4 py-2 rounded-xl border font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm ${
                    currentPage === totalPages
                        ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-md"
                    }`}
                >
                    <span className="hidden sm:inline">Next</span> →
                </button>

                </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20">
                        <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-2xl font-[700] text-gray-700 mb-2">No blogs found</h3>
                        <p className="text-gray-500">Try adjusting your filters or search term</p>
                    </div>
                )}
        </section>
    </section>

    <Newsletter />
    </>
  )
}

export default BlogPage