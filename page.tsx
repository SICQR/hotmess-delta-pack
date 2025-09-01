import Link from "next/link";

const CATS = [
  { slug: "raw", name: "RAW", blurb: "Heavy, leather‑luxury grit. For the ones who don’t blink.", alt: "Close-up of RAW leather vest with crown logo emboss." },
  { slug: "hung", name: "HUNG", blurb: "Oversized, bold, gym‑flex. Not for the shy.", alt: "Back view of oversized HUNG hoodie in locker room." },
  { slug: "high", name: "HIGH", blurb: "Varsity‑coded, locker‑room fantasy. Hotmess High.", alt: "Varsity jacket tossed on bleachers under stadium lights." },
  { slug: "super", name: "SUPER", blurb: "Limited, playful, exaggerated. Blink and you miss it.", alt: "SUPER drop tee with neon foil under club light." },
];

export default function Shop() {
  return (
    <div className="py-10 space-y-10">
      <header className="space-y-2">
        <h1 className="h1">Shop HOTMESS</h1>
        <p className="muted">RAW / HUNG / HIGH plus limited SUPER drops. Ships discreetly.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {CATS.map((c) => (
          <div className="card" key={c.slug}>
            <div className="badge mb-2">{c.name}</div>
            <h3 className="h3">{c.blurb}</h3>
            <p className="mt-2 text-white/70 text-sm">Alt image: {c.alt}</p>
            <div className="mt-4 flex gap-3">
              <Link className="btn" href={`/shop/${c.slug}`}>Explore {c.name}</Link>
              <Link className="btn-ghost" href="/affiliate">Earn as an affiliate</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
