import React from 'react';
import { NavigationProps } from '../types';

/**
 * Single responsibility: Handle quiz navigation
 * Abstracted from specific button implementations
 */
export const QuizNavigation: React.FC<NavigationProps> = ({
  canProceed,
  isLastQuestion,
  onNext,
  onComplete
}) => {
  const handleNavigation = () => {
    if (isLastQuestion) {
      onComplete();
    } else {
      onNext();
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        className={`
          px-8 py-3 rounded-md font-medium transition-all duration-200 shadow-md
          ${canProceed 
            ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 hover:shadow-lg' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
        onClick={handleNavigation}
        disabled={!canProceed}
        aria-label={isLastQuestion ? 'Complete quiz' : 'Next question'}
      >
        {isLastQuestion ? 'Complete Quiz' : 'Next Question'}
      </button>
    </div>
  );
};
