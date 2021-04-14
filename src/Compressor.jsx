import { useState } from "react";
import { Slider } from "antd";
import { useAudio } from "./helpers";
import * as Params from "./params";
import guitarFile from "./assets/guitar.wav";

const Compressor = () => {
  const [audioFile, setAudioFile] = useState(guitarFile);
  const [isPlaying, toggleIsPlaying] = useAudio(audioFile);

  const audio = new Audio(audioFile);
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const track = audioContext.createMediaElementSource(audio);

  const compressor = audioContext.createDynamicsCompressor();
  track.connect(compressor);
  compressor.connect(audioContext.destination);

  const onParamChange = (param, value) => {
    compressor[param].setValueAtTime(value, audioContext.currentTime);
    console.dir(compressor[param]);
  };

  return (
    <>
      <button onClick={toggleIsPlaying}>{isPlaying ? "Pause" : "Play"}</button>
      <h4>Reduction</h4>
      {compressor.reduction}
      <h4>Threshold</h4>
      <Slider
        {...Params.thresholdParams}
        onChange={(value) => onParamChange("threshold", value)}
      />
      <h4>Ratio</h4>
      <Slider
        {...Params.ratioParams}
        onChange={(value) => onParamChange("ratio", value)}
      />
      <h4>Knee</h4>
      <Slider
        {...Params.kneeParams}
        onChange={(value) => onParamChange("knee", value * 40)}
      />
      <h4>Attack</h4>
      <Slider
        {...Params.attackParams}
        onChange={(value) => onParamChange("attack", value / 1000)}
      />
      <h4>Release</h4>
      <Slider
        {...Params.releaseParams}
        onChange={(value) => onParamChange("release", value / 1000)}
      />
      <h4>Gain</h4>
      <Slider
        {...Params.gainParams}
        onChange={(value) => onParamChange("gain", value)}
      />
    </>
  );
};

export default Compressor;
