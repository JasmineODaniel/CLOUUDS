"use client";

import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    q: "Is there a free plan available?",
    a: "Yes! Our free plan includes up to 3 projects and 5 team members. No credit card required to get started.",
  },
  {
    q: "Can I upgrade or downgrade my plan at any time?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes take effect at the next billing cycle.",
  },
  {
    q: "How does the team member limit work?",
    a: "Team member limits count active users in your workspace. Guests with limited access do not count toward your limit.",
  },
  {
    q: "Do you offer discounts for nonprofits or education?",
    a: "Yes, we offer 50% off for verified nonprofits and educational institutions. Contact us at support@clouuds.io to apply.",
  },
  {
    q: "Where is my data stored?",
    a: "All data is stored on AWS infrastructure in the US and EU (your choice). We are SOC 2 Type II certified and GDPR compliant.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <h2 className="faq-left-title">
            Everything you need to know about Clouuds—<em>Answered.</em>
          </h2>
          <p className="faq-left-desc">
            Can&apos;t find what you&apos;re looking for? Our team is always happy to help.
          </p>
          <button className="faq-contact-btn" type="button">
            Contact Support
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="#12110F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
              <div
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="faq-question-text">{faq.q}</span>
                <div className={`faq-toggle${openIndex === i ? " open" : ""}`}>
                  <svg viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7h10" stroke="#12110F" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              {openIndex === i && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}