import { FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';

function AuthScreen(): JSX.Element {
  const navigate = useNavigate();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginInput = loginRef.current;
    const passwordInput = passwordRef.current;

    if (loginInput && passwordInput) {
      dispatch(loginAction({
        login: loginInput.value,
        password: passwordInput.value
      }));
    }
  };

  return (
    <section className="login">
      <Helmet>
        <title>Угадай мелодию. Вы настоящий меломан!</title>
      </Helmet>
      <div className="login__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="login__title">Вы настоящий меломан!</h2>
      <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
      <form className="login__form" onSubmit={handleSubmit}>
        <p className="login__field">
          <label className="login__label" htmlFor="name">Логин</label>
          <input className="login__input" type="text" name="name" id="name" ref={loginRef}/>
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input className="login__input" type="text" name="password" id="password" ref={passwordRef}/>
          <span className="login__error">Неверный пароль</span>
        </p>
        <button className="login__button button" type="submit">Войти</button>
      </form>
      <button className="replay" type="button" onClick={() => navigate(AppRoute.Game)}>Сыграть ещё раз</button>
    </section>
  );
}

export default AuthScreen;
