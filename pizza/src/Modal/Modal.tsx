import React from 'react';
import styles from './Modal.module.css';
import { PizzaType } from '../constants/constatnts';

type ModalTypes = {
  open: boolean,
  arrCart: Array<PizzaType>
}

export const Modal = ({ open, arrCart }: ModalTypes) => {
  return (
    <dialog open={open} className={styles.modal}>
      {arrCart.map((item) => {
        return <h1>{item.price}</h1>;
      })}
    </dialog>
  );
};