import { motion } from "framer-motion";

export default function YesButton({ noCount, onYes }) {
  return (
    <div
      onClick={onYes}
      className="relative z-50 cursor-pointer"
    >
      <motion.button
        type="button"
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: 1 + noCount * 0.15,
          boxShadow: "0 0 35px rgba(255, 0, 100, 0.8)"
        }}
        transition={{ type: "spring", stiffness: 200 }}
        className="pointer-events-none px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-bold shadow-xl"
      >
        YES 💕
      </motion.button>
    </div>
  );
}



// import { motion } from "framer-motion";

// export default function YesButton({ noCount, onYes }) {
//   return (
//     <motion.button
//       whileTap={{ scale: 0.95 }}
//       animate={{
//         scale: 1 + noCount * 0.15,
//         boxShadow: "0 0 30px rgba(255, 0, 100, 0.7)"
//       }}
//       transition={{ type: "spring", stiffness: 200 }}
//       onClick={onYes}
//       className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-bold shadow-xl z-10"
//     >
//       YES 💕
//     </motion.button>
//   );
// }
