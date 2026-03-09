import "./pricing.css";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    features: ["3 Projects", "5 Team Members", "Basic Analytics", "Community Support"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Starter",
    price: "$12",
    period: "/mo",
    features: ["10 Projects", "15 Team Members", "Advanced Analytics", "Email Support"],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    features: ["Unlimited Projects", "50 Team Members", "Full Analytics Suite", "Priority Support"],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Unlimited Everything", "Dedicated Manager", "SSO & Compliance", "24/7 Support"],
    cta: "Talk to Sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-badge">
          <span className="pricing-badge-text">Pricing</span>
        </div>
        <h2 className="pricing-title">
          Flexible Plans for <em>Every Team.</em>
        </h2>

        <div className="pricing-toggle">
          <button className="toggle-btn active" type="button">Monthly</button>
          <button className="toggle-btn" type="button">
            Yearly{" "}
            <span style={{ color: "#FF5A2A", fontSize: "11px", marginLeft: "4px" }}>–20%</span>
          </button>
        </div>

        <div className="pricing-cards">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card${plan.featured ? " featured" : ""}`}>
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                <span className="plan-price-amount">{plan.price}</span>
                {plan.period && <span className="plan-price-period">{plan.period}</span>}
              </div>
              <div className="plan-divider"></div>
              <div className="plan-features">
                {plan.features.map((feature) => (
                  <div key={feature} className="plan-feature">
                    <div className="plan-feature-check"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <button className="plan-cta" type="button">{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}