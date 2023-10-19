import { AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { IsQuestionsLoading, Question, Questions, UserAnswer } from '../types/question';
import { Error } from '../types/state';

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

export const loadQuestions = (questions: Questions) => ({
  type: ActionType.LoadQuestions,
  payload: questions
}) as const;

export const requireAuthorization = (authorizationStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authorizationStatus
}) as const;

export const setIsQuestionsLoading = (isQuestionsLoading: IsQuestionsLoading) => ({
  type: ActionType.SetIsQuestionsLoading,
  payload: isQuestionsLoading
}) as const;

export const setError = (error: Error) => ({
  type: ActionType.SetError,
  payload: error
}) as const;
