import { checkAnswer, incrementMistake, incrementStep, resetGame } from '../store/action';

export enum ActionType {
  IncrementMistake = 'game/incrementMistake',
  IncrementStep = 'game/incrementStep',
  ResetGame = 'game/resetGame',
  CheckUserAnswer = 'game/checkUserAnswer'
}

export type Actions = ReturnType<typeof incrementMistake> | ReturnType<typeof incrementStep> | ReturnType<typeof resetGame> | ReturnType<typeof checkAnswer>
