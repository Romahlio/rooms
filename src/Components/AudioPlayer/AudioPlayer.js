import { React, useEffect, useState } from "react";
import { Howl } from 'howler';
import audioFile from './test.mp3';

const AudioPLayer = () => {
  const [ audio ] = useState(new Howl({ src: audioFile, volume: 1, html5: false }));
  const [ playing, setPlaying ] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  return (
    <div>
      <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default AudioPLayer;