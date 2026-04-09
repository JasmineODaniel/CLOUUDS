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
          <span className="atn-sub-first">
            Getting things done has never felt this smooth. See how Clouuds is
          </span>
          <br />
          <span className="atn-sub-line">changing the game.</span>
        </p>

        {/* FEATURED TESTIMONIAL */}
          <div className="atn-featured">
            <div className="atn-featured-image">
              <img src="framee.png" alt="Clouuds" />
            <div className="atn-logo-overlay">
              <img src="/logos04.svg" alt="Logo 04" className="atn-logo-overlay-img" />
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
                    <path d="M3.4452 6.1002H14.4V7.9002H3.4452L8.2728 12.7278L7.0002 14.0004L0 7.0002L7.0002 0L8.2728 1.2726L3.4452 6.1002Z" fill="#12110F"/>
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
            Clouuds keeps you organized and in control so you can<br />
            <span className="atn-bottom-highlight">Focus</span> on what matters.
          </p>

          <div className="atn-cards">

            <div className="atn-card-wrapper">
                <div className="atn-card">
                  <div className="atn-card-blob" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="270" height="292" viewBox="0 0 270 292" fill="none">
  <path d="M317.293 112.944C371.28 149.28 385.588 222.5 349.253 276.487C313.08 330.23 240.356 344.65 186.441 308.931C142.034 350.033 73.6773 356.862 21.3 321.61C-1.79463 306.066 -18.4772 284.562 -28.0841 260.525C-53.9087 261.018 -80.1368 253.859 -103.192 238.342C-162.875 198.173 -178.693 117.226 -138.524 57.543C-98.3542 -2.14013 -17.4072 -17.9595 42.2759 22.21C63.4429 36.4564 79.0902 55.8334 88.6817 77.5703C116.654 76.0483 145.335 83.2833 170.366 100.131C176.029 103.942 181.306 108.111 186.188 112.588C224.732 86.9486 276.503 85.4901 317.293 112.944Z" fill="white"/>
</svg>
                  </div>
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
                <img src="/person4.svg" alt="Alex R." className="atn-author-avatar" />
              </div>
            </div>

            <div className="atn-card-wrapper">
                <div className="atn-card">
                   <div className="atn-card-blob alt" aria-hidden="true">
                     <svg xmlns="http://www.w3.org/2000/svg" width="270" height="251" viewBox="0 0 270 251" fill="none">
  <path d="M279.084 129.779C279.114 128.638 279.13 127.495 279.13 126.347C279.13 56.5675 222.562 0 152.783 0C108.778 0 70.0279 22.496 47.4051 56.6147C40.4079 55.3763 33.206 54.7309 25.8535 54.7309C-41.9967 54.7309 -97 109.734 -97 177.584C-97 245.435 -41.9967 300.438 25.8535 300.438C50.8121 300.438 74.0319 292.996 93.4154 280.208C111.072 328.696 157.579 363.32 212.172 363.32C281.951 363.32 338.519 306.753 338.519 236.973C338.519 191.768 314.778 152.107 279.084 129.779Z" fill="url(#paint0_linear_700_269)"/>
  <defs>
    <linearGradient id="paint0_linear_700_269" x1="120.759" y1="0" x2="120.759" y2="363.32" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white"/>
    </linearGradient>
  </defs>
</svg>
                   </div>
                  <div className="atn-stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <HalfStarIcon />
                  </div>
                <div className="atn-card-copy">
                  <h3>The only tool my team actually enjoys using.</h3>
                  <p>"We switched to Space Ship, and our workflow instantly became smoother. No more endless meetings—just real progress."</p>
                </div>
              </div>
              <div className="atn-card-author">
                <div className="atn-author-text">
                  <span className="atn-author-name">Jordan M.,</span>
                  <span className="atn-author-role"> Product Manager</span>
                </div>
                <img src="/person3.svg" alt="Jordan M." className="atn-author-avatar" />
              </div>
            </div>

            <div className="atn-card-wrapper">
                <div className="atn-card">
                  <div className="atn-card-blob" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="270" height="292" viewBox="0 0 270 292" fill="none">
  <path d="M291.811 0C351.562 0 400 48.4381 400 108.189C400 167.941 351.562 216.379 291.811 216.379C290.961 216.379 290.114 216.367 289.269 216.348C289.75 221.579 290 226.878 290 232.234C290 326.675 213.441 403.234 119 403.234C24.5593 403.234 -52 326.675 -52 232.234C-52 137.794 24.5593 61.2344 119 61.2344C143.749 61.2344 167.268 66.4949 188.505 75.9541C202.223 31.9462 243.286 5.69327e-05 291.811 0Z" fill="white"/>
</svg>
                  </div>
                  <div className="atn-stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <HalfStarIcon />
                  </div>
                <div className="atn-card-copy">
                  <h3>From scattered tasks to seamless execution.</h3>
                  <p>"We switched to Space Ship, and our workflow instantly became smoother. No more endless meetings—just real progress."</p>
                </div>
              </div>
              <div className="atn-card-author">
                <div className="atn-author-text">
                  <span className="atn-author-name">Samantha K.,</span>
                  <span className="atn-author-role"> Design Lead</span>
                </div>
                <img src="/person2.svg" alt="Samantha K." className="atn-author-avatar" />
              </div>
            </div>

            <div className="atn-card-wrapper">
                <div className="atn-card">
                  <div className="atn-card-blob" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="270" height="291" viewBox="0 0 270 291" fill="none">
  <path d="M431.113 154.023C481.422 187.883 494.756 256.117 460.896 306.426C429.063 353.722 366.852 368.337 317.714 341.784C272.974 404.911 185.779 421.116 121.236 377.676C95.9554 360.661 77.8465 336.98 67.6688 310.548C28.9092 317.616 -12.536 310.149 -47.803 286.412C-119.523 238.141 -138.533 140.868 -90.2612 69.148C-41.9899 -2.57227 55.2828 -21.5815 127.003 26.6898C159.762 48.7379 181.521 81.0098 190.897 116.399C221.658 114.182 253.359 121.855 280.928 140.41C288.856 145.746 296.078 151.739 302.572 158.265C338.995 130.061 390.806 126.894 431.113 154.023Z" fill="white"/>
</svg>
                  </div>
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
                <img src="/person1.svg" alt="Daniel T." className="atn-author-avatar" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
 
