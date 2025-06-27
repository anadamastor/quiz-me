# Quiz App State Flow Explanation

## Your Questions Answered

### 1. **useQuiz Hook Purpose**

```typescript
const {
  currentCardIndex,
  selectedAnswerId, 
  isAnswered,
  isCorrect,
  onAnswerSelect,
  onNextQuestion,
  onQuizComplete
} = useQuiz(currentDeck);
```

Yes, `useQuiz` provides **all the logic** when a deck is selected. It manages:
- Which question you're on (`currentCardIndex`)
- Which answer you selected (`selectedAnswerId`) 
- Whether you've answered (`isAnswered`)
- Whether your answer is correct (`isCorrect`)

### 2. **Why Memoize quizState?**

```typescript
// This prevents unnecessary re-renders
const quizState = useMemo(() => ({
  currentCardIndex,
  selectedAnswerId,
  isAnswered,
  isCorrect,
}), [currentCardIndex, selectedAnswerId, isAnswered, isCorrect]);
```

**You're exactly right!** Here's why:

#### Without `useMemo`:
```typescript
// BAD - Creates new object every render
const quizState = {
  currentCardIndex,
  selectedAnswerId, 
  isAnswered,
  isCorrect,
};

// Even if values are the same, this is a NEW object every time
// So child components think props changed and re-render unnecessarily
```

#### With `useMemo`:
```typescript
// GOOD - Only creates new object when values actually change
const quizState = useMemo(() => ({...}), [deps]);

// React can say "oh, this is the SAME object as last time"
// So child components don't re-render unless values actually changed
```

### 3. **How State Flows Down**

```typescript
// App.tsx gets state from hook
const { isCorrect, selectedAnswerId, isAnswered } = useQuiz(currentDeck);

// App.tsx passes it down to child
<QuestionDisplay quizState={quizState} />

// QuestionDisplay destructures it
const { selectedAnswerId, isAnswered, isCorrect } = quizState;
```

### 4. **Is `isCorrect` Calculated Every Time?**

**Yes, but it's very fast!** Let's look at the hook:

```typescript
// In useQuiz.ts
const isCorrect = selectedAnswerId === currentQuestion?.correctAnswerId;
//                     ↑                      ↑
//                user's choice          correct answer ID
```

This runs every render, but it's just a **simple comparison** - super fast!

### 5. **State is Related to Current Question**

**Absolutely!** Here's the flow:

```typescript
// 1. Hook tracks which question we're on
const [currentCardIndex, setCurrentCardIndex] = useState(0);

// 2. Gets the current question from deck
const currentQuestion = deck.cards[currentCardIndex]; 

// 3. Checks if selected answer matches THIS question's correct answer
const isCorrect = selectedAnswerId === currentQuestion?.correctAnswerId;
```

When you go to the next question:
```typescript
const onNextQuestion = useCallback(() => {
  setCurrentCardIndex(prev => prev + 1); // Move to next question
  setSelectedAnswerId(undefined);        // Clear previous answer
}, [isLastQuestion]);
```

So yes, `{ selectedAnswerId, isAnswered, isCorrect }` is **always related to the current question you're seeing**.

## Visual Flow:

```
useQuiz Hook:
├── currentCardIndex: 2 (showing question 3)
├── selectedAnswerId: 1 (user picked option 1)
├── currentQuestion: deck.cards[2] (question 3 data)
└── isCorrect: selectedAnswerId === currentQuestion.correctAnswerId
                     ↑                            ↑
                   (1)                         (2) 
                                        
Result: isCorrect = false (1 ≠ 2)
```

## Key React Concepts

### Why Memoization Matters
- React re-renders when state changes
- Creating new objects causes child components to re-render
- `useMemo` prevents unnecessary re-renders by keeping same object reference
- This improves performance, especially with complex component trees

### State Ownership
- `useQuiz` owns and manages all quiz-related state
- Components receive state as props (data flows down)
- Actions flow up through callbacks
- Single source of truth prevents sync issues

### Computed Values
- `isCorrect`, `isAnswered` are computed from base state
- They recalculate automatically when dependencies change
- Very fast operations (simple comparisons)
- React optimizes these calculations

The beauty of this pattern is that React automatically re-runs these calculations when state changes, keeping everything in sync!
