import { useState } from "react";
import { CARDS, type Card } from "./constants";
import React from "react";

const PossibleAnswers = ({
  card,
  setCardIndex,
}: {
  card: Card;
  setCardIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { question, answers, correctAnswer } = card;
  const [isCorrect, setIsCorrect] = useState(false);
  return (
    <ul className="h-80">
      {Object.entries(answers).map(([answerIndex, answer], questionIndex) => {
        return (
          <>
            <li
              className={`flex align-middle my-2 px-4 border rounded-full py-4 shadow-md hover:bg-slate-100 hover:cursor-pointer ${
                isCorrect ? " bg-lime-300" : ""
              }`}
              key={answerIndex}
              onClick={() => {
                if (parseInt(answerIndex) === correctAnswer) {
                  setIsCorrect(true);
                }
              }}
            >
              <input
                type="radio"
                name={question}
                id={`${questionIndex}-${answerIndex}`}
                value={answerIndex}
              />
              <label
                htmlFor={`${questionIndex}-${answerIndex}`}
                className={"ml-3 text-lg text-gray-800"}
              >
                {answer}
              </label>
            </li>
          </>
        );
      })}
    </ul>
  );
};

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const card = CARDS[cardIndex];
  return (
    <>
      <div className={"max-w-4xl min-w-md mx-auto pt-20"}>
        <div className={"mx-8 rounded-sm align-middle"}>
          <h1 className={"text-4xl mb-10 h-20"}>{card.question}</h1>
          <PossibleAnswers card={card} setCardIndex={setCardIndex} />
          <div className={"flex justify-center mt-5"}>
            <button
              className={
                "bg-slate-400 bg-opacity-20 text-yellow-100 px-11 py-2 border"
              }
              onClick={() => {
                setCardIndex((prevCardIndex) => {
                  const nextIndex = prevCardIndex + 1;
                  if (nextIndex === CARDS.length) {
                    return 0;
                  }
                  return nextIndex;
                });
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
