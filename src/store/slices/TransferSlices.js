import { createSlice } from '@reduxjs/toolkit';

const transferSlice = createSlice({
  name: 'transfer',
  initialState: { filter: [] },
  reducers: {
    all: (state) => {
      state.filter = [0, 1, 2, 3];
    },
    none: (state) => {
      state.filter = [];
    },
    more: (state, action) => {
      state.filter = [...state.filter, action.payload];
    },
    less: (state, action) => {
      state.filter = state.filter.filter((number) => number !== action.payload);
    },
  },
});

export const { all, none, more, less } = transferSlice.actions;
export default transferSlice.reducer;
