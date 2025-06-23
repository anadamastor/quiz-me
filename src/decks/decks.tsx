export type Card = {
  question: string;
  answers: { id: number; text: string }[];
  correctAnswerId: number;
  explanation: string;
};

export const NEW_CARDS: Card[] = [
  {
    question:
      "Why does React recommend using unique and stable keys when rendering lists?",
    answers: [
      { id: 1, text: "To improve SEO ranking" },
      { id: 2, text: "To keep the UI responsive to network speed" },
      {
        id: 3,
        text: "To help React identify which items have changed, been added, or removed",
      },
      { id: 4, text: "To automatically memoize list items" },
    ],
    correctAnswerId: 3,
    explanation:
      "Keys help React efficiently update the DOM by identifying which items changed, were added, or removed during reconciliation.",
  },
  {
    question:
      "In React, when you give all items in a list the same `key`, what is a likely outcome?",
    answers: [
      { id: 1, text: "React ignores the key and rerenders all items anyway" },
      {
        id: 2,
        text: "React treats all items as the same, leading to incorrect UI updates",
      },
      { id: 3, text: "React automatically creates keys based on index" },
      { id: 4, text: "The app will crash with a key error" },
    ],
    correctAnswerId: 2,
    explanation:
      "React uses keys to track each item. If they’re the same, React can't differentiate between them and will reuse or merge them incorrectly.",
  },
  {
    question: "Why is lifting state up a common pattern in React?",
    answers: [
      {
        id: 1,
        text: "It allows parent components to manage shared state between children",
      },
      { id: 2, text: "It avoids the use of useEffect" },
      { id: 3, text: "It makes components pure functions" },
      { id: 4, text: "It improves the performance of event handlers" },
    ],
    correctAnswerId: 1,
    explanation:
      "Lifting state up enables sibling or nested components to share and modify the same data through their common parent.",
  },
  {
    question:
      "How can you ensure a component fully resets its internal state when props change?",
    answers: [
      { id: 1, text: "Use `useMemo` to recompute values" },
      { id: 2, text: "Pass a new key to the component to force remount" },
      { id: 3, text: "Use `useEffect` with a cleanup function" },
      { id: 4, text: "Wrap the component in `React.memo`" },
    ],
    correctAnswerId: 2,
    explanation:
      "Changing a component's key causes React to unmount and remount it, effectively resetting its internal state.",
  },
  {
    question:
      "What happens if you store selection state inside each `PossibleAnswer` component?",
    answers: [
      { id: 1, text: "Each answer will know when others are selected" },
      {
        id: 2,
        text: "React will share state across all answers automatically",
      },
      {
        id: 3,
        text: "Each answer manages its own state, so multiple can appear selected at once",
      },
      { id: 4, text: "It forces a re-render of the entire app" },
    ],
    correctAnswerId: 3,
    explanation:
      "Each component is isolated, so without shared state, they can't coordinate — multiple answers might show as selected.",
  },
  {
    question: "What does `useState` return?",
    answers: [
      { id: 1, text: "The current state and a function to update it" },
      { id: 2, text: "Only a getter for state" },
      { id: 3, text: "A reference to a global state object" },
      { id: 4, text: "A memoized version of state" },
    ],
    correctAnswerId: 1,
    explanation:
      "`useState` returns an array with the current state value and a setter function to update it asynchronously.",
  },
  {
    question: "When is the function passed to `useEffect` called?",
    answers: [
      { id: 1, text: "Only when the component is unmounted" },
      { id: 2, text: "After every render, unless dependencies are provided" },
      { id: 3, text: "Before the component renders" },
      { id: 4, text: "Only when state changes" },
    ],
    correctAnswerId: 2,
    explanation:
      "By default, the effect runs after every render. With dependencies, it only runs when one of them changes.",
  },
  {
    question:
      "What happens if you call the setter function from `useState` with the same value as before?",
    answers: [
      { id: 1, text: "The component always re-renders" },
      { id: 2, text: "React throws an error" },
      { id: 3, text: "React skips the re-render for optimization" },
      { id: 4, text: "The state resets to the initial value" },
    ],
    correctAnswerId: 3,
    explanation:
      "React compares the new state to the previous one. If they’re equal (`===`), it skips re-rendering for performance.",
  },
  {
    question: "How do you run an effect only once when the component mounts?",
    answers: [
      { id: 1, text: "Use `useEffect` with no arguments" },
      { id: 2, text: "Use `useEffect` with an empty dependency array" },
      { id: 3, text: "Use `useMemo` instead of `useEffect`" },
      { id: 4, text: "Wrap `useEffect` in a `setTimeout`" },
    ],
    correctAnswerId: 2,
    explanation:
      "Passing an empty dependency array `[]` means the effect only runs after the initial mount, similar to `componentDidMount`.",
  },
  {
    question:
      "What is the purpose of the cleanup function returned from `useEffect`?",
    answers: [
      { id: 1, text: "To trigger the next effect" },
      {
        id: 2,
        text: "To cancel or clean up side effects like timers or subscriptions",
      },
      { id: 3, text: "To avoid memory leaks in `useState`" },
      { id: 4, text: "To store previous props" },
    ],
    correctAnswerId: 2,
    explanation:
      "The cleanup function allows you to clean up subscriptions, timeouts, or other effects before the component unmounts or re-runs the effect.",
  },
];
