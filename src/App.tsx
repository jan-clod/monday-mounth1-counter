import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Tablo from './components/Tablo';

function App() {

  let [num, setNum] = useState(0)
  const IncrementClick = () => {
    setNum(++num)
  }
  const Recetting = () => {
    setNum(0)
  }
  let [boolean, setBoolean] = useState(true)
  return (
    <div className="App">
      <Tablo num={num} />
      <Button num={num}
        itCallBack={IncrementClick}
        itCallBack2={Recetting} />
    </div>
  );
}

export default App;
