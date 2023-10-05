import { FIRST_GAME_STEP } from '../const';
import { ActionType, Actions } from '../types/action';

const initialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP
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
    default:
      return state;
  }
};

export {reducer};