"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

export default function HeroSection() {
  return (
    <motion.section initial="hidden" animate="show" variants={fadeIn} className="w-full max-w-5xl py-20">
      <h4 className="text-sm tracking-widest mb-4">ABOUT ME</h4>
      <h1 className="text-5xl md:text-7xl font-light leading-tight">Giulia</h1>
      <h1 className="text-5xl md:text-7xl font-light mb-6">Anderson</h1>
      <p className="text-gray-600 text-lg mb-10">Photography is the beauty of life, captured.</p>
      <a href="/contact">
        <button className="border border-black px-6 py-3 hover:bg-black hover:text-white transition">Get In Touch</button>
      </a>
    </motion.section>
  );
}