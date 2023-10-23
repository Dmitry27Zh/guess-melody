import { nanoid } from 'nanoid';
import { Questions } from '../types/question';

export const transformQuestions = (questions: Questions) => questions.map((question) => {
  question.answers.forEach((answer) => {
    answer._id = nanoid();
  });

  return question;
});
