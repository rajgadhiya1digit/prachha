import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import { motion } from "framer-motion";

export function Blog() {
  // Get the 3 latest blog posts
  const latestBlogs = blogData.slice(0, 3);

  return (
    <section
      className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      id="blog"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 text-sm font-semibold tracking-wider uppercase text-[#ff0000] rounded-ful mb-6">
              Latest Insights
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-gray-900 font-bold mb-4">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Latest Articles
              </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in
            technology and digital transformation
          </motion.p>
        </div>

        {/* Blog Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {latestBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <Link to={`/blog_details/${blog.id}`} className="group">
                <div className="overflow-hidden h-full flex flex-col shadow-lg group-hover:shadow-2xl border-0 bg-white transition-all duration-500 hover:-translate-y-2 rounded-sm">

                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={blog.blog_image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-500"></div>

                    <Badge className="absolute top-4 right-4 bg-white/95 backdrop-blur hover:bg-white text-[#FF0000] border-0 font-semibold px-3 py-1 text-xs sm:text-sm">
                      {blog.category}
                    </Badge>

                    <div className="absolute bottom-4 left-4 inline-block bg-[#FF0000] px-3 py-1.5 rounded-md shadow-lg">
                      <span className="block text-white text-xs font-[700]">
                        {blog.date}
                      </span>
                    </div>

                    {blog.populer && (
                      <div className="absolute top-4 left-4 bg-[#FF0000] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF0000] transition-colors duration-300 line-clamp-2 flex-grow">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <button className="text-[#FF0000] font-semibold inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3 mt-auto">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-8">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-[#FF0000] font-semibold hover:gap-3 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
