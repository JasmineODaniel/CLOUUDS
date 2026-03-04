import { BeneathHero } from "./beneathhero";
export default function Home() {
  return (
    <main className="hero-section">
      <div className="hero-top">
        <div className="hero-text">
          <h1>
            Launch your <em>projects</em> with clarity,
            <br /> 
            speed, and zero friction.
          </h1>
          <div className="hero-overlay">
          <p>
            Clouds helps teams navigate tasks,<br /> track progress, and complete
            missions— <br /> without getting lost in the void.
          </p>
          <div className="hero-cta">
          <button type="button" className="cta-btn">
  <span className="cta-label">Book a Demo</span>
  <span className="cta-arrow">
    <img src="/arrow-right-line.svg" alt="" />
  </span>
</button>


          </div>
        </div>
        </div>
      </div>

         <div className="hero-mockup">
        <img src="/REDESIGN.png" alt="Clouds app dashboard mockup" />
      </div>
    </main>
    
  );
}
