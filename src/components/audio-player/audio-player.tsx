import { Src } from '../../types/common';

type AudioPlayerProps = {
  src: Src;
}

function AudioPlayer({src}: AudioPlayerProps):JSX.Element {
  return <audio src={src}></audio>;
}

export default AudioPlayer;
