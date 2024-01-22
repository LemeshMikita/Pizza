import React from 'react';
import styles from './Modal.module.css';

export const Modal = ({ open }: any) => {
  return (
    <dialog open={open} className={styles.modal}>
      <h1>fwefwefwef</h1>
    </dialog>
  );
};