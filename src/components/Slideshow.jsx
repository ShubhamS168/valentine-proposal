
// 3
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- SLIDES ---------------- */
const slides = [
  { emoji: "😂", title: "When I’m fine", text: "But actually I just want you" },
  { emoji: "💑", title: "Love isn’t perfect", text: "But it’s perfect with you" },
  { emoji: "🥹", title: "You’re my safe place", text: "Even on my worst days" },
  { emoji: "🌹", title: "I choose you", text: "Today. Tomorrow. Always." },
  { emoji: "🫂", title: "This could be us", text: "And I’d never get bored" }
];

/* ---------------- SONGS ---------------- */
const BASE = import.meta.env.BASE_URL;

const songs = [
  { label: "Romantic 💕", src: `${BASE}music/janam-janam.mp3` },
  { label: "Bollywood 🎥", src: `${BASE}music/tum-se-hi.mp3` },
  { label: "Lo-Fi 🌙", src: `${BASE}music/iktara-lofi.mp3` },
  { label: "Emotional 🥹", src: `${BASE}music/agar-tum-saath-ho.mp3` }
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🔑 Web Audio (NOT <audio>)
  const audioRef = useRef(null);

  /* Auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  /* 🎶 GitHub Pages–proof audio toggle */
  const toggleSong = (src) => {
  // 1️⃣ No audio yet → create & play
    if (!audioRef.current) {
      const audio = new Audio(src);
      audio.loop = true;
      audio.volume = 0.8;
      audio.play().catch(() => {});
      audioRef.current = audio;
      setCurrentSong(src);
      setIsPlaying(true);
      return;
    }

    // 2️⃣ Same song clicked → pause / resume
    if (currentSong === src) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      return;
    }

    // 3️⃣ Different song clicked → switch
    audioRef.current.pause();
    audioRef.current.src = src;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
    setCurrentSong(src);
    setIsPlaying(true);
  };


  // const toggleSong = (src) => {
  //   if (audioRef.current) {
  //     if (audioRef.current.src.includes(src)) {
  //       if (!audioRef.current.paused) {
  //         audioRef.current.pause();
  //         setIsPlaying(false);
  //         return;
  //       }
  //     } else {
  //       audioRef.current.pause();
  //     }
  //   }

  //   const audio = new Audio(src);
  //   audio.loop = true;
  //   audio.volume = 0.8;

  //   audio.play()
  //     .then(() => setIsPlaying(true))
  //     .catch(() => {});

  //   audioRef.current = audio;
  //   setCurrentSong(src);
  // };


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
      </div>
    </div>
  );
}

