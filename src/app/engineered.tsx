import "./engineered.css";

export function Engineered() {
  return (
    <section className="engineered-section">
      <div className="engineered-container">

        {/* TOP ROW — badge + title left, description right */}
        <div className="engineered-top">
          <div className="engineered-left">
            <div className="engineered-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3.1875 0C3.60609 0 4.02058 0.0824472 4.40731 0.242634C4.79403 0.402821 5.14542 0.63761 5.44141 0.933597C5.73739 1.22958 5.97218 1.58097 6.13237 1.9677C6.29255 2.35442 6.375 2.76891 6.375 3.1875V6.375H3.1875C2.34212 6.375 1.53137 6.03918 0.933599 5.4414C0.335826 4.84363 1.36289e-06 4.03288 1.36289e-06 3.1875C1.36289e-06 2.34212 0.335826 1.53137 0.933599 0.933597C1.53137 0.335825 2.34212 0 3.1875 0V0ZM3.1875 7.875H6.375V11.0625C6.375 11.6929 6.18806 12.3092 5.83781 12.8334C5.48756 13.3576 4.98974 13.7661 4.40731 14.0074C3.82487 14.2486 3.18397 14.3117 2.56565 14.1888C1.94734 14.0658 1.37938 13.7622 0.933599 13.3164C0.487819 12.8706 0.184239 12.3027 0.0612484 11.6844C-0.061742 11.066 0.00138109 10.4251 0.242635 9.8427C0.48389 9.26026 0.892439 8.76244 1.41662 8.41219C1.9408 8.06194 2.55707 7.875 3.1875 7.875V7.875ZM11.0625 0C11.9079 0 12.7186 0.335825 13.3164 0.933597C13.9142 1.53137 14.25 2.34212 14.25 3.1875C14.25 4.03288 13.9142 4.84363 13.3164 5.4414C12.7186 6.03918 11.9079 6.375 11.0625 6.375H7.875V3.1875C7.875 2.34212 8.21083 1.53137 8.8086 0.933597C9.40637 0.335825 10.2171 0 11.0625 0V0ZM7.875 7.875H11.0625C11.6929 7.875 12.3092 8.06194 12.8334 8.41219C13.3576 8.76244 13.7661 9.26026 14.0074 9.8427C14.2486 10.4251 14.3117 11.066 14.1888 11.6844C14.0658 12.3027 13.7622 12.8706 13.3164 13.3164C12.8706 13.7622 12.3027 14.0658 11.6844 14.1888C11.066 14.3117 10.4251 14.2486 9.8427 14.0074C9.26026 13.7661 8.76244 13.3576 8.41219 12.8334C8.06195 12.3092 7.875 11.6929 7.875 11.0625V7.875Z" fill="#FF5132"/>
              </svg>
              <span>Why Choose Clouuds?</span>
            </div>

            <h2 className="engineered-title">
              Engineered for <span>Execution.</span> Designed for Speed.
            </h2>
          </div>

          <p className="engineered-description">
            Every feature exists for a reason. No distractions, no fluff—just the tools you need to keep projects moving forward.*
          </p>
        </div>

        {/* CARD GRID — 3 top, 2 bottom */}
        <div className="engineered-grid">

          <article className="eng-card">
            <div className="eng-icon">
              {/* SVG HERE */}
            </div>
            <h3>Less Busywork, More Progress</h3>
            <p>No long setup—just create a workspace, invite your team, and launch instantly.</p>
          </article>

          <article className="eng-card">
            <div className="eng-icon">
              {/* SVG HERE */}
            </div>
            <h3>Clarity at Every Stage</h3>
            <p>Keep projects structured with clear tasks, priorities, and real-time progress tracking.</p>
          </article>

          <article className="eng-card">
            <div className="eng-icon">
              {/* SVG HERE */}
            </div>
            <h3>A Team That Moves as One</h3>
            <p>Chat, share files, and tag teammates—stay in sync without switching tools.</p>
          </article>

          <article className="eng-card eng-card--offset">
            <div className="eng-icon">
              {/* SVG HERE */}
            </div>
            <h3>Scale Without Growing Pains</h3>
            <p>Automate workflows, track updates, and get insights without extra effort.</p>
          </article>

          <article className="eng-card">
            <div className="eng-icon">
              {/* SVG HERE */}
            </div>
            <h3>Your Workflow, Your Way</h3>
            <p>Frequent updates, scalable for any team, and built for security.</p>
          </article>

        </div>

        {/* CTA BOTTOM LEFT */}
        <div className="engineered-cta">
          <p>Get onboard and experience a project management system that actually keeps up with you.</p>
          <div className="cta-bottom">
            <h3>It's Free!</h3>
            <button className="cta-button">
              Book a Demo
              <span className="arrow-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                  <path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#FF4928"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}import "./engineered.css";

export function Engineered() {
  return (
    <section className="engineered-section">
      <div className="engineered-container">

        {/* TOP ROW — badge + title left, description right */}
        <div className="engineered-top">
          <div className="engineered-left">
            <div className="engineered-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3.1875 0C3.60609 0 4.02058 0.0824472 4.40731 0.242634C4.79403 0.402821 5.14542 0.63761 5.44141 0.933597C5.73739 1.22958 5.97218 1.58097 6.13237 1.9677C6.29255 2.35442 6.375 2.76891 6.375 3.1875V6.375H3.1875C2.34212 6.375 1.53137 6.03918 0.933599 5.4414C0.335826 4.84363 1.36289e-06 4.03288 1.36289e-06 3.1875C1.36289e-06 2.34212 0.335826 1.53137 0.933599 0.933597C1.53137 0.335825 2.34212 0 3.1875 0V0ZM3.1875 7.875H6.375V11.0625C6.375 11.6929 6.18806 12.3092 5.83781 12.8334C5.48756 13.3576 4.98974 13.7661 4.40731 14.0074C3.82487 14.2486 3.18397 14.3117 2.56565 14.1888C1.94734 14.0658 1.37938 13.7622 0.933599 13.3164C0.487819 12.8706 0.184239 12.3027 0.0612484 11.6844C-0.061742 11.066 0.00138109 10.4251 0.242635 9.8427C0.48389 9.26026 0.892439 8.76244 1.41662 8.41219C1.9408 8.06194 2.55707 7.875 3.1875 7.875V7.875ZM11.0625 0C11.9079 0 12.7186 0.335825 13.3164 0.933597C13.9142 1.53137 14.25 2.34212 14.25 3.1875C14.25 4.03288 13.9142 4.84363 13.3164 5.4414C12.7186 6.03918 11.9079 6.375 11.0625 6.375H7.875V3.1875C7.875 2.34212 8.21083 1.53137 8.8086 0.933597C9.40637 0.335825 10.2171 0 11.0625 0V0ZM7.875 7.875H11.0625C11.6929 7.875 12.3092 8.06194 12.8334 8.41219C13.3576 8.76244 13.7661 9.26026 14.0074 9.8427C14.2486 10.4251 14.3117 11.066 14.1888 11.6844C14.0658 12.3027 13.7622 12.8706 13.3164 13.3164C12.8706 13.7622 12.3027 14.0658 11.6844 14.1888C11.066 14.3117 10.4251 14.2486 9.8427 14.0074C9.26026 13.7661 8.76244 13.3576 8.41219 12.8334C8.06195 12.3092 7.875 11.6929 7.875 11.0625V7.875Z" fill="#FF5132"/>
              </svg>
              <span>Why Choose Clouuds?</span>
            </div>

            <h2 className="engineered-title">
              Engineered for <span>Execution.</span> Designed for Speed.
            </h2>
          </div>

          <p className="engineered-description">
            Every feature exists for a reason. No distractions, no fluff—just the tools you need to keep projects moving forward.*
          </p>
        </div>

        {/* CARD GRID — 3 top, 2 bottom */}
        <div className="engineered-grid">

          <article className="eng-card">
            <div className="eng-icon">
              {/* SVG HERE */}
            </div>
            <h3>Less Busywork, More Progress</h3>
            <p>No long setup—just create a workspace, invite your team, and launch instantly.</p>
          </article>

          <article className="eng-card">
            <div className="eng-icon">
              {/* SVG HERE */}
            </div>
            <h3>Clarity at Every Stage</h3>
            <p>Keep projects structured with clear tasks, priorities, and real-time progress tracking.</p>
          </article>

          <article className="eng-card">
            <div className="eng-icon">
              {/* SVG HERE */}
            </div>
            <h3>A Team That Moves as One</h3>
            <p>Chat, share files, and tag teammates—stay in sync without switching tools.</p>
          </article>

          <article className="eng-card eng-card--offset">
            <div className="eng-icon">
              {/* SVG HERE */}
            </div>
            <h3>Scale Without Growing Pains</h3>
            <p>Automate workflows, track updates, and get insights without extra effort.</p>
          </article>

          <article className="eng-card">
            <div className="eng-icon">
              {/* SVG HERE */}
            </div>
            <h3>Your Workflow, Your Way</h3>
            <p>Frequent updates, scalable for any team, and built for security.</p>
          </article>

        </div>

        {/* CTA BOTTOM LEFT */}
        <div className="engineered-cta">
          <p>Get onboard and experience a project management system that actually keeps up with you.</p>
          <div className="cta-bottom">
            <h3>It's Free!</h3>
            <button className="cta-button">
              Book a Demo
              <span className="arrow-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                  <path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#FF4928"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
