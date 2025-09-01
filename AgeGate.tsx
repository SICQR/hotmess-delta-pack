"use client";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/lib/cookies";

export default function AgeGate() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const v = getCookie("hm_age_ok");
    if (!v) setOpen(true);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-6" role="dialog" aria-modal="true" aria-label="Age Verification">
      <div className="card max-w-lg text-center">
        <h2 className="mb-2 font-heading text-2xl">18+ Content</h2>
        <p className="mb-6 text-white/80">
          This site is for adult men (18+) only. By entering, you confirm you are 18+ and consent to seeing adult‑oriented content.
        </p>
        <div className="flex justify-center gap-3">
          <button className="btn" onClick={() => { setCookie("hm_age_ok", "1"); setOpen(false); }}>I’m 18+ — Enter</button>
          <a className="btn-ghost" href="/legal/age-verification" role="button">More about age checks</a>
        </div>
      </div>
    </div>
  );
}
