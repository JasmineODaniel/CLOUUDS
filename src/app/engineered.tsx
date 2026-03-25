import "./engineered.css";

const features = [
  {
    boxClass: "orange",
    dotClass: "orange",
    name: "Task Management",
    text: "Plan work with status, dependencies, and automated reminders for every deadline.",
    tag: "Workflows",
    tagClass: "orange",
  },
  {
    boxClass: "blue",
    dotClass: "blue",
    name: "Team Collaboration",
    text: "Share files, comments, and updates right inside the task so nothing gets lost.",
    tag: "Sync",
    tagClass: "blue",
  },
  {
    boxClass: "purple",
    dotClass: "purple",
    name: "Progress Analytics",
    text: "Live dashboards track velocity, blockers, and executive-ready KPIs.",
    tag: "Insights",
    tagClass: "purple",
  },
  {
    boxClass: "green",
    dotClass: "green",
    name: "Automation Engine",
    text: "Automate hand-offs, escalations, and status reports without writing a single script.",
    tag: "Automation",
    tagClass: "green",
  },
  {
    boxClass: "teal",
    dotClass: "teal",
    name: "Security & Controls",
    text: "Enterprise-grade permissions, audit logs, and data residency keep everything safe.",
    tag: "Security",
    tagClass: "teal",
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
              <article key={f.name} className="feature-col">
                <div className="feature-cloud"></div>
                <div className={`card-icon feature-icon-box ${f.boxClass}`}>
                  <div className={`feature-icon-dot ${f.dotClass}`}></div>
                </div>
                <div className="feature-name">{f.name}</div>
                <div className="feature-text">{f.text}</div>
                <div className={`feature-tag ${f.tagClass}`}>{f.tag}</div>
              </article>
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
