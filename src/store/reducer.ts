import { AuthorizationStatus, FIRST_GAME_STEP } from '../const';
import { isAnswerCorrect } from '../game';
import { ActionType, Actions } from '../types/action';
import { IsQuestionsLoading, Questions } from '../types/question';
import { Error } from '../types/state';

type InitialState = {
  mistakes: number;
  step: number;
  questions: Questions;
  authorizationStatus: AuthorizationStatus;
  isQuestionsLoading: IsQuestionsLoading;
  error: Error;
}

const initialState: InitialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
  questions: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isQuestionsLoading: false,
  error: null
};

const STEP_COUNT = 1;

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.IncrementMistake:
      return {...state, mistakes: state.mistakes + action.payload};
    case ActionType.IncrementStep:
      return {...state, step: state.step + STEP_COUNT};
    case ActionType.ResetGame:
      return {...initialState};
    case ActionType.CheckUserAnswer: {
      const {question, userAnswer} = action.payload;
      const mistakes = state.mistakes + Number(!isAnswerCorrect(question, userAnswer));

      return {...state, mistakes};
    }
    case ActionType.LoadQuestions:
      return {...state, questions: action.payload};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.SetIsQuestionsLoading:
      return {...state, isQuestionsLoading: action.payload};
    case ActionType.SetError:
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export {reducer};
