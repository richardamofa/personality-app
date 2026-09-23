import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import { useQuiz } from './hooks/useQuiz';
import './App.css';

export default function App() {
  const {
    stage,
    currentQuestion,
    currentQuestionIdx,
    totalQuestions,
    result,
    handleStart,
    handleAnswer,
    handleBack,
    handleRetake
  } = useQuiz();

  return (
    <div className="app-container">
      {stage === 'landing' && <LandingPage onStart={handleStart} />}
      {stage === 'quiz' && currentQuestion && (
        <QuizPage
          question={currentQuestion}
          onAnswer={handleAnswer}
          onBack={handleBack}
          progress={currentQuestionIdx + 1}
          totalQuestions={totalQuestions}
        />
      )}
      {stage === 'results' && result && (
        <ResultsPage result={result} onRetake={handleRetake} />
      )}
    </div>
  );
}
