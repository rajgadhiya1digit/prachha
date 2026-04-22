import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projectData } from "../data/projectData";

import React from 'react'

const Portfolio = () => {
  const navigate = useNavigate();
  const projects = projectData;

  return (
    <section
      className="py-12 sm:py-14 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50"
      id="projects"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-sm">
            Success Stories
          </span>

          <h2 className="text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold text-gray-900 mt-4">
            Projects That Drive{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            Explore our portfolio of transformative digital solutions
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {projects.map((project, index) => (
            <Card
              key={index}
              onClick={() =>
                navigate(`/project-details/${project.id}`)
              }
              className="overflow-hidden group cursor-pointer border border-gray-100 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative h-[300px] w-full overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition"></div>

                
                <span className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-400 text-white shadow-md
                rounded-md px-3 py-1 text-xs font-medium">
                  {project.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4">

                  <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] mb-2 flex items-center justify-between text-white font-semibold group-hover:text-red-400 transition">

                    {project.title}

                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-red-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </h3>

                  <p className="text-sm text-gray-200 opacity-90">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* TECH STACK */}
              <div className="p-6 bg-white">
                <div className="flex gap-2 flex-wrap">
                  {project.techStack.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs  transition bg-red-500 text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="text-red-500 font-semibold hover:text-red-600 inline-flex items-center gap-2 group transition">
            View All Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </button>
        </div>

      </div>
    </section>
  )
}


export default Portfolio;