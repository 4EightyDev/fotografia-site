"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

export default function ApproachSection() {
  const steps = [
    { number: "01", text: "I meet with the client..." },
    { number: "02", text: "I check my everything..." },
    { number: "03", text: "On the day, I arrive early..." },
    { number: "04", text: "I edit the photos..." },
  ];

  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="w-full max-w-5xl mb-24">
      <h2 className="text-3xl font-light mb-12">My Approach</h2>

      <div className="space-y-12">
        {steps.map((s, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} transition={{ duration: 0.25 }} className="border-l-2 border-black pl-6">
            <h3 className="text-2xl font-light mb-2">{s.number}</h3>
            <p className="text-gray-700 leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}