"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "./variants";

export default function TestimonialSection() {
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="w-full max-w-5xl pb-20 text-center">
      <Image src="/images/su5ufNBvdI8kWpEwC6rWemZjfA.jpg" width={1600} height={900} alt="Client" className="w-full object-cover mb-10" />

      <p className="text-xl italic mb-4">"Working with Giulia was such a pleasure! ..."</p>
      <h4 className="text-lg tracking-widest">Giulia</h4>
      <p className="text-gray-500 text-sm">PROFESSIONAL PHOTOGRAPHER</p>
    </motion.section>
  );
}