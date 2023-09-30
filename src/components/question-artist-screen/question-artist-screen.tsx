import { Helmet } from 'react-helmet-async';
import Logo from '../logo/logo';
import { QuestionArtist } from '../../types/question';
import { FormEvent } from 'react';
import AudioPlayer from '../audio-player/audio-player';
import {useState} from 'react';

type QuestionArtistScreenProps = {
  question: QuestionArtist;
  onAnswer: () => void;
}

function QuestionArtistScreen(props: QuestionArtistScreenProps): JSX.Element {
  const { question, onAnswer } = props;
  const { song, answers } = question;
  const [isPlaying, setIsPlaying] = useState(false);

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

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer src={song.src} isPlaying={isPlaying} onPlayButtonClick={() => setIsPlaying(!isPlaying)}/>
          </div>
        </div>

        <form className="game__artist"
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            onAnswer();
          }}
        >
          {answers.map((answer) => (
            <div className="artist" key={answer._id}>
              <input className="artist__input visually-hidden" type="radio" name="answer" value={answer._id} id={answer._id}/>
              <label className="artist__name" htmlFor={answer._id}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
}

export default QuestionArtistScreen;
