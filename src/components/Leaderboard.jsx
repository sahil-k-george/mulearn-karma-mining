import { getLeaderboard } from "../data/eventData.js";
import Icon from "./Icon.jsx";

export default function Leaderboard() {
  // Future backend: make this async (fetch / Supabase) — UI below stays the same.
  const board = getLeaderboard();

  return (
    <section className="block" id="leaderboard" aria-labelledby="board-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" />Live standings</span>
          <h2 className="h2" id="board-title">Karma <span className="gold">Leaderboard</span></h2>
          <p className="lead">Rankings refresh as submissions are reviewed during the challenge.</p>
        </div>
        <div className="board reveal">
          <div className="board-top">
            <span className={`live-pill${board.isLive ? " on" : ""}`}>
              <i />{board.isLive ? "LIVE" : "AWAITING DATA"}
            </span>
            <span className="board-meta">
              {board.updatedAt ? `Updated ${board.updatedAt}` : "Season: 16 – 27 Aug 2026"}
            </span>
          </div>
          <div className="table-wrap">
            <table className="board-table">
              <caption className="sr-only">Karma leaderboard placeholder</caption>
              <thead>
                <tr><th scope="col">Rank</th><th scope="col">Participant</th><th scope="col">Group</th><th scope="col">Karma</th></tr>
              </thead>
              <tbody>
                {board.rows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.rank}</td>
                    <td className="await">{r.participant}</td>
                    <td>{r.group}</td>
                    <td>{r.karma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="board-foot">
            <span className="board-ico"><Icon name="bolt" size={18} /></span>
            <p><strong>The leaderboard will be updated during the challenge.</strong><br />{board.notice} No participant names or Karma values are shown until official data is published.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
