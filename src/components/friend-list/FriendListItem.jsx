import React from 'react';
import styles from './FriendList.module.css';

function FriendListItem({ friends }) {
  // const { avatar, name, isOnline } = friends;
  return (
    <>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          {friend.isOnline ? (
            <span className={styles.statusGreen}></span>
          ) : (
            <span className={styles.statusRed}></span>
          )}
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="72"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
}

export default FriendListItem;
