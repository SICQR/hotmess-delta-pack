"use client";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/lib/cookies";

export default function ConsentBar() {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!getCookie("hm_consent")) setShow(true); }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="mx-auto max-w-6xl m-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
        <p className="text-sm">
          We use cookies for essential site functions and (only with consent) for analytics and marketing. You can change your choice any time in the <a href="/legal/data-privacy-hub">Data & Privacy Hub</a>.
        </p>
        <div className="mt-3 flex gap-3">
          <button className="btn" onClick={() => { setCookie("hm_consent", JSON.stringify({ essential: true, analytics: true, marketing: true })); setShow(false); }}>Accept all</button>
          <button className="btn-ghost" onClick={() => { setCookie("hm_consent", JSON.stringify({ essential: true })); setShow(false); }}>Essential only</button>
          <a className="btn-ghost" href="/legal/data-privacy-hub">Manage choices</a>
        </div>
      </div>
    </div>
  );
}
