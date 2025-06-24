import { useState } from "react";
import { NextButton } from "./components/next-button";
import { PossibleAnswers } from "./components/possible-answers";
import { CARDS } from "./decks/constants";
import { NEW_CARDS, REACT_RENDER_CYCLE_DECK_MEMOIZATION } from "./decks/decks";

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const card = REACT_RENDER_CYCLE_DECK_MEMOIZATION.cards[cardIndex];
  return (
    <>
      <div className={"max-w-4xl min-w-md mx-auto pt-20"}>
        <div className={"mx-8 align-middle"}>
          <h1 className={"text-2xl mb-4"}>{card.question}</h1>

          <PossibleAnswers card={card} key={cardIndex} />
          <NextButton allCards={REACT_RENDER_CYCLE_DECK_MEMOIZATION} setCardIndex={setCardIndex} />
        </div>
      </div>
    </>
  );
}

export default App;
