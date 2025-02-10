import React from 'react';
import { useDispatch } from 'react-redux';

import { plusFiveTickets } from '../../store/slices/MoreTicketsSlices.js';

import classes from './MoreTicket.module.scss';

const MoreTickets = () => {
  const dispatch = useDispatch();
  return (
    <button
      className={classes['more-tickets']}
      onClick={() => {
        dispatch(plusFiveTickets());
      }}
    >
      ПОКАЗАТЬ ЕЩЁ ПЯТЬ БИЛЕТОВ
    </button>
  );
};

export default MoreTickets;
