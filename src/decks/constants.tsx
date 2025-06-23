const card1 = {
  question: "What does the term 'snapshot' refer to in React?",
  answers: [
    { id: 0, text: "A static copy of the entire app's state." },
    { id: 1, text: "The component instance's true value of state." },
    {
      id: 2,
      text: "The data available at a specific moment in time after a render.",
    },
    {
      id: 3,
      text: "A representation of the UI components as they appear in memory.",
    },
  ],
  correctAnswerId: 2,
};

const card2 = {
  question:
    "What is the main difference between a snapshot and an instance in React?",
  answers: [
    {
      id: 0,
      text: "An instance is a temporary object, while a snapshot is permanent.",
    },
    { id: 1, text: "A snapshot holds the true value of state." },
    {
      id: 2,
      text: "An instance holds the true value of state, while a snapshot captures state at a specific moment.",
    },
    {
      id: 3,
      text: "A snapshot is a static representation of the UI at any time.",
    },
  ],
  correctAnswerId: 2,
};

const card3 = {
  question: "What does 'INITIAL_STATE' represent in the code example?",
  answers: [
    {
      id: 0,
      text: "The starting state of the 'user', with the value { name: 'Ivy' }.",
    },
    { id: 1, text: "The ending state of the 'user'." },
    { id: 2, text: "A global constant representing app configuration." },
    { id: 3, text: "The default state object defined for the application." },
  ],
  correctAnswerId: 0,
};

export const CARDS: Card[] = [card1, card2, card3];

export type Card = {
  question: string;
  answers: { id: number; text: string }[];
  correctAnswerId: number;
};
