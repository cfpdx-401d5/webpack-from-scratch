import React from 'react';
import styles from './Green.scss';

export default function Green() {
  console.log(styles);
  return (
    <div className={styles.green}>
      <h1>So</h1>
      <h2>Many</h2>
      <h3>Greens</h3>
    </div>
  );
}