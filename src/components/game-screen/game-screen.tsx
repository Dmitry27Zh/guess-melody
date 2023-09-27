import { useState } from 'react';
import { Question } from '../../types/question';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen';
import { QuestionGenre } from '../../types/question';
import { QuestionArtist } from '../../types/question';
import { AppRoute, FIRST_GAME_STEP, GameType } from '../../const';
import { Navigate } from 'react-router-dom';

type GameScreenProps = {
  questions: Question[];
}

function GameScreen({questions}: GameScreenProps):JSX.Element {
  const [step, setStep] = useState(FIRST_GAME_STEP);
  const question = questions[step];
  const onAnswer = () => {
    const isGameOver = step === questions.length - 1;

    if (isGameOver) {
      <Navigate to={AppRoute.Root} />;
    } else {
      setStep((prevState) => prevState + 1);
    }
  };

  switch (question.type) {
    case GameType.Genre:
      return (
        <QuestionGenreScreen
          question={question as QuestionGenre}
          onAnswer={onAnswer}
        />
      );
    case GameType.Artist:
      return (
        <QuestionArtistScreen
          question={question as QuestionArtist}
          onAnswer={onAnswer}
        />);
    default:
      return <Navigate to={AppRoute.Root}/>;
  }
}

export default GameScreen;
