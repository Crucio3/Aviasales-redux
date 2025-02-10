import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { all, none, more, less } from '../../store/slices/TransferSlices.js';

import classes from './FilterTransfer.module.scss';

const FilterTransfer = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.transfer.filter);

  const setFilter = (number) => {
    dispatch(more(number));
  };

  const delFilter = (number) => {
    dispatch(less(number));
  };

  return (
    <div className={classes['transfer-filter']}>
      <h2 className={classes['transfer-filter__title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <div>
        <label className={classes.check}>
          <input
            type="checkbox"
            className={classes['check__input']}
            checked={filters.length === 4 ? true : false}
            onChange={(e) => {
              if (e.target.checked) {
                dispatch(all());
              } else {
                dispatch(none());
              }
            }}
          ></input>
          <span className={classes['check__box']}></span>
          Все
        </label>
        <label className={classes.check}>
          <input
            type="checkbox"
            className={classes['check__input']}
            checked={filters.includes(0)}
            onChange={(e) => {
              if (e.target.checked) {
                setFilter(0);
              } else {
                delFilter(0);
              }
            }}
          ></input>
          <span className={classes['check__box']}></span>
          Без пересадок
        </label>
        <label className={classes.check}>
          <input
            type="checkbox"
            className={classes['check__input']}
            checked={filters.includes(1)}
            onChange={(e) => {
              if (e.target.checked) {
                setFilter(1);
              } else {
                delFilter(1);
              }
            }}
          ></input>
          <span className={classes['check__box']}></span>1 пересадка
        </label>
        <label className={classes.check}>
          <input
            type="checkbox"
            className={classes['check__input']}
            checked={filters.includes(2)}
            onChange={(e) => {
              if (e.target.checked) {
                setFilter(2);
              } else {
                delFilter(2);
              }
            }}
          ></input>
          <span className={classes['check__box']}></span>2 пересадки
        </label>
        <label className={classes.check}>
          <input
            type="checkbox"
            className={classes['check__input']}
            checked={filters.includes(3)}
            onChange={(e) => {
              if (e.target.checked) {
                setFilter(3);
              } else {
                delFilter(3);
              }
            }}
          ></input>
          <span className={classes['check__box']}></span>3 пересадки
        </label>
      </div>
    </div>
  );
};

export default FilterTransfer;
