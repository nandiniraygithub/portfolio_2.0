"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

export function Footer() {
  return (
    <div id="contact" className="w-full min-h-screen rounded-tr-6xl rounded-tl-6xl bg-[#f1f1f1] text-black px-5 sm:px-10 py-20 font-neue">

      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* LEFT BIG TEXT */}
        <div className="flex flex-col justify-between h-[30vh] lg:h-auto">
          <div className="text-[12vw] lg:text-[10vw] font-bold leading-[0.9] uppercase tracking-tighter">
            Hire <br /> Me
          </div>
          <motion.a
            href="mailto:nandiniray@email.com"
            whileHover={{ x: 10 }}
            className="flex items-center gap-2 text-2xl font-medium mt-10 hover:underline"
          >
            nandini16ray@gmail.com<ArrowUpRight />
          </motion.a>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-wrap gap-10 sm:gap-20">

          {/* SOCIAL */}
          <div>
            <p className="mb-6 text-zinc-500 uppercase text-sm tracking-widest">Socials</p>
            <div className="flex flex-col gap-2 text-xl">
              {[
                { name: "LinkedIn", href: "https://www.linkedin.com/in/nandini-ray16/" },
                { name: "GitHub", href: "https://github.com/nandiniraygithub" },
                { name: "Instagram", href: "https://www.instagram.com/being_nandini16/" }
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ x: 5 }} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-4"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <p className="mb-6 text-zinc-500 uppercase text-sm tracking-widest">Location</p>
            <div className="flex flex-col gap-4 text-xl">
              <div>
                <p>New Delhi, India</p>
                <p className="text-zinc-500">Remote Worldwide</p>
              </div>
            </div>
          </div>

          {/* RESUME */}
          <div>
            <p className="mb-6 text-zinc-500 uppercase text-sm tracking-widest">Resources</p>
            <motion.a
              href="/nandini.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full uppercase text-sm font-bold"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-32 border-t border-zinc-300 pt-10 gap-4">

        {/* NAME */}
        <h1 className="text-3xl font-bold lowercase tracking-tighter">
          nandini ray.
        </h1>

        {/* COPYRIGHT */}
        <p className="text-sm text-zinc-500 font-medium">
          © {new Date().getFullYear()} Handcrafted with ❤️
        </p>

      </div>

    </div>
  );
}