import React from 'react';
import styles from './Statistics.module.css';

function StatisticView({ stats }) {
  const { label, percentage } = stats;
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

export default StatisticView;
