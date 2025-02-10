import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchId = createAsyncThunk('tickets/fetchId', async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  const data = await response.json();
  return data['searchId'];
});

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (id) => {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
  const data = await response.json();
  return data.tickets;
});

const serviceSlice = createSlice({
  name: 'tickets',
  initialState: {
    id: null,
    tickets: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchId.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload;
      })
      .addCase(fetchId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default serviceSlice.reducer;
