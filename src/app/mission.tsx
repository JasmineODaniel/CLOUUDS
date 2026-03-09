import "./mission.css";

export function Mission() {
  return (
    <section className="mission-section" id="features">
      <div className="mission-container">
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
                d="M6.0625 2.875C6.48109 2.875 6.89558 2.95745 7.28231 3.11763C7.66903 3.27782 8.02042 3.51261 8.3164 3.8086C8.61239 4.10458 8.84718 4.45597 9.00737 4.8427C9.16755 5.22942 9.25 5.64391 9.25 6.0625V9.25H6.0625C5.21712 9.25 4.40637 8.91418 3.8086 8.3164C3.21083 7.71863 2.875 6.90788 2.875 6.0625C2.875 5.21712 3.21083 4.40637 3.8086 3.8086C4.40637 3.21082 5.21712 2.875 6.0625 2.875ZM6.0625 10.75H9.25V13.9375C9.25 14.5679 9.06306 15.1842 8.71281 15.7084C8.36256 16.2326 7.86474 16.6411 7.28231 16.8824C6.69987 17.1236 6.05897 17.1867 5.44065 17.0638C4.82234 16.9408 4.25438 16.6372 3.8086 16.1914C3.36282 15.7456 3.05924 15.1777 2.93625 14.5594C2.81326 13.941 2.87638 13.3001 3.11764 12.7177C3.35889 12.1353 3.76744 11.6374 4.29162 11.2872C4.8158 10.9369 5.43207 10.75 6.0625 10.75ZM13.9375 2.875C14.7829 2.875 15.5936 3.21082 16.1914 3.8086C16.7892 4.40637 17.125 5.21712 17.125 6.0625C17.125 6.90788 16.7892 7.71863 16.1914 8.3164C15.5936 8.91418 14.7829 9.25 13.9375 9.25H10.75V6.0625C10.75 5.21712 11.0858 4.40637 11.6836 3.8086C12.2814 3.21082 13.0921 2.875 13.9375 2.875ZM10.75 10.75H13.9375C14.5679 10.75 15.1842 10.9369 15.7084 11.2872C16.2326 11.6374 16.6411 12.1353 16.8824 12.7177C17.1236 13.3001 17.1867 13.941 17.0638 14.5594C16.9408 15.1777 16.6372 15.7456 16.1914 16.1914C15.7456 16.6372 15.1777 16.9408 14.5594 17.0638C13.941 17.1867 13.3001 17.1236 12.7177 16.8824C12.1353 16.6411 11.6374 16.2326 11.2872 15.7084C10.9369 15.1842 10.75 14.5679 10.75 13.9375V10.75Z"
                fill="#FF5132"
              />
            </svg>
            <span className="mission-badge-text">Features</span>
          </div>
          <h2 className="mission-title">
            Mission <span>Control</span> for Your Workflow.
          </h2>
          <p className="mission-description">
            From takeoff to landing, stay in control with intuitive task
            management, team collaboration, and automated progress tracking.
          </p>
        </div>

        <div className="mission-grid">
          {/* Top row: three cards; CTA slot kept empty for alignment */}
          <article className="mission-card card-tasks" style={{ gridArea: "card1" }}>
            <div className="pill-stack">
              <button className="pill pill-ghost" type="button">
                <span className="pill-icon arrow">&#8594;</span>
                <span>30 progress</span>
              </button>
              <button className="pill pill-solid" type="button">
                <span className="pill-icon check">&#10003;</span>
                <span>Completed</span>
              </button>
            </div>
            <div className="card-copy">
              <h3 className="card-title">Stay on Top of Projects</h3>
              <p className="card-desc">Organize and track tasks.</p>
            </div>
          </article>

          <article className="mission-card card-profile" style={{ gridArea: "card2" }}>
            <div className="profile-frame">
              <div className="profile-dots left"></div>
              <div className="profile-avatar" aria-label="Profile photo placeholder"></div>
              <div className="profile-dots right"></div>
            </div>
            <h3 className="card-title">Assign Tasks with Clarity</h3>
            <p className="card-desc">Easily assign and manage tasks.</p>
          </article>

          <article className="mission-card card-upcoming" style={{ gridArea: "card3" }}>
            <div className="upcoming-header">
              <div className="tick"></div>
              <span>Upcoming</span>
            </div>
            <div className="upcoming-card">
              <div className="pill pill-ghost pill-wide">Review Designs</div>
              <div className="upcoming-row">
                <span className="pill-dot"></span>
                <span className="pill-label">Doing</span>
                <span className="arrow-min">&#8594;</span>
              </div>
            </div>
            <h3 className="card-title">Set Priorities &amp; Deadlines</h3>
            <p className="card-desc">Keep projects on track.</p>
          </article>

          <div className="cta-spacer" style={{ gridArea: "spacer" }} aria-hidden="true"></div>

          {/* Bottom row: three cards plus CTA in 4th slot */}
          <article className="mission-card card-chat" style={{ gridArea: "card4" }}>
            <div className="chat-bubble">
              <div className="chat-avatar"></div>
              <div className="chat-content">
                <div className="chat-name">Feebricks</div>
                <div className="chat-text">Great work, Team! Launch ready...</div>
              </div>
            </div>
            <div className="chat-icons">
              <span className="icon small"></span>
              <span className="icon medium"></span>
              <span className="icon large"></span>
            </div>
            <div className="card-copy">
              <h3 className="card-title">Collaborate Without the Chaos</h3>
              <p className="card-desc">Chat, comment, and share files.</p>
            </div>
          </article>

          <article className="mission-card card-progress" style={{ gridArea: "card5" }}>
            <div className="progress-ring">
              <div className="ring-center">
                <div className="ring-number">82%</div>
                <div className="ring-label">Progress</div>
              </div>
            </div>
            <div className="card-copy">
              <h3 className="card-title">Track Progress &amp; Insights</h3>
              <p className="card-desc">Stay informed with analytics.</p>
            </div>
          </article>

          <article className="mission-card card-schedule" style={{ gridArea: "card6" }}>
            <div className="seamless-left">
              <div className="date-stamp">Jan 12</div>
              <div className="seamless-item">
                <span className="bullet"></span>
                <span>Kick-off Meeting</span>
              </div>
              <div className="seamless-item">
                <span className="bullet"></span>
                <span>New Website</span>
              </div>
            </div>
            <div className="card-copy">
              <h3 className="card-title">A Seamless Experience</h3>
              <p className="card-desc">Smooth, sleek, responsive design.</p>
            </div>
          </article>

          <article className="mission-card card-cta" style={{ gridArea: "cta" }}>
            <div className="cta-content">
              <p className="cta-eyebrow">Get onboard and experience a project management system that actually keeps up with you</p>
              <div className="cta-inline">
                <span className="cta-free">It&apos;s Free!</span>
                <button type="button" className="cta-button">
                  <span>Book a Demo</span>
                  <span className="cta-arrow">&#8594;</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
