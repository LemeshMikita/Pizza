import React, { useState } from 'react';
import { PIZZA } from './constants/constatnts';
import { ItemsContainer } from './ItemsContainer';
import styles from './App.module.css';
import { Header } from './Header/Header';

export function App() {
  const [items, setItems] = useState(PIZZA);
  let [countLeft, setCountLeft] = useState(0);
  let [countRight, setCountRight] = useState(0);
  function addCountPlusLeft() {
    countLeft === items.length - 1 ? setCountLeft(0) : setCountLeft(++countLeft);
  }
  function addCountMinesLeft() {
    countLeft === 0 ? setCountLeft(countLeft = items.length - 1) : setCountLeft(--countLeft);
  }
  function addCountPlusRight() {
    countRight === items.length - 1 ? setCountRight(0) : setCountRight(++countRight);
  }
  function addCountMinesRight() {
    countRight === 0 ? setCountRight(countRight = items.length - 1) : setCountRight(--countRight);
  }
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.div__wrapper}>
        <ItemsContainer items={items} count={countLeft} addCountPlus={addCountPlusLeft} addCountMines={addCountMinesLeft}/>
        <ItemsContainer items={items} count={countRight} addCountPlus={addCountPlusRight} addCountMines={addCountMinesRight}/>
      </div>
    </div>
  );
}
