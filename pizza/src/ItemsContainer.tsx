import React from 'react';
import { PizzaType } from './constants/constatnts';
import styles from './itemsContainer.module.css';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ItemsContainerType = {
    items: Array<PizzaType>,
    count: number,
    addCountPlus: () => void,
    addCountMines: () => void,
    addToCart: (e: React.MouseEvent<HTMLElement>) => void,
    left: boolean,
    idButton: string
}


export const ItemsContainer = ({ items, count,  addCountPlus, addCountMines, left, addToCart, idButton }: ItemsContainerType) => {
  return (
    <div className={styles.div__items}>
      <div className={left ? styles.image__contentleft : styles.image__contentright}>
        <h3 className={styles.title}>{items[count].title}</h3>
        <p className={styles.p__descr}>{items[count].desc}</p>
        <button onClick={() => addCountPlus()} className={styles.btn__top}>
          <FontAwesomeIcon icon={ faChevronUp } />
        </button>
        <img src={items[count].photo} alt={items[count].title} className={styles.image}/>
        <button onClick={() => addCountMines()} className={styles.btn__bottom}>
          <FontAwesomeIcon icon={ faChevronDown } />
        </button>
        <p>{items[count].diameter}</p>
        <p>{`${items[count].price}$`}</p>
      </div>
      <button onClick={addToCart} id={idButton}>Add</button>
    </div>
  );
};