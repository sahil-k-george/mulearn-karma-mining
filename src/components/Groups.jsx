import { VOLUNTEER_POINTS } from "../data/eventData.js";
import Icon from "./Icon.jsx";

export default function Groups() {
  return (
    <section className="block" id="groups" aria-labelledby="groups-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow iris"><span className="dot" />Groups & volunteers</span>
          <h2 className="h2" id="groups-title">You never mine <span className="gold">alone</span></h2>
          <p className="lead">Everyone is placed in a group with a dedicated volunteer to keep momentum high across all 12 days.</p>
        </div>
        <div className="groups-grid">
          <article className="group-card reveal">
            <span className="icon-sq"><Icon name="people" /></span>
            <h3>Participants</h3>
            <p>Students join their assigned groups and work through μJourney tasks — sharing progress, doubts and wins along the way.</p>
          </article>
          <article className="group-card reveal" style={{ ["--rd"]: "90ms" }}>
            <span className="icon-sq iris"><Icon name="guide" /></span>
            <h3>Volunteers</h3>
            <p>Each group has a volunteer who helps participants:</p>
            <ul>
              {VOLUNTEER_POINTS.map((v) => (
                <li key={v}><Icon name="tick" size={18} />{v}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="chain reveal" aria-label="Flow: Group to Volunteer to Participants to Tasks to Karma">
          <span className="node">GROUP</span><span className="arr">→</span>
          <span className="node alt">VOLUNTEER</span><span className="arr">→</span>
          <span className="node">PARTICIPANTS</span><span className="arr">→</span>
          <span className="node alt">TASKS</span><span className="arr">→</span>
          <span className="node">KARMA</span>
        </div>
      </div>
    </section>
  );
}
