"use client";
import { useState } from "react";

export default function DataRequest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("export");
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nRequest: ${type}`);
    window.location.href = `mailto:privacy@hotmessldn.com?subject=Data%20Request&body=${body}`;
  }
  return (
    <div className="py-10 space-y-6">
      <h1 className="h1">Data Request (GDPR)</h1>
      <form onSubmit={submit} className="card grid gap-3 max-w-xl">
        <label className="grid gap-1"><span>Name</span><input className="rounded-xl bg-black/40 p-3 border border-white/15" required value={name} onChange={e=>setName(e.target.value)} /></label>
        <label className="grid gap-1"><span>Email</span><input className="rounded-xl bg-black/40 p-3 border border-white/15" required type="email" value={email} onChange={e=>setEmail(e.target.value)} /></label>
        <label className="grid gap-1">
          <span>Type</span>
          <select className="rounded-xl bg-black/40 p-3 border border-white/15" value={type} onChange={e=>setType(e.target.value)}>
            <option value="export">Export my data</option>
            <option value="delete">Delete my data</option>
          </select>
        </label>
        <button className="btn mt-2" type="submit">Submit</button>
        <p className="text-xs text-white/60">We respond as soon as possible and within statutory timelines.</p>
      </form>
    </div>
  );
}
