import React from 'react';
import { PizzaType } from './constants/constatnts';
import styles from './itemsContainer.module.css';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ItemsContainerType = {
    items: Array<PizzaType>,
    count: number,
    addCountPlus: () => void,
    addCountMines: () => void
}

export const ItemsContainer = ({ items, count,  addCountPlus, addCountMines}: ItemsContainerType) => {
  return (
    <div className={styles.div__items}>
      <button onClick={() => addCountPlus()} className={styles.btn}>
        <FontAwesomeIcon icon={ faChevronUp } />
      </button>
      <div>
        <h3>{items[count].title}</h3>
        <p>{items[count].desc}</p>
        <img src={items[count].photo} alt={items[count].title} style={{width: '150px', height: '150px'}}/>
        <p>{items[count].diameter}</p>
        <p>{`${items[count].price}$`}</p>
      </div>
      <button onClick={() => addCountMines()} className={styles.btn}>
        <FontAwesomeIcon icon={ faChevronDown } />
      </button>
    </div>
  );
};