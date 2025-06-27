// Define core types following separation of concerns
export type Answer = {
  id: number;
  text: string;
}

export type Question = {
  question: string;
  answers: Answer[];
  correctAnswerId: number;
  explanation: string;
}

export type QuizDeck = {
  deckName: string;
  description: string;
  cards: Question[];
}

export type QuizState = {
  currentCardIndex: number;
  selectedAnswerId?: number;
  isAnswered: boolean;
  isCorrect: boolean;
}

// Event handler types
export type QuizActions = {
  onAnswerSelect: (answerId: number) => void;
  onNextQuestion: () => void;
  onQuizComplete: () => void;
}

// Component props types
export type AnswerOptionProps = {
  answer: Answer;
  isSelected: boolean;
  isCorrect?: boolean;
  isAnswered: boolean;
  onSelect: (id: number) => void;
}

export type QuestionDisplayProps = {
  question: Question;
  quizState: QuizState;
  onAnswerSelect: (answerId: number) => void;
}

export type NavigationProps = {
  canProceed: boolean;
  isLastQuestion: boolean;
  onNext: () => void;
  onComplete: () => void;
}
