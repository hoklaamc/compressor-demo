import { useState } from "react";
import { useAudio } from "./helpers";
import guitarFile from "./assets/guitar.wav";

const Compressor = () => {
  const [audioFile, setAudioFile] = useState(guitarFile);
  const [isPlaying, toggleIsPlaying] = useAudio(audioFile);
  const audio = new Audio(audioFile);
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const track = audioContext.createMediaElementSource(audio);
  track.connect(audioContext.destination);

  return (
    <button onClick={toggleIsPlaying}>{isPlaying ? "Pause" : "Play"}</button>
  );
};

export default Compressor;
