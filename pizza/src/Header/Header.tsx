import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__titel}>Double pizza</h1>
      <div>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};