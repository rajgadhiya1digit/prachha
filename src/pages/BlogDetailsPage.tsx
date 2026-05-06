import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogData, blogCategory, blogTags } from '../data/blogData'
import { FaUser, FaComments, FaCalendar, FaTag, FaArrowLeft } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { GoArrowRight , GoArrowLeft } from "react-icons/go";
import Newsletter from '../components/Newsletter';

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = id ? blogData.find(item => item.id === parseInt(id)) : undefined;

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog not found</h1>
          <Link to="/blog" className="text-red-500 hover:text-red-600">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  //previous and next blog logic
  const sortedBlogs = [...blogData].sort((a, b) => a.id - b.id);
  const currentIndex   = sortedBlogs.findIndex(blog => blog.id === parseInt(id!));
  
  const prevBlog  = sortedBlogs[currentIndex - 1];
  const nextBlog  = sortedBlogs[currentIndex + 1];


  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 md:py-36 text-white">

        <div className="absolute inset-0">
          <img src={'/blog/blogdetailsbg.jpg'} alt='blogdetalsbg' className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/55 via-[#0B0F19]/45 to-[#0B0F19]/60" />
        
        <div className="relative max-w-3xl mx-auto px-4 text-center bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">
          
          <div className="mb-6">
              <span className="inline-block text-xs sm:text-sm font-[600] tracking-widest uppercase bg-red-500/10 text-white px-5 py-2 rounded-full border border-orange-400 backdrop-blur-md">
                {blog.category}
              </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FaUser className="text-red-400" />
              <span>{blog.author.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendar className="text-red-400" />
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Article Content */}
            <div className="lg:col-span-8">
              
                <div>
                    <div className='w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]'>
                        <img src={blog.blog_image} className='w-full h-full object-cover' alt="" />
                    </div>
    
                    <div className='whitespace-pre-line text-sm sm:text-base  text-gray-700 mt-3 leading-relaxed'>
                        {blog.content}
                    </div>
    
                    <div className='mt-8 bg-orange-100 p-4 sm:p-5 border-l-4 border-red-600 text-base sm:text-lg text-gray-700'>
                        <FaQuoteLeft className='text-xl mb-2' />
                        {blog.article}
                    </div>
                </div>
              
                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                        <FaTag className="text-red-500" />
                        <span className="font-semibold text-gray-900">Tags:</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, idx) => (
                      <span key={idx} className="bg-red-50 text-gray-800 px-3 py-1 border border-red-500 rounded-full text-xs sm:text-sm  font-medium">
                        {tag}
                      </span>
                    ))}
                    </div>
                </div>

                <div className="mt-12 relative">
                  <div className="relative bg-gradient-to-br from-white via-red-50/30 to-orange-50/30 p-6 sm:p-8 rounded-3xl border border-red-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  
                      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                          
                          {/* Logo/Avatar */}
                          <div className="flex-shrink-0 relative">
                              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-1 shadow-lg">
                                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                                  <img
                                      src={blog.author?.logo}
                                      alt={blog.author?.name}
                                      className="object-contain w-full h-full p-2"
                                  />
                                  </div>
                              </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                  <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                                  <p className="text-xs text-red-600 font-bold uppercase tracking-wider">
                                    Published by
                                  </p>
                              </div>

                              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                  {blog.author?.name}
                              </h4>

                              <p className="text-gray-600 leading-relaxed mb-4">
                                  {blog.author?.bio}
                              </p>
                          </div>
                      </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {/* Previous Blog */}
                  {prevBlog && (
                    <Link
                      to={`/blog_details/${prevBlog.id}`}
                      className="p-4 border rounded-xl transition group"
                    >
                      <p className="flex items-center gap-2 text-sm text-black mb-1">
                        <GoArrowLeft /> 
                        Prev Post
                      </p>
                      <h4 className="text-sm sm:text-base font-medium group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent">
                          {prevBlog.title}
                      </h4>
                    </Link>
                  )}

                  {/* Next Blog */}
                  {nextBlog && (
                    <Link
                        to={`/blog_details/${nextBlog.id}`}
                        className="p-4 border rounded-xl transition text-left sm:text-right group"
                    >
                        <p className="flex items-center justify-end gap-2 text-sm text-black mb-1">
                          Next Post 
                          <GoArrowRight /> 
                        </p>
                        <h4 className="font-medium group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent">
                            {nextBlog.title}      
                        </h4>
                    </Link>
                    )}
                </div>
            </div>
                  
            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">

            {/* Popular Posts */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogData.filter(item => item.popular && item.id !== blog.id).slice(0, 3).map((item) => (
                    <Link
                      key={item.id}
                      to={`/blog_details/${item.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <img
                          src={item.blog_image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-red-600 line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
    
              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div>
                  {blogCategory.map((category, index) => (
                    <Link
                      key={index}
                      to={`/blog?category=${category.name}`}
                      className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogTags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default BlogDetailPage;