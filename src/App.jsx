import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FloatingHearts from "./components/FloatingHearts";
import NoButton from "./components/NoButton";
import YesButton from "./components/YesButton";
import Celebration from "./components/Celebration";
import BlossomRain from "./components/BlossomRain";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  const celebrationAudioRef = useRef(null);

  const handleYes = () => {
    if (accepted) return;

    setAccepted(true);
    setCelebrating(true);

    // play celebration sound
    if (celebrationAudioRef.current) {
      celebrationAudioRef.current.currentTime = 0;
      celebrationAudioRef.current.play();
    }

    // stop blossoms after 7 seconds
    setTimeout(() => {
      setCelebrating(false);
    }, 7000);
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden flex items-center justify-center
      bg-gradient-to-br from-pink-300 via-rose-200 to-red-300
      transition-all duration-1000
      ${accepted ? "brightness-110 saturate-125" : ""}`}
    >
      {/* background hearts */}
      <FloatingHearts />

      {/* blossom overlay */}
      {celebrating && <BlossomRain />}

      {/* celebration sound */}
      <audio
        ref={celebrationAudioRef}
        src="/sounds/celebrate.mp3"
        preload="auto"
      />

      <AnimatePresence>
        {!accepted ? (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="z-20 bg-white/40 backdrop-blur-xl rounded-3xl p-10 shadow-2xl text-center max-w-md w-full"
          >
            <h1 className="text-4xl font-bold text-rose-600 mb-8">
              Will you be my Valentine? 💖
            </h1>

            <div className="relative w-full h-96 flex items-center justify-center">
              <YesButton
                noCount={noCount}
                onYes={handleYes}
              />
              <NoButton
                noCount={noCount}
                onEscape={() => setNoCount(c => c + 1)}
              />
            </div>
          </motion.div>
        ) : (
          <Celebration />
        )}
      </AnimatePresence>
    </div>
  );
}





// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import FloatingHearts from "./components/FloatingHearts";
// import NoButton from "./components/NoButton";
// import YesButton from "./components/YesButton";
// import Celebration from "./components/Celebration";

// export default function App() {
//   const [noCount, setNoCount] = useState(0);
//   const [accepted, setAccepted] = useState(false);

//   return (
//     <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-200 to-red-300">
//       <FloatingHearts />

//       <AnimatePresence>
//         {!accepted ? (
//           <motion.div
//             key="proposal"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             className="z-10 bg-white/40 backdrop-blur-xl rounded-3xl p-10 shadow-2xl text-center max-w-md w-full"
//           >
//             <h1 className="text-4xl font-bold text-rose-600 mb-8">
//               Will you be my Valentine? 💖
//             </h1>

//             <div className="relative w-full h-96 flex items-center justify-center">
//               <YesButton
//                 noCount={noCount}
//                 onYes={() => setAccepted(true)}
//               />
//               <NoButton
//                 noCount={noCount}
//                 onEscape={() => setNoCount(c => c + 1)}
//               />
//             </div>
//           </motion.div>
//         ) : (
//           <Celebration />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
