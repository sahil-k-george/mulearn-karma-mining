import Icon from "./Icon.jsx";

export default function Competition() {
  return (
    <section className="block" id="competition" aria-labelledby="comp-title">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" />Competition</span>
          <h2 className="h2" id="comp-title">Two titles. <span className="gold">Twelve days.</span></h2>
          <p className="lead">Individual brilliance and group effort both get their spotlight.</p>
        </div>
        <div className="duo">
          <article className="duo-card reveal">
            <div className="trophy"><Icon name="trophy" size={26} /></div>
            <h3>Student Topper</h3>
            <p>The student who earns the <strong className="hl-orange">highest Karma points</strong> during the challenge will be recognised as the Student Topper.</p>
            <div className="tba">TOP STUDENT — TO BE ANNOUNCED<small>Winners declared after 27 Aug 2026</small></div>
          </article>
          <article className="duo-card teal-accent reveal" style={{ ["--rd"]: "90ms" }}>
            <div className="trophy"><Icon name="guide" size={26} /></div>
            <h3>Top Volunteer</h3>
            <p>The volunteer whose group achieves the <strong className="hl-teal">highest overall Karma</strong> will be recognised as the Top Volunteer.</p>
            <div className="tba">TOP VOLUNTEER — TO BE ANNOUNCED<small>Winners declared after 27 Aug 2026</small></div>
          </article>
        </div>
      </div>
    </section>
  );
}
