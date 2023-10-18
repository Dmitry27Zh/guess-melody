import { checkAnswer, incrementMistake, incrementStep, loadQuestions, requireAuthorization, resetGame } from '../store/action';

export enum ActionType {
  IncrementMistake = 'game/incrementMistake',
  IncrementStep = 'game/incrementStep',
  ResetGame = 'game/resetGame',
  CheckUserAnswer = 'game/checkUserAnswer',
  LoadQuestions = 'data/loadQuestions',
  RequireAuthorization = 'user/requireAuthorization'
}

export type Actions = ReturnType<typeof incrementMistake> | ReturnType<typeof incrementStep> | ReturnType<typeof resetGame> | ReturnType<typeof checkAnswer> | ReturnType<typeof loadQuestions> | ReturnType<typeof requireAuthorization>
