import React from 'react';
import PropTypes from 'prop-types';

import styles from './Profile.module.css';

const Profile = ({ users }) => (
  <div className={styles.profile}>
    <div className="description">
      <img src={users.avatar} alt="users avatar" className={styles.avatar} />
      <p className={styles.name}>{users.name}</p>
      <p className={styles.tag}>@{users.tag}</p>
      <p className={styles.location}>{users.location}</p>
    </div>
    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{users.stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{users.stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{users.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  users: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

// Profile.defaultProps = {
//   users: {
//     avatar:
//       'https://st2.depositphotos.com/7023650/9863/v/950/depositphotos_98631012-stock-illustration-404-error-page-not-found.jpg',
//   },
// };
export default Profile;
