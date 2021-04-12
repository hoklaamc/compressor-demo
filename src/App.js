import "./App.css";
import Player from "./Player";
import guitarFile from './assets/guitar.wav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Player url={guitarFile} />
      </header>
    </div>
  );
}

export default App;
