import React from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { PizzaType } from '../constants/constatnts';

type ModalTypes = {
  open: boolean,
  arrCart: Array<PizzaType>,
  closeModal: () => void,
}

export const Modal = ({ open, arrCart, closeModal }: ModalTypes) => {
  const modalId: any =  document.getElementById('modal');
  let price = 0;
  return createPortal(
    <dialog open={open} className={styles.modal}>
      <div className={styles.modalDiv}>
        <button className={styles.closeIcon} onClick={() => {closeModal();}}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h3 className={styles.h3}>Your orders:</h3>
        {arrCart.map((item, idex) => {
          price += Number(item.price);
          return <p className={styles.p}>{`${idex + 1} ${item.title} ${item.price}$`}</p>;
        })}
        <p>{`Total price: ${price}$`}</p>
        <div>
          <button className={styles.btn__cansel} onClick={() => {closeModal();}}>Cansel</button>
          <button className={styles.btn__accept}>Accept</button>
        </div>
      </div>
    </dialog>,
    modalId
  );
};