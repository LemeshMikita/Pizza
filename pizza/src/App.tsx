import React, { useState } from 'react';
import { PIZZA, PizzaType } from './constants/constatnts';
import { ItemsContainer } from './ItemsContainer';
import styles from './App.module.css';
import { Header } from './Header/Header';

export function App() {
  const [countLeft, setCountLeft] = useState(0);
  const [countRight, setCountRight] = useState(0);
  const arrCart: Array<PizzaType> = [];

  function addCountPlusLeft() {
    countLeft === PIZZA.length - 1 ? setCountLeft(0) : setCountLeft(countLeft + 1);
  }
  function addCountMinesLeft() {
    countLeft === 0 ? setCountLeft(PIZZA.length - 1) : setCountLeft(countLeft - 1);
  }
  function addCountPlusRight() {
    countRight === PIZZA.length - 1 ? setCountRight(0) : setCountRight(countRight + 1);
  }
  function addCountMinesRight() {
    countRight === 0 ? setCountRight(PIZZA.length - 1) : setCountRight(countRight - 1);
  }
  function addTOCart(e: any) {
    e.preventDefault();
    const targetId = e.target.id;
    targetId === 'leftButton' ?  arrCart.push(PIZZA[countLeft]) :  arrCart.push(PIZZA[countRight]);
    console.log(arrCart);
  }
  return (
    <div className={styles.content}>
      <Header arrCart={arrCart}/>
      <div className={styles.div__wrapper}>
        <ItemsContainer 
          items={PIZZA}
          count={countLeft}
          addCountPlus={addCountPlusLeft} 
          addCountMines={addCountMinesLeft} 
          addToCart={addTOCart}
          idButton={'leftButton'}
          left={true}/>
        <ItemsContainer
          items={PIZZA} 
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
