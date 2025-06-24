import { useState } from "react";
import { Card } from "../decks/constants";
import { PossibleAnswer } from "./possible-answer";

export const PossibleAnswers = ({ card }: { card: Card }) => {
  const { answers, correctAnswerId, explanation, question } = card;
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>();

  const handleSelect = (id: number) => {
    setSelectedId(id);
    setIsCorrect(id === correctAnswerId);
  };

  return (
    <>
      <ul className="h-80">
        {answers.map((answer) => {
          return (
            <PossibleAnswer
              key={question}
              id={answer.id}
              answerText={answer.text}
              question={question}
              isCorrect={isCorrect}
              selectedId={selectedId}
              handleSelect={handleSelect}
            />
          );
        })}
      </ul>
      {selectedId !== undefined && (
        <div className="py-4">
          {isCorrect ? (
            <p className="text-green-700">Correct! {explanation}</p>
          ) : (
            <p className="text-red-700">Incorrect. Try again!</p>
          )}
        </div>
      )}    </>
  );
};
