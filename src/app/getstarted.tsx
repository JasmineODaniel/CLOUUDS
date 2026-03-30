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
              <img src="close.svg" alt="Close" className="ex"/>
              <button className="modal-close"></button>
            </div>

            <div className="modal-field">
              <label>Workspace Name</label>
              <input type="text" placeholder="Type here" />
            </div>

            <div className="modal-team">
              <label>Select Team</label>
              <div className="team-row">
                <div className="avatars">
                  <img src="num5.png" alt="Team member 5" className="avatar" />
                  <img src="num4.png" alt="Team member 1" className="avatar" />
                  <img src="num2.png" alt="Team member 2" className="avatar" />
                  <img src="num3.png" alt="Team member 3" className="avatar" />
                  <img src="num1.png" alt="Team member 4" className="avatar" />
                </div>
                <span className="search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path d="M6.21713 0.0164799C9.89718 -0.240855 13.0927 2.53701 13.3501 6.21707C13.6074 9.89712 10.8296 13.0927 7.1495 13.35C3.46944 13.6074 0.273875 10.8295 0.0165401 7.14944C-0.240795 3.46938 2.53707 0.273815 6.21713 0.0164799ZM7.0459 11.8685C9.91039 11.6682 12.0689 9.18515 11.8686 6.32066C11.6682 3.45543 9.18521 1.29768 6.32072 1.49798C3.45549 1.69834 1.29769 4.18061 1.49805 7.04584C1.69835 9.91033 4.18067 12.0689 7.0459 11.8685ZM13.3349 11.4816L15.5769 13.4299L14.6021 14.5514L12.3607 12.6023L13.3349 11.4816Z" fill="#12110F"/>
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
