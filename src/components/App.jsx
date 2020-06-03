import React from 'react';

import Profile from './profile/Profile';
import user from './profile/user.json';

import Statistics from './statistics/Statistics';
import statisticalData from './statistics/statistical-data.json';

import FriendList from './friend-list/FriendList';
import friends from './friend-list/friends.json';

import TransactionHistory from './transaction-history/TransactionHistory';
import transactions from './transaction-history/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
