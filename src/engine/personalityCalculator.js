import { ARCHETYPES } from '../data/personalities';

export function calculatePersonality(answers) {
  const scores = {
    energy: 0,
    social: 0,
    curiosity: 0,
    independence: 0,
    emotional: 0,
    structure: 0,
    spontaneity: 0,
    creativity: 0,
    risk: 0,
    communication: 0,
    rationality: 0,
    organization: 0,
    focus: 0,
    experience: 0
  };

  // Aggregate scores from answers
  answers.forEach(answer => {
    if (answer.score) {
      Object.keys(answer.score).forEach(trait => {
        scores[trait] += answer.score[trait];
      });
    }
  });

  // Normalize scores (0-100 scale)
  const normalized = {};
  Object.keys(scores).forEach(key => {
    normalized[key] = Math.min(100, Math.round((scores[key] / 20) * 100));
  });

  // Determine archetype based on primary traits
  let archetypeIndex = getArchetypeIndex(normalized);

  return {
    archetype: ARCHETYPES[archetypeIndex],
    scores: normalized,
    topTraits: Object.entries(normalized)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 4)
  };
}

function getArchetypeIndex(scores) {
  // Decision tree for archetype selection
  if (scores.spontaneity > 75 && scores.creativity > 70) {
    return 0; // Chaos Creative
  } else if (scores.independence > 75 && scores.structure > 70) {
    return 1; // Quiet Strategist
  } else if (scores.social > 80 && scores.communication > 75) {
    return 2; // Social Main Character
  } else if (scores.curiosity > 80) {
    return 3; // Curious Explorer
  } else if (scores.independence > 80 && scores.emotional < 40) {
    return 4; // Soft-Spoken Menace
  } else if (scores.structure > 80 && scores.spontaneity < 40) {
    return 5; // Organized Overthinker
  } else if (scores.spontaneity > 75 && scores.structure < 40) {
    return 6; // Professional Procrastinator
  } else if (scores.emotional > 75) {
    return 7; // Empathetic Connector
  } else if (scores.risk > 75) {
    return 8; // Bold Risk-Taker
  }

  // Default fallback
  return 0;
}
