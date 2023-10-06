import { ActionType, CheckAnswerAction, IncrementMistakeAction, IncrementStepAction, ResetGameAction } from '../types/action';
import { Question, UserAnswer } from '../types/question';

export const incrementMistake = (count: number): IncrementMistakeAction => ({
  type: ActionType.IncrementMistake,
  payload: count
});

export const incrementStep = (): IncrementStepAction => ({
  type: ActionType.IncrementStep
});

export const resetGame = (): ResetGameAction => ({
  type: ActionType.ResetGame
});

export const checkAnswer = (question: Question, userAnswer: UserAnswer): CheckAnswerAction => ({
  type: ActionType.CheckUserAnswer,
  payload: {
    question,
    userAnswer,
  }
});
