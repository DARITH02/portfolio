/**
 * Hero Section — profile photo, name, title, CTA buttons, social icons
 */
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowDown, FaTelegram, FaReact, FaLaravel } from "react-icons/fa";
import { SiAngular, SiDotnet, SiVuedotjs, SiNodedotjs } from "react-icons/si";
import avatar from "../assets/avatar.jpg";

const SOCIALS = [
  { Icon: FaGithub, href: "https://github.com/DARITH02", label: "GitHub" },
  { Icon: FaTelegram, href: "https://t.me/darith_003", label: "Telegram" },

  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/chan.darith.696422/",
    label: "Facebook",
  },
];

/* simple stagger helper */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
  >
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        {/* Left Column — Typography & CTA */}
        <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
          <motion.div
            {...fadeUp(0.15)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-300">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.25)}
            className="text-6xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter mb-8 leading-[1.05]"
          >
            Building <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              digital
            </span>{" "}
            <span className="gradient-text">experiences.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="max-w-xl mx-auto lg:mx-0 text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-10"
          >
            I'm a Junior Software Developer specializing in crafting modern,
            high-performance web applications using <span className="text-white font-medium">.NET Core</span>, <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Node.js</span>, and <span className="text-white font-medium">Laravel</span>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.45)}
            className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full gradient-bg font-bold text-white hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary-500/20"
            >
              Explore My Work
            </a>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-xl text-gray-400 hover:text-white hover:bg-white/5 hover:border-primary-500/30 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Row */}
          <motion.div
            {...fadeUp(0.5)}
            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 border-t border-white/5 pt-8"
          >
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              Tech Stack
            </span>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <div className="flex flex-wrap items-center gap-3">
              {[
                { Icon: SiDotnet, name: ".NET Core" },
                { Icon: FaReact, name: "React" },
                { Icon: SiAngular, name: "Angular" },
                { Icon: SiVuedotjs, name: "Vue" },
                { Icon: SiNodedotjs, name: "Node.js" },
                { Icon: FaLaravel, name: "Laravel" },
              ].map(({ Icon, name }) => (
                <div
                  key={name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-primary-500/35 transition-colors group cursor-default"
                >
                  <Icon className="text-gray-400 group-hover:text-white transition-colors" size={14} />
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column — Visual Anchor / Avatar */}
        <div className="flex-1 w-full max-w-md lg:max-w-none relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse-ring" />

            {/* Main Avatar Container */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-[#0a0e14] border border-white/10 overflow-hidden shadow-2xl p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-dark-800 to-dark-900 border border-white/5 relative group">
                <img
                  src={avatar}
                  alt="Ven Chandarith"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-100 group-hover:saturate-150"
                />
                {/* Inner overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Floating Badges */}
            {/* React Badge - Top Left */}
            <motion.div
              animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-6 px-4 py-3 rounded-2xl glass border border-white/10 shadow-xl flex items-center gap-3 z-20 pointer-events-auto"
            >
              <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-500/20">
                <FaReact />
              </span>
              <span className="text-sm font-semibold text-gray-200">
                React.js
              </span>
            </motion.div>

            {/* Angular Badge - Middle Left */}
            <motion.div
              animate={{ y: [6, -6, 6], x: [-3, 3, -3] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-20 top-36 px-4 py-3 rounded-2xl glass border border-white/10 shadow-xl flex items-center gap-3 z-20 pointer-events-auto"
            >
              <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-lg border border-red-500/20">
                <SiAngular />
              </span>
              <span className="text-sm font-semibold text-gray-200">
                Angular
              </span>
            </motion.div>

            {/* Vue.js Badge - Bottom Left */}
            <motion.div
              animate={{ y: [-10, 10, -10], x: [3, -3, 3] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-10 bottom-16 px-4 py-3 rounded-2xl glass border border-white/10 shadow-xl flex items-center gap-3 z-20 pointer-events-auto"
            >
              <span className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-lg border border-teal-500/20">
                <SiVuedotjs />
              </span>
              <span className="text-sm font-semibold text-gray-200">
                Vue.js
              </span>
            </motion.div>

            {/* .NET Core Badge - Top Right */}
            <motion.div
              animate={{ y: [8, -8, 8], x: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-10 top-16 px-4 py-3 rounded-2xl glass border border-white/10 shadow-xl flex items-center gap-3 z-20 pointer-events-auto"
            >
              <span className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-lg border border-indigo-500/20">
                <SiDotnet />
              </span>
              <span className="text-sm font-semibold text-gray-200">
                .NET Core
              </span>
            </motion.div>

            {/* Node.js Badge - Middle Right */}
            <motion.div
              animate={{ y: [-8, 8, -8], x: [-3, 3, -3] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -right-20 top-44 px-4 py-3 rounded-2xl glass border border-white/10 shadow-xl flex items-center gap-3 z-20 pointer-events-auto"
            >
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/20">
                <SiNodedotjs />
              </span>
              <span className="text-sm font-semibold text-gray-200">
                Node.js
              </span>
            </motion.div>

            {/* Laravel Badge - Bottom Right */}
            <motion.div
              animate={{ y: [10, -10, 10], x: [-3, 3, -3] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -right-8 bottom-24 px-4 py-3 rounded-2xl glass border border-white/10 shadow-xl flex items-center gap-3 z-20 pointer-events-auto"
            >
              <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-lg border border-red-500/20">
                <FaLaravel />
              </span>
              <span className="text-sm font-semibold text-gray-200">
                Laravel
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Scroll cue */}
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-gray-500 hover:text-primary-400 transition-colors"
    >
      <span className="tracking-[0.2em] uppercase font-semibold">
        Scroll Down
      </span>
      <FaArrowDown className="animate-bounce" />
    </motion.a>
  </section>
);

export default Hero;
