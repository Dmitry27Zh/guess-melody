import { UserAnswer } from '../../types/question';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen';
import { AppRoute, GameType, MAX_MISTAKE_COUNT } from '../../const';
import { Navigate } from 'react-router-dom';
import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player';
import { checkAnswer, incrementStep } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Mistakes from '../mistakes/mistakes';

const QuestionArtistScreenWrapped = withAudioPlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withAudioPlayer(QuestionGenreScreen);

function GameScreen():JSX.Element {
  const step = useAppSelector((state) => state.step);
  const mistakes = useAppSelector((state) => state.mistakes);
  const questions = useAppSelector((state) => state.questions);
  const question = questions[step];
  const dispatch = useAppDispatch();
  const isGameOver = step === questions.length;
  const isLost = mistakes > MAX_MISTAKE_COUNT;

  if (isLost) {
    return <Navigate to={AppRoute.Lose}></Navigate>;
  }

  if (isGameOver) {
    return <Navigate to={AppRoute.Root}></Navigate>;
  }

  const onAnswer = (userAnswer: UserAnswer) => {
    dispatch(checkAnswer(question, userAnswer));
    dispatch(incrementStep());
  };

  switch (question.type) {
    case GameType.Genre:
      return (
        <QuestionGenreScreenWrapped
          question={question}
          onAnswer={onAnswer}
        >
          <Mistakes count={mistakes}/>
        </QuestionGenreScreenWrapped>
      );
    case GameType.Artist:
      return (
        <QuestionArtistScreenWrapped
          question={question}
          onAnswer={onAnswer}
        >
          <Mistakes count={mistakes}/>
        </QuestionArtistScreenWrapped>);
    default:
      return <Navigate to={AppRoute.Root}/>;
  }
}

export default GameScreen;
