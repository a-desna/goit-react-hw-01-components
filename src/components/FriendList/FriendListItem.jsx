import React from 'react';
import styles from './FriendList.module.css';

function FriendListItem({ friends }) {
  const { avatar, name, isOnline } = friends;
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.statusGreen}></span>
      ) : (
        <span className={styles.statusRed}></span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="72" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
