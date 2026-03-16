import "./mission.css";

export function Mission(): JSX.Element {
  return (
    <section className="mission-section" id="features">
      <div className="mission-container">

        {/* HEADER */}
        <div className="mission-header">

          <div className="mission-badge">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.0625 2.875C6.48109 2.875 6.89558 2.95745 7.28231 3.11763C7.66903 3.27782 8.02042 3.51261 8.3164 3.8086C8.61239 4.10458 8.84718 4.45597 9.00737 4.8427C9.16755 5.22942 9.25 5.64391 9.25 6.0625V9.25H6.0625C5.21712 9.25 4.40637 8.91418 3.8086 8.3164C3.21083 7.71863 2.875 6.90788 2.875 6.0625C2.875 5.21712 3.21083 4.40637 3.8086 3.8086C4.40637 3.21082 5.21712 2.875 6.0625 2.875Z"
                fill="#FF5132"
              />
            </svg>

            <span>Features</span>
          </div>

          <h2 className="mission-title">
            Mission <span>Control</span> for Your Workflow.
          </h2>
        </div>

        {/* TOP ROW */}

        <div className="mission-row">

          <p className="mission-description">
            From takeoff to landing, stay in control with intuitive task
            management, team collaboration, and automated progress tracking.
          </p>

          <div className="mission-cards">

            {/* CARD 1 */}
            <article className="mission-card">

              <div className="pill-stack">

                <div className="pill-progress">

                  <span className="pill-icon">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <path
                        d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z"
                        fill="#7B7A78"
                      />
                    </svg>

                  </span>

                  <div className="pill-input">
                    30 progress
                  </div>

                </div>

                <div className="pill-completed">

                  <span className="check-icon">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        fill="#FF5132"
                      />

                      <path
                        d="M6 10.5L8.5 13L14 7.5"
                        stroke="white"
                        strokeWidth="2"
                      />

                    </svg>

                  </span>

                  Completed
                </div>

              </div>

              <div className="card-copy">
                <h3>Stay on Top of Projects</h3>
                <p>Organize and track tasks.</p>
              </div>

            </article>

            {/* CARD 2 */}

            <article className="mission-card">

              <div className="profile-frame">

                <div className="dot left"></div>

                <div className="profile-avatar"></div>

                <div className="dot right"></div>

              </div>

              <div className="card-copy">
                <h3>Assign Tasks with Clarity</h3>
                <p>Easily assign and manage tasks.</p>
              </div>

            </article>

            {/* CARD 3 */}

            <article className="mission-card">

              <div className="upcoming-card">

                <div className="pill">Review Designs</div>

                <div className="upcoming-row">
                  <span className="status-dot"></span>
                  <span>Doing</span>
                  <span>→</span>
                </div>

              </div>

              <div className="card-copy">
                <h3>Set Priorities & Deadlines</h3>
                <p>Keep projects on track.</p>
              </div>

            </article>

          </div>

        </div>

        {/* BOTTOM GRID */}

        <div className="mission-grid">

          <article className="mission-card">
            <div className="placeholder"></div>

            <div className="card-copy">
              <h3>Collaborate Without the Chaos</h3>
              <p>Chat, comment, and share files.</p>
            </div>
          </article>

          <article className="mission-card">
            <div className="progress-ring">
              82%
            </div>

            <div className="card-copy">
              <h3>Track Progress & Insights</h3>
              <p>Stay informed with analytics.</p>
            </div>
          </article>

          <article className="mission-card">

            <div className="schedule">
              Jan 12
            </div>

            <div className="card-copy">
              <h3>A Seamless Experience</h3>
              <p>Smooth, sleek, responsive design.</p>
            </div>

          </article>

          <article className="mission-card cta-card">

            <p>
              Get onboard and experience a project management system that
              actually keeps up with you
            </p>

            <button>
              Book a Demo →
            </button>

          </article>

        </div>

      </div>
    </section>
  );
}
