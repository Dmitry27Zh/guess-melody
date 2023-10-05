import { Question } from '../../types/question';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen';
import { QuestionGenre } from '../../types/question';
import { QuestionArtist } from '../../types/question';
import { AppRoute, GameType } from '../../const';
import { Navigate } from 'react-router-dom';
import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player';
import { useDispatch } from 'react-redux';
import { incrementStep } from '../../store/action';
import { IncrementStepAction } from '../../types/action';
import { useSelector } from 'react-redux';
import { State } from '../../types/state';

type GameScreenProps = {
  questions: Question[];
}

const QuestionArtistScreenWrapped = withAudioPlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withAudioPlayer(QuestionGenreScreen);

function GameScreen({questions}: GameScreenProps):JSX.Element {
  const step = useSelector<State>((state) => state.step) as number;
  const question = questions[step];
  const dispatch = useDispatch();
  const onAnswer = () => {
    const isGameOver = step === questions.length - 1;

    if (isGameOver) {
      <Navigate to={AppRoute.Root} />;
    } else {
      dispatch<IncrementStepAction>(incrementStep());
    }
  };

  switch (question.type) {
    case GameType.Genre:
      return (
        <QuestionGenreScreenWrapped
          question={question as QuestionGenre}
          onAnswer={onAnswer}
        />
      );
    case GameType.Artist:
      return (
        <QuestionArtistScreenWrapped
          question={question as QuestionArtist}
          onAnswer={onAnswer}
        />);
    default:
      return <Navigate to={AppRoute.Root}/>;
  }
}

export default GameScreen;
