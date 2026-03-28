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
        Every feature exists for a reason. No distractions, no fluff—just the tools you need to keep projects moving forward."
        </p>

        <div className="getstarted-visual">
           <img src="clouudss.png" alt="Onboarding" />
         <div className="smallgrid1"> </div>
        </div>

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
