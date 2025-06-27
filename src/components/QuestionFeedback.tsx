import React from 'react';

interface QuestionFeedbackProps {
  isAnswered: boolean;
  isCorrect: boolean;
  explanation: string;
}

/**
 * Single responsibility: Display feedback after answer selection
 * Separated from answer rendering for better maintainability
 */
export const QuestionFeedback: React.FC<QuestionFeedbackProps> = ({
  isAnswered,
  isCorrect,
  explanation
}) => {
  if (!isAnswered) {
    return null;
  }

  return (
    <div className="py-4 px-4 rounded-md mt-4 border-l-4" role="alert">
      {isCorrect ? (
        <div className="bg-green-50 border-l-green-400 text-green-700">
          <p className="font-semibold">✅ Correct!</p>
          <p className="mt-2">{explanation}</p>
        </div>
      ) : (
        <div className="bg-red-50 border-l-red-400 text-red-700">
          <p className="font-semibold">❌ Incorrect</p>
          <p className="mt-2">Try again or proceed to see the explanation.</p>
        </div>
      )}
    </div>
  );
};
