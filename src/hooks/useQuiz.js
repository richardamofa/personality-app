import { useState } from 'react';
import { QUESTIONS } from '../data/questions';
import { calculatePersonality } from '../engine/personalityCalculator';

export function useQuiz() {
  const [stage, setStage] = useState('landing'); // landing, quiz, results
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setStage('quiz');
    setCurrentQuestionIdx(0);
    setAnswers([]);
  };

  const handleAnswer = (choice) => {
    const newAnswers = [...answers, choice];
    setAnswers(newAnswers);

    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      // Quiz complete, calculate result
      const personalityResult = calculatePersonality(newAnswers);
      setResult(personalityResult);
      setStage('results');
    }
  };

  const handleBack = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(currentQuestionIdx - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRetake = () => {
    setStage('landing');
    setCurrentQuestionIdx(0);
    setAnswers([]);
    setResult(null);
  };

  return {
    stage,
    currentQuestionIdx,
    currentQuestion: QUESTIONS[currentQuestionIdx],
    totalQuestions: QUESTIONS.length,
    result,
    handleStart,
    handleAnswer,
    handleBack,
    handleRetake
  };
}
