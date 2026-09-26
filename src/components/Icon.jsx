export default function Icon({ name, size = 22 }) {
  const s = { width: size, height: size, flex: "none" };
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", ...s };
  switch (name) {
    case "compass":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" /></svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" /></svg>
      );
    case "people":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5M16 4.6a3.5 3.5 0 0 1 0 6.8M17.5 15.3c2 .6 3.3 2 3.9 4.7" /></svg>
      );
    case "group":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2.5" /><path d="M8 21h8M12 17v4M7 9.5h4M7 12.5h7" /></svg>
      );
    case "guide":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><circle cx="12" cy="7.5" r="3.5" /><path d="M4.5 20.5c.9-3.8 3.9-5.7 7.5-5.7s6.6 1.9 7.5 5.7M12 2.5l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" /></svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="m8.5 12.2 2.6 2.6 4.4-5" /></svg>
      );
    case "coin":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5v9M9.2 9.8c0-1 1.2-1.8 2.8-1.8s2.8.8 2.8 1.8-1 1.6-2.8 2-2.8 1-2.8 2 1.2 1.8 2.8 1.8 2.8-.8 2.8-1.8" /></svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M7 4h10v5a5 5 0 0 1-10 0zM7 5H4a1 1 0 0 0-1 1c0 2.5 2 4.5 4.7 4.7M17 5h3a1 1 0 0 1 1 1c0 2.5-2 4.5-4.7 4.7M12 14v4M8.5 21h7M10 18h4" /></svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5V5.5M20 18v3H6.5" /></svg>
      );
    case "hammer":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="m13 6 5 5M8.5 10.5l5 5M14.5 4.5l5 5-2.5 2.5-5-5zM9.5 9.5 4 20l4 1 5.5-9z" /></svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M21 3 10 14M21 3l-7 18-4-7-7-4z" /></svg>
      );
    case "repeat":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M4 8h13l-3-3M20 16H7l3 3" /></svg>
      );
    case "tick":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="m5 12.5 5 5 9-11" /></svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6z" /></svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true"><circle cx="12" cy="12" r="8.5" /></svg>
      );
  }
}
