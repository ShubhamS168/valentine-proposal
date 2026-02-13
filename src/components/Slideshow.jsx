// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const slides = [
//   "💑 Love is not about perfection",
//   "😂 You + Me = Chaos",
//   "💖 Forever starts today",
//   "🌹 I choose you every day",
//   "📸 Your special memory here"
// ];

// export default function Slideshow() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((i) => (i + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="h-24 flex items-center justify-center text-xl text-rose-700 mb-4"
//     >
//       {slides[index]}
//     </motion.div>
//   );
// }






// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     text: "💑 Love is not about perfection",
//     sub: "It’s about choosing each other every day"
//   },
//   {
//     text: "😂 You + Me = Chaos",
//     sub: "And somehow… it works perfectly"
//   },
//   {
//     text: "💖 Forever starts today",
//     sub: "No pressure. Just infinity 😌"
//   },
//   {
//     text: "🌹 I choose you every day",
//     sub: "In every lifetime"
//   },
//   {
//     text: "📸 Our story belongs here",
//     sub: "Replace this with your favorite memory"
//   }
// ];

// const slideVariants = {
//   enter: {
//     opacity: 0,
//     scale: 0.9,
//     y: 30,
//     filter: "blur(6px)"
//   },
//   center: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     filter: "blur(0px)"
//   },
//   exit: {
//     opacity: 0,
//     scale: 1.05,
//     y: -30,
//     filter: "blur(6px)"
//   }
// };

// export default function Slideshow() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((i) => (i + 1) % slides.length);
//     }, 3500);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full mt-6">
//       {/* Slide Card */}
//       <div className="relative h-40 flex items-center justify-center overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="absolute bg-white/70 backdrop-blur-xl rounded-2xl px-8 py-6 shadow-xl text-center max-w-md"
//           >
//             <p className="text-2xl font-semibold text-rose-600">
//               {slides[index].text}
//             </p>
//             <p className="text-sm text-rose-500 mt-2">
//               {slides[index].sub}
//             </p>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Dots Navigation */}
//       <div className="flex justify-center gap-2 mt-4">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-2 w-2 rounded-full transition-all ${
//               i === index
//                 ? "bg-rose-500 w-6"
//                 : "bg-rose-300 hover:bg-rose-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- SLIDES ---------------- */
const slides = [
  {
    emoji: "😂",
    title: "When I say I’m fine",
    text: "But actually I just want you"
  },
  {
    emoji: "💑",
    title: "Love isn’t perfect",
    text: "But it’s perfect with you"
  },
  {
    emoji: "🥹",
    title: "You’re my safe place",
    text: "Even on my worst days"
  },
  {
    emoji: "🌹",
    title: "I choose you",
    text: "Today. Tomorrow. Always."
  },
  {
    emoji: "🫂",
    title: "This could be us",
    text: "And I’d never get bored"
  }
];

/* ---------------- SONGS ---------------- */
const songs = [
  { label: "Romantic 💕", src: "/music/Janam_Janam.mp3" },
  { label: "Bollywood 🎥", src: "/music/tum_se_hi.mp3" },
  { label: "Lo-Fi 🌙", src: "/music/Iktara_Lofi.mp3" },
  { label: "Emotional 🥹", src: "/music/Agar Tum Saath Ho.mp3" }
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
//   const [currentSong, setCurrentSong] = useState(null);
//   const audioRef = useRef(null);


  /* Auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
    }, []);


    const toggleSong = (src) => {
    const audio = audioRef.current;
    if (!audio) return;

    // Same song clicked
    if (currentSong === src) {
        if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        } else {
        audio.play();
        setIsPlaying(true);
        }
    } 
    // Different song clicked
    else {
        audio.pause();
        audio.src = src;
        audio.currentTime = 0;
        audio.play();
        setCurrentSong(src);
        setIsPlaying(true);
    }
    };

  /* Play selected song */
//   const playSong = (src) => {
//     if (!audioRef.current) return;
//     audioRef.current.src = src;
//     audioRef.current.play();
//     setCurrentSong(src);
//   };

  return (
    <div className="w-full mt-6">
      {/* -------- Slideshow -------- */}
      <div className="relative h-44 flex items-center justify-center overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md shadow-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6"
          >
            <div className="text-5xl mb-3">{slides[index].emoji}</div>
            <h3 className="text-xl font-bold text-rose-600">
              {slides[index].title}
            </h3>
            <p className="text-rose-500 mt-1">
              {slides[index].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* -------- Dots -------- */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-rose-500" : "bg-rose-300"
            }`}
          />
        ))}
      </div>

      {/* -------- Music Section -------- */}
      <div className="mt-6">
        <h4 className="text-rose-600 font-semibold mb-3 text-center">
          Choose the vibe 🎶
        </h4>

        <div className="flex flex-wrap gap-3 justify-center">
          {songs.map((song) => (
            <button
              key={song.src}
              onClick={() => toggleSong(song.src)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition ${
                currentSong === song.src && isPlaying
                  ? "bg-rose-500 text-white"
                  : "bg-white/70 text-rose-600 hover:bg-rose-100"
              }`}
            >
              {song.label}
            </button>
          ))}
        </div>

        <audio ref={audioRef} />
      </div>
    </div>
  );
}
