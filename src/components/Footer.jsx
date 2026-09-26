import { EVENT, NAV_LINKS } from "../data/eventData.js";
import LogoImg from "./LogoImg.jsx";

export default function Footer() {
  return (
    <footer className="site" aria-labelledby="foot-title">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo-row" aria-label="Partner logos">
              <span className="logo-ph dark">
                <LogoImg src={EVENT.logos.mulearn} fallbackSrc={EVENT.logos.mulearnFallback} alt="μLearn PRC logo" />
              </span>
              <span className="logo-ph light">
                <LogoImg src={EVENT.logos.college} fallbackSrc={EVENT.logos.collegeFallback} alt="Providence College of Engineering logo" />
              </span>
            </div>
            <h2 id="foot-title">KARMA MINING</h2>
            <p>{EVENT.tagline}</p>
            <span className="foot-date">{EVENT.shortDate}</span>
          </div>
          <div className="foot-side">
            <h3>Explore</h3>
            <nav className="foot-links" aria-label="Footer">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>
            <h3 className="foot-subhead">Community</h3>
            <p className="foot-note">
              Social links will appear here once official channels are confirmed. No placeholder URLs are included.
            </p>
          </div>
        </div>
        <div className="foot-base">
          <span>© 2026 Karma Mining · A μLearn challenge for first-year students.</span>
          <span>Mine Skills. Earn Karma. Build Your Journey.</span>
        </div>
      </div>
    </footer>
  );
}
