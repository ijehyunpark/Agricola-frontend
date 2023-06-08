import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Participant, Player, PlayerReducerState, UpdateUserInfo, PlayerResources, ResourceType } from '../../interface/interfaces';

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
    updatePlayersInfo: (state, action: PayloadAction<UpdateUserInfo>) => {
      state.participants = action.payload.participants;
      state.players = action.payload.players;
    },
    updateMyInfo: (state, action: PayloadAction<Participant>) => {
      state.myInfo = action.payload;
    },
  },
});

export const { updatePlayersInfo, updateMyInfo } = playerSlice.actions;
