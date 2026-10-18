/**
 * About Section — Bento Grid Layout
 */
import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCoffee,
  FaBriefcase,
} from "react-icons/fa";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

const About = () => (
  <section id="about" className="py-28 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeUp(0)} className="mb-16">
        <p className="section-label">Discover</p>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          About <span className="gradient-text">Me</span>.
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

        {/* Main Bio Card */}
        <motion.div
          {...fadeUp(0.1)}
          className="md:col-span-2 md:row-span-2 glass-card p-10 relative overflow-hidden group flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />

          <div className="relative z-10">
            <FaCode className="text-4xl text-primary-400 mb-6 opacity-80" />

            <h3 className="text-3xl font-bold text-white mb-6 leading-snug">
              Building the web with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">
                passion and precision.
              </span>
            </h3>

            <div className="space-y-4 text-gray-300 font-light leading-relaxed text-lg">
              <p>
                I am{" "}
                <span className="text-white font-semibold">
                  Ven Chandarith
                </span>
                , a Junior Full-Stack Web Developer at{" "}
                <span className="text-white font-semibold">
                  CORARL HR
                </span>
                . I work across frontend and backend development, building
                user-friendly interfaces and reliable web applications using
                technologies such as React, Laravel, and ASP.NET Core.
              </p>

              <p>
                I am passionate about writing clean, maintainable code,
                designing efficient APIs, and continuously improving my
                software engineering skills. I enjoy learning new technologies
                and applying them to solve real-world business problems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Current Position Card */}
        <motion.div
          {...fadeUp(0.2)}
          className="glass-card p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 mb-4 group-hover:scale-110 transition-transform">
            <FaBriefcase size={20} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Current Position
            </p>
            <p className="text-xl font-bold text-white">
              Junior Full-Stack Web Developer
            </p>
            <p className="text-sm text-primary-400 mt-2">
              CORARL HR · 2026–Present
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Full-time
            </p>
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          {...fadeUp(0.3)}
          className="glass-card p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
            <FaGraduationCap size={22} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
              Education
            </p>
            <p className="text-lg font-bold text-white leading-tight">
              Human Resource University
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Bachelor of Computer Science
            </p>
          </div>
        </motion.div>

        {/* Personality / Hobby Card */}
        <motion.div
          {...fadeUp(0.4)}
          className="glass-card p-8 flex items-center justify-center relative overflow-hidden group"
        >
          <div className="text-center">
            <FaCoffee className="text-5xl text-gray-600 mx-auto mb-4 group-hover:text-primary-400 transition-colors duration-500" />
            <p className="text-sm font-medium text-gray-400">
              Fueled by Coffee & Code
            </p>
          </div>
        </motion.div>

        {/* Resume CTA Card */}
        <motion.div
          {...fadeUp(0.5)}
          className="md:col-span-2 glass-card p-0 relative overflow-hidden group hover:border-primary-500/30 transition-colors"
        >
          <a
            href="/resume.pdf"
            download
            className="absolute inset-0 z-10"
            aria-label="Download CV"
          />

          <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

          <div className="h-full flex flex-col sm:flex-row items-center justify-between p-8 sm:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Want to know more?
              </h3>
              <p className="text-gray-400 font-light">
                Explore my professional experience, projects, and technical
                skills in my resume.
              </p>
            </div>

            <div className="mt-6 sm:mt-0 flex-shrink-0 w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-500">
              <FaDownload
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default About;