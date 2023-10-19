import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { Questions } from '../types/question';
import { loadQuestions, setIsQuestionsLoading } from './action';


export const fetchQuestionsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsQuestionsLoading(true));
    const {data} = await api.get<Questions>(APIRoute.Questions);
    dispatch(loadQuestions(data));
    dispatch(setIsQuestionsLoading(false));
  };
