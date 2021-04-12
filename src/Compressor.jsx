import { useState } from 'react';

const Compressor = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(audioUrl);
  const audioContext = new(window.AudioContext || window.webkitAudioContext)();
  const track = audioContext.createMediaElementSource(audio);
  track.connect(audioContext.destination);

  const onPlayPause = () => {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    // play or pause track depending on state
    if (isPlaying === false) {
        audio.play();
        setIsPlaying(true);
    } else if (isPlaying === true) {
        audio.pause();
        setIsPlaying(false);
    }
  };

  return (
    <button role="switch" aria-checked="false" onClick={onPlayPause}>
      <span>Play/Pause</span>
    </button>

  );
}

export default Compressor;