import { Card } from "../decks/constants";

type NextButtonProps = {
  allCards: Card[];
  setCardIndex: () => void;
};

export const NextButton = ({ allCards, setCardIndex }) => {
  return (
    <div className={"flex justify-center"}>
      <button
        className={
          "bg-slate-400 bg-opacity-20 text-yellow-100 px-11 py-2 border hover:bg-slate-500 hover:text-yellow-200 rounded-md shadow-md active:shadow-lg active:bg-slate-600 active:text-yellow-300 transition-all duration-200"
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
