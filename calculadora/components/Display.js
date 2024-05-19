import React from 'react';
import styles from '../styles/Display.module.css';

const Display = ({ value }) => {
  return (
    <div className={styles.display} data-testid="display">
      {value}
    </div>
  );
};

export default Display;
