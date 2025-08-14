'use client';

import { motion } from 'framer-motion';

interface TopRibbonProps {
  text?: string;
  speed?: number;
  className?: string;
}

export default function TopRibbon({ 
  text = "New Cohort Starting Soon • Register Now • It's literally free", 
  speed = 20, 
  className = "" 
}: TopRibbonProps) {
  return (
    <div className={`w-full bg-[#FF0026] border-b-4 border-black text-white overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap py-3"
        animate={{
          x: [0, -300], // This will create a seamless loop
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="text-lg font-semibold px-4">
          {text}
        </span>
        <span className="text-lg font-semibold px-4">
          {text}
        </span>
        <span className="text-lg font-semibold px-4">
          {text}
        </span>
      </motion.div>
    </div>
  );
}
