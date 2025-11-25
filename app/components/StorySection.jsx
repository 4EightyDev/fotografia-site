"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "./variants";

export default function StorySection() {
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="w-full max-w-5xl mb-24 space-y-8">
      <h2 className="text-3xl font-light">My Story</h2>

      <p className="text-gray-700 leading-relaxed">Hi, I'm Giulia Anderson, a photographer based in San Francisco...</p>

      <Image src="/images/2AdjhgGSRqD2VZDKSrMJb5N9Q6E.jpg" width={1600} height={900} alt="Story 1" />
      <Image src="/images/taX8jcAtOhfwtby6db8eRXeWQ0Y.jpg" width={1600} height={900} alt="Story 2" />
      <Image src="/images/99JsskDeBOy7wnGIK1BdfVkpPb4.jpg" width={1600} height={900} alt="Story 3" />

      <p className="text-gray-700 leading-relaxed">I hold a Fine Arts degree...</p>
      <p className="text-gray-700 leading-relaxed">When I'm not shooting...</p>

      <Image src="/images/IyHa7Wl6q64TJ156Y2HvqvBn2A.jpg" width={1600} height={900} alt="Story 4" />
    </motion.section>
  );
}