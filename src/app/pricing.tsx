import "./price.css";

export function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">

        {/* BADGE */}
        <div className="pricing-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M16 17.5H4C3.80109 17.5 3.61032 17.421 3.46967 17.2803C3.32902 17.1397 3.25 16.9489 3.25 16.75V3.25C3.25 3.05109 3.32902 2.86032 3.46967 2.71967C3.61032 2.57902 3.80109 2.5 4 2.5H16C16.1989 2.5 16.3897 2.57902 16.5303 2.71967C16.671 2.86032 16.75 3.05109 16.75 3.25V16.75C16.75 16.9489 16.671 17.1397 16.5303 17.2803C16.3897 17.421 16.1989 17.5 16 17.5ZM6.25 5.5V8.5H9.25V5.5H6.25ZM6.25 10V11.5H13.75V10H6.25ZM6.25 13V14.5H13.75V13H6.25ZM10.75 6.25V7.75H13.75V6.25H10.75Z" fill="#FF5132"/>
          </svg>
          <span>Pricing Plans</span>
        </div>

        {/* TITLE */}
        <h2 className="pricing-title">
          Flexible <span>Plans</span> for Every Team.
        </h2>

        <p className="pricing-sub">
          Whether you're flying solo or managing a full fleet, <strong>Clouuds</strong> has a plan that fits. Scale effortlessly as your team grows.
        </p>

        {/* MAIN ROW */}
        <div className="pricing-row">

          {/* LEFT — toggle */}
          <div className="pricing-left">
            <div className="pricing-toggle">

              <button className="toggle-btn toggle-btn--active">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6.25 5H5V3.75H15V5H13.75V6.25C13.75 7.25964 13.2399 8.07168 12.5976 8.73542C12.1582 9.18937 11.6237 9.6075 11.0818 10C11.6237 10.3925 12.1582 10.8106 12.5976 11.2646C13.2399 11.9283 13.75 12.7404 13.75 13.75V15H15V16.25H5V15H6.25V13.75C6.25 12.7404 6.7601 11.9283 7.40244 11.2646C7.84176 10.8106 8.37626 10.3925 8.91819 10C8.37626 9.6075 7.84176 9.18937 7.40244 8.73542C6.7601 8.07168 6.25 7.25964 6.25 6.25V5ZM7.5 5V6.25C7.5 6.67821 7.66266 7.08437 7.98207 7.5H12.0179C12.3373 7.08437 12.5 6.67821 12.5 6.25V5H7.5ZM10 10.7637C9.34675 11.2251 8.755 11.6644 8.30069 12.1339C8.1813 12.2572 8.07504 12.379 7.98207 12.5H12.0179C11.9249 12.379 11.8187 12.2572 11.6993 12.1339C11.245 11.6644 10.6533 11.2251 10 10.7637Z" fill="#12110F"/>
                </svg>
                Monthly
              </button>

              <button className="toggle-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 7.375L11.587 11.191L15.706 11.521L12.568 14.209L13.5265 18.229L10 16.075L6.47351 18.229L7.43201 14.209L4.29401 11.521L8.41301 11.191L10 7.375ZM10 11.2802L9.44576 12.613L8.00876 12.7277L9.10376 13.666L8.76851 15.0693L10 14.317L11.2308 15.0693L10.8963 13.6667L11.9905 12.7277L10.5543 12.613L10 11.2802ZM7.00001 2.5V9.25H5.50001V2.5H7.00001ZM14.5 2.5V9.25H13V2.5H14.5ZM10.75 2.5V6.25H9.25001V2.5H10.75Z" fill="#7B7A78"/>
                </svg>
                Yearly
                <span className="toggle-discount">-20%</span>
              </button>

            </div>
          </div>

          {/* RIGHT — cards */}
          <div className="pricing-cards">

            {/* FREE */}
            <div className="pricing-card">
              <div className="pricing-card-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8.00001 10.9998L4.47321 13.1538L5.43201 9.13381L2.29401 6.4458L6.41301 6.1158L8.00001 2.2998L9.58701 6.1158L13.7066 6.4458L10.568 9.13381L11.5268 13.1538L8.00001 10.9998Z" fill="#7B7A78"/>
                </svg>
              </div>

              <div className="pricing-card-mid">
                <div>
                  <h3 className="pricing-plan-name">Free Plan</h3>
                  <p className="pricing-plan-sub">For small teams and individuals getting started.</p>
                </div>
                <div className="pricing-price">$0</div>
                <ul className="pricing-features">
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#7B7A78"/></svg>Up to 3 projects</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#7B7A78"/></svg>Basic task management</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#7B7A78"/></svg>Limited collaboration features</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#7B7A78"/></svg>Community support</li>
                </ul>
              </div>

              <button className="pricing-btn pricing-btn--outline">
                Book a Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#12110F"/></svg>
              </button>
            </div>

            {/* PRO */}
            <div className="pricing-card pricing-card--pro">
              <div className="pricing-card-top">
                <span className="pricing-most-popular">MOST POPULAR</span>
                <div className="pricing-pro-stars">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.00001 10.9998L4.47321 13.1538L5.43201 9.13381L2.29401 6.4458L6.41301 6.1158L8.00001 2.2998L9.58701 6.1158L13.7066 6.4458L10.568 9.13381L11.5268 13.1538L8.00001 10.9998Z" fill="white"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.00001 10.9998L4.47321 13.1538L5.43201 9.13381L2.29401 6.4458L6.41301 6.1158L8.00001 2.2998L9.58701 6.1158L13.7066 6.4458L10.568 9.13381L11.5268 13.1538L8.00001 10.9998Z" fill="white"/></svg>
                </div>
              </div>

              <div className="pricing-card-mid">
                <div>
                  <h3 className="pricing-plan-name pricing-plan-name--pro">Pro Plan</h3>
                  <p className="pricing-plan-sub pricing-plan-sub--pro">For growing teams that need efficiency.</p>
                </div>
                <div className="pricing-price pricing-price--pro">$12<span>/user</span></div>
                <ul className="pricing-features pricing-features--pro">
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="white"/></svg>Unlimited projects</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="white"/></svg>Task and workflow automation</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="white"/></svg>Team collaboration tools</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="white"/></svg>Priority support</li>
                </ul>
              </div>

              <button className="pricing-btn pricing-btn--pro">
                Book a Demo
                <span className="btn-arrow-pill">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#FF5132"/></svg>
                </span>
              </button>
            </div>

            {/* ENTERPRISE */}
            <div className="pricing-card">
              <div className="pricing-card-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.4 12.2001H14.6V13.4001H1.40002V12.2001H2.60002V3.2001C2.60002 3.04097 2.66324 2.88836 2.77576 2.77583C2.88828 2.66331 3.04089 2.6001 3.20002 2.6001H9.20002C9.35915 2.6001 9.51177 2.66331 9.62429 2.77583C9.73681 2.88836 9.80002 3.04097 9.80002 3.2001V12.2001H11V6.2001H12.8C12.9592 6.2001 13.1118 6.26331 13.2243 6.37583C13.3368 6.48836 13.4 6.64097 13.4 6.8001V12.2001ZM5.00002 7.4001V8.6001H7.40002V7.4001H5.00002ZM5.00002 5.0001V6.2001H7.40002V5.0001H5.00002Z" fill="#7B7A78"/>
                </svg>
              </div>

              <div className="pricing-card-mid">
                <div>
                  <h3 className="pricing-plan-name">Enterprise</h3>
                  <p className="pricing-plan-sub">For small teams and individuals getting started.</p>
                </div>
                <div className="pricing-price pricing-price--custom">Custom</div>
                <ul className="pricing-features">
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#7B7A78"/></svg>Custom onboarding</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#7B7A78"/></svg>Dedicated account manager</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#7B7A78"/></svg>Security and integrations</li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#7B7A78"/></svg>24/7 support</li>
                </ul>
              </div>

              <button className="pricing-btn pricing-btn--outline">
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M10.9548 6.1002L6.1272 1.2726L7.3998 0L14.4 7.0002L7.3998 14.0004L6.1272 12.7278L10.9548 7.9002H0V6.1002H10.9548Z" fill="#12110F"/></svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
