import React from 'react';
import styles from './Blue.scss';

export default function Blue() {
  return (
    <div>
      <ul  >
        <li className={styles.blue}>There</li>
        <li className={styles.steelblue}>Are</li>
        <li className={styles.lightblue}>Many</li>
        <li className={styles.cadetblue}>Shades</li>
        <li className={styles.skyblue}>of</li>
        <li className={styles.dodgerblue}>Blue</li>
      </ul>
    </div>
  );
}