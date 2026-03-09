/**
 * Contact Section — contact info + message form
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaMapMarkerAlt, FaPaperPlane,
  FaGithub, FaLinkedin, FaFacebook,
  FaTelegram,
} from "react-icons/fa";

const SOCIALS = [
  { Icon: FaGithub,   href: "https://github.com/DARITH02",          label: "GitHub",   color: "hover:bg-[#333]"     },
  { Icon: FaTelegram, href: "https://t.me/darith_003", label: "Telegram", color: "hover:bg-[#0077b5]"  },
  { Icon: FaFacebook, href: "https://www.facebook.com/chan.darith.696422/",    label: "Facebook", color: "hover:bg-[#1877f2]"  },
];

const Contact = () => {
  const [form, setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]   = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    /* TODO: wire up to EmailJS / backend */
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="section-divider mb-28" />

      {/* glows */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 rounded-full bg-teal-600/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="section-label">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>

              {/* Email */}
              <div className="flex items-center gap-5 mb-7 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary-400 text-xl group-hover:gradient-bg group-hover:text-white transition-all duration-400 flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                  <a href="mailto:venchandarith@gmail.com" className="text-white hover:text-primary-400 transition-colors font-medium">
                    venchandarith@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 mb-10 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary-400 text-xl group-hover:gradient-bg group-hover:text-white transition-all duration-400 flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Location</p>
                  <p className="text-white font-medium">Phnom Penh, Cambodia</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                {SOCIALS.map(({ Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 rounded-xl glass flex items-center justify-center text-xl text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300 ${color}`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="p-8 rounded-2xl border border-primary-500/10 bg-gradient-to-br from-primary-500/5 to-teal-500/5 shadow-sm">
              <p className="text-gray-300 font-light leading-relaxed italic text-sm">
                "I'm actively seeking junior developer roles and open to freelance collaborations.
                I typically respond within 24 hours — let's build something great together!"
              </p>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Name</label>
                  <input
                    type="text" name="name" required
                    value={form.name} onChange={handleChange}
                    placeholder="Ven Chandarith"
                    className="form-input"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Email</label>
                  <input
                    type="email" name="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                <input
                  type="text" name="subject"
                  value={form.subject} onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="form-input"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea
                  name="message" rows={5} required
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl gradient-bg font-black text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary-500/20 group"
              >
                {sent ? "Message Sent ✓" : "Send Message"}
                {!sent && <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
