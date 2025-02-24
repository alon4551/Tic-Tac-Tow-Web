import './App.css'
import TicTacTow from './pages/TicTacTow/tictactow';
const App = () => {

  return (
    <div className="App">
      <TicTacTow BoardSise={4} />
    </div>
  );
}

export default App;
