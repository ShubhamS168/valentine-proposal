import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <>
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500 select-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0.7,
            scale: Math.random() * 0.8 + 0.5
          }}
          animate={{ y: -100 }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 4
          }}
        >
          💖
        </motion.div>
      ))}
    </>
  );
}
