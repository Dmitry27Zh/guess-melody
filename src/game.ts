import { GameType } from './const';
import { Question, UserAnswer, QuestionArtist, UserArtistAnswer, QuestionGenre, UserGenreAnswer } from './types/question';

const isArtistQuestion = (question: Question): question is QuestionArtist => question.type === GameType.Artist;
const isUserArtistAnswer = (userAnswer: UserAnswer): userAnswer is UserArtistAnswer => typeof userAnswer === 'string';
const isGenreQuestion = (question: Question): question is QuestionGenre => question.type === GameType.Genre;
const isUserGenreAnswer = (answer: UserAnswer): answer is UserGenreAnswer => Array.isArray(answer);

const isArtistAnswerCorrect = (question: QuestionArtist, userAnswer: UserArtistAnswer): boolean => userAnswer === question.song.artist;

export const isAnswerCorrect = (question: Question, userAnswer: UserAnswer): boolean => {
  if (isArtistQuestion(question) && isUserArtistAnswer(userAnswer)) {
    return isArtistAnswerCorrect(question, userAnswer);
  }

  if (isGenreQuestion(question) && isUserGenreAnswer(userAnswer)) {
    return userAnswer.every((answer, index) => answer === (question.answers[index].genre === question.genre));
  }

  return false;
};
