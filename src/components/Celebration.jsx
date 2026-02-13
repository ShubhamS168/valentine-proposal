import { motion } from "framer-motion";
import Slideshow from "./Slideshow";
import MusicPlayer from "./MusicPlayer";

export default function Celebration() {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="z-10 bg-white/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl text-center max-w-lg w-full"
    >
      <motion.h1
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-4xl font-bold text-rose-600 mb-4"
      >
        YAYYY!! 💞
      </motion.h1>

      <p className="text-lg text-rose-700 mb-6">
        You just made my Valentine’s Day perfect 🌹
      </p>


      <Slideshow />
      <MusicPlayer />
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 text-center text-rose-400 text-sm"
      >
        Made with sheer joy & love 💖
      </motion.footer>

    </motion.div>
    
  );
}
