import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './reducers/sampleReducer';
import { modalSlice } from './reducers/modalReducer';
import { roomSlice } from './reducers/roomReducer';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    modal: modalSlice.reducer,
    room: roomSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
