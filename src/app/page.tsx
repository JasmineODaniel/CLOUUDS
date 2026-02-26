export default function Home() {
  return (
    <main className="hero-section">
      <div className="hero-top">
        <div className="hero-text">
          <h1>
            Launch your <em>projects</em>
            <br />
            with clarity, speed, and zero friction.
          </h1>
          <p>
            Clouds helps teams navigate tasks, track progress, and complete missions—without
            getting lost in the void.
          </p>
        </div>
        <div className="hero-cta">
          <button type="button">Book a Demo</button>
        </div>
      </div>

      <div className="hero-mockup">
        <img src="/REDESIGN.png" alt="Clouds app dashboard mockup" />
      </div>
    </main>
  );
}