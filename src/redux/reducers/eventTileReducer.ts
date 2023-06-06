import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Participant, ResourceType, Event } from '../../interface/interfaces';

const initialState: { events: Event[] } = {
  events: [],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    updateEventTile: (state, action: PayloadAction<Event[]>) => {
      state.events = [...action.payload];
    },
  },
});

export const { updateEventTile } = eventSlice.actions;
