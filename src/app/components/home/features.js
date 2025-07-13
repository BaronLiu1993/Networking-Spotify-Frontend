"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "1. Scan & Connect",
    description: "Login with Spotify, grab your QR ready to be scanned!",
    bg: "#F8F8F8",
    textColor: "#004875",
  },
  {
    title: "1. One-Time Match",
    description: "Let a friend scan your code, it works once.",
    bg: "#F8F8F8",
    textColor: "#004875",
  },
  {
    title: "1. Vibe & Discover",
    description:
      "See your top tracks, explore artists, and make playlists together.",
    bg: "#F8F8F8",
    textColor: "#004875",
  },
];

export default function Features() {
  return (
    <div className="font-lexend bg-white p-6 md:p-10">
      <div className="font-playfair flex flex-col md:items-center text-2xl mb-6 text-[#004875]">
        <span className="block italic ">how it works</span>
        <span className="font-lexend text-sm md:text-md font-normal">
          start connecting with people now with spotify
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="w-full md:w-[10rem] h-[10rem] rounded-xl text-sm p-4 flex flex-col justify-center items-center text-center cursor-pointer"
            style={{ backgroundColor: feature.bg, color: feature.textColor }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <span className="font-semibold mb-1">{feature.title}</span>
            <span className="text-xs font-light">{feature.description}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
