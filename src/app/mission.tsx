import "./mission.css";

export function Mission(): JSX.Element {
  return (
    <section className="mission-section" id="features">
      <div className="mission-container">

        {/* HEADER */}
        <div className="mission-header">

          <div className="mission-badge">

            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <path d="M3.1875 0C3.60609 0 4.02058 0.0824472 4.40731 0.242634C4.79403 0.402821 5.14542 0.63761 5.44141 0.933597C5.73739 1.22958 5.97218 1.58097 6.13237 1.9677C6.29255 2.35442 6.375 2.76891 6.375 3.1875V6.375H3.1875C2.34212 6.375 1.53137 6.03918 0.933599 5.4414C0.335826 4.84363 1.36289e-06 4.03288 1.36289e-06 3.1875C1.36289e-06 2.34212 0.335826 1.53137 0.933599 0.933597C1.53137 0.335825 2.34212 0 3.1875 0V0ZM3.1875 7.875H6.375V11.0625C6.375 11.6929 6.18806 12.3092 5.83781 12.8334C5.48756 13.3576 4.98974 13.7661 4.40731 14.0074C3.82487 14.2486 3.18397 14.3117 2.56565 14.1888C1.94734 14.0658 1.37938 13.7622 0.933599 13.3164C0.487819 12.8706 0.184239 12.3027 0.0612484 11.6844C-0.061742 11.066 0.00138109 10.4251 0.242635 9.8427C0.48389 9.26026 0.892439 8.76244 1.41662 8.41219C1.9408 8.06194 2.55707 7.875 3.1875 7.875V7.875ZM11.0625 0C11.9079 0 12.7186 0.335825 13.3164 0.933597C13.9142 1.53137 14.25 2.34212 14.25 3.1875C14.25 4.03288 13.9142 4.84363 13.3164 5.4414C12.7186 6.03918 11.9079 6.375 11.0625 6.375H7.875V3.1875C7.875 2.34212 8.21083 1.53137 8.8086 0.933597C9.40637 0.335825 10.2171 0 11.0625 0V0ZM7.875 7.875H11.0625C11.6929 7.875 12.3092 8.06194 12.8334 8.41219C13.3576 8.76244 13.7661 9.26026 14.0074 9.8427C14.2486 10.4251 14.3117 11.066 14.1888 11.6844C14.0658 12.3027 13.7622 12.8706 13.3164 13.3164C12.8706 13.7622 12.3027 14.0658 11.6844 14.1888C11.066 14.3117 10.4251 14.2486 9.8427 14.0074C9.26026 13.7661 8.76244 13.3576 8.41219 12.8334C8.06195 12.3092 7.875 11.6929 7.875 11.0625V7.875Z" fill="#FF5132"/>
</svg>

            <span>Features</span>
          </div>
          </div>

          <div className="mission-title">
            Mission <span>Control</span> for Your Workflow.
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

                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
  <path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#7B7A78"/>
</svg>

                  </span>
                 

                  <div className="pill-input">
                    30 progress
                  </div>

              
             
                  </div>

                <div className="pill-completed">

                  <span className="check-icon">

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0.5C15.2468 0.5 19.5 4.75316 19.5 10C19.5 15.2468 15.2468 19.5 10 19.5C4.75316 19.5 0.5 15.2468 0.5 10C0.5 4.75316 4.75316 0.5 10 0.5ZM9.10254 11.7617L6.55664 9.21582L5.99121 9.78125L9.10254 12.8926L14.7588 7.23633L14.1934 6.6709L9.10254 11.7617Z" fill="url(#paint0_linear_395_32)" stroke="white"/>
  <defs>
    <linearGradient id="paint0_linear_395_32" x1="1" y1="1" x2="19" y2="19" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF5132"/>
      <stop offset="1" stop-color="#FFCC32"/>
    </linearGradient>
  </defs>
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

                

                <div className="profile-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM8.1027 12.6L14.4657 6.2361L13.1931 4.9635L8.1027 10.0548L5.5566 7.5087L4.284 8.7813L8.1027 12.6Z" fill="#DDDDDD"/>
</svg>
                </div>
                
               <div className="avatar-main-wrapper">
  <img className="profile-avatar-main" src="avatar.png" alt="Profile" />
  <svg className="avatar-badge" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0.5C15.2468 0.5 19.5 4.75316 19.5 10C19.5 15.2468 15.2468 19.5 10 19.5C4.75316 19.5 0.5 15.2468 0.5 10C0.5 4.75316 4.75316 0.5 10 0.5ZM9.10254 11.7617L6.55664 9.21582L5.99121 9.78125L9.10254 12.8926L14.7588 7.23633L14.1934 6.6709L9.10254 11.7617Z" fill="#FF5132" stroke="white"/>
</svg> 
</div>
                <div className="profile-avatar2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM8.1027 12.6L14.4657 6.2361L13.1931 4.9635L8.1027 10.0548L5.5566 7.5087L4.284 8.7813L8.1027 12.6Z" fill="#DDDDDD"/>
</svg>
                </div>

                

              </div>

              <div className="card-copy">
                <h3>Assign Tasks with Clarity</h3>
                <p>Easily assign and manage tasks.</p>
              </div>

            </article>

            {/* CARD 3 */}

            <article className="mission-card">

              <div className="upcoming-card">
                <div className="upcoming-small">
                  <div className="upcoming-checkbox">
                   <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0.5C15.2468 0.5 19.5 4.75316 19.5 10C19.5 15.2468 15.2468 19.5 10 19.5C4.75316 19.5 0.5 15.2468 0.5 10C0.5 4.75316 4.75316 0.5 10 0.5ZM9.10254 11.7617L6.55664 9.21582L5.99121 9.78125L9.10254 12.8926L14.7588 7.23633L14.1934 6.6709L9.10254 11.7617Z" fill="url(#paint0_linear_464_38)" stroke="white"/>
  <defs>
    <linearGradient id="paint0_linear_464_38" x1="1" y1="1" x2="19" y2="19" gradientUnits="userSpaceOnUse">
      <stop stop-color="#32A2FF"/>
      <stop offset="1" stop-color="#3265FF"/>
    </linearGradient>
  </defs>
</svg>
                
                 
                <span>  Upcoming </span>
                </div>
                

                <div className="pill">Review Designs</div>

                <div className="upcoming-row">
               
                  <span>Doing</span>
                  <span><svg className="doing-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M9.129 5.0835L5.106 1.0605L6.1665 0L12 5.8335L6.1665 11.667L5.106 10.6065L9.129 6.5835H0V5.0835H9.129Z" fill="#7B7A78"/>
</svg></span>
                </div>

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
