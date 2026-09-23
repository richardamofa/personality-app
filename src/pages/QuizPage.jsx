import { useState } from 'react';
import './QuizPage.css';

export default function QuizPage({
  question,
  onAnswer,
  onBack,
  progress,
  totalQuestions
}) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (choice) => {
    setSelected(choice);
    setTimeout(() => {
      onAnswer(choice);
      setSelected(null);
    }, 200);
  };

  return (
    <div className="quiz-container fade-in">
      <div className="quiz-header">
        <div className="question-number">
          Question {progress} / {totalQuestions}
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${(progress / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="quiz-content">
        <div className="question-text">{question.question}</div>
        
        <div className="choices">
          {question.choices.map((choice, idx) => (
            <button
              key={idx}
              className={`choice-btn ${selected === choice ? 'selected' : ''}`}
              onClick={() => handleSelect(choice)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-footer">
        <button className="btn btn-secondary btn-small" onClick={onBack}>
          ← Back
        </button>

        <button className="btn btn-secondary btn-small" onClick={() => { window.location.href = '/'; }}>
          Home
        </button>
      </div>
    </div>
  );
}
