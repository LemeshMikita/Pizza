import React from 'react';
import { PizzaType } from './constants/constatnts';
import styles from './itemsContainer.module.css';

type ItemsContainerType = {
    items: Array<PizzaType>,
    count: number,
    addCountPlus: () => void,
    addCountMines: () => void
}

export const ItemsContainer = ({ items, count,  addCountPlus, addCountMines}: ItemsContainerType) => {
  return (
    <div className={styles.div__items}>
      <button onClick={() => addCountPlus()}>x</button>
      <div>
        <h1>{items[count].title}</h1>
        <p>{items[count].desc}</p>
        <img src={items[count].photo} alt={items[count].title} style={{width: '70px', height: '70px'}}/>
      </div>
      <button onClick={() => addCountMines()}>x</button>
    </div>
  );
};