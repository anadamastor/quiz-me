import { QuizDeck } from '../types';
import { 
  REACT_RENDER_CYCLE_DECK_MEMOIZATION,
  PRIVATE_EQUITY_DECK,
  HEGDE_FUND_DECK,
  PRIVATE_DEBT_DECK,
  PRIVATE_REAL_ESTATE_DECK,
  INFRASTRUCTURES_DECK,
  STRUCTURE_NOTE_DECK,
  ALTERNATIVE_INVESTMENTS_DECK
} from '../decks/decks';

/**
 * Service layer following Single Responsibility Principle
 * Handles quiz data access and management
 */
export class QuizService {
  private static readonly QUIZ_DECKS: Record<string, QuizDeck> = {
    'react-render-cycle': REACT_RENDER_CYCLE_DECK_MEMOIZATION,
    'private-equity': PRIVATE_EQUITY_DECK,
    'hedge-funds': HEGDE_FUND_DECK,
    'private-debt': PRIVATE_DEBT_DECK,
    'private-real-estate': PRIVATE_REAL_ESTATE_DECK,
    'infrastructure': INFRASTRUCTURES_DECK,
    'structured-notes': STRUCTURE_NOTE_DECK,
    'alternative-investments': ALTERNATIVE_INVESTMENTS_DECK,
  };

  /**
   * Get all available quiz decks
   */
  static getAllDecks(): QuizDeck[] {
    return Object.values(this.QUIZ_DECKS);
  }

  /**
   * Get a specific quiz deck by key
   */
  static getDeck(key: string): QuizDeck | null {
    return this.QUIZ_DECKS[key] || null;
  }

  /**
   * Get available deck keys
   */
  static getDeckKeys(): string[] {
    return Object.keys(this.QUIZ_DECKS);
  }

  /**
   * Get default deck (first available)
   */
  static getDefaultDeck(): QuizDeck {
    const firstKey = this.getDeckKeys()[0];
    return this.QUIZ_DECKS[firstKey];
  }

  /**
   * Validate deck structure
   */
  static validateDeck(deck: QuizDeck): boolean {
    return (
      deck &&
      typeof deck.deckName === 'string' &&
      typeof deck.description === 'string' &&
      Array.isArray(deck.cards) &&
      deck.cards.length > 0 &&
      deck.cards.every(card => 
        typeof card.question === 'string' &&
        Array.isArray(card.answers) &&
        card.answers.length > 0 &&
        typeof card.correctAnswerId === 'number' &&
        typeof card.explanation === 'string'
      )
    );
  }
}
