import logo from './logo.svg';
import './App.css';
import Developer from './Components/Developer/Developer';
import { useState } from 'react';

function App() {
  // const [dev, setDev] = useState({
  //   name: 'Julio',
  //   age: 22,
  //   country: 'Canada',
  // });

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
