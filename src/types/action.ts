import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { checkAnswer, incrementMistake, incrementStep, loadQuestions, requireAuthorization, resetGame, setIsQuestionsLoading } from '../store/action';
import { State } from './state';
import { AxiosInstance } from 'axios';

export enum ActionType {
  IncrementMistake = 'game/incrementMistake',
  IncrementStep = 'game/incrementStep',
  ResetGame = 'game/resetGame',
  CheckUserAnswer = 'game/checkUserAnswer',
  LoadQuestions = 'data/loadQuestions',
  RequireAuthorization = 'user/requireAuthorization',
  SetIsQuestionsLoading = 'data/setIsQuestionsLoading'
}

export type Actions = ReturnType<typeof incrementMistake>
  | ReturnType<typeof incrementStep>
  | ReturnType<typeof resetGame>
  | ReturnType<typeof checkAnswer>
  | ReturnType<typeof loadQuestions>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof setIsQuestionsLoading>


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>
