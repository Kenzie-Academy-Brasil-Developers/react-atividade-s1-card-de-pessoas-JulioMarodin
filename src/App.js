import logo from './logo.svg';
import './App.css';
import Developer from './Components/Developer/Developer';

function App() {
  const dev1 = {
    name: 'Gabriel',
    age: 19,
    country: 'Brasil',
  };

  const dev2 = {
    name: 'Filipe',
    age: 28,
    country: 'Brasil',
  };

  const dev3 = {
    name: 'Mariana',
    age: 24,
    country: 'Italia',
  };

  return (
    <div className="App">
      <header className="App-header">
        <Developer prop={dev1} />
        <Developer prop={dev2} />
        <Developer prop={dev3} />
      </header>
    </div>
  );
}

export default App;
