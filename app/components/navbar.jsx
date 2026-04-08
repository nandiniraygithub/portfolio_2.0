"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="fixed w-full px-5 sm:px-10 md:px-20 py-6 flex justify-between items-center font-neue z-50 bg-zinc-900/40 backdrop-blur-xl border-b border-white/5"
        >
            <div className="logo">
                <h1 className="text-2xl font-bold tracking-tighter uppercase text-white">NR.</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex links gap-10">
                {["Home", "Works", "About", "Journey", "Contact"].map((item, index) => (
                    <motion.a
                        href={`#${item.toLowerCase()}`}
                        key={index}
                        whileHover={{ scale: 1.1, color: "#ceea69" }}
                        className="text-sm uppercase tracking-widest font-medium cursor-pointer transition-colors text-white"
                    >
                        {item}
                    </motion.a>
                ))}
            </div> 

            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex flex-col gap-1.5 z-50 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <motion.span
                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                    className="w-6 h-0.5 bg-white block"
                ></motion.span>
                <motion.span
                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                    className="w-6 h-0.5 bg-white block"
                ></motion.span>
                <motion.span
                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                    className="w-6 h-0.5 bg-white block"
                ></motion.span>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
                        className="fixed top-0 left-0 w-full h-screen bg-[#1c1c1c] flex flex-col items-center justify-center gap-10 z-[40]"
                    >
                        {["Home", "Works", "About", "Journey", "Contact"].map((item, index) => (
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                key={index}
                                className="text-4xl uppercase font-bold tracking-tighter text-white hover:text-[#ceea69]"
                                onClick={() => setIsMenuOpen(false)}
                                href={`#${item.toLowerCase()}`}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}