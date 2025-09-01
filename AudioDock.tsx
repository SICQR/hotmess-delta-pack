"use client";
import { useEffect, useRef, useState } from "react";

export default function AudioDock() {
  const url = process.env.NEXT_PUBLIC_STREAM_URL;
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onErr = () => setError("Stream unavailable. Check later.");
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    a.addEventListener("error", onErr);
    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("error", onErr);
    };
  }, []);

  if (!url) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto mb-3 max-w-6xl rounded-2xl border border-white/10 bg-white/10 backdrop-blur px-4 py-3 shadow-xl">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="badge">{playing ? "Live" : "Ready"}</span>
            <span className="font-semibold">HOTMESS RADIO</span>
            {error && <span className="text-xs text-red-300">{error}</span>}
          </div>
          <div className="flex items-center gap-3">
            <button
              className="btn-ghost"
              onClick={() => {
                const a = ref.current!;
                if (a.paused) a.play();
                else a.pause();
              }}
              aria-label={playing ? "Pause radio" : "Play radio"}
            >
              {playing ? "Pause" : "Play"}
            </button>
            <audio ref={ref} src={url as string} preload="none" />
          </div>
        </div>
      </div>
    </div>
  );
}
