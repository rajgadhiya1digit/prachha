import React, { useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectData } from "../data/projectData";

const INITIAL_VISIBLE = 6;

const ProjectPage = () => {
  const [activeTech, setActiveTech] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const navigate = useNavigate();

  const projectTech = useMemo(() => {
    if (!projectData || projectData.length === 0) return ["All"];
    const allTech = projectData.flatMap((p) => p.techStack || []);
    const uniqueTech = [...new Set(allTech)];
    return ["All", ...uniqueTech];
  }, [projectData]);

  const filteredProjects = useMemo(
    () => {
      if (!projectData || projectData.length === 0) return [];
      return activeTech === "All"
        ? projectData
        : projectData.filter((project) =>
            project.techStack?.includes(activeTech),
          );
    },
    [activeTech, projectData],
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredProjects.length;

  const handleFilter = useCallback((filter: string) => {
    setActiveTech(filter);
    setVisibleCount(INITIAL_VISIBLE);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] flex justify-center items-center text-white">
        <div className="absolute inset-0">
          <img
            src={"/projectimg/projectbg.png"}
            alt="Project Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/40 via-[#0B0F19]/45 to-[#0B0F19]/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full mx-auto px-4 text-center"
        >
          <div className="mb-6">
            <span className="inline-block text-xs sm:text-sm font-[600] tracking-widest uppercase bg-red-500/10 text-white px-5 py-2 rounded-full border border-orange-400 backdrop-blur-sm">
              Our Portfolio
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Delivering Digital Solutions
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading-tight">
              That Make an Impact
            </span>
          </h1>

          <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            From startups to enterprises, we build high-performance products
            that solve real-world problems and create meaningful user
            experiences.
          </p>
        </motion.div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-12">
            {projectTech.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilter(filter)}
                className={`px-4 py-2 rounded-sm font-[600] transition text-sm sm:text-base ${
                  activeTech === filter
                    ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                    : " bg-gray-200 text-gray-700 hover:bg-red-50 hover:text-red-500"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-300">
              No projects match this filter.
            </p>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => navigate(`/project-details/${project.id}`)}
                    className="relative overflow-hidden group cursor-pointer h-[280px]   sm:h-[360px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 "
                      onError={(e) => {
                        e.currentTarget.src = '/projectimg/projectbg.png';
                      }}
                    />

                    <div className="absolute inset-0 z-20 flex items-center justify-center p-8 text-white">
                      <h3 className="text-2xl font-semibold uppercase leading-tight text-center">
                        {project.title}
                      </h3>
                    </div>

                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white py-1 px-5 bg-black/20 text-center">
                      <p className="text-sm ">{project.industry}</p>
                    </div>
                  </div>
                ))}
              </div>

              {canLoadMore && (
                <div className="mt-12 text-center">
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount((prev) => prev + INITIAL_VISIBLE)
                    }
                    className="inline-flex items-center justify-center rounded-full border border-red-500 bg-transparent px-7 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    Load More Projects
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
