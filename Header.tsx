"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-heading tracking-widest" aria-label="Go to HOTMESS home">
            HOT<span className="text-brand">MESS</span>
          </Link>
          <nav className="hidden gap-6 md:flex" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="nav-link">{n.label}</Link>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 md:hidden">
          <nav className="mx-auto max-w-6xl grid gap-2 p-4" aria-label="Mobile">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="nav-link" onClick={() => setOpen(false)}>{n.label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
