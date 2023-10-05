import { store } from '..';

export type State = {
  mistakes: number;
  step: number;
};

export type AppDispatch = typeof store.dispatch
