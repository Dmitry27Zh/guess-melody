import { TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '../store';
import { setError } from '../store/action';

export const processErrorHandle = (message: string) => {
  store.dispatch(setError(message));

  setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
};
