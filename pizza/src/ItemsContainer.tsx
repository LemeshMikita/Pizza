import React from 'react';
import './App.css';
import { PizzaType } from './constants/constatnts';
import { count } from 'console';

type ItemsContainerType = {
    items: Array<PizzaType>,
    count: number,
    addCountPlus: () => void
}

export const ItemsContainer = ({ items, count,  addCountPlus}: ItemsContainerType) => {
  return (
    <>
      <button onClick={() => addCountPlus()}>x</button>
      <h1>{items[count].title}</h1>
      <div>
        <h1>{items[count].title}</h1>
        <p>{items[count].desc}</p>
        <img src={items[count].photo} alt={items[count].title} style={{width: '70px', height: '70px'}}/>
      </div>
      <button>x</button>
    </>
  );
};