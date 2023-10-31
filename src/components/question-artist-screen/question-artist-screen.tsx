import { Helmet } from 'react-helmet-async';
import Logo from '../logo/logo';
import { QuestionArtist, UserArtistAnswer } from '../../types/question';
import { FormEvent, PropsWithChildren, useRef, ChangeEvent } from 'react';
import { Id, Src } from '../../types/common';
import { FormDataState } from '../../types/common';
import useData from '../../hooks/use-data/use-data';

type QuestionArtistScreenProps = PropsWithChildren<{
  question: QuestionArtist;
  onAnswer: (userAnswer: UserArtistAnswer) => void;
  renderPlayer: (src: Src, id: Id) => JSX.Element;
}>

function QuestionArtistScreen(props: QuestionArtistScreenProps): JSX.Element {
  const { question, onAnswer, renderPlayer, children } = props;
  const { song, answers } = question;
  const initialData: FormDataState<boolean> = answers.reduce((result, {_id}) => ({...result, [_id]: false}), {});
  const [data, onChange] = useData(initialData);
  const buttonSubmitRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="game game--artist">
      <Helmet>
        <title>Угадай мелодию. Кто исполняет эту песню?</title>
      </Helmet>
      <header className="game__header">
        <Logo />

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: 'url(#blur)', transform: 'rotate(-90deg) scaleY(-1)', transformOrigin: 'center'}} />
        </svg>

        {children}
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {renderPlayer(song.src, '0')}
          </div>
        </div>

        <form className="game__artist"
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const answerId = new FormData(event.currentTarget).get('answer');
            const userAnswer = answers.find((answer) => answer._id === answerId)?.artist ?? '';
            onAnswer(userAnswer);
          }}
        >
          {answers.map((answer) => {
            const checked = data[answer._id];

            if (typeof checked === 'boolean') {
              return (
                <div className="artist" key={answer._id}>
                  <input className="artist__input visually-hidden" type="radio" name="answer" value={answer._id} id={answer._id} checked={checked} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    onChange(event);
                    buttonSubmitRef.current?.click();
                  }}
                  />
                  <label className="artist__name" htmlFor={answer._id}>
                    <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                    {answer.artist}
                  </label>
                </div>
              );
            } else {
              throw new Error('Wrong checked value type');
            }
          })}
          <button ref={buttonSubmitRef} className="game__submit button" type="submit" hidden>Ответить</button>
        </form>
      </section>
    </section>
  );
}

export default QuestionArtistScreen;
