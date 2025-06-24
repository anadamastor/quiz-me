import { useState } from "react";

export const PossibleAnswer = ({
  id,
  answerText,
  question,
  isCorrect,
  selectedId,
  handleSelect
}: {
  id: number;
  answerText: string;
  question: string;
  isCorrect: boolean
  selectedId?: number
  handleSelect: (id: number) => void
}) => {


  return (
    <>
      <li
        className={` align-middle my-4 px-4 border py-4 shadow-md hover:border-slate-600 hover:cursor-pointer active:shadow-md ${(selectedId === id && isCorrect) && " bg-lime-400 border-slate-600"} 
        ${(selectedId === id && !isCorrect) && " bg-red-400 border-slate-600"}`}
        key={id}
        onClick={() => handleSelect(id)}
      >
        <input
          type="radio"
          key={id}
          value={answerText}
          name={question}
          checked={id === selectedId}
        />
        <label htmlFor={`${id}`} className={"ml-3 text-lg text-gray-800"}>
          {answerText}
        </label>

      </li >
    </>
  );
};
