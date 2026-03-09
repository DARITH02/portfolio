/**
 * Skills Section — Bento Grid for Technical Expertise
 */
import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";

const ACCENT = {
  blue:    "from-blue-500/10 to-transparent border-blue-500/20 text-blue-400 group-hover:border-blue-500/50",
  teal:  "from-teal-500/10 to-transparent border-teal-500/20 text-teal-400 group-hover:border-teal-500/50",
  emerald: "from-emerald-500/10 to-transparent border-emerald-500/20 text-emerald-400 group-hover:border-emerald-500/50",
  orange:  "from-orange-500/10 to-transparent border-orange-500/20 text-orange-400 group-hover:border-orange-500/50",
};

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true }
});

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="section-label">Capabilities</p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Technical <span className="gradient-text">Arsenal</span>.
          </h2>
          <p className="text-gray-400 max-w-xl font-light text-lg">
            A comprehensive overview of the technologies and tools I employ to build scalable, high-performance applications.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((group, i) => {
            const accentClasses = ACCENT[group.accent] || ACCENT.blue;
            // First item spans 2 columns on extra large screens for a masonry bento feel
            const isWide = i === 0;

            return (
              <motion.div
                key={group.category}
                {...fadeUp(0.1 + (i * 0.1))}
                className={`glass-card relative overflow-hidden group flex flex-col p-8 transition-colors duration-500 ${isWide ? 'xl:col-span-2' : 'xl:col-span-1 border-white/5'}`}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-100 ${accentClasses.split(' ').filter(c => c.startsWith('from-') || c.startsWith('to-')).join(' ')}`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl ${accentClasses.split(' ').find(c => c.startsWith('text-'))} transition-transform duration-300 group-hover:scale-110`}>
                      {group.category[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{group.category}</h3>
                      <p className="text-sm text-gray-500 font-medium">{group.items.length} Technologies</p>
                    </div>
                  </div>

                  {/* Tech Grid */}
                  <div className={`grid gap-3 ${isWide ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2'} mt-auto`}>
                    {group.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:bg-white/[0.06] group-hover:border-white/10 transition-colors"
                      >
                        <skill.icon className={`text-xl ${accentClasses.split(' ').find(c => c.startsWith('text-') || c === 'text-white')}`} />
                        <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors truncate">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
