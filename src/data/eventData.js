/* Central event data — edit here instead of editing components.
   Future backend: replace leaderboard + helpers with API / Supabase calls. */

export const EVENT = {
  name: "Karma Mining",
  tagline: "Mine Skills. Earn Karma. Build Your Journey.",
  shortDate: "16 AUG — 27 AUG 2026",
  longDate: "16 August – 27 August 2026",
  durationLabel: "12 days",
  audience: "1st-year students",
  platform: "μLearn",
  journeySection: "μJourney",
  qualificationKarma: 3000,
  // Local-time boundaries. Countdown + status derive from these.
  startISO: "2026-08-16T00:00:00",
  endISO: "2026-08-27T23:59:59",
  ctas: {
    primary: { label: "Start Your Journey", href: "#how-it-works" },
    secondary: { label: "Explore the Challenge", href: "#about" },
  },
  logos: {
    // Drop the real files here (exact names):
    //   public/assets/logos/mulearn-logo.png   — μLearn PRC logo
    //   public/assets/logos/college-logo.png   — Providence College of Engineering logo
    // If a file is missing, the UI falls back to the SVG placeholder automatically.
    mulearn: "/assets/logos/mulearn-logo.png",
    college: "/assets/logos/college-logo.png",
    event: "/assets/logos/karma-mining-logo-placeholder.svg",
    mulearnFallback: "/assets/logos/mulearn-logo-placeholder.svg",
    collegeFallback: "/assets/logos/college-logo-placeholder.svg",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Qualification", href: "#qualification" },
  { label: "Prizes", href: "#prizes" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "FAQ", href: "#faq" },
];

export const OBJECTIVE = {
  eyebrow: "The mission",
  title: "Explore. Build skills. Belong.",
  body: "Encourage first-year students to explore the μLearn platform, develop new technical and soft skills through practical tasks, and actively engage with the μLearn community.",
  pillars: [
    { icon: "compass", title: "Explore μLearn", text: "Find your way around the platform, channels and community from day one." },
    { icon: "spark", title: "Develop skills", text: "Pick up technical and soft skills through small, practical tasks." },
    { icon: "people", title: "Engage & belong", text: "Learn with your group, your volunteer, and the wider community." },
  ],
};

export const STRUCTURE_STEPS = [
  { no: "01", title: "Join Your Group", text: "Students are divided into different groups to learn together.", icon: "group" },
  { no: "02", title: "Meet Your Volunteer", text: "Each group has one volunteer who guides and supports participants.", icon: "guide" },
  { no: "03", title: "Explore μJourney", text: "Choose tasks from the μJourney section based on your interests.", icon: "compass" },
  { no: "04", title: "Complete Tasks", text: "Finish practical tasks and submit your work for review.", icon: "check" },
  { no: "05", title: "Earn Karma", text: "Earn Karma points based on your completed submissions.", icon: "coin" },
  { no: "06", title: "Reach 3,000 Karma", text: "A minimum of 3,000 Karma is required to qualify.", icon: "target" },
  { no: "07", title: "Compete & Grow", text: "Top Karma student and top volunteer group get recognised.", icon: "trophy" },
];

export const ABOUT_CARDS = [
  { key: "explore", title: "Explore", text: "Dive into the μLearn ecosystem and see what's possible.", icon: "compass" },
  { key: "learn", title: "Learn", text: "Pick tasks that match your interests — no single fixed path.", icon: "book" },
  { key: "build", title: "Build", text: "Do practical, hands-on work instead of just watching.", icon: "hammer" },
  { key: "submit", title: "Submit", text: "Share your work through μJourney submissions.", icon: "send" },
  { key: "earn", title: "Earn Karma", text: "Get Karma points for every eligible completion.", icon: "coin" },
];

export const HOW_IT_WORKS = [
  { title: "Choose a Task", text: "Browse μJourney and pick something that excites you — design, code, content, or community.", icon: "compass" },
  { title: "Complete It", text: "Follow the task brief and build something real at your own pace.", icon: "hammer" },
  { title: "Submit", text: "Submit your work with the required proof and links.", icon: "send" },
  { title: "Earn Karma", text: "Reviewed submissions earn Karma. Different tasks carry different Karma.", icon: "coin" },
  { title: "Repeat", text: "Stack more tasks, grow faster, and climb toward 3,000+ Karma.", icon: "repeat" },
];

export const VOLUNTEER_POINTS = [
  "Understand the challenge",
  "Resolve doubts",
  "Navigate μLearn",
  "Stay engaged",
  "Make progress throughout the challenge",
];

export const TIMELINE = [
  { date: "16 AUG 2026", title: "Challenge Begins", text: "Groups form, volunteers onboard, mining starts.", state: "start" },
  { date: "16 – 27 AUG", title: "Complete μJourney Tasks", text: "Choose, complete, submit and earn Karma every day.", state: "live" },
  { date: "27 AUG 2026", title: "Challenge Ends", text: "Final submissions close. Karma totals are frozen.", state: "end" },
  { date: "RESULTS", title: "Top Student + Top Volunteer", text: "Highest Karma student and highest-Karma group volunteer recognised.", state: "results" },
];

export const FAQS = [
  { q: "Who can participate?", a: "First-year students. Karma Mining is designed specifically as an onboarding challenge for them." },
  { q: "How long is Karma Mining?", a: "12 days, from 16 August to 27 August 2026." },
  { q: "Where do I find the tasks?", a: "Tasks can be selected from the μJourney section of μLearn." },
  { q: "How do I earn Karma?", a: "Complete and submit eligible μJourney tasks. Reviewed submissions earn Karma points." },
  { q: "What is the minimum Karma required?", a: "3,000 Karma. You need at least this much to qualify for the challenge." },
  { q: "Do I have to complete specific tasks?", a: "No. Students can choose tasks based on their interests from the μJourney section. There is no single fixed task path." },
  { q: "Who can help if I have doubts?", a: "Your assigned group volunteer — they help you understand the challenge, navigate μLearn and stay on track." },
  { q: "Who becomes the Student Topper?", a: "The student with the highest Karma points during the challenge." },
  { q: "Who becomes the Top Volunteer?", a: "The volunteer whose group achieves the highest overall Karma." },
];

/* ------------------------------------------------------------
   LEADERBOARD — placeholder / future-backend ready
   - Keep UI dumb: it renders whatever `getLeaderboard()` returns.
   - Later: replace this with fetch('/api/leaderboard') / Supabase /
     a JSON import — no JSX changes needed.
   ------------------------------------------------------------ */
export const LEADERBOARD_PLACEHOLDER_ROWS = [
  { rank: "—", participant: "Awaiting Data", group: "—", karma: "—" },
  { rank: "—", participant: "Awaiting Data", group: "—", karma: "—" },
  { rank: "—", participant: "Awaiting Data", group: "—", karma: "—" },
  { rank: "—", participant: "Awaiting Data", group: "—", karma: "—" },
  { rank: "—", participant: "Awaiting Data", group: "—", karma: "—" },
];

/** Swap this for an async API call later. Returns { rows, updatedAt, isLive } */
export function getLeaderboard() {
  return {
    rows: LEADERBOARD_PLACEHOLDER_ROWS,
    updatedAt: null,
    isLive: false,
    notice: "The leaderboard will be updated during the challenge.",
  };
}

export function formatKarma(n) {
  return n.toLocaleString("en-IN");
}
