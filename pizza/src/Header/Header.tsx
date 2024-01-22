import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import styles from './Header.module.css';
import { Modal } from '../Modal/Modal';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  return (
    <div className={styles.header}>
      <h1 className={styles.header__titel}>Double pizza</h1>
      <div onClick={openModal}>
        <FontAwesomeIcon icon={faTrashCan} />
        <Modal open={isModalOpen} />
      </div>
    </div>
  );
};