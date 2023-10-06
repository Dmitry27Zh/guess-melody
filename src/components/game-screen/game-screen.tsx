import { Question, UserAnswer } from '../../types/question';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen';
import { AppRoute, GameType } from '../../const';
import { Navigate, useNavigate } from 'react-router-dom';
import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player';
import { checkAnswer, incrementStep } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Mistakes from '../mistakes/mistakes';

type GameScreenProps = {
  questions: Question[];
}

const QuestionArtistScreenWrapped = withAudioPlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withAudioPlayer(QuestionGenreScreen);

function GameScreen({questions}: GameScreenProps):JSX.Element {
  const step = useAppSelector((state) => state.step);
  const mistakes = useAppSelector((state) => state.mistakes);
  const question = questions[step];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onAnswer = (userAnswer: UserAnswer) => {
    const isGameOver = step === questions.length - 1;
    dispatch(checkAnswer(question, userAnswer));

    if (isGameOver) {
      navigate(AppRoute.Root);
    } else {
      dispatch(incrementStep());
    }
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
