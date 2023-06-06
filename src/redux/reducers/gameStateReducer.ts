import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from '../../interface/interfaces';

const initialState: GameState = {
  round: 0,
  gameProgress: 'Finish',
  playerId: 0,
};

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    updateGameState: (state, action: PayloadAction<GameState>) => {
      state.round = action.payload.round;
      state.gameProgress = action.payload.gameProgress;
      state.playerId = action.payload.playerId;
    },
  },
});

export const { updateGameState } = gameStateSlice.actions;
