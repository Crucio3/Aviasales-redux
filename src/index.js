import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/store.js';
import classes from './index.module.scss';
import logo from './img/Logo.svg';
import FilterTransfer from './components/FilterTransfer/FilterTransfer.js';
import SpeedCostFilter from './components/SpeedCostFilter/SpeedCostFilter.js';
import TicketList from './components/TicketList/TicketList.js';
import MoreTickets from './components/MoreTickets/MoreTickets.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AviasalesApp = () => {
  return (
    <div className={classes.app}>
      <div className={classes.logo}>
        <img className="logo__img" src={logo} alt=""></img>
      </div>
      <div className={classes.main}>
        <FilterTransfer />
        <div>
          <SpeedCostFilter />
          <TicketList />
          <MoreTickets />
        </div>
      </div>
    </div>
  );
};

root.render(
  <Provider store={store}>
    <AviasalesApp />
  </Provider>
);
