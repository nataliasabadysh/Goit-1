import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const Friend = ({ frends }) => (
  <ul className={styles.friendList}>
    {frends.map(el => (
      <li key={el.id} className={styles.item}>
        <span
          className={styles.status}
          style={{
            backgroundColor: el.isOnline ? 'green' : 'red',
          }}
        />
        <img className="avatar" src={el.avatar} alt="avatar" width="48" />
        <p className="name">{el.name}</p>
      </li>
    ))}
  </ul>
);

Friend.propTypes = {
  frends: PropTypes.shape([]).isRequired,
};

export default Friend;
