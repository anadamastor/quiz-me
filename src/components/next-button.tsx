import { Card } from "../decks/constants";

type NextButtonProps = {
  allCards: Card[];
  setCardIndex: () => void;
};

export const NextButton = ({ allCards, setCardIndex }) => {
  return (
    <div className={"flex justify-center mt-5"}>
      <button
        className={
          "bg-slate-400 bg-opacity-20 text-yellow-100 px-11 py-2 border"
        }
        onClick={() => {
          setCardIndex((prevCardIndex) => {
            const nextIndex = prevCardIndex + 1;
            if (nextIndex === allCards.length) {
              return 0;
            }
            return nextIndex;
          });
        }}
      >
        Next
      </button>
    </div>
  );
};
