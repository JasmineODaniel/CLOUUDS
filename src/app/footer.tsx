import "./footer.css";

const footerLinks: Record<string, string[]> = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help Center", "Contact", "Status", "API Docs"],
};

export function Footer() {
  return (
    <>
      {/* ── Footer CTA Banner ── */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <div className="footer-cta-text">
            <h2>
              Take your projects to<br />new <em>heights</em> with Clouuds.
            </h2>
            <p>
              Join over 50,000 teams already using Clouuds to ship faster and work smarter.
            </p>
          </div>
          <div className="footer-cta-right">
            <div className="footer-cta-avatars">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="footer-cta-avatar-placeholder"></div>
              ))}
            </div>
            <button className="footer-cta-btn" type="button">
              <span className="footer-cta-btn-label">Book a Demo</span>
              <div className="footer-cta-btn-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              {/* Replace with: <img src="/Clouuds Logo.svg" alt="Clouuds" className="footer-brand-logo" /> */}
              <div className="footer-brand-logo"></div>
              <p className="footer-brand-desc">
                Clouuds helps teams navigate tasks, track progress, and complete
                missions—without getting lost in the void.
              </p>
              <div className="footer-socials">
                {["twitter", "instagram", "linkedin"].map((s) => (
                  <button key={s} className="footer-social-btn" type="button" aria-label={s}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="2" y="2" width="10" height="10" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([col, links]) => (
              <div key={col}>
                <div className="footer-col-title">{col}</div>
                <div className="footer-links">
                  {links.map((link) => (
                    <a key={link} className="footer-link" href="#">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <span className="footer-copyright">© 2025 Clouuds Inc. All rights reserved.</span>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}