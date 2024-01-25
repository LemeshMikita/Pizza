import React, { useState } from 'react';
import { PIZZA } from './constants/constatnts';
import { ItemsContainer } from './ItemsContainer';
import styles from './App.module.css';
import { Header } from './Header/Header';

export function App() {
  const [items, setItems] = useState(PIZZA);
  const [countLeft, setCountLeft] = useState(0);
  const [countRight, setCountRight] = useState(0);
  const arrCart: any = [];

  function addCountPlusLeft() {
    countLeft === items.length - 1 ? setCountLeft(0) : setCountLeft(countLeft + 1);
  }
  function addCountMinesLeft() {
    countLeft === 0 ? setCountLeft(items.length - 1) : setCountLeft(countLeft - 1);
  }
  function addCountPlusRight() {
    countRight === items.length - 1 ? setCountRight(0) : setCountRight(countRight + 1);
  }
  function addCountMinesRight() {
    countRight === 0 ? setCountRight(items.length - 1) : setCountRight(countRight - 1);
  }
  function addTOCart(e: any) {
    e.preventDefault();
    const targetId = e.target.id;
    targetId === 'leftButton' ?  arrCart.push(PIZZA[countLeft]) :  arrCart.push(PIZZA[countRight]);
    console.log(arrCart);
  }
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.div__wrapper}>
        <ItemsContainer 
          items={items}
          count={countLeft}
          addCountPlus={addCountPlusLeft} 
          addCountMines={addCountMinesLeft} 
          addToCart={addTOCart}
          idButton={'leftButton'}
          left={true}/>
        <ItemsContainer
          items={items} 
          count={countRight}
          addCountPlus={addCountPlusRight}
          addCountMines={addCountMinesRight}
          addToCart={addTOCart}
          idButton={'rightButton'}
          left={false}/>
      </div>
    </div>
  );
}
