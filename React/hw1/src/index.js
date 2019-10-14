import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './Profile/Profile';
import Static from './static/Static';
import Friends from './Friends/Friends';
import Transaction from './Transaction/Transaction';
import user from './db/users.json';
import stats from './db/stats.json';
import friend from './db/friends.json';
import transaction from './db/transaction.json';

const app = (
  <div className="row">
    <Profile users={user} />
    <hr />
    <Static list={stats.stats} />
    <hr />
    <Friends frends={friend} />
    <hr />
    <Transaction arr={transaction} />
  </div>
);

ReactDOM.render(app, document.getElementById('root'));
