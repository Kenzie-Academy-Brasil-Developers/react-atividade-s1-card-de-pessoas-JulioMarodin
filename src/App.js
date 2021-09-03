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
        <Developer name={'Gabriel'} age={19} country={'Brasil'} />
        <Developer name={'Filipe'} age={28} country={'Brasil'} />
        <Developer name={'Mariana'} age={24} country={'Italia'} />
      </header>
    </div>
  );
}

export default App;
