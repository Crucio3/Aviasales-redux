import { createSlice } from '@reduxjs/toolkit';

const speedCostSlice = createSlice({
  name: 'speedCost',
  initialState: { filter: 'cost' },
  reducers: {
    speed: (state) => {
      state.filter = 'speed';
    },
    cost: (state) => {
      state.filter = 'cost';
    },

    optimum: (state) => {
      state.filter = 'optimum';
    },
  },
});

export const { speed, cost, optimum } = speedCostSlice.actions;
export default speedCostSlice.reducer;
