import './ResultsPage.css';

export default function ResultsPage({ result, onRetake }) {
  const topTraits = result.topTraits.slice(0, 4);

  const handleCopyResult = () => {
    const text = `I got "The ${result.archetype.name}" on the personality quiz! "${result.archetype.tagline}" Find out yours at personality.app`;
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard! 🎉');
  };

  return (
    <div className="results-container fade-in">
      <div className="results-inner">
        <div className="results-title">You got:</div>

        <div className="archetype-reveal">
          <div className="archetype-name">
            {result.archetype.name}
          </div>
          <div className="archetype-tagline">
            "{result.archetype.tagline}"
          </div>
        </div>

        <div className="section">
          <div className="section-title">Your Personality</div>
          <div className="section-description">
            {result.archetype.description}
          </div>
        </div>

        <div className="section">
          <div className="section-title">Your Vibe</div>
          <div className="traits-grid">
            {topTraits.map(([trait, score], idx) => (
              <div key={idx} className="trait-card">
                <div className="trait-label">
                  {trait.charAt(0).toUpperCase() + trait.slice(1).replace(/([A-Z])/g, ' $1')}
                </div>
                <div className="trait-percentage">{score}%</div>
                <div className="trait-meter">
                  <div 
                    className="trait-meter-fill"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-title">Your Strengths</div>
          <div className="traits-grid">
            {result.archetype.strengths.map((strength, idx) => (
              <div key={idx} className="strength-badge">
                {strength}
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-title">You Might Do This</div>
          {result.archetype.observations.map((obs, idx) => (
            <div key={idx} className="observation-item">
              {obs}
            </div>
          ))}
        </div>

        <div className="section">
          <div className="section-title">Your Social Style</div>
          <div className="section-description">
            {result.archetype.social}
          </div>
        </div>

        <div className="section">
          <div className="section-title">Your Work / Study Style</div>
          <div className="section-description">
            {result.archetype.work}
          </div>
        </div>

        <div className="section">
          <div className="section-title">Your Energy</div>
          <div className="section-description">
            {result.archetype.energy}
          </div>
        </div>

        <div className="share-section">
          <h3>Share Your Results</h3>
          <div className="share-buttons">
            <button 
              className="btn btn-small"
              onClick={handleCopyResult}
            >
              Copy Result
            </button>
            <button className="btn btn-small btn-secondary" onClick={onRetake}>
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
