import { Helmet } from 'react-helmet-async';
import Logo from '../logo/logo';
import { QuestionGenre } from '../../types/question';
import { ChangeEvent, FormEvent, PropsWithChildren, useState } from 'react';
import { FormDataState, Id, Src } from '../../types/common';

type QuestionGenreScreenProps = PropsWithChildren<{
  question: QuestionGenre;
  onAnswer: () => void;
  renderPlayer: (src: Src, id: Id) => JSX.Element;
}>

function QuestionGenreScreen(props: QuestionGenreScreenProps): JSX.Element {
  const { question, onAnswer, renderPlayer, children } = props;
  const { genre, answers } = question;
  const initialAnswerControls: FormDataState = answers.reduce((result, {_id}) => ({...result, [_id]: false}), {});
  const [answerControls, setAnswerControls] = useState(initialAnswerControls);
  const onChange = ({target}: ChangeEvent<HTMLInputElement>, id: Id) => {
    const value = target.checked;
    setAnswerControls((prevState) => ({...prevState, [id]: value}));
  };

  return (
    <section className="game game--genre">
      <Helmet>
        <title>Угадай мелодию. Выберите треки</title>
      </Helmet>
      <header className="game__header">
        <Logo />

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: 'url(#blur)', transform: 'rotate(-90deg) scaleY(-1)', transformOrigin: 'center'}}
          />
        </svg>

        {children}
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(event: FormEvent) => {
          event.preventDefault();
          onAnswer();
        }}
        >
          {answers.map((answer) => {
            const checked = answerControls[answer._id] as boolean;

            return (
              <div className="track" key={answer._id}>
                {renderPlayer(answer.src, answer._id)}
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" value={answer._id} id={answer._id} checked={checked} onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, answer._id)}/>
                  <label className="game__check" htmlFor={answer._id}>Отметить</label>
                </div>
              </div>
            );
          })}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
}

export default QuestionGenreScreen;
