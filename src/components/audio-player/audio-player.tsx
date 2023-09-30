import { Src } from '../../types/common';

type AudioPlayerProps = {
  src: Src;
}

function AudioPlayer({src}: AudioPlayerProps):JSX.Element {
  return (
    <>
      <button className="track__button track__button--play" type="button"></button>
      <div className="track__status">
        <audio src={src}></audio>;
      </div>
    </>
  );

}

export default AudioPlayer;
