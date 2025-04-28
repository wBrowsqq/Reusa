import React from 'react';
import styles from '../../assets/popup.module.css'; // Para o estilo, você pode criar o CSS

const Popup = ({ message, onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <p>{message}</p>
        <button onClick={onClose} className={styles.okButton}>OK</button>
      </div>
    </div>
  );
};

export default Popup;
