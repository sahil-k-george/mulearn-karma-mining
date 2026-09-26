import { EVENT } from "../data/eventData.js";
import { Squiggle } from "./decor.jsx";
import LogoImg from "./LogoImg.jsx";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-sun" aria-hidden="true" />
      <div className="hero-ring r1" aria-hidden="true" />
      <div className="hero-ring r2" aria-hidden="true" />
      <div className="hero-coin c1" aria-hidden="true">K</div>
      <div className="hero-coin c2" aria-hidden="true">★</div>
      <div className="hero-squiggle" aria-hidden="true">
        <Squiggle color="#111111" width={150} />
      </div>
      <div className="container hero-layout">
        <div>
          <div className="logo-row rise d1" aria-label="Partner logos">
            <span className="logo-ph dark">
              <LogoImg src={EVENT.logos.mulearn} fallbackSrc={EVENT.logos.mulearnFallback} alt="μLearn PRC logo" />
            </span>
            <span className="logo-ph">
              <LogoImg src={EVENT.logos.college} fallbackSrc={EVENT.logos.collegeFallback} alt="Providence College of Engineering logo" />
            </span>
            <span className="logo-ph">[ EVENT LOGO ]</span>
          </div>
          <p className="hero-badge rise d1">
            <span className="pill">12-DAY CHALLENGE</span>
            For 1st-year students · on μLearn
          </p>
          <h1 id="hero-title" className="rise d2">
            <span className="stroke">KARMA</span>
            <br />
            <span className="solid">MINING</span>
          </h1>
          <p className="hero-tag rise d3">
            Mine Skills. <em>Earn Karma.</em> Build Your Journey.
          </p>
          <div className="hero-meta rise d3">
            <span className="meta-chip gold">16 AUG — 27 AUG 2026</span>
            <span className="meta-chip">12 DAYS</span>
            <span className="meta-chip">1ST-YEAR STUDENTS</span>
            <span className="meta-chip">μLEARN</span>
          </div>
          <div className="hero-ctas rise d4">
            <a className="btn btn-gold" href={EVENT.ctas.primary.href}>
              {EVENT.ctas.primary.label} →
            </a>
            <a className="btn btn-ghost" href={EVENT.ctas.secondary.href}>
              {EVENT.ctas.secondary.label}
            </a>
          </div>
          <div className="hero-stats rise d5">
            <div><strong>12</strong><span>Days of tasks</span></div>
            <div><strong>3,000+</strong><span>Karma to qualify</span></div>
            <div><strong>07</strong><span>Steps to topper</span></div>
          </div>
        </div>

        <div className="hero-visual rise d3" aria-hidden="true">
          <div className="coin-burst">+250 Karma<small>task approved</small></div>
          <div className="mine-card main">
            <div className="row">
              <span className="avatar">AR</span>
              <div><b>μJourney Progress</b><small>Level 3 · Explorer</small></div>
            </div>
            <div className="progress"><i style={{ width: "68%" }} /></div>
            <div className="karma-line"><span>2,040 / 3,000 Karma</span><strong>68%</strong></div>
          </div>
          <div className="mine-card task">
            <span className="chip">μJOURNEY · DESIGN</span>
            <div className="row">
              <span className="avatar v">µ</span>
              <div><b>Intro to UI task</b><small>+120 Karma · Beginner</small></div>
            </div>
            <div className="progress"><i style={{ width: "82%", background: "var(--karma-teal)" }} /></div>
            <div className="karma-line"><span>Submitted for review</span><strong>Pending…</strong></div>
          </div>
          <span className="ore o1" /><span className="ore o2" /><span className="ore o3" />
        </div>
      </div>
    </section>
  );
}
