import { useState } from "react";
import { NextButton } from "./components/next-button";
import { PossibleAnswers } from "./components/possible-answers";
import { CARDS } from "./decks/constants";
import { NEW_CARDS } from "./decks/decks";

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  CARDS;
  const card = NEW_CARDS[cardIndex];
  return (
    <>
      <div className={"max-w-4xl min-w-md mx-auto pt-20"}>
        <div className={"mx-8 rounded-sm align-middle"}>
          <h1 className={"text-4xl mb-10 h-20"}>{card.question}</h1>

          <PossibleAnswers card={card} key={cardIndex} />
          <NextButton allCards={NEW_CARDS} setCardIndex={setCardIndex} />
        </div>
      </div>
    </>
  );
}

export default App;
