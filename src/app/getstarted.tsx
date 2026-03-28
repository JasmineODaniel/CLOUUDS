import "./getstarted.css";

const steps = [
  {
    number: "01",
    title: "Create Your Workspace",
    desc: "Sign up and set up your team workspace in under 60 seconds. No credit card required.",
  },
  {
    number: "02",
    title: "Invite Your Team",
    desc: "Add teammates with a single link. Roles and permissions set themselves up automatically.",
  },
  {
    number: "03",
    title: "Launch Your Project",
    desc: "Use a template or start from scratch. Your first board is ready to go immediately.",
  },
  {
    number: "04",
    title: "Track & Ship",
    desc: "Watch progress in real time. Get notified when it matters. Celebrate when you ship.",
  },
];

export function GetStarted() {
  return (
    <section className="getstarted-section">
      <div className="getstarted-container">

        <h2 className="getstarted-title">
          Get started in <em>3 steps</em>—no friction,
          no confusion. <br /> Just a smooth takeoff.
        </h2>
        <p className="getstarted-sub">
          Every feature exists for a reason. No distractions, no fluff—just the tools you need to keep projects moving forward.
        </p>

        {/* VISUAL WITH FLOATING CARD */}
        <div className="getstarted-visual">
          <img src="clouudss.png" alt="Onboarding" className="visual-bg" />

          <div className="smallgrid1">

            <div className="modal-header">
              <span>New Workspace Setup</span>
              <button className="modal-close">✕</button>
            </div>

            <div className="modal-field">
              <label>Workspace Name</label>
              <input type="text" placeholder="Type here" />
            </div>

            <div className="modal-team">
              <label>Select Team</label>
              <div className="team-row">
                <div className="avatars">
                  {/* ADD YOUR AVATAR IMAGES HERE */}
                  <div className="avatar-placeholder" />
                  <div className="avatar-placeholder" />
                  <div className="avatar-placeholder" />
                  <div className="avatar-placeholder" />
                </div>
                <span className="search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7B7A78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </span>
              </div>
            </div>

            <button className="modal-cta">
              Create a Project
              <span className="modal-cta-plus">+</span>
            </button>

          </div>
        </div>

        {/* STEPS */}
        <div className="getstarted-steps">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
