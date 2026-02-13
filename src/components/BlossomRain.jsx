import { motion } from "framer-motion";

export default function BlossomRain() {
  return (
    <>
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 z-40 pointer-events-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -50,
            opacity: 0,
            scale: Math.random() * 0.6 + 0.4,
          }}
          animate={{
            y: window.innerHeight + 50,
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            delay: Math.random() * 1.5,
            ease: "easeInOut",
          }}
        >
          🌸
        </motion.div>
      ))}
    </>
  );
}
