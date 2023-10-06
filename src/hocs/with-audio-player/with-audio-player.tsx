import { ComponentType } from 'react';
import { Id, Src } from '../../types/common';
import {useState} from 'react';
import AudioPlayer from '../../components/audio-player/audio-player';

type HOCProps = {
  renderPlayer: (src: Src, id: Id) => JSX.Element;
}

function withAudioPlayer<T>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> {
  type ComponentProps = Omit<T, keyof HOCProps>

  function WithAudioPlayer(props: ComponentProps): JSX.Element {
    const [activePlayer, setActivePlayer] = useState('0');

    return (
      <Component {...props as T}
        renderPlayer={(src: Src, id: Id) => (
          <AudioPlayer src={src} isPlaying={id === activePlayer}
            onPlayButtonClick={() => setActivePlayer(activePlayer === id ? '_PAUSE' : id)}
          />
        )}
      />
    );
  }

  return WithAudioPlayer;
}

export default withAudioPlayer;
