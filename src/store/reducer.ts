import { FIRST_GAME_STEP } from '../const';
import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';

const initialState: State = {
  mistakes: 0,
  step: FIRST_GAME_STEP
};

const STEP_COUNT = 1;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.IncrementMistake:
      return {...state, mistakes: state.mistakes + action.payload};
    case ActionType.IncrementStep:
      return {...state, step: state.step + STEP_COUNT};
    default:
      return state;
  }
};

export {reducer};
