import { TIMELINE } from "../data/eventData.js";

export default function Timeline() {
  return (
    <section className="block" id="timeline" aria-labelledby="timeline-title">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow iris"><span className="dot" />Event timeline</span>
          <h2 className="h2" id="timeline-title">12 days, <span className="gold">four milestones</span></h2>
        </div>
        <ol className="timeline">
          {TIMELINE.map((t, i) => (
            <li key={t.date + t.title} className={`t-item reveal${i === 1 ? " hot" : ""}`} style={{ ["--rd"]: `${i * 70}ms` }}>
              <div className="t-rail" aria-hidden="true">
                <span className="t-dot">{String(i + 1).padStart(2, "0")}</span>
                <span className="t-line" />
              </div>
              <div className="t-body">
                <time>{t.date}</time>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
