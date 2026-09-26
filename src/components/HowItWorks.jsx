import { HOW_IT_WORKS } from "../data/eventData.js";
import Icon from "./Icon.jsx";

export default function HowItWorks() {
  return (
    <section className="block" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow iris"><span className="dot" />How it works</span>
          <h2 className="h2" id="how-title">Choose → Complete → Submit → <span className="gold">Earn</span> → Repeat</h2>
          <p className="lead">A simple loop you can run every single day of the challenge. Small tasks compound into big Karma.</p>
        </div>
        <div className="how-flow">
          {HOW_IT_WORKS.map((s, i) => (
            <article className="how-card reveal" key={s.title} style={{ ["--rd"]: `${i * 70}ms` }}>
              <span className="n">STEP {i + 1}</span>
              <div className="how-icon"><Icon name={s.icon} size={24} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <div className="how-cta reveal">
          <a className="btn btn-gold" href="#qualification">See the 3,000 Karma goal →</a>
          <span>Different tasks carry different Karma — pick what suits your goals.</span>
        </div>
      </div>
    </section>
  );
}
