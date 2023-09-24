import GameOverScreen from '../game-over-screen/game-over-screen';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';

type AppProps = {
  errorsCount: number;
}

function App({errorsCount}: AppProps): JSX.Element {
  return <GameOverScreen />;
}

export default App;
