import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Participant, Player, PlayerReducerState, PlayerResources, ResourceType } from '../../interface/interfaces';

const initialState: PlayerReducerState = {
  myInfo: {
    id: 0,
    username: '',
  },
  participants: [],
  players: [],
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updatePlayersInfo: (state, action: PayloadAction<PlayerReducerState>) => {
      state.myInfo = action.payload.myInfo;
      state.participants = action.payload.participants;
      state.players = action.payload.players;
    },
  },
});

export const { updatePlayersInfo } = playerSlice.actions;
