import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface roomState {
  id: number;
  name: string;
  capacity: number;
  participantNumber: number;
}

const initialState: roomState = {
  id: 0,
  name: '',
  capacity: 4,
  participantNumber: 0,
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    incrementParticipant: (state) => {
      state.participantNumber += 1;
    },
    decrementParticipant: (state) => {
      state.participantNumber -= 1;
    },
    saveRoomInfo: (state, action: PayloadAction<roomState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.capacity = action.payload.capacity;
      state.participantNumber = action.payload.participantNumber;
    },
  },
});

export const { incrementParticipant, decrementParticipant, saveRoomInfo } = roomSlice.actions;
