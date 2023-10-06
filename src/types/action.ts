import { Question, UserAnswer } from './question';

export enum ActionType {
  IncrementMistake = 'game/incrementMistake',
  IncrementStep = 'game/incrementStep',
  ResetGame = 'game/resetGame',
  CheckAnswer = 'game/checkAnswer'
}

export type IncrementMistakeAction = {
  type: ActionType.IncrementMistake;
  payload: number;
}

export type IncrementStepAction = {
  type: ActionType.IncrementStep;
}

export type ResetGameAction = {
  type: ActionType.ResetGame;
}

export type CheckAnswerAction = {
  type: ActionType.CheckAnswer;
  payload: {
    question: Question;
    userAnswer: UserAnswer;
  };
}

export type Actions = IncrementMistakeAction | IncrementStepAction | ResetGameAction
