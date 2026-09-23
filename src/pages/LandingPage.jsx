import { ARCHETYPES } from "../data/personalities";
import "./LandingPage.css";

export default function LandingPage({ onStart }) {
  const previews = [ARCHETYPES[0], ARCHETYPES[2], ARCHETYPES[8]];

  return (
    <main className="landing">
      <div className="landing-content">
        {/* Hero */}
        <section className="landing-hero">
          <div className="landing-eyebrow">
            <span>PERSONALITY CHECK™</span>
            <span>NO CAP.</span>
          </div>

          <h1>
            So... what's your
            <span> personality </span>
            actually giving?
          </h1>

          <p>
            Answer a few questions and we'll expose your personality.
            <strong> Respectfully.</strong> 😭
          </p>

          <button className="landing-cta" onClick={onStart}>
            Let's Find Out
            <span>→</span>
          </button>
        </section>

        {/* Personality previews */}
        <section className="personality-previews">
          {previews.map((archetype, idx) => (
            <article
              key={archetype.name}
              className={`preview-card preview-card-${idx}`}
            >
              <span className="preview-number">
                0{idx + 1}
              </span>

              <h3>{archetype.name}</h3>

              <p>"{archetype.tagline}"</p>
            </article>
          ))}
        </section>

        {/* Small info row */}
        <div className="landing-footer">
          <span>~ 3 MINUTES</span>
          <span>•</span>
          <span>12 QUESTIONS</span>
          <span>•</span>
          <span>ZERO JUDGEMENT</span>
        </div>
      </div>
    </main>
  );
}

