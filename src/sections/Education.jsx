/**
 * Education Section — two cards for university + training center
 */
import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap, HiLightningBolt, HiExternalLink, HiCalendar } from "react-icons/hi";
import education from "../data/education";

const ICONS = [HiAcademicCap, HiLightningBolt];
const GRAD  = ["from-blue-500/10 to-primary-500/10 border-blue-500/20",
               "from-teal-500/10 to-primary-500/10 border-teal-500/20"];
const ICON_COLOR = ["text-primary-400", "text-teal-400"];

const Education = () => (
  <section id="education" className="py-28 relative overflow-hidden">
    <div className="section-divider mb-28" />

    {/* glow */}
    <div className="pointer-events-none absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-teal-600/8 blur-[120px]" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="section-label">My Journey</p>
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Academic <span className="gradient-text">Background</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {education.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl border bg-gradient-to-br ${GRAD[i]} p-px group h-full flex`}
            >
              <div className="rounded-3xl bg-dark-900/90 backdrop-blur-xl p-10 flex-grow w-full flex flex-col">

                {/* Watermark icon */}
                <div className={`absolute -top-4 -right-4 text-[8rem] ${ICON_COLOR[i]} opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500`}>
                  <Icon />
                </div>

                {/* Badge */}
                <div className={`flex items-center gap-3 mb-6`}>
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white shadow-lg shadow-primary-500/20 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${ICON_COLOR[i]}`}>
                    {item.type}
                  </span>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold text-white mb-1 group-hover:${ICON_COLOR[i]} transition-colors`}>
                  {item.institution}
                </h3>
                <p className={`text-sm font-semibold ${ICON_COLOR[i]} mb-2`}>{item.degree}</p>

                <div className="flex items-center gap-2 text-gray-600 text-xs font-bold uppercase tracking-widest mb-6">
                  <HiCalendar size={13} />
                  {item.period}
                </div>

                <p className="text-gray-400 font-light leading-relaxed flex-grow mb-8">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full glass text-sm font-semibold text-primary-300 hover:text-white hover:gradient-bg border border-white/[0.07] transition-all group/btn"
                >
                  {item.linkText}
                  <HiExternalLink className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  </section>
);

export default Education;
