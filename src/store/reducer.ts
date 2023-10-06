import { questions } from './../mock/questions';
import { FIRST_GAME_STEP } from '../const';
import { isAnswerCorrect } from '../game';
import { ActionType, Actions } from '../types/action';

const initialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
  questions
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
    default:
      return state;
  }
};

export {reducer};
