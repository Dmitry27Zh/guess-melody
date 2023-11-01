import { FormDataState } from '../types/common';
import { Answer } from '../types/question';

export const getQuestionInitialFormData = (answers: Answer[]): FormDataState<boolean> => answers.reduce((result, {_id}) => ({...result, [_id]: false}), {});
