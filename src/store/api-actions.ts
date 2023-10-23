import { APIRoute, AuthorizationStatus } from '../const';
import { transformQuestions } from '../services/transform-questions';
import { ThunkActionResult } from '../types/action';
import { Questions } from '../types/question';
import { loadQuestions, requireAuthorization, setIsQuestionsLoading } from './action';


export const fetchQuestionsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsQuestionsLoading(true));
    const {data} = await api.get<Questions>(APIRoute.Questions);
    dispatch(loadQuestions(transformQuestions(data)));
    dispatch(setIsQuestionsLoading(false));
  };

export const checkAuthStatus = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  };
