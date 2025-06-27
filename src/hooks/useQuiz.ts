import { useState, useCallback, useMemo } from 'react';
import { QuizDeck, QuizState, QuizActions } from '../types';

/**
 * Custom hook following Single Responsibility Principle
 * Manages quiz state and provides quiz-related actions
 */
export function useQuiz(deck: QuizDeck): QuizState & QuizActions {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | undefined>(undefined);

  const currentQuestion = deck.cards[currentCardIndex];
  const isAnswered = selectedAnswerId !== undefined;
  const isCorrect = selectedAnswerId === currentQuestion?.correctAnswerId;
  const isLastQuestion = currentCardIndex === deck.cards.length - 1;

  // Memoized state object to prevent unnecessary re-renders
  const quizState = useMemo((): QuizState => ({
    currentCardIndex,
    selectedAnswerId,
    isAnswered,
    isCorrect,
  }), [currentCardIndex, selectedAnswerId, isAnswered, isCorrect]);

  // Optimized event handlers using useCallback
  const onAnswerSelect = useCallback((answerId: number) => {
    if (!isAnswered) {
      setSelectedAnswerId(answerId);
    }
  }, [isAnswered]);

  const onNextQuestion = useCallback(() => {
    if (isLastQuestion) {
      // Could emit quiz completion event or reset
      setCurrentCardIndex(0);
    } else {
      setCurrentCardIndex(prev => prev + 1);
    }
    setSelectedAnswerId(undefined);
  }, [isLastQuestion]);

  const onQuizComplete = useCallback(() => {
    // Reset quiz to beginning
    setCurrentCardIndex(0);
    setSelectedAnswerId(undefined);
  }, []);

  return {
    ...quizState,
    onAnswerSelect,
    onNextQuestion,
    onQuizComplete,
  };
}
