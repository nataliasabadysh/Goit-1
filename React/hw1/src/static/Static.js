import React from 'react';
import PropTypes from 'prop-types';

import styles from './Static.module.css';

const Static = ({ title, list }) => (
  <section className={styles.statsSection}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {list.map(el => (
        <li
          key={el.id}
          className="item"
          style={{
            backgroundColor: `rgb(${(Math.random() * 100) %
              256}, ${(Math.random() * 100) % 256}, ${(Math.random() * 100) %
              256})`,
          }}
        >
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percantage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Static.propTypes = {
  title: PropTypes.shape(''),
  list: PropTypes.shape([]).isRequired,
};

Static.defaultProps = {
  title: '',
};
export default Static;
