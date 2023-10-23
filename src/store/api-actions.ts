import { APIRoute, AuthorizationStatus } from '../const';
import { setToken } from '../services/token';
import { transformQuestions } from '../services/transform-questions';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { Questions } from '../types/question';
import { UserData } from '../types/user-data';
import { loadQuestions, requireAuthorization, setIsQuestionsLoading } from './action';


export const fetchQuestionsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsQuestionsLoading(true));
    const {data} = await api.get<Questions>(APIRoute.Questions);
    dispatch(loadQuestions(transformQuestions(data)));
    dispatch(setIsQuestionsLoading(false));
  };

export const checkAuthStatusAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };
