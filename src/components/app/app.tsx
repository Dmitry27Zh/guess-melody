import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen';
import AuthScreen from '../auth-screen/auth-screen';
import WinScreen from '../win-screen/win-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  errorsCount: number;
}

function App({errorsCount}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<WelcomeScreen errorsCount={errorsCount} />}/>
          <Route path={AppRoute.DevArtist} element={<QuestionArtistScreen />}/>
          <Route path={AppRoute.DevGenre} element={<QuestionGenreScreen />} />
          <Route path={AppRoute.Login} element={<AuthScreen />} />
          <Route path={AppRoute.Result} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><WinScreen /></PrivateRoute>} />
          <Route path={AppRoute.Lose} element={<GameOverScreen />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
