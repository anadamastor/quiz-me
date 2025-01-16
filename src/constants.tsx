export const card1 = {
  question: "What does the term 'snapshot' refer to in React?",
  answers: {
    0: "A static copy of the entire app's state.",
    1: "The component instance's true value of state.",
    2: "The data available at a specific moment in time after a render.",
    3: "A representation of the UI components as they appear in memory.",
  },
  correctAnswer: 2,
};
const card2 = {
  question:
    "What is the main difference between a snapshot and an instance in React?",
  answers: {
    0: "An instance is a temporary object, while a snapshot is permanent.",
    1: "A snapshot holds the true value of state.",
    2: "An instance holds the true value of state, while a snapshot captures state at a specific moment.",
    3: "A snapshot is a static representation of the UI at any time.",
  },
  correctAnswer: 2,
};
const card3 = {
  question: "What does 'INITIAL_STATE' represent in the code example?",
  answers: {
    0: "The starting state of the 'user', with the value { name: 'Ivy' }.",
    1: "The ending state of the 'user'.",
    2: "A global constant representing app configuration.",
    3: "The default state object defined for the application.",
  },
  correctAnswer: 0,
};

export const CARDS: Card[] = [card1, card2, card3];
export type Card = {
  question: string;
  answers: { [key: number]: string };
  correctAnswer: number;
};
