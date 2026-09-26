import { useEffect, useState } from "react";
import { EVENT } from "../data/eventData.js";

function getPhase(now = new Date()) {
  const start = new Date(EVENT.startISO);
  const end = new Date(EVENT.endISO);
  if (now < start) return { phase: "upcoming", target: start };
  if (now <= end) return { phase: "live", target: end };
  return { phase: "ended", target: null };
}

function diffParts(target, now) {
  const ms = Math.max(0, target - now);
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown() {
  const [now, setNow] = useState(() => new Date());
  const { phase, target } = getPhase(now);
  const parts = target ? diffParts(target, now) : null;

  useEffect(() => {
    if (phase === "ended") return;
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, [phase]);

  return (
    <div className={`container countdown-wrap${phase === "ended" ? " ended" : ""}`}>
      <div
        className="countdown reveal"
        role="timer"
        aria-live="off"
        aria-label={
          phase === "upcoming"
            ? "Countdown to Karma Mining start"
            : phase === "live"
              ? "Countdown to Karma Mining end"
              : "Karma Mining has ended"
        }
      >
        <div className="cd-label">
          <p>{phase === "live" ? "Challenge is live" : phase === "ended" ? "Challenge closed" : "Countdown"}</p>
          <h2>
            {phase === "upcoming" && "Karma Mining Starts In"}
            {phase === "live" && "Mining Ends In"}
            {phase === "ended" && "Karma Mining has ended."}
          </h2>
          {phase === "upcoming" && <span className="status upcoming"><i />16 Aug 2026 · your local time</span>}
          {phase === "live" && <span className="status live"><i />Live now — until 27 Aug 2026</span>}
          {phase === "ended" && <span className="status ended">Thanks for mining with us</span>}
        </div>
        {phase !== "ended" && parts && (
          <div className="cd-grid">
            {[
              [parts.days, "Days"],
              [pad(parts.hours), "Hours"],
              [pad(parts.minutes), "Minutes"],
              [pad(parts.seconds), "Seconds"],
            ].map(([v, l]) => (
              <div className="cd-cell" key={l}>
                <strong>{v}</strong>
                <span>{l}</span>
              </div>
            ))}
            <p className="cd-note">
              {phase === "upcoming"
                ? "Begins 16 August 2026, 00:00 in your browser timezone. Use the time to join your group and meet your volunteer."
                : "Final submissions close 27 August 2026, 23:59. Keep pushing toward 3,000+ Karma."}
            </p>
          </div>
        )}
        {phase === "ended" && (
          <div className="cd-grid">
            <p className="cd-note cd-note--end">
              The 12-day challenge ran 16–27 August 2026. Results for the Student Topper and Top Volunteer
              will be announced below.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
