import Link from "next/link";

export default function Records() {
  return (
    <div className="py-10 space-y-8">
      <header>
        <h1 className="h1">RAW CONVICT RECORDS</h1>
        <p className="muted">Hard house roots. Queer future. Debut anthem ‘HOTMESS’ with Stewart Who & Paul King.</p>
      </header>
      <div className="card">
        <h3 className="h3 mb-2">Out now</h3>
        <ul className="list-disc pl-6 text-white/80 space-y-1">
          <li>‘HOTMESS’ — the launch spark. Vocals: Stewart Who. Production: Paul King.</li>
          <li>Remixes roll every 3 weeks. Club first, web second.</li>
        </ul>
        <div className="mt-4 flex gap-3">
          <Link className="btn" href="/radio">Tune the station</Link>
          <Link className="btn-ghost" href="/affiliate">Apply as a DJ affiliate</Link>
        </div>
      </div>
    </div>
  );
}
