import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { Questions } from '../types/question';
import { loadQuestions } from './action';


export const fetchQuestionsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Questions>(APIRoute.Questions);
    dispatch(loadQuestions(data));
  };
