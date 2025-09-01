"use client";
import { useEffect, useState } from "react";

type NP = { artist: string; title: string; };

export default function NowPlaying() {
  const [np, setNp] = useState<NP | null>(null);
  const url = process.env.NEXT_PUBLIC_STREAM_URL;
  const meta = process.env.RADIOKING_NOWPLAYING_URL;

  useEffect(() => {
    let t: any;
    if (meta) {
      const fetchNP = async () => {
        try {
          const res = await fetch(meta as string, { cache: "no-store" });
          const data = await res.json();
          const artist = data?.artist || data?.current?.artist || "";
          const title = data?.title || data?.current?.title || "";
          if (artist || title) setNp({ artist, title });
        } catch {}
      };
      fetchNP();
      t = setInterval(fetchNP, 15000);
    }
    return () => t && clearInterval(t);
  }, [meta]);

  return (
    <div className="card flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="badge">Live</span>
        <span className="text-xs text-white/70">HOTMESS RADIO</span>
      </div>
      <div className="h3">Now Playing</div>
      <p className="muted">{np ? `${np.artist} — ${np.title}` : "Tune in. Track info updates here."}</p>
      {url ? (
        <audio src={url as string} controls className="mt-3 w-full" aria-label="HOTMESS Radio stream player" />
      ) : (
        <p className="text-sm text-white/70">Add NEXT_PUBLIC_STREAM_URL to .env to enable the player.</p>
      )}
    </div>
  );
}
