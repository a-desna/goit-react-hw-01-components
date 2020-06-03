import React from 'react';
import styles from './Statistics.module.css';

function Stat({ stats }) {
  return (
    <>
      {stats.map(item => (
        <li className={styles.item} key={item.id}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </>
  );
}

export default Stat;
