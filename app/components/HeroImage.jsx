"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "./variants";

export default function HeroImage() {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="w-full max-w-5xl mb-20">
      <Image src="/images/pD3N8Ztd3oyIbPjTGGfyJNFFp8Q.jpg" alt="Giulia Portrait" width={1600} height={900} className="w-full object-cover" />
    </motion.div>
  );
}