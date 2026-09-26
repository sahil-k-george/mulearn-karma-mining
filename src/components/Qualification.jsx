import { EVENT } from "../data/eventData.js";

export default function Qualification() {
  return (
    <section className="block" id="qualification" aria-labelledby="qual-title">
      <div className="container">
        <div className="qual-banner reveal">
          <div className="qual-token-wrap">
            <div className="qual-token" aria-hidden="true" />
            <div className="qual-number" aria-label={`${EVENT.qualificationKarma} Karma`}>
              3,000<small>+ KARMA</small>
            </div>
          </div>
          <div className="qual-body">
            <span className="eyebrow"><span className="dot" />Qualification</span>
            <h2 id="qual-title">Earn a minimum of 3,000 Karma to qualify.</h2>
            <p>
              There is no single fixed task path. Participants can explore μJourney and choose
              tasks according to their interests and learning goals.
            </p>
            <p className="qual-sub">
              Karma varies by task — harder, higher-effort submissions earn more. Mix small wins
              with stretch tasks to get there faster.
            </p>
            <div className="qual-ticks">
              <span>Any skill category</span>
              <span>Multiple submissions</span>
              <span>Reviewed tasks only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
