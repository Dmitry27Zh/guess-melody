import { useEffect, useRef, useState } from 'react';
import { Src } from '../../types/common';
import cn from 'classnames';

type AudioPlayerProps = {
  src: Src;
  isPlaying: boolean;
  onPlayButtonClick: () => void;
}

function AudioPlayer({src, isPlaying, onPlayButtonClick}: AudioPlayerProps):JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
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
        type="button" disabled={isLoading} onClick={onPlayButtonClick}
      >
      </button>
      <div className="track__status">
        <audio ref={audioRef} src={src}></audio>;
      </div>
    </>
  );

}

export default AudioPlayer;
