import React, { useState } from 'react';
import { PIZZA } from './constants/constatnts';
import { ItemsContainer } from './ItemsContainer';
import styles from './App.module.css';
import { Header } from './Header/Header';

export function App() {
  const [items, setItems] = useState(PIZZA);
  let [count, setCount] = useState(0);
  function addCountPlus() {
    if(count === items.length - 1) {
      setCount(0);
    } else {
      setCount(++count);
    }
  }
  function addCountMines() {
    if(count === 0) {
      setCount(count = items.length - 1);
    } else {
      setCount(--count);
    }
  }
  return (
    <div className={styles.content}>
      <Header />
      <ItemsContainer items={items} count={count} addCountPlus={addCountPlus} addCountMines={addCountMines}/>
    </div>
  );
}
