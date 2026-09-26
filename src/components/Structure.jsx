import { STRUCTURE_STEPS } from "../data/eventData.js";
import Icon from "./Icon.jsx";

export default function Structure() {
  return (
    <section className="block" id="journey" aria-labelledby="structure-title">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" />Event structure</span>
          <h2 className="h2" id="structure-title">From joining to <span className="gold">3,000 Karma</span></h2>
          <p className="lead">Seven clear stages. Follow the vein, stack your Karma, and grow with your group.</p>
        </div>
        <ol className="struct-list">
          {STRUCTURE_STEPS.map((s, i) => (
            <li
              key={s.no}
              className={`step-card reveal${s.no === "06" ? " qual" : ""}`}
              style={{ ["--rd"]: `${i * 60}ms` }}
            >
              <span className="step-no" aria-hidden="true">{s.no}</span>
              <span className="s-icon"><Icon name={s.icon} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
