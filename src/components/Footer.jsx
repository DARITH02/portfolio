/**
 * Footer — brand, social icons, nav links, copyright
 */
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

const SOCIALS = [
  { Icon: FaGithub,   href: "https://github.com/venchandarith",          label: "GitHub"   },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/venchandarith", label: "LinkedIn" },
  { Icon: FaFacebook, href: "https://www.facebook.com/venchandarith",    label: "Facebook" },
];

const NAV = ["Home","About","Skills","Projects","Education","Contact"];

const Footer = () => (
  <footer className="relative bg-dark-900 border-t border-white/[0.05] py-16 overflow-hidden">

    {/* top gradient line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Main row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-12 border-b border-white/[0.05]">

        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="text-2xl font-black gradient-text tracking-tight mb-2">Ven Chandarith</p>
          <p className="text-gray-500 text-sm font-light max-w-xs">
            Junior Software Developer based in Phnom Penh, Cambodia.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Socials + back to top */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-3">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:gradient-bg hover:-translate-y-1 transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:gradient-bg transition-all">
              <FaArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-600 text-sm mt-8 font-light">
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-400 font-medium">Ven Chandarith</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
