import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile(user) {
  const { avatar, name, tag, location, stats } = user;
  const { followers, views, likes } = stats;
  return (
    <Fragment>
      <div className={styles.profile}>
        <div className={styles.container}>
          <div className={styles.description}>
            <img src={avatar} alt="user avatar" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
          </div>

          <ul className={styles.stats}>
            <li>
              <span className={styles.label}>Followers</span>
              <span className={styles.quantity}>{followers}</span>
            </li>
            <li>
              <span className={styles.label}>Views</span>
              <span className={styles.quantity}>{views}</span>
            </li>
            <li>
              <span className={styles.label}>Likes</span>
              <span className={styles.quantity}>{likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

Profile.defaultProps = {
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
};

export default Profile;
