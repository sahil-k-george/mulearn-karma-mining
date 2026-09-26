import { ABOUT_CARDS, OBJECTIVE } from "../data/eventData.js";
import Icon from "./Icon.jsx";

export default function About() {
  return (
    <section className="block" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" />About Karma Mining</span>
          <h2 className="h2" id="about-title">{OBJECTIVE.title}</h2>
          <p className="lead">
            Karma Mining is a 12-day skill-building challenge designed for first-year students.
            Participants can explore the μLearn ecosystem, discover tasks through μJourney,
            learn practical skills, and earn Karma by completing and submitting their work.
          </p>
        </div>

        <div className="objective-grid">
          <blockquote className="objective-quote reveal">
            “Encourage first-year students to <mark>explore μLearn</mark>, develop new{" "}
            <mark>technical and soft skills</mark> through practical tasks, and actively{" "}
            <mark>engage with the community</mark>.”
          </blockquote>
          <div className="pillar-list">
            {OBJECTIVE.pillars.map((p, i) => (
              <div className="pillar reveal" key={p.title} style={{ ["--rd"]: `${i * 70}ms` }}>
                <span className={`icon-sq${i === 1 ? " iris" : ""}`}><Icon name={p.icon} /></span>
                <div><b>{p.title}</b><p>{p.text}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-grid">
          {ABOUT_CARDS.map((c, i) => (
            <article className="about-card reveal" key={c.key} style={{ ["--rd"]: `${i * 60}ms` }}>
              <span className="icon-sq"><Icon name={c.icon} /></span>
              <b>{c.title}</b>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
        <div className="about-note reveal">
          <Icon name="spark" />
          <p><strong>No fixed track.</strong> You are not restricted to a single skill category — mix design, code, content, and community tasks however you like.</p>
        </div>
      </div>
    </section>
  );
}
