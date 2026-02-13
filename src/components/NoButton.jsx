import { motion } from "framer-motion";
import { useState } from "react";

export default function NoButton({ onEscape, noCount }) {
  const [pos, setPos] = useState({ x: 120, y: 0 });

  const escape = () => {
    onEscape();

    const maxX = 150;
    const maxY = 100;

    setPos({
      x: (Math.random() * maxX * 2) - maxX,
      y: (Math.random() * maxY * 2) - maxY
    });
  };

  return (
    <motion.button
      initial={{ opacity: 1 }}
      animate={{
        x: pos.x,
        y: pos.y,
        rotate: noCount > 3 ? Math.random() * 20 - 10 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 120 + noCount * 30
      }}
      onMouseEnter={escape}
      onClick={escape}
      className="z-50 px-6 py-3 rounded-full bg-white text-gray-700 font-semibold shadow-lg border border-gray-300"
    >
      NO 😅
    </motion.button>
  );
}
