import React from 'react';
import { AnswerOptionProps } from '../types';

/**
 * Single responsibility: Render a single answer option
 * Follows the principle of separation of concerns
 */
export const AnswerOption: React.FC<AnswerOptionProps> = ({
  answer,
  isSelected,
  isCorrect,
  isAnswered,
  onSelect
}) => {
  const handleClick = () => {
    if (!isAnswered) {
      onSelect(answer.id);
    }
  };

  // Compute styling based on state - extracted for clarity
  const getOptionStyling = () => {
    const baseClasses = "align-middle my-4 px-4 border py-4 shadow-md transition-all duration-200";
    const hoverClasses = !isAnswered ? "hover:border-slate-600 hover:cursor-pointer active:shadow-md" : "";
    
    if (isSelected && isAnswered) {
      if (isCorrect) {
        return `${baseClasses} bg-green-100 border-green-500 text-green-800`;
      } else {
        return `${baseClasses} bg-red-100 border-red-500 text-red-800`;
      }
    }
    
    return `${baseClasses} ${hoverClasses}`;
  };

  return (
    <li 
      className={getOptionStyling()}
      onClick={handleClick}
      role="button"
      tabIndex={isAnswered ? -1 : 0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !isAnswered) {
          e.preventDefault();
          onSelect(answer.id);
        }
      }}
      aria-selected={isSelected}
      aria-disabled={isAnswered}
    >
      <input
        type="radio"
        id={`answer-${answer.id}`}
        value={answer.text}
        checked={isSelected}
        onChange={() => {}} // Controlled by parent click handler
        disabled={isAnswered}
        className="mr-3"
        aria-hidden="true" // Screen readers should use the li's role instead
      />
      <label 
        htmlFor={`answer-${answer.id}`} 
        className="text-lg text-gray-800 cursor-pointer"
      >
        {answer.text}
      </label>
    </li>
  );
};
