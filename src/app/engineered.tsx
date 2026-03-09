import "./engineered.css";

const features = [
  {
    boxClass: "orange",
    dotClass: "orange",
    name: "Task Management",
    text: "Organize work into clear, trackable tasks with deadlines and owners.",
    tag: "Workflows",
    tagClass: "orange",
  },
  {
    boxClass: "blue",
    dotClass: "blue",
    name: "Team Collaboration",
    text: "Share updates, comment inline, and keep everyone on the same page.",
    tag: "Sync",
    tagClass: "blue",
  },
  {
    boxClass: "purple",
    dotClass: "purple",
    name: "Progress Analytics",
    text: "Visual dashboards that surface the insights you actually need.",
    tag: "Insights",
    tagClass: "purple",
  },
];

export function Engineered() {
  return (
    <section className="engineered-section">
      <div className="engineered-container">
        <div className="engineered-header">
          <h2 className="engineered-title">
            Engineered for <em>Precision,</em> Designed for Speed.
          </h2>
        </div>

        <div className="engineered-body">
          <p className="engineered-desc">
            Built to keep your team aligned and your projects on track—every
            tool, every feature, precisely where you need it.
          </p>

          <div className="engineered-features">
            {features.map((f) => (
              <div key={f.name} className="feature-col">
                <div className={`card-icon feature-icon-box ${f.boxClass}`}>
                  <div className={`feature-icon-dot ${f.dotClass}`}></div>
                </div>
                <div className="feature-name">{f.name}</div>
                <div className="feature-text">{f.text}</div>
                <div className={`feature-tag ${f.tagClass}`}>{f.tag}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="engineered-cta-bar">
          <p className="engineered-cta-text">
            Join thousands of teams who ship faster with Clouuds.
          </p>
          <button className="engineered-cta-btn" type="button">
            Start for Free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}