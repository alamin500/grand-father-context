import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import { useState } from 'react';

function App() {
  const [house, setHouse] =useState(5);
  const ornaments = 'diamond ring'
  return (
    <div className="App">
      <button onClick={()=> setHouse(house + 1)}>Buy a new house</button>
      <GrandFather house={house} ornaments={ornaments}>

      </GrandFather>
      
    </div>
  );
}

export default App;
