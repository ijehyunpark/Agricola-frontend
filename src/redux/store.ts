import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './reducers/modalReducer';
import { roomSlice } from './reducers/roomReducer';
import { playerSlice } from './reducers/playerReducer';
import { gameStateSlice } from './reducers/gameStateReducer';
import { eventSlice } from './reducers/eventTileReducer';
import { cardSlice } from './reducers/cardReducer';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    room: roomSlice.reducer,
    player: playerSlice.reducer,
    gameState: gameStateSlice.reducer,
    event: eventSlice.reducer,
    card: cardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
