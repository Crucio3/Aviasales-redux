import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Alert } from 'antd';
import { nanoid } from 'nanoid';

import { fetchId, fetchTickets } from '../../store/slices/TicketsSlices.js';
import Ticket from '../Ticket/Ticket.js';

const TicketList = () => {
  const id = useSelector((state) => state.tickets.id);
  const ticketsList = useSelector((state) => state.tickets.tickets);
  const numberTickets = useSelector((state) => state.number.number);
  const speedCostFilter = useSelector((state) => state.speedCost.filter);
  const transfers = useSelector((state) => state.transfer.filter);
  const loading = useSelector((state) => state.tickets.loading);
  const error = useSelector((state) => state.tickets.error);

  let filteredList = [];

  if (speedCostFilter === 'cost') {
    filteredList = [...ticketsList].sort((a, b) => a.price - b.price);
  } else if (speedCostFilter === 'speed') {
    filteredList = [...ticketsList].sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration
    );
  } else if (speedCostFilter === 'optimum') {
    filteredList = [...ticketsList].sort(
      (a, b) =>
        (a.segments[0].duration + a.segments[1].duration) * a.price -
        (b.segments[0].duration + b.segments[1].duration) * b.price
    );
  }

  const finalFilteredList = filteredList
    .filter((item) => transfers.some((length) => item.segments[0].stops.length === length))
    .slice(0, numberTickets)
    .map((item) => {
      return <Ticket ticket={item} key={nanoid()} />;
    });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchId());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(fetchTickets(id));
    }
  }, [id, dispatch]);

  const spin = loading ? <Spin /> : null;
  const alert = error !== null ? <Alert message="500 (Internal Server Error)" type="error" /> : null;
  const content =
    finalFilteredList.length === 0 && error === null && !loading ? (
      <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="warning" />
    ) : (
      finalFilteredList
    );

  return (
    <ul>
      {spin}
      {content}
      {alert}
    </ul>
  );
};

export default TicketList;
