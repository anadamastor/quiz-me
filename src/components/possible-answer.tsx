import { useState } from "react";

export const PossibleAnswer = ({
  id,
  text,
  correctAnswerId,
  selectedId,
  onSelect,
}: {
  id: number;
  text: string;
  correctAnswerId: number;
  selectedId: number | null;
  onSelect: (id: number) => void;
}) => {
  const isSelected = selectedId === id;
  const isCorrect = isSelected && id === correctAnswerId;
  const isWrong = isSelected && id !== correctAnswerId;

  return (
    <>
      <li
        className={`flex align-middle my-4 px-4 border py-4 shadow-md hover:border-slate-600 hover:cursor-pointer active:shadow-md ${
          isCorrect && " bg-lime-100 border-slate-600"
        } ${isWrong && " bg-red-400 border-slate-600"}`}
        key={id}
        onClick={() => onSelect(id)}
      >
        <input
          type="radio"
          key={id}
          value={text}
          name={text}
          checked={isSelected}
        />
        <label htmlFor={`${id}`} className={"ml-3 text-lg text-gray-800"}>
          {text}
        </label>
      </li>
    </>
  );
};
