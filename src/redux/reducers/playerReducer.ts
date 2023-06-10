import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Participant, PlayerAnimal, UpdateAnimal, PlayerReducerState, UpdateUserInfo, ResidentCount } from '../../interface/interfaces';

const initialState: PlayerReducerState = {
  myInfo: {
    id: 0,
    username: '',
    SHEEP: 0,
    WILD_BOAR: 0,
    CATTLE: 0,
    residentCount: 2,
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
    updateMyInfo: (state, action: PayloadAction<Participant & PlayerAnimal & ResidentCount>) => {
      state.myInfo = action.payload;
    },
    updateMyAnimals: (state, action: PayloadAction<UpdateAnimal>) => {
      state.myInfo[action.payload.name] = action.payload.count;
    },
    updateResident: (state, action: PayloadAction<ResidentCount>) => {
      state.myInfo['residentCount'] = action.payload.residentCount;
    },
  },
});

export const { updatePlayersInfo, updateMyInfo, updateMyAnimals, updateResident } = playerSlice.actions;
