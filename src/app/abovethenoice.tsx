import "./abovethenoice.css";

const cards = [
  {
    eyebrow: "Focus",
    title: "Eliminate the noise, keep the signal",
    desc: "Filter views, mute channels, and surface only what actually moves your project forward.",
  },
  {
    eyebrow: "Visibility",
    title: "Everyone knows what's happening",
    desc: "Live status updates mean no more where are we meetings. Everyone sees the full picture.",
  },
  {
    eyebrow: "Speed",
    title: "Ship faster, without cutting corners",
    desc: "Automated handoffs and smart reminders keep work flowing without you chasing people down.",
  },
  {
    eyebrow: "Scale",
    title: "Grows with your team",
    desc: "From solo freelancers to 500-person orgs—Clouuds adapts to the way you actually work.",
  },
];

export function AboveTheNoise() {
  return (
    <section className="noise-section">
      <div className="noise-container">
        <div className="noise-badge">
          <div className="noise-badge-dot"></div>
          <span className="noise-badge-text">Real Teams</span>
        </div>

        <h2 className="noise-title">
          See how teams work <em>above the noise.</em>
        </h2>
        <p className="noise-desc">
          Thousands of teams use Clouuds to cut through distractions, ship
          faster, and stay aligned—no matter the size.
        </p>

        <div className="noise-visual">
          {/* Replace with: <img src="/teams-screenshot.png" alt="Teams view" /> */}
          <div className="noise-visual-placeholder">[ Teams screenshot ]</div>
          <div className="noise-overlay-card">
            <div className="noise-overlay-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 3v6l4 2" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="noise-overlay-title">Sprint completed on time</div>
              <div className="noise-overlay-sub">Team Alpha · 14 tasks closed</div>
            </div>
          </div>
        </div>

        <div className="noise-pagination">
          <button className="noise-page-btn" type="button">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="#12110F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="noise-page-btn active" type="button">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2l5 5-5 5" stroke="#12110F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="noise-cards">
          {cards.map((card) => (
            <div key={card.eyebrow} className="noise-card">
              <div className="noise-card-eyebrow">{card.eyebrow}</div>
              <div className="noise-card-title">{card.title}</div>
              <p className="noise-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}