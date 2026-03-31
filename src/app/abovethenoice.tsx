import "./abovethenoice.css";

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8.00001 10.9998L4.47321 13.1538L5.43201 9.13381L2.29401 6.4458L6.41301 6.1158L8.00001 2.2998L9.58701 6.1158L13.7066 6.4458L10.568 9.13381L11.5268 13.1538L8.00001 10.9998Z"
      fill="#7B7A78"
    />
  </svg>
);

const HalfStarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8.00001 9.59341L9.69021 10.6254L9.23061 8.69941L10.7348 7.4112L8.76081 7.2528L8.00001 5.4246V9.59341ZM8.00001 10.9998L4.47321 13.1538L5.43201 9.13381L2.29401 6.4458L6.41301 6.1158L8.00001 2.2998L9.58701 6.1158L13.7066 6.4458L10.568 9.13381L11.5268 13.1538L8.00001 10.9998Z"
      fill="#7B7A78"
    />
  </svg>
);

export function AboveTheNoise() {
  return (
    <section className="atn-section">
      <div className="atn-container">

        {/* HEADER */}
        <div className="atn-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M3.1875 0C3.60609 0 4.02058 0.0824472 4.40731 0.242634C4.79403 0.402821 5.14542 0.63761 5.44141 0.933597C5.73739 1.22958 5.97218 1.58097 6.13237 1.9677C6.29255 2.35442 6.375 2.76891 6.375 3.1875V6.375H3.1875C2.34212 6.375 1.53137 6.03918 0.933599 5.4414C0.335826 4.84363 1.36289e-06 4.03288 1.36289e-06 3.1875C1.36289e-06 2.34212 0.335826 1.53137 0.933599 0.933597C1.53137 0.335825 2.34212 0 3.1875 0V0ZM3.1875 7.875H6.375V11.0625C6.375 11.6929 6.18806 12.3092 5.83781 12.8334C5.48756 13.3576 4.98974 13.7661 4.40731 14.0074C3.82487 14.2486 3.18397 14.3117 2.56565 14.1888C1.94734 14.0658 1.37938 13.7622 0.933599 13.3164C0.487819 12.8706 0.184239 12.3027 0.0612484 11.6844C-0.061742 11.066 0.00138109 10.4251 0.242635 9.8427C0.48389 9.26026 0.892439 8.76244 1.41662 8.41219C1.9408 8.06194 2.55707 7.875 3.1875 7.875V7.875ZM11.0625 0C11.9079 0 12.7186 0.335825 13.3164 0.933597C13.9142 1.53137 14.25 2.34212 14.25 3.1875C14.25 4.03288 13.9142 4.84363 13.3164 5.4414C12.7186 6.03918 11.9079 6.375 11.0625 6.375H7.875V3.1875C7.875 2.34212 8.21083 1.53137 8.8086 0.933597C9.40637 0.335825 10.2171 0 11.0625 0V0ZM7.875 7.875H11.0625C11.6929 7.875 12.3092 8.06194 12.8334 8.41219C13.3576 8.76244 13.7661 9.26026 14.0074 9.8427C14.2486 10.4251 14.3117 11.066 14.1888 11.6844C14.0658 12.3027 13.7622 12.8706 13.3164 13.3164C12.8706 13.7622 12.3027 14.0658 11.6844 14.1888C11.066 14.3117 10.4251 14.2486 9.8427 14.0074C9.26026 13.7661 8.76244 13.3576 8.41219 12.8334C8.06195 12.3092 7.875 11.6929 7.875 11.0625V7.875Z" fill="#FF5132"/>
          </svg>
          <span>Features</span>
        </div>

        <h2 className="atn-title">
          See how teams work <span>above</span> the noise.
        </h2>

        <p className="atn-sub">
          Getting things done has never felt this smooth. See how Clouuds is changing the game.
        </p>

        {/* FEATURED TESTIMONIAL */}
          <div className="atn-featured">
            <div className="atn-featured-image">
              <img src="framee.png" alt="Clouuds" />
            <div className="atn-logo-overlay">
              <img src="/logos%2004.png" alt="Logo 04" className="atn-logo-overlay-img" />
            </div>
            </div>

            <div className="atn-featured-right">
              <div className="atn-featured-quote">
                <div className="atn-quote-wrapper">
                  <div className="atn-quote-mark">"</div>
                  <p>
                    Managing multiple projects used to be chaotic, but Clouuds streamlined everything. Our teams collaborate effortlessly, and deadlines are met without the usual stress.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="atn-featured-nav-wrapper">
                <div className="atn-nav">
                  <button className="atn-nav-btn atn-nav-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                      <path d="M3.4452 6.1002L8.2728 1.2726L6.9002 0L-0.100098 7.0002L6.9002 14.0004L8.2728 12.7278L3.4452 7.9002H14.4V6.1002H3.4452Z" fill="#12110F"/>
                    </svg>
                  </button>
                  <div className="atn-dots">
                    <span className="atn-dot atn-dot--active"></span>
                    <span className="atn-dot"></span>
                    <span className="atn-dot"></span>
                    <span className="atn-dot"></span>
                    <span className="atn-dot"></span>
                  </div>
                  <button className="atn-nav-btn atn-nav-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                      <path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="white"/>
                    </svg>
                  </button>
                </div>
              </div>

        {/* BOTTOM SECTION */}
        <div className="atn-bottom">

          <p className="atn-bottom-title">
            Clouuds keeps you organized and in control so you can<br />focus on what matters.
          </p>

          <div className="atn-cards">

            <div className="atn-card-wrapper">
                <div className="atn-card">
                  <div className="atn-stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <HalfStarIcon />
                  </div>
                <div className="atn-card-copy">
                  <h3>Feels like a productivity cheat code!</h3>
                  <p>"We switched to Space Ship, and our workflow instantly became smoother. No more endless meetings—just real progress."</p>
                </div>
              </div>
              <div className="atn-card-author">
                <div className="atn-author-text">
                  <span className="atn-author-name">Alex R.,</span>
                  <span className="atn-author-role"> Startup Founder</span>
                </div>
                <img src="alex.png" alt="Alex R." className="atn-author-avatar" />
              </div>
            </div>

            <div className="atn-card-wrapper">
                <div className="atn-card">
                  <div className="atn-stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <HalfStarIcon />
                  </div>
                <div className="atn-card-copy">
                  <h3>The only tool my team actually enjoys using.</h3>
                  <p>"It's simple, intuitive, and fun. Space Ship makes managing projects feel less like work and more like a mission."</p>
                </div>
              </div>
              <div className="atn-card-author">
                <div className="atn-author-text">
                  <span className="atn-author-name">Jordan M.,</span>
                  <span className="atn-author-role"> Product Manager</span>
                </div>
                <img src="jordan.png" alt="Jordan M." className="atn-author-avatar" />
              </div>
            </div>

            <div className="atn-card-wrapper">
                <div className="atn-card">
                  <div className="atn-stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <HalfStarIcon />
                  </div>
                <div className="atn-card-copy">
                  <h3>From scattered tasks to seamless execution.</h3>
                  <p>"We used to juggle spreadsheets and sticky notes—now everything's in one place. Tracking progress has never been this easy."</p>
                </div>
              </div>
              <div className="atn-card-author">
                <div className="atn-author-text">
                  <span className="atn-author-name">Samantha K.,</span>
                  <span className="atn-author-role"> Design Lead</span>
                </div>
                <img src="samantha.png" alt="Samantha K." className="atn-author-avatar" />
              </div>
            </div>

            <div className="atn-card-wrapper">
                <div className="atn-card">
                  <div className="atn-stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <HalfStarIcon />
                  </div>
                <div className="atn-card-copy">
                  <h3>Takes the stress out of project deadlines.</h3>
                  <p>"Deadlines used to feel like a black hole. Now, we actually stay ahead of schedule without the burnout."</p>
                </div>
              </div>
              <div className="atn-card-author">
                <div className="atn-author-text">
                  <span className="atn-author-name">Daniel T.,</span>
                  <span className="atn-author-role"> Marketing Director</span>
                </div>
                <img src="daniel.png" alt="Daniel T." className="atn-author-avatar" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
