import React, { useState } from 'react';
import './App.css';
import { PIZZA } from './constants/constatnts';
import { ItemsContainer } from './ItemsContainer';

function App() {
  const [items, setItems] = useState(PIZZA);
  let [count, setCount] = useState(0);
  function addCountPlus() {
    setCount(++count);
  }
  return (
    <div>
      <ItemsContainer items={items} count={count} addCountPlus={addCountPlus}/>
    </div>
  );
}

export default App;
