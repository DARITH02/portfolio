import React from "react";
import { motion } from "framer-motion";
import { HiBriefcase, HiCalendar } from "react-icons/hi";
import experience from "../data/experience";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true }
});

const Experience = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="section-divider mb-28" />

      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/4 right-0 w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-teal-600/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div {...fadeUp(0)} className="mb-24">
          <p className="section-label">Career Path</p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Professional <span className="gradient-text">Experience</span>.
          </h2>
          <p className="text-gray-400 max-w-2xl font-light text-lg">
            A timeline of my professional journey, highlighting key roles and the value I've delivered.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[24px] md:left-1/2 md:-ml-[1.5px] top-4 bottom-4 w-[3px] bg-gradient-to-b from-primary-500/0 via-primary-500/30 to-teal-500/0 hidden sm:block" />

          <div className="space-y-16">
            {experience.map((item, i) => {
              const fadeDirection = i % 2 === 0 ? -40 : 40;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth >= 768 ? fadeDirection : 0, y: typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 50, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 border-4 border-[#0a0a0a] rounded-full bg-gradient-to-tr from-primary-600 to-teal-400 z-10 shadow-lg shadow-primary-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#0a0a0a] rounded-full" />
                  </div>

                  {/* Icon floating outside (optional touch) */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-[4px] border-[#0a0a0a] z-10 transition-transform duration-500 hover:scale-125 hover:rotate-12 ${
                      item.isCurrent 
                        ? "bg-gradient-to-tr from-primary-500 to-primary-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]" 
                        : "bg-dark-800 text-gray-400 border-white/10"
                    }`}>
                      <HiBriefcase size={18} />
                  </motion.div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-20" : "md:pr-20"}`}>
                    <div className="glass-card p-8 md:p-10 group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-500/30">
                      
                      {/* Hover glow inside card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-teal-500/0 group-hover:from-primary-500/5 group-hover:to-teal-500/5 transition-colors duration-500" />
                      
                      <div className="relative z-10">
                        {/* Period Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase shadow-sm ${
                          item.isCurrent 
                            ? "bg-primary-500/15 text-primary-300 border border-primary-500/30" 
                            : "bg-white/[0.03] text-gray-400 border border-white/[0.08]"
                        }`}>
                          <HiCalendar size={14} />
                          {item.period}
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight group-hover:text-primary-400 transition-colors duration-300">
                          {item.role}
                        </h3>
                        <h4 className="text-lg font-bold text-gray-500 mb-6 tracking-wide">
                          {item.company}
                        </h4>

                        <p className="text-gray-300 font-light leading-relaxed text-base lg:text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
