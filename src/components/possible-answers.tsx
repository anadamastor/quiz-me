import { useState } from "react";
import { Card } from "../decks/constants";
import { PossibleAnswer } from "./possible-answer";

export const PossibleAnswers = ({ card }: { card: Card }) => {
  const { answers, correctAnswerId, question } = card;
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <ul className="h-80">
      {answers.map((answer) => {
        return (
          <PossibleAnswer
            key={answer.id}
            id={answer.id}
            text={answer.text}
            correctAnswerId={correctAnswerId}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        );
      })}
    </ul>
  );
};
