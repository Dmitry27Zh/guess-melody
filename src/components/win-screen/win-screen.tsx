import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetGame } from '../../store/action';

function WinScreen(): JSX.Element {
  const step = useAppSelector((state) => state.step);
  const mistakes = useAppSelector((state) => state.mistakes);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const correctAnswersCount = step - mistakes;

  return (
    <section className="result">
      <Helmet>
        <title>Угадай мелодию. Вы настоящий меломан!</title>
      </Helmet>
      <div className="result-logout__wrapper">
        <Link className="result-logout__link" to={AppRoute.Root}>Выход</Link>
      </div>
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {correctAnswersCount} вопросов и совершили {mistakes} ошибки</p>
      <button className="replay" type="button" onClick={() => {
        dispatch(resetGame());
        navigate(AppRoute.Game);
      }}
      >Сыграть ещё раз
      </button>
    </section>
  );
}

export default WinScreen;
