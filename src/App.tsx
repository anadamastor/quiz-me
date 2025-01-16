import { useState } from "react";
import { CARDS } from "./constants";
import React from "react";

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const card = CARDS[cardIndex];
  return (
    <>
      <div className={"max-w-3xl min-w-md mx-auto pt-20"}>
        <div className={"border border-stone-200 shadow-md p-10 mx-8"}>
          <h1 className={"text-4xl mb-10 text-center"}>{card.question}</h1>
          <ul>
            {Object.entries(card.answers).map(
              ([answerIndex, answer], questionIndex) => {
                return (
                  <li
                    className={
                      "flex align-middle my-2 px-4 border rounded-full py-4 hover:shadow-sm hover:bg-slate-100 hover:cursor-pointer"
                    }
                    key={answerIndex}
                    onClick={() =>
                      setCardIndex(Math.floor(Math.random() * 2) + 1)
                    }
                  >
                    <input
                      type="radio"
                      name={card.question}
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
                );
              }
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
