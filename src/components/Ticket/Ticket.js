import React from 'react';
import { format, add } from 'date-fns';

import classes from './Ticket.module.scss';

const Ticket = ({ ticket }) => {
  const duration1 = ticket.segments[0].duration;
  const duration2 = ticket.segments[1].duration;

  const logoUrl = `https://pics.avs.io/99/36/${ticket.carrier}.png`;

  const transfers = (segment) => {
    if (ticket.segments[segment].stops.length === 0) {
      return 'БЕЗ ПЕРЕСАДОК';
    } else if (ticket.segments[segment].stops.length === 1) {
      return '1 ПЕРЕСАДКА';
    } else if (ticket.segments[segment].stops.length === 2) {
      return '2 ПЕРЕСАДКИ';
    } else if (ticket.segments[segment].stops.length === 3) {
      return '3 ПЕРЕСАДКИ';
    }
  };

  const takeDate = (segment) => {
    const startTime = new Date(ticket.segments[segment].date);

    const formattedStartTime = format(startTime, 'HH:mm');

    const endTime = add(startTime, { minutes: ticket.segments[segment].duration });
    const formattedEndTime = format(endTime, 'HH:mm');

    return `${formattedStartTime} – ${formattedEndTime}`;
  };

  return (
    <div className={classes.ticket}>
      <div className={classes['ticket__header']}>
        <span className={classes['ticket__price']}>{ticket.price} Р</span>
        <div className={classes['ticket__logo']}>
          <img src={logoUrl} alt="" />
        </div>
      </div>
      <div className={classes['ticket__section']}>
        <div className={classes['ticket__details']}>
          <div className={classes['ticket__route']}>
            {ticket.segments[0].origin} - {ticket.segments[0].destination}
          </div>
          <div className={classes['ticket__info']}>{takeDate(0)}</div>
        </div>
        <div className={classes['ticket__details']}>
          <div className={classes['ticket__route']}>В ПУТИ</div>
          <div className={classes['ticket__info']}>
            {Math.floor(duration1 / 60)}ч {duration1 % 60}м
          </div>
        </div>
        <div className={classes['ticket__details']}>
          <div className={classes['ticket__route']}>{transfers(0)}</div>
          <div className={classes['ticket__info']}>{ticket.segments[0].stops.join(', ')}</div>
        </div>
      </div>
      <div className={classes['ticket__section']}>
        <div className={classes['ticket__details']}>
          <div className={classes['ticket__route']}>
            {ticket.segments[1].origin} - {ticket.segments[1].destination}
          </div>
          <div className={classes['ticket__info']}>{takeDate(1)}</div>
        </div>
        <div className={classes['ticket__details']}>
          <div className={classes['ticket__route']}>В ПУТИ</div>
          <div className={classes['ticket__info']}>
            {Math.floor(duration2 / 60)}ч {duration2 % 60}м
          </div>
        </div>
        <div className={classes['ticket__details']}>
          <div className={classes['ticket__route']}>{transfers(1)}</div>
          <div className={classes['ticket__info']}>{ticket.segments[1].stops.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
