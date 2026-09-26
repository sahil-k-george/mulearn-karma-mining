import { useEffect, useState } from "react";
import { EVENT, NAV_LINKS } from "../data/eventData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 640 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <header className="nav">
        <nav className="nav-inner" aria-label="Primary">
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">µK</span>
            <span className="brand-text">
              KARMA MINING
              <small>{EVENT.shortDate}</small>
            </span>
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn-gold btn-sm nav-cta" href={EVENT.ctas.primary.href}>
            {EVENT.ctas.primary.label}
          </a>
          <button
            className="hamburger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-gold" href={EVENT.ctas.primary.href} onClick={() => setOpen(false)}>
            {EVENT.ctas.primary.label}
          </a>
        </nav>
      </div>
    </>
  );
}
