import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const Transaction = ({ arr }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {arr.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Transaction.propTypes = {
  arr: PropTypes.shape([]).isRequired,
};

export default Transaction;
