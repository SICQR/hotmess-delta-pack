"use client";
import { useState } from "react";

export default function AffiliateApply() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [links, setLinks] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLinks/Audience: ${links}`
    );
    window.location.href = `mailto:affiliates@hotmessldn.com?subject=Affiliate%20Application&body=${body}`;
  }

  return (
    <div className="py-10 space-y-6">
      <h1 className="h1">Affiliate Application</h1>
      <form onSubmit={submit} className="card grid gap-3 max-w-xl">
        <label className="grid gap-1">
          <span>Name</span>
          <input className="rounded-xl bg-black/40 p-3 border border-white/15" required value={name} onChange={e=>setName(e.target.value)} />
        </label>
        <label className="grid gap-1">
          <span>Email</span>
          <input className="rounded-xl bg-black/40 p-3 border border-white/15" required type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </label>
        <label className="grid gap-1">
          <span>Links & Audience</span>
          <textarea className="rounded-xl bg-black/40 p-3 border border-white/15" rows={4} value={links} onChange={e=>setLinks(e.target.value)} />
        </label>
        <button className="btn mt-2" type="submit">Apply</button>
        <p className="text-xs text-white/60">We disclose paid promos/affiliate links across all channels.</p>
      </form>
    </div>
  );
}
