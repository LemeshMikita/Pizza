import React from 'react';
import './App.css';
import { PizzaType } from './constants/constatnts';

type ItemsContainerType = {
    items: Array<PizzaType>,
    count: number,
    addCountPlus: () => void,
    addCountMines: () => void
}

export const ItemsContainer = ({ items, count,  addCountPlus, addCountMines}: ItemsContainerType) => {
  return (
    <>
      <button onClick={() => addCountPlus()}>x</button>
      <h1>{items[count].title}</h1>
      <div>
        <h1>{items[count].title}</h1>
        <p>{items[count].desc}</p>
        <img src={items[count].photo} alt={items[count].title} style={{width: '70px', height: '70px'}}/>
      </div>
      <button onClick={() => addCountMines()}>x</button>
    </>
  );
};