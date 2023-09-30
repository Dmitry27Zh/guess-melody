import { useEffect, useRef, useState } from 'react';
import { Src } from '../../types/common';
import cn from 'classnames';

type AudioPlayerProps = {
  src: Src;
  autoPlay: boolean;
}

function AudioPlayer({src, autoPlay}: AudioPlayerProps):JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handleDataLoaded = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    const playerElement = audioRef.current;

    if (playerElement) {
      playerElement.addEventListener('loadeddata', handleDataLoaded);

      return () => {
        playerElement.removeEventListener('loadeddata', handleDataLoaded);
      };
    }
  }, []);
  useEffect(() => {
    const playerElement = audioRef.current;

    if (playerElement === null) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
    } else {
      playerElement.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <button
        className={cn('track__button', { 'track__button--play': !isPlaying }, { 'track__button--pause': isPlaying })}
        type="button" disabled={isLoading} onClick={() => setIsPlaying((prevState) => !prevState)}
      >
      </button>
      <div className="track__status">
        <audio ref={audioRef} src={src}></audio>;
      </div>
    </>
  );

}

export default AudioPlayer;
