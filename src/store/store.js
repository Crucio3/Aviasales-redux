import { configureStore } from '@reduxjs/toolkit';

import transferReducer from './slices/TransferSlices.js';
import ticketsReducer from './slices/TicketsSlices.js';
import numberTicketsReducer from './slices/MoreTicketsSlices.js';
import speedCostReducer from './slices/SpeedCostSlices.js';

const store = configureStore({
  reducer: {
    transfer: transferReducer,
    tickets: ticketsReducer,
    number: numberTicketsReducer,
    speedCost: speedCostReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
