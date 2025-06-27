import React, { useState, useMemo } from 'react';
import { QuestionDisplay } from './components/QuestionDisplay';
import { QuizNavigation } from './components/QuizNavigation';
import { useQuiz } from './hooks/useQuiz';
import { QuizService } from './services/quizService';
import { QuizDeck } from './types';

/**
 * Main App component following SOLID principles:
 * - Single Responsibility: Manages deck selection and coordinates quiz flow
 * - Open/Closed: Easy to extend with new deck types or features
 * - Dependency Inversion: Depends on abstractions (QuizService) not concrete implementations
 */
function App() {
  const [selectedDeckKey, setSelectedDeckKey] = useState<string>('react-render-cycle');
  
  // Memoize deck to prevent unnecessary re-computations
  const currentDeck = useMemo(() => {
    const deck = QuizService.getDeck(selectedDeckKey);
    return deck || QuizService.getDefaultDeck();
  }, [selectedDeckKey]);

  // Custom hook encapsulates all quiz logic
  const {
    currentCardIndex,
    selectedAnswerId,
    isAnswered,
    isCorrect,
    onAnswerSelect,
    onNextQuestion,
    onQuizComplete
  } = useQuiz(currentDeck);

  const currentQuestion = currentDeck.cards[currentCardIndex];
  const isLastQuestion = currentCardIndex === currentDeck.cards.length - 1;

  // Memoize quiz state to prevent unnecessary re-renders
  const quizState = useMemo(() => ({
    currentCardIndex,
    selectedAnswerId,
    isAnswered,
    isCorrect,
  }), [currentCardIndex, selectedAnswerId, isAnswered, isCorrect]);

  const handleDeckChange = (deckKey: string) => {
    setSelectedDeckKey(deckKey);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Deck Selection */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Quiz Me</h1>
          <div className="mb-6">
            <label htmlFor="deck-select" className="block text-sm font-medium text-gray-700 mb-2">
              Choose a quiz deck:
            </label>
            <select
              id="deck-select"
              value={selectedDeckKey}
              onChange={(e) => handleDeckChange(e.target.value)}
              className="block w-full max-w-sm px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {QuizService.getDeckKeys().map((key) => {
                const deck = QuizService.getDeck(key);
                return (
                  <option key={key} value={key}>
                    {deck?.deckName || key}
                  </option>
                );
              })}
            </select>
          </div>
          
          {/* Deck Info */}
          <div className="bg-white p-4 rounded-lg border">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {currentDeck.deckName}
            </h2>
            <p className="text-gray-600 mb-2">{currentDeck.description}</p>
            <p className="text-sm text-gray-500">
              Question {currentCardIndex + 1} of {currentDeck.cards.length}
            </p>
          </div>
        </div>

        {/* Main Quiz Interface */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <QuestionDisplay
            question={currentQuestion}
            quizState={quizState}
            onAnswerSelect={onAnswerSelect}
          />

          <QuizNavigation
            canProceed={isAnswered}
            isLastQuestion={isLastQuestion}
            onNext={onNextQuestion}
            onComplete={onQuizComplete}
          />
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentCardIndex + (isAnswered ? 1 : 0)) / currentDeck.cards.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
