/**
 * Projects Section — Premium showcase with large images and glassmorphism details
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true }
});

const Projects = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="section-divider mb-28" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <p className="section-label">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Featured <span className="gradient-text">Work</span>.
          </h2>
          <p className="text-gray-400 max-w-2xl font-light text-lg">
            A curated collection of my most impactful projects, showcasing complete end-to-end development from design to deployment.
          </p>
        </motion.div>

        {/* Premium Stack Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                {...fadeUp(0.1)}
                className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 group`}
              >
                {/* Image Showcase */}
                <div className="w-full lg:w-[55%] relative rounded-[2rem] overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  <div className="relative aspect-[4/3] w-full bg-dark-800 border border-white/5 rounded-[2rem] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-100 group-hover:saturate-150"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`w-full lg:w-[45%] flex flex-col ${isReverse ? 'lg:text-right lg:items-end' : 'lg:text-left lg:items-start'}`}>
                  <p className="text-primary-400 font-bold uppercase tracking-widest text-sm mb-4">Project {`0${project.id}`}</p>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Floating Glass Description */}
                  <div className={`glass-card p-6 sm:p-8 mb-8 relative z-20 ${isReverse ? 'lg:-mr-12' : 'lg:-ml-12'} shadow-2xl`}>
                    <p className="text-gray-300 font-light leading-relaxed text-base sm:text-lg text-left">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 mb-8 ${isReverse ? 'justify-end' : 'justify-start'}`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-white/5 text-gray-300 text-sm font-semibold border border-white/10 hover:border-primary-500/30 hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors group/link"
                    >
                      <span className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center group-hover/link:bg-white/10 transition-all group-hover/link:scale-110">
                        <FaGithub size={20} />
                      </span>
                      Source Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors group/link"
                    >
                      <span className="w-12 h-12 rounded-full glass border border-primary-500/20 flex items-center justify-center group-hover/link:bg-primary-500/10 transition-all group-hover/link:scale-110">
                        <FaExternalLinkAlt size={16} />
                      </span>
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
