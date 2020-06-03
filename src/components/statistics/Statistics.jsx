import React from 'react';
import PropTypes from 'prop-types';
import Stat from './stat';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
          <Stat stats={stats} />
        </ul>
      </section>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

Statistics.defaultProps = {
  title: '',
};

export default Statistics;
