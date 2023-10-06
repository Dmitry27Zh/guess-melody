import { ActionType } from '../types/action';
import { Question, UserAnswer } from '../types/question';

export const incrementMistake = (count: number) => ({
  type: ActionType.IncrementMistake,
  payload: count
} as const);

export const incrementStep = () => ({
  type: ActionType.IncrementStep
} as const);

export const resetGame = () => ({
  type: ActionType.ResetGame
} as const);

export const checkAnswer = (question: Question, userAnswer: UserAnswer) => ({
  type: ActionType.CheckUserAnswer,
  payload: {
    question,
    userAnswer,
  }
} as const);
