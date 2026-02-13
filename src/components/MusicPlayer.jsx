import { useState } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mt-6">
      <audio
        id="valentine-audio"
        src="/music/love.mp3"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {/* <button
        onClick={() => {
          const audio = document.getElementById("valentine-audio");
          playing ? audio.pause() : audio.play();
        }}
        className="px-6 py-2 rounded-full bg-rose-500 text-white font-semibold shadow-md hover:bg-rose-600 transition"
      >
        {playing ? "Pause 💕" : "Play Music 🎶"}
      </button> */}
    </div>
  );
}
