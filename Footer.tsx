import Link from "next/link";

const columns = [
  {
    title: "HOTMESS",
    links: [
      { href: "/", label: "Home" },
      { href: "/shop", label: "Shop" },
      { href: "/radio", label: "Radio" },
      { href: "/records", label: "Records" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/affiliate", label: "Affiliate" },
      { href: "/community", label: "Community" },
      { href: "/press", label: "Press Room" },
      { href: "/about", label: "About" },
      { href: "/accessibility", label: "Accessibility" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/care-disclaimer", label: "Care Disclaimer" },
      { href: "/legal/age-verification", label: "18+ Age Verification" },
      { href: "/legal/data-privacy-hub", label: "Data & Privacy Hub" },
      { href: "/legal/ugc", label: "UGC & Moderation" },
      { href: "/legal/abuse", label: "Abuse & Safety" },
      { href: "/legal/dmca", label: "DMCA/Takedown" },
      { href: "/legal/sponsorships", label: "Sponsorship Disclosures" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl grid gap-12 px-4 py-12 md:grid-cols-3">
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 font-heading text-xl tracking-widest">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.href}><Link className="footer-link" href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} HOTMESS London. Men-only, 18+. Sexy and responsible.
      </div>
    </footer>
  );
}
