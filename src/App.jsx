import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Countdown from "./components/Countdown.jsx";
import About from "./components/About.jsx";
import Structure from "./components/Structure.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Qualification from "./components/Qualification.jsx";
import Groups from "./components/Groups.jsx";
import Competition from "./components/Competition.jsx";
import Prizes from "./components/Prizes.jsx";
import Timeline from "./components/Timeline.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

const TICKER = ["EXPLORE", "LEARN", "BUILD", "SUBMIT", "EARN KARMA", "REPEAT", "μJOURNEY", "3,000+ KARMA"];

function Ticker() {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row.map((t, i) => (
          <span key={i}><b>•</b>&nbsp;&nbsp;{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Ticker />
        <Countdown />
        <About />
        <Structure />
        <HowItWorks />
        <Qualification />
        <Groups />
        <Competition />
        <Prizes />
        <Timeline />
        <Leaderboard />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
