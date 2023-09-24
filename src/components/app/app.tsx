import QuestionArtistScreen from '../question-artist-screen/question-artist-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';

type AppProps = {
  errorsCount: number;
}

function App({errorsCount}: AppProps): JSX.Element {
  return <QuestionArtistScreen />;
}

export default App;
