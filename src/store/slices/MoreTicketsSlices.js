import { createSlice } from '@reduxjs/toolkit';

const numberTicketsSlice = createSlice({
  name: 'moreTickets',
  initialState: { number: 5 },
  reducers: {
    plusFiveTickets: (state) => {
      state.number += 5;
    },
  },
});

export const { plusFiveTickets } = numberTicketsSlice.actions;
export default numberTicketsSlice.reducer;
