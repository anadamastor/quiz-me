import React from 'react';
import { AnswerOption } from './AnswerOption';
import { QuestionFeedback } from './QuestionFeedback';
import { QuestionDisplayProps } from '../types';

/**
 * Responsible for rendering a complete question with answers and feedback
 * Follows Single Responsibility and Composition principles
 */
export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  quizState,
  onAnswerSelect
}) => {
  const { selectedAnswerId, isAnswered, isCorrect } = quizState;

  return (
    <div className="question-container">
      <h1 className="text-2xl mb-6 font-semibold text-gray-900">
        {question.question}
      </h1>

      <ul 
        className="space-y-2" 
        role="radiogroup" 
        aria-labelledby="question-title"
      >
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer.id}
            answer={answer}
            isSelected={selectedAnswerId === answer.id}
            isCorrect={answer.id === question.correctAnswerId}
            isAnswered={isAnswered}
            onSelect={onAnswerSelect}
          />
        ))}
      </ul>

      <QuestionFeedback
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        explanation={question.explanation}
      />
    </div>
  );
};
