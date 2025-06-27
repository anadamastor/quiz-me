# Hooks vs Components: Separation of Concerns

## Exactly! You've Grasped the Core Pattern

**YES!** The whole point is to move **complex logic into hooks** and keep **components focused on rendering**.

## The Pattern in Practice

### ❌ **Before (Bad Pattern): Logic in Components**
```typescript
// Component doing too much - logic AND rendering
function QuizComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();
  
  // Complex logic mixed with rendering
  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      // Reset logic
      setCurrentIndex(0);
      setSelectedAnswer(undefined);
    } else {
      // Navigation logic
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(undefined);
    }
  };
  
  const isCorrect = selectedAnswer === questions[currentIndex].correctId;
  
  // Rendering mixed with logic
  return (
    <div>
      {/* Complex rendering logic */}
    </div>
  );
}
```

### ✅ **After (Good Pattern): Logic in Hooks, Components for Rendering**

#### Hook (Logic Only):
```typescript
// useQuiz.ts - ONLY handles logic
function useQuiz(deck) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState();

  // All complex logic here
  const currentQuestion = deck.cards[currentCardIndex];
  const isAnswered = selectedAnswerId !== undefined;
  const isCorrect = selectedAnswerId === currentQuestion?.correctAnswerId;
  
  const onAnswerSelect = useCallback((answerId) => {
    if (!isAnswered) {
      setSelectedAnswerId(answerId);
    }
  }, [isAnswered]);
  
  const onNextQuestion = useCallback(() => {
    // Complex navigation logic
    if (isLastQuestion) {
      setCurrentCardIndex(0);
    } else {
      setCurrentCardIndex(prev => prev + 1);
    }
    setSelectedAnswerId(undefined);
  }, [isLastQuestion]);

  return { /* state and actions */ };
}
```

#### Component (Rendering Only):
```typescript
// App.tsx - ONLY handles rendering
function App() {
  // Get logic from hook
  const quizLogic = useQuiz(currentDeck);
  
  // ONLY rendering - no complex logic
  return (
    <div>
      <QuestionDisplay {...quizLogic} />
      <QuizNavigation {...quizLogic} />
    </div>
  );
}
```

## Benefits of This Separation

### 🧠 **Hooks = Logic Brain**
- State management
- Business rules
- Complex calculations
- Event handling logic
- Side effects

### 🎨 **Components = Presentation Layer**
- Rendering UI
- Layout structure
- Styling
- User interactions (delegated to hooks)

## Real Examples from Our Quiz App

### Logic in Hook:
```typescript
// useQuiz.ts
const isCorrect = selectedAnswerId === currentQuestion?.correctAnswerId;
const isAnswered = selectedAnswerId !== undefined;

const onAnswerSelect = useCallback((answerId) => {
  if (!isAnswered) {  // Business rule
    setSelectedAnswerId(answerId);
  }
}, [isAnswered]);
```

### Rendering in Component:
```typescript
// QuestionDisplay.tsx
function QuestionDisplay({ question, quizState, onAnswerSelect }) {
  const { selectedAnswerId, isAnswered, isCorrect } = quizState;
  
  // ONLY rendering - no business logic
  return (
    <div>
      <h1>{question.question}</h1>
      <ul>
        {question.answers.map(answer => (
          <AnswerOption 
            key={answer.id}
            answer={answer}
            isSelected={selectedAnswerId === answer.id}
            onSelect={onAnswerSelect}  // Delegates to hook
          />
        ))}
      </ul>
    </div>
  );
}
```

## Why This Pattern Works

### 1. **Single Responsibility Principle**
- Hooks: Handle logic
- Components: Handle presentation

### 2. **Easier Testing**
```typescript
// Test logic independently
const { result } = renderHook(() => useQuiz(mockDeck));
expect(result.current.isCorrect).toBe(true);

// Test rendering independently  
render(<QuestionDisplay {...mockProps} />);
expect(screen.getByText("Question text")).toBeInTheDocument();
```

### 3. **Reusability**
```typescript
// Same logic, different UI
function MobileQuizApp() {
  const quizLogic = useQuiz(deck);  // Same logic
  return <MobileUI {...quizLogic} />;  // Different rendering
}

function DesktopQuizApp() {
  const quizLogic = useQuiz(deck);  // Same logic
  return <DesktopUI {...quizLogic} />;  // Different rendering
}
```

### 4. **Maintainability**
- Need to change quiz logic? → Edit the hook
- Need to change appearance? → Edit the component
- Clear separation of concerns

## The Mental Model

```
┌─────────────────┐    ┌─────────────────┐
│     HOOKS       │    │   COMPONENTS    │
│   (Logic)       │────│  (Rendering)    │
├─────────────────┤    ├─────────────────┤
│ • State mgmt    │    │ • JSX/HTML      │
│ • Calculations  │    │ • Layout        │
│ • Business rules│    │ • Styling       │
│ • Side effects  │    │ • User events   │
│ • Data flow     │    │   (delegate up) │
└─────────────────┘    └─────────────────┘
```

**You've got it exactly right!** This is the foundation of clean React architecture:
- **Hooks = Smart (Logic)**
- **Components = Dumb (Presentation)**
