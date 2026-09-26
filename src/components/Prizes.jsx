import Icon from "./Icon.jsx";

export default function Prizes() {
  return (
    <section className="block" id="prizes" aria-labelledby="prizes-title">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow"><span className="dot" />Prizes</span>
          <h2 className="h2" id="prizes-title">Recognising the <span className="gold">top miners</span></h2>
          <p className="lead">Prizes honour the highest Karma earner and the volunteer behind the highest-performing group.</p>
        </div>
        <div className="duo">
          <article className="duo-card reveal">
            <div className="trophy"><Icon name="trophy" size={26} /></div>
            <h3>Top Student</h3>
            <p>Prize for the highest Karma earner.</p>
            <div className="tba">PRIZE — TO BE ANNOUNCED<small>Details shared during the challenge</small></div>
          </article>
          <article className="duo-card reveal" style={{ ["--rd"]: "90ms" }}>
            <div className="trophy"><Icon name="bolt" size={26} /></div>
            <h3>Top Volunteer</h3>
            <p>Prize for the volunteer leading the highest-performing group.</p>
            <div className="tba">PRIZE — TO BE ANNOUNCED<small>Details shared during the challenge</small></div>
          </article>
        </div>
        <p className="prize-note reveal">Only the categories above are confirmed. No amounts, brands or additional rewards are announced at this time.</p>
      </div>
    </section>
  );
}
