"use client";
import { useEffect, useState } from "react";

export default function WetterWatch() {
  const key = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;
  const city = process.env.NEXT_PUBLIC_WEATHER_CITY || "London,GB";
  const [temp, setTemp] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (!key) return;
      try {
        const q = encodeURIComponent(city);
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}&units=metric`, { cache: "no-store" });
        const data = await res.json();
        if (!cancelled && data?.main?.temp != null) setTemp(`${Math.round(data.main.temp)}°C`);
      } catch {}
    }
    run();
  }, [key, city]);
  return (
    <div className="card">
      <div className="badge mb-2">Wetter Watch</div>
      <div className="h3">{city.split(",")[0]}</div>
      <p className="muted">{temp || "Add your OpenWeather key to show live temp."}</p>
    </div>
  );
}
