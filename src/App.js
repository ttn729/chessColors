import './App.css';
import Game from './components/game'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Spicy Chess Colors</h1>

        <Game />

        <a
          className="App-link"
          href="https://github.com/ttn729/chessColors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
