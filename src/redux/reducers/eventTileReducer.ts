import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Participant, ResourceType, Event } from '../../interface/interfaces';

const initialState: { lastEventId: number; events: Event[] } = {
  lastEventId: 0,
  events: [],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    updateEventTile: (state, action: PayloadAction<Event[]>) => {
      state.events = [...action.payload];
    },
    setLastEventId: (state, action: PayloadAction<number>) => {
      state.lastEventId = action.payload;
    },
  },
});

export const { updateEventTile } = eventSlice.actions;
