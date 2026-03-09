import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Home",      href: "#home"      },
  { label: "About",     href: "#about"     },
  { label: "Skills",    href: "#skills"    },
  { label: "Experience",href: "#experience"},
  { label: "Projects",  href: "#projects"  },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact"   },
];

const Navbar = () => {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-4 lg:pt-6 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto transition-all duration-500 rounded-full flex items-center justify-between px-5 sm:px-8 py-3 ${
          scrolled
            ? "glass border border-white/[0.08] shadow-2xl shadow-black/40 w-full max-w-6xl bg-[#0a0a0a]/70 backdrop-blur-md"
            : "w-full max-w-7xl bg-transparent"
        }`}
      >

        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl sm:text-2xl font-black gradient-text tracking-tight select-none"
        >
          Ven Chandarith
        </motion.a>

        {/* Desktop links - shown on lg and above since 7 links might overflow on md */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-gray-300 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 h-px w-0 bg-gradient-to-r from-primary-400 to-purple-400 transition-all duration-300 group-hover:w-1/2 group-hover:left-[25%]" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="ml-3 xl:ml-6 px-6 py-2.5 rounded-full gradient-bg text-white text-sm font-bold hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary-500/20"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 text-gray-300 hover:text-white transition-colors pointer-events-auto"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 lg:hidden glass border border-white/[0.08] rounded-3xl shadow-2xl overflow-hidden z-40 bg-[#0a0a0a]/95 backdrop-blur-3xl"
          >
            <div className="p-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px w-full bg-white/10 my-2" />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 mx-2 px-4 py-3.5 rounded-xl text-center font-bold text-white gradient-bg shadow-lg shadow-primary-500/20"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
