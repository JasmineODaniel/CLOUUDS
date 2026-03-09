import "./mission.css";

export function Mission() {
  return (
    <section className="mission-section" id="features">
      <div className="mission-container">

        <div className="mission-header">
          <div className="mission-badge">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" fill="#FF5A2A" />
              <rect x="8" y="1" width="5" height="5" fill="#FF5A2A" opacity="0.6" />
              <rect x="1" y="8" width="5" height="5" fill="#FF5A2A" opacity="0.6" />
              <rect x="8" y="8" width="5" height="5" fill="#FF5A2A" opacity="0.3" />
            </svg>
            <span className="mission-badge-text">Features</span>
          </div>
          <h2 className="mission-title">
            Mission <span>Control</span> for Your Workflow.
          </h2>
          <p className="mission-description">
            From takeoff to landing, stay in control with tools for tracking,
            collaboration, and automated helpdesk tracking.
          </p>
        </div>

        <div className="mission-grid">

          {/* Card 1: EaseQA */}
          <div className="mission-card card-easeqa">
            <div className="card-icon" style={{ background: "#F0F0F0" }}>
              <svg className="card-icon-svg" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="6" height="6" rx="1.5" fill="#12110F" opacity="0.5" />
                <rect x="10" y="2" width="6" height="6" rx="1.5" fill="#12110F" opacity="0.5" />
                <rect x="2" y="10" width="6" height="6" rx="1.5" fill="#12110F" opacity="0.5" />
                <rect x="10" y="10" width="6" height="6" rx="1.5" fill="#12110F" opacity="0.5" />
              </svg>
            </div>
            <h3 className="card-title">Stay on Top of Projects</h3>
            <p className="card-desc">Organize and track tasks.</p>
            <div className="easeqa-content">
              <div className="easeqa-logo">
                <div className="easeqa-square sq1"></div>
                <div className="easeqa-square sq2"></div>
                <div className="easeqa-square sq3"></div>
                <div className="easeqa-square sq4"></div>
              </div>
              <div>
                <div className="easeqa-name">EaseQA</div>
                <div className="easeqa-msg">Great work, Team! Launch looks solid. 🚀</div>
              </div>
            </div>
          </div>

          {/* Card 2: Progress */}
          <div className="mission-card card-progress">
            <div className="card-icon" style={{ background: "#FFF5F2" }}>
              <svg className="card-icon-svg" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="6" stroke="#FF5A2A" strokeWidth="2" />
                <path d="M9 5v4l2.5 2.5" stroke="#FF5A2A" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="card-title">Track Progress & Insights</h3>
            <p className="card-desc">Stay informed with analytics.</p>
            <div className="progress-chart">
              <div className="progress-circle-wrap">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#F0F0F0" strokeWidth="8" />
                  <circle
                    cx="60" cy="60" r="54"
                    fill="none" stroke="#FF5A2A" strokeWidth="8"
                    strokeDasharray="339.292" strokeDashoffset="84.823"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="progress-inner">
                  <div className="progress-percent">75%</div>
                  <div className="progress-label">Complete</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Seamless */}
          <div className="mission-card card-seamless">
            <div className="card-icon" style={{ background: "#F0F7FF" }}>
              <svg className="card-icon-svg" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="3" width="14" height="13" rx="2" stroke="#4D8EFF" strokeWidth="1.5" />
                <path d="M2 7h14" stroke="#4D8EFF" strokeWidth="1.5" />
                <path d="M6 2v2M12 2v2" stroke="#4D8EFF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="card-title">A Seamless Experience</h3>
            <p className="card-desc">Growth, agile, explorative design.</p>
            <div className="seamless-header">
              <span className="seamless-date">Jan 17</span>
              <span className="seamless-time">9:00 AM</span>
            </div>
            <div className="seamless-list">
              <div className="seamless-item">
                <div className="checkbox"></div>
                <span className="seamless-item-text">Kick-off Meeting</span>
              </div>
              <div className="seamless-item">
                <div className="checkbox"></div>
                <span className="seamless-item-text">New Website</span>
              </div>
            </div>
          </div>

          {/* Card 4: Profile */}
          <div className="mission-card card-profile">
            {/* Replace with: <img src="/profile-avatar.jpg" alt="Profile" className="profile-avatar" /> */}
            <div className="profile-avatar-placeholder"></div>
            <h3 className="card-title">Assign Tasks with Clarity</h3>
            <p className="card-desc">Easily assign and manage tasks.</p>
            <div className="priority-badge">
              <div className="priority-dot"></div>
              <span className="priority-text">High Priority</span>
            </div>
          </div>

          {/* Card 5: Upcoming */}
          <div className="mission-card card-upcoming">
            <div className="card-icon" style={{ background: "#F0F7FF" }}>
              <svg className="card-icon-svg" viewBox="0 0 18 18" fill="none">
                <path d="M4 9l3 3 7-7" stroke="#4D8EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="card-title">Upcoming</h3>
            <p className="card-desc">Review Designs</p>
            <div className="seamless-header" style={{ marginTop: "16px" }}>
              <span className="seamless-date">Today</span>
            </div>
            <div className="seamless-list">
              <div className="seamless-item">
                <div className="checkbox"></div>
                <span className="seamless-item-text">Going</span>
              </div>
            </div>
          </div>

          {/* Card 6: CTA */}
          <div className="mission-card card-cta">
            <div>
              <h3 className="cta-card-title">Get Realtime & Operational Updates</h3>
              <p className="cta-card-desc">
                Our refined and purposeful project management is actually fueled by real users.
              </p>
            </div>
            <button className="cta-card-btn" type="button">
              <span className="cta-card-btn-text">It&apos;s Free!</span>
              <svg className="cta-card-arrow" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="#12110F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}