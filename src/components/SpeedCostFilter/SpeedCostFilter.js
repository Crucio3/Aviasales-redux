import React from 'react';
import { Radio } from 'antd';
import { useDispatch } from 'react-redux';

import { speed, cost, optimum } from '../../store/slices/SpeedCostSlices.js';

import classes from './SpeedCostFilter.module.scss';

const SpeedCostFilter = () => {
  const dispatch = useDispatch();
  return (
    <Radio.Group defaultValue="a" buttonStyle="solid" className={classes.filter}>
      <Radio.Button
        value="a"
        className={classes['filter__tab']}
        onClick={() => {
          dispatch(cost());
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </Radio.Button>
      <Radio.Button
        value="b"
        className={classes['filter__tab']}
        onClick={() => {
          dispatch(speed());
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </Radio.Button>
      <Radio.Button
        value="c"
        className={classes['filter__tab']}
        onClick={() => {
          dispatch(optimum());
        }}
      >
        ОПТИМАЛЬНЫЙ
      </Radio.Button>
    </Radio.Group>
  );
};

export default SpeedCostFilter;
